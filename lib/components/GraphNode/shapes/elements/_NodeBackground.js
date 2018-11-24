"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _theme = _interopRequireDefault(require("../../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeBackground = function NodeBackground(renderTemplate) {
  return renderTemplate({
    transform: "scale(".concat(0.48, ")"),
    style: {
      stroke: 'none',
      fill: _theme.default.colors.white
    }
  });
};

var _default = NodeBackground;
exports.default = _default;