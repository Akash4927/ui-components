"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridColumnWrapper = _styledComponents.default.div.withConfig({
  displayName: "GridColumn__GridColumnWrapper",
  componentId: "sc-1jktvnb-0"
})(["width:", "%;display:block;margin:0.5em;float:left;&:after{display:table;clear:both;content:'';}"], function (props) {
  return props.span / 0.12;
});
/**
 * A child of the `<Grid />` component. Used for building layouts.
 *
 * See also [Grid](/components/Grid)
 */


var GridColumn = function GridColumn(_ref) {
  var children = _ref.children,
      span = _ref.span;
  return _react.default.createElement(GridColumnWrapper, {
    className: "weave-grid-column",
    span: span
  }, children);
};

GridColumn.propTypes = {
  /**
   * The desired col-span; maximum of 12 columns
   */
  span: _propTypes.default.number.isRequired
};
var _default = GridColumn;
exports.default = _default;