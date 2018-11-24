"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouter = require("react-router");

var _TimestampTooltip = _interopRequireDefault(require("../_TimestampTooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-left: 1px solid ", ";\n  opacity: 0.7;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-left: 3px solid ", ";\n  margin-left: -1px;\n  opacity: 0.2;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DeploymentAnnotationWrapper = _styledComponents.default.div.attrs({
  // Override the parent tooltip
  title: ''
}).withConfig({
  displayName: "DeploymentAnnotation__DeploymentAnnotationWrapper",
  componentId: "ca9ihm-0"
})(["position:absolute;height:100%;"]);

var DeploymentAnnotationContainer = _styledComponents.default.div.attrs({
  style: function style(_ref) {
    var x = _ref.x;
    return {
      left: x
    };
  }
}).withConfig({
  displayName: "DeploymentAnnotation__DeploymentAnnotationContainer",
  componentId: "ca9ihm-1"
})(["pointer-events:all;position:absolute;height:100%;"]);

var FocusPoint = _styledComponents.default.span.withConfig({
  displayName: "DeploymentAnnotation__FocusPoint",
  componentId: "ca9ihm-2"
})(["border-radius:", ";border:2.5px solid ", ";background-color:", ";box-sizing:border-box;position:absolute;", ";"], function (props) {
  return props.theme.borderRadius.circle;
}, function (props) {
  return props.theme.colors.blue400;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return "\n    margin-left: -".concat(props.radius, "px;\n    margin-top: ").concat(props.radius, "px;\n    width: ").concat(2 * props.radius, "px;\n    height: ").concat(2 * props.radius, "px;\n    bottom: -").concat(props.onAxis ? props.radius : 0, "px;\n  ");
});

var VerticalLine = _styledComponents.default.div.withConfig({
  displayName: "DeploymentAnnotation__VerticalLine",
  componentId: "ca9ihm-3"
})(["pointer-events:none;position:absolute;height:100%;top:0;"]);

var AnnotationShadow = VerticalLine.extend(_templateObject(), function (props) {
  return props.theme.colors.white;
});
var AnnotationLine = VerticalLine.extend(_templateObject2(), function (props) {
  return props.theme.colors.blue400;
});

var InfoLine = _styledComponents.default.span.withConfig({
  displayName: "DeploymentAnnotation__InfoLine",
  componentId: "ca9ihm-4"
})(["font-size:", ";margin-top:1px;display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"], function (props) {
  return props.theme.fontSizes.small;
});

var NoLink = _styledComponents.default.span.withConfig({
  displayName: "DeploymentAnnotation__NoLink",
  componentId: "ca9ihm-5"
})(["cursor:default;"]);

var MaybeLinkable = function MaybeLinkable(_ref2) {
  var linkTo = _ref2.linkTo,
      children = _ref2.children;
  return linkTo ? _react.default.createElement(_reactRouter.Link, {
    to: linkTo
  }, children) : _react.default.createElement(NoLink, null, children);
};

var DeploymentAnnotations =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(DeploymentAnnotations, _React$PureComponent);

  function DeploymentAnnotations() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeploymentAnnotations);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeploymentAnnotations)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isHovered: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseEnter", function () {
      _this.setState({
        isHovered: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseLeave", function () {
      _this.setState({
        isHovered: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      var _this$props = _this.props,
          action = _this$props.action,
          serviceIDs = _this$props.serviceIDs,
          timestamp = _this$props.timestamp;

      _this.props.onClick({
        action: action,
        serviceIDs: serviceIDs,
        timestamp: timestamp
      });
    });

    return _this;
  }

  _createClass(DeploymentAnnotations, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(DeploymentAnnotationWrapper, null, _react.default.createElement(DeploymentAnnotationContainer, {
        x: this.props.x
      }, _react.default.createElement(AnnotationShadow, null), _react.default.createElement(AnnotationLine, null), _react.default.createElement(MaybeLinkable, {
        linkTo: this.props.linkTo
      }, _react.default.createElement(FocusPoint, {
        hoverable: true,
        radius: "5",
        onAxis: this.props.onAxis,
        onMouseMove: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onClick: this.handleClick
      }))), this.state.isHovered && _react.default.createElement(_TimestampTooltip.default, {
        timestamp: this.props.timestamp,
        containerWidth: this.props.containerWidth,
        offsetY: this.props.containerHeight,
        offsetX: this.props.x
      }, _react.default.createElement(InfoLine, null, _react.default.createElement("strong", null, this.props.action)), this.props.serviceIDs.map(function (serviceId) {
        return _react.default.createElement(InfoLine, {
          key: serviceId
        }, "\u2192 ", serviceId);
      })));
    }
  }]);

  return DeploymentAnnotations;
}(_react.default.PureComponent);

DeploymentAnnotations.propTypes = {
  x: _propTypes.default.number.isRequired,
  action: _propTypes.default.string.isRequired,
  serviceIDs: _propTypes.default.array.isRequired,
  timestamp: _propTypes.default.string.isRequired,
  containerWidth: _propTypes.default.number.isRequired,
  containerHeight: _propTypes.default.number.isRequired,
  onClick: _propTypes.default.func.isRequired,
  linkTo: _propTypes.default.string,
  onAxis: _propTypes.default.bool
};
DeploymentAnnotations.defaultProps = {
  linkTo: '',
  onAxis: false
};
var _default = DeploymentAnnotations;
exports.default = _default;