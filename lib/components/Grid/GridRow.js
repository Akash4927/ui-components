"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridRowWrapper = _styledComponents.default.div.withConfig({
  displayName: "GridRow__GridRowWrapper",
  componentId: "sc-1gfnwdv-0"
})(["margin-top:10px;margin-bottom:10px;width:100%;display:flex;flex-direction:row;", ";", ";", ";"], function (props) {
  return props.align === 'left' && 'justify-content: flex-start;';
}, function (props) {
  return props.align === 'right' && 'justify-content: flex-end;';
}, function (props) {
  return props.align === 'center' && 'justify-content: center;';
});
/**
 * A row element that will flex children and align them to the left, center or right.
 */


var GridRow = function GridRow(_ref) {
  var alignContent = _ref.alignContent,
      children = _ref.children;
  return _react.default.createElement(GridRowWrapper, {
    className: "weave-grid-row",
    align: alignContent
  }, children);
};

GridRow.propTypes = {
  /**
   * The direction in which to justify content. Should be 'left', 'center', or 'right';
   */
  alignContent: _propTypes.default.string.isRequired
};
var _default = GridRow;
exports.default = _default;