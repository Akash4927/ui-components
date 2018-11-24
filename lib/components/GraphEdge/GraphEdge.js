"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _size2 = _interopRequireDefault(require("lodash/size"));

var _each2 = _interopRequireDefault(require("lodash/each"));

var _noop2 = _interopRequireDefault(require("lodash/noop"));

var _times2 = _interopRequireDefault(require("lodash/times"));

var _range2 = _interopRequireDefault(require("lodash/range"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _d3Shape = require("d3-shape");

var _reactMotion = require("react-motion");

var _dom = require("../../utils/dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function weakSpring(value) {
  return (0, _reactMotion.spring)(value, {
    stiffness: 100,
    damping: 18,
    precision: 1
  });
}

var spline = (0, _d3Shape.line)().curve(_d3Shape.curveBasis).x(function (d) {
  return d.x;
}).y(function (d) {
  return d.y;
});

var EdgeShadow = _styledComponents.default.path.attrs({
  // Animation optimization.
  style: function style(_ref) {
    var thickness = _ref.thickness;
    return {
      strokeWidth: 10 * thickness
    };
  }
}).withConfig({
  displayName: "GraphEdge__EdgeShadow",
  componentId: "sc-1uk5inp-0"
})(["stroke:", ";stroke-opacity:0;fill:none;", ";"], function (props) {
  return props.theme.colors.blue400;
}, function (props) {
  return props.highlighted && "\n      stroke-opacity: ".concat(props.contrastMode ? 0.3 : 0.1, ";\n    ");
});

var EdgeDotted = _styledComponents.default.path.withConfig({
  displayName: "GraphEdge__EdgeDotted",
  componentId: "sc-1uk5inp-1"
})(["stroke:", ";stroke-dasharray:1,30;stroke-linecap:round;stroke-width:5;fill:none;"], function (props) {
  return props.contrastMode ? props.theme.colors.black : props.theme.colors.purple500;
});

var EdgeLine = _styledComponents.default.path.attrs({
  // Animation optimization.
  style: function style(_ref2) {
    var thickness = _ref2.thickness;
    return {
      strokeWidth: thickness
    };
  }
}).withConfig({
  displayName: "GraphEdge__EdgeLine",
  componentId: "sc-1uk5inp-2"
})(["stroke:", ";fill:none;"], function (props) {
  return props.contrastMode ? props.theme.colors.black : props.theme.colors.purple500;
});

var EdgeArrowPolygon = _styledComponents.default.polygon.withConfig({
  displayName: "GraphEdge__EdgeArrowPolygon",
  componentId: "sc-1uk5inp-3"
})(["fill:", ";"], function (props) {
  return props.contrastMode ? props.theme.colors.black : props.theme.colors.purple500;
});

var EdgeArrowDefinition = function EdgeArrowDefinition(_ref3) {
  var id = _ref3.id,
      offset = _ref3.offset,
      thickness = _ref3.thickness,
      contrastMode = _ref3.contrastMode;
  return _react.default.createElement("defs", null, _react.default.createElement("marker", {
    id: id,
    refY: "3.5",
    refX: offset / thickness,
    markerWidth: 15 / thickness,
    markerHeight: 15 / thickness,
    viewBox: "1 0 10 10",
    orient: "auto"
  }, _react.default.createElement(EdgeArrowPolygon, {
    points: "0 0, 10 3.5, 0 7",
    contrastMode: contrastMode
  })));
}; // Converts a waypoints map of the format { x0: 11, y0: 22, x1: 33, y1: 44 }
// that is used by Motion to an array of waypoints in the format
// [{ x: 11, y: 22 }, { x: 33, y: 44 }] that can be used by D3.


var waypointsMapToArray = function waypointsMapToArray(waypointsMap) {
  return (0, _range2.default)((0, _size2.default)(waypointsMap) / 2).map(function (index) {
    return {
      x: waypointsMap["x".concat(index)],
      y: waypointsMap["y".concat(index)]
    };
  });
}; // Converts a waypoints array of the input format [{ x: 11, y: 22 }, { x: 33, y: 44 }]
// to an array of waypoints that is used by Motion in the format { x0: 11, y0: 22, x1: 33, y1: 44 }.


var waypointsArrayToMap = function waypointsArrayToMap(waypointsArray) {
  var waypointsMap = {};
  (0, _each2.default)(waypointsArray, function (waypoint, index) {
    waypointsMap["x".concat(index)] = weakSpring(waypoint.x);
    waypointsMap["y".concat(index)] = weakSpring(waypoint.y);
  });
  return waypointsMap;
};
/**
 * A component for rendering edges that connect the graph nodes.
 */


var GraphEdge =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(GraphEdge, _React$PureComponent);

  function GraphEdge() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GraphEdge);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GraphEdge)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      waypointsMap: []
    });

    return _this;
  }

  _createClass(GraphEdge, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.isAnimated) {
        this.prepareWaypointsForMotion(this.props);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // immutablejs allows us to `===`! \o/
      var waypointsChanged = this.props.waypoints !== nextProps.waypoints;
      var animationChanged = this.props.isAnimated !== nextProps.isAnimated;

      if (waypointsChanged || animationChanged) {
        this.prepareWaypointsForMotion(nextProps);
      }
    }
  }, {
    key: "prepareWaypointsForMotion",
    value: function prepareWaypointsForMotion(_ref4) {
      var waypoints = _ref4.waypoints,
          waypointsCap = _ref4.waypointsCap,
          isAnimated = _ref4.isAnimated;
      // Don't update if the edges are not animated.
      if (!isAnimated) return; // The Motion library requires the number of waypoints to be constant, so we fill in for
      // the missing ones by reusing the edge source point, which doesn't affect the edge shape
      // because of how the curveBasis interpolation is done.

      var waypointsMissing = waypointsCap - (0, _size2.default)(waypoints);

      if (waypointsMissing > 0) {
        waypoints = (0, _times2.default)(waypointsMissing, function () {
          return waypoints[0];
        }).concat(waypoints);
      }

      this.setState({
        waypointsMap: waypointsArrayToMap(waypoints)
      });
    }
  }, {
    key: "renderEdge",
    value: function renderEdge(props) {
      var id = props.id,
          encodedArrowId = props.encodedArrowId,
          waypoints = props.waypoints,
          thickness = props.thickness,
          withArrow = props.withArrow,
          arrowOffset = props.arrowOffset,
          isDotted = props.isDotted,
          highlighted = props.highlighted,
          contrastMode = props.contrastMode,
          graphEdgeRef = props.graphEdgeRef;
      var arrowThickness = Math.sqrt(thickness);
      var path = spline(waypoints);
      return _react.default.createElement("g", {
        ref: graphEdgeRef,
        onMouseEnter: function onMouseEnter(ev) {
          return props.onMouseEnter(id, ev);
        },
        onMouseLeave: function onMouseLeave(ev) {
          return props.onMouseLeave(id, ev);
        }
      }, withArrow && _react.default.createElement(EdgeArrowDefinition, {
        id: encodedArrowId,
        thickness: arrowThickness,
        offset: arrowOffset,
        contrastMode: contrastMode
      }), _react.default.createElement(EdgeShadow, {
        d: path,
        highlighted: highlighted,
        thickness: thickness,
        contrastMode: contrastMode
      }), isDotted && _react.default.createElement(EdgeDotted, {
        d: path,
        contrastMode: contrastMode
      }), _react.default.createElement(EdgeLine, {
        d: path,
        thickness: thickness,
        contrastMode: contrastMode,
        markerEnd: withArrow ? "url(#".concat(encodedArrowId, ")") : null
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          isAnimated = _this$props.isAnimated,
          otherProps = _objectWithoutProperties(_this$props, ["isAnimated"]);

      var encodedArrowId = "end-arrow-".concat((0, _dom.encodeIdAttribute)(this.props.id));

      if (!isAnimated) {
        return this.renderEdge(_objectSpread({}, otherProps, {
          encodedArrowId: encodedArrowId
        }));
      }

      return (// For the Motion interpolation to work, the waypoints need to be in a map format like
        // { x0: 11, y0: 22, x1: 33, y1: 44 } that we convert to the array format when rendering.
        _react.default.createElement(_reactMotion.Motion, {
          style: _objectSpread({
            interpolatedThickness: weakSpring(this.props.thickness),
            interpolatedArrowOffset: weakSpring(this.props.arrowOffset)
          }, this.state.waypointsMap)
        }, function (_ref5) {
          var interpolatedThickness = _ref5.interpolatedThickness,
              interpolatedArrowOffset = _ref5.interpolatedArrowOffset,
              interpolatedWaypoints = _objectWithoutProperties(_ref5, ["interpolatedThickness", "interpolatedArrowOffset"]);

          return _this2.renderEdge(_objectSpread({}, otherProps, {
            encodedArrowId: encodedArrowId,
            thickness: interpolatedThickness,
            arrowOffset: interpolatedArrowOffset,
            waypoints: waypointsMapToArray(interpolatedWaypoints)
          }));
        })
      );
    }
  }]);

  return GraphEdge;
}(_react.default.PureComponent);

GraphEdge.propTypes = {
  /**
   * A unique edge ID
   */
  id: _propTypes.default.string.isRequired,

  /**
   * A list of points in the { x, y } format describing the edge path
   */
  waypoints: _propTypes.default.arrayOf(_propTypes.default.shape({
    x: _propTypes.default.number.isRequired,
    y: _propTypes.default.number.isRequired
  })).isRequired,

  /**
   * A number of waypoints to cap to in case the edge is animated
   */
  waypointsCap: _propTypes.default.number,

  /**
   * Thickness of the rendered edge line
   */
  thickness: _propTypes.default.number,

  /**
   * Shows the blue shadow around the edge if true
   */
  highlighted: _propTypes.default.bool,

  /**
   * Draws a one-way arrow on the edge if true
   */
  withArrow: _propTypes.default.bool,

  /**
   * Distance from the target point (tweak this to pull the arrow out of the rendered node)
   */
  arrowOffset: _propTypes.default.number,

  /**
   * Shows extra dots on the edge path if true
   */
  isDotted: _propTypes.default.bool,

  /**
   * Animates the edge motion if true
   */
  isAnimated: _propTypes.default.bool,

  /**
   * Renders the edge in a high contrast mode
   */
  contrastMode: _propTypes.default.bool,

  /**
   * A callback to which the GraphNode `ref` will be passed.
   */
  graphEdgeRef: _propTypes.default.func,

  /**
   * Callback for mouse pointer entering the edge
   */
  onMouseEnter: _propTypes.default.func,

  /**
   * Callback for mouse pointer leaving the edge
   */
  onMouseLeave: _propTypes.default.func
};
GraphEdge.defaultProps = {
  waypointsCap: 10,
  thickness: 1,
  highlighted: false,
  withArrow: false,
  arrowOffset: 0,
  isDotted: false,
  isAnimated: false,
  contrastMode: false,
  graphEdgeRef: undefined,
  onMouseEnter: _noop2.default,
  onMouseLeave: _noop2.default
};
var _default = GraphEdge;
exports.default = _default;