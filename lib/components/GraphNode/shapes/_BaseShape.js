"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isNumber2 = _interopRequireDefault(require("lodash/isNumber"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dom = require("../../../utils/dom");

var _HighlightBorder = _interopRequireDefault(require("./elements/_HighlightBorder"));

var _HighlightShadow = _interopRequireDefault(require("./elements/_HighlightShadow"));

var _NodeBackground = _interopRequireDefault(require("./elements/_NodeBackground"));

var _NodeMetricFill = _interopRequireDefault(require("./elements/_NodeMetricFill"));

var _NodeShadow = _interopRequireDefault(require("./elements/_NodeShadow"));

var _NodeBorder = _interopRequireDefault(require("./elements/_NodeBorder"));

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

function getClipPathDefinition(clipId, height, radius) {
  var barHeight = 1 - 2 * height; // in the interval [-1, 1]

  return _react.default.createElement("defs", null, _react.default.createElement("clipPath", {
    id: clipId,
    transform: "scale(".concat(2 * radius, ")")
  }, _react.default.createElement("rect", {
    width: 2,
    height: 2,
    x: -1,
    y: barHeight
  })));
}

var NodeAnchor = _styledComponents.default.circle.attrs({
  strokeWidth: 0.005,
  r: 0.1
}).withConfig({
  displayName: "_BaseShape__NodeAnchor",
  componentId: "sc-1l8ddg7-0"
})(["fill:", ";stroke:", ";"], function (props) {
  return props.contrastMode ? props.theme.colors.black : props.theme.colors.purple800;
}, function (props) {
  return props.theme.colors.white;
});

var MetricText = _styledComponents.default.text.attrs({
  transform: 'scale(0.015)',
  dominantBaseline: 'middle',
  textAnchor: 'middle'
}).withConfig({
  displayName: "_BaseShape__MetricText",
  componentId: "sc-1l8ddg7-1"
})(["fill:", ";"], function (props) {
  return props.contrastMode ? props.theme.colors.black : props.theme.colors.purple800;
});

var BaseShape =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseShape, _React$Component);

  function BaseShape() {
    _classCallCheck(this, BaseShape);

    return _possibleConstructorReturn(this, _getPrototypeOf(BaseShape).apply(this, arguments));
  }

  _createClass(BaseShape, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          renderTemplate = _this$props.renderTemplate,
          id = _this$props.id,
          highlighted = _this$props.highlighted,
          color = _this$props.color,
          metricColor = _this$props.metricColor,
          metricFormattedValue = _this$props.metricFormattedValue,
          metricNumericValue = _this$props.metricNumericValue,
          contrastMode = _this$props.contrastMode,
          size = _this$props.size;
      var clipId = (0, _dom.encodeIdAttribute)("metric-clip-".concat(id));
      var hasMetric = !(0, _isEmpty2.default)(metricFormattedValue) && (0, _isNumber2.default)(metricNumericValue);
      return _react.default.createElement("g", {
        transform: "scale(".concat(size, ")")
      }, highlighted && (0, _HighlightBorder.default)(renderTemplate, contrastMode), highlighted && (0, _HighlightShadow.default)(renderTemplate, contrastMode), (0, _NodeBackground.default)(renderTemplate, contrastMode), hasMetric && getClipPathDefinition(clipId, metricNumericValue, 0.48), hasMetric && (0, _NodeMetricFill.default)(renderTemplate, {
        clipId: clipId,
        metricColor: metricColor
      }), (0, _NodeShadow.default)(renderTemplate, contrastMode), (0, _NodeBorder.default)(renderTemplate, contrastMode, {
        hasMetric: hasMetric,
        color: color
      }), hasMetric && highlighted ? _react.default.createElement(MetricText, {
        contrastMode: contrastMode
      }, metricFormattedValue) : _react.default.createElement(NodeAnchor, {
        contrastMode: contrastMode
      }));
    }
  }]);

  return BaseShape;
}(_react.default.Component);

BaseShape.propTypes = {
  id: _propTypes.default.string.isRequired,
  color: _propTypes.default.string.isRequired,
  size: _propTypes.default.number.isRequired,
  renderTemplate: _propTypes.default.func.isRequired,
  highlighted: _propTypes.default.bool.isRequired,
  metricColor: _propTypes.default.string.isRequired,
  metricFormattedValue: _propTypes.default.string.isRequired,
  metricNumericValue: _propTypes.default.number
};
BaseShape.defaultProps = {
  metricNumericValue: null
};
var _default = BaseShape;
exports.default = _default;