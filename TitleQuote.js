/*:
 * @target MZ
 * @plugindesc Displays a random quote on the title screen.
 * @author Plugin Localizer (demo)
 * @url https://github.com/plugin-localizer/catalog
 *
 * @param quotes
 * @text Quotes
 * @desc Quotes to pick from at random.
 * @type string[]
 * @default ["Believe in yourself!","Adventure awaits."]
 *
 * @param y
 * @text Y Position
 * @desc Vertical position of the quote (pixels from the top).
 * @type number
 * @default 540
 *
 * @help TitleQuote.js
 *
 * A small demo plugin for the Plugin Localizer catalog. Each time the game
 * launches it shows one random quote on the title screen.
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
 * @plugindesc タイトル画面にランダムな一言を表示します。
 * @author Plugin Localizer（デモ）
 * @url https://github.com/plugin-localizer/catalog
 *
 * @param quotes
 * @text 一言リスト
 * @desc ランダムに選ばれる一言の一覧。
 * @type string[]
 * @default ["自分を信じて！","冒険が待っている。"]
 *
 * @param y
 * @text Y座標
 * @desc 一言の表示位置（上端からのピクセル）。
 * @type number
 * @default 540
 *
 * @help TitleQuote.js
 *
 * Plugin Localizer カタログのデモ用プラグインです。起動のたびにタイトル画面へ
 * ランダムな一言を1つ表示します。
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
  const quotes = JSON.parse(p.quotes || "[]");
  const y = Number(p.y || 540);

  const _create = Scene_Title.prototype.createForeground;
  Scene_Title.prototype.createForeground = function () {
    _create.call(this);
    if (!quotes.length) return;
    const text = quotes[Math.floor(Math.random() * quotes.length)];
    const bmp = this._gameTitleSprite.bitmap;
    bmp.fontSize = 22;
    bmp.drawText(text, 0, y, Graphics.width, 32, "center");
  };
})();
