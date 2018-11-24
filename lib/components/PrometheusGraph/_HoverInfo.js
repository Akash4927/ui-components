"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _max2 = _interopRequireDefault(require("lodash/max"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _head2 = _interopRequireDefault(require("lodash/head"));

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TimestampTooltip = _interopRequireDefault(require("../_TimestampTooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TooltipRow = _styledComponents.default.div.withConfig({
  displayName: "_HoverInfo__TooltipRow",
  componentId: "j46v09-0"
})(["display:flex;align-items:center;justify-content:space-between;font-size:", ";", ";"], function (props) {
  return props.theme.fontSizes.tiny;
}, function (props) {
  return props.focused && "\n    font-weight: bold;\n  ";
});

var TooltipRowColor = _styledComponents.default.span.withConfig({
  displayName: "_HoverInfo__TooltipRowColor",
  componentId: "j46v09-1"
})(["background-color:", ";border-radius:", ";margin-right:4px;min-width:10px;height:4px;"], function (props) {
  return props.color;
}, function (props) {
  return props.theme.borderRadius.soft;
});

var TooltipRowName = _styledComponents.default.span.withConfig({
  displayName: "_HoverInfo__TooltipRowName",
  componentId: "j46v09-2"
})(["flex-grow:1;white-space:pre;display:block;align-items:center;margin-right:30px;text-overflow:ellipsis;overflow:hidden;"]);

var TooltipRowValue = _styledComponents.default.span.withConfig({
  displayName: "_HoverInfo__TooltipRowValue",
  componentId: "j46v09-3"
})(["font-family:", ";margin-left:20px;white-space:nowrap;"], function (props) {
  return props.theme.fontFamilies.monospace;
});

var HoverLine = _styledComponents.default.div.attrs({
  style: function style(_ref) {
    var left = _ref.left,
        height = _ref.height;
    return {
      left: left,
      height: height
    };
  }
}).withConfig({
  displayName: "_HoverInfo__HoverLine",
  componentId: "j46v09-4"
})(["border-left:1px solid ", ";pointer-events:none;position:absolute;top:0;"], function (props) {
  return props.theme.colors.gray600;
});

var FocusPoint = _styledComponents.default.span.attrs({
  style: function style(_ref2) {
    var top = _ref2.top;
    return {
      top: top
    };
  }
}).withConfig({
  displayName: "_HoverInfo__FocusPoint",
  componentId: "j46v09-5"
})(["border:2.5px solid ", ";border-radius:", ";background-color:", ";opacity:", ";box-sizing:border-box;position:absolute;cursor:default;pointer-events:none;", ";"], function (props) {
  return props.color;
}, function (props) {
  return props.theme.borderRadius.circle;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.faded ? 0.5 : 1;
}, function (props) {
  return "\n    margin-left: ".concat(-props.radius, "px;\n    margin-top: ").concat(-props.radius, "px;\n    width: ").concat(2 * props.radius, "px;\n    height: ").concat(2 * props.radius, "px;\n  ");
});

var HoverInfo =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(HoverInfo, _React$PureComponent);

  function HoverInfo() {
    _classCallCheck(this, HoverInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(HoverInfo).apply(this, arguments));
  }

  _createClass(HoverInfo, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          datapoints = _this$props.datapoints,
          mouseX = _this$props.mouseX,
          mouseY = _this$props.mouseY,
          valueScale = _this$props.valueScale,
          chartWidth = _this$props.chartWidth,
          chartHeight = _this$props.chartHeight,
          simpleTooltip = _this$props.simpleTooltip;
      if (!datapoints) return null; // Simple tooltip will only show the value for the hovered series.

      var filteredHoverPoints = _toConsumableArray(datapoints).filter(function (p) {
        return p.focused || !simpleTooltip;
      }); // Render focused circle last so that it stands out.


      var sortedHoverPoints = _toConsumableArray(filteredHoverPoints).sort(function (p) {
        return p.focused ? 1 : -1;
      });

      var timestamp = _moment.default.unix(this.props.timestampSec).format(); // We want to have same formatting (precision, units, etc...) across
      // all tooltip values so we create a formatter for a reference value
      // (1 / 10 of the max value) and use it across all datapoints.


      var referenceValue = ((0, _max2.default)((0, _map2.default)(datapoints, 'value')) || 0) / 10;
      var formatValue = this.props.valueFormatter(referenceValue);
      return _react.default.createElement("div", null, _react.default.createElement(HoverLine, {
        left: mouseX,
        height: chartHeight
      }, sortedHoverPoints.map(function (datapoint) {
        return _react.default.createElement(FocusPoint, {
          key: datapoint.key,
          color: datapoint.color,
          faded: !datapoint.focused,
          radius: datapoint.focused ? 5 : 4,
          top: valueScale(datapoint.graphValue)
        });
      })), _react.default.createElement(_TimestampTooltip.default, {
        offsetX: mouseX,
        offsetY: mouseY,
        containerWidth: chartWidth,
        timestamp: timestamp
      }, filteredHoverPoints.map(function (datapoint) {
        return _react.default.createElement(TooltipRow, {
          key: datapoint.key,
          focused: datapoint.focused
        }, _react.default.createElement(TooltipRowColor, {
          color: datapoint.color
        }), _react.default.createElement(TooltipRowName, null, (0, _head2.default)(datapoint.hoverName)), _react.default.createElement(TooltipRowValue, null, formatValue(datapoint.value)));
      })));
    }
  }]);

  return HoverInfo;
}(_react.default.PureComponent);

HoverInfo.propTypes = {
  chartWidth: _propTypes.default.number.isRequired,
  chartHeight: _propTypes.default.number.isRequired,
  valueScale: _propTypes.default.func.isRequired,
  valueFormatter: _propTypes.default.func.isRequired,
  simpleTooltip: _propTypes.default.bool.isRequired,
  datapoints: _propTypes.default.array,
  timestampSec: _propTypes.default.number.isRequired,
  mouseX: _propTypes.default.number,
  mouseY: _propTypes.default.number
};
HoverInfo.defaultProps = {
  datapoints: [],
  mouseX: 0,
  mouseY: 0
};
var _default = HoverInfo;
exports.default = _default;