"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _theme = _interopRequireDefault(require("../../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeBackground = function NodeBackground(renderTemplate) {
  return renderTemplate({
    style: {
      fill: _theme.default.colors.white,
      stroke: 'none'
    },
    transform: "scale(".concat(0.48, ")")
  });
};

var _default = NodeBackground;
exports.default = _default;