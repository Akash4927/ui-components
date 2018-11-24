"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _minBy2 = _interopRequireDefault(require("lodash/minBy"));

var _sortedIndex2 = _interopRequireDefault(require("lodash/sortedIndex"));

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _d3Shape = require("d3-shape");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getDatapointAtTimestamp(series, timestampSec) {
  var timestamps = series.datapoints.map(function (d) {
    return d.timestampSec;
  });
  var index = (0, _sortedIndex2.default)(timestamps, timestampSec);
  return series.datapoints[index];
}

var Canvas = _styledComponents.default.svg.withConfig({
  displayName: "_Chart__Canvas",
  componentId: "sc-1ckw1eu-0"
})(["cursor:crosshair;position:absolute;"]);

var SeriesLineChart = _styledComponents.default.path.attrs({
  strokeWidth: 2,
  fill: 'none'
}).withConfig({
  displayName: "_Chart__SeriesLineChart",
  componentId: "sc-1ckw1eu-1"
})(["opacity:", ";pointer-events:none;"], function (props) {
  return props.faded ? 0.1 : 1;
});

var SeriesAreaChart = _styledComponents.default.path.attrs({
  // Use strokeWidth only on focused area graphs to make sure ultra-thin ones
  // still get visible, but don't use it when multiple series are visible so
  // that it doesn't look like it's other series' border.
  strokeWidth: function strokeWidth(_ref) {
    var focused = _ref.focused;
    return focused ? 1 : 0;
  },
  stroke: function stroke(_ref2) {
    var fill = _ref2.fill;
    return fill;
  }
}).withConfig({
  displayName: "_Chart__SeriesAreaChart",
  componentId: "sc-1ckw1eu-2"
})(["opacity:", ";pointer-events:none;"], function (props) {
  return props.faded ? 0.05 : 0.75;
});

var Chart =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Chart, _React$PureComponent);

  function Chart() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Chart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Chart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleResize", (0, _debounce2.default)(function () {
      var _this$getSvgBoundingR = _this.getSvgBoundingRect(),
          width = _this$getSvgBoundingR.width,
          height = _this$getSvgBoundingR.height;

      _this.props.onChartResize({
        chartWidth: width,
        chartHeight: height
      });
    }, 50));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleGraphMouseMove", function (ev) {
      var _this$props = _this.props,
          timeScale = _this$props.timeScale,
          valueScale = _this$props.valueScale,
          timestampQuantizer = _this$props.timestampQuantizer;

      var _this$getSvgBoundingR2 = _this.getSvgBoundingRect(),
          left = _this$getSvgBoundingR2.left,
          top = _this$getSvgBoundingR2.top;

      var cursorXOffset = ev.clientX - left;
      var cursorYOffset = ev.clientY - top;
      var cursorValue = valueScale.invert(cursorYOffset);
      var cursorTimestampSec = timeScale.invert(cursorXOffset);
      var hoverTimestampSec = timestampQuantizer(cursorTimestampSec); // Build an array of hover points by evaluating the multiseries at the cursor x-coord.

      var hoverPoints = _this.props.multiSeries.map(function (series) {
        var datapoint = getDatapointAtTimestamp(series, hoverTimestampSec);
        return {
          graphValue: datapoint.offset + datapoint.value,
          value: datapoint.value,
          key: series.key,
          hoverName: series.hoverName,
          color: series.color
        };
      });

      var focusedSeries = {};

      if (_this.props.showStacked) {
        // If the graph is stacked, focus the closest series above the,
        // cursor, as that one's area is hovered by the mouse cursor.
        var isSeriesAbove = function isSeriesAbove(s) {
          return s.graphValue >= cursorValue;
        };

        var hoverPointsAboveCursor = hoverPoints.filter(isSeriesAbove);
        focusedSeries = (0, _minBy2.default)(hoverPointsAboveCursor, 'graphValue') || {};
      } else {
        // Otherwise, in a line graph focus the series with the nearest value.
        var distanceFromCursor = function distanceFromCursor(s) {
          return Math.abs(s.graphValue - cursorValue);
        };

        focusedSeries = (0, _minBy2.default)(hoverPoints, distanceFromCursor) || {};
      } // Update the hover points with focus data.


      hoverPoints = hoverPoints.map(function (s) {
        return _objectSpread({}, s, {
          focused: focusedSeries.key === s.key
        });
      });

      _this.props.onHoverUpdate({
        hoverY: cursorYOffset,
        hoverX: timeScale(hoverTimestampSec),
        hoverTimestampSec: hoverTimestampSec,
        hoverPoints: hoverPoints
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleGraphMouseLeave", function () {
      _this.props.onHoverUpdate({
        hoverTimestampSec: null,
        hoverPoints: null,
        hoverX: null,
        hoverY: null
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveSvgRef", function (ref) {
      _this.svgRef = ref;
    });

    return _this;
  }

  _createClass(Chart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: "getSvgBoundingRect",
    value: function getSvgBoundingRect() {
      var defaultRect = {
        width: 0,
        height: 0,
        top: 0,
        left: 0
      };
      return this.svgRef ? this.svgRef.getBoundingClientRect() : defaultRect;
    }
  }, {
    key: "isFadedSeries",
    value: function isFadedSeries(series) {
      var _this$props2 = this.props,
          hoveredLegendKey = _this$props2.hoveredLegendKey,
          selectedLegendKeys = _this$props2.selectedLegendKeys; // Show series as faded if no series is selected and some other series is hovered.

      return selectedLegendKeys.length === 0 && hoveredLegendKey && hoveredLegendKey !== series.key;
    }
  }, {
    key: "isFocusedSeries",
    value: function isFocusedSeries(series) {
      var _this$props3 = this.props,
          hoveredLegendKey = _this$props3.hoveredLegendKey,
          selectedLegendKeys = _this$props3.selectedLegendKeys; // Show series as focused if it's selected or hovered.

      return hoveredLegendKey === series.key || selectedLegendKeys.includes(series.key);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          multiSeries = _this$props4.multiSeries,
          timeScale = _this$props4.timeScale,
          valueScale = _this$props4.valueScale;
      var lineFunction = (0, _d3Shape.line)().defined(function (d) {
        return d.value !== null;
      }).x(function (d) {
        return timeScale(d.timestampSec);
      }).y(function (d) {
        return valueScale(d.value);
      });
      var areaFunction = (0, _d3Shape.area)().defined(function (d) {
        return d.value !== null;
      }).x(function (d) {
        return timeScale(d.timestampSec);
      }).y1(function (d) {
        return valueScale(d.offset + d.value);
      }).y0(function (d) {
        return valueScale(d.offset);
      });
      return _react.default.createElement(Canvas, {
        width: "100%",
        height: "100%",
        innerRef: this.saveSvgRef,
        onMouseMove: this.handleGraphMouseMove,
        onMouseLeave: this.handleGraphMouseLeave
      }, multiSeries.map(function (series) {
        return _this2.props.showStacked ? _react.default.createElement(SeriesAreaChart, {
          key: series.key,
          faded: _this2.isFadedSeries(series),
          focused: _this2.isFocusedSeries(series),
          d: areaFunction(series.datapoints),
          fill: series.color
        }) : _react.default.createElement(SeriesLineChart, {
          key: series.key,
          faded: _this2.isFadedSeries(series),
          d: lineFunction(series.datapoints),
          stroke: series.color
        });
      }));
    }
  }]);

  return Chart;
}(_react.default.PureComponent);

Chart.propTypes = {
  multiSeries: _propTypes.default.array.isRequired,
  showStacked: _propTypes.default.bool.isRequired,
  timeScale: _propTypes.default.func.isRequired,
  valueScale: _propTypes.default.func.isRequired,
  timestampQuantizer: _propTypes.default.func.isRequired,
  selectedLegendKeys: _propTypes.default.array.isRequired,
  hoveredLegendKey: _propTypes.default.string,
  onHoverUpdate: _propTypes.default.func.isRequired,
  onChartResize: _propTypes.default.func.isRequired
};
Chart.defaultProps = {
  hoveredLegendKey: ''
};
var _default = Chart;
exports.default = _default;