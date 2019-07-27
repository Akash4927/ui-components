"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BaseShape = _interopRequireDefault(require("./_BaseShape"));

var _HighlightBorder = _interopRequireDefault(require("./elements/_HighlightBorder"));

var _HighlightShadow = _interopRequireDefault(require("./elements/_HighlightShadow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var StackedShape =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StackedShape, _React$Component);

  function StackedShape() {
    _classCallCheck(this, StackedShape);

    return _possibleConstructorReturn(this, _getPrototypeOf(StackedShape).apply(this, arguments));
  }

  _createClass(StackedShape, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          highlighted = _this$props.highlighted,
          contrastMode = _this$props.contrastMode,
          renderTemplate = _this$props.renderTemplate,
          size = _this$props.size;
      var verticalDistance = size * (contrastMode ? 0.18 : 0.15);

      var verticalTranslate = function verticalTranslate(t) {
        return "translate(0, ".concat(t * verticalDistance, ")");
      }; // Stack three shapes on top of one another pretending they are never highlighted.
      // Instead, fake the highlight of the whole stack with a vertically stretched shape
      // drawn in the background. This seems to give a good approximation of the stack
      // highlight and prevents us from needing to do some render-heavy SVG clipping magic.


      return _react.default.createElement("g", {
        transform: verticalTranslate(-2.5)
      }, _react.default.createElement("g", {
        transform: "".concat(verticalTranslate(1), " scale(").concat(size, ", ").concat(1.14 * size, ")")
      }, highlighted && (0, _HighlightBorder.default)(renderTemplate, contrastMode), highlighted && (0, _HighlightShadow.default)(renderTemplate, contrastMode)), _react.default.createElement("g", {
        transform: verticalTranslate(2)
      }, _react.default.createElement(_BaseShape.default, _extends({}, this.props, {
        highlighted: false,
        metricValue: undefined
      }))), _react.default.createElement("g", {
        transform: verticalTranslate(1)
      }, _react.default.createElement(_BaseShape.default, _extends({}, this.props, {
        highlighted: false,
        metricValue: undefined
      }))), _react.default.createElement("g", {
        transform: verticalTranslate(0)
      }, _react.default.createElement(_BaseShape.default, _extends({}, this.props, {
        highlighted: false,
        metricValue: undefined
      }))));
    }
  }]);

  return StackedShape;
}(_react.default.Component);

var _default = StackedShape;
exports.default = _default;