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

var HEIGHT_PX = 27;

var RangeSelectorWrapper = _styledComponents.default.div.withConfig({
  displayName: "_RangeSelector__RangeSelectorWrapper",
  componentId: "sc-1wrqtw2-0"
})(["border-left:1px solid ", ";min-width:75px;"], function (props) {
  return props.theme.colors.gray200;
});

var SelectedRangeWrapper = _styledComponents.default.div.withConfig({
  displayName: "_RangeSelector__SelectedRangeWrapper",
  componentId: "sc-1wrqtw2-1"
})(["background-color:transparent;cursor:pointer;padding:3px 8px;display:flex;justify-content:space-between;line-height:21px;"]);

var SelectedRange = _styledComponents.default.div.withConfig({
  displayName: "_RangeSelector__SelectedRange",
  componentId: "sc-1wrqtw2-2"
})(["color:", ";"], function (props) {
  return props.theme.colors.purple900;
});

var RangeOptionsListWrapper = _styledComponents.default.div.withConfig({
  displayName: "_RangeSelector__RangeOptionsListWrapper",
  componentId: "sc-1wrqtw2-3"
})(["z-index:", ";position:fixed;top:0;bottom:0;right:0;left:0;"], function (props) {
  return props.theme.layers.dropdown;
});

var RangeOptionsList = _styledComponents.default.div.withConfig({
  displayName: "_RangeSelector__RangeOptionsList",
  componentId: "sc-1wrqtw2-4"
})(["background-color:", ";border:1px solid ", ";color:", ";box-sizing:border-box;position:absolute;text-align:left;"], function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  return props.theme.colors.purple900;
});

var CaretIconsContainer = _styledComponents.default.span.withConfig({
  displayName: "_RangeSelector__CaretIconsContainer",
  componentId: "sc-1wrqtw2-5"
})(["display:flex;flex-direction:column;justify-content:center;margin-left:8px;i{font-size:", ";line-height:7px;}"], function (props) {
  return props.theme.fontSizes.tiny;
});

var RangeOption = _styledComponents.default.div.withConfig({
  displayName: "_RangeSelector__RangeOption",
  componentId: "sc-1wrqtw2-6"
})(["line-height:", "px;cursor:pointer;padding:0 8px;&:hover{background-color:", ";}", ";"], HEIGHT_PX, function (props) {
  return props.theme.colors.gray50;
}, function (props) {
  return props.selected && "\n    color: ".concat(props.theme.colors.blue400, ";\n  ");
});

var rangeOptions = [{
  label: '15min',
  valueMs: _moment.default.duration(15, 'minutes').asMilliseconds()
}, {
  label: '30min',
  valueMs: _moment.default.duration(30, 'minutes').asMilliseconds()
}, {
  label: '1h',
  valueMs: _moment.default.duration(1, 'hour').asMilliseconds()
}, {
  label: '3h',
  valueMs: _moment.default.duration(3, 'hours').asMilliseconds()
}, {
  label: '6h',
  valueMs: _moment.default.duration(6, 'hours').asMilliseconds()
}, {
  label: '24h',
  valueMs: _moment.default.duration(24, 'hours').asMilliseconds()
}, {
  label: '7d',
  valueMs: _moment.default.duration(7, 'days').asMilliseconds()
}];

var RangeSelector =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RangeSelector, _React$Component);

  function RangeSelector(props, context) {
    var _this;

    _classCallCheck(this, RangeSelector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RangeSelector).call(this, props, context));
    _this.state = {
      isOpen: false
    };
    _this.saveNodeRef = _this.saveNodeRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleDropDownClick = _this.handleDropDownClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBackgroundClick = _this.handleBackgroundClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(RangeSelector, [{
    key: "handleDropDownClick",
    value: function handleDropDownClick() {
      this.setState({
        isOpen: true
      });
    }
  }, {
    key: "handleBackgroundClick",
    value: function handleBackgroundClick() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "saveNodeRef",
    value: function saveNodeRef(ref) {
      this.containerRef = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var rangeMs = this.props.rangeMs;
      var isOpen = this.state.isOpen;
      var selectedRangeIndex = rangeOptions.findIndex(function (r) {
        return r.valueMs === rangeMs;
      });
      var selectedRangeLabel = rangeOptions.find(function (r) {
        return r.valueMs === rangeMs;
      }).label;
      var anchorEl = this.containerRef && this.containerRef.getBoundingClientRect();
      var menuStyle = anchorEl ? {
        top: anchorEl.top - selectedRangeIndex * HEIGHT_PX - 1,
        left: anchorEl.right - anchorEl.width,
        minWidth: anchorEl.width + 1
      } : {};
      return _react.default.createElement(RangeSelectorWrapper, {
        innerRef: this.saveNodeRef
      }, _react.default.createElement(SelectedRangeWrapper, {
        onClick: this.handleDropDownClick
      }, _react.default.createElement(SelectedRange, null, selectedRangeLabel), _react.default.createElement(CaretIconsContainer, null, _react.default.createElement("i", {
        className: "fa fa-caret-up"
      }), _react.default.createElement("i", {
        className: "fa fa-caret-down"
      }))), isOpen && _react.default.createElement(RangeOptionsListWrapper, {
        onClick: this.handleBackgroundClick
      }, _react.default.createElement(RangeOptionsList, {
        style: menuStyle
      }, rangeOptions.map(function (_ref) {
        var valueMs = _ref.valueMs,
            label = _ref.label;
        return _react.default.createElement(RangeOption, {
          key: valueMs,
          selected: valueMs === rangeMs,
          onClick: function onClick() {
            return _this2.props.onChange(valueMs);
          }
        }, label);
      }))));
    }
  }]);

  return RangeSelector;
}(_react.default.Component);

RangeSelector.propTypes = {
  rangeMs: _propTypes.default.number.isRequired,
  onChange: _propTypes.default.func.isRequired
};
var _default = RangeSelector;
exports.default = _default;