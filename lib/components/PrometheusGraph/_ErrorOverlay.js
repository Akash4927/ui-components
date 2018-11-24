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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ErrorContainer = _styledComponents.default.div.withConfig({
  displayName: "_ErrorOverlay__ErrorContainer",
  componentId: "k4kt6b-0"
})(["color:", ";opacity:", ";position:absolute;top:0;left:0;width:100%;height:100%;padding-top:95px;box-sizing:border-box;text-align:center;"], function (props) {
  return props.theme.colors.orange600;
}, function (props) {
  return props.loading ? 0.2 : 1;
});

var ErrorText = _styledComponents.default.span.withConfig({
  displayName: "_ErrorOverlay__ErrorText",
  componentId: "k4kt6b-1"
})(["border-radius:", ";padding:5px 10px;opacity:0.75;", ";"], function (props) {
  return props.theme.borderRadius.soft;
}, function (props) {
  return props.hasData && "\n    background-color: ".concat(props.theme.colors.white, ";\n  ");
});

var ErrorOverlay =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ErrorOverlay, _React$PureComponent);

  function ErrorOverlay() {
    _classCallCheck(this, ErrorOverlay);

    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorOverlay).apply(this, arguments));
  }

  _createClass(ErrorOverlay, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          loading = _this$props.loading,
          error = _this$props.error,
          hasData = _this$props.hasData;
      if (!error) return null;
      return _react.default.createElement(ErrorContainer, {
        loading: loading
      }, _react.default.createElement(ErrorText, {
        hasData: hasData
      }, error));
    }
  }]);

  return ErrorOverlay;
}(_react.default.PureComponent);

ErrorOverlay.propTypes = {
  hasData: _propTypes.default.bool.isRequired,
  loading: _propTypes.default.bool.isRequired,
  error: _propTypes.default.string
};
ErrorOverlay.defaultProps = {
  error: ''
};
var _default = ErrorOverlay;
exports.default = _default;