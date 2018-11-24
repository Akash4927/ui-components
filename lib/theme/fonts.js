"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeFontsAsScss = themeFontsAsScss;
exports.fontSizes = exports.fontFamilies = void 0;

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

var _kebabCase2 = _interopRequireDefault(require("lodash/kebabCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fontFamilies = {
  regular: "'proxima-nova', Helvetica, Arial, sans-serif",
  monospace: "'Roboto Mono', monospace"
};
exports.fontFamilies = fontFamilies;
var fontSizes = {
  huge: '48px',
  extraLarge: '32px',
  large: '22px',
  normal: '16px',
  small: '14px',
  tiny: '12px'
}; // Collects all theme font vars as SCSS vars.

exports.fontSizes = fontSizes;

function themeFontsAsScss() {
  var themeFonts = [];
  (0, _forEach2.default)(fontFamilies, function (value, name) {
    themeFonts.push("$font-family-".concat((0, _kebabCase2.default)(name), ": ").concat(value));
  });
  (0, _forEach2.default)(fontSizes, function (value, name) {
    themeFonts.push("$font-size-".concat((0, _kebabCase2.default)(name), ": ").concat(value));
  });
  return themeFonts;
}