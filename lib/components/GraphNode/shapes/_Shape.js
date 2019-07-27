"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.curvedUnitPolygonPath = curvedUnitPolygonPath;
exports.default = void 0;

var _range2 = _interopRequireDefault(require("lodash/range"));

var _react = _interopRequireDefault(require("react"));

var _d3Shape = require("d3-shape");

var _BaseShape = _interopRequireDefault(require("./_BaseShape"));

var _StackedShape = _interopRequireDefault(require("./_StackedShape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function curvedUnitPolygonPath(n) {
  var curve = _d3Shape.curveCardinalClosed.tension(0.65);

  var spline = (0, _d3Shape.line)().curve(curve);
  var innerAngle = 2 * (Math.PI / n);
  return spline((0, _range2.default)(0, n).map(function (k) {
    return [Math.sin(k * innerAngle), -Math.cos(k * innerAngle)];
  }));
}

var Shape = function Shape(props) {
  return props.stacked ? _react.default.createElement(_StackedShape.default, props) : _react.default.createElement(_BaseShape.default, props);
};

var _default = Shape;
exports.default = _default;