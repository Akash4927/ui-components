"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeSpacingsAsScss = themeSpacingsAsScss;
exports.spacing = void 0;

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spacing = {
  none: '0',
  xss: '4px',
  xs: '8px',
  small: '16px',
  base: '24px',
  large: '48px',
  xl: '64px'
}; // Collects all theme spacing vars as SCSS vars.

exports.spacing = spacing;

function themeSpacingsAsScss() {
  var themeSpacings = [];
  (0, _forEach2.default)(spacing, function (value, name) {
    themeSpacings.push("$spacing-".concat(name, ": ").concat(value));
  });
  return themeSpacings;
}