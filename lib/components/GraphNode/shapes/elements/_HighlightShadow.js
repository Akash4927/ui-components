"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _theme = _interopRequireDefault(require("../../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HighlightShadow = function HighlightShadow(renderTemplate, contrastMode) {
  return renderTemplate({
    transform: "scale(".concat(0.5, ")"),
    style: {
      fill: 'none',
      stroke: _theme.default.colors.white,
      strokeOpacity: contrastMode ? 0.4 : 0.5,
      strokeWidth: 0.7
    }
  }, {
    allowStroke: false
  });
};

var _default = HighlightShadow;
exports.default = _default;