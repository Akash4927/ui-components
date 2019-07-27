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

var TagUnknown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TagUnknown, _React$Component);

  function TagUnknown() {
    _classCallCheck(this, TagUnknown);

    return _possibleConstructorReturn(this, _getPrototypeOf(TagUnknown).apply(this, arguments));
  }

  _createClass(TagUnknown, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("g", {
        transform: "translate(1, -8) scale(0.75)"
      }, _react.default.createElement("ellipse", {
        stroke: "#000",
        ry: "14.25",
        rx: "14.74999",
        id: "svg_2",
        cy: "26.74999",
        cx: "25.74998",
        strokeOpacity: "null",
        strokeWidth: "0",
        fill: "#000000"
      }), _react.default.createElement("path", {
        stroke: "#000000",
        id: "svg_1",
        d: "m27.82639,39.53438l-5.28719,0l0,-4.01632l5.28719,0l0,4.01632zm0,-8.30474l0,1.32736l-5.28719,0l0,-1.63548c0,-4.93525 7.09024,-5.71843 7.09024,-9.22609c0,-1.59942 -1.80533,-2.82462 -4.16878,-2.82462c-2.4491,0 -4.59717,1.42944 -4.59717,1.42944l-3.01015,-2.96284c0,0 2.96695,-2.45108 8.08044,-2.45108c4.8573,0 9.3673,2.38264 9.3673,6.39954c0.00227,5.61933 -7.47469,6.26737 -7.47469,9.94378l0,0z",
        strokeWidth: "0",
        fill: "#ffffff"
      }));
    }
  }]);

  return TagUnknown;
}(_react.default.Component);

exports.default = TagUnknown;