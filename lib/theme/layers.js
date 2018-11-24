"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeLayersAsScss = themeLayersAsScss;
exports.layers = void 0;

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

var _kebabCase2 = _interopRequireDefault(require("lodash/kebabCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var layers = {
  front: 1,
  toolbar: 2,
  alert: 3,
  notification: 4,
  dropdown: 5,
  tooltip: 6,
  modal: 7
}; // Collects all theme z-index layers as SCSS vars

exports.layers = layers;

function themeLayersAsScss() {
  var themeLayers = [];
  (0, _forEach2.default)(layers, function (value, name) {
    themeLayers.push("$layer-".concat((0, _kebabCase2.default)(name), ": ").concat(value));
  });
  return themeLayers;
}