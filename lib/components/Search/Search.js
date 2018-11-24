"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _noop2 = _interopRequireDefault(require("lodash/noop"));

var _last2 = _interopRequireDefault(require("lodash/last"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _without2 = _interopRequireDefault(require("lodash/without"));

var _includes2 = _interopRequireDefault(require("lodash/includes"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRequiredIf = _interopRequireDefault(require("react-required-if"));

var _compose = require("../../utils/compose");

var _Input = _interopRequireDefault(require("../Input"));

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

var _SearchTerm = _interopRequireDefault(require("./_SearchTerm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TermsContainer = _styledComponents.default.ul.withConfig({
  displayName: "Search__TermsContainer",
  componentId: "sc-1yq96i0-0"
})(["list-style:none;display:flex;margin:0;padding:0;flex-wrap:wrap;", ";"], function (props) {
  return props.disabled && 'opacity: 0.75;';
});

var Icon = _styledComponents.default.i.withConfig({
  displayName: "Search__Icon",
  componentId: "sc-1yq96i0-1"
})(["padding:0 6px 0 10px;", ";"], function (props) {
  return props.disabled && "color: ".concat(props.theme.colors.gray600, ";");
});

var SearchInput = _styledComponents.default.div.withConfig({
  displayName: "Search__SearchInput",
  componentId: "sc-1yq96i0-2"
})(["display:flex;flex-wrap:wrap;flex:3;width:100%;"]);

var Styled = function Styled(component) {
  return (0, _styledComponents.default)(component).withConfig({
    displayName: "Search",
    componentId: "sc-1yq96i0-3"
  })(["position:relative;display:flex;", " background-color:", ";border:1px solid ", ";border-radius:", ";font-size:", ";align-items:center;div,input{border:0;}", ",", "{padding:0;margin:0;}", "{flex:1;line-height:36px;border-left:1px solid ", ";.dropdown-popover{width:auto;}}", "{flex:2;width:100%;input{padding:0 8px;width:100%;}input:focus{outline:none;}}"], function (props) {
    return props.disabled && "pointer-events: none;";
  }, function (props) {
    return props.theme.colors[props.disabled ? 'gray50' : 'white'];
  }, function (props) {
    return props.theme.colors.purple100;
  }, function (props) {
    return props.theme.borderRadius.soft;
  }, function (props) {
    return props.theme.fontSizes.small;
  }, _Input.default, _Dropdown.default, _Dropdown.default, function (props) {
    return props.theme.colors.gray200;
  }, _Input.default);
};

var Search =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Search, _React$PureComponent);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Search)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addSearchTerm", function (value) {
      var nextPinnedTerms = _this.props.pinnedTerms; // only push unique values

      if (!(0, _includes2.default)(nextPinnedTerms, value)) {
        nextPinnedTerms = _toConsumableArray(nextPinnedTerms).concat([value]);

        _this.props.onPin(nextPinnedTerms);
      }

      _this.props.onChange('', nextPinnedTerms);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeSearchTerm", function (value) {
      var nextPinnedTerms = (0, _without2.default)(_this.props.pinnedTerms, value);

      _this.props.onChange(_this.props.query, nextPinnedTerms);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputKeyPress", function (ev) {
      if (ev.key === 'Enter' && _this.props.query.length > 0) {
        ev.preventDefault();

        _this.addSearchTerm(_this.props.query);
      } else if (ev.key === 'Backspace' && _this.props.query === '') {
        ev.preventDefault();
        var term = (0, _last2.default)(_this.props.pinnedTerms);

        if (term) {
          // Allow the user to edit the text of the last term instead of removing the whole thing.
          _this.removeSearchTerm(term);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputChange", function (ev) {
      _this.props.onChange(ev.target.value, _this.props.pinnedTerms);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFilterChange", function (ev, value) {
      _this.input.focus();

      _this.props.onFilterSelect(value);
    });

    return _this;
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          filters = _this$props.filters,
          placeholder = _this$props.placeholder,
          query = _this$props.query,
          pinnedTerms = _this$props.pinnedTerms,
          disabled = _this$props.disabled;
      return _react.default.createElement("div", {
        className: className
      }, _react.default.createElement(Icon, {
        className: "fa fa-search",
        disabled: disabled
      }), _react.default.createElement(SearchInput, null, _react.default.createElement(TermsContainer, {
        disabled: disabled
      }, (0, _map2.default)(pinnedTerms, function (term) {
        return _react.default.createElement(_SearchTerm.default, {
          key: term,
          term: term,
          onRemove: _this2.removeSearchTerm
        });
      })), _react.default.createElement(_Input.default, {
        hideValidationMessage: true,
        onChange: this.handleInputChange,
        value: query,
        onKeyDown: this.handleInputKeyPress,
        onBlur: this.props.onBlur,
        onFocus: this.props.onFocus,
        inputRef: function inputRef(ref) {
          _this2.input = ref;
        },
        placeholder: pinnedTerms.length === 0 ? placeholder : null,
        disabled: disabled
      })), !(0, _isEmpty2.default)(filters) && _react.default.createElement(_Dropdown.default, {
        items: filters,
        disabled: disabled,
        placeholder: "Filters",
        onChange: this.handleFilterChange
      }));
    }
  }]);

  return Search;
}(_react.default.PureComponent);

Search.propTypes = {
  /**
   * The initial value to use to populate the search text field.
   * Changes to this prop will be ignored after initial render.
   */
  query: _propTypes.default.string.isRequired,

  /**
   * The initial pinned terms of the search field.
   * Changes to this prop will be ignored after initial render.
   */
  pinnedTerms: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,

  /**
   * Handler that runs when the text input changes.
   * Returns the text as first argument, and the list of pinned terms as the second.
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * A list of selectable filters to be rendered in a `<Dropdown />`.
   * When an option is clicked, the `value` is added to the search terms.
   * This array will be passed directly to the `items` prop of the `<Dropdown />.
   * If omitted, no dropdown will be rendered.
   */
  filters: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.string,
    label: _propTypes.default.string
  })),

  /**
   * Text that will be passed to the search input as the placeholder.
   */
  placeholder: _propTypes.default.string,

  /**
   * Disables the component if true
   */
  disabled: _propTypes.default.bool,

  /**
   * Handler that runs when a search is pinned or unpinned.
   * Returns an array of the currently pinned terms.
   */
  onPin: _propTypes.default.func,

  /**
   * Handler that runs when an item from the search filter dropdown is selected
   * Returns the selected filter value.
   */
  onFilterSelect: (0, _reactRequiredIf.default)(_propTypes.default.func, function (props) {
    return props.filters.length > 0;
  }),
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func
};
Search.defaultProps = {
  placeholder: 'search',
  disabled: false,
  filters: [],
  onFilterSelect: _noop2.default,
  onPin: _noop2.default,
  onFocus: _noop2.default,
  onBlur: _noop2.default
};

var _default = (0, _compose.copyPropTypes)(Search, Styled(Search));

exports.default = _default;