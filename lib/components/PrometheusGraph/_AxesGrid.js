"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _last2 = _interopRequireDefault(require("lodash/last"));

var _flatMap2 = _interopRequireDefault(require("lodash/flatMap"));

var _round2 = _interopRequireDefault(require("lodash/round"));

var _range2 = _interopRequireDefault(require("lodash/range"));

var _find2 = _interopRequireDefault(require("lodash/find"));

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  top: ", "px;\n  left: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  top: -8px;\n  right: 5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-width: 0 0 0 1px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-width: 1px 0 0 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AxesGridContainer = _styledComponents.default.div.withConfig({
  displayName: "_AxesGrid__AxesGridContainer",
  componentId: "edfa0h-0"
})([""]);

var AxisLine = _styledComponents.default.div.attrs({
  style: function style(_ref) {
    var _ref$width = _ref.width,
        width = _ref$width === void 0 ? 0 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 0 : _ref$height;
    return {
      width: width,
      height: height
    };
  }
}).withConfig({
  displayName: "_AxesGrid__AxisLine",
  componentId: "edfa0h-1"
})(["border-style:dashed;border-color:", ";position:absolute;left:0;top:0;"], function (props) {
  return props.theme.colors.gray200;
});

var HorizontalLine = AxisLine.extend(_templateObject());
var VerticalLine = AxisLine.extend(_templateObject2());

var TickContainer = _styledComponents.default.div.attrs({
  style: function style(_ref2) {
    var _ref2$left = _ref2.left,
        left = _ref2$left === void 0 ? 0 : _ref2$left,
        _ref2$top = _ref2.top,
        top = _ref2$top === void 0 ? 0 : _ref2$top;
    return {
      left: left,
      top: top
    };
  }
}).withConfig({
  displayName: "_AxesGrid__TickContainer",
  componentId: "edfa0h-2"
})(["position:absolute;"]);

var TickLabel = _styledComponents.default.span.withConfig({
  displayName: "_AxesGrid__TickLabel",
  componentId: "edfa0h-3"
})(["color:", ";font-size:", ";display:block;position:absolute;white-space:nowrap;"], function (props) {
  return props.theme.colors.gray600;
}, function (props) {
  return props.theme.fontSizes.tiny;
});

var ValueTickLabel = TickLabel.extend(_templateObject3());
var TimeTickLabel = TickLabel.extend(_templateObject4(), function (props) {
  return props.height + 5;
});

function formatTimeTick(timeSec) {
  var timestamp = (0, _moment.default)(timeSec * 1000).utc(); // Show month and day at every full day.

  var startOfDay = timestamp.clone().startOf('day');

  if (timestamp.diff(startOfDay) === 0) {
    return timestamp.format('MMM DD');
  } // Show hour and minute at every full minute.


  var startOfMinute = timestamp.clone().startOf('minute');

  if (timestamp.diff(startOfMinute) === 0) {
    return timestamp.format('HH:mm');
  } // Otherwise show only the seconds context.


  return timestamp.format("ss'");
}

function getTimeTicksBetween(startTimeSec, endTimeSec) {
  // 1s, 2s, 5s, 15s, 30s, 1min, 2min, 5min, 15min, 30min, 1h, 2h, 4h, 8h, 24h intervals
  var stepsSec = [1, 2, 5, 15, 30, 60, 120, 300, 900, 1800, 3600, 7200, 14400, 28800, 86400]; // Tweak the step to show a reasonable number of
  // ticks, otherwise use the biggest unit possible.

  var stepSec = (0, _find2.default)(stepsSec, function (s) {
    return (endTimeSec - startTimeSec) / s < 8;
  }) || (0, _last2.default)(stepsSec); // Round up the time ticks to the time ticks step precision.

  var initialTickSec = Math.ceil(startTimeSec / stepSec) * stepSec;
  return (0, _range2.default)(initialTickSec, endTimeSec, stepSec);
}

function getValueTicks(metricUnits, minValue, maxValue) {
  /* eslint-disable no-restricted-properties */
  var powersOf10 = (0, _range2.default)(-6, 15).map(function (p) {
    return Math.pow(10, p);
  });
  var steps = metricUnits !== 'bytes' ? (0, _flatMap2.default)(powersOf10, function (p) {
    return [p, 2 * p, 5 * p];
  }) : (0, _range2.default)(50).map(function (p) {
    return Math.pow(2, p);
  });
  /* eslint-enable no-restricted-properties */

  var step = (0, _find2.default)(steps, function (s) {
    return maxValue / s < 4;
  }); // lodash `range()` doesn't include the end value in the returned array so we
  // add 1e-6 to move maxValue within the range

  return (0, _range2.default)((0, _round2.default)(minValue, 2), (0, _round2.default)(maxValue, 2) + 1e-6, step);
}

var AxesGrid =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AxesGrid, _React$PureComponent);

  function AxesGrid() {
    _classCallCheck(this, AxesGrid);

    return _possibleConstructorReturn(this, _getPrototypeOf(AxesGrid).apply(this, arguments));
  }

  _createClass(AxesGrid, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          chartWidth = _this$props.chartWidth,
          chartHeight = _this$props.chartHeight,
          timeScale = _this$props.timeScale,
          valueScale = _this$props.valueScale,
          metricUnits = _this$props.metricUnits,
          hasData = _this$props.hasData;
      if (!chartWidth || !chartHeight || !hasData) return null;

      var _valueScale$domain = valueScale.domain(),
          _valueScale$domain2 = _slicedToArray(_valueScale$domain, 2),
          yAxisMin = _valueScale$domain2[0],
          yAxisMax = _valueScale$domain2[1];

      var _timeScale$domain = timeScale.domain(),
          _timeScale$domain2 = _slicedToArray(_timeScale$domain, 2),
          startTimeSec = _timeScale$domain2[0],
          endTimeSec = _timeScale$domain2[1];

      var timeTicks = getTimeTicksBetween(startTimeSec, endTimeSec);
      var valueTicks = getValueTicks(metricUnits, yAxisMin, yAxisMax);
      var formatValue = this.props.valueFormatter(yAxisMax);
      return _react.default.createElement(AxesGridContainer, null, valueTicks.map(function (value) {
        return _react.default.createElement(TickContainer, {
          key: value,
          top: valueScale(value)
        }, _react.default.createElement(HorizontalLine, {
          width: chartWidth
        }), _react.default.createElement(ValueTickLabel, null, formatValue(value)));
      }), timeTicks.map(function (timeSec) {
        return _react.default.createElement(TickContainer, {
          key: timeSec,
          left: timeScale(timeSec)
        }, _react.default.createElement(VerticalLine, {
          height: chartHeight
        }), _react.default.createElement(TimeTickLabel, {
          height: chartHeight
        }, formatTimeTick(timeSec)));
      }));
    }
  }]);

  return AxesGrid;
}(_react.default.PureComponent);

AxesGrid.propTypes = {
  hasData: _propTypes.default.bool.isRequired,
  chartWidth: _propTypes.default.number.isRequired,
  chartHeight: _propTypes.default.number.isRequired,
  timeScale: _propTypes.default.func.isRequired,
  valueScale: _propTypes.default.func.isRequired,
  valueFormatter: _propTypes.default.func.isRequired,
  metricUnits: _propTypes.default.string.isRequired
};
var _default = AxesGrid;
exports.default = _default;