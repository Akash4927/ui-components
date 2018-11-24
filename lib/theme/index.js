"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeVarsAsScss = themeVarsAsScss;
exports.default = void 0;

var _colors = require("./colors");

var _fonts = require("./fonts");

var _borders = require("./borders");

var _layers = require("./layers");

var _spacings = require("./spacings");

var _misc = require("./misc");

var _boxShadows = require("./box-shadows");

var _atoms = require("./atoms");

function themeVarsAsScss() {
  var themeVariables = [].concat((0, _colors.themeColorsAsScss)()).concat((0, _layers.themeLayersAsScss)()).concat((0, _fonts.themeFontsAsScss)()).concat((0, _borders.themeBorderRadiiAsScss)()).concat((0, _spacings.themeSpacingsAsScss)()).concat((0, _misc.themeMiscVarsAsScss)());
  return "".concat(themeVariables.join('; '), ";");
}

var theme = {
  // Component-specific
  atoms: _atoms.atoms,
  // Box shadows
  boxShadow: _boxShadows.boxShadow,
  // Borders
  borderRadius: _borders.borderRadius,
  // Colors
  colors: _colors.colors,
  // Fonts
  fontFamilies: _fonts.fontFamilies,
  fontSizes: _fonts.fontSizes,
  // z-index layers
  layers: _layers.layers,
  // Spacings
  spacing: _spacings.spacing,
  // Misc
  overlayIconSize: _misc.overlayIconSize,
  textColor: _misc.textColor
};
var _default = theme;
exports.default = _default;