"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.tags = exports.shapes = exports.nodeBaseSize = void 0;

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _keys2 = _interopRequireDefault(require("lodash/keys"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _MatchedText = _interopRequireDefault(require("../MatchedText"));

var _ShapeCircle = _interopRequireDefault(require("./shapes/_ShapeCircle"));

var _ShapeTriangle = _interopRequireDefault(require("./shapes/_ShapeTriangle"));

var _ShapeSquare = _interopRequireDefault(require("./shapes/_ShapeSquare"));

var _ShapePentagon = _interopRequireDefault(require("./shapes/_ShapePentagon"));

var _ShapeHexagon = _interopRequireDefault(require("./shapes/_ShapeHexagon"));

var _ShapeHeptagon = _interopRequireDefault(require("./shapes/_ShapeHeptagon"));

var _ShapeOctagon = _interopRequireDefault(require("./shapes/_ShapeOctagon"));

var _ShapeCloud = _interopRequireDefault(require("./shapes/_ShapeCloud"));

var _ShapeSheet = _interopRequireDefault(require("./shapes/_ShapeSheet"));

var _ShapeCylinder = _interopRequireDefault(require("./shapes/_ShapeCylinder"));

var _ShapeDottedCylinder = _interopRequireDefault(require("./shapes/_ShapeDottedCylinder"));

var _ShapeController = _interopRequireDefault(require("./shapes/_ShapeController"));

var _ShapeReplica = _interopRequireDefault(require("./shapes/_ShapeReplica"));

var _ShapeDottedSquare = _interopRequireDefault(require("./shapes/_ShapeDottedSquare"));

var _ShapeRectangle = _interopRequireDefault(require("./shapes/_ShapeRectangle"));

var _TagCamera = _interopRequireDefault(require("./tags/_TagCamera"));

var _TagExclamation = _interopRequireDefault(require("./tags/_TagExclamation"));

var _TagFailed = _interopRequireDefault(require("./tags/_TagFailed"));

var _TagNotPermitted = _interopRequireDefault(require("./tags/_TagNotPermitted"));

var _TagOffline = _interopRequireDefault(require("./tags/_TagOffline"));

var _TagPending = _interopRequireDefault(require("./tags/_TagPending"));

var _TagReload = _interopRequireDefault(require("./tags/_TagReload"));

var _TagUnknown = _interopRequireDefault(require("./tags/_TagUnknown"));

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

var nodeBaseSize = 55;
exports.nodeBaseSize = nodeBaseSize;
var shapes = {
  circle: _ShapeCircle.default,
  triangle: _ShapeTriangle.default,
  square: _ShapeSquare.default,
  pentagon: _ShapePentagon.default,
  hexagon: _ShapeHexagon.default,
  heptagon: _ShapeHeptagon.default,
  octagon: _ShapeOctagon.default,
  cloud: _ShapeCloud.default,
  sheet: _ShapeSheet.default,
  cylinder: _ShapeCylinder.default,
  dottedcylinder: _ShapeDottedCylinder.default,
  controller: _ShapeController.default,
  replica: _ShapeReplica.default,
  dottedsquare: _ShapeDottedSquare.default,
  rectangle: _ShapeRectangle.default
};
exports.shapes = shapes;
var tags = {
  none: function none() {
    return null;
  },
  camera: _TagCamera.default,
  degraded: _TagExclamation.default,
  failed: _TagFailed.default,
  notpermitted: _TagNotPermitted.default,
  offline: _TagOffline.default,
  pending: _TagPending.default,
  reload: _TagReload.default,
  unknown: _TagUnknown.default
};
exports.tags = tags;
var labelWidth = nodeBaseSize * 2.5;

var GraphNodeWrapper = _styledComponents.default.g.withConfig({
  displayName: "_GraphNodeStatic__GraphNodeWrapper",
  componentId: "xnsael-0"
})(["cursor:", ";"], function (props) {
  return props.cursorType;
});

var SvgTextContainer = _styledComponents.default.g.attrs({
  transform: function transform(props) {
    return "translate(0, ".concat(props.y + 85, ")");
  }
}).withConfig({
  displayName: "_GraphNodeStatic__SvgTextContainer",
  componentId: "xnsael-1"
})(["pointer-events:all;"]);

var LabelSvg = _styledComponents.default.text.attrs({
  fill: function fill(props) {
    return props.contrastMode ? props.theme.colors.black : props.theme.colors.purple800;
  },
  textAnchor: 'middle',
  y: -38
}).withConfig({
  displayName: "_GraphNodeStatic__LabelSvg",
  componentId: "xnsael-2"
})(["font-size:", ";"], function (props) {
  return props.theme.fontSizes.normal;
});

var LabelMinorSvg = _styledComponents.default.text.attrs({
  fill: function fill(props) {
    return props.contrastMode ? props.theme.colors.black : props.theme.colors.purple600;
  },
  textAnchor: 'middle',
  y: -20
}).withConfig({
  displayName: "_GraphNodeStatic__LabelMinorSvg",
  componentId: "xnsael-3"
})(["font-size:", ";"], function (props) {
  return props.theme.fontSizes.small;
});

var LabelsStandardContainer = _styledComponents.default.div.withConfig({
  displayName: "_GraphNodeStatic__LabelsStandardContainer",
  componentId: "xnsael-4"
})([""]);

var LabelTemplate = _styledComponents.default.div.withConfig({
  displayName: "_GraphNodeStatic__LabelTemplate",
  componentId: "xnsael-5"
})(["background-color:", ";border-radius:", ";overflow:hidden;text-overflow:ellipsis;display:inline-block;text-align:center;padding:2px 10px;max-width:100%;pointer-events:all;", ";"], function (props) {
  return (0, _polished.transparentize)(0.2, props.contrastMode ? props.theme.colors.white : props.theme.colors.purple25);
}, function (props) {
  return props.theme.borderRadius.soft;
}, function (props) {
  return !props.highlighted && "\n      white-space: nowrap;\n    ";
});

var LabelStandard = (0, _styledComponents.default)(LabelTemplate).withConfig({
  displayName: "_GraphNodeStatic__LabelStandard",
  componentId: "xnsael-6"
})(["color:", ";font-size:", ";margin-top:4px;"], function (props) {
  return props.contrastMode ? props.theme.colors.black : props.theme.colors.purple800;
}, function (props) {
  return props.theme.fontSizes.normal;
});
var LabelMinorStandard = (0, _styledComponents.default)(LabelTemplate).withConfig({
  displayName: "_GraphNodeStatic__LabelMinorStandard",
  componentId: "xnsael-7"
})(["color:", ";font-size:", ";margin-top:-7px;"], function (props) {
  return props.contrastMode ? props.theme.colors.black : props.theme.colors.purple600;
}, function (props) {
  return props.theme.fontSizes.small;
});

var GraphNodeStatic =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(GraphNodeStatic, _React$PureComponent);

  function GraphNodeStatic() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GraphNodeStatic);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GraphNodeStatic)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseEnter", function (ev) {
      _this.props.onMouseEnter(_this.props.id, ev);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseLeave", function (ev) {
      _this.props.onMouseLeave(_this.props.id, ev);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (ev) {
      _this.props.onClick(_this.props.id, ev);
    });

    return _this;
  }

  _createClass(GraphNodeStatic, [{
    key: "renderSvgLabels",
    value: function renderSvgLabels() {
      return _react.default.createElement(SvgTextContainer, {
        y: this.props.labelOffset
      }, _react.default.createElement(LabelSvg, {
        contrastMode: this.props.contrastMode
      }, this.props.label), _react.default.createElement(LabelMinorSvg, {
        contrastMode: this.props.contrastMode
      }, this.props.labelMinor));
    }
  }, {
    key: "renderStandardLabels",
    value: function renderStandardLabels() {
      var _this$props = this.props,
          label = _this$props.label,
          labelMinor = _this$props.labelMinor,
          highlighted = _this$props.highlighted,
          contrastMode = _this$props.contrastMode,
          labelOffset = _this$props.labelOffset,
          searchTerms = _this$props.searchTerms;
      return _react.default.createElement("foreignObject", {
        y: nodeBaseSize / 2 + labelOffset,
        x: -0.5 * labelWidth,
        width: labelWidth,
        height: "200px",
        style: {
          textAlign: 'center',
          pointerEvents: 'none'
        }
      }, _react.default.createElement(LabelsStandardContainer, null, _react.default.createElement(LabelStandard, {
        highlighted: highlighted,
        contrastMode: contrastMode
      }, _react.default.createElement(_MatchedText.default, {
        text: label,
        matches: searchTerms
      })), !(0, _isEmpty2.default)(labelMinor) && _react.default.createElement(LabelMinorStandard, {
        highlighted: highlighted,
        contrastMode: contrastMode
      }, _react.default.createElement(_MatchedText.default, {
        text: labelMinor,
        matches: searchTerms
      })), this.props.renderAppendedInfo()));
    }
  }, {
    key: "render",
    value: function render() {
      var Shape = shapes[this.props.shape];
      var Tag = tags[this.props.tag];
      return _react.default.createElement(GraphNodeWrapper, {
        cursorType: this.props.cursorType,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onClick: this.handleClick
      }, this.props.renderPrependedInfo(), this.props.forceSvg ? this.renderSvgLabels() : this.renderStandardLabels(), _react.default.createElement(Shape, {
        id: this.props.id,
        size: nodeBaseSize,
        stacked: this.props.stacked,
        color: this.props.color,
        metricColor: this.props.metricColor,
        metricFormattedValue: this.props.metricFormattedValue,
        metricNumericValue: this.props.metricNumericValue,
        highlighted: this.props.highlighted,
        contrastMode: this.props.contrastMode
      }), _react.default.createElement(Tag, {
        contrastMode: this.props.contrastMode
      }));
    }
  }]);

  return GraphNodeStatic;
}(_react.default.PureComponent);

GraphNodeStatic.propTypes = {
  id: _propTypes.default.string.isRequired,
  shape: _propTypes.default.oneOf((0, _keys2.default)(shapes)).isRequired,
  tag: _propTypes.default.oneOf((0, _keys2.default)(tags)).isRequired,
  label: _propTypes.default.string.isRequired,
  labelMinor: _propTypes.default.string.isRequired,
  labelOffset: _propTypes.default.number.isRequired,
  stacked: _propTypes.default.bool.isRequired,
  highlighted: _propTypes.default.bool.isRequired,
  color: _propTypes.default.string.isRequired,
  contrastMode: _propTypes.default.bool.isRequired,
  forceSvg: _propTypes.default.bool.isRequired,
  metricColor: _propTypes.default.string.isRequired,
  metricFormattedValue: _propTypes.default.string.isRequired,
  metricNumericValue: _propTypes.default.number.isRequired,
  searchTerms: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  cursorType: _propTypes.default.string.isRequired,
  renderPrependedInfo: _propTypes.default.func.isRequired,
  renderAppendedInfo: _propTypes.default.func.isRequired,
  onMouseEnter: _propTypes.default.func.isRequired,
  onMouseLeave: _propTypes.default.func.isRequired,
  onClick: _propTypes.default.func.isRequired
};
var _default = GraphNodeStatic;
exports.default = _default;