"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _DeploymentAnnotation = _interopRequireDefault(require("../_DeploymentAnnotation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MAX_VISIBLE_RANGE_SECS = _moment.default.duration(2, 'weeks').asSeconds(); // TODO: A lot of the code here has been taken/modified from PrometheusGraph code.
// Abstract the common code.


var DeploymentAnnotations = _styledComponents.default.div.withConfig({
  displayName: "_TimelineDeployments__DeploymentAnnotations",
  componentId: "sc-1fgjqli-0"
})(["position:absolute;height:100%;"]);

var formattedDeployments = function formattedDeployments(_ref) {
  var deployments = _ref.deployments,
      timeScale = _ref.timeScale,
      width = _ref.width;
  return deployments.map(function (_ref2) {
    var Data = _ref2.Data,
        Stamp = _ref2.Stamp;

    var _Data$split = Data.split(', '),
        _Data$split2 = _toArray(_Data$split),
        action = _Data$split2[0],
        serviceIDs = _Data$split2.slice(1);

    return {
      key: "".concat(Data, " --- ").concat(Stamp),
      position: timeScale((0, _moment.default)(Stamp)),
      timestamp: (0, _moment.default)(Stamp).format(),
      serviceIDs: serviceIDs,
      action: action
    };
  }).filter(function (_ref3) {
    var position = _ref3.position;
    return (// Filter out all the deployments that fall out of the timeline.
      -width / 2 <= position && position <= width / 2
    );
  });
};

var TimelineDeployments =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(TimelineDeployments, _React$PureComponent);

  function TimelineDeployments(props) {
    var _this;

    _classCallCheck(this, TimelineDeployments);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimelineDeployments).call(this, props));
    _this.state = {
      deployments: formattedDeployments(props)
    };
    return _this;
  }

  _createClass(TimelineDeployments, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        deployments: formattedDeployments(nextProps)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var timeScale = this.props.timeScale;

      var _timeScale$domain = timeScale.domain(),
          _timeScale$domain2 = _slicedToArray(_timeScale$domain, 2),
          startTimeSec = _timeScale$domain2[0],
          endTimeSec = _timeScale$domain2[1];

      if (!startTimeSec || !endTimeSec) return null; // Don't show deployment annotations if we've zoomed out too much.
      // See https://github.com/weaveworks/service-ui/issues/1858.

      if (endTimeSec - startTimeSec > MAX_VISIBLE_RANGE_SECS) return null;
      return _react.default.createElement(DeploymentAnnotations, null, this.state.deployments.map(function (deployment) {
        return _react.default.createElement(_DeploymentAnnotation.default, {
          key: deployment.key,
          x: deployment.position,
          action: deployment.action,
          serviceIDs: deployment.serviceIDs,
          timestamp: deployment.timestamp,
          linkTo: _this2.props.linkBuilder(deployment),
          onClick: _this2.props.onClick,
          containerWidth: _this2.props.width,
          containerHeight: 55
        });
      }));
    }
  }]);

  return TimelineDeployments;
}(_react.default.PureComponent);

TimelineDeployments.propTypes = {
  width: _propTypes.default.number.isRequired,
  timeScale: _propTypes.default.func.isRequired,
  deployments: _propTypes.default.array.isRequired,
  linkBuilder: _propTypes.default.func.isRequired,
  onClick: _propTypes.default.func.isRequired
};
var _default = TimelineDeployments;
exports.default = _default;