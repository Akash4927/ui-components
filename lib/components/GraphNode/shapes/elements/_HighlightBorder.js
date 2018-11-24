"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _theme = _interopRequireDefault(require("../../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HighlightBorder = function HighlightBorder(renderTemplate, contrastMode) {
  return renderTemplate({
    transform: "scale(".concat(0.5, ")"),
    style: {
      fill: 'none',
      stroke: _theme.default.colors.blue400,
      strokeOpacity: contrastMode ? 0.5 : 0.4,
      strokeWidth: contrastMode ? 1 : 0.8
    }
  }, {
    allowStroke: false
  });
};

var _default = HighlightBorder;
exports.default = _default;