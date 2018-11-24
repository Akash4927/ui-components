"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TimestampTag = _interopRequireDefault(require("../TimestampTag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TooltipContainer = _styledComponents.default.div.attrs({
  // Using attrs prevents extensive styled components
  // generation every time the tooltip is repositioned.
  style: function style(_ref) {
    var offsetX = _ref.offsetX,
        offsetY = _ref.offsetY;
    return {
      left: offsetX,
      top: offsetY
    };
  }
}).withConfig({
  displayName: "TimestampTooltip__TooltipContainer",
  componentId: "d66ad0-0"
})(["color:", ";background-color:", ";border:1px solid ", ";border-radius:", ";z-index:", ";padding:10px 15px;position:absolute;margin-top:20px;margin-left:10px;pointer-events:none;min-width:250px;max-width:500px;opacity:0.95;", ";"], function (props) {
  return props.theme.colors.purple900;
}, function (props) {
  return props.theme.colors.gray50;
}, function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  return props.theme.borderRadius.soft;
}, function (props) {
  return props.theme.layers.tooltip;
}, function (props) {
  return !props.visible && 'opacity: 0;';
});

var TimestampWrapper = _styledComponents.default.div.withConfig({
  displayName: "TimestampTooltip__TimestampWrapper",
  componentId: "d66ad0-1"
})(["margin-bottom:8px;"]);

var TimestampTooltip =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(TimestampTooltip, _React$PureComponent);

  function TimestampTooltip(props) {
    var _this;

    _classCallCheck(this, TimestampTooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimestampTooltip).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveTooltipRef", function (ref) {
      _this.tooltipRef = ref;
    });

    _this.state = {
      prerendered: false
    };
    return _this;
  }

  _createClass(TimestampTooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // HACK: We wait for the first render to finish to get the accurate width
      // of the tooltip for calculating its position, keeping the tooltip invisible
      // through the first render cycle. After the first render has finished,
      // we set a 'prerender' flag to true force second render which actually
      // displays the tooltip. This is to prevent tooltip flickering before
      // we get its proper size.
      setTimeout(function () {
        _this2.setState({
          prerendered: true
        });
      }, 0);
    }
  }, {
    key: "getTooltipBoundingRect",
    value: function getTooltipBoundingRect() {
      return this.tooltipRef ? this.tooltipRef.getBoundingClientRect() : {
        width: 0,
        height: 0,
        top: 0,
        left: 0
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getTooltipBound = this.getTooltipBoundingRect(),
          width = _this$getTooltipBound.width;

      var _this$props = this.props,
          offsetX = _this$props.offsetX,
          offsetY = _this$props.offsetY,
          timestamp = _this$props.timestamp,
          containerWidth = _this$props.containerWidth;
      var clampedX = Math.min(offsetX, containerWidth - width - 10);
      return _react.default.createElement(TooltipContainer, {
        offsetX: clampedX,
        offsetY: offsetY,
        visible: this.state.prerendered,
        innerRef: this.saveTooltipRef
      }, _react.default.createElement(TimestampWrapper, null, _react.default.createElement(_TimestampTag.default, {
        timestamp: timestamp
      })), this.props.children);
    }
  }]);

  return TimestampTooltip;
}(_react.default.PureComponent);

TimestampTooltip.propTypes = {
  containerWidth: _propTypes.default.number.isRequired,
  timestamp: _propTypes.default.string.isRequired,
  offsetX: _propTypes.default.number,
  offsetY: _propTypes.default.number
};
TimestampTooltip.defaultProps = {
  offsetX: 0,
  offsetY: 0
};
var _default = TimestampTooltip;
exports.default = _default;