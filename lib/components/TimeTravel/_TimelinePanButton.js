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

var PanButton = _styledComponents.default.button.withConfig({
  displayName: "_TimelinePanButton__PanButton",
  componentId: "sc-86hyju-0"
})(["background-color:transparent;color:", ";font-size:", ";cursor:pointer;pointer-events:all;padding:5px 0;margin:0 5px;width:20px;outline:0;border:0;&::-moz-focus-inner{border:0;}&:focus{outline:none;}&:hover{color:", ";}"], function (props) {
  return props.theme.colors.purple400;
}, function (props) {
  return props.theme.fontSizes.small;
}, function (props) {
  return props.theme.colors.purple900;
}); // TODO: Consider making this action sticky-transition to live mode as well.


var TimelinePanButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TimelinePanButton, _React$Component);

  function TimelinePanButton(props) {
    var _this;

    _classCallCheck(this, TimelinePanButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimelinePanButton).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(TimelinePanButton, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
          timeScale = _this$props.timeScale,
          movePixels = _this$props.movePixels;
      var momentTimestamp = timeScale.invert(movePixels);
      this.props.onClick(momentTimestamp);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(PanButton, {
        onClick: this.handleClick
      }, _react.default.createElement("span", {
        className: this.props.icon
      }));
    }
  }]);

  return TimelinePanButton;
}(_react.default.Component);

TimelinePanButton.propTypes = {
  timeScale: _propTypes.default.func.isRequired,
  movePixels: _propTypes.default.number.isRequired,
  icon: _propTypes.default.string.isRequired
};
var _default = TimelinePanButton;
exports.default = _default;