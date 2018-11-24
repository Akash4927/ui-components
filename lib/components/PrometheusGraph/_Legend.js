"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _without2 = _interopRequireDefault(require("lodash/without"));

var _size2 = _interopRequireDefault(require("lodash/size"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LegendContainer = _styledComponents.default.div.withConfig({
  displayName: "_Legend__LegendContainer",
  componentId: "sc-2urfaw-0"
})(["opacity:", ";"], function (props) {
  return props.loading ? 0.35 : 1;
});

var LegendItems = _styledComponents.default.div.withConfig({
  displayName: "_Legend__LegendItems",
  componentId: "sc-2urfaw-1"
})(["color:", ";box-sizing:border-box;display:flex;flex-wrap:wrap;position:relative;padding:10px 0;width:100%;"], function (props) {
  return props.theme.colors.black;
});

var LegendItem = _styledComponents.default.div.withConfig({
  displayName: "_Legend__LegendItem",
  componentId: "sc-2urfaw-2"
})(["cursor:pointer;display:flex;font-size:", ";align-items:flex-start;padding:2px 22px 2px 7px;margin-right:2px;margin-bottom:2px;border-radius:", ";&:hover{background-color:", ";}", ";"], function (props) {
  return props.theme.fontSizes.small;
}, function (props) {
  return props.theme.borderRadius.soft;
}, function (props) {
  return props.theme.colors.purple100;
}, function (props) {
  return props.selected && "\n    background-color: ".concat(props.theme.colors.purple100, ";\n  ");
});

var LegendItemName = _styledComponents.default.span.withConfig({
  displayName: "_Legend__LegendItemName",
  componentId: "sc-2urfaw-3"
})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:36ch;", ";", ":hover &{", ";}"], function (props) {
  return props.multiLine && "\n    white-space: normal;\n    max-height: 32px;\n  ";
}, LegendItem, function (props) {
  return props.multiLine && // eslint-disable-line
  "\n        max-height: 100%;\n        word-break: break-word;\n        text-overflow: normal;\n    ";
});

var LegendToggle = _styledComponents.default.span.withConfig({
  displayName: "_Legend__LegendToggle",
  componentId: "sc-2urfaw-4"
})(["color:", ";cursor:pointer;display:block;padding:5px;font-size:", ";width:fit-content;"], function (props) {
  return props.theme.colors.purple400;
}, function (props) {
  return props.theme.fontSizes.normal;
});

var LegendCaret = _styledComponents.default.span.withConfig({
  displayName: "_Legend__LegendCaret",
  componentId: "sc-2urfaw-5"
})(["margin-left:5px;"]);

var ColorBox = _styledComponents.default.span.withConfig({
  displayName: "_Legend__ColorBox",
  componentId: "sc-2urfaw-6"
})(["background-color:", ";border-radius:", ";margin-top:5px;margin-right:4px;min-width:13px;height:5px;"], function (props) {
  return props.color;
}, function (props) {
  return props.theme.borderRadius.soft;
});

var Legend =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Legend, _React$PureComponent);

  function Legend(props, context) {
    var _this;

    _classCallCheck(this, Legend);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Legend).call(this, props, context));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLegendItemClick", function (ev, series) {
      var selectedKeys = _this.state.selectedKeys;

      if (ev.ctrlKey || ev.metaKey) {
        // If the Ctrl button is pressed while selecting
        // the legend item, simply toggle its presence.
        selectedKeys = _this.seriesSelected(series) ? (0, _without2.default)(selectedKeys, series.key) : [series.key].concat(_toConsumableArray(selectedKeys)).sort();
      } else {
        // If Ctrl button is not pressed, select only the clicked item,
        // unless it's the only one selected, in which case remove the selection.
        var onlyThisSelected = _this.seriesSelected(series) && selectedKeys.length === 1;
        selectedKeys = onlyThisSelected ? [] : [series.key];
      }

      _this.setState({
        selectedKeys: selectedKeys
      });

      _this.props.onSelectedKeysChange(selectedKeys);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLegendItemMouseEnter", function (series) {
      _this.props.onHoveredKeyChange(series.key);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLegendItemMouseLeave", function () {
      _this.props.onHoveredKeyChange(null);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLegendToggle", function () {
      _this.setState({
        shown: !_this.state.shown
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "seriesSelected", function (series) {
      return _this.state.selectedKeys.includes(series.key);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "seriesHovered", function (series) {
      return _this.props.hoveredKey === series.key;
    });

    _this.state = {
      shown: props.shown,
      selectedKeys: props.selectedKeys
    };
    return _this;
  }

  _createClass(Legend, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.selectedKeys !== nextProps.selectedKeys) {
        this.setState({
          selectedKeys: nextProps.selectedKeys
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var caretIcon = this.state.shown ? 'fa-caret-down' : 'fa-caret-right';
      return _react.default.createElement(LegendContainer, {
        loading: this.props.loading
      }, this.props.collapsable && _react.default.createElement(LegendToggle, {
        onClick: this.handleLegendToggle
      }, "Legend ", _react.default.createElement(LegendCaret, {
        className: "fa ".concat(caretIcon)
      })), this.state.shown && _react.default.createElement(LegendItems, null, this.props.multiSeries.map(function (series) {
        var multiLine = (0, _size2.default)(series.legendNameParts) > 1;

        var selected = _this2.seriesSelected(series);

        var hovered = _this2.seriesHovered(series);

        return _react.default.createElement(LegendItem, {
          key: series.key,
          title: series.hoverName.join('\n'),
          onClick: function onClick(ev) {
            return _this2.handleLegendItemClick(ev, series);
          },
          onMouseEnter: function onMouseEnter() {
            return _this2.handleLegendItemMouseEnter(series);
          },
          onMouseLeave: function onMouseLeave() {
            return _this2.handleLegendItemMouseLeave();
          },
          selected: selected
        }, _react.default.createElement(ColorBox, {
          color: series.color
        }), _react.default.createElement(LegendItemName, {
          multiLine: multiLine
        }, series.legendNameParts.join('\n')), _this2.props.renderItemSuffix(series, {
          selected: selected,
          hovered: hovered
        }));
      })));
    }
  }]);

  return Legend;
}(_react.default.PureComponent);

Legend.propTypes = {
  multiSeries: _propTypes.default.array.isRequired,
  hoveredKey: _propTypes.default.string,
  selectedKeys: _propTypes.default.array.isRequired,
  renderItemContent: _propTypes.default.func.isRequired,
  onSelectedKeysChange: _propTypes.default.func.isRequired,
  onHoveredKeyChange: _propTypes.default.func.isRequired,
  loading: _propTypes.default.bool.isRequired,
  collapsable: _propTypes.default.bool.isRequired,
  shown: _propTypes.default.bool.isRequired
};
Legend.defaultProps = {
  hoveredKey: null
};
var _default = Legend;
exports.default = _default;