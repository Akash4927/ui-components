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

var TagNotPermitted =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TagNotPermitted, _React$Component);

  function TagNotPermitted() {
    _classCallCheck(this, TagNotPermitted);

    return _possibleConstructorReturn(this, _getPrototypeOf(TagNotPermitted).apply(this, arguments));
  }

  _createClass(TagNotPermitted, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("g", {
        transform: "translate(0.5, -6) scale(0.75)"
      }, _react.default.createElement("ellipse", {
        stroke: "#000",
        ry: "13.5",
        rx: "13.75",
        id: "svg_1",
        cy: "31.99999",
        cx: "32.74999",
        strokeWidth: "1.5",
        fill: "#000000"
      }), _react.default.createElement("rect", {
        stroke: "#000",
        transform: "matrix(0.366463283711019,-0.4058570014626445,0.4175483281489437,0.35620233502660426,-1.5858059729040832,34.05587325441532) ",
        id: "svg_2",
        height: "43.24565",
        width: "11.5",
        y: "21.96444",
        x: "37.45398",
        strokeWidth: "1.5",
        fill: "#ffffff"
      }));
    }
  }]);

  return TagNotPermitted;
}(_react.default.Component);

exports.default = TagNotPermitted;