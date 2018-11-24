"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var StyledHeader = function StyledHeader(component) {
  return (0, _styledComponents.default)(component).withConfig({
    displayName: "_Header",
    componentId: "sc-1wobgxm-0"
  })(["text-align:left;cursor:", ";user-select:none;width:", ";&:hover{color:", ";}"], function (props) {
    return props.sortable ? 'pointer' : 'inherit';
  }, function (props) {
    return props.width;
  }, function (props) {
    return props.sortable ? props.theme.colors.blue700 : 'inherit';
  });
};

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (ev) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          value = _this$props.value,
          sortable = _this$props.sortable;

      if (onClick && sortable) {
        onClick(ev, value);
      }
    });

    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          children = _this$props2.children,
          order = _this$props2.order,
          sortable = _this$props2.sortable,
          title = _this$props2.title;
      return _react.default.createElement("td", {
        onClick: this.handleClick,
        className: className,
        title: title
      }, children, ' ', order && sortable && _react.default.createElement("i", {
        className: order === 'desc' ? 'fa fa-caret-down' : 'fa fa-caret-up'
      }));
    }
  }]);

  return Header;
}(_react.default.Component); // Only way to declare default props :(


var Styled = StyledHeader(Header);
Styled.propTypes = {
  /**
   * Whether or not the column will be sortable
   */
  sortable: _propTypes.default.bool,

  /**
   * The width that will be applied to the column
   */
  width: _propTypes.default.string,

  /**
   * Sort order. Should be either `asc` or `desc`
   */
  order: _propTypes.default.oneOf(['asc', 'desc'])
};
Styled.defaultProps = {
  sortable: true
};
var _default = Styled;
exports.default = _default;