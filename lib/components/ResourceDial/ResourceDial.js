"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isFinite2 = _interopRequireDefault(require("lodash/isFinite"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouter = require("react-router");

var _reactMotion = require("react-motion");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _d3Format = require("d3-format");

var _d3Shape = require("d3-shape");

var _theme = _interopRequireDefault(require("../../theme"));

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

var DIAL_RADIUS_PX = 85;
var DIAL_BORDER_PX = 8;

var roundedValuePercent = function roundedValuePercent(usage) {
  // The number is really small (< 0.01%), just indicate
  // the workload isn't using much resources at all.
  if (usage < 0.01) return 0; // Need to show 2 decimals when 0.01% <= usage < 0.1%.

  if (usage < 0.1) return (0, _d3Format.format)('.2f')(usage); // Let's only show 1 decimal when 0.1% <= usage < 5%.

  if (usage < 5) return (0, _d3Format.format)('.1f')(usage); // Show no decimal data when 10% <= usage

  return (0, _d3Format.format)('.0f')(usage);
};

var adjustArc = function adjustArc(usage) {
  // Get rounded usage displayed inside the dial as a number [0, 1].
  var roundedUsage = Number(roundedValuePercent(usage * 100)) / 100; // If the displayed value is in the interval 0% < x < 1%, round up the dial arc to 1%.

  if (roundedUsage > 0 && roundedUsage < 0.01) return 0.01; // Otherwise, let the dial correspond to the displayed value.

  return roundedUsage;
};

var arcPath = (0, _d3Shape.arc)().innerRadius(DIAL_RADIUS_PX - DIAL_BORDER_PX).outerRadius(DIAL_RADIUS_PX).cornerRadius(5).startAngle(0).endAngle(function (percentage) {
  return 2 * Math.PI * adjustArc(percentage);
});
var DialLink = (0, _styledComponents.default)(_reactRouter.Link).withConfig({
  displayName: "ResourceDial__DialLink",
  componentId: "sc-2qqajt-0"
})(["border-radius:", ";width:", "px;height:", "px;display:block;"], function (props) {
  return props.theme.borderRadius.circle;
}, 2 * DIAL_RADIUS_PX, 2 * DIAL_RADIUS_PX);

var DialContainer = _styledComponents.default.div.withConfig({
  displayName: "ResourceDial__DialContainer",
  componentId: "sc-2qqajt-1"
})(["color:", ";border-radius:", ";position:relative;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;cursor:default;&:not([disabled]):hover{cursor:pointer;opacity:0.8;}"], function (props) {
  return props.theme.colors.gray600;
}, function (props) {
  return props.theme.borderRadius.circle;
});

var DialArc = _styledComponents.default.svg.withConfig({
  displayName: "ResourceDial__DialArc",
  componentId: "sc-2qqajt-2"
})(["position:absolute;pointer-events:none;left:0;top:0;"]);

var DialValueContainer = _styledComponents.default.div.withConfig({
  displayName: "ResourceDial__DialValueContainer",
  componentId: "sc-2qqajt-3"
})(["display:flex;font-weight:bold;"]);

var DialValue = _styledComponents.default.div.withConfig({
  displayName: "ResourceDial__DialValue",
  componentId: "sc-2qqajt-4"
})(["font-size:", ";margin:0 4px;"], function (props) {
  return props.theme.fontSizes.huge;
});

var PercentageSign = _styledComponents.default.div.withConfig({
  displayName: "ResourceDial__PercentageSign",
  componentId: "sc-2qqajt-5"
})(["font-size:", ";padding-top:6px;overflow:visible;width:0;"], function (props) {
  return props.theme.fontSizes.large;
});

var FillArc = function FillArc(_ref) {
  var color = _ref.color,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? 1 : _ref$value;
  return _react.default.createElement("path", {
    transform: "translate(".concat(DIAL_RADIUS_PX, ", ").concat(DIAL_RADIUS_PX, ")"),
    stroke: "none",
    fill: color,
    d: arcPath(value)
  });
};

var Label = _styledComponents.default.span.withConfig({
  displayName: "ResourceDial__Label",
  componentId: "sc-2qqajt-6"
})(["max-width:calc(100% - 40px);text-align:center;"]); // TODO: Extract this into the theme.


var dialSpring = function dialSpring(value) {
  return (0, _reactMotion.spring)(value, {
    stiffness: 50,
    damping: 13,
    precision: 0.01
  });
};

var ResourceDial =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ResourceDial, _React$PureComponent);

  function ResourceDial(props, context) {
    var _this;

    _classCallCheck(this, ResourceDial);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResourceDial).call(this, props, context));
    _this.state = {
      value: null
    };
    return _this;
  }

  _createClass(ResourceDial, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        value: this.props.value
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // setState is async so triggers another render allowing animation to happen
      this.setState({
        value: nextProps.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      var _this$props = this.props,
          label = _this$props.label,
          disabled = _this$props.disabled,
          to = _this$props.to,
          onClick = _this$props.onClick;
      var hasLink = !(0, _isEmpty2.default)(to) && !disabled;
      var hasValue = (0, _isFinite2.default)(value);
      return _react.default.createElement(DialLink, {
        to: hasLink ? to : '',
        onClick: onClick
      }, _react.default.createElement(_reactMotion.Motion, {
        style: {
          interpolatedValue: dialSpring(hasValue ? value : 0)
        }
      }, function (_ref2) {
        var interpolatedValue = _ref2.interpolatedValue;
        return _react.default.createElement(DialContainer, {
          disabled: !hasLink
        }, _react.default.createElement(DialValueContainer, null, _react.default.createElement(DialValue, null, hasValue ? roundedValuePercent(interpolatedValue * 100) : '-'), hasValue && _react.default.createElement(PercentageSign, null, "%")), _react.default.createElement(Label, null, label), _react.default.createElement(DialArc, {
          width: "100%",
          height: "100%"
        }, _react.default.createElement(FillArc, {
          color: _theme.default.colors.gray100
        }), _react.default.createElement(FillArc, {
          color: _theme.default.colors.blue600,
          value: interpolatedValue
        })));
      }));
    }
  }]);

  return ResourceDial;
}(_react.default.PureComponent);

ResourceDial.propTypes = {
  /**
   * Resource usage label shown below the percentage value
   */
  label: _propTypes.default.string.isRequired,

  /**
   * The percentage value to be displayed by the dial, should be between 0 and 1
   */
  value: _propTypes.default.number,

  /**
   * Disables the link if set to true
   */
  disabled: _propTypes.default.bool,

  /**
   * React router link for clicking on the dial
   */
  to: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
ResourceDial.defaultProps = {
  value: null,
  disabled: false,
  to: ''
};
var _default = ResourceDial;
exports.default = _default;