export class Settings {
  constructor() {
    this.defaultSettings = {
      theme: ["dark", "light", "gray"],
      music: ["trance", "pop", "rock", "chillout", "off"],
      difficulty: ["easy", "normal", "hard", "nightmare"],
    };

    this.settingsMap = new Map([
      ["theme", "dark"],
      ["music", "trance"],
      ["difficulty", "easy"],
    ]);
  }

  getSettingsMap(key, value) {
    if (this.defaultSettings[key] && this.defaultSettings[key].includes(value)) {
      this.settingsMap.delete(key);
      this.settingsMap.set(key, value);
    }

    return this.settingsMap;
  }
}
