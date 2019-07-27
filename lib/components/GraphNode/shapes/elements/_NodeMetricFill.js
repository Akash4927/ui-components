"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var NodeMetricFill = function NodeMetricFill(renderTemplate, _ref) {
  var clipId = _ref.clipId,
      metricColor = _ref.metricColor;
  return renderTemplate({
    clipPath: "url(#".concat(clipId, ")"),
    style: {
      fill: metricColor,
      fillOpacity: 0.7,
      stroke: 'none'
    },
    transform: "scale(".concat(0.48, ")")
  });
};

var _default = NodeMetricFill;
exports.default = _default;