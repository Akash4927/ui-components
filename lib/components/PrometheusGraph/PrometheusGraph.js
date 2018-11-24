"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _zipObject2 = _interopRequireDefault(require("lodash/zipObject"));

var _values2 = _interopRequireDefault(require("lodash/values"));

var _sortBy2 = _interopRequireDefault(require("lodash/sortBy"));

var _size2 = _interopRequireDefault(require("lodash/size"));

var _reverse2 = _interopRequireDefault(require("lodash/reverse"));

var _range2 = _interopRequireDefault(require("lodash/range"));

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _noop2 = _interopRequireDefault(require("lodash/noop"));

var _min2 = _interopRequireDefault(require("lodash/min"));

var _max2 = _interopRequireDefault(require("lodash/max"));

var _last2 = _interopRequireDefault(require("lodash/last"));

var _keys2 = _interopRequireDefault(require("lodash/keys"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _indexOf2 = _interopRequireDefault(require("lodash/indexOf"));

var _head2 = _interopRequireDefault(require("lodash/head"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _fromPairs2 = _interopRequireDefault(require("lodash/fromPairs"));

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

var _flatten2 = _interopRequireDefault(require("lodash/flatten"));

var _first2 = _interopRequireDefault(require("lodash/first"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _d3Scale = require("d3-scale");

var _d3Format = require("d3-format");

var _d3Shape = require("d3-shape");

var _theme = _interopRequireDefault(require("../../theme"));

var _Chart = _interopRequireDefault(require("./_Chart"));

var _AxesGrid = _interopRequireDefault(require("./_AxesGrid"));

var _ErrorOverlay = _interopRequireDefault(require("./_ErrorOverlay"));

var _LoadingOverlay = _interopRequireDefault(require("./_LoadingOverlay"));

var _DeploymentAnnotations = _interopRequireDefault(require("./_DeploymentAnnotations"));

var _HoverInfo = _interopRequireDefault(require("./_HoverInfo"));

var _Legend = _interopRequireDefault(require("./_Legend"));

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function parseGraphValue(value) {
  var val = parseFloat(value);

  if (Number.isNaN(val)) {
    // "+Inf", "-Inf", "+Inf" will be parsed into NaN by parseFloat(). The
    // can't be graphed, so show them as gaps (null).
    return null;
  }

  return val;
}

function asJSONString(hash) {
  // Return empty string instead of empty hash.
  if ((0, _isEmpty2.default)(hash)) return '';
  return JSON.stringify(hash, null, 1);
}

function getDefaultSeriesNameParts(series) {
  // Extract metric name in a separate variable.
  var metricName = (0, _get2.default)(series.metric, '__name__') || '';
  var metricHash = (0, _omit2.default)(series.metric, ['__name__']); // Handle some special cases if metric name is not present.

  if (!metricName) {
    // Return the query string if the series has no metrics.
    if ((0, _isEmpty2.default)(metricHash)) {
      return [series.query];
    } // Return the value if only a single one is present.


    if ((0, _size2.default)(metricHash) === 1) {
      return [(0, _first2.default)((0, _values2.default)(metricHash))];
    }
  } // Return a stringified JSON of metrics
  // (with metric name in front if it exists).


  return ["".concat(metricName).concat(asJSONString(metricHash))];
}

function getColorTheme(_ref) {
  var colorTheme = _ref.colorTheme,
      showStacked = _ref.showStacked;
  return function (index) {
    var colors = _toConsumableArray(_theme.default.colors.graphThemes[colorTheme]); // Reverse the order of colors for line graphs for improved visibility.


    if (!showStacked) (0, _reverse2.default)(colors);
    return colors[index % colors.length];
  };
}

var GraphWrapper = _styledComponents.default.div.withConfig({
  displayName: "PrometheusGraph__GraphWrapper",
  componentId: "nrxjr1-0"
})(["position:relative;padding-left:45px;"]);

var GraphContainer = _styledComponents.default.div.withConfig({
  displayName: "PrometheusGraph__GraphContainer",
  componentId: "nrxjr1-1"
})(["position:relative;min-height:170px;margin-bottom:20px;opacity:", ";"], function (props) {
  return props.loading ? 0.35 : 1;
});

var AxisLabel = _styledComponents.default.span.withConfig({
  displayName: "PrometheusGraph__AxisLabel",
  componentId: "nrxjr1-2"
})(["color:", ";font-size:", ";opacity:", ";transform:translate(-60px,165px) rotate(-90deg);transform-origin:left top 0;display:inline-block;"], function (props) {
  return props.theme.colors.black;
}, function (props) {
  return props.theme.fontSizes.normal;
}, function (props) {
  return props.loading ? 0.35 : 1;
});

var valueFormatters = {
  numeric: function numeric(number) {
    var step = number / 7;
    var formatNumber = number > 10 ? (0, _d3Format.formatPrefix)(".".concat((0, _d3Format.precisionPrefix)(step, number)), number) : (0, _d3Format.format)(".".concat((0, _d3Format.precisionFixed)(step), "f"));
    return function (n) {
      if (n === null) return '---';
      if (n === 0) return '0';
      return formatNumber(n);
    };
  },
  seconds: function seconds(maxSeconds) {
    var data = [{
      label: 'w',
      unit: 7 * 24 * 60 * 60
    }, {
      label: 'd',
      unit: 24 * 60 * 60
    }, {
      label: 'h',
      unit: 60 * 60
    }, {
      label: 'm',
      unit: 60
    }, {
      label: 's',
      unit: 1
    }, {
      label: 'ms',
      unit: 1 / 1000
    }, {
      label: 'µs',
      unit: 1 / 1000 / 1000
    }].find(function (_ref2) {
      var unit = _ref2.unit;
      return maxSeconds / unit >= 2;
    });
    return function (n) {
      if (n === null) return '---';
      if (!data) return '0';
      return "".concat(Math.round(n / data.unit), " ").concat(data.label);
    };
  },
  bytes: function bytes(maxBytes) {
    var data = [{
      label: 'TB',
      unit: 1024 * 1024 * 1024 * 1024
    }, {
      label: 'GB',
      unit: 1024 * 1024 * 1024
    }, {
      label: 'MB',
      unit: 1024 * 1024
    }, {
      label: 'kB',
      unit: 1024
    }, {
      label: 'B',
      unit: 1
    }].find(function (_ref3) {
      var unit = _ref3.unit;
      return maxBytes / unit >= 2;
    });
    return function (n) {
      if (n === null) return '---';
      if (!data) return '0';
      return "".concat(Math.round(n / data.unit), " ").concat(data.label);
    };
  },
  percent: function percent() {
    var formatPercent = (0, _d3Format.format)('.2%');
    return function (n) {
      if (n === null) return '---';
      if (n === 0) return '0%';
      return formatPercent(n);
    };
  }
};
/**
 * Renders a graph based on Prometheus data fed through `multiSeries` prop.
 * Optionally adds deployment annotations to the graph.
 *
 * ```javascript
 * export default class PrometheusGraphExample extends React.Component {
 *   constructor() {
 *     super();
 *
 *     this.state = {
 *       multiSeries: ...,
 *       startTime: moment('2018-02-05T11:24:14Z').unix(),
 *       endTime: moment('2018-02-05T11:54:14Z').unix(),
 *       stepDuration: 9,
 *     };
 *   }
 *
 *   render() {
 *     return (
 *       <PrometheusGraph
 *         showStacked
 *         multiSeries={this.state.multiSeriesJobs}
 *         stepDurationSec={this.state.stepDuration}
 *         startTimeSec={this.state.startTime}
 *         endTimeSec={this.state.endTime}
 *         getSeriesNameParts={({ metric }) => JSON.stringify(metric)}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 */

var PrometheusGraph =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(PrometheusGraph, _React$PureComponent);

  function PrometheusGraph(_props, context) {
    var _this;

    _classCallCheck(this, PrometheusGraph);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PrometheusGraph).call(this, _props, context));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelectedLegendKeysChange", function (selectedLegendKeys) {
      _this.prepareMultiSeries(_this.props, {
        selectedLegendKeys: selectedLegendKeys
      });

      _this.setState({
        selectedLegendKeys: selectedLegendKeys
      });

      _this.props.onChangeLegendSelection(selectedLegendKeys);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleHoveredLegendKeyChange", function (hoveredLegendKey) {
      _this.setState({
        hoveredLegendKey: hoveredLegendKey
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleHoverUpdate", function (_ref4) {
      var hoverPoints = _ref4.hoverPoints,
          hoverTimestampSec = _ref4.hoverTimestampSec,
          hoverX = _ref4.hoverX,
          hoverY = _ref4.hoverY;

      _this.setState({
        hoverPoints: hoverPoints,
        hoverTimestampSec: hoverTimestampSec,
        hoverX: hoverX,
        hoverY: hoverY
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChartResize", function (_ref5) {
      var chartWidth = _ref5.chartWidth,
          chartHeight = _ref5.chartHeight;

      _this.setState(_objectSpread({
        chartWidth: chartWidth,
        chartHeight: chartHeight
      }, _this.prepareTimeAndValueScales(_this.props, _this.state.visibleMultiSeries)));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "prepareMultiSeries", function (props) {
      var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state,
          selectedLegendKeys = _ref6.selectedLegendKeys;

      var getSeriesColor = getColorTheme(props);

      var getSeriesNameParts = function getSeriesNameParts(series) {
        return props.getSeriesNameParts(series, props.multiSeries);
      }; // The key generating function will make series key equal the series name,
      // unless this is not the first series with this name, in which case the
      // index of the series within the legend is attached to the key.


      var multiSeriesByName = props.multiSeries.map(getSeriesNameParts);

      var getDefaultSeriesKey = function getDefaultSeriesKey(series, index) {
        var seriesName = (0, _head2.default)(getSeriesNameParts(series));
        var firstIndex = (0, _indexOf2.default)(multiSeriesByName, seriesName);
        var seriesKey = seriesName;

        if (firstIndex !== index) {
          seriesKey = "".concat(seriesKey, "____").concat(index);
        }

        return seriesKey;
      }; // Use default key assigner only if no explicit one has been provided.


      var getSeriesKey = props.getSeriesKey || getDefaultSeriesKey; // Build a dictionary that references original multi series by keys,
      // and a sorted list of those keys by which we can later iterate.

      var getSeriesKeyValuePair = function getSeriesKeyValuePair(series, index) {
        return [getSeriesKey(series, index), series];
      };

      var multiSeriesByKey = (0, _fromPairs2.default)(props.multiSeries.map(getSeriesKeyValuePair));
      var multiSeriesKeys = (0, _keys2.default)(multiSeriesByKey).sort(); // Calculate the keys of stacked series:
      //   1. If the graph isn't stacked, then this array should be empty.
      //   2. If the graph is stacked and some series are selected, only
      //      those selected ones will be displayed so only stack them.
      //   3. If the graph is stacked and no series is selected, all the
      //      series are displayed, so they should all be stacked.

      var stackedMultiSeriesKeys = [];

      if (props.showStacked) {
        stackedMultiSeriesKeys = selectedLegendKeys.length > 0 ? selectedLegendKeys : multiSeriesKeys;
      } // This D3 scale takes care of rounding all the datapoints to the nearest discrete timestamp.


      var timestampQuantizer = _this.getTimestampQuantizer(props);

      var timestampSecs = timestampQuantizer.range(); // Initialize all the graph values to null, as if the graph was empty.

      var valuesByTimestamp = {};
      timestampSecs.forEach(function (timestampSec) {
        valuesByTimestamp[timestampSec] = {
          timestampSec: timestampSec
        };
        multiSeriesKeys.forEach(function (seriesKey) {
          valuesByTimestamp[timestampSec][seriesKey] = null;
        });
      }); // Go through the datapoints of all the series and fill in
      // their values (in a format that works for D3 stack helpers).

      (0, _forEach2.default)(multiSeriesByKey, function (series, seriesKey) {
        (0, _forEach2.default)(series.values, function (point) {
          var value = parseGraphValue(point[1]);
          var timestampSec = timestampQuantizer(point[0]);
          valuesByTimestamp[timestampSec][seriesKey] = value;
        });
      }); // Stack the graph series in the alphabetical order.

      var stackFunction = (0, _d3Shape.stack)().keys(stackedMultiSeriesKeys);
      var valuesForStacking = (0, _sortBy2.default)((0, _values2.default)(valuesByTimestamp), ['timestampSec']);
      var stackedData = (0, _zipObject2.default)(stackedMultiSeriesKeys, stackFunction(valuesForStacking));

      var getStackedOffset = function getStackedOffset(seriesKey, timestampIndex) {
        return stackedMultiSeriesKeys.includes(seriesKey) ? stackedData[seriesKey][timestampIndex][0] : 0;
      }; // Finally store the multi-series ready to be graphed.


      var multiSeries = multiSeriesKeys.map(function (seriesKey, seriesIndex) {
        return {
          key: seriesKey,
          color: getSeriesColor(seriesIndex),
          hoverName: getSeriesNameParts(multiSeriesByKey[seriesKey]),
          legendNameParts: getSeriesNameParts(multiSeriesByKey[seriesKey], true),
          datapoints: timestampSecs.map(function (timestampSec, timestampIndex) {
            return {
              timestampSec: timestampSec,
              value: valuesByTimestamp[timestampSec][seriesKey],
              offset: getStackedOffset(seriesKey, timestampIndex)
            };
          })
        };
      });
      var visibleMultiSeries = // If no series is selected, show all of them.
      _this.state.selectedLegendKeys.length === 0 ? multiSeries : // Otherwise show only the selected multi series.
      multiSeries.filter(function (series) {
        return _this.state.selectedLegendKeys.includes(series.key);
      });

      var _this$prepareTimeAndV = _this.prepareTimeAndValueScales(props, visibleMultiSeries),
          timeScale = _this$prepareTimeAndV.timeScale,
          valueScale = _this$prepareTimeAndV.valueScale;

      _this.setState({
        multiSeries: multiSeries,
        visibleMultiSeries: visibleMultiSeries,
        timeScale: timeScale,
        valueScale: valueScale
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "prepareTimeAndValueScales", function (props, multiseries) {
      var chartWidth;
      var chartHeight;

      if (_this.chartRef) {
        var _this$chartRef$getSvg = _this.chartRef.getSvgBoundingRect();

        chartWidth = _this$chartRef$getSvg.width;
        chartHeight = _this$chartRef$getSvg.height;
      } else {
        var _this$state = _this.state;
        chartHeight = _this$state.chartHeight;
        chartWidth = _this$state.chartWidth;
      }

      var timeScale = _this.getTimeScale(props, chartWidth);

      var valueScale = _this.getValueScale(props, multiseries, chartHeight);

      return {
        timeScale: timeScale,
        valueScale: valueScale
      };
    });

    _this.state = {
      multiSeries: [],
      selectedLegendKeys: _props.selectedLegendKeys,
      hoveredLegendKey: null,
      hoverTimestampSec: null,
      hoverPoints: null,
      hoverX: null,
      hoverY: null,
      chartWidth: 0,
      chartHeight: 0,
      timeScale: null,
      valueScale: null
    };
    return _this;
  }

  _createClass(PrometheusGraph, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.prepareMultiSeries(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.multiSeries !== nextProps.multiSeries) {
        this.prepareMultiSeries(nextProps);
      }

      if (this.props.selectedLegendKeys !== nextProps.selectedLegendKeys) {
        var selectedLegendKeys = nextProps.selectedLegendKeys;
        this.prepareMultiSeries(nextProps, {
          selectedLegendKeys: selectedLegendKeys
        });
        this.setState({
          selectedLegendKeys: selectedLegendKeys
        });
      }
    }
  }, {
    key: "getMaxMinGraphValue",
    value: function getMaxMinGraphValue(props, visibleMultiSeries) {
      var yPositions = (0, _flatten2.default)(visibleMultiSeries.map(function (series) {
        return series.datapoints.map(function (datapoint) {
          return datapoint.offset + datapoint.value;
        });
      }));
      return {
        max: (0, _max2.default)([props.valuesMinSpread * 1.05].concat(_toConsumableArray(yPositions))),
        min: (0, _min2.default)([0].concat(_toConsumableArray(yPositions)))
      };
    }
  }, {
    key: "getTimestampQuantizer",
    value: function getTimestampQuantizer() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var startTimeSec = props.startTimeSec,
          endTimeSec = props.endTimeSec,
          stepDurationSec = props.stepDurationSec; // Timestamp values are stepDurationSec seconds apart and they always end at
      // endTimeSec. We make startTimeSec a bit smaller to include it in the range in case
      // (endTimeSec - startTimeSec) is divisible by stepDurationSec.

      var timestampSecs = (0, _range2.default)(endTimeSec, startTimeSec - 1e-6, -stepDurationSec).sort(); // scaleQuantize would normally map domain in buckets of uniform lengths. To
      // make it map to the nearest point in timestampSecs instead, we need to extend
      // the domain by half of stepDurationSec at each end.
      // prettier-ignore - https://github.com/prettier/prettier/issues/187

      var startDomain = (0, _first2.default)(timestampSecs) - 0.5 * stepDurationSec; // prettier-ignore

      var endDomain = (0, _last2.default)(timestampSecs) + 0.5 * stepDurationSec; // prettier-ignore

      return (0, _d3Scale.scaleQuantize)().domain([startDomain, endDomain]).range(timestampSecs);
    }
  }, {
    key: "getTimeScale",
    value: function getTimeScale(props, chartWidth) {
      var startTimeSec = props.startTimeSec,
          endTimeSec = props.endTimeSec;
      return (0, _d3Scale.scaleLinear)().domain([startTimeSec, endTimeSec]).range([0, chartWidth]);
    }
  }, {
    key: "getValueScale",
    value: function getValueScale(props, visibleMultiSeries, chartHeight) {
      var _this$getMaxMinGraphV = this.getMaxMinGraphValue(props, visibleMultiSeries),
          maxGraphValue = _this$getMaxMinGraphV.max,
          minGraphValue = _this$getMaxMinGraphV.min;

      return (0, _d3Scale.scaleLinear)().domain([minGraphValue, maxGraphValue]).range([chartHeight, 0]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          yAxisLabel = _this$props.yAxisLabel,
          deployments = _this$props.deployments,
          deploymentsLinkBuilder = _this$props.deploymentsLinkBuilder,
          onDeploymentClick = _this$props.onDeploymentClick,
          metricUnits = _this$props.metricUnits,
          showStacked = _this$props.showStacked,
          simpleTooltip = _this$props.simpleTooltip,
          legendShown = _this$props.legendShown,
          legendCollapsable = _this$props.legendCollapsable,
          loading = _this$props.loading,
          error = _this$props.error;
      var _this$state2 = this.state,
          selectedLegendKeys = _this$state2.selectedLegendKeys,
          hoveredLegendKey = _this$state2.hoveredLegendKey,
          chartWidth = _this$state2.chartWidth,
          chartHeight = _this$state2.chartHeight,
          hoverPoints = _this$state2.hoverPoints,
          hoverTimestampSec = _this$state2.hoverTimestampSec,
          hoverX = _this$state2.hoverX,
          hoverY = _this$state2.hoverY,
          multiSeries = _this$state2.multiSeries,
          valueScale = _this$state2.valueScale,
          timeScale = _this$state2.timeScale,
          visibleMultiSeries = _this$state2.visibleMultiSeries;

      if (!valueScale || !timeScale) {
        return null;
      }

      var timestampQuantizer = this.getTimestampQuantizer();
      var valueFormatter = valueFormatters[metricUnits];
      var hasData = multiSeries && multiSeries.length > 0;
      return _react.default.createElement(GraphWrapper, null, _react.default.createElement(AxisLabel, {
        loading: loading
      }, yAxisLabel), _react.default.createElement(GraphContainer, {
        loading: loading
      }, _react.default.createElement(_AxesGrid.default, {
        hasData: hasData,
        chartWidth: chartWidth,
        chartHeight: chartHeight,
        timeScale: timeScale,
        valueScale: valueScale,
        valueFormatter: valueFormatter,
        metricUnits: metricUnits
      }), _react.default.createElement(_Chart.default, {
        ref: function ref(el) {
          if (el) {
            _this2.chartRef = el;
          }
        },
        showStacked: showStacked,
        timeScale: timeScale,
        valueScale: valueScale,
        multiSeries: visibleMultiSeries,
        timestampQuantizer: timestampQuantizer,
        selectedLegendKeys: selectedLegendKeys,
        hoveredLegendKey: hoveredLegendKey,
        onHoverUpdate: this.handleHoverUpdate,
        onChartResize: this.handleChartResize
      }), hasData && _react.default.createElement(_DeploymentAnnotations.default, {
        onClick: onDeploymentClick,
        linkBuilder: deploymentsLinkBuilder,
        deployments: deployments,
        timeScale: timeScale,
        chartWidth: chartWidth,
        chartHeight: chartHeight
      }), _react.default.createElement(_HoverInfo.default, {
        mouseX: hoverX,
        mouseY: hoverY,
        datapoints: hoverPoints,
        timestampSec: hoverTimestampSec,
        simpleTooltip: simpleTooltip,
        valueFormatter: valueFormatter,
        valueScale: valueScale,
        chartWidth: chartWidth,
        chartHeight: chartHeight
      })), _react.default.createElement(_Legend.default, {
        loading: loading,
        shown: legendShown,
        collapsable: legendCollapsable,
        selectedKeys: selectedLegendKeys,
        hoveredKey: hoveredLegendKey,
        renderItemSuffix: this.props.renderLegendItemSuffix,
        onSelectedKeysChange: this.handleSelectedLegendKeysChange,
        onHoveredKeyChange: this.handleHoveredLegendKeyChange,
        multiSeries: multiSeries
      }), _react.default.createElement(_ErrorOverlay.default, {
        hasData: hasData,
        loading: loading,
        error: error
      }), _react.default.createElement(_LoadingOverlay.default, {
        loading: loading
      }));
    }
  }]);

  return PrometheusGraph;
}(_react.default.PureComponent);

PrometheusGraph.propTypes = {
  /**
   * List of datapoints to be rendered in the graph
   */
  multiSeries: _propTypes.default.array.isRequired,

  /**
   * Granularity in seconds between adjacent datapoints across the time scale
   */
  stepDurationSec: _propTypes.default.number.isRequired,

  /**
   * Start timestamp of the rendered chart (unix timestamp)
   */
  startTimeSec: _propTypes.default.number.isRequired,

  /**
   * End timestamp of the rendered chart (unix timestamp)
   */
  endTimeSec: _propTypes.default.number.isRequired,

  /**
   * Optional method that generates the series key based on its data.
   */
  getSeriesKey: _propTypes.default.func,

  /**
   * Method that builds series name from its metadata. First argument should be the series
   * itself, second argument multiSeries context and third argument options hash with only
   */
  getSeriesNameParts: _propTypes.default.func,

  /**
   * Color theme for the graph
   */
  colorTheme: _propTypes.default.oneOf(['mixed', 'blue', 'purple']),

  /**
   * Series values format
   */
  metricUnits: _propTypes.default.oneOf(['numeric', 'seconds', 'bytes', 'percent']),

  /**
   * Minimal allowed length of the Y-axis values spread
   */
  valuesMinSpread: _propTypes.default.number,

  /**
   * If true, shows the stacked area graph, otherwise show a simple line graph
   */
  showStacked: _propTypes.default.bool,

  /**
   * If true, show only data for one series in the tooltip, otherwise show all
   */
  simpleTooltip: _propTypes.default.bool,

  /**
   * If true, shows a loading overlay on top of the graph
   */
  loading: _propTypes.default.bool,

  /**
   * If set, shows the error message over the graph
   */
  error: _propTypes.default.string,

  /**
   * Optional content to be appended to the ending of the legend item
   */
  renderLegendItemSuffix: _propTypes.default.func,

  /**
   * Making graph legend section collapsable
   */
  legendCollapsable: _propTypes.default.bool,

  /**
   * Display legend section initially
   */
  legendShown: _propTypes.default.bool,

  /**
   * Initially preselected legend items
   */
  selectedLegendKeys: _propTypes.default.array,

  /**
   * Called when legend selection changes
   */
  onChangeLegendSelection: _propTypes.default.func,

  /**
   * Optional list of deployment annotations shown over the graph
   */
  deployments: _propTypes.default.array,

  /**
   * Optional function that builds links that deployment clicks should lead to
   */
  deploymentsLinkBuilder: _propTypes.default.func,

  /**
   * Optional hook for deployment annotation clicks
   */
  onDeploymentClick: _propTypes.default.func
};
PrometheusGraph.defaultProps = {
  error: '',
  getSeriesKey: undefined,
  getSeriesNameParts: getDefaultSeriesNameParts,
  colorTheme: 'mixed',
  metricUnits: 'numeric',
  valuesMinSpread: 0.012,
  showStacked: false,
  simpleTooltip: false,
  renderLegendItemSuffix: _noop2.default,
  legendCollapsable: false,
  legendShown: true,
  loading: false,
  onChangeLegendSelection: _noop2.default,
  selectedLegendKeys: [],
  deployments: [],
  deploymentsLinkBuilder: _noop2.default,
  onDeploymentClick: _noop2.default
};
var _default = PrometheusGraph;
exports.default = _default;