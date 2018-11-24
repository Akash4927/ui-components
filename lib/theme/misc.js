"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeMiscVarsAsScss = themeMiscVarsAsScss;
exports.textColor = exports.overlayIconSize = void 0;

var _colors = require("./colors");

var overlayIconSize = '300px';
exports.overlayIconSize = overlayIconSize;
var textColor = _colors.colors.black; // Collects all theme misc vars as SCSS vars.

exports.textColor = textColor;

function themeMiscVarsAsScss() {
  return ["$overlay-icon-size: ".concat(overlayIconSize)];
}