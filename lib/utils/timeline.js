"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formattedTimestamp = formattedTimestamp;
exports.getTimeScale = getTimeScale;

var _moment = _interopRequireDefault(require("moment"));

var _d3Scale = require("d3-scale");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formattedTimestamp(timestamp) {
  var momentTimestamp = timestamp ? (0, _moment.default)(timestamp) : (0, _moment.default)();
  return momentTimestamp.startOf('second').utc().format();
}

function getTimeScale(_ref) {
  var focusedTimestamp = _ref.focusedTimestamp,
      durationMsPerPixel = _ref.durationMsPerPixel;
  var startDate = (0, _moment.default)(focusedTimestamp).subtract(durationMsPerPixel);
  var endDate = (0, _moment.default)(focusedTimestamp).add(durationMsPerPixel);
  return (0, _d3Scale.scaleUtc)().domain([startDate, endDate]).range([-1, 1]);
}