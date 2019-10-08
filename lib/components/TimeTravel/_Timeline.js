"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactResizeAware = _interopRequireDefault(require("react-resize-aware"));

var _polished = require("polished");

var _d3Drag = require("d3-drag");

var _d3Selection = require("d3-selection");

var _reactMotion = require("react-motion");

var _animation = require("../../utils/animation");

var _timeline = require("../../utils/timeline");

var _zooming = require("../../utils/zooming");

var _theme = _interopRequireDefault(require("../../theme"));

var _TimelineLoader = _interopRequireDefault(require("./_TimelineLoader"));

var _TimelineDeployments = _interopRequireDefault(require("./_TimelineDeployments"));

var _TimelinePeriodLabels = _interopRequireDefault(require("./_TimelinePeriodLabels"));

var _TimelineRange = _interopRequireDefault(require("./_TimelineRange"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// A guess on the max initial width of the time travel timeline.
// This is used for showing deployments, time tags, etc.. before
// we get the actual timeline width from the ResizeAware listener.
// Better have a big value here to make sure the whole canvas is
// filled out, but don't have it too big not to slow down the rendering.
var TIMELINE_MAX_WIDTH_PX = 3000;

var TimelineWrapper = _styledComponents.default.div.withConfig({
  displayName: "_Timeline__TimelineWrapper",
  componentId: "fopz6b-0"
})(["position:relative;width:100%;height:55px;&:before,&:after{border:1px solid ", ";background-color:", ";z-index:", ";box-sizing:border-box;content:'';pointer-events:none;position:absolute;display:block;left:50%;border-top:0;border-bottom:0;margin-left:-1px;width:3px;}&:before{top:0;height:100%;}&:after{top:100%;height:9px;opacity:0.15;}"], function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.orange500;
}, function (props) {
  return props.theme.layers.front;
}); // From https://stackoverflow.com/a/18294634


var FullyPannableCanvas = _styledComponents.default.div.withConfig({
  displayName: "_Timeline__FullyPannableCanvas",
  componentId: "fopz6b-1"
})(["width:100%;height:100%;cursor:move;cursor:grab;cursor:-moz-grab;cursor:-webkit-grab;", ";"], function (props) {
  return props.panning && "\n    cursor: grabbing;\n    cursor: -moz-grabbing;\n    cursor: -webkit-grabbing;\n  ";
});

var TimelineContainer = (0, _styledComponents.default)(FullyPannableCanvas).withConfig({
  displayName: "_Timeline__TimelineContainer",
  componentId: "fopz6b-2"
})(["background-color:", ";border-radius:", ";box-shadow:inset 0 0 7px ", ";pointer-events:all;position:relative;height:100%;"], function (props) {
  return (0, _polished.transparentize)(0.15, props.theme.colors.white);
}, function (props) {
  return props.theme.borderRadius.soft;
}, function (props) {
  return (0, _polished.transparentize)(0.35, props.theme.colors.gray600);
});

var TimelineContent = _styledComponents.default.div.withConfig({
  displayName: "_Timeline__TimelineContent",
  componentId: "fopz6b-3"
})(["position:absolute;width:100%;height:100%;"]);

var OverflowHidden = _styledComponents.default.div.withConfig({
  displayName: "_Timeline__OverflowHidden",
  componentId: "fopz6b-4"
})(["pointer-events:none;overflow:hidden;position:absolute;width:100%;height:100%;"]);

var CenteredContent = _styledComponents.default.div.withConfig({
  displayName: "_Timeline__CenteredContent",
  componentId: "fopz6b-5"
})(["left:50%;pointer-events:none;position:absolute;height:100%;"]);

var TimelinePeriodLabelsWrapper = _styledComponents.default.div.withConfig({
  displayName: "_Timeline__TimelinePeriodLabelsWrapper",
  componentId: "fopz6b-6"
})(["transform:translateY(1px);position:absolute;"]);

var Timeline =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Timeline, _React$PureComponent);

  function Timeline(props) {
    var _this;

    _classCallCheck(this, Timeline);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Timeline).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePanStart", function () {
      _this.setState({
        isPanning: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePanEnd", function () {
      if (_this.state.hasPanned) {
        _this.props.onRelease();
      }

      _this.setState({
        hasPanned: false,
        isPanning: false
      });

      _this.delayedUpdateVisibleRange();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePan", function () {
      var timeScale = (0, _timeline.getTimeScale)(_this.props);
      var momentTimestamp = timeScale.invert(-_d3Selection.event.dx);

      _this.props.onPan(momentTimestamp);

      _this.setState({
        hasPanned: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleZoom", function (ev) {
      var durationMsPerPixel = _this.props.durationMsPerPixel;

      _this.props.onZoom(durationMsPerPixel / (0, _zooming.zoomFactor)(ev));

      _this.delayedUpdateVisibleRange();

      ev.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleResize", function (_ref) {
      var width = _ref.width;

      // Update the timeline dimension information.
      _this.setState({
        width: width
      });

      _this.delayedUpdateVisibleRange();

      _this.props.onResize(width);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateVisibleRange", function () {
      var width = _this.state.width;
      var timeScale = (0, _timeline.getTimeScale)(_this.props); // Update the visible part of the timeline.

      _this.props.onUpdateVisibleRange({
        endAt: (0, _moment.default)(timeScale.invert(width / 2)).utc().format(),
        startAt: (0, _moment.default)(timeScale.invert(-width / 2)).utc().format()
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveSvgRef", function (ref) {
      _this.svgRef = ref;
    });

    _this.state = {
      hasPanned: false,
      isAnimated: false,
      isPanning: false,
      width: TIMELINE_MAX_WIDTH_PX
    };
    _this.delayedHandleResize = (0, _debounce2.default)(_this.handleResize, 200);
    _this.delayedUpdateVisibleRange = (0, _debounce2.default)(_this.updateVisibleRange, 200);
    return _this;
  }

  _createClass(Timeline, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.svg = (0, _d3Selection.select)(this.svgRef);
      this.drag = (0, _d3Drag.drag)().on('start', this.handlePanStart).on('end', this.handlePanEnd).on('drag', this.handlePan);
      this.svg.call(this.drag); // Defaulting events to passive was introduced in Chrome 73 (https://www.chromestatus.com/features/6662647093133312)
      // and since then, the React onWheel event broke  - see https://github.com/weaveworks/service-ui/issues/3750.
      // TODO: Replace this with native onWheel event once https://github.com/facebook/react/issues/14856 gets resolved.

      this.svgRef.addEventListener('wheel', this.handleZoom, {
        passive: false
      }); // Keep animation disabled for first half a second, so that nothing
      // would move when re-mounting time travel component when switching
      // between pages - keep the experience smooth!

      setTimeout(function () {
        _this2.setState({
          isAnimated: true
        });
      }, 500);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.rangeMs !== nextProps.rangeMs) {
        this.delayedUpdateVisibleRange();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.svgRef.removeEventListener('wheel', this.handleZoom, {
        passive: false
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent(transform) {
      var _this3 = this;

      var width = this.state.width;
      var focusedTimestamp = transform.focusedTimestamp,
          rangeMs = transform.rangeMs;
      var startTimestamp = (0, _moment.default)(focusedTimestamp).subtract(rangeMs).format();
      var timeScale = (0, _timeline.getTimeScale)(transform);
      return _react.default.createElement(TimelineContent, null, _react.default.createElement(CenteredContent, null, _react.default.createElement(_TimelineDeployments.default, {
        deployments: this.props.deployments,
        linkBuilder: this.props.deploymentsLinkBuilder,
        onClick: this.props.onDeploymentClick,
        timeScale: timeScale,
        width: width
      })), _react.default.createElement(OverflowHidden, null, _react.default.createElement(CenteredContent, null, _react.default.createElement(_TimelineRange.default, {
        color: _theme.default.colors.gray200,
        endAt: this.props.earliestTimestamp,
        timeScale: timeScale,
        width: width
      }), _react.default.createElement(_TimelineRange.default, {
        color: _theme.default.colors.gray200,
        startAt: this.props.timestampNow,
        timeScale: timeScale,
        width: width
      }), this.props.inspectingInterval && _react.default.createElement(_TimelineRange.default, {
        color: _theme.default.colors.blue400,
        startAt: startTimestamp,
        endAt: focusedTimestamp,
        timeScale: timeScale,
        width: width
      }), _react.default.createElement(TimelinePeriodLabelsWrapper, null, ['year', 'month', 'day', 'minute'].map(function (period) {
        return _react.default.createElement(_TimelinePeriodLabels.default, _extends({
          key: period,
          period: period,
          width: width,
          onClick: _this3.props.onJump,
          clickableStartAt: _this3.props.earliestTimestamp,
          clickableEndAt: _this3.props.timestampNow
        }, transform));
      })), this.props.isLoading && _react.default.createElement(_TimelineLoader.default, {
        startAt: this.props.earliestTimestamp,
        endAt: this.props.timestampNow,
        timeScale: timeScale,
        width: width
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var isPanning = this.state.isPanning;
      var _this$props = this.props,
          focusedTimestamp = _this$props.focusedTimestamp,
          durationMsPerPixel = _this$props.durationMsPerPixel,
          rangeMs = _this$props.rangeMs;
      return _react.default.createElement(TimelineWrapper, null, _react.default.createElement(_reactResizeAware.default, {
        onlyEvent: true,
        onResize: this.delayedHandleResize,
        style: {
          height: '100%',
          width: '100%'
        }
      }, _react.default.createElement(TimelineContainer, {
        panning: isPanning,
        ref: this.saveSvgRef,
        title: "Scroll to zoom, drag to pan"
      }, this.state.isAnimated ? _react.default.createElement(_reactMotion.Motion, {
        style: {
          durationMsPerPixel: (0, _animation.strongSpring)(durationMsPerPixel),
          focusedTimestampMs: (0, _animation.strongSpring)((0, _moment.default)(focusedTimestamp).valueOf()),
          rangeMs: (0, _animation.strongSpring)(rangeMs)
        }
      }, function (interpolated) {
        return _this4.renderContent({
          durationMsPerPixel: interpolated.durationMsPerPixel,
          focusedTimestamp: (0, _timeline.formattedTimestamp)(interpolated.focusedTimestampMs),
          rangeMs: interpolated.rangeMs
        });
      }) : this.renderContent({
        durationMsPerPixel: durationMsPerPixel,
        focusedTimestamp: focusedTimestamp,
        rangeMs: rangeMs
      }))));
    }
  }]);

  return Timeline;
}(_react.default.PureComponent);

Timeline.propTypes = {
  deployments: _propTypes.default.array.isRequired,
  deploymentsLinkBuilder: _propTypes.default.func.isRequired,
  durationMsPerPixel: _propTypes.default.number.isRequired,
  earliestTimestamp: _propTypes.default.string,
  focusedTimestamp: _propTypes.default.string.isRequired,
  inspectingInterval: _propTypes.default.bool.isRequired,
  isLoading: _propTypes.default.bool.isRequired,
  onDeploymentClick: _propTypes.default.func.isRequired,
  onJump: _propTypes.default.func.isRequired,
  onPan: _propTypes.default.func.isRequired,
  onRelease: _propTypes.default.func.isRequired,
  onResize: _propTypes.default.func.isRequired,
  onUpdateVisibleRange: _propTypes.default.func.isRequired,
  onZoom: _propTypes.default.func.isRequired,
  rangeMs: _propTypes.default.number.isRequired,
  timestampNow: _propTypes.default.string.isRequired
};
Timeline.defaultProps = {
  earliestTimestamp: ''
};
var _default = Timeline;
exports.default = _default;