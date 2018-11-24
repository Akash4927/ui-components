"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Shape = _interopRequireDefault(require("./_Shape"));

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var UNIT_REPLICA_PATH = 'm0.93,-1.25309c0,0.18922 -0.43,0.34691 -0.96,0.34691s-0.97,-0.15768 -0.97,-0.34691s0.43,-0.34691 0.96,-0.34691s0.97,0.15768 0.97,0.34691zm-1.93,1.83965c0,0.21025 0.43,0.37844 0.96,0.37844s0.96,-0.1682 0.96,-0.37844m-1.92,-1.83965l0,1.85016m1.93,-1.85016l0,1.85016m-1.49,-1.24045m-0.01,1.31404l0,-1.42967l0.56,0c0.16,0 0.28,0.03154 0.36,0.09461c0.09,0.06307 0.13,0.15768 0.13,0.28383c0,0.09461 -0.03,0.1682 -0.08,0.23127c-0.04,0.07359 -0.21,0.15768 -0.3,0.17871m0.38,0.64125l-0.18,-0.47305c-0.03,-0.07359 -0.07,-0.11564 -0.11,-0.13666c-0.04,-0.02102 -0.11,-0.03154 -0.2,-0.03154l-0.55,0m0.56,-0.70432';

var renderTemplate = function renderTemplate(attrs) {
  return _react.default.createElement("path", _extends({
    d: UNIT_REPLICA_PATH
  }, attrs));
};

var ShapeReplica =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ShapeReplica, _React$Component);

  function ShapeReplica() {
    _classCallCheck(this, ShapeReplica);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShapeReplica).apply(this, arguments));
  }

  _createClass(ShapeReplica, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Shape.default, _extends({
        renderTemplate: renderTemplate
      }, this.props));
    }
  }]);

  return ShapeReplica;
}(_react.default.Component);

exports.default = ShapeReplica;