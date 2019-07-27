"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Info = exports.Example = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _selectors = require("../theme/selectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Example = _styledComponents.default.div.withConfig({
  displayName: "example__Example",
  componentId: "cuwuc9-0"
})(["margin-bottom:", ";"], (0, _selectors.spacing)('large'));

exports.Example = Example;

var Info = _styledComponents.default.h4.withConfig({
  displayName: "example__Info",
  componentId: "cuwuc9-1"
})(["color:", ";font-size:", ";margin-bottom:", ";"], function (props) {
  return props.theme.colors.gray600;
}, function (props) {
  return props.theme.fontSizes.normal;
}, (0, _selectors.spacing)('small'));

exports.Info = Info;