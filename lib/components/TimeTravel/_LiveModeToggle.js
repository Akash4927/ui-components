"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

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

var LiveModeToggleWrapper = _styledComponents.default.div.withConfig({
  displayName: "_LiveModeToggle__LiveModeToggleWrapper",
  componentId: "sc-1kih1yb-0"
})(["display:flex;"]);

var ToggleButton = _styledComponents.default.button.withConfig({
  displayName: "_LiveModeToggle__ToggleButton",
  componentId: "sc-1kih1yb-1"
})(["border:0;background-color:transparent;border-right:1px solid ", ";color:", ";pointer-events:all;outline:0;cursor:pointer;&::-moz-focus-inner{border:0;}&:focus{outline:none;}", ";"], function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  return props.theme.colors.purple900;
}, function (props) {
  return props.pressed && "\n    box-shadow: inset 1px 1px 6px ".concat(props.theme.colors.gray200, ";\n    color: ").concat(props.theme.colors.gray600, ";\n    opacity: 0.75;\n  ");
});

var LiveModeToggle =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(LiveModeToggle, _React$PureComponent);

  function LiveModeToggle(props, context) {
    var _this;

    _classCallCheck(this, LiveModeToggle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LiveModeToggle).call(this, props, context));
    _this.state = {
      showingLive: props.showingLive
    };
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(LiveModeToggle, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var showingLive = nextProps.showingLive;

      if (showingLive !== this.props.showingLive) {
        this.setState({
          showingLive: showingLive
        });
      }
    }
  }, {
    key: "handleToggle",
    value: function handleToggle() {
      var showingLive = !this.state.showingLive;
      this.setState({
        showingLive: showingLive
      });
      this.props.onToggle(showingLive);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(LiveModeToggleWrapper, null, _react.default.createElement(ToggleButton, {
        onClick: this.handleToggle,
        pressed: this.state.showingLive
      }, _react.default.createElement("i", {
        className: "fa fa-sm fa-fw fa-play"
      })), _react.default.createElement(ToggleButton, {
        onClick: this.handleToggle,
        pressed: !this.state.showingLive
      }, _react.default.createElement("i", {
        className: "fa fa-sm fa-fw fa-pause"
      })));
    }
  }]);

  return LiveModeToggle;
}(_react.default.PureComponent);

LiveModeToggle.propTypes = {
  showingLive: _propTypes.default.bool.isRequired,
  onToggle: _propTypes.default.func.isRequired
};
var _default = LiveModeToggle;
exports.default = _default;