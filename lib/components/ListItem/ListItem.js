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

var Container = _styledComponents.default.div.withConfig({
  displayName: "ListItem__Container",
  componentId: "sc-4ui9mo-0"
})(["display:flex;position:relative;padding:12px 16px;", ";"], function (props) {
  return props.active && "\n    background-color: ".concat(props.theme.colors.gray50, ";\n  ");
});

var Link = Container.withComponent('a');

var Icon = _styledComponents.default.span.withConfig({
  displayName: "ListItem__Icon",
  componentId: "sc-4ui9mo-1"
})(["margin-right:12px;"]);

var Content = _styledComponents.default.div.withConfig({
  displayName: "ListItem__Content",
  componentId: "sc-4ui9mo-2"
})(["flex-direction:column;width:100%;"]);

var Subtext = _styledComponents.default.span.withConfig({
  displayName: "ListItem__Subtext",
  componentId: "sc-4ui9mo-3"
})(["font-size:", ";opacity:0.5;"], function (props) {
  return props.theme.fontSizes.small;
});
/**
 * A list item component that can be used for or showing off summary details about something!
 *
 * ```javascript
 * export default function ListItemExample({ clickHandler }) {
 *   const onClick = () => clickHandler('onClick', 'clicked it');
 *   return (
 *     <div>
 *       <ListItem
 *         onClick={onClick}
 *         text="Item 1"
 *         />
 *       <ListItem
 *         onClick={onClick}
 *         text="Item 2"
 *         subText="Where do you go to?"
 *         />
 *     </div>
 *   );
 * }
 * ```
 */


var ListItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ListItem, _React$Component);

  function ListItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ListItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (ev) {
      ev.preventDefault();
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          value = _this$props.value;

      if (onClick) {
        onClick(value);
      }
    });

    return _this;
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          active = _this$props2.active,
          text = _this$props2.text,
          subText = _this$props2.subText,
          onClick = _this$props2.onClick,
          children = _this$props2.children,
          style = _this$props2.style,
          leftIcon = _this$props2.leftIcon;
      var BaseTag = onClick ? Link : Container;
      var props = onClick && {
        href: '#'
      };
      return _react.default.createElement(BaseTag, _extends({
        style: style,
        active: active,
        onClick: this.handleClick
      }, props), leftIcon && _react.default.createElement(Icon, null, leftIcon), _react.default.createElement(Content, null, text && _react.default.createElement("div", null, text), children, subText && _react.default.createElement(Subtext, null, subText)));
    }
  }]);

  return ListItem;
}(_react.default.Component);

ListItem.propTypes = {
  active: _propTypes.default.bool,
  leftIcon: _propTypes.default.node,
  onClick: _propTypes.default.func,
  style: _propTypes.default.object,
  subText: _propTypes.default.node,
  text: _propTypes.default.node,
  value: _propTypes.default.node
};
ListItem.defaultProps = {
  active: false,
  leftIcon: null,
  onClick: null,
  style: {},
  subText: '',
  text: '',
  value: ''
};
var _default = ListItem;
exports.default = _default;