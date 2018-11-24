"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactInputAutosize = _interopRequireDefault(require("react-input-autosize"));

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

var TimestampInputWrapper = _styledComponents.default.div.withConfig({
  displayName: "_TimestampInput__TimestampInputWrapper",
  componentId: "hn05hk-0"
})(["font-size:", ";align-items:baseline;padding:3px 8px;pointer-events:all;opacity:0.8;display:flex;"], function (props) {
  return props.theme.fontSizes.small;
});

var TimestampInputContainer = (0, _styledComponents.default)(_reactInputAutosize.default).withConfig({
  displayName: "_TimestampInput__TimestampInputContainer",
  componentId: "hn05hk-1"
})(["input{font-size:", ";font-family:", ";background-color:transparent;margin-right:3px;text-align:left;min-width:195px;max-width:300px;border:0;outline:0;}div{overflow:hidden !important;}"], function (props) {
  return props.theme.fontSizes.normal;
}, function (props) {
  return props.theme.fontFamilies.monospace;
});

var TimestampInput =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(TimestampInput, _React$PureComponent);

  function TimestampInput(props, context) {
    var _this;

    _classCallCheck(this, TimestampInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimestampInput).call(this, props, context));
    _this.state = {
      timestamp: props.timestamp
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.submit = _this.submit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(TimestampInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var timestamp = nextProps.timestamp;

      if (timestamp !== this.props.timestamp) {
        this.setState({
          timestamp: timestamp
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(ev) {
      var timestamp = ev.target.value;
      this.setState({
        timestamp: timestamp
      });
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(ev) {
      if (ev.keyCode === 13) {
        this.submit();
      }
    }
  }, {
    key: "submit",
    value: function submit() {
      var timestamp = this.state.timestamp;

      if ((0, _moment.default)(timestamp).isValid()) {
        this.props.onChangeTimestamp(timestamp);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(TimestampInputWrapper, null, _react.default.createElement(TimestampInputContainer, {
        value: this.state.timestamp,
        onChange: this.handleChange,
        onBlur: this.submit,
        onKeyDown: this.handleKeyDown,
        disabled: this.props.disabled
      }), ' ', "UTC");
    }
  }]);

  return TimestampInput;
}(_react.default.PureComponent);

TimestampInput.propTypes = {
  timestamp: _propTypes.default.string.isRequired,
  onChangeTimestamp: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool
};
TimestampInput.defaultProps = {
  disabled: false
};
var _default = TimestampInput;
exports.default = _default;