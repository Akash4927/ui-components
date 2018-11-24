"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _theme = _interopRequireDefault(require("../../theme"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var charcoal100 = _theme.default.colors.purple900;
var charcoal70 = (0, _polished.transparentize)(0.3, charcoal100);
var charcoal50 = (0, _polished.transparentize)(0.5, charcoal100);
var charcoal20 = (0, _polished.transparentize)(0.8, charcoal100);
var dotSpinnerAnimation = (0, _styledComponents.keyframes)(["0%,100%{box-shadow:0em -2.6em 0em 0em ", ",1.8em -1.8em 0 0em ", ",2.5em 0em 0 0em ", ",1.75em 1.75em 0 0em ", ",0em 2.5em 0 0em ", ",-1.8em 1.8em 0 0em ", ",-2.6em 0em 0 0em ", ",-1.8em -1.8em 0 0em ", ";}12.5%{box-shadow:0em -2.6em 0em 0em ", ",1.8em -1.8em 0 0em ", ",2.5em 0em 0 0em ", ",1.75em 1.75em 0 0em ", ",0em 2.5em 0 0em ", ",-1.8em 1.8em 0 0em ", ",-2.6em 0em 0 0em ", ",-1.8em -1.8em 0 0em ", ";}25%{box-shadow:0em -2.6em 0em 0em ", ",1.8em -1.8em 0 0em ", ",2.5em 0em 0 0em ", ",1.75em 1.75em 0 0em ", ",0em 2.5em 0 0em ", ",-1.8em 1.8em 0 0em ", ",-2.6em 0em 0 0em ", ",-1.8em -1.8em 0 0em ", ";}37.5%{box-shadow:0em -2.6em 0em 0em ", ",1.8em -1.8em 0 0em ", ",2.5em 0em 0 0em ", ",1.75em 1.75em 0 0em ", ",0em 2.5em 0 0em ", ",-1.8em 1.8em 0 0em ", ",-2.6em 0em 0 0em ", ",-1.8em -1.8em 0 0em ", ";}50%{box-shadow:0em -2.6em 0em 0em ", ",1.8em -1.8em 0 0em ", ",2.5em 0em 0 0em ", ",1.75em 1.75em 0 0em ", ",0em 2.5em 0 0em ", ",-1.8em 1.8em 0 0em ", ",-2.6em 0em 0 0em ", ",-1.8em -1.8em 0 0em ", ";}62.5%{box-shadow:0em -2.6em 0em 0em ", ",1.8em -1.8em 0 0em ", ",2.5em 0em 0 0em ", ",1.75em 1.75em 0 0em ", ",0em 2.5em 0 0em ", ",-1.8em 1.8em 0 0em ", ",-2.6em 0em 0 0em ", ",-1.8em -1.8em 0 0em ", ";}75%{box-shadow:0em -2.6em 0em 0em ", ",1.8em -1.8em 0 0em ", ",2.5em 0em 0 0em ", ",1.75em 1.75em 0 0em ", ",0em 2.5em 0 0em ", ",-1.8em 1.8em 0 0em ", ",-2.6em 0em 0 0em ", ",-1.8em -1.8em 0 0em ", ";}87.5%{box-shadow:0em -2.6em 0em 0em ", ",1.8em -1.8em 0 0em ", ",2.5em 0em 0 0em ", ",1.75em 1.75em 0 0em ", ",0em 2.5em 0 0em ", ",-1.8em 1.8em 0 0em ", ",-2.6em 0em 0 0em ", ",-1.8em -1.8em 0 0em ", ";}"], charcoal100, charcoal20, charcoal20, charcoal20, charcoal20, charcoal20, charcoal50, charcoal70, charcoal70, charcoal100, charcoal20, charcoal20, charcoal20, charcoal20, charcoal20, charcoal50, charcoal50, charcoal70, charcoal100, charcoal20, charcoal20, charcoal20, charcoal20, charcoal20, charcoal20, charcoal50, charcoal70, charcoal100, charcoal20, charcoal20, charcoal20, charcoal20, charcoal20, charcoal20, charcoal50, charcoal70, charcoal100, charcoal20, charcoal20, charcoal20, charcoal20, charcoal20, charcoal20, charcoal50, charcoal70, charcoal100, charcoal20, charcoal20, charcoal20, charcoal20, charcoal20, charcoal20, charcoal50, charcoal70, charcoal100, charcoal20, charcoal20, charcoal20, charcoal20, charcoal20, charcoal20, charcoal50, charcoal70, charcoal100);

var DotSpinner = _styledComponents.default.div.withConfig({
  displayName: "CircularProgress__DotSpinner",
  componentId: "rn9lch-0"
})(["border-radius:", ";position:relative;text-indent:-9999em;-webkit-animation:", " 1.1s infinite ease;animation:", " 1.1s infinite ease;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);", ";"], function (props) {
  return props.theme.borderRadius.circle;
}, dotSpinnerAnimation, dotSpinnerAnimation, function (props) {
  return props.scale && "\n    margin: ".concat(15 * props.scale, "px;\n    font-size: ").concat(5 * props.scale, "px;\n    width: ").concat(5 * props.scale, "px;\n    height: ").concat(5 * props.scale, "px;\n  ");
});

var ProgressContainer = _styledComponents.default.div.withConfig({
  displayName: "CircularProgress__ProgressContainer",
  componentId: "rn9lch-1"
})(["display:inline-block;"]);

var ProgressWrapper = _styledComponents.default.div.withConfig({
  displayName: "CircularProgress__ProgressWrapper",
  componentId: "rn9lch-2"
})(["width:", "px;height:", "px;", ";", ";"], function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.inline && "\n    display: inline-block;\n    vertical-align: middle;\n  ";
}, function (props) {
  return props.center && "\n    margin-left: auto;\n    margin-right: auto;\n  ";
});
/**
 * Size is set in px
 * ```javascript
 * import React from 'react';
 * import { CircularProgress } from 'weaveworks-ui-components'
 *
 * React.render(
 *   <div>
 *     <CircularProgress size={35} />
 *     <CircularProgress inline /> Inline
 *     <CircularProgress center />
 *   </div>
 * );
 * ```
 */


var CircularProgress = function CircularProgress(props) {
  return _react.default.createElement(ProgressWrapper, props, _react.default.createElement(ProgressContainer, null, _react.default.createElement(DotSpinner, {
    scale: props.size / 35
  })));
};

CircularProgress.propTypes = {
  /** Size of spinner in px */
  size: _propTypes.default.number,

  /** Whether to display the spinner inline */
  inline: _propTypes.default.bool,

  /** Whether to center the spinner horizontally */
  center: _propTypes.default.bool
};
CircularProgress.defaultProps = {
  size: 30,
  inline: false,
  center: false
};
var _default = CircularProgress;
exports.default = _default;