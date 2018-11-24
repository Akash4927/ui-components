"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE (fbarl): For some reason, doing the animation with
// opacity looks buggy on my Chrome on deep zoom levels.

/* stylelint-disable color-no-hex */
var blinking = (0, _styledComponents.keyframes)(["0%{background-color:transparent;}50%{background-color:#fff;}100%{background-color:transparent;}"]);
/* stylelint-enable color-no-hex */

var TimelineLoaderOverlay = _styledComponents.default.div.attrs({
  style: function style(_ref) {
    var x = _ref.x,
        width = _ref.width;
    return {
      left: "".concat(x, "px"),
      width: width
    };
  }
}).withConfig({
  displayName: "_TimelineLoader__TimelineLoaderOverlay",
  componentId: "a15nuo-0"
})(["animation:", " 2s linear infinite;pointer-events:none;position:absolute;opacity:0.65;height:100%;"], blinking);

var TimelineLoader = function TimelineLoader(_ref2) {
  var timeScale = _ref2.timeScale,
      startAt = _ref2.startAt,
      endAt = _ref2.endAt,
      width = _ref2.width;
  var endShift = endAt ? Math.min(timeScale((0, _moment.default)(endAt)), width) : width;
  var startShift = startAt ? Math.max(timeScale((0, _moment.default)(startAt)), -width) : -width;
  var length = endShift - startShift;
  return _react.default.createElement(TimelineLoaderOverlay, {
    x: startShift,
    width: length
  });
};

TimelineLoader.propTypes = {
  timeScale: _propTypes.default.func.isRequired,
  startAt: _propTypes.default.string,
  endAt: _propTypes.default.string,
  width: _propTypes.default.number.isRequired
};
TimelineLoader.defaultProps = {
  endAt: '',
  startAt: ''
};
var _default = TimelineLoader;
exports.default = _default;