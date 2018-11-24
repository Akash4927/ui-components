"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

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

var TagExclamation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TagExclamation, _React$Component);

  function TagExclamation() {
    _classCallCheck(this, TagExclamation);

    return _possibleConstructorReturn(this, _getPrototypeOf(TagExclamation).apply(this, arguments));
  }

  _createClass(TagExclamation, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("g", {
        transform: "translate(6, -3) scale(0.75)"
      }, _react.default.createElement("ellipse", {
        stroke: "#000",
        ry: "13.5",
        rx: "13.75",
        id: "svg_1",
        cy: "26.49999",
        cx: "26.24999",
        strokeWidth: "1.5",
        fill: "#000000"
      }), _react.default.createElement("path", {
        stroke: "#000",
        id: "svg_6",
        d: "m29.27042,31.63724l-6.18795,0l-0.6124,-17.27556l7.35763,0l-0.55728,17.27556l0,0z",
        "fill-opacity": "null",
        strokeOpacity: "null",
        strokeWidth: "1.5",
        fill: "#ffffff"
      }), _react.default.createElement("rect", {
        stroke: "#000",
        id: "svg_7",
        height: "6",
        width: "6.5",
        y: "32.99999",
        x: "22.99999",
        "fill-opacity": "null",
        strokeOpacity: "null",
        strokeWidth: "1.5",
        fill: "#ffffff"
      }));
    }
  }]);

  return TagExclamation;
}(_react.default.Component);

exports.default = TagExclamation;