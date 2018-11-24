"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var NodeMetricFill = function NodeMetricFill(renderTemplate, _ref) {
  var clipId = _ref.clipId,
      metricColor = _ref.metricColor;
  return renderTemplate({
    transform: "scale(".concat(0.48, ")"),
    clipPath: "url(#".concat(clipId, ")"),
    style: {
      fill: metricColor,
      fillOpacity: 0.7,
      stroke: 'none'
    }
  });
};

var _default = NodeMetricFill;
exports.default = _default;