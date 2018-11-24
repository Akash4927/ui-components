"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimelineRangeOverlay = _styledComponents.default.div.attrs({
  style: function style(_ref) {
    var x = _ref.x,
        width = _ref.width;
    return {
      transform: "translateX(".concat(x, "px)"),
      width: width
    };
  }
}).withConfig({
  displayName: "_TimelineRange__TimelineRangeOverlay",
  componentId: "sc-108jy-0"
})(["background-color:", ";position:absolute;opacity:0.15;height:100%;"], function (props) {
  return props.color;
});

var TimelineRange = function TimelineRange(_ref2) {
  var color = _ref2.color,
      timeScale = _ref2.timeScale,
      startAt = _ref2.startAt,
      endAt = _ref2.endAt,
      width = _ref2.width;
  var endShift = endAt ? Math.min(timeScale((0, _moment.default)(endAt)), width) : width;
  var startShift = startAt ? Math.max(timeScale((0, _moment.default)(startAt)), -width) : -width; // If the range interval is very short or we're zoomed out a lot, render the
  // interval as at least 4 pixels wide. Then re-adjust the left end of the
  // interval to account for the calibrated min-width.

  var length = Math.max(4, endShift - startShift);
  startShift = endShift - length;
  return _react.default.createElement(TimelineRangeOverlay, {
    color: color,
    x: startShift,
    width: length
  });
};

TimelineRange.propTypes = {
  color: _propTypes.default.string.isRequired,
  timeScale: _propTypes.default.func.isRequired,
  startAt: _propTypes.default.string,
  endAt: _propTypes.default.string,
  width: _propTypes.default.number.isRequired
};
TimelineRange.defaultProps = {
  endAt: '',
  startAt: ''
};
var _default = TimelineRange;
exports.default = _default;