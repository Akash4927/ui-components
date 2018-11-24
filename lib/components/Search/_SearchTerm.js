"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _noop2 = _interopRequireDefault(require("lodash/noop"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _compose = require("../../utils/compose");

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

var Styled = function Styled(component) {
  return (0, _styledComponents.default)(component).withConfig({
    displayName: "_SearchTerm",
    componentId: "sc-1nm9wz9-0"
  })(["background-color:", ";border-radius:", ";margin:4px 0 4px 2px;padding:6px;margin-left:4px;display:flex;align-items:center;i{padding-left:4px;cursor:pointer;}"], function (props) {
    return props.theme.colors.blue200;
  }, function (props) {
    return props.theme.borderRadius.soft;
  });
};

var SearchTerm =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(SearchTerm, _React$PureComponent);

  function SearchTerm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SearchTerm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchTerm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRemove", function () {
      _this.props.onRemove(_this.props.term, _this.props.label);
    });

    return _this;
  }

  _createClass(SearchTerm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          term = _this$props.term,
          label = _this$props.label;
      return _react.default.createElement("li", {
        className: "".concat(className, " search-term")
      }, _react.default.createElement("div", {
        className: "search-term-text"
      }, label || term), _react.default.createElement("i", {
        onClick: this.handleRemove,
        className: "fa fa-times remove-term"
      }));
    }
  }]);

  return SearchTerm;
}(_react.default.PureComponent);

SearchTerm.propTypes = {
  /**
   * The internal identifier for a term.
   * If no `label` is supplied, `term` will be rendered.
   */
  term: _propTypes.default.string.isRequired,

  /**
   * Display value that will be rendered.
   */
  label: _propTypes.default.string,

  /**
   * Handler that will run when a term is removed.
   * The `term` prop will be passed to the `onRemove` handler.
   */
  onRemove: _propTypes.default.func
};
SearchTerm.defaultProps = {
  label: '',
  onRemove: _noop2.default
};

var _default = (0, _compose.copyPropTypes)(SearchTerm, Styled(SearchTerm));

exports.default = _default;