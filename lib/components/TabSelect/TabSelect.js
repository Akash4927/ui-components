"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get2 = _interopRequireDefault(require("lodash/get"));

var _find2 = _interopRequireDefault(require("lodash/find"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tab = _interopRequireDefault(require("./Tab"));

var _TabButton = _interopRequireDefault(require("./_TabButton"));

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

var TabButtons = _styledComponents.default.div.withConfig({
  displayName: "TabSelect__TabButtons",
  componentId: "sc-11jclhd-0"
})([""]);

var borders = function borders(props) {
  return "\n    border-top-right-radius: ".concat(props.theme.borderRadius.soft, ";\n    border-bottom-right-radius: ").concat(props.theme.borderRadius.soft, ";\n    border-bottom-left-radius: ").concat(props.theme.borderRadius.soft, ";\n    border: 1px solid ").concat(props.theme.colors.purple100, ";\n");
};

var bordersOnlyTop = function bordersOnlyTop(props) {
  return "\n  border-top: 1px solid ".concat(props.theme.colors.purple100, "\n");
};

var TabContent = _styledComponents.default.div.withConfig({
  displayName: "TabSelect__TabContent",
  componentId: "sc-11jclhd-1"
})(["padding:", ";background-color:", ";", ";"], function (props) {
  return props.small ? '10px' : '20px';
}, function (props) {
  return props.secondary ? 'transparent' : props.theme.colors.white;
}, function (props) {
  return props.secondary ? bordersOnlyTop(props) : borders(props);
});

var Styled = function Styled(component) {
  return (0, _styledComponents.default)(component).withConfig({
    displayName: "TabSelect",
    componentId: "sc-11jclhd-2"
  })([""]);
};

var TabSelect =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(TabSelect, _React$PureComponent);

  function TabSelect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TabSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TabSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      selectedTab: // Use the first tab as the default if no selectedTab prop is specified.
      _this.props.selectedTab || (0, _get2.default)(_this.props.children, '[0].props.name')
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isSelectedTab", function (_ref) {
      var name = _ref.name;
      return name === _this.state.selectedTab;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTabClick", function (ev, tabName) {
      _this.setState({
        selectedTab: tabName
      });

      if (_this.props.onChange) {
        _this.props.onChange(ev, tabName);
      }
    });

    return _this;
  }

  _createClass(TabSelect, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // Always override user-selected tab with the default one from
      // the prop input (so that URL param can take precedence).
      if (nextProps.selectedTab !== this.props.selectedTab) {
        this.setState({
          selectedTab: nextProps.selectedTab
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          secondary = _this$props.secondary,
          small = _this$props.small;

      var tabs = _react.default.Children.map(children, function (child) {
        return (0, _pick2.default)(child.props, ['label', 'name']);
      });

      var selected = (0, _find2.default)(children, function (c) {
        return _this2.isSelectedTab(c.props);
      });
      return _react.default.createElement("div", {
        className: className
      }, _react.default.createElement(TabButtons, null, (0, _map2.default)(tabs, function (tab) {
        return _react.default.createElement(_TabButton.default, {
          key: tab.name,
          name: tab.name,
          selected: _this2.isSelectedTab(tab),
          secondary: secondary,
          small: small,
          onClick: _this2.handleTabClick
        }, tab.label);
      })), _react.default.createElement(TabContent, {
        small: small,
        secondary: secondary
      }, selected));
    }
  }]);

  return TabSelect;
}(_react.default.PureComponent);

TabSelect.propTypes = {
  /**
   * Secondary styling for TabSelect without border around content and
   * transparent background
   */
  secondary: _propTypes.default.bool,

  /**
   * Small styling for TabSelect
   */
  small: _propTypes.default.bool,

  /**
   * The tab to show on first render.
   * Supplying a new value to this prop will override the currently selected item
   */
  selectedTab: _propTypes.default.string,

  /**
   * Children of `TabSelect` must be a `Tab` component
   */
  // eslint can't figure out that this is required because of custom checker
  // function and so requires a defaultProp be set
  // eslint-disable-next-line react/require-default-props
  children: function children(props, propName) {
    var error = null;

    if (_react.default.Children.count === 0) {
      return new Error('You cannot have a TabSelect without any Tabs');
    }

    _react.default.Children.forEach(props[propName], function (child) {
      if (child.type !== _Tab.default) {
        error = new Error("Wrong component supplied to TabSelect. Expected a <Tab />, got a ".concat(child.type));
      }
    });

    return error;
  }
};
TabSelect.defaultProps = {
  secondary: false,
  small: false,
  selectedTab: ''
};

var _default = Styled(TabSelect);

exports.default = _default;