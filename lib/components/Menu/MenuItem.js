"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _noop2 = _interopRequireDefault(require("lodash/noop"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var Item = _styledComponents.default.div.withConfig({
  displayName: "MenuItem__Item",
  componentId: "sc-198zqm8-0"
})(["border-radius:", ";display:block;min-height:40px;line-height:40px;padding-left:20px;&:hover{transition:color,0.3s,ease;color:", ";background-color:", ";cursor:pointer;}", ";", ";"], function (props) {
  return props.theme.borderRadius.soft;
}, function (props) {
  return !props.active && props.theme.colors.purple800;
}, function (props) {
  return !props.active && props.theme.colors.gray50;
}, function (props) {
  return props.isSubItem && "\n    font-size: 14px;\n    padding-left: 40px;\n    line-height: 30px;\n    min-height: 30px;\n  ";
}, function (props) {
  return props.active && "\n    color: ".concat(props.theme.colors.gray50, ";\n    background-color: ").concat(props.theme.colors.purple400, ";\n  ");
});
/**
 * A child of the `<Menu />` component.
 *
 * See also [Menu](/components/menu)
 */


var MenuItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      if (_this.props.onClick) {
        _this.props.onClick(_this.props.text);
      }
    });

    return _this;
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          text = _this$props.text,
          children = _this$props.children,
          className = _this$props.className,
          active = _this$props.active,
          isSubItem = _this$props.isSubItem; // Use the className the users gives, or fall back to 'weave-menu-item'.

      var cl = (0, _classnames.default)(className || 'weave-menu-item', {
        'menu-item-active': active
      });
      return _react.default.createElement(Item, {
        onClick: this.handleClick,
        className: cl,
        active: active,
        isSubItem: isSubItem
      }, _react.default.createElement("div", {
        className: "menu-text"
      }, text), children);
    }
  }]);

  return MenuItem;
}(_react.default.Component);

MenuItem.propTypes = {
  /**
   * Handler that will be run on click. The `text` prop is passed to the handler function.
   */
  onClick: _propTypes.default.func,

  /**
   * Text that will be displayed as the menu item.
   */
  text: _propTypes.default.string,

  /**
   * Renders small text if true.
   */
  isSubItem: _propTypes.default.bool
};
MenuItem.defaultProps = {
  isSubItem: false,
  onClick: _noop2.default,
  text: ''
};
var _default = MenuItem;
exports.default = _default;