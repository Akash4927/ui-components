"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _noop2 = _interopRequireDefault(require("lodash/noop"));

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _find2 = _interopRequireDefault(require("lodash/find"));

var _clamp2 = _interopRequireDefault(require("lodash/clamp"));

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _timeline = require("../../utils/timeline");

var _TimelinePeriodLabels = require("./_TimelinePeriodLabels");

var _Timeline = _interopRequireDefault(require("./_Timeline"));

var _TimelinePanButton = _interopRequireDefault(require("./_TimelinePanButton"));

var _LiveModeToggle = _interopRequireDefault(require("./_LiveModeToggle"));

var _TimestampInput = _interopRequireDefault(require("./_TimestampInput"));

var _RangeSelector = _interopRequireDefault(require("./_RangeSelector"));

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

// Initial selected range size.
var INITIAL_RANGE_WIDTH_PX = 200;

var TimeTravelContainer = _styledComponents.default.div.withConfig({
  displayName: "TimeTravel__TimeTravelContainer",
  componentId: "fc43ye-0"
})(["position:relative;"]);

var TimelineBar = _styledComponents.default.div.withConfig({
  displayName: "TimeTravel__TimelineBar",
  componentId: "fc43ye-1"
})(["align-items:center;display:flex;"]);

var TimeControlsWrapper = _styledComponents.default.div.withConfig({
  displayName: "TimeTravel__TimeControlsWrapper",
  componentId: "fc43ye-2"
})(["display:flex;justify-content:center;margin:8px 0 25px;"]);

var TimeControlsContainer = _styledComponents.default.div.withConfig({
  displayName: "TimeTravel__TimeControlsContainer",
  componentId: "fc43ye-3"
})(["border:1px solid ", ";box-shadow:0 0 2px ", ";background-color:", ";border-radius:", ";display:flex;"], function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.borderRadius.soft;
});

function availableTimelineDurationMs(earliestTimestamp) {
  var earliestMomentTimestamp = (0, _moment.default)(earliestTimestamp);
  var currentMomentTimestamp = (0, _moment.default)((0, _timeline.formattedTimestamp)());
  return currentMomentTimestamp.diff(earliestMomentTimestamp);
} // The most granular zoom is 2px per second, probably we don't want any more granular than that.


function minDurationMsPerTimelinePx() {
  return _moment.default.duration(500, 'milliseconds').asMilliseconds();
} // Maximum level we can zoom out is such that the available range takes 400px. The 3 days
// per pixel upper bound on that scale is to prevent ugly rendering in extreme cases.


function maxDurationMsPerTimelinePx(earliestTimestamp) {
  var durationMsLowerBound = minDurationMsPerTimelinePx();

  var durationMsUpperBound = _moment.default.duration(3, 'days').asMilliseconds();

  var durationMs = availableTimelineDurationMs(earliestTimestamp) / 400.0;
  return (0, _clamp2.default)(durationMs, durationMsLowerBound, durationMsUpperBound);
} // The initial zoom level is set to be 10% of the max zoom out level capped at 1px per minute,
// with the assumption that if we have a long recorded history, we're in most cases by
// default going to be interested in what happened in last couple of hours or so.


function initialDurationMsPerTimelinePx(earliestTimestamp) {
  var durationMsLowerBound = minDurationMsPerTimelinePx();

  var durationMsUpperBound = _moment.default.duration(1, 'minute').asMilliseconds();

  var durationMs = maxDurationMsPerTimelinePx(earliestTimestamp) * 0.1;
  return (0, _clamp2.default)(durationMs, durationMsLowerBound, durationMsUpperBound);
}
/**
 * A visual component used for time travelling between different states in the system.
 *
 * To make it behave correctly, it requires a `timestamp` (can initially be `null`)
 * which gets updated with `onChangeTimestamp`.
 *
 * Optional features include:
 *   * Auto-update live mode on top of the default paused mode
 *   * Range selection instead of the default point-in-time selection
 *
 * ```javascript
 *  import React from 'react';
 *  import moment from 'moment';
 *
 *  import { TimeTravel } from 'weaveworks-ui-components';
 *
 *  export default class TimeTravelExample extends React.Component {
 *    constructor() {
 *      super();
 *
 *      this.state = {
 *        timestamp: moment().format(),
 *      };
 *
 *      this.handleChangeTimestamp = this.handleChangeTimestamp.bind(this);
 *    }
 *
 *    handleChangeTimestamp(timestamp) {
 *      this.setState({ timestamp });
 *    }
 *
 *    handleTimestampInputEdit() {
 *      // track timestamp input edit...
 *    }
 *
 *    handleTimelinePanButtonClick() {
 *      // track timeline pan button click...
 *    }
 *
 *    handleTimelineLabelClick() {
 *      // track timeline label click...
 *    }
 *
 *    handleTimelinePan() {
 *      // track timeline pan...
 *    }
 *
 *    // zoomedPeriod is one of: ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds']
 *    handleTimelineZoom(zoomedPeriod) {
 *      // track timeline zoom...
 *    }
 *
 *    render() {
 *      return (
 *        <TimeTravel
 *          timestamp={this.state.timestamp}
 *          onChangeTimestamp={this.handleChangeTimestamp}
 *          onTimestampInputEdit={this.handleTimestampInputEdit}
 *          onTimelinePanButtonClick={this.handleTimelinePanButtonClick}
 *          onTimelineLabelClick={this.handleTimelineLabelClick}
 *          onTimelineZoom={this.handleTimelineZoom}
 *          onTimelinePan={this.handleTimelinePan}
 *        />
 *      );
 *    }
 *  }
 * ```
 *
 */


var TimeTravel =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(TimeTravel, _React$PureComponent);

  function TimeTravel(props, context) {
    var _this;

    _classCallCheck(this, TimeTravel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimeTravel).call(this, props, context));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRangeChange", function (rangeMs) {
      _this.setState({
        rangeMs: rangeMs
      });

      _this.adjustZoomToRange(rangeMs);

      _this.props.onChangeRange(rangeMs);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputChange", function (timestamp) {
      _this.setFocusedTimestamp(timestamp);

      _this.props.onTimestampInputEdit();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTimelineJump", function (timestamp) {
      // Order of callbacks is important.
      _this.switchToPausedMode();

      _this.setFocusedTimestamp(timestamp);

      _this.props.onTimelineLabelClick();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTimelinePanButtonClick", function (timestamp) {
      if (_this.shouldStickySwitchToLiveMode({
        focusedTimestamp: timestamp
      })) {
        // Order of callbacks is important.
        _this.setFocusedTimestamp(_this.state.timestampNow);

        _this.switchToLiveMode();
      } else {
        // Order of callbacks is important.
        _this.switchToPausedMode();

        _this.setFocusedTimestamp(timestamp);
      }

      _this.props.onTimelinePanButtonClick();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTimelineZoom", function (duration) {
      var durationMsPerPixel = _this.clampedDuration(duration);

      _this.setState({
        durationMsPerPixel: durationMsPerPixel
      });

      _this.delayedReportZoom();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTimelinePan", function (timestamp) {
      // Order of callbacks is important.
      var focusedTimestamp = _this.clampedTimestamp(timestamp);

      _this.switchToPausedMode();

      _this.setState({
        focusedTimestamp: focusedTimestamp
      });

      _this.delayedOnChangeTimestamp(focusedTimestamp);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTimelineRelease", function () {
      if (_this.shouldStickySwitchToLiveMode()) {
        // Order of callbacks is important.
        _this.setFocusedTimestamp(_this.state.timestampNow);

        _this.switchToLiveMode();
      }

      _this.props.onTimelinePan();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTimelineResize", function (timelineWidthPx) {
      _this.setState({
        timelineWidthPx: timelineWidthPx
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLiveModeToggle", function (showingLive) {
      if (showingLive) {
        // Order of callbacks is important.
        _this.setState({
          focusedTimestamp: _this.state.timestampNow
        });

        _this.switchToLiveMode();
      } else {
        _this.switchToPausedMode();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "switchToLiveMode", function () {
      if (_this.props.hasLiveMode && !_this.state.showingLive) {
        _this.setState({
          showingLive: true
        });

        _this.props.onChangeLiveMode(true);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "switchToPausedMode", function () {
      if (_this.props.hasLiveMode && _this.state.showingLive) {
        _this.setState({
          showingLive: false
        });

        _this.props.onChangeLiveMode(false);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setFocusedTimestamp", function (timestamp) {
      var focusedTimestamp = _this.clampedTimestamp(timestamp);

      if (focusedTimestamp !== _this.state.focusedTimestamp) {
        _this.delayedOnChangeTimestamp.cancel();

        _this.props.onChangeTimestamp(focusedTimestamp);

        _this.setState({
          focusedTimestamp: focusedTimestamp
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "adjustZoomToRange", function (rangeMs) {
      var rawDurationMsPerPixel = rangeMs / INITIAL_RANGE_WIDTH_PX;

      var durationMsPerPixel = _this.clampedDuration(rawDurationMsPerPixel);

      _this.setState({
        durationMsPerPixel: durationMsPerPixel
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reportZoom", function () {
      var periods = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'];

      var momentDuration = _moment.default.duration(_this.state.durationMsPerPixel * _TimelinePeriodLabels.MAX_TICK_SPACING_PX);

      var zoomedPeriod = (0, _find2.default)(periods, function (period) {
        return Math.floor(momentDuration.get(period)) && period;
      });

      _this.props.onTimelineZoom(zoomedPeriod);
    });

    _this.state = {
      timestampNow: (0, _timeline.formattedTimestamp)(),
      focusedTimestamp: (0, _timeline.formattedTimestamp)(props.timestamp),
      durationMsPerPixel: initialDurationMsPerTimelinePx(props.earliestTimestamp),
      showingLive: props.showingLive,
      rangeMs: props.rangeMs,
      timelineWidthPx: null
    };
    _this.delayedReportZoom = (0, _debounce2.default)(_this.reportZoom, 5000);
    _this.delayedOnChangeTimestamp = (0, _debounce2.default)(_this.props.onChangeTimestamp, 500);
    return _this;
  }

  _createClass(TimeTravel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Force periodic updates of the availability range every 1 second as time goes by.
      this.timer = setInterval(function () {
        var timestampNow = (0, _timeline.formattedTimestamp)();

        _this2.setState({
          timestampNow: timestampNow
        });

        if (_this2.props.hasLiveMode && _this2.state.showingLive) {
          _this2.setState({
            focusedTimestamp: timestampNow
          });
        }
      }, 1000); // Adjust timeline zoom level to the selected range immediately after mounting.

      this.adjustZoomToRange(this.state.rangeMs);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var nextTimestamp = (0, _timeline.formattedTimestamp)(nextProps.timestamp); // If live mode is supported and we're in it, ignore the timestamp prop and jump
      // directly to the present timestamp, otherwise jump to the given timestamp prop
      // if it has changed (to prevent regressions).

      if (nextProps.hasLiveMode && nextProps.showingLive) {
        this.setState({
          focusedTimestamp: this.state.timestampNow
        });
      } else if (nextTimestamp !== this.props.timestamp) {
        this.setState({
          focusedTimestamp: nextTimestamp
        });
      } // Update live mode only if live mode toggle is enabled.


      if (nextProps.hasLiveMode) {
        this.setState({
          showingLive: nextProps.showingLive
        });
      } // Update selected range only if range selector is used.


      if (nextProps.hasRangeSelector) {
        this.setState({
          rangeMs: nextProps.rangeMs
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "clampedTimestamp",
    value: function clampedTimestamp(rawTimestamp) {
      var timestamp = (0, _timeline.formattedTimestamp)(rawTimestamp);
      var startTimestamp = this.props.earliestTimestamp;
      var endTimestamp = this.state.timestampNow;

      if (startTimestamp && timestamp < startTimestamp) {
        timestamp = startTimestamp;
      }

      if (endTimestamp && timestamp > endTimestamp) {
        timestamp = endTimestamp;
      }

      return timestamp;
    }
  }, {
    key: "clampedDuration",
    value: function clampedDuration(duration) {
      var minDurationMs = minDurationMsPerTimelinePx();
      var maxDurationMs = maxDurationMsPerTimelinePx(this.props.earliestTimestamp);
      return (0, _clamp2.default)(duration, minDurationMs, maxDurationMs);
    }
  }, {
    key: "shouldStickySwitchToLiveMode",
    value: function shouldStickySwitchToLiveMode(nextState) {
      var timeScale = (0, _timeline.getTimeScale)(_objectSpread({}, this.state, nextState));
      var timestampCloseToNow = timeScale((0, _moment.default)(this.state.timestampNow)) < 10;
      return timestampCloseToNow && this.props.hasLiveMode && !this.state.showingLive;
    }
  }, {
    key: "render",
    value: function render() {
      var timeScale = (0, _timeline.getTimeScale)(this.state);
      return _react.default.createElement(TimeTravelContainer, {
        className: "time-travel"
      }, _react.default.createElement(TimelineBar, {
        className: "timeline"
      }, _react.default.createElement(_TimelinePanButton.default, {
        icon: "fa fa-chevron-left",
        movePixels: -this.state.timelineWidthPx / 4,
        onClick: this.handleTimelinePanButtonClick,
        timeScale: timeScale
      }), _react.default.createElement(_Timeline.default, {
        inspectingInterval: this.props.hasRangeSelector,
        timestampNow: this.state.timestampNow,
        focusedTimestamp: this.state.focusedTimestamp,
        earliestTimestamp: this.props.earliestTimestamp,
        durationMsPerPixel: this.state.durationMsPerPixel,
        rangeMs: this.state.rangeMs,
        deployments: this.props.deployments,
        deploymentsLinkBuilder: this.props.deploymentsLinkBuilder,
        onDeploymentClick: this.props.onDeploymentClick,
        isLoading: this.props.isLoading,
        onJump: this.handleTimelineJump,
        onZoom: this.handleTimelineZoom,
        onPan: this.handleTimelinePan,
        onRelease: this.handleTimelineRelease,
        onResize: this.handleTimelineResize,
        onUpdateVisibleRange: this.props.onUpdateVisibleRange
      }), _react.default.createElement(_TimelinePanButton.default, {
        icon: "fa fa-chevron-right",
        movePixels: this.state.timelineWidthPx / 4,
        onClick: this.handleTimelinePanButtonClick,
        timeScale: timeScale
      })), _react.default.createElement(TimeControlsWrapper, null, _react.default.createElement(TimeControlsContainer, null, this.props.hasLiveMode && _react.default.createElement(_LiveModeToggle.default, {
        showingLive: this.state.showingLive,
        onToggle: this.handleLiveModeToggle
      }), _react.default.createElement(_TimestampInput.default, {
        timestamp: this.state.focusedTimestamp,
        onChangeTimestamp: this.handleInputChange,
        disabled: this.props.hasLiveMode && this.state.showingLive
      }), this.props.hasRangeSelector && _react.default.createElement(_RangeSelector.default, {
        rangeMs: this.state.rangeMs,
        onChange: this.handleRangeChange
      }))));
    }
  }]);

  return TimeTravel;
}(_react.default.PureComponent);

TimeTravel.propTypes = {
  /**
   * The timestamp in focus
   */
  timestamp: _propTypes.default.string.isRequired,

  /**
   * The earliest timestamp we can travel back in time to
   */
  earliestTimestamp: _propTypes.default.string,

  /**
   * Required callback handling every timestamp change
   */
  onChangeTimestamp: _propTypes.default.func.isRequired,

  /**
   * Optional callback handling timestamp change by direct input box editing (e.g. for tracking)
   */
  onTimestampInputEdit: _propTypes.default.func,

  /**
   * Optional callback handling clicks on timeline pan buttons (e.g. for tracking)
   */
  onTimelinePanButtonClick: _propTypes.default.func,

  /**
   * Optional callback handling clicks on timeline labels (e.g. for tracking)
   */
  onTimelineLabelClick: _propTypes.default.func,

  /**
   * Optional callback handling timeline zooming (e.g. for tracking)
   */
  onTimelineZoom: _propTypes.default.func,

  /**
   * Optional callback handling timeline panning (e.g. for tracking)
   */
  onTimelinePan: _propTypes.default.func,

  /**
   * Enables Time Travel to be in the live auto-update mode
   */
  hasLiveMode: _propTypes.default.bool,

  /**
   * The live mode shows current time and ignores the `timestamp` param
   */
  showingLive: _propTypes.default.bool,

  /**
   * Optional callback handling the change of live mode
   */
  onChangeLiveMode: _propTypes.default.func,

  /**
   * Adds a range selector to the timestamp selector, for when the timestamp info is not enough
   */
  hasRangeSelector: _propTypes.default.bool,

  /**
   * Duration in milliseconds of the focused range (which ends at `timestamp`)
   */
  rangeMs: _propTypes.default.number,

  /**
   * Optional callback handling range in milliseconds change
   */
  onChangeRange: _propTypes.default.func,

  /**
   * Optional list of deployment annotations shown in the timeline
   */
  deployments: _propTypes.default.array,

  /**
   * Optional function that builds links that deployment clicks should lead to
   */
  deploymentsLinkBuilder: _propTypes.default.func,

  /**
   * Optional hook for deployment annotation clicks
   */
  onDeploymentClick: _propTypes.default.func,

  /**
   * Optional callback when visible part of the timeline gets updated
   */
  onUpdateVisibleRange: _propTypes.default.func,

  /**
   * Shows timeline loading indicator
   */
  isLoading: _propTypes.default.bool
};
TimeTravel.defaultProps = {
  earliestTimestamp: '2014-01-01T00:00:00Z',
  hasLiveMode: false,
  showingLive: true,
  // only relevant if live mode is enabled
  onChangeLiveMode: _noop2.default,
  hasRangeSelector: false,
  rangeMs: 3600000,
  // 1 hour as a default, only relevant if range selector is enabled
  deployments: [],
  deploymentsLinkBuilder: _noop2.default,
  onDeploymentClick: _noop2.default,
  isLoading: false,
  onChangeRange: _noop2.default,
  onTimestampInputEdit: _noop2.default,
  onTimelinePanButtonClick: _noop2.default,
  onTimelineLabelClick: _noop2.default,
  onTimelineZoom: _noop2.default,
  onTimelinePan: _noop2.default,
  onUpdateVisibleRange: _noop2.default
};
var _default = TimeTravel;
exports.default = _default;