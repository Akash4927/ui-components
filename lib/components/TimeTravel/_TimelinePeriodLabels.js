"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MAX_TICK_SPACING_PX = void 0;

var _clamp2 = _interopRequireDefault(require("lodash/clamp"));

var _last2 = _interopRequireDefault(require("lodash/last"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _find2 = _interopRequireDefault(require("lodash/find"));

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _timeline = require("../../utils/timeline");

var _TimelineLabel = _interopRequireDefault(require("./_TimelineLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MAX_TICK_SPACING_PX = 415;
exports.MAX_TICK_SPACING_PX = MAX_TICK_SPACING_PX;
var MAX_TICK_ROWS = 3;
var MIN_TICK_SPACING_PX = 70;
var TICKS_ROW_SPACING = 16;
var FADE_OUT_FACTOR = 1.4;
var TICK_SETTINGS_PER_PERIOD = {
  year: {
    format: 'YYYY',
    childPeriod: 'month',
    periodIntervals: [1] // 1 year

  },
  month: {
    format: 'MMMM',
    parentPeriod: 'year',
    childPeriod: 'day',
    periodIntervals: [1, 3] // 1 month, 1 quarter

  },
  day: {
    format: 'Do',
    parentPeriod: 'month',
    childPeriod: 'minute',
    periodIntervals: [1, 7] // 1 day, 1 week

  },
  minute: {
    format: 'HH:mm',
    parentPeriod: 'day',
    periodIntervals: [1, 5, 15, 60, 180, 360] // 1min, 5min, 15min, 1h, 3h, 6h

  }
}; // A linear mapping [a, b] -> [0, 1] (maps value x=a into 0 and x=b into 1).

function linearGradientValue(x, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      a = _ref2[0],
      b = _ref2[1];

  return (x - a) / (b - a);
}

var TimelineLabels = _styledComponents.default.div.attrs({
  style: function style(_ref3) {
    var y = _ref3.y,
        opacity = _ref3.opacity;
    return {
      transform: "translateY(".concat(y, "px)"),
      opacity: opacity
    };
  }
}).withConfig({
  displayName: "_TimelinePeriodLabels__TimelineLabels",
  componentId: "ezkbh-0"
})([""]); // TODO: Tidy up this component.


var TimelinePeriodLabels =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(TimelinePeriodLabels, _React$PureComponent);

  function TimelinePeriodLabels() {
    _classCallCheck(this, TimelinePeriodLabels);

    return _possibleConstructorReturn(this, _getPrototypeOf(TimelinePeriodLabels).apply(this, arguments));
  }

  _createClass(TimelinePeriodLabels, [{
    key: "findOptimalDurationFit",
    value: function findOptimalDurationFit(period, _ref4) {
      var durationMsPerPixel = _ref4.durationMsPerPixel;
      var minimalDurationMs = durationMsPerPixel * 1.1 * MIN_TICK_SPACING_PX;
      return (0, _find2.default)(TICK_SETTINGS_PER_PERIOD[period].periodIntervals, function (p) {
        return _moment.default.duration(p, period).asMilliseconds() >= minimalDurationMs;
      });
    }
  }, {
    key: "getTicksForPeriod",
    value: function getTicksForPeriod(period, timelineTransform) {
      // First find the optimal duration between the ticks - if no satisfactory
      // duration could be found, don't render any ticks for the given period.
      var parentPeriod = TICK_SETTINGS_PER_PERIOD[period].parentPeriod;
      var periodInterval = this.findOptimalDurationFit(period, timelineTransform);
      if (!periodInterval) return []; // Get the boundary values for the displayed part of the timeline.

      var halfWidth = this.props.width / 2;
      var timeScale = (0, _timeline.getTimeScale)(timelineTransform);
      var momentStart = (0, _moment.default)(timeScale.invert(-halfWidth)).utc();
      var momentEnd = (0, _moment.default)(timeScale.invert(halfWidth)).utc(); // Start counting the timestamps from the most recent timestamp that is not shown
      // on screen. The values are always rounded up to the timestamps of the next bigger
      // period (e.g. for days it would be months, for months it would be years).

      var momentTimestamp = (0, _moment.default)(momentStart).utc().startOf(parentPeriod || period);

      while (momentTimestamp.isBefore(momentStart)) {
        momentTimestamp = (0, _moment.default)(momentTimestamp).add(periodInterval, period);
      }

      momentTimestamp = (0, _moment.default)(momentTimestamp).subtract(periodInterval, period); // Make that hidden timestamp the first one in the list, but position
      // it inside the visible range with a prepended arrow to the past.

      var ticks = [{
        timestamp: (0, _timeline.formattedTimestamp)(momentTimestamp),
        position: -halfWidth,
        isBehind: true
      }]; // Continue adding ticks till the end of the visible range.

      do {
        // If the new timestamp enters into a new bigger period, we round it down to the
        // beginning of that period. E.g. instead of going [Jan 22nd, Jan 29th, Feb 5th],
        // we output [Jan 22nd, Jan 29th, Feb 1st]. Right now this case only happens between
        // days and months, but in theory it could happen whenever bigger periods are not
        // divisible by the duration we are using as a step between the ticks.
        var newTimestamp = (0, _moment.default)(momentTimestamp).add(periodInterval, period);

        if (parentPeriod && newTimestamp.get(parentPeriod) !== momentTimestamp.get(parentPeriod)) {
          newTimestamp = (0, _moment.default)(newTimestamp).utc().startOf(parentPeriod);
        }

        momentTimestamp = newTimestamp; // If the new tick is too close to the previous one, drop that previous tick.

        var position = timeScale(momentTimestamp);
        var previousPosition = (0, _last2.default)(ticks) && (0, _last2.default)(ticks).position;

        if (position - previousPosition < MIN_TICK_SPACING_PX) {
          ticks.pop();
        }

        ticks.push({
          timestamp: (0, _timeline.formattedTimestamp)(momentTimestamp),
          position: position
        });
      } while (momentTimestamp.isBefore(momentEnd));

      return ticks;
    }
  }, {
    key: "getVerticalShiftForPeriod",
    value: function getVerticalShiftForPeriod(period, _ref5) {
      var durationMsPerPixel = _ref5.durationMsPerPixel;
      var _TICK_SETTINGS_PER_PE = TICK_SETTINGS_PER_PERIOD[period],
          childPeriod = _TICK_SETTINGS_PER_PE.childPeriod,
          parentPeriod = _TICK_SETTINGS_PER_PE.parentPeriod;
      var shift = 1;

      if (parentPeriod) {
        var durationMultiplier = 1 / MAX_TICK_SPACING_PX;
        var parentInterval = TICK_SETTINGS_PER_PERIOD[parentPeriod].periodIntervals[0];

        var parentIntervalMs = _moment.default.duration(parentInterval, parentPeriod).asMilliseconds();

        var fadedInDurationMs = parentIntervalMs * durationMultiplier;
        var fadedOutDurationMs = fadedInDurationMs * FADE_OUT_FACTOR;
        var transitionFactor = Math.log(fadedOutDurationMs) - Math.log(durationMsPerPixel);
        var transitionLength = Math.log(fadedOutDurationMs) - Math.log(fadedInDurationMs);
        shift = (0, _clamp2.default)(transitionFactor / transitionLength, 0, 1);
      }

      if (childPeriod) {
        shift += this.getVerticalShiftForPeriod(childPeriod, {
          durationMsPerPixel: durationMsPerPixel
        });
      }

      return shift;
    }
  }, {
    key: "isOutsideOfClickableRange",
    value: function isOutsideOfClickableRange(timestamp) {
      var _this$props = this.props,
          clickableStartAt = _this$props.clickableStartAt,
          clickableEndAt = _this$props.clickableEndAt;
      var beforeClickableStartAt = clickableStartAt && clickableStartAt > timestamp;
      var afterClickableEndtAt = clickableEndAt && clickableEndAt < timestamp;
      return beforeClickableStartAt || afterClickableEndtAt;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var period = this.props.period;
      var periodFormat = TICK_SETTINGS_PER_PERIOD[period].format;
      var ticks = this.getTicksForPeriod(period, this.props);
      var ticksRow = MAX_TICK_ROWS - this.getVerticalShiftForPeriod(period, this.props); // Ticks quickly fade in from the bottom and then slowly start
      // fading out towards the top until they are pushed out of canvas.

      var focusedRow = MAX_TICK_ROWS - 1;
      var opacity = ticksRow > focusedRow ? linearGradientValue(ticksRow, [MAX_TICK_ROWS, focusedRow]) : linearGradientValue(ticksRow, [-2, focusedRow]);
      var isBarelyVisible = opacity < 0.4;
      return _react.default.createElement(TimelineLabels, {
        className: period,
        opacity: opacity,
        y: ticksRow * TICKS_ROW_SPACING
      }, (0, _map2.default)(ticks, function (_ref6) {
        var timestamp = _ref6.timestamp,
            position = _ref6.position,
            isBehind = _ref6.isBehind;
        return _react.default.createElement(_TimelineLabel.default, {
          key: timestamp,
          timestamp: timestamp,
          position: position,
          isBehind: isBehind,
          periodFormat: periodFormat,
          disabled: isBarelyVisible || _this.isOutsideOfClickableRange(timestamp),
          onClick: _this.props.onClick
        });
      }));
    }
  }]);

  return TimelinePeriodLabels;
}(_react.default.PureComponent);

TimelinePeriodLabels.propTypes = {
  period: _propTypes.default.string.isRequired,
  focusedTimestamp: _propTypes.default.string.isRequired,
  durationMsPerPixel: _propTypes.default.number.isRequired,
  width: _propTypes.default.number.isRequired,
  clickableStartAt: _propTypes.default.string.isRequired,
  clickableEndAt: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func.isRequired
};
var _default = TimelinePeriodLabels;
exports.default = _default;