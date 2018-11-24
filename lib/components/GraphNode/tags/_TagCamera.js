"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

var Rect = _styledComponents.default.rect.attrs({
  fill: function fill(props) {
    return props.contrastMode ? props.theme.colors.black : props.theme.colors.purple800;
  },
  rx: 5
}).withConfig({
  displayName: "_TagCamera__Rect",
  componentId: "hd1e85-0"
})([""]);

var Circle = _styledComponents.default.circle.attrs({
  stroke: function stroke(props) {
    return props.theme.colors.white;
  },
  fill: function fill(props) {
    return props.contrastMode ? props.theme.colors.black : props.theme.colors.purple800;
  }
}).withConfig({
  displayName: "_TagCamera__Circle",
  componentId: "hd1e85-1"
})([""]);

var TagCamera =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TagCamera, _React$Component);

  function TagCamera() {
    _classCallCheck(this, TagCamera);

    return _possibleConstructorReturn(this, _getPrototypeOf(TagCamera).apply(this, arguments));
  }

  _createClass(TagCamera, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("g", {
        transform: "translate(16, 6) scale(0.75)"
      }, _react.default.createElement(Rect, _extends({}, this.props, {
        x: "0",
        y: "4",
        width: "30",
        height: "24"
      })), _react.default.createElement(Rect, _extends({}, this.props, {
        x: "5",
        y: "0",
        width: "20",
        height: "25"
      })), _react.default.createElement(Circle, _extends({}, this.props, {
        cx: "15",
        cy: "15",
        r: "6",
        strokeWidth: "4"
      })));
    }
  }]);

  return TagCamera;
}(_react.default.Component);

exports.default = TagCamera;