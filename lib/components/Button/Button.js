"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _noop2 = _interopRequireDefault(require("lodash/noop"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _selectors = require("../../theme/selectors");

var _theme = require("../../utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledButton = (0, _styledComponents.default)('button').withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-13fdicr-0"
})(["height:36px;min-width:90px;padding:0 12px;border:0;outline:none;box-shadow:", ";background:", ";color:", ";font-size:", ";cursor:", ";border-radius:", ";&:hover{transition:color 0.3s ease;background:", ";color:", ";}"], function (props) {
  return props.styled.selected ? (0, _selectors.boxShadow)('selected') : (0, _selectors.boxShadow)('light');
}, (0, _theme.fromAtoms)('Button', 'styled.type', 'background'), (0, _theme.fromAtoms)('Button', 'styled.type', 'color'), (0, _selectors.fontSize)('small'), function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, (0, _selectors.borderRadius)('soft'), (0, _theme.fromAtoms)('Button', 'styled.type', 'hoverBackground'), (0, _theme.fromAtoms)('Button', 'styled.type', 'hoverColor'));
/**
 * A button that will run a callback on click
 * ```javascript
 *  <Button onClick={alert} text="Submit" />
 * ```
 */

var Button =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Button, _React$PureComponent);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled,
          text = _this$props.text;

      if (onClick && !disabled) {
        onClick(e, text);
      }
    });

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          text = _this$props2.text,
          primary = _this$props2.primary,
          danger = _this$props2.danger,
          selected = _this$props2.selected,
          disabled = _this$props2.disabled,
          otherProps = _objectWithoutProperties(_this$props2, ["children", "text", "primary", "danger", "selected", "disabled"]);

      var buttonProps = (0, _omit2.default)(otherProps, ['onClick']);
      return _react.default.createElement(StyledButton, _extends({
        disabled: disabled,
        onClick: this.handleClick,
        styled: {
          selected: selected,
          type: disabled && 'disabled' || primary && 'primary' || danger && 'danger' || 'default'
        }
      }, buttonProps), children || text);
    }
  }]);

  return Button;
}(_react.default.PureComponent);

Button.propTypes = {
  /**
   * Callback that will be run when the button is clicked.
   */
  onClick: _propTypes.default.func,

  /**
   * Text that will be used as the button label.
   * If this props is provided, it will be passed back to the `onClick` handler
   */
  text: _propTypes.default.string,

  /**
   * Disable the button.
   */
  disabled: _propTypes.default.bool,

  /**
   * Render the button in blue700 (useful for CTAs)
   */
  primary: _propTypes.default.bool,

  /**
   * Add styling to show the button as selected
   */
  selected: _propTypes.default.bool,

  /**
   * Turn the button red to indicate something bad might happen
   */
  danger: _propTypes.default.bool,

  /**
   * The type of button, as it relates to <form> components
   */
  type: _propTypes.default.string
};
Button.defaultProps = {
  text: 'Submit',
  type: 'submit',
  disabled: false,
  primary: false,
  danger: false,
  selected: false,
  onClick: _noop2.default
};
var _default = Button;
exports.default = _default;