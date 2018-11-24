"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../../utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledText = _styledComponents.default.span.withConfig({
  displayName: "Text__StyledText",
  componentId: "sc-1nvq7mp-0"
})(["font-family:", ";color:", ";font-size:", ";font-weight:", ";text-transform:", ";font-style:", ";"], function (props) {
  return props.theme.fontFamilies.regular;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return (0, _theme.lookupValue)(props, props.theme.fontSizes, props.theme.fontSizes.normal);
}, function (props) {
  return props.bold ? '600' : '400';
}, function (props) {
  return props.capitalize ? 'uppercase' : 'none';
}, function (props) {
  return props.italic ? 'italic' : 'normal';
});
/**
 * Text supports all the sizes from _theme.fontSizes_.
 * ```javascript
 * import { Text } from 'weaveworks-ui-components';
 *
 * export default function TextExample() {
 *   return (
 *     <div>
 *       <Text>Normal</Text>
 *
 *       <Text italic>Normal Italic</Text>
 *
 *       <Text bold>Normal Bold</Text>
 *
 *       <Text large>Large</Text>
 *
 *       <Text large italic>Large Italic</Text>
 *
 *       <Text large bold>Large Bold</Text>
 *
 *       <Text huge>Huge</Text>
 *
 *       <Text huge italic>Huge Italic</Text>
 *
 *       <Text huge bold>Huge Bold</Text>
 *     </div>
 *   );
 * }
 * ```
 */
// Working around https://github.com/weaveworks/ui-components/issues/38


var Text = function Text(props) {
  return _react.default.createElement(StyledText, props);
};

Text.propTypes = {
  /**
   * Italicize the text
   */
  italic: _propTypes.default.bool,

  /**
   * Make the text bold
   */
  bold: _propTypes.default.bool
};
Text.defaultProps = {
  bold: false,
  italic: false
};
var _default = Text;
exports.default = _default;