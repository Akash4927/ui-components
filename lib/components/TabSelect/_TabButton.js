"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

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

var TabName = _styledComponents.default.span.withConfig({
  displayName: "_TabButton__TabName",
  componentId: "sc-1o9j7wa-0"
})([""]);

var getBgColor = function getBgColor(selected, secondary, theme) {
  if (secondary) {
    return theme.colors.purple25;
  }

  return selected ? theme.colors.white : theme.colors.gray50;
};

var Styled = function Styled(component) {
  return (0, _styledComponents.default)(component).withConfig({
    displayName: "_TabButton",
    componentId: "sc-1o9j7wa-1"
  })(["cursor:pointer;margin-bottom:-1px;margin-right:5px;padding:", ";font-size:", ";outline:0;", ";", ";", "{color:", ";opacity:", ";}"], function (props) {
    return props.small ? '5px 10px' : '10px 20px';
  }, function (props) {
    return props.small ? props.theme.fontSizes.normal : props.theme.fontSizes.large;
  }, function (_ref) {
    var selected = _ref.selected,
        secondary = _ref.secondary,
        theme = _ref.theme;
    return "\n    background-color: ".concat(getBgColor(selected, secondary, theme), ";\n    border-top-left-radius: ").concat(theme.borderRadius.soft, ";\n    border-top-right-radius: ").concat(theme.borderRadius.soft, ";\n    border: 1px solid ").concat(theme.colors.purple100, ";\n  ");
  }, function (props) {
    return props.selected && 'border-bottom: 1px solid transparent;';
  }, TabName, function (props) {
    return props.theme.colors.purple900;
  }, function (props) {
    return props.selected ? 1 : 0.65;
  });
};

var TabButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabButton, _React$Component);

  function TabButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TabButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TabButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handeClick", function (ev) {
      _this.props.onClick(ev, _this.props.name);
    });

    return _this;
  }

  _createClass(TabButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
      return _react.default.createElement("button", {
        onClick: this.handeClick,
        className: className
      }, _react.default.createElement(TabName, null, children));
    }
  }]);

  return TabButton;
}(_react.default.Component);

var _default = Styled(TabButton);

exports.default = _default;