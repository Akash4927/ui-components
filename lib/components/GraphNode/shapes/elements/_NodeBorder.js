"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var NodeBorder = function NodeBorder(renderTemplate, contrastMode, _ref) {
  var hasMetric = _ref.hasMetric,
      color = _ref.color;
  return renderTemplate({
    stroke: color,
    transform: "scale(".concat(0.5, ")"),
    style: {
      fill: 'none',
      strokeOpacity: hasMetric ? 0.5 : 1,
      strokeWidth: contrastMode ? 0.15 : 0.12
    }
  });
};

var _default = NodeBorder;
exports.default = _default;