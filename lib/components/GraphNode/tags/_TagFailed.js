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

var TagFailed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TagFailed, _React$Component);

  function TagFailed() {
    _classCallCheck(this, TagFailed);

    return _possibleConstructorReturn(this, _getPrototypeOf(TagFailed).apply(this, arguments));
  }

  _createClass(TagFailed, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("g", {
        transform: "translate(3, -9) scale(0.75)"
      }, _react.default.createElement("ellipse", {
        stroke: "#000000",
        ry: "13.75006",
        rx: "14.50005",
        id: "svg_4",
        cy: "34.25006",
        cx: "31.50005",
        strokeWidth: "1.5",
        fill: "#000000"
      }), _react.default.createElement("rect", {
        stroke: "#000000",
        transform: "matrix(0.08671738006422355,-0.0899542209303263,0.09613118731012295,0.08114530344487703,7.3962654910418575,35.03777897880107) ",
        id: "svg_6",
        height: "182.69716",
        width: "33",
        y: "43.19679",
        x: "112.89225",
        strokeOpacity: "null",
        strokeWidth: "0",
        fill: "#ffffff"
      }), _react.default.createElement("rect", {
        stroke: "#000000",
        transform: "matrix(0.09499618408734749,0.08230740037307374,-0.0879592757342836,0.08889214801190072,31.22523457462846,11.592780964221957) ",
        id: "svg_7",
        height: "179.20266",
        width: "33",
        y: "45.7737",
        x: "114.59487",
        strokeOpacity: "null",
        strokeWidth: "0",
        fill: "#ffffff"
      }));
    }
  }]);

  return TagFailed;
}(_react.default.Component);

exports.default = TagFailed;