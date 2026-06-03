/*:
 * @target MZ
 * @plugindesc Adds a quick-save hotkey (F5) on the map scene.
 * @author Plugin Localizer (demo)
 * @url https://github.com/plugin-localizer/catalog
 *
 * @no-localize
 *
 * @param key
 * @text Hotkey
 * @desc Key used for quick save.
 * @type string
 * @default F5
 *
 * @help QuickSave.js
 *
 * A demo plugin that illustrates the catalog OPT-OUT. Because the annotation
 * contains the marker @no-localize, Plugin Localizer will NOT list or translate
 * this plugin. Delete that line to allow listing.
 *
 * Released under the MIT License.
 */

(() => {
  "use strict";
  const p = PluginManager.parameters("QuickSave");
  const key = String(p.key || "F5");
  document.addEventListener("keydown", (e) => {
    if (e.key === key && SceneManager._scene instanceof Scene_Map) {
      DataManager.saveGame(1);
    }
  });
})();
