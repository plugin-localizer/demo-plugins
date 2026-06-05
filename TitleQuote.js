/*:
 * @target MZ
 * @plugindesc Displays a quote on the title screen.
 * @author Plugin Finder (demo)
 * @url https://github.com/plugin-finder/catalog
 *
 * @param quote
 * @text Quote
 * @desc The quote shown on the title screen.
 * @type string
 * @default Believe in yourself!
 *
 * @param y
 * @text Y Position
 * @desc Vertical position of the quote (pixels from the top).
 * @type number
 * @default 540
 *
 * @help TitleQuote.js
 *
 * A small demo plugin for the Plugin Finder catalog. It shows a quote on the
 * title screen. Translate this plugin with Plugin Finder and both the quote and
 * the descriptions will appear in your language.
 *
 * No plugin commands. RPG Maker MZ.
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 * Released under the MIT License. Free for commercial and non-commercial
 * projects, with or without modification. Credit is appreciated but not
 * required. Please keep this notice in the file.
 */

/*:ja
 * @target MZ
 * @plugindesc タイトル画面に一言を表示します。
 * @author Plugin Finder（デモ）
 * @url https://github.com/plugin-finder/catalog
 *
 * @param quote
 * @text 一言
 * @desc タイトル画面に表示する一言。
 * @type string
 * @default 自分を信じて！
 *
 * @param y
 * @text Y座標
 * @desc 一言の表示位置（上端からのピクセル）。
 * @type number
 * @default 540
 *
 * @help TitleQuote.js
 *
 * Plugin Finder カタログのデモ用プラグインです。タイトル画面に一言を表示します。
 * Plugin Finder で翻訳すると、一言と説明文が自分の言語で表示されます。
 *
 * プラグインコマンドはありません。RPGツクールMZ用。
 *
 * ============================================================================
 * 利用規約
 * ============================================================================
 * MITライセンスで公開します。商用・非商用を問わず、改変の有無にかかわらず自由に
 * 使用できます。クレジットは任意です。本注意書きはファイル内に残してください。
 */

(() => {
  "use strict";
  const PLUGIN_NAME = "TitleQuote";
  const p = PluginManager.parameters(PLUGIN_NAME);
  const quote = String(p.quote || "");
  const y = Number(p.y || 540);

  const _create = Scene_Title.prototype.createForeground;
  Scene_Title.prototype.createForeground = function () {
    _create.call(this);
    if (!quote) return;
    const bmp = this._gameTitleSprite.bitmap;
    bmp.fontSize = 22;
    bmp.drawText(quote, 0, y, Graphics.width, 32, "center");
  };
})();
