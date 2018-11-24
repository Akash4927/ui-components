"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

var COMPACT_LOCALE_KEY = 'compact-time-ranges'; // FIXME: move this somewhere else?

(function () {
  // When you register a new locale moment.js changes the global to
  // the new entry. So save the current locale and then set it back.
  var defaultLocale = _moment.default.locale();

  _moment.default.locale(COMPACT_LOCALE_KEY, {
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: '%ds',
      m: '1m',
      mm: '%dm',
      h: '1h',
      hh: '%dh',
      d: '1d',
      dd: '%dd',
      M: '1mo',
      MM: '%dmo',
      y: '1y',
      yy: '%dy'
    }
  });

  _moment.default.locale(defaultLocale);
})();

var Timestamp = _styledComponents.default.span.withConfig({
  displayName: "TimestampTag__Timestamp",
  componentId: "iyax5h-0"
})(["", ";"], function (props) {
  return !props.inheritStyles && "\n    color: ".concat(props.theme.colors.gray600, ";\n    font-size: ").concat(props.theme.fontSizes.small, ";\n  ");
});
/**
 * TimestampTag renders an auto-update timestamp in a consistent format.
 * ```javascript
 * import { TimestampTag } from 'weaveworks-ui-components';
 *
 * export default function TimestampTag() {
 *   return (
 *     <div>
 *       <Info>Absolute timestamp</Info>
 *       <TimestampTag timestamp={timestamp} />
 *
 *       <Info>Relative timestamp (default)</Info>
 *       <TimestampTag relative timestamp={timestamp} />
 *
 *       <Info>Relative timestamp (compact)</Info>
 *       <TimestampTag relative compact timestamp={timestamp} />
 *     </div>
 *   );
 * }
 * ```
 */


var TimestampTag =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TimestampTag, _React$Component);

  function TimestampTag() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TimestampTag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimestampTag)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "startAutoRefresh", function (_ref) {
      var intervalMs = _ref.intervalMs;

      _this.stopAutoRefresh();

      _this.timer = setInterval(function () {
        _this.forceUpdate();
      }, intervalMs);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "stopAutoRefresh", function () {
      if (_this.timer) {
        clearInterval(_this.timer);
        _this.timer = null;
      }
    });

    return _this;
  }

  _createClass(TimestampTag, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.relative) {
        this.startAutoRefresh(this.props);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.relative) {
        this.startAutoRefresh(nextProps);
      } else {
        this.stopAutoRefresh();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopAutoRefresh();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          relative = _this$props.relative,
          compact = _this$props.compact,
          timestamp = _this$props.timestamp,
          inheritStyles = _this$props.inheritStyles;
      var relativeLocale = compact ? COMPACT_LOCALE_KEY : _moment.default.locale();
      var momentTimestamp = (0, _moment.default)(timestamp).utc();
      return _react.default.createElement(Timestamp, {
        inheritStyles: inheritStyles,
        title: relative ? momentTimestamp.format('dddd, MMMM Do YYYY, HH:mm:ss [UTC]') : momentTimestamp.fromNow()
      }, relative ? momentTimestamp.locale(relativeLocale).fromNow(compact) : momentTimestamp.startOf('second').format(compact ? 'YYYY-MM-DD' : ''));
    }
  }]);

  return TimestampTag;
}(_react.default.Component);

TimestampTag.propTypes = {
  /**
   * Timestamp to be displayed
   */
  timestamp: _propTypes.default.string.isRequired,

  /**
   * Show relative timestamp if true
   */
  relative: _propTypes.default.bool,

  /**
   * Show in compact format if true (only for relative timestamps)
   */
  compact: _propTypes.default.bool,

  /**
   * Inherit the styles from parent element if true
   */
  inheritStyles: _propTypes.default.bool,

  /**
   * Auto-refresh interval (in milliseconds)
   */
  intervalMs: _propTypes.default.number
};
TimestampTag.defaultProps = {
  relative: false,
  compact: false,
  inheritStyles: false,
  intervalMs: 15000
};
var _default = TimestampTag;
exports.default = _default;