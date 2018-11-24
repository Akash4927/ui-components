"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _theme = _interopRequireDefault(require("../../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeShadow = function NodeShadow(renderTemplate, contrastMode) {
  return renderTemplate({
    transform: "scale(".concat(0.49, ")"),
    style: {
      fill: 'none',
      stroke: contrastMode ? _theme.default.colors.white : _theme.default.colors.gray50,
      strokeWidth: contrastMode ? 0.25 : 0.18
    }
  });
};

var _default = NodeShadow;
exports.default = _default;