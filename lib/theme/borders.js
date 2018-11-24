"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeBorderRadiiAsScss = themeBorderRadiiAsScss;
exports.borderRadius = void 0;

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

var _kebabCase2 = _interopRequireDefault(require("lodash/kebabCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var borderRadius = {
  none: '0',
  soft: '2px',
  circle: '50%'
}; // Collects all theme border radii as SCSS vars.

exports.borderRadius = borderRadius;

function themeBorderRadiiAsScss() {
  var themeBorderRadii = [];
  (0, _forEach2.default)(borderRadius, function (value, name) {
    themeBorderRadii.push("$border-radius-".concat((0, _kebabCase2.default)(name), ": ").concat(value));
  });
  return themeBorderRadii;
}