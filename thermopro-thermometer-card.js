/* ThermoPro display card, UI revision 0.2.2. A single configured device is auto-detected; otherwise
 * select a device in the visual editor or give its exact name in YAML. */
const CARD_GERMAN = {
  "Probe {number}": "Fühler {number}",
  "Temperature": "Temperatur",
  "Temperature {number}": "Temperatur {number}",
  "Temperatures": "Temperaturen",
  "{count} probes": "{count} Fühler",
  "Core": "Kern",
  "Tip": "Spitze",
  "Center": "Mitte",
  "End": "Ende",
  "Ambient": "Umgebung",
  "Probe {number} battery": "Akku Fühler {number}",
  "Battery": "Akku",
  "Signal": "Signal",
  "Humidity": "Luftfeuchtigkeit",
  "Connected": "Verbunden",
  "Disconnected": "Getrennt",
  "Data available": "Daten verfügbar",
  "No data": "Keine Daten",
  "Active alarm": "Alarm aktiv",
  "ACTIVE": "AKTIV",
  "NO DATA": "KEINE DATEN",
  "ALARM": "ALARM",
  "Alarm limits": "Alarmgrenzen",
  "Saved presets": "Gespeicherte Presets",
  "Device settings": "Geräteeinstellungen",
  "History": "Verlauf",
  "12 hours": "12 Stunden",
  "Temperature history {name}": "Temperaturverlauf {name}",
  "Loading history…": "Verlauf wird geladen …",
  "No history data yet": "Noch keine Verlaufsdaten",
  "Device display": "Gerätedisplay",
  "Temperature unit": "Temperatureinheit",
  "Turn sound off": "Signalton ausschalten",
  "Turn sound on": "Signalton einschalten",
  "Pause connection": "Verbindung pausieren",
  "Connect": "Verbinden",
  "Snooze alarm": "Alarm pausieren",
  "Backlight": "Beleuchtung",
  "Synchronize clock": "Uhrzeit synchronisieren",
  "Acknowledge alarm": "Alarm quittieren",
  "Disable alarm": "Alarm deaktivieren",
  "Enable alarm": "Alarm aktivieren",
  "Alarm": "Alarm",
  "Off": "Aus",
  "Target": "Zielwert",
  "Target temperature": "Zieltemperatur",
  "Range": "Bereich",
  "Target / maximum": "Ziel / Maximum",
  "Minimum": "Minimum",
  "Maximum": "Maximum",
  "Apply": "Übernehmen",
  "Saved preset": "Gespeichertes Preset",
  "Choose a preset": "Preset wählen",
  "Apply preset": "Anwenden",
  "Name": "Name",
  "Alarm mode": "Alarmart",
  "e.g. Salmon": "z. B. Lachs",
  "Save": "Speichern",
  "Edit": "Bearbeiten",
  "Delete": "Löschen",
  "Presets are stored in Home Assistant. The same name updates a preset.": "Presets bleiben in Home Assistant gespeichert. Gleicher Name aktualisiert ein Preset.",
  "No active profile available": "Kein aktives Profil verfügbar",
  "Target {value} {unit}": "Ziel {value} {unit}",
  "No temperature alarm": "Keine Temperaturwarnung",
  "Device profile": "Geräteprofil",
  "Alarm off": "Alarm aus",
  "Custom target": "Eigener Zielwert",
  "Custom range": "Eigener Bereich",
  "No current reading": "Kein aktueller Messwert",
  "off": "aus",
  "target {value} °C": "Ziel {value} °C",
  "HA timer": "HA-Timer",
  "1 probe": "1 Fühler",
  "Idle": "Bereit",
  "Paused": "Pausiert",
  "Active": "Aktiv",
  "Unavailable": "Nicht verfügbar",
  "Unknown": "Unbekannt",
  "Pause": "Pause",
  "Stop": "Stopp",
  "Start 15 min": "15 min starten",
  "No temperature probes were found for this device.": "Für dieses Gerät wurden keine Temperaturfühler gefunden.",
  "No probe connected.": "Kein Fühler angeschlossen.",
  "No current probe data. Waiting for a connection…": "Keine aktuellen Fühlerdaten. Warte auf Verbindung …",
  "Connecting ThermoPro…": "ThermoPro wird verbunden …",
  "Select a ThermoPro device": "ThermoPro-Gerät auswählen",
  "Could not load device entities: {error}": "Geräte-Entitäten konnten nicht geladen werden: {error}",
  "Bluetooth thermometer": "Bluetooth-Thermometer",
  "Unnamed": "Unbenannt",
  "Multiple ThermoPro devices are named “{name}”. Use device_id or a unique device name.": "Mehrere ThermoPro-Geräte heißen „{name}“. Nutze device_id oder einen eindeutigen Gerätenamen.",
  "No ThermoPro device named “{name}” was found.": "Kein ThermoPro-Gerät mit dem Namen „{name}“ gefunden.",
  "Multiple ThermoPro devices found: {names}. Set device_name to a unique name.": "Mehrere ThermoPro-Geräte gefunden: {names}. Setze device_name auf einen eindeutigen Namen.",
  "No ThermoPro device is configured in Home Assistant yet.": "Noch kein ThermoPro-Gerät in Home Assistant eingerichtet.",
  "No active ThermoPro entities were found for device_id “{id}”. Select the device again in the card editor.": "Für die device_id „{id}“ wurden keine aktiven ThermoPro-Entitäten gefunden. Bitte das ThermoPro-Gerät im Karteneditor erneut auswählen.",
  "Entity registry is unavailable": "Die Entitätsregistrierung ist nicht verfügbar",
  "Home Assistant WebSocket API is unavailable in this dashboard": "Die Home-Assistant-WebSocket-API ist in diesem Dashboard nicht verfügbar",
  "Home Assistant returned no {registry} list": "Home Assistant hat keine Liste für {registry} geliefert",
  "entity registry": "die Entitätsregistrierung",
  "device registry": "die Geräteregistrierung",
  "Probe {number} needs an upper target value.": "Für Fühler {number} fehlt der obere Zielwert.",
  "Probe {number} needs a lower limit.": "Für Fühler {number} fehlt der untere Grenzwert.",
  "Choose a preset first.": "Bitte zuerst ein Preset auswählen.",
  "Enter a name for the preset.": "Bitte einen Namen für das Preset eingeben.",
  "A temperature preset needs a target or maximum temperature.": "Für ein Temperatur-Preset fehlt Ziel- oder Maximaltemperatur.",
  "A range preset needs a minimum temperature.": "Für ein Bereichs-Preset fehlt die Minimaltemperatur.",
  "The minimum temperature must be below the maximum temperature.": "Die Minimaltemperatur muss kleiner als die Maximaltemperatur sein.",
  "ThermoPro device": "ThermoPro-Gerät",
  "Device name (only when multiple devices exist)": "Gerätename (nur wenn mehrere vorhanden sind)",
  "Display title": "Anzeigetitel",
  "Temperature display": "Temperaturanzeige",
  "HA setting": "HA-Einstellung",
  "Follow device unit": "Geräteeinheit folgen",
  "Language": "Sprache",
  "Automatic (HA language)": "Automatisch (HA-Sprache)",
  "temperature_unit must be ha, device, celsius or fahrenheit.": "temperature_unit muss ha, device, celsius oder fahrenheit sein.",
  "language must be auto, de or en.": "language muss auto, de oder en sein.",
  "Thermometer display with device entities, probe history and controls.": "Thermometeranzeige mit Geräteentitäten, Fühlerverlauf und Steuerung."
};
const CARD_TRANSLATIONS = {
  en: Object.freeze(Object.fromEntries(Object.keys(CARD_GERMAN).map(key=>[key,key]))),
  de: Object.freeze(CARD_GERMAN),
};
const cardLanguage = (hass,config={}) => {
  const requested=config.language && config.language!=="auto"?config.language:hass?.language || hass?.locale?.language || "en";
  return String(requested).toLowerCase().split(/[-_]/)[0]==="de"?"de":"en";
};
const translateCard = (hass,config,key,values={}) => {
  const language=cardLanguage(hass,config), messages=CARD_TRANSLATIONS[language];
  return (messages[key] || CARD_TRANSLATIONS.en[key] || key).replace(/\{(\w+)\}/g,(_,name)=>{
    const value=values[name];
    return Array.isArray(value)?value.map(item=>item || messages.Unnamed).join(", "):String(value ?? "");
  });
};
const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const THERMOPRO_PROVIDERS = ["thermopro", "tp90x_multi", "thermopro_meat"];
const idTail = (entry) => entry.unique_id || entry.entity_id;
const probeOf = (entry) => {
  const match = idTail(entry).match(/probe[_\s-]?(\d+)/i) || (entry.original_name || entry.name || "").match(/probe[_\s-]?(\d+)/i);
  return match ? Number(match[1]) : null;
};
const labelOf = (entry) => {
  // Roles survive translated names and user-renamed entity IDs.
  const role = String(entry.unique_id || "").toLowerCase().match(/_(probe_\d+_(?:temperature|alarm_profile|connected|alarm)|battery_raw|battery|rssi|display_unit|device_alarm|connection_enabled|connection|acknowledge_alarm|alarm)$/)?.[1];
  return role ? role.replace(/_/g," ") : (entry.original_name || entry.name || entry.entity_id).toLowerCase();
};
const identityOf = (entry) => `${entry.unique_id || entry.entity_id} ${entry.original_name || ""}`.toLowerCase().replace(/[_-]/g," ");
const measurementRole = (entry) => {
  const key=identityOf(entry);
  if (/ambient|umgebung/.test(key)) return {key:"ambient",label:"Ambient",order:3};
  if (/center|centre|mitte/.test(key)) return {key:"center",label:"Center",order:1};
  if (/internal end|end temperature|ende/.test(key)) return {key:"end",label:"End",order:2};
  if (/tip|spitze/.test(key)) return {key:"internal",label:"Tip",order:0};
  if (/internal|kern/.test(key)) return {key:"internal",label:"Core",order:0};
  return {key:"temperature",label:"Temperature",order:0};
};
const temperatureUnit = (unit) => ({"°C":"°C",C:"°C",CELSIUS:"°C","°F":"°F",F:"°F",FAHRENHEIT:"°F",K:"K","°K":"K",KELVIN:"K"})[String(unit || "").toUpperCase()];
const convertTemperature = (value, from, to) => {
  if (value == null || value === "" || !Number.isFinite(Number(value))) return null;
  const source=temperatureUnit(from), target=temperatureUnit(to), number=Number(value);
  if (!source || !target) return from === to ? number : null;
  const celsius=source==="°F"?(number-32)*5/9:source==="K"?number-273.15:number;
  return target==="°F"?celsius*9/5+32:target==="K"?celsius+273.15:celsius;
};

class ThermoProThermometerCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:"open"});
    this._config = {};
    this._configRevision = 0;
    this._registryRequest = null;
    this._historyRequest = null;
    this._registry = null;
    this._devices = null;
    this._history = {};
    this._appliedPresets = new Map();
    this._historyAt = 0;
    this._sections = new Map([["temperatures", true]]);
    this._drafts = new Map();
    this._pressedPointers = new Set();
    this._keyboardPress = false;
    this._releaseInteraction = (event) => {
      if (event.type === "blur") { this._keyboardPress = false; this._pressedPointers.clear(); }
      else if (event.type === "keyup") this._keyboardPress = false;
      else this._pressedPointers.delete(event.pointerId);
      // click is dispatched after pointerup/keyup. Replacing its target before
      // click runs loses the user's action, especially with frequent HA updates.
      clearTimeout(this._interactionTimer);
      this._interactionTimer = setTimeout(() => {
        if (this._renderDeferred) { this._renderDeferred = false; this.render(); }
      }, 0);
    };
    this.shadowRoot.addEventListener?.("pointerdown", (event) => {
      if (event.target.closest?.("button,summary,input,select")) this._pressedPointers.add(event.pointerId);
    });
    this.shadowRoot.addEventListener?.("keydown", (event) => {
      if (["Enter", " "].includes(event.key) && event.target.closest?.("button,summary")) this._keyboardPress = true;
    });
  }
  connectedCallback() {
    for (const type of ["pointerup", "pointercancel", "keyup", "blur"]) window.addEventListener(type, this._releaseInteraction, true);
  }
  disconnectedCallback() {
    for (const type of ["pointerup", "pointercancel", "keyup", "blur"]) window.removeEventListener(type, this._releaseInteraction, true);
    clearTimeout(this._interactionTimer);
    this._pressedPointers.clear();
    this._keyboardPress = false;
  }
  setConfig(config) {
    if (config.temperature_unit != null && !["ha", "device", "celsius", "fahrenheit"].includes(config.temperature_unit)) throw new Error(translateCard(this._hass,config,"temperature_unit must be ha, device, celsius or fahrenheit."));
    if (config.language != null && !["auto","de","en"].includes(config.language)) throw new Error(translateCard(this._hass,config,"language must be auto, de or en."));
    const deviceChanged=this._config.device_id!==config.device_id || this._config.device_name!==config.device_name;
    this._configRevision++;
    this._loading=false; this._historyLoading=false;
    this._registryRequest=null; this._historyRequest=null;
    if(deviceChanged){
      this._drafts.clear(); this._appliedPresets.clear(); this._history={};
      this._pressedPointers.clear(); this._keyboardPress=false; this._renderDeferred=false;
      this.shadowRoot.innerHTML="";
    }
    this._config = config; this._registry = null; this._devices = null; this._selectedDeviceId = null; this._registryError = null; this._selectionError = null; this._historyAt = 0; this.render();
    if(this._hass)this.loadRegistry();
  }
  set hass(hass) {
    this._hass = hass;
    if (!this._registry && !this._loading) this.loadRegistry();
    if (this._registry) this.loadHistory();
    if (!this.shadowRoot.activeElement?.matches("input,select")) this.render();
  }
  t(key,values={}) { return translateCard(this._hass,this._config,key,values); }
  getCardSize() { return 5; }
  static getConfigElement() { return document.createElement("thermopro-thermometer-card-editor"); }
  static getStubConfig() { return {}; }
  async loadRegistry() {
    if (!this._hass || this._loading) return;
    this._loading = true;
    const revision=this._configRevision, request=this._registryRequest={};
    this._selectionError = null;
    try {
      const [entityResult, deviceResult] = await Promise.all([
        this.ws({type:"config/entity_registry/list"}),
        this.ws({type:"config/device_registry/list"}),
      ]);
      if(revision!==this._configRevision || request!==this._registryRequest)return;
      // HA registry responses contain entity_id, but no separate domain field.
      // Normalize once for every probe/control lookup below.
      const entities = this.asList(entityResult, "entity registry")
        .filter((entry) => typeof entry?.entity_id === "string")
        .map((entry) => ({...entry, domain: entry.entity_id.split(".")[0]}));
      const devices = this.asList(deviceResult, "device registry");
      this._devices = devices;
      const integrationDeviceIds = new Set(entities.filter((e) => THERMOPRO_PROVIDERS.includes(e.platform) && e.device_id && !e.disabled_by).map((e) => e.device_id));
      const candidates = devices.filter((device) => integrationDeviceIds.has(device.id));
      let selected = this._config.device_id || null;
      if (!selected && this._config.device_name) {
        const matches = candidates.filter((device) => (device.name_by_user || device.name)?.toLowerCase() === this._config.device_name.toLowerCase());
        if (matches.length === 1) selected = matches[0].id;
        else if (matches.length > 1) this._selectionError = {key:"Multiple ThermoPro devices are named “{name}”. Use device_id or a unique device name.",values:{name:this._config.device_name}};
        else this._selectionError = {key:"No ThermoPro device named “{name}” was found.",values:{name:this._config.device_name}};
      } else if (!selected && candidates.length === 1) {
        selected = candidates[0].id;
      } else if (!selected && candidates.length > 1) {
        this._selectionError = {key:"Multiple ThermoPro devices found: {names}. Set device_name to a unique name.",values:{names:candidates.map(device=>device.name_by_user || device.name || device.model || "")}};
      } else if (!selected) {
        this._selectionError = {key:"No ThermoPro device is configured in Home Assistant yet."};
      }
      if (selected && !integrationDeviceIds.has(selected)) {
        this._selectionError = {key:"No active ThermoPro entities were found for device_id “{id}”. Select the device again in the card editor.",values:{id:selected}};
        selected = null;
      }
      this._selectedDeviceId = selected;
      this._registry = selected ? entities.filter((e) => e && e.entity_id && e.device_id === selected && THERMOPRO_PROVIDERS.includes(e.platform) && !e.disabled_by) : [];
      this.render();
      if (selected) this.loadHistory();
    } catch (err) {
      if(revision!==this._configRevision || request!==this._registryRequest)return;
      this._registryError = err?.message || this.t("Entity registry is unavailable");
      this.render();
    } finally { if(request===this._registryRequest)this._loading = false; }
  }
  async ws(message) {
    if (typeof this._hass?.callWS === "function") return this._hass.callWS(message);
    if (typeof this._hass?.connection?.sendMessagePromise === "function") return this._hass.connection.sendMessagePromise(message);
    throw new Error(this.t("Home Assistant WebSocket API is unavailable in this dashboard"));
  }
  asList(result, label) {
    if (Array.isArray(result)) return result;
    if (Array.isArray(result?.result)) return result.result;
    if (Array.isArray(result?.[label === "entity registry" ? "entities" : "devices"])) return result[label === "entity registry" ? "entities" : "devices"];
    throw new Error(this.t("Home Assistant returned no {registry} list",{registry:this.t(label)}));
  }
  async loadHistory() {
    const now = Date.now();
    if (this._historyLoading || now - this._historyAt < 240000 || !this._hass || !this._registry) return;
    const ids = this._registry.filter((e) => e.domain === "sensor" && this._hass.states[e.entity_id]?.attributes?.device_class === "temperature").map((e) => e.entity_id);
    if (!ids.length) return;
    this._historyAt = now;
    this._historyLoading = true;
    const deviceId = this._selectedDeviceId;
    const revision=this._configRevision, request=this._historyRequest={};
    try {
      const start = new Date(now - 12 * 60 * 60 * 1000).toISOString();
      // Preserve each historical unit; a HA entity unit may change during
      // this period, independently of the card or the device display.
      const result = await this.ws({type:"history/history_during_period", start_time:start, entity_ids:ids, minimal_response:false, significant_changes_only:false, no_attributes:false});
      if (deviceId !== this._selectedDeviceId || revision!==this._configRevision || request!==this._historyRequest) return;
      // HA returns a dictionary keyed by entity_id; compressed entries use s/lu.
      const series = Array.isArray(result) ? result.map((items, i) => [items[0]?.entity_id || ids[i], items]) : Object.entries(result || {});
      this._history = Object.fromEntries(series.map(([id, items]) => {
        let unit=this._hass.states[id]?.attributes?.unit_of_measurement || "°C";
        return [id, items.map((item) => {
        unit=(item.a || item.attributes)?.unit_of_measurement || unit;
        const raw = item.s ?? item.state;
        const time = item.lu ?? item.last_updated ?? item.last_changed;
        const t = typeof time === "number" ? time * 1000 : Date.parse(time);
        const v = raw == null || raw === "" || !Number.isFinite(Number(raw)) ? null : Number(raw);
        return {t, v, u:unit};
      }).filter((point) => Number.isFinite(point.t)).sort((a,b) => a.t-b.t)]; }));
    } catch (_) { /* Recorder can be disabled; show an explicit empty state. */ }
    finally {
      if(revision!==this._configRevision || request!==this._historyRequest)return;
      this._historyLoading = false;
      if (!this.shadowRoot.activeElement?.matches("input,select")) this.render();
    }
  }
  displayUnit(entry) {
    const attributes=this._hass.states[entry?.entity_id]?.attributes || {};
    const source=attributes.unit_of_measurement || "°C", mode=this._config.temperature_unit || "ha";
    if (!temperatureUnit(source)) return source;
    if (mode==="device") {
      const deviceUnit=(this._registry || []).find(e=>e.domain==="select" && /(?:display unit|temperature unit|units)/.test(identityOf(e)));
      return temperatureUnit(attributes.device_display_unit) || temperatureUnit(this._hass.states[deviceUnit?.entity_id]?.state) || temperatureUnit(source);
    }
    return mode==="celsius"?"°C":mode==="fahrenheit"?"°F":temperatureUnit(source);
  }
  displayValue(entry, value=this._hass.states[entry?.entity_id]?.state) {
    const source=this._hass.states[entry?.entity_id]?.attributes?.unit_of_measurement || "°C";
    return convertTemperature(value,source,this.displayUnit(entry));
  }
  profileSummary(probe) {
    const state = this._hass.states[probe.profile?.entity_id];
    const mode = state?.state, attrs = state?.attributes || {};
    if (!state || ["unknown", "unavailable"].includes(mode)) return {name:this.t("No active profile available"), detail:"—"};
    const matches = (preset) => preset.mode === mode && (mode === "off" || (preset.high != null && attrs.high_celsius != null && Number(preset.high) === Number(attrs.high_celsius) && (mode !== "range" || (preset.low != null && attrs.low_celsius != null && Number(preset.low) === Number(attrs.low_celsius)))));
    const presets = (attrs.saved_presets || []).filter(matches);
    const selected = presets.find((preset) => preset.name === this._appliedPresets.get(probe.n));
    const preset = selected || (mode !== "off" && presets.length === 1 ? presets[0] : null);
    const unit=this.displayUnit(probe.temp);
    const threshold=(value)=>{const converted=convertTemperature(value,"°C",unit);return converted==null?"—":converted.toFixed(1);};
    const detail = mode === "target" ? this.t("Target {value} {unit}",{value:threshold(attrs.high_celsius),unit}) : mode === "range" ? `${threshold(attrs.low_celsius)}–${threshold(attrs.high_celsius)} ${unit}` : mode === "off" ? this.t("No temperature alarm") : this.t("Device profile");
    return {name:preset?.name || (mode === "off" ? this.t("Alarm off") : mode === "target" ? this.t("Custom target") : mode === "range" ? this.t("Custom range") : mode), detail};
  }
  chart(entry, compact = true) {
    const now = Date.now(), start = now - 12*60*60*1000;
    const live = this._hass.states[entry.entity_id];
    const sourceUnit=live?.attributes?.unit_of_measurement || "°C", unit=this.displayUnit(entry);
    const points = (this._history[entry.entity_id] || []).map((point)=>({...point,v:convertTemperature(point.v,point.u || sourceUnit,unit)}));
    const carry = points.filter((point) => point.t < start).at(-1);
    if (carry) points.unshift({...carry,t:start});
    const time = Date.parse(live?.last_updated || live?.last_changed);
    if (Number.isFinite(time) && (!points.length || time > points[points.length-1].t)) points.push({t:time,v:this.displayValue(entry)});
    const valid = points.filter((point) => point.t >= start && point.t <= now && point.v !== null);
    if (valid.length < 2) return `<div class="chart empty-chart"><span>${this._historyLoading?this.t("Loading history…"):this.t("No history data yet")}</span></div>`;
    const values=valid.map((point)=>point.v), low=Math.min(...values), high=Math.max(...values), span=Math.max(1,high-low);
    const bottom=low-(span-(high-low))/2;
    let path="", connected=false;
    for(const point of points){
      if(point.t<start||point.t>now)continue;
      if(point.v===null){connected=false;continue;}
      const x=4+(point.t-start)/(now-start)*232, y=52-(point.v-bottom)/span*42;
      path+=`${connected?"L":"M"}${x.toFixed(2)},${y.toFixed(2)} `;connected=true;
    }
    return `<div class="chart"><div class="chart-labels"><span>${esc(this.t("12 hours"))}</span><span>${low.toFixed(1)}–${high.toFixed(1)} ${esc(unit)}</span></div><svg class="spark ${compact?"compact":"expanded"}" viewBox="0 0 240 60" preserveAspectRatio="none" role="img" aria-label="${esc(this.t("Temperature history {name}",{name:entry.original_name || entry.entity_id}))}"><path d="${path.trim()}"/></svg></div>`;
  }
  async call(domain, service, data, clearDrafts=[]) {
    if (this._pendingCall) return;
    this._pendingCall = true;
    const revision=this._configRevision;
    this._error = "";
    this.shadowRoot.querySelectorAll("button,[data-entity],[data-number],[data-draft]").forEach((el) => { el.disabled = true; });
    try {
      await this._hass.callService(domain, service, data);
      if(revision!==this._configRevision)return false;
      clearDrafts.forEach(key=>this._drafts.delete(key));
      return true;
    }
    catch (err) { if(revision===this._configRevision)this._error = err?.message || String(err); return false; }
    finally { this._pendingCall = false; this.render(); }
  }
  render() {
    if (!this.shadowRoot || !this._hass) return;
    if (this._pressedPointers.size || this._keyboardPress) { this._renderDeferred = true; return; }
    // HA updates often arrive while an editor or an accordion is open.
    // Preserve those local choices when rebuilding the card.
    this.shadowRoot.querySelectorAll("details[data-section]").forEach((el) => this._sections.set(el.dataset.section, el.open));
    const section = (key, title, content, note = "") => `<details data-section="${key}" ${this._sections.get(key) ? "open" : ""}><summary><span>${title}</span>${note ? `<span class="section-note">${esc(note)}</span>` : ""}</summary><div class="section-body">${content}</div></details>`;
    const styles = `<style>
      :host{display:block;color:var(--primary-text-color);--ink:var(--primary-text-color);--muted:var(--secondary-text-color);--line:var(--divider-color);--mint:var(--primary-color);--red:var(--error-color,#db4437);--surface:var(--secondary-background-color,var(--card-background-color));font-family:var(--paper-font-body1_-_font-family,inherit)}
      ha-card{overflow:hidden;background:var(--ha-card-background,var(--card-background-color));color:var(--ink);border-radius:var(--ha-card-border-radius,12px);box-shadow:var(--ha-card-box-shadow,none)}
      .shell{padding:16px;display:grid;gap:12px}.head{display:flex;align-items:center;justify-content:space-between;gap:12px}.eyebrow{font-size:11px;color:var(--muted);letter-spacing:.06em}h2{font-size:20px;font-weight:500;line-height:1.3;margin:2px 0 0}.sub{font-size:12px;color:var(--muted);margin-top:5px}
      .badge{font-size:12px;border-radius:16px;padding:5px 9px;white-space:nowrap;color:var(--muted);background:var(--surface)}.badge.on{color:var(--mint)}.badge.alarm{color:var(--red);font-weight:600}
      details{border-top:1px solid var(--line)}summary{display:flex;align-items:center;gap:10px;padding:14px 0;cursor:pointer;font-size:14px;font-weight:500;list-style:none}summary::-webkit-details-marker{display:none}summary::after{content:"›";font-size:22px;margin-left:4px;transform:rotate(0deg)}details[open]>summary::after{transform:rotate(90deg)}.section-note{margin-left:auto;font-size:12px;font-weight:400;color:var(--muted)}summary>span:first-child{flex:1}.section-body{padding:0 0 12px}
      .probes{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:10px}.probe{--accent:var(--mint);border:1px solid var(--line);border-radius:10px;padding:14px;min-width:0}.probe.alarming{--accent:var(--red);border-color:var(--red)}.probe-top{display:flex;justify-content:space-between;align-items:center;gap:8px}.probe-name{font-size:14px;font-weight:500}.probe-status{font-size:10px;color:var(--muted)}.probe-reading{font-size:36px;font-weight:400;line-height:1.2;margin:10px 0 8px;font-variant-numeric:tabular-nums}.probe-reading small{font-size:16px;color:var(--muted)}.track{height:4px;border-radius:4px;background:var(--surface);overflow:hidden}.fill{height:100%;width:var(--width);background:var(--accent);border-radius:4px;transition:width .5s}.profile{font-size:12px;color:var(--muted);margin-top:8px}.spark{height:32px;width:100%;display:block;margin-top:9px}.spark path{fill:none;stroke:var(--accent);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
      .footer,.controls,.metrics{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.controls{align-items:flex-end}.controls select{height:44px}.footer{justify-content:space-between}.metric{font-size:12px;color:var(--muted)}.metric b{color:var(--ink);font-weight:500;font-variant-numeric:tabular-nums}.icon{color:var(--muted)}.action{border:1px solid var(--line);border-radius:8px;padding:8px 11px;background:transparent;color:var(--ink);font:inherit;font-size:12px;cursor:pointer}.action:hover{background:var(--surface)}.action.primary{color:var(--mint)}.action.danger{color:var(--red)}.action:disabled{opacity:.5;cursor:default}
      select,input{box-sizing:border-box;border:1px solid var(--line);border-radius:8px;background:var(--card-background-color);color:var(--ink);padding:8px;font:inherit;font-size:13px;min-width:0}label{display:grid;gap:5px;font-size:12px;color:var(--muted)}input:focus,select:focus,button:focus-visible,summary:focus-visible{outline:2px solid var(--mint);outline-offset:2px}
      .profiles,.preset-editor{display:grid;gap:12px}.probe-settings{display:grid;gap:10px;padding-bottom:12px;border-bottom:1px solid var(--line)}.probe-settings:last-child{border-bottom:0;padding-bottom:0}.probe-settings h3{font-size:14px;font-weight:500;margin:0}.profile-row,.preset-fields{display:flex;align-items:end;flex-wrap:wrap;gap:8px}.profile-row input,.preset-fields input[type=number]{width:110px}.profile-row select{max-width:230px}.preset-editor h3{margin:0;font-size:14px;font-weight:500}.preset-list{display:grid;gap:8px}.preset-item{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.preset-item span{flex:1;font-size:13px}.hint{color:var(--muted);font-size:12px;line-height:1.5;margin:0}
      .timerline{display:flex;align-items:center;gap:7px;margin-top:9px;color:var(--muted);font-size:12px;flex-wrap:wrap}.timerline .action{padding:5px 8px}.error{padding:10px;border:1px solid var(--red);border-radius:8px;color:var(--red);font-size:13px}.empty{padding:14px;color:var(--muted);font-size:13px;text-align:center}
      @media(max-width:480px){.shell{padding:14px}.head{gap:8px}.profile-row label{flex:1}.profile-row select{width:100%}}
      :host{container-type:inline-size}.probes{grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:1fr;align-items:stretch}.probes.single{grid-template-columns:1fr}.probe{box-sizing:border-box;display:grid;grid-template-rows:24px 54px 50px 88px minmax(0,auto);gap:8px;padding:14px;height:100%}.probe-reading{margin:0;display:flex;align-items:center;gap:5px;font-size:34px}.probe-top{min-width:0}.probe-status{white-space:nowrap}.profile{display:grid;grid-template-rows:30px 18px;gap:2px;margin:0;min-width:0}.profile-name{font-size:13px;font-weight:500;color:var(--ink);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:15px;overflow-wrap:anywhere}.profile-detail{font-size:12px;line-height:18px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.chart{height:88px;box-sizing:border-box;display:grid;grid-template-rows:18px 60px;gap:6px;min-width:0}.chart-labels{display:flex;justify-content:space-between;gap:4px;font-size:10px;color:var(--muted);white-space:nowrap}.spark{height:60px;margin:0;width:100%;overflow:hidden;color:var(--mint)}.spark path{stroke:currentColor;stroke-width:1.7;vector-effect:non-scaling-stroke}.empty-chart{display:flex;align-items:center;justify-content:center;border-bottom:1px solid var(--line);font-size:11px;color:var(--muted)}.timer-slot{min-height:0}.timerline{margin:0;min-height:36px}.timerline .action{min-height:36px}.action,select,input{box-sizing:border-box;min-height:44px;line-height:20px}.profile-row label{line-height:16px}.profile-row select,.profile-row input,.preset-fields select,.preset-fields input{height:44px}.history-probe{padding:12px 0}.history-probe+.history-probe{border-top:1px solid var(--line)}.history-probe .chart{height:120px;grid-template-rows:18px 96px}.spark.expanded{height:96px}summary{box-sizing:border-box;min-height:56px}.timer-slot:empty{display:none}@container(max-width:350px){.probes{grid-template-columns:1fr}.probe-reading{font-size:36px}}
      .probe.basic{grid-template-rows:24px 54px 88px}
      .probe.multi{grid-template-rows:24px 54px var(--secondary-height) 50px 88px minmax(0,auto)}.probe.basic.multi{grid-template-rows:24px 54px var(--secondary-height) 88px}.probe-reading{position:relative}.reading-role{position:absolute;bottom:0;right:0;color:var(--muted);font-size:10px}.measurement,.humidity{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;min-height:28px}.measurement span,.humidity span{color:var(--muted)}.measurement b,.humidity b{font-weight:500;font-variant-numeric:tabular-nums}.measurements{min-width:0}.humidity{padding:6px 0}

    </style>`;
    if (this._registryError) { this.shadowRoot.innerHTML = `${styles}<ha-card><div class="empty">${esc(this.t("Could not load device entities: {error}",{error:this._registryError}))}</div></ha-card>`; return; }
    if (!this._registry) { this.shadowRoot.innerHTML = `${styles}<ha-card><div class="empty">${esc(this.t("Connecting ThermoPro…"))}</div></ha-card>`; return; }
    if (!this._selectedDeviceId) { this.shadowRoot.innerHTML = `${styles}<ha-card><div class="empty">${esc(this._selectionError?this.t(this._selectionError.key,this._selectionError.values):this.t("Select a ThermoPro device"))}</div></ha-card>`; return; }
    const entries = this._registry;
    const device = (this._devices || []).find((d) => d.id === this._selectedDeviceId) || {};
    const title = this._config.title || device.name_by_user || device.name || "ThermoPro";
    const model = device.model || device.manufacturer || this.t("Bluetooth thermometer");
    // A device can temporarily have no registered temperature entities (or
    // the configured device_id can point at a device with no entities yet).
    // Keep optional entity lookups safe so the empty-state UI can render.
    const state = (e) => e?.entity_id ? this._hass.states[e.entity_id] : undefined;
    // Registry rows survive a switch to Core. Old unavailable controls must
    // not override Core readings or advertise services Core does not provide.
    const isTp90x = entries.some(e=>e.platform==="tp90x_multi");
    const profileEntity = entries.some(e=>e.domain==="sensor" && /profile/.test(labelOf(e)));
    const fullControls = /^TP25/i.test(device.model || "") && profileEntity && (this._hass.services != null
      ? Boolean(this._hass.services.thermopro?.set_alarm_profile)
      : entries.some(e=>e.domain==="sensor" && /profile/.test(labelOf(e)) && ["off","target","range"].includes(state(e)?.state)));
    const isTemp = e=>e.domain==="sensor" && state(e)?.attributes?.device_class==="temperature";
    const hasReading = entry=>{const value=state(entry)?.state;return value!=null && value!=="" && !["unknown","unavailable"].includes(value) && Number.isFinite(Number(value));};
    const temperatures=entries.filter(isTemp), grouped=new Map();
    temperatures.forEach((temp,idx)=>{
      const physical=probeOf(temp), key=physical==null?temp.entity_id:`probe-${physical}`;
      if(!grouped.has(key))grouped.set(key,{n:physical || idx+1,physical,temps:[]});
      grouped.get(key).temps.push(temp);
    });
    const allProbes=[...grouped.values()].map(p=>{
      p.temps.sort((a,b)=>measurementRole(a).order-measurementRole(b).order);
      const related=entries.filter(e=>p.physical!=null && probeOf(e)===p.physical);
      return {...p,temp:p.temps[0],title:p.physical!=null?this.t("Probe {number}",{number:p.n}):temperatures.length===1?this.t("Temperature"):p.temps[0].original_name || this.t("Temperature {number}",{number:p.n}),
        connected:fullControls && related.find(e=>e.domain==="binary_sensor" && /connected|probe status/.test(labelOf(e))),
        alarm:fullControls && related.find(e=>e.domain==="binary_sensor" && /alarm/.test(labelOf(e))),
        profile:fullControls && related.find(e=>e.domain==="sensor" && /profile/.test(labelOf(e))),
        battery:related.find(e=>e.domain==="sensor" && state(e)?.attributes?.device_class==="battery"),
        timer:fullControls && this._hass.states[`timer.tp25_probe_${p.n}`]?`timer.tp25_probe_${p.n}`:null};
    }).sort((a,b)=>a.n-b.n);
    const global=(test,domain)=>entries.find(e=>(!domain || e.domain===domain) && probeOf(e)==null && test(labelOf(e)));
    const battery=entries.find(e=>e.domain==="sensor" && probeOf(e)==null && state(e)?.attributes?.device_class==="battery") || global(s=>/^battery$/.test(s),"sensor") || global(s=>/battery/.test(s),"sensor");
    const rssi=entries.find(e=>e.domain==="sensor" && state(e)?.attributes?.device_class==="signal_strength") || global(s=>/rssi|signal strength/.test(s),"sensor");
    const unit=(fullControls || isTp90x) && entries.find(e=>e.domain==="select" && /display unit|temperature unit|units/.test(identityOf(e)));
    const beeper=(fullControls || isTp90x) && entries.find(e=>e.domain==="switch" && probeOf(e)==null && /device alarm|beeper|sound/.test(identityOf(e)));
    const connection=fullControls && global(s=>/bluetooth connection|connection enabled/.test(s),"switch");
    const linkState=fullControls && global(s=>/^connection$/.test(s),"binary_sensor");
    const ack=fullControls && global(s=>/acknowledge alarm/.test(s),"button");
    const globalAlarm=fullControls && global(s=>/alarm/.test(s),"binary_sensor");
    const anyAlarm=Boolean(globalAlarm && state(globalAlarm)?.state==="on") || allProbes.some(p=>p.alarm && state(p.alarm)?.state==="on");
    const humidity=entries.filter(e=>e.domain==="sensor" && state(e)?.attributes?.device_class==="humidity");
    const passive=entries.some(e=>e.platform==="thermopro") && !/^TP25/i.test(device.model || "");
    const online=linkState?state(linkState)?.state==="on":temperatures.some(hasReading) || humidity.some(hasReading);
    const probes=allProbes.filter(p=>{
      const connected=state(p.connected);
      if(connected?.state==="off" || connected?.attributes?.raw_state==="missing")return false;
      return connected?.state==="on" || Boolean(connected?.attributes?.raw_state) || p.temps.some(hasReading);
    });
    // Sensor values already use HA's configured unit; the device display unit
    // is an independent setting and must not relabel Celsius as Fahrenheit.
    const unitText = (entry) => this.displayUnit(entry);
    const unavailable = entity=>!state(entity) || state(entity).state==="unavailable";
    const format = (entity) => { const s = state(entity); return s && !["unknown","unavailable"].includes(s.state) ? s.state : "—"; };
    const profileEntry = allProbes.find((p) => p.profile)?.profile;
    const savedPresets = state(profileEntry)?.attributes?.saved_presets || [];
    const presetOptions = savedPresets.map((preset)=>`<option value="${esc(preset.name)}">${esc(preset.name)} · ${preset.mode==="range"?`${esc(preset.low)}–${esc(preset.high)} °C`:preset.mode==="target"?esc(this.t("target {value} °C",{value:preset.high})):this.t("off")}</option>`).join("");
    const profileControls = probes.filter((p)=>p.profile).map((p)=>{
      const attrs=state(p.profile)?.attributes||{}; const mode=state(p.profile)?.state||"off";
      return `<div class="probe-settings"><h3>${esc(this.t("Probe {number}",{number:p.n}))}</h3><div class="profile-row"><label>${esc(this.t("Alarm"))}<select data-draft="mode-${p.n}" data-mode="${p.n}"><option value="off" ${mode==="off"?"selected":""}>${esc(this.t("Off"))}</option><option value="target" ${mode==="target"?"selected":""}>${esc(this.t("Target"))}</option><option value="range" ${mode==="range"?"selected":""}>${esc(this.t("Range"))}</option></select></label><label>${esc(this.t("Target / maximum"))} °C<input data-draft="high-${p.n}" data-high="${p.n}" type="number" step="0.1" value="${esc(attrs.high_celsius ?? "")}"></label><label>${esc(this.t("Minimum"))} °C<input data-draft="low-${p.n}" data-low="${p.n}" type="number" step="0.1" value="${esc(attrs.low_celsius ?? "")}"></label><button class="action primary" data-save-profile="${p.n}">${esc(this.t("Apply"))}</button></div>${savedPresets.length?`<div class="profile-row"><label>${esc(this.t("Saved preset"))}<select data-draft="preset-${p.n}" data-preset-select="${p.n}"><option value="">${esc(this.t("Choose a preset"))}</option>${presetOptions}</select></label><button class="action" data-apply-preset="${p.n}">${esc(this.t("Apply preset"))}</button></div>`:""}</div>`;
    }).join("");
    const providerProfiles = isTp90x ? probes.map(p=>{
      const related=entries.filter(e=>probeOf(e)===p.n);
      const enabled=related.find(e=>e.domain==="switch" && /alarm/.test(identityOf(e)));
      const bounds=related.filter(e=>e.domain==="number" && /(?:min|max)(?:\s|$)/.test(identityOf(e)));
      if(!enabled && !bounds.length)return "";
      return `<div class="probe-settings"><h3>${esc(p.title)}</h3><div class="profile-row">${bounds.map(e=>{
        const attrs=state(e)?.attributes || {}, label=/\bmin\b/.test(identityOf(e))?this.t("Minimum"):this.t("Maximum");
        return `<label>${label} ${esc(attrs.unit_of_measurement || "")}<input data-number="${esc(e.entity_id)}" type="number" step="${esc(attrs.step || 0.1)}" ${attrs.min!=null?`min="${esc(attrs.min)}"`:""} ${attrs.max!=null?`max="${esc(attrs.max)}"`:""} value="${hasReading(e)?esc(state(e).state):""}" ${state(e)?.state==="unavailable"?"disabled":""}></label>`;
      }).join("")}${enabled?`<button class="action" data-toggle="${esc(enabled.entity_id)}" ${unavailable(enabled)?"disabled":""}>${state(enabled)?.state==="on"?this.t("Disable alarm"):this.t("Enable alarm")}</button>`:""}</div></div>`;
    }).join(""):"";
    const extraButtons=entries.filter(e=>e.domain==="button" && ((isTp90x && /alarm snooze|backlight/.test(identityOf(e))) || (e.platform==="thermopro" && /set datetime|set date.?time|set date & time/.test(identityOf(e)))));
    const presetEditor = profileEntry ? `<div class="preset-editor"><div class="preset-fields"><label>${esc(this.t("Name"))}<input data-draft="preset-name" data-preset-name type="text" maxlength="48" placeholder="${esc(this.t("e.g. Salmon"))}"></label><label>${esc(this.t("Alarm mode"))}<select data-draft="preset-mode" data-preset-mode><option value="target">${esc(this.t("Target temperature"))}</option><option value="range">${esc(this.t("Range"))}</option><option value="off">${esc(this.t("Off"))}</option></select></label><label>${esc(this.t("Target / maximum"))} °C<input data-draft="preset-high" data-preset-high type="number" step="0.1"></label><label>${esc(this.t("Minimum"))} °C<input data-draft="preset-low" data-preset-low type="number" step="0.1"></label><button class="action primary" data-save-preset>${esc(this.t("Save"))}</button></div><p class="hint">${esc(this.t("Presets are stored in Home Assistant. The same name updates a preset."))}</p>${savedPresets.length?`<div class="preset-list">${savedPresets.map((p)=>`<div class="preset-item"><span>${esc(p.name)}</span><button class="action" data-edit-preset="${esc(p.name)}">${esc(this.t("Edit"))}</button><button class="action danger" data-delete-preset="${esc(p.name)}">${esc(this.t("Delete"))}</button></div>`).join("")}</div>`:""}</div>` : "";
    const secondaryRows=Math.max(0,...probes.map(p=>p.temps.length-1+(p.battery?1:0)));
    const probeCards = probes.map((p)=>{
      const raw=this.displayValue(p.temp), valid=raw!=null;
      const alarmOn=p.alarm&&state(p.alarm)?.state==="on";
      const connectedNow=p.connected ? state(p.connected)?.state==="on" : p.temps.some(hasReading);
      const profile = this.profileSummary(p);
      const timerState=p.timer?this._hass.states[p.timer]:null;
      const timerStatus={idle:this.t("Idle"),paused:this.t("Paused"),active:this.t("Active"),unavailable:this.t("Unavailable"),unknown:this.t("Unknown")}[timerState?.state] || timerState?.state;
      const timerLine=p.timer?`<div class="timerline"><span>${esc(this.t("HA timer"))}</span><b>${esc(timerState?.attributes?.remaining||timerStatus||"—")}</b>${timerState?.state==="active"?`<button class="action" data-timer="pause" data-timer-id="${p.timer}">${esc(this.t("Pause"))}</button><button class="action" data-timer="cancel" data-timer-id="${p.timer}">${esc(this.t("Stop"))}</button>`:`<button class="action" data-timer="start" data-timer-id="${p.timer}">${esc(this.t("Start 15 min"))}</button>`}</div>`:"";
      const secondary=p.temps.slice(1).map(e=>`<div class="measurement"><span>${esc(this.t(measurementRole(e).label))}</span><b>${hasReading(e)?this.displayValue(e).toFixed(1):"—"} ${esc(unitText(e))}</b></div>`).join("")+(p.battery?`<div class="measurement"><span>${esc(this.t("Probe {number} battery",{number:p.n}))}</span><b>${esc(format(p.battery))} ${esc(state(p.battery)?.attributes?.unit_of_measurement || "%")}</b></div>`:"");
      const extraReadings=secondaryRows?`<div class="measurements" style="min-height:${secondaryRows*28}px">${secondary}</div>`:"";
      const role=p.temps.length>1?`<span class="reading-role">${esc(this.t(measurementRole(p.temp).label))}</span>`:"";
      const profileLine=fullControls?`<div class="profile"><span class="profile-name" title="${esc(profile.name)}">${esc(profile.name)}</span><span class="profile-detail">${esc(valid?profile.detail:this.t("No current reading"))}</span></div>`:"";
      return `<article class="probe ${fullControls?"":"basic "}${secondaryRows?"multi ":""}${alarmOn?"alarming":""}" style="--secondary-height:${secondaryRows*28}px"><div class="probe-top"><span class="probe-name">${esc(p.title)}</span><span class="probe-status">${alarmOn?this.t("ALARM"):p.temps.some(hasReading)&&connectedNow?this.t("ACTIVE"):this.t("NO DATA")}</span></div><div class="probe-reading">${valid?raw.toFixed(1):"—"}<small> ${esc(unitText(p.temp))}</small>${role}</div>${extraReadings}${profileLine}${this.chart(p.temp)}${fullControls?`<div class="timer-slot">${timerLine}</div>`:""}</article>`;
    }).join("");
    const charts = probes.flatMap(p=>p.temps.map(e=>`<div class="history-probe"><span class="probe-name">${esc(p.title)}${p.temps.length>1?` · ${esc(this.t(measurementRole(e).label))}`:""}</span>${this.chart(e,false)}</div>`)).join("");
    const humidityCards=humidity.map(e=>`<div class="humidity"><span>${esc(this.t("Humidity"))}${humidity.length>1?` · ${esc(e.original_name || e.entity_id)}`:""}</span><b>${hasReading(e)?Number(state(e).state).toFixed(1):"—"} ${esc(state(e)?.attributes?.unit_of_measurement || "%")}</b></div>`).join("");
    const deviceControls = `<div class="controls">${unit?`<label>${esc(this.t("Device display"))}<select data-entity="${esc(unit.entity_id)}" aria-label="${esc(this.t("Temperature unit"))}" ${unavailable(unit)?"disabled":""}><option ${state(unit)?.state==="Celsius"?"selected":""}>Celsius</option><option ${state(unit)?.state==="Fahrenheit"?"selected":""}>Fahrenheit</option></select></label>`:""}${beeper?`<button class="action" data-toggle="${esc(beeper.entity_id)}" ${unavailable(beeper)?"disabled":""}>${state(beeper)?.state==="on"?this.t("Turn sound off"):this.t("Turn sound on")}</button>`:""}${connection?`<button class="action" data-toggle="${esc(connection.entity_id)}" ${unavailable(connection)?"disabled":""}>${state(connection)?.state==="on"?this.t("Pause connection"):this.t("Connect")}</button>`:""}${extraButtons.map(e=>`<button class="action" data-press="${esc(e.entity_id)}" ${unavailable(e)?"disabled":""}>${/alarm snooze/.test(identityOf(e))?this.t("Snooze alarm"):/backlight/.test(identityOf(e))?this.t("Backlight"):this.t("Synchronize clock")}</button>`).join("")}</div>`;
    const emptyMessage = !allProbes.length ? this.t("No temperature probes were found for this device.") : online ? this.t("No probe connected.") : this.t("No current probe data. Waiting for a connection…");
    this.shadowRoot.innerHTML = `${styles}<ha-card><div class="shell"><header class="head"><div><div class="eyebrow">${esc(model)}</div><h2>${esc(title)}</h2></div><span class="badge ${anyAlarm?"alarm":online?"on":""}">${anyAlarm?this.t("Active alarm"):online?(passive?this.t("Data available"):this.t("Connected")):(passive?this.t("No data"):this.t("Disconnected"))}</span></header>
      ${section("temperatures", this.t("Temperatures"), `<div class="probes ${probes.length===1?"single":""}">${probeCards || `<div class="empty">${emptyMessage}</div>`}</div>`, `${esc(this.t(probes.length===1?"1 probe":"{count} probes",{count:probes.length}))}`)}
      ${humidityCards?section("humidity", this.t("Humidity"), humidityCards):""}
      <footer class="footer"><div class="metrics">${battery?`<span class="metric">${esc(this.t("Battery"))} <b>${esc(format(battery))} ${esc(state(battery)?.attributes?.unit_of_measurement||"%")}</b></span>`:""}${rssi?`<span class="metric">${esc(this.t("Signal"))} <b>${esc(format(rssi))} ${esc(state(rssi)?.attributes?.unit_of_measurement||"dBm")}</b></span>`:""}</div>${ack&&anyAlarm?`<button class="action danger" data-press="${esc(ack.entity_id)}" ${unavailable(ack)?"disabled":""}>${esc(this.t("Acknowledge alarm"))}</button>`:""}</footer>
      ${profileControls||providerProfiles?section("alarms", this.t("Alarm limits"), `<div class="profiles">${profileControls}${providerProfiles}</div>`):""}
      ${presetEditor?section("presets", this.t("Saved presets"), presetEditor, `${savedPresets.length}`):""}
      ${charts?section("history", this.t("History"), charts, this.t("12 hours")):""}
      ${unit||beeper||connection||extraButtons.length?section("settings", this.t("Device settings"), deviceControls):""}
      ${this._error?`<div class="error" role="alert">${esc(typeof this._error==="string"?this._error:this.t(this._error.key,this._error.values))}</div>`:""}</div></ha-card>`;
    this.shadowRoot.querySelectorAll("[data-draft]").forEach(el=>{
      if(this._drafts.has(el.dataset.draft))el.value=this._drafts.get(el.dataset.draft);
      const remember=()=>this._drafts.set(el.dataset.draft,el.value);
      el.addEventListener("input",remember);el.addEventListener("change",remember);
    });
    if (this._pendingCall) this.shadowRoot.querySelectorAll("button,[data-entity],[data-number],[data-draft]").forEach((el) => { el.disabled = true; });
    this.shadowRoot.querySelectorAll("[data-number]").forEach(el=>el.addEventListener("change",()=>{
      const value=Number(el.value);
      if(el.value==="" || !Number.isFinite(value) || (el.checkValidity && !el.checkValidity()))return;
      this.call("number","set_value",{entity_id:el.dataset.number,value});
    }));
    this.shadowRoot.querySelectorAll("[data-entity]").forEach((el)=>el.addEventListener("change",()=>this.call("select","select_option",{entity_id:el.dataset.entity,option:el.value})));
    this.shadowRoot.querySelectorAll("[data-toggle]").forEach((el)=>el.addEventListener("click",()=>this.call("switch",this._hass.states[el.dataset.toggle]?.state==="on"?"turn_off":"turn_on",{entity_id:el.dataset.toggle})));
    this.shadowRoot.querySelectorAll("[data-press]").forEach((el)=>el.addEventListener("click",()=>this.call("button","press",{entity_id:el.dataset.press})));
    this.shadowRoot.querySelectorAll("[data-timer]").forEach((el)=>el.addEventListener("click",()=>this.call("timer",el.dataset.timer,{entity_id:el.dataset.timerId,...(el.dataset.timer==="start"?{duration:"00:15:00"}:{})})));
    this.shadowRoot.querySelectorAll("[data-save-profile]").forEach((el)=>el.addEventListener("click",()=>{
      const probe=Number(el.dataset.saveProfile), mode=this.shadowRoot.querySelector(`[data-mode="${probe}"]`).value;
      const high=this.shadowRoot.querySelector(`[data-high="${probe}"]`).value, low=this.shadowRoot.querySelector(`[data-low="${probe}"]`).value;
      const data={device_id:this._selectedDeviceId,probe,mode};
      if(mode!=="off"){if(high==="") {this._error={key:"Probe {number} needs an upper target value.",values:{number:probe}};this.render();return;} data.high=Number(high);}
      if(mode==="range"){if(low===""){this._error={key:"Probe {number} needs a lower limit.",values:{number:probe}};this.render();return;}data.low=Number(low);}
      this._error=""; this.call("thermopro","set_alarm_profile",data,[`mode-${probe}`,`high-${probe}`,`low-${probe}`]);
    }));
    this.shadowRoot.querySelectorAll("[data-apply-preset]").forEach((el)=>el.addEventListener("click",async()=>{
      const probe=Number(el.dataset.applyPreset), name=this.shadowRoot.querySelector(`[data-preset-select="${probe}"]`).value;
      if(!name){this._error={key:"Choose a preset first."};this.render();return;}
      this._error=""; if(await this.call("thermopro","apply_alarm_preset",{device_id:this._selectedDeviceId,probe,name},[`mode-${probe}`,`high-${probe}`,`low-${probe}`,`preset-${probe}`])){this._appliedPresets.set(probe,name);this.render();}
    }));
    this.shadowRoot.querySelectorAll("[data-save-preset]").forEach((el)=>el.addEventListener("click",()=>{
      const name=this.shadowRoot.querySelector("[data-preset-name]").value.trim(), mode=this.shadowRoot.querySelector("[data-preset-mode]").value;
      const high=this.shadowRoot.querySelector("[data-preset-high]").value, low=this.shadowRoot.querySelector("[data-preset-low]").value;
      if(!name){this._error={key:"Enter a name for the preset."};this.render();return;}
      const data={device_id:this._selectedDeviceId,name,mode};
      if(mode!=="off"){if(high===""){this._error={key:"A temperature preset needs a target or maximum temperature."};this.render();return;}data.high=Number(high);}
      if(mode==="range"){if(low===""){this._error={key:"A range preset needs a minimum temperature."};this.render();return;}data.low=Number(low);if(data.low>=data.high){this._error={key:"The minimum temperature must be below the maximum temperature."};this.render();return;}}
      this._error=""; this.call("thermopro","save_alarm_preset",data,["preset-name","preset-mode","preset-high","preset-low"]);
    }));
    this.shadowRoot.querySelectorAll("[data-edit-preset]").forEach((el)=>el.addEventListener("click",()=>{
      const preset=savedPresets.find((item)=>item.name===el.dataset.editPreset);if(!preset)return;
      this.shadowRoot.querySelector("[data-preset-name]").value=preset.name;
      this.shadowRoot.querySelector("[data-preset-mode]").value=preset.mode;
      this.shadowRoot.querySelector("[data-preset-high]").value=preset.high ?? "";
      this.shadowRoot.querySelector("[data-preset-low]").value=preset.low ?? "";
      for(const field of ["name","mode","high","low"]){
        this._drafts.set(`preset-${field}`,this.shadowRoot.querySelector(`[data-preset-${field}]`).value);
      }
    }));
    this.shadowRoot.querySelectorAll("[data-delete-preset]").forEach((el)=>el.addEventListener("click",()=>this.call("thermopro","delete_alarm_preset",{device_id:this._selectedDeviceId,name:el.dataset.deletePreset})));
  }
}

class ThermoProThermometerCardEditor extends HTMLElement {
  t(key,values={}) { return translateCard(this._hass,this._config,key,values); }
  set hass(hass) { this._hass=hass; this.render(); }
  setConfig(config) { this._config={...config}; this.render(); }
  render() {
    if(!this._hass)return;
    this.innerHTML="<ha-form></ha-form>";
    const form=this.querySelector("ha-form");
    form.hass=this._hass; form.data={temperature_unit:"ha",language:"auto",...this._config}; form.schema=[
      {name:"device_id",selector:{device:{filter:THERMOPRO_PROVIDERS.map(integration=>({integration}))}}},
      {name:"device_name",selector:{text:{}}},
      {name:"title",selector:{text:{}}},
      {name:"temperature_unit",selector:{select:{mode:"dropdown",options:[
        {value:"ha",label:this.t("HA setting")},
        {value:"device",label:this.t("Follow device unit")},
        {value:"celsius",label:"Celsius (°C)"},
        {value:"fahrenheit",label:"Fahrenheit (°F)"},
      ]}}},
      {name:"language",selector:{select:{mode:"dropdown",options:[
        {value:"auto",label:this.t("Automatic (HA language)")},
        {value:"de",label:"Deutsch"},{value:"en",label:"English"},
      ]}}},
    ];
    form.computeLabel=(schema)=>schema.name==="device_id"?this.t("ThermoPro device"):schema.name==="device_name"?this.t("Device name (only when multiple devices exist)"):schema.name==="title"?this.t("Display title"):schema.name==="temperature_unit"?this.t("Temperature display"):schema.name==="language"?this.t("Language"):"";
    form.addEventListener("value-changed",(event)=>{event.stopPropagation();const previousLanguage=this._config?.language;this._config={...event.detail.value};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:true,composed:true}));if(previousLanguage!==this._config.language)this.render();});
  }
}

if (!customElements.get("thermopro-thermometer-card")) customElements.define("thermopro-thermometer-card",ThermoProThermometerCard);
if (!customElements.get("thermopro-thermometer-card-editor")) customElements.define("thermopro-thermometer-card-editor",ThermoProThermometerCardEditor);
window.customCards=window.customCards||[];
window.customCards.push({type:"thermopro-thermometer-card",name:"ThermoPro Thermometer",description:translateCard({language:typeof navigator!=="undefined"?navigator.language:"en"},{},"Thermometer display with device entities, probe history and controls.")});
