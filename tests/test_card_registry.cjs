const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {test} = require('node:test');

function loadCard() {
  const definitions = new Map();
  class HTMLElement {
    attachShadow() {
      this.shadowRoot = {innerHTML: '', querySelectorAll: () => []};
    }
  }
  const context = vm.createContext({HTMLElement, window: {}, customElements: {
    get: (name) => definitions.get(name),
    define: (name, element) => definitions.set(name, element),
  }});
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../thermopro-thermometer-card.js'), 'utf8'), context);
  const card=new (definitions.get('thermopro-thermometer-card'))();
  card.testTranslations=vm.runInContext('CARD_TRANSLATIONS',context);
  return card;
}

async function configureCard(config, includeTemperature = true) {
  const card = loadCard();
  // Shape used by config/entity_registry/list: no domain property.
  const rows = [
    ['sensor.thermopro_tp25_probe_1_temperature', 'Probe 1 temperature'],
    ['sensor.thermopro_tp25_probe_1_alarm_profile', 'Probe 1 alarm profile'],
    ['binary_sensor.thermopro_tp25_connection', 'Connection'],
    ['switch.thermopro_tp25_device_alarm_sound', 'Device alarm sound'],
  ].filter(([id]) => includeTemperature || !id.endsWith('_temperature'))
    .map(([entity_id, original_name]) => ({entity_id, original_name, platform: 'thermopro', device_id: 'tp25-device', disabled_by: null}));
  const states = {
    'sensor.thermopro_tp25_probe_1_temperature': {state: '31.5', attributes: {device_class: 'temperature', unit_of_measurement: '°C'}},
    'sensor.thermopro_tp25_probe_1_alarm_profile': {state: 'off', attributes: {}},
    'binary_sensor.thermopro_tp25_connection': {state: 'on', attributes: {}},
    'switch.thermopro_tp25_device_alarm_sound': {state: 'on', attributes: {}},
  };
  card.setConfig(config);
  card.hass = {language:"de",states, callWS: async ({type}) => {
    if (type === 'config/entity_registry/list') return rows;
    if (type === 'config/device_registry/list') return [{id: 'tp25-device', name: 'ThermoPro TP25', model: 'TP25'}];
    return [];
  }};
  await new Promise(setImmediate);
  return card;
}

test('HA registry response without domain renders probe, alarm controls and connection', async () => {
  const card = await configureCard({device_id: 'tp25-device'});
  const html = card.shadowRoot.innerHTML;
  assert.match(html, /Fühler 1/);
  assert.match(html, /31\.5/);
  assert.match(html, /data-save-profile="1"/);
  assert.match(html, /data-toggle="switch\.thermopro_tp25_device_alarm_sound"/);
  assert.match(html, /Verbunden/);
  assert.equal(card._registryError, null);
});

test('single ThermoPro device is selected automatically', async () => {
  const card = await configureCard({});
  assert.equal(card._selectedDeviceId, 'tp25-device');
  assert.match(card.shadowRoot.innerHTML, /Fühler 1/);
});

test('missing temperature entities render empty state without entity_id exception', async () => {
  const card = await configureCard({device_id: 'tp25-device'}, false);
  assert.match(card.shadowRoot.innerHTML, /keine Temperaturfühler gefunden/);
});

test('unmatched device ID explains the selection issue', async () => {
  const card = await configureCard({device_id: 'wrong-device'});
  assert.match(card.shadowRoot.innerHTML, /keine aktiven ThermoPro-Entitäten gefunden/);
  assert.equal(card._selectedDeviceId, null);
});

function addProbe(card, number, connectedState, rawState, value) {
  const temp = `sensor.tp25_probe_${number}_temperature`;
  const connected = `binary_sensor.tp25_probe_${number}_connected`;
  const profile = `sensor.tp25_probe_${number}_alarm_profile`;
  for (const [entity_id, original_name] of [[temp, `Probe ${number} temperature`], [connected, `Probe ${number} connected`], [profile, `Probe ${number} alarm profile`]]) {
    card._registry.push({entity_id, original_name, domain: entity_id.split('.')[0]});
  }
  card._hass.states[temp] = {state: value, attributes: {device_class: 'temperature', unit_of_measurement: '°C'}};
  card._hass.states[connected] = {state: connectedState, attributes: {raw_state: rawState}};
  card._hass.states[profile] = {state: 'off', attributes: {}};
}

test('unplugged probes are absent from temperatures and alarm settings', async () => {
  const card = await configureCard({device_id: 'tp25-device'});
  addProbe(card, 2, 'off', 'missing', 'unknown');
  card.render();
  assert.match(card.shadowRoot.innerHTML, /Fühler 1/);
  assert.doesNotMatch(card.shadowRoot.innerHTML, /Fühler 2|data-save-profile="2"/);
  card._hass.states['binary_sensor.tp25_probe_2_connected'] = {state: 'on', attributes: {raw_state: 'valid'}};
  card._hass.states['sensor.tp25_probe_2_temperature'].state = '42.1';
  card.render();
  assert.match(card.shadowRoot.innerHTML, /Fühler 2/);
  assert.match(card.shadowRoot.innerHTML, /data-save-profile="2"/);
});

test('outage keeps last attached probe visible with no stale numeric reading', async () => {
  const card = await configureCard({device_id: 'tp25-device'});
  addProbe(card, 3, 'unavailable', 'valid', 'unavailable');
  card.render();
  assert.match(card.shadowRoot.innerHTML, /Fühler 3/);
  assert.match(card.shadowRoot.innerHTML, /Kein aktueller Messwert/);
});

test('card uses HA theme and collapses settings by default', async () => {
  const card = await configureCard({device_id: 'tp25-device'});
  assert.match(card.shadowRoot.innerHTML, /var\(--ha-card-background,var\(--card-background-color\)\)/);
  assert.match(card.shadowRoot.innerHTML, /data-section="temperatures" open/);
  assert.match(card.shadowRoot.innerHTML, /data-section="alarms" ><summary>/);
  assert.match(card.shadowRoot.innerHTML, /data-section="settings" ><summary>/);
  assert.doesNotMatch(card.shadowRoot.innerHTML, /radial-gradient/);
});

test('repeated clicks do not queue duplicate commands while one is pending', async () => {
  const card = await configureCard({device_id: 'tp25-device'});
  let finish;
  let calls = 0;
  card._hass.callService = () => { calls++; return new Promise((resolve) => { finish = resolve; }); };
  const pending = card.call('switch', 'turn_off', {entity_id: 'switch.tp25_beeper'});
  await card.call('switch', 'turn_off', {entity_id: 'switch.tp25_beeper'});
  assert.equal(calls, 1);
  finish();
  await pending;
  assert.equal(card._pendingCall, false);
});

test('active preset name is derived from confirmed mode and threshold', async () => {
  const card = await configureCard({device_id: 'tp25-device'});
  card._hass.states['sensor.thermopro_tp25_probe_1_alarm_profile'] = {
    state: 'target', attributes: {high_celsius: 55, saved_presets: [{name: 'Lachs', mode: 'target', high: 55}]},
  };
  card.render();
  assert.match(card.shadowRoot.innerHTML, /class="profile-name" title="Lachs">Lachs/);
  assert.match(card.shadowRoot.innerHTML, /Ziel 55 °C/);
  // An edited target no longer carries the old preset's name.
  card._hass.states['sensor.thermopro_tp25_probe_1_alarm_profile'].attributes.high_celsius = 60;
  card.render();
  assert.match(card.shadowRoot.innerHTML, /class="profile-name" title="Eigener Zielwert"/);
});

test('ambiguous preset values use a selected name only when it matches readback', async () => {
  const card = await configureCard({device_id: 'tp25-device'});
  card._hass.states['sensor.thermopro_tp25_probe_1_alarm_profile'] = {
    state: 'target', attributes: {high_celsius: 55, saved_presets: [
      {name: 'Lachs', mode: 'target', high: 55}, {name: 'Fisch', mode: 'target', high: 55},
    ]},
  };
  const probe = {n: 1, profile: {entity_id: 'sensor.thermopro_tp25_probe_1_alarm_profile'}};
  assert.equal(card.profileSummary(probe).name, 'Eigener Zielwert');
  card._appliedPresets.set(1, 'Fisch');
  assert.equal(card.profileSummary(probe).name, 'Fisch');
  card._hass.states[probe.profile.entity_id].attributes.high_celsius = 65;
  assert.equal(card.profileSummary(probe).name, 'Eigener Zielwert');
});

test('HA dictionary history with compressed entries is displayed inline with actual times', async () => {
  const card = await configureCard({device_id: 'tp25-device'});
  const id = 'sensor.thermopro_tp25_probe_1_temperature';
  const now = Date.now() / 1000;
  card._hass.callWS = async () => ({[id]: [
    {s: '0', lu: now - 3600}, {s: '10', lu: now - 3500},
    {s: 'unavailable', lu: now - 3000}, {s: '31.5', lu: now - 10},
  ]});
  card._historyAt = 0;
  await card.loadHistory();
  assert.equal(card._history[id][0].v, 0);
  assert.equal(card._history[id][2].v, null);
  const chart = card.chart(card._registry.find((entry) => entry.entity_id === id));
  assert.match(chart, /0\.0–31\.5 °C/);
  const points = chart.match(/d="([ML\d., ]+)"/)[1];
  assert.equal((points.match(/M/g) || []).length, 2, 'unavailable period breaks the line');
  const positions = [...points.matchAll(/[ML]([\d.]+),/g)].map((match) => Number(match[1]));
  assert.ok(positions[1] - positions[0] < positions[2] - positions[1], 'time spacing must be preserved');
  assert.match(card.shadowRoot.innerHTML, /profile-detail[\s\S]*Temperaturverlauf/);
});

test('core basic temperature and battery entities work without optional controls', async () => {
  const card=loadCard();
  const rows=[['sensor.core_probe_1_temperature','Probe 1 temperature'],['sensor.core_probe_2_temperature','Probe 2 temperature'],['sensor.core_battery','Battery']].map(([entity_id,original_name])=>({entity_id,original_name,platform:'thermopro',device_id:'basic',disabled_by:null}));
  card.setConfig({});
  card.hass={language:"de",states:{'sensor.core_probe_1_temperature':{state:'42.3',attributes:{device_class:'temperature',unit_of_measurement:'°C'}},'sensor.core_probe_2_temperature':{state:'unknown',attributes:{device_class:'temperature',unit_of_measurement:'°C'}},'sensor.core_battery':{state:'96',attributes:{device_class:'battery',unit_of_measurement:'%'}}},callWS:async ({type})=>type==='config/entity_registry/list'?rows:type==='config/device_registry/list'?[{id:'basic',name:'ThermoPro TP25',model:'TP25'}]:[]};
  await new Promise(setImmediate);
  const html=card.shadowRoot.innerHTML;
  assert.match(html,/42\.3/);assert.match(html,/Verbunden/);assert.match(html,/96/);
  assert.doesNotMatch(html,/data-save-profile=/);assert.doesNotMatch(html,/data-save-preset/);assert.doesNotMatch(html,/data-button=/);assert.doesNotMatch(html,/Fühler 2/);
});

test('core switch ignores unavailable controls left in the HACS entity registry', async () => {
  const card = await configureCard({device_id: 'tp25-device'});
  card._hass.services = {};
  card._hass.states['timer.tp25_probe_1'] = {state: 'idle', attributes: {}};
  for (const [id, state] of Object.entries(card._hass.states)) {
    if (!id.endsWith('_temperature')) state.state = 'unavailable';
  }
  addProbe(card, 2, 'off', 'missing', '42.1');
  card.render();
  const html = card.shadowRoot.innerHTML;
  assert.match(html, /Verbunden/);
  assert.match(html, /Fühler 2/);
  assert.match(html, /42\.1/);
  assert.doesNotMatch(html, /data-save-profile=|data-save-preset|data-toggle=|data-press=/);
  assert.doesNotMatch(html, /<div class="profile">|Kein aktives Profil verfügbar|data-timer=/);
  assert.match(html, /<article class="probe basic/);
});

test('HACS controls remain present during a radio outage when services exist', async () => {
  const card = await configureCard({device_id: 'tp25-device'});
  card._hass.services = {thermopro: {set_alarm_profile: {}}};
  card._hass.states['binary_sensor.thermopro_tp25_connection'].state = 'off';
  card._hass.states['sensor.thermopro_tp25_probe_1_temperature'].state = 'unavailable';
  card.render();
  assert.match(card.shadowRoot.innerHTML, /Getrennt/);
  assert.match(card.shadowRoot.innerHTML, /data-toggle="switch\.thermopro_tp25_device_alarm_sound"/);
});

for (const [mode, value, unit] of [['ha', '25.0', '°C'], ['device', '77.0', '°F'], ['celsius', '25.0', '°C'], ['fahrenheit', '77.0', '°F']]) {
  test(`temperature display mode ${mode} converts the reading correctly`, async () => {
    const card = await configureCard({device_id: 'tp25-device', temperature_unit: mode});
    card._hass.states['sensor.thermopro_tp25_probe_1_temperature'] = {state: '25', attributes: {device_class: 'temperature', unit_of_measurement: '°C', device_display_unit: 'FAHRENHEIT'}};
    card.render();
    assert.ok(card.shadowRoot.innerHTML.includes(`>${value}<small> ${unit}</small>`));
  });
}

test('device display mode follows a physical unit change and falls back to HA when unknown', async () => {
  const card = await configureCard({device_id: 'tp25-device', temperature_unit: 'device'});
  const sensor = card._hass.states['sensor.thermopro_tp25_probe_1_temperature'];
  sensor.state = '0';
  sensor.attributes.device_display_unit = 'FAHRENHEIT';
  card.render();
  assert.ok(card.shadowRoot.innerHTML.includes('>32.0<small> °F</small>'));
  sensor.attributes.device_display_unit = 'CELSIUS';
  card.render();
  assert.ok(card.shadowRoot.innerHTML.includes('>0.0<small> °C</small>'));
  delete sensor.attributes.device_display_unit;
  card.render();
  assert.ok(card.shadowRoot.innerHTML.includes('>0.0<small> °C</small>'));
});

test('explicit Celsius converts an HA Fahrenheit state once and keeps alarm input units explicit', async () => {
  const card = await configureCard({device_id: 'tp25-device', temperature_unit: 'celsius'});
  const sensor = card._hass.states['sensor.thermopro_tp25_probe_1_temperature'];
  sensor.state = '77';
  sensor.attributes.unit_of_measurement = '°F';
  card.render();
  assert.ok(card.shadowRoot.innerHTML.includes('>25.0<small> °C</small>'));
  assert.match(card.shadowRoot.innerHTML, /Ziel \/ Maximum °C/);
});

test('history converts each record from its own unit without mutating the cached readings', async () => {
  const card = await configureCard({device_id: 'tp25-device', temperature_unit: 'fahrenheit'});
  const id = 'sensor.thermopro_tp25_probe_1_temperature';
  const now = Date.now() / 1000;
  card._hass.callWS = async (request) => {
    assert.equal(request.no_attributes, false);
    assert.equal(request.minimal_response, false);
    return {[id]: [
      {s: '0', lu: now - 3600, a: {unit_of_measurement: '°C'}},
      {s: '50', lu: now - 3500, a: {unit_of_measurement: '°F'}},
      {s: 'unavailable', lu: now - 3000, a: {unit_of_measurement: '°F'}},
      {s: '212', lu: now - 10, a: {unit_of_measurement: '°F'}},
    ]};
  };
  card._historyAt = 0;
  await card.loadHistory();
  const entry = card._registry.find((e) => e.entity_id === id);
  assert.match(card.chart(entry), /32\.0–212\.0 °F/);
  card._config.temperature_unit = 'celsius';
  assert.match(card.chart(entry), /0\.0–100\.0 °C/);
  assert.equal(card._history[id][1].v, 50);
  assert.equal(card._history[id][2].v, null);
});

test('profile summary uses the selected display unit while thresholds remain Celsius', async () => {
  const card = await configureCard({device_id: 'tp25-device', temperature_unit: 'fahrenheit'});
  card._hass.states['sensor.thermopro_tp25_probe_1_alarm_profile'] = {state: 'range', attributes: {low_celsius: 10, high_celsius: 60}};
  card.render();
  assert.match(card.shadowRoot.innerHTML, /50\.0–140\.0 °F/);
  assert.match(card.shadowRoot.innerHTML, /Minimum °C/);
});

test('unknown temperature display settings fail with a clear configuration error', async () => {
  const card = loadCard();
  assert.throws(() => card.setConfig({temperature_unit: 'random'}), /temperature_unit/);
});

test('translated or renamed entities keep profiles and controls through stable unique IDs', async () => {
  const card = await configureCard({device_id:'tp25-device',temperature_unit:'device'});
  const german = ['Fühler 1 Temperatur','Fühler 1 Alarmprofil','Verbindung','Alarmton am Gerät'];
  for (const [index,entry] of card._registry.entries()) {
    entry.unique_id='AA_'+['probe_1_temperature','probe_1_alarm_profile','connection','device_alarm'][index];
    entry.original_name=german[index];
  }
  const extra=[
    ['button.renamed_ack','acknowledge_alarm','Quittieren','unknown',{}],
    ['binary_sensor.renamed_alarm','alarm','Warnung','on',{}],
    ['sensor.renamed_battery','battery','Batterie','95',{device_class:'battery'}],
    ['select.renamed_unit','display_unit','Temperatureinheit am Gerät','Fahrenheit',{}],
    ['switch.renamed_connection','connection_enabled','Bluetooth-Verbindung','on',{}],
  ];
  for(const [entity_id,role,original_name,state,attributes] of extra) {
    card._registry.push({entity_id,domain:entity_id.split('.')[0],unique_id:'AA_'+role,original_name});
    card._hass.states[entity_id]={state,attributes};
  }
  card._hass.services={thermopro:{set_alarm_profile:{}}};
  card._hass.states['sensor.thermopro_tp25_probe_1_temperature'].attributes.device_display_unit='FAHRENHEIT';
  card.render();
  const html=card.shadowRoot.innerHTML;
  assert.match(html,/data-save-profile="1"/);
  assert.match(html,/data-toggle="switch\.thermopro_tp25_device_alarm_sound"/);
  assert.match(html,/data-press="button\.renamed_ack"/);
  assert.match(html,/data-entity="select\.renamed_unit"/);
  assert.match(html,/data-toggle="switch\.renamed_connection"/);
  assert.match(html,/95/);
  assert.match(html,/88\.7/);
});

async function providerFixture(platform, model, measurements) {
  const card=loadCard(), states={};
  const rows=measurements.map(([key,deviceClass,value,unit,attrs={}])=>{
    const entity_id=`${attrs.domain||'sensor'}.${key}`;
    states[entity_id]={state:String(value),attributes:{device_class:deviceClass,unit_of_measurement:unit,...attrs}};
    return {entity_id,unique_id:`example_${key}`,original_name:key.replaceAll('_',' '),platform,device_id:'provider-device'};
  });
  card.setConfig({});card.hass={language:"de",states,services:{},callService:async()=>{},callWS:async m=>m.type==='config/entity_registry/list'?rows:m.type==='config/device_registry/list'?[{id:'provider-device',name:model,model}]:{}};
  await new Promise(setImmediate);return card;
}

test('Core indoor thermometers include humidity and neutral temperature labels', async()=>{
  const card=await providerFixture('thermopro','TP357',[
    ['temperature','temperature',22.3,'°C'],['humidity','humidity',48.2,'%'],['battery','battery',50,'%']]);
  const html=card.shadowRoot.innerHTML;
  assert.match(html,/22\.3/);assert.match(html,/Luftfeuchtigkeit/);assert.match(html,/48\.2/);
  assert.doesNotMatch(html,/Fühler 1|data-save-profile=|data-save-preset/);
});

test('TempSpike groups multiple measurement positions and batteries per physical probe',async()=>{
  const card=await providerFixture('thermopro','TP972S',[
    ['internal_temperature_probe_1','temperature',55,'°C'],
    ['internal_center_temperature_probe_1','temperature',54,'°C'],
    ['internal_end_temperature_probe_1','temperature',53,'°C'],
    ['ambient_temperature_probe_1','temperature',125,'°C'],['battery_probe_1','battery',88,'%'],
    ['internal_temperature_probe_2','temperature',60,'°C'],['ambient_temperature_probe_2','temperature',130,'°C'],['battery_probe_2','battery',72,'%']]);
  const html=card.shadowRoot.innerHTML;
  assert.equal((html.match(/<article class="probe /g)||[]).length,2);
  for(const role of ['Kern','Mitte','Ende','Umgebung'])assert.ok(html.includes(role));
  assert.match(html,/Akku Fühler 1[\s\S]*88/);assert.match(html,/Akku Fühler 2[\s\S]*72/);
  assert.doesNotMatch(html,/data-save-profile=/);
});

for(const [platform,model] of [['tp90x_multi','TP902'],['tp90x_multi','TP920'],['tp90x_multi','TP904'],['thermopro_meat','TP902']]){
  test(`${platform} ${model} automatically selects and renders its temperature entities`,async()=>{
    const card=await providerFixture(platform,model,[['probe_1','temperature',55.3,'°C'],['battery','battery',91,'%']]);
    assert.equal(card._selectedDeviceId,'provider-device');assert.match(card.shadowRoot.innerHTML,/55\.3/);
    assert.doesNotMatch(card.shadowRoot.innerHTML,/data-save-profile=|data-save-preset/);
  });
}

test('TP90x maps exposed controls without confusing enabled alarm with active alarm',async()=>{
  const card=await providerFixture('tp90x_multi','TP920',[
    ['probe_1','temperature',55,'°C'],
    ['units',null,'Fahrenheit',null,{domain:'select',options:['Celsius','Fahrenheit']}],
    ['alarm_sound',null,'on',null,{domain:'switch'}],
    ['probe_1_alarm',null,'on',null,{domain:'switch'}],
    ['probe_1_min','temperature',100,'°F',{domain:'number',min:-100,max:1000,step:0.1}],
    ['probe_1_max','temperature',180,'°F',{domain:'number',min:-100,max:1000,step:0.1}],
    ['alarm_snooze',null,'unknown',null,{domain:'button'}],['backlight',null,'unknown',null,{domain:'button'}]]);
  const html=card.shadowRoot.innerHTML;
  assert.match(html,/data-entity="select\.units"/);assert.match(html,/data-toggle="switch\.alarm_sound"/);
  assert.match(html,/data-toggle="switch\.probe_1_alarm"/);assert.match(html,/data-number="number\.probe_1_min"/);
  assert.match(html,/Minimum °F/);assert.match(html,/data-press="button\.alarm_snooze"/);
  assert.match(html,/data-press="button\.backlight"/);assert.doesNotMatch(html,/Alarm aktiv|data-save-preset|data-save-profile=/);
  card._config.temperature_unit='device';card.render();assert.match(card.shadowRoot.innerHTML,/>131\.0<small> °F/);
});

test('a global TP25 service does not give another model TP25 controls',async()=>{
  const card=await providerFixture('thermopro','TP960',[['internal_temperature_probe_1','temperature',55,'°C']]);
  card._hass.services={thermopro:{set_alarm_profile:{}}};card.render();
  assert.doesNotMatch(card.shadowRoot.innerHTML,/Kein aktives Profil|data-save-profile=|data-save-preset|data-timer=/);
});

test('published Core model names retain family readings without inheriting TP25 controls',async()=>{
  const indoor=['TP357','TP357S','TP358','TP358S','TP359','TP393'];
  const spike=['TP960','TP960R','TP962','TP962R','TP970','TP970R','TP972S'];
  for(const model of [...indoor,...spike]){
    const measurements=indoor.includes(model)?[
      ['temperature','temperature',22.3,'°C'],['humidity','humidity',48.2,'%'],['battery','battery',50,'%']]:[
      ['internal_temperature_probe_1','temperature',55,'°C'],['ambient_temperature_probe_1','temperature',125,'°C'],['battery_probe_1','battery',88,'%']];
    const card=await providerFixture('thermopro',model,measurements);
    card._hass.services={thermopro:{set_alarm_profile:{}}};card.render();
    assert.equal(card._selectedDeviceId,'provider-device',model);
    assert.match(card.shadowRoot.innerHTML,indoor.includes(model)?/48\.2/:/125\.0/,model);
    assert.doesNotMatch(card.shadowRoot.innerHTML,/data-save-profile=|data-save-preset|Kein aktives Profil/,model);
  }
});

test('Core clock synchronization is exposed only when its button entity exists',async()=>{
  const card=await providerFixture('thermopro','TP358',[
    ['temperature','temperature',22,'°C'],['set_datetime',null,'unknown',null,{domain:'button'}]]);
  assert.match(card.shadowRoot.innerHTML,/Uhrzeit synchronisieren/);
  assert.match(card.shadowRoot.innerHTML,/data-press="button\.set_datetime"/);
  assert.doesNotMatch(card.shadowRoot.innerHTML,/data-save-profile=/);
});

test('TempSpike retains a grouped probe when one measurement channel is unavailable',async()=>{
  const card=await providerFixture('thermopro','TP970',[
    ['internal_temperature_probe_1','temperature','unavailable','°C'],['ambient_temperature_probe_1','temperature',125,'°C']]);
  const html=card.shadowRoot.innerHTML;assert.equal((html.match(/<article class="probe /g)||[]).length,1);
  assert.match(html,/125\.0/);assert.match(html,/>AKTIV</);assert.match(html,/Daten verfügbar/);
});

test('unrelated integrations are not selected by a ThermoPro-like device name',async()=>{
  const card=await providerFixture('unrelated','TP25',[['probe_1','temperature',25,'°C']]);
  assert.equal(card._selectedDeviceId,null);
});

test('card follows HA English and German and supports regional language codes',async()=>{
  const card=await configureCard({device_id:'tp25-device'});
  card._hass.language='en-US';card.render();
  let html=card.shadowRoot.innerHTML;
  for(const label of ['Probe 1','Temperatures','Connected','Alarm limits','Saved presets','Device settings','Turn sound off','Apply'])assert.ok(html.includes(label),label);
  assert.doesNotMatch(html,/Fühler|Geräteeinstellungen|Gespeicherte Presets|Übernehmen/);
  card._hass.language='de-DE';card.render();assert.match(card.shadowRoot.innerHTML,/Fühler 1/);assert.match(card.shadowRoot.innerHTML,/Geräteeinstellungen/);
});

test('explicit card language overrides HA and unsupported HA languages fall back to English',async()=>{
  const card=await configureCard({device_id:'tp25-device'});
  card._hass.language='de';card._config.language='en';card.render();assert.match(card.shadowRoot.innerHTML,/Device settings/);
  card._hass.language='en';card._config.language='de';card.render();assert.match(card.shadowRoot.innerHTML,/Geräteeinstellungen/);
  card._config.language='auto';card._hass.language='fr';card.render();assert.match(card.shadowRoot.innerHTML,/Device settings/);
  assert.throws(()=>card.setConfig({language:'xx'}),/language/);
});

test('English profile summaries and chart placeholders are translated without changing preset names',async()=>{
  const card=await configureCard({device_id:'tp25-device'});card._hass.language='en';
  const e=card._registry.find(e=>e.entity_id.endsWith('_alarm_profile'));
  card._hass.states[e.entity_id]={state:'target',attributes:{high_celsius:55,saved_presets:[{name:'Mein Lachs',mode:'target',high:55}]}};
  card.render();const html=card.shadowRoot.innerHTML;
  assert.match(html,/Mein Lachs/);assert.match(html,/Target 55\.0 °C/);assert.match(html,/No history data yet/);
  assert.match(html,/Target \/ maximum °C/);assert.doesNotMatch(html,/Ziel \/ Maximum|Noch keine Verlaufsdaten/);
});

test('selection errors follow language changes without reloading registry',async()=>{
  const card=await configureCard({device_id:'missing'});card._hass.language='en';card.render();
  assert.match(card.shadowRoot.innerHTML,/No active ThermoPro entities/);
  card._hass.language='de';card.render();assert.match(card.shadowRoot.innerHTML,/keine aktiven ThermoPro-Entitäten/);
});

test('measurement roles and TP90x controls are translated in English',async()=>{
  const card=await providerFixture('thermopro','TP972S',[
    ['internal_temperature_probe_1','temperature',55,'°C'],['internal_center_temperature_probe_1','temperature',54,'°C'],['ambient_temperature_probe_1','temperature',125,'°C'],['battery_probe_1','battery',88,'%']]);
  card._hass.language='en';card.render();const html=card.shadowRoot.innerHTML;
  for(const label of ['Core','Center','Ambient','Probe 1 battery','Data available'])assert.ok(html.includes(label),label);
  assert.doesNotMatch(html,/Umgebung|Mitte|Akku Fühler/);
});


test('English and German message dictionaries contain matching placeholders and render every key',()=>{
  const card=loadCard(), messages=card.testTranslations;
  assert.deepEqual(Object.keys(messages.de),Object.keys(messages.en));
  for(const key of Object.keys(messages.en)){
    assert.equal(typeof messages.de[key],'string',key);
    const placeholders=value=>[...value.matchAll(/\{(\w+)\}/g)].map(m=>m[1]).sort();
    assert.deepEqual(placeholders(messages.en[key]),placeholders(messages.de[key]),key);
    for(const language of ['en','de']){
      card._config.language=language;
      assert.equal(typeof card.t(key,{number:1,count:2,name:'Example',value:55,unit:'°C',error:'Example',registry:'entities',id:'example',names:['Example']}),'string');
    }
  }
});

test('no configured device and registry errors have localized messages',async()=>{
  const card=await providerFixture('unrelated','TP25',[['probe_1','temperature',25,'°C']]);
  card._hass.language='de';card.render();assert.match(card.shadowRoot.innerHTML,/Noch kein ThermoPro-Gerät/);
  card._hass.language='en';card.render();assert.match(card.shadowRoot.innerHTML,/No ThermoPro device is configured/);
  card._hass={language:'de'};await assert.rejects(()=>card.ws({}),/WebSocket-API/);
});

test('preset labels escape untrusted threshold attributes', async () => {
  const card = await configureCard({device_id: 'tp25-device'});
  card._hass.states['sensor.thermopro_tp25_probe_1_alarm_profile'].attributes.saved_presets = [
    {name: 'Unsafe', mode: 'range', high: '<img src=x onerror=alert(1)>', low: '<svg onload=alert(1)>'},
  ];
  card.render();
  assert.doesNotMatch(card.shadowRoot.innerHTML, /<img|<svg onload/);
  assert.match(card.shadowRoot.innerHTML, /&lt;svg onload/);
});
