"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _noop2 = _interopRequireDefault(require("lodash/noop"));

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var placeholder = function placeholder(property, content) {
  return (0, _styledComponents.css)(["&::-webkit-input-placeholder{", ":", ";}&::-moz-placeholder{", ":", ";}&:-moz-placeholder{", ":", ";}&:-ms-input-placeholder{", ":", ";}"], property, content, property, content, property, content, property, content);
};

var Icon = _styledComponents.default.i.withConfig({
  displayName: "Input__Icon",
  componentId: "sc-1qr5ihg-0"
})(["position:absolute;right:10px;visibility:", ";color:", ";"], function (props) {
  return props.visible ? 'visible' : 'hidden';
}, function (props) {
  return props.theme.colors.orange600;
});

var InputWrapper = _styledComponents.default.div.withConfig({
  displayName: "Input__InputWrapper",
  componentId: "sc-1qr5ihg-1"
})(["position:relative;display:flex;align-items:center;height:36px;", ";input{", ";", ";padding-right:", ";padding-left:12px;width:100%;line-height:36px;box-shadow:none;background-color:", ";border:1px solid ", ";border-radius:", ";height:36px;box-sizing:border-box;&:disabled{", ";background-color:", ";}}"], function (_ref) {
  var hasLabel = _ref.hasLabel;
  return hasLabel && "margin-top: 10px";
}, function (props) {
  return placeholder('color', props.theme.colors.gray600);
}, placeholder('opacity', 1), function (props) {
  return props.valid ? '12px' : '38px';
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.gray600;
}, function (props) {
  return props.theme.borderRadius.soft;
}, placeholder('opacity', 0.5), function (props) {
  return props.theme.colors.gray50;
});

var StyledInput = function StyledInput(component) {
  return (0, _styledComponents.default)(component).withConfig({
    displayName: "Input",
    componentId: "sc-1qr5ihg-2"
  })(["padding:8px;"]);
};

var ValidationMessage = _styledComponents.default.span.withConfig({
  displayName: "Input__ValidationMessage",
  componentId: "sc-1qr5ihg-3"
})(["display:", ";padding-left:8px;margin-top:8px;font-size:", ";text-align:left;color:", ";visibility:", ";"], function (props) {
  return props.remove || !props.visible ? 'none' : 'block';
}, function (props) {
  return props.theme.fontSizes.small;
}, function (props) {
  return props.valid ? 'inherit' : props.theme.colors.orange600;
}, function (props) {
  return props.visible ? 'visible' : 'hidden';
});
/**
 * An input field that shows validation information.
 * Any normal `<input />` props can be used, such as `onChange`.
 *
 * The `<Input />` component itself does not do any validation.
 * Validation should be done externally.
 *
 * ```javascript
 *  <div>
 *    <Input label="Username" placeholder="your name here" />
 *    <Input label="Email" value="ron@hogwarts.edu" />
 *  </div>
 *  <div>
 *    <Input
 *      label="Email"
 *      value="invalid-email"
 *      valid={false}
 *      message="Bro, do you even email?"
 *      onChange={ev => console.log(ev.target.value)}
 *    />
 *    <Input label="Password" type="password" />
 *  </div>
 * ```
 *
 */


var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, _getPrototypeOf(Input).apply(this, arguments));
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          focus = _this$props.focus,
          autoSelectText = _this$props.autoSelectText,
          value = _this$props.value;

      if (focus) {
        this.getInputNode().focus();
      }

      if (autoSelectText && value) {
        this.getInputNode().setSelectionRange(0, value.length);
      }
    }
  }, {
    key: "getInputNode",
    value: function getInputNode() {
      return _reactDom.default.findDOMNode(this.input); // eslint-disable-line
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          hideValidationMessage = _this$props2.hideValidationMessage,
          id = _this$props2.id,
          inputRef = _this$props2.inputRef,
          label = _this$props2.label,
          message = _this$props2.message,
          textarea = _this$props2.textarea,
          valid = _this$props2.valid,
          inputProps = _objectWithoutProperties(_this$props2, ["className", "hideValidationMessage", "id", "inputRef", "label", "message", "textarea", "valid"]);

      return _react.default.createElement("div", {
        className: className
      }, label && _react.default.createElement("label", {
        htmlFor: id
      }, label), _react.default.createElement(InputWrapper, {
        valid: valid,
        hasLabel: Boolean(label)
      }, _react.default.createElement(textarea ? 'textarea' : 'input', _objectSpread({}, (0, _omit2.default)(inputProps, 'autoSelectText', 'focus'), {
        ref: function ref(elem) {
          _this.input = elem;
          inputRef(elem);
        }
      })), _react.default.createElement(Icon, {
        visible: !valid,
        className: "fa fa-times-circle"
      })), _react.default.createElement(ValidationMessage, {
        remove: hideValidationMessage,
        valid: valid,
        visible: message && !valid
      }, message));
    }
  }]);

  return Input;
}(_react.default.Component);

Input.propTypes = {
  /*
   * Select the text inside the input. Requires focus attribute to be true
   */
  autoSelectText: _propTypes.default.bool,

  /*
   * Focus the input on render
   */
  focus: _propTypes.default.bool,

  /*
   * Remove the validation message from the DOM
   */
  hideValidationMessage: _propTypes.default.bool,

  /**
   * A callback to which the input `ref` will be passed.
   */
  inputRef: _propTypes.default.func,

  /**
   * The label that will appear above the input field
   */
  label: _propTypes.default.string,

  /**
   * A message that will appear below the field; used to indicate validity.
   * This will not appear if `valid` is truthy.
   */
  message: _propTypes.default.any,

  /**
   * Callback to run when the input is edited by the user
   */
  onChange: _propTypes.default.func,

  /**
   * Use a `textarea` element instead of an `input` element
   */
  textarea: _propTypes.default.bool,

  /**
   * Whether or not the form value is valid. The icon will not appear when `valid` is truthy.
   */
  valid: _propTypes.default.bool
};
Input.defaultProps = {
  autoSelectText: false,
  focus: false,
  hideValidationMessage: false,
  inputRef: _noop2.default,
  label: '',
  message: '',
  onChange: _noop2.default,
  textarea: false,
  valid: true
};

var _default = StyledInput(Input);

exports.default = _default;