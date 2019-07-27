"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isArray2 = _interopRequireDefault(require("lodash/isArray"));

var _flattenDepth2 = _interopRequireDefault(require("lodash/flattenDepth"));

var _find2 = _interopRequireDefault(require("lodash/find"));

var _noop2 = _interopRequireDefault(require("lodash/noop"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _selectors = require("../../theme/selectors");

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

var WIDTH = '256px';
var HEIGHT_NUMBER = 36;
var HEIGHT = "".concat(HEIGHT_NUMBER, "px");

var Item = _styledComponents.default.div.withConfig({
  displayName: "Dropdown__Item",
  componentId: "sc-17i3rgt-0"
})(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:", ";padding-left:", ";cursor:pointer;", ";"], (0, _selectors.spacing)('medium'), (0, _selectors.spacing)('small'), function (props) {
  return props.disabled && "\n    cursor: not-allowed;\n    color: ".concat(props.theme.colors.gray200, ";\n    background-color: ").concat(props.theme.colors.white, ";\n  ");
});

var Popover = _styledComponents.default.div.withConfig({
  displayName: "Dropdown__Popover",
  componentId: "sc-17i3rgt-1"
})(["position:absolute;background-color:", ";border:1px solid ", ";border-radius:", ";z-index:", ";box-shadow:", ";margin-top:4px;width:", "px;max-height:", "px;overflow:auto;box-sizing:border-box;padding:", " 0;"], function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  return props.theme.borderRadius.soft;
}, function (props) {
  return props.theme.layers.dropdown;
}, function (props) {
  return props.theme.boxShadow.light;
}, function (props) {
  return props.width;
}, HEIGHT_NUMBER * 10.5 + 10, (0, _selectors.spacing)('xxs'));

var Overlay = _styledComponents.default.div.withConfig({
  displayName: "Dropdown__Overlay",
  componentId: "sc-17i3rgt-2"
})(["z-index:", ";position:fixed;top:0;bottom:0;right:0;left:0;"], function (props) {
  return props.theme.layers.dropdown;
});

var ItemWrapper = (0, _styledComponents.default)(Item).withConfig({
  displayName: "Dropdown__ItemWrapper",
  componentId: "sc-17i3rgt-3"
})(["line-height:", ";", " min-height:", ";&:hover:not([disabled]){background-color:", ";}"], HEIGHT, function (props) {
  return props.selected && "color: ".concat(props.theme.colors.blue400, ";");
}, HEIGHT, function (props) {
  return props.theme.colors.gray50;
});

var Divider = _styledComponents.default.div.withConfig({
  displayName: "Dropdown__Divider",
  componentId: "sc-17i3rgt-4"
})(["margin:6px 0;border-bottom:1px solid ", ";"], function (props) {
  return props.theme.colors.gray200;
});

var SelectedItem = (0, _styledComponents.default)(Item).withConfig({
  displayName: "Dropdown__SelectedItem",
  componentId: "sc-17i3rgt-5"
})(["height:", ";box-sizing:border-box;border-radius:", ";background-color:", ";border:1px solid ", ";display:flex;", "{padding:0;}div:last-child{margin-left:auto;}"], HEIGHT, function (props) {
  return props.theme.borderRadius.soft;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.gray600;
}, Item);

var SelectedItemIcon = _styledComponents.default.span.withConfig({
  displayName: "Dropdown__SelectedItemIcon",
  componentId: "sc-17i3rgt-6"
})(["position:absolute;right:10px;top:50%;transform:translateY(-50%);"]);

var StyledDropdown = function StyledDropdown(component) {
  return (0, _styledComponents.default)(component).withConfig({
    displayName: "Dropdown",
    componentId: "sc-17i3rgt-7"
  })(["height:", ";line-height:34px;position:relative;width:", ";box-sizing:border-box;"], HEIGHT, function (props) {
    return props.width || WIDTH;
  });
};

var DefaultToggleView = function DefaultToggleView(_ref) {
  var onClick = _ref.onClick,
      disabled = _ref.disabled,
      selectedLabel = _ref.selectedLabel;
  return _react.default.createElement(SelectedItem, {
    className: "dropdown-toggle",
    onClick: onClick,
    disabled: disabled
  }, _react.default.createElement(Item, {
    disabled: disabled
  }, selectedLabel), _react.default.createElement(SelectedItemIcon, {
    className: "fa fa-caret-down"
  }));
};
/**
 * A selectable drop-down menu.
 * ```javascript
 *const items = [
 *  {
 *    value: 'first-thing',
 *    label: 'First Thing',
 *  },
 *  {
 *    value: 'second-thing',
 *    label: 'Second Thing',
 *  },
 * ];
 *
 * <Dropdown items={items} />
 * ```
 *
 * You  may also add `null` for dividers or provide groups that will be separated
 * ```javascript
 *const items = [
 *  [
 *    {
 *      value: 'first-thing',
 *      label: 'First Thing',
 *    },
 *    {
 *      value: 'second-thing',
 *      label: 'Second Thing',
 *    },
 *  ],
 *  [
 *    {
 *      value: 'another-thing',
 *      label: 'Another Thing',
 *    },
 *  ]
 * ];
 * ```
 */


var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props, context) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props, context));
    _this.state = {
      isOpen: false
    };
    _this.element = _react.default.createRef();
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBgClick = _this.handleBgClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "handleChange",
    value: function handleChange(ev, value, label) {
      this.setState({
        isOpen: false
      });

      if (this.props.onChange) {
        this.props.onChange(ev, value, label);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      if (!this.props.disabled) {
        this.setState({
          isOpen: true
        });
      }
    }
  }, {
    key: "handleBgClick",
    value: function handleBgClick() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "divide",
    value: function divide(items) {
      if (!items || !(0, _isArray2.default)(items[0])) {
        return items;
      }

      return (0, _flattenDepth2.default)(items.map(function (it) {
        return [null, it];
      }), 2).slice(1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          items = _this$props.items,
          value = _this$props.value,
          className = _this$props.className,
          placeholder = _this$props.placeholder,
          disabled = _this$props.disabled;
      var isOpen = this.state.isOpen;
      var divided = this.divide(items); // If nothing is selected, use the placeholder, else use the first item.

      var currentItem = (0, _find2.default)(divided, function (i) {
        return i && i.value === value;
      }) || (placeholder ? {
        label: placeholder,
        value: null
      } : divided && divided[0]);
      var label = currentItem && (currentItem.selectedLabel || currentItem.label);
      var Component = this.props.withComponent;
      return _react.default.createElement("div", {
        className: className,
        title: label,
        ref: this.element
      }, _react.default.createElement(Component, {
        selectedLabel: label,
        disabled: disabled,
        onClick: this.handleClick
      }), isOpen && _react.default.createElement("div", null, _react.default.createElement(Overlay, {
        onClick: this.handleBgClick
      }), _react.default.createElement(Popover, {
        className: "dropdown-popover",
        width: this.element.current.offsetWidth
      }, (0, _map2.default)(divided, function (item, index) {
        return item ? _react.default.createElement(ItemWrapper, {
          className: "dropdown-item",
          key: item.value,
          disabled: item.disabled,
          onClick: item.disabled ? undefined : function (ev) {
            return _this2.handleChange(ev, item.value, item.label);
          },
          selected: item.value === value,
          title: item && typeof item.label === 'string' ? item.label : ''
        }, item.label) : _react.default.createElement(Divider, {
          key: index
        });
      }))));
    }
  }]);

  return Dropdown;
}(_react.default.Component);

var itemPropType = _propTypes.default.shape({
  disabled: _propTypes.default.bool,
  label: _propTypes.default.node,
  selectedLabel: _propTypes.default.node,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
});

Dropdown.propTypes = {
  /**
   * Disables the component if true
   */
  disabled: _propTypes.default.bool,

  /**
   * Array of items (or groups of items) that will be selectable.
   * - `value` should be an internal value,
   * - `label` is what will be displayed to the user.
   * - `selectedLabel` (optional) what will be displayed in the collapsed state of the dropdown. If
   *   omitted `label` will be used.
   */
  items: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.arrayOf(itemPropType), itemPropType])).isRequired,

  /**
   * A handler function that will run when a value is selected.
   */
  onChange: _propTypes.default.func,

  /**
   * The initial text that will be display before a user selects an item.
   */
  placeholder: _propTypes.default.string,

  /**
   * The value of the currently selected item. This much match a value in the `items` prop.
   * If no value is provided, the first elements's value will be used.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Pass a custom width css value
   */
  width: _propTypes.default.string,

  /**
   * A custom component to replace the default toggle view.
   * The properties `selectedLabel` and `onClick` are provided. `onClick` needs to be incorporated
   * to make the dropdown list toggle.
   */
  withComponent: _propTypes.default.func
};
Dropdown.defaultProps = {
  disabled: false,
  onChange: _noop2.default,
  placeholder: '',
  value: '',
  width: WIDTH,
  withComponent: DefaultToggleView
};

var _default = StyledDropdown(Dropdown);

exports.default = _default;