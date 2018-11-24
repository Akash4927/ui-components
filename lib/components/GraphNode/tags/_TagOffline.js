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

var TagOffline =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TagOffline, _React$Component);

  function TagOffline() {
    _classCallCheck(this, TagOffline);

    return _possibleConstructorReturn(this, _getPrototypeOf(TagOffline).apply(this, arguments));
  }

  _createClass(TagOffline, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("g", {
        transform: "translate(6, -1) scale(0.75)"
      }, _react.default.createElement("path", {
        stroke: "#000",
        id: "svg_11",
        d: "m14.70689,31.52698l21.5549,0.00808l-0.69946,1.0149l-20.14772,-0.02424l-0.70772,-0.99874l0,0zm0.14813,-13.50051l21.26687,-0.02424l0.61719,1.04113l-22.50949,0.00808l0.62543,-1.02498zm-2.09878,6.76492l25.44796,-0.02424l-0.03289,1.04114l-25.39861,-0.01616l-0.01646,-1.00074zm25.46903,0.09656c0,6.89256 -5.7125,12.49973 -12.73526,12.49973c-7.01973,0 -12.73116,-5.60818 -12.73116,-12.49973c0,-6.89158 5.71247,-12.49875 12.73116,-12.49875c7.02276,-0.00101 12.73526,5.60717 12.73526,12.49875zm-12.73426,-13.50051c-7.58008,0 -13.74845,6.05576 -13.74845,13.49949c0,7.44475 6.16837,13.5005 13.74845,13.5005c7.58421,0 13.75154,-6.05576 13.75154,-13.5005c0,-7.44373 -6.16733,-13.49949 -13.75154,-13.49949zm3.8582,13.50051c0,7.36528 -2.03257,12.49973 -3.8582,12.49973c-1.82356,0 -3.8561,-5.13446 -3.8561,-12.49973c0,-7.36731 2.03154,-12.49875 3.8561,-12.49875c1.8246,-0.00101 3.8582,5.13145 3.8582,12.49875zm-3.8582,-13.50051c-3.16663,0 -4.87545,6.95592 -4.87545,13.49949c0,6.54557 1.70883,13.5005 4.87545,13.5005c3.16666,0 4.87858,-6.95594 4.87858,-13.5005c-0.00103,-6.54357 -1.71192,-13.49949 -4.87858,-13.49949zm9.03589,13.50051c0,6.89256 -4.05488,12.49973 -9.03589,12.49973c-4.97997,0 -9.03279,-5.60818 -9.03279,-12.49973c0,-6.89158 4.05282,-12.49875 9.03279,-12.49875c4.981,-0.00101 9.03589,5.60717 9.03589,12.49875zm-9.03589,-13.50051c-5.54139,0 -10.05214,6.05576 -10.05214,13.49949c0,7.44475 4.51075,13.5005 10.05214,13.5005c5.54345,0 10.0532,-6.05576 10.0532,-13.5005c0,-7.44373 -4.50975,-13.49949 -10.0532,-13.49949z",
        "fill-opacity": "null",
        "stroke-opacity": "null",
        "stroke-width": "1.5",
        fill: "#ffffff"
      }), _react.default.createElement("line", {
        "stroke-linecap": "null",
        "stroke-linejoin": "null",
        id: "svg_13",
        y2: "9.99999",
        x2: "42.99999",
        y1: "35.49999",
        x1: "10",
        strokeWidth: "5",
        stroke: "#ffffff",
        fill: "none"
      }), _react.default.createElement("line", {
        "stroke-linecap": "null",
        "stroke-linejoin": "null",
        id: "svg_14",
        y2: "12.49999",
        x2: "40.99999",
        y1: "36.99999",
        x1: "9",
        "fill-opacity": "null",
        strokeWidth: "2.5",
        stroke: "#000000",
        fill: "none"
      }));
    }
  }]);

  return TagOffline;
}(_react.default.Component);

exports.default = TagOffline;