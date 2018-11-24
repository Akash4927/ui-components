"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _keys2 = _interopRequireDefault(require("lodash/keys"));

var _noop2 = _interopRequireDefault(require("lodash/noop"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMotion = require("react-motion");

var _theme = _interopRequireDefault(require("../../theme"));

var _GraphNodeStatic = _interopRequireWildcard(require("./_GraphNodeStatic"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function weakSpring(value) {
  return (0, _reactMotion.spring)(value, {
    stiffness: 100,
    damping: 18,
    precision: 1
  });
}
/**
 * A component for rendering labeled graph nodes.
 */


var GraphNode =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(GraphNode, _React$PureComponent);

  function GraphNode() {
    _classCallCheck(this, GraphNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(GraphNode).apply(this, arguments));
  }

  _createClass(GraphNode, [{
    key: "renderNode",
    value: function renderNode(props) {
      var x = props.x,
          y = props.y,
          size = props.size,
          graphNodeRef = props.graphNodeRef,
          otherProps = _objectWithoutProperties(props, ["x", "y", "size", "graphNodeRef"]);

      return _react.default.createElement("g", {
        ref: graphNodeRef,
        transform: "translate(".concat(x, ",").concat(y, ") scale(").concat(size / _GraphNodeStatic.nodeBaseSize, ")")
      }, _react.default.createElement(_GraphNodeStatic.default, otherProps));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      if (!this.props.isAnimated) {
        return this.renderNode(this.props);
      }

      return (// Animate only the position and size props.
        _react.default.createElement(_reactMotion.Motion, {
          style: {
            x: weakSpring(this.props.x),
            y: weakSpring(this.props.y),
            size: weakSpring(this.props.size)
          }
        }, function (interpolated) {
          return _this.renderNode(_objectSpread({}, _this.props, interpolated));
        })
      );
    }
  }]);

  return GraphNode;
}(_react.default.PureComponent);

GraphNode.propTypes = {
  /**
   * A unique node ID
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Shape of the rendered node (e.g. 'hexagon')
   */
  shape: _propTypes.default.oneOf((0, _keys2.default)(_GraphNodeStatic.shapes)).isRequired,

  /**
   * An optional tag icon attached to the shape
   */
  tag: _propTypes.default.oneOf((0, _keys2.default)(_GraphNodeStatic.tags)),

  /**
   * The node main label displayed right under the node shape
   */
  label: _propTypes.default.string.isRequired,

  /**
   * Secondary label displayed below the main label in a smaller font
   */
  labelMinor: _propTypes.default.string,

  /**
   * Vertical offset (in pixels) of the labels
   */
  labelOffset: _propTypes.default.number,

  /**
   * Shows a stack of nodes instead of a singular node if true
   */
  stacked: _propTypes.default.bool,

  /**
   * If true, shows the glow around the node as well as its metric data
   */
  highlighted: _propTypes.default.bool,

  /**
   * The color of the node in any of the standard formats
   */
  color: _propTypes.default.string,

  /**
   * The radius of the shape in pixels
   */
  size: _propTypes.default.number,

  /**
   * Animates the node motion if true
   */
  isAnimated: _propTypes.default.bool,

  /**
   * Renders the node in a high contrast mode
   */
  contrastMode: _propTypes.default.bool,

  /**
   * Displays all the node labels as SVG elements
   */
  forceSvg: _propTypes.default.bool,

  /**
   * The background color of the node metric fill
   */
  metricColor: _propTypes.default.string,

  /**
   * The formatted metric value to be displayed inside the node when highlighted
   */
  metricFormattedValue: _propTypes.default.string,

  /**
   * The numeric value in the interval [0, 1] representing the amount of metric fill
   */
  metricNumericValue: _propTypes.default.number,

  /**
   * Search terms to be applied on the node
   */
  searchTerms: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * The cursor type shown on hovering over the node
   */
  cursorType: _propTypes.default.string,

  /**
   * Render function for the info to be displayed before node labels (not working in full SVG mode)
   */
  renderPrependedInfo: _propTypes.default.func,

  /**
   * Render function for the info to be displayed after node labels (not working in full SVG mode)
   */
  renderAppendedInfo: _propTypes.default.func,

  /**
   * A callback to which the GraphNode `ref` will be passed.
   */
  graphNodeRef: _propTypes.default.func,

  /**
   * Callback for mouse pointer entering the node
   */
  onMouseEnter: _propTypes.default.func,

  /**
   * Callback for mouse pointer leaving the node
   */
  onMouseLeave: _propTypes.default.func,

  /**
   * Callback for mouse click on the node
   */
  onClick: _propTypes.default.func,

  /**
   * x-coordinate position of the node
   */
  x: _propTypes.default.number,

  /**
   * y-coordinate position of the node
   */
  y: _propTypes.default.number
};
GraphNode.defaultProps = {
  tag: 'none',
  labelMinor: '',
  labelOffset: 0,
  stacked: false,
  highlighted: false,
  color: _theme.default.colors.purple400,
  size: _GraphNodeStatic.nodeBaseSize,
  isAnimated: false,
  contrastMode: false,
  forceSvg: false,
  metricColor: _theme.default.colors.yellow500,
  metricFormattedValue: '',
  metricNumericValue: NaN,
  searchTerms: [],
  cursorType: 'pointer',
  renderPrependedInfo: _noop2.default,
  renderAppendedInfo: _noop2.default,
  graphNodeRef: undefined,
  onMouseEnter: _noop2.default,
  onMouseLeave: _noop2.default,
  onClick: _noop2.default,
  x: 0,
  y: 0
};
var _default = GraphNode;
exports.default = _default;