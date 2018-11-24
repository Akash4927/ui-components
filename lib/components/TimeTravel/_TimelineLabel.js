"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

var TimelineLabelWrapper = _styledComponents.default.span.attrs({
  style: function style(_ref) {
    var x = _ref.x;
    return {
      transform: "translateX(".concat(x, "px)")
    };
  }
}).withConfig({
  displayName: "_TimelineLabel__TimelineLabelWrapper",
  componentId: "sc-17i94q7-0"
})(["position:absolute;"]);

var TimelineLabelLine = _styledComponents.default.span.withConfig({
  displayName: "_TimelineLabel__TimelineLabelLine",
  componentId: "sc-17i94q7-1"
})(["border-left:1px solid ", ";height:75px;"], function (props) {
  return props.theme.colors.gray200;
});

var TimelineLabelContainer = _styledComponents.default.button.withConfig({
  displayName: "_TimelineLabel__TimelineLabelContainer",
  componentId: "sc-17i94q7-2"
})(["background-color:transparent;color:", ";font-size:", ";cursor:pointer;pointer-events:all;margin-left:2px;padding:0 1px;outline:0;border:0;&::-moz-focus-inner{border:0;}&:focus{outline:none;}&[disabled]{color:", ";cursor:inherit;}&:not([disabled]):hover{color:", ";}"], function (props) {
  return props.theme.colors.purple400;
}, function (props) {
  return props.theme.fontSizes.small;
}, function (props) {
  return props.theme.colors.gray600;
}, function (props) {
  return props.theme.colors.purple900;
});

var TimelineLabel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TimelineLabel, _React$Component);

  function TimelineLabel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TimelineLabel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimelineLabel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      if (!_this.props.disabled) {
        _this.props.onClick(_this.props.timestamp);
      }
    });

    return _this;
  }

  _createClass(TimelineLabel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          periodFormat = _this$props.periodFormat,
          timestamp = _this$props.timestamp,
          position = _this$props.position,
          isBehind = _this$props.isBehind,
          disabled = _this$props.disabled;
      return _react.default.createElement(TimelineLabelWrapper, {
        x: position
      }, !isBehind && _react.default.createElement(TimelineLabelLine, null), _react.default.createElement(TimelineLabelContainer, {
        onClick: this.handleClick,
        title: disabled ? '' : "Jump to ".concat(timestamp),
        disabled: disabled
      }, (0, _moment.default)(timestamp).utc().format(periodFormat)));
    }
  }]);

  return TimelineLabel;
}(_react.default.Component);

TimelineLabel.propTypes = {
  periodFormat: _propTypes.default.string.isRequired,
  timestamp: _propTypes.default.string.isRequired,
  position: _propTypes.default.number.isRequired,
  onClick: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool,
  isBehind: _propTypes.default.bool
};
TimelineLabel.defaultProps = {
  disabled: false,
  isBehind: false
};
var _default = TimelineLabel;
exports.default = _default;