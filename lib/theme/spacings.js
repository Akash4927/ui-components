"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeSpacingsAsScss = themeSpacingsAsScss;
exports.spacing = void 0;

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseSpacingNumber = 16;
var spacing = {
  // 16px
  base: "".concat(baseSpacingNumber, "px"),
  // 32px
  large: "".concat(baseSpacingNumber * 2, "px"),
  // 24px
  medium: "".concat(baseSpacingNumber * 1.5, "px"),
  none: '0',
  // 12px
  small: "".concat(baseSpacingNumber * 0.75, "px"),
  // 48px
  xl: "".concat(baseSpacingNumber * 3, "px"),
  // 8px
  xs: "".concat(baseSpacingNumber * 0.5, "px"),
  // 64px
  xxl: "".concat(baseSpacingNumber * 4, "px"),
  // 4px
  xxs: "".concat(baseSpacingNumber * 0.25, "px")
}; // Collects all theme spacing vars as SCSS vars.

exports.spacing = spacing;

function themeSpacingsAsScss() {
  var themeSpacings = [];
  (0, _forEach2.default)(spacing, function (value, name) {
    themeSpacings.push("$spacing-".concat(name, ": ").concat(value));
  });
  return themeSpacings;
}