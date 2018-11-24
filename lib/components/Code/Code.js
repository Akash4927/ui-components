"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _noop2 = _interopRequireDefault(require("lodash/noop"));

var _trim2 = _interopRequireDefault(require("lodash/trim"));

var _isString2 = _interopRequireDefault(require("lodash/isString"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var scale = (0, _styledComponents.keyframes)(["0%{transform:scale(0)}90%{transform:scale(1.2)}100%{transform:scale(1)}"]);

var CopyNotice = _styledComponents.default.div.withConfig({
  displayName: "Code__CopyNotice",
  componentId: "sc-1no9z1g-0"
})(["position:absolute;top:0;right:0;padding:10px 15px;", ";border-radius:", ";background-color:", ";opacity:0;font-size:", ";color:", ";", ";"], function (props) {
  return props.isHovered && 'transition: opacity 300ms ease;';
}, function (props) {
  return props.theme.borderRadius.soft;
}, function (props) {
  return props.theme.colors.purple800;
}, function (props) {
  return props.theme.fontSizes.small;
}, function (props) {
  return props.theme.colors.purple50;
}, function (props) {
  return props.isCopying && "\n    & > i {\n        transform-origin: center;\n        animation-name: ".concat(scale, ";\n        animation-duration: .4s;\n      }\n  ");
});

var CodeWrapper = _styledComponents.default.div.withConfig({
  displayName: "Code__CodeWrapper",
  componentId: "sc-1no9z1g-1"
})(["position:relative;background-color:", ";box-sizing:border-box;border-radius:", ";cursor:pointer;&:hover ", "{opacity:0.9;}"], function (props) {
  return props.theme.colors.purple800;
}, function (props) {
  return props.theme.borderRadius.soft;
}, CopyNotice);

var ScrollWrap = _styledComponents.default.div.withConfig({
  displayName: "Code__ScrollWrap",
  componentId: "sc-1no9z1g-2"
})(["overflow:auto;"]);

var Content = _styledComponents.default.div.withConfig({
  displayName: "Code__Content",
  componentId: "sc-1no9z1g-3"
})(["flex-grow:1;color:", ";padding:10px 15px;"], function (props) {
  return props.theme.colors.purple50;
});

var Pre = _styledComponents.default.pre.withConfig({
  displayName: "Code__Pre",
  componentId: "sc-1no9z1g-4"
})(["margin:10px 0;font-family:", ";font-size:", ";"], function (props) {
  return props.theme.fontFamilies.monospace;
}, function (props) {
  return props.theme.fontSizes.small;
});

var PaddedLine = _styledComponents.default.div.withConfig({
  displayName: "Code__PaddedLine",
  componentId: "sc-1no9z1g-5"
})(["&:not(:last-child){padding-bottom:8px;}& > *{display:inline;}"]);

var trimString = function trimString(node) {
  return (0, _isString2.default)(node) ? (0, _trim2.default)(node) : node;
};

var formatSingleCommand = function formatSingleCommand(children) {
  return (0, _isFunction2.default)(children) ? children() : trimString(children);
};

function formatMultiString(string) {
  return (0, _trim2.default)(string).split('\n').map(function (line) {
    return _react.default.createElement(PaddedLine, {
      key: line
    }, line, '\n');
  });
}

function formatMultiCommand(raw) {
  var children = raw;

  if ((0, _isFunction2.default)(children)) {
    children = children();
  }

  var count = _react.default.Children.count(children);

  if (count === 1) {
    return (0, _isString2.default)(children) ? formatMultiString(children) : children;
  }

  return _react.default.Children.map(children, function (child, i) {
    return _react.default.createElement(PaddedLine, {
      key: i
    }, child, '\n');
  });
}
/**
 * Code allows for easy rendering of code snippets which can easliy be copied to
 * the clipboard by clicking the element or selecting a portion of the code
 */


var Code =
/*#__PURE__*/
function (_Component) {
  _inherits(Code, _Component);

  function Code() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Code);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Code)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isCopying: false,
      isHovered: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidUpdate", function () {
      // reselect text after re-render
      if (_this.state.selectedRange) {
        var prevRange = _this.state.selectedRange;
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(prevRange); // clear it for the next interaction

        _this.setState({
          selectedRange: null
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCopyClick", function () {
      // Create a textarea element in which the text of the code will be copied.
      // Set the value of the textarea, select it to set it as the active element,
      // then copy the value of that element to the clipboard.
      // It's 2017 and this is still the best way to copy text on button click...
      if ((0, _isFunction2.default)(_this.props.onCopy)) {
        _this.props.onCopy();
      }

      var selection = document.getSelection();
      var selectionString = selection.toString(); // if user has selected text, save that to state so it can be reselected

      if (selectionString !== '') {
        _this.setState({
          selectedRange: selection.getRangeAt(0)
        });
      }

      var code = selectionString === '' ? _this.preNode.textContent : selectionString;
      var txtArea = document.createElement('textarea'); // Safari doesn't allow for assigning an object literal to `style`.

      txtArea.class = 'hidden-textarea'; // Make sure the code ends in a newline to execute all the commands in multiline code.

      if (code.charAt(code.length - 1) === '\n') {
        txtArea.value = code;
      } else {
        txtArea.value = "".concat(code, "\n");
      }

      document.body.appendChild(txtArea);
      txtArea.select();

      try {
        document.execCommand('copy');
      } catch (e) {
        throw e;
      }

      document.body.removeChild(txtArea); // show the Copied to clipboard notice temporarily

      _this.setState({
        isCopying: true
      });

      setTimeout(function () {
        _this.setState({
          isCopying: false
        });
      }, 3000);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseEnter", function () {
      _this.setState({
        isHovered: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeave", function () {
      _this.setState({
        isHovered: false,
        isCopying: false
      });
    });

    return _this;
  }

  _createClass(Code, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          multiCommand = _this$props.multiCommand;
      var _this$state = this.state,
          isCopying = _this$state.isCopying,
          isHovered = _this$state.isHovered;
      var copy = isCopying && isHovered ? _react.default.createElement("i", {
        className: "fa fa-check"
      }) : 'Copy to clipboard';
      return _react.default.createElement(CodeWrapper, {
        onClick: this.handleCopyClick,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave
      }, _react.default.createElement(ScrollWrap, null, _react.default.createElement(Content, null, _react.default.createElement(Pre, {
        innerRef: function innerRef(e) {
          _this2.preNode = e;
        }
      }, multiCommand ? formatMultiCommand(children) : formatSingleCommand(children)))), _react.default.createElement(CopyNotice, {
        isCopying: isCopying,
        isHovered: isHovered
      }, copy));
    }
  }]);

  return Code;
}(_react.Component);

_defineProperty(Code, "displayName", 'Code');

Code.propTypes = {
  // children can be anything that React can render
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]).isRequired,
  // multiCommand determines if the code lines shall be padded
  multiCommand: _propTypes.default.bool,
  // onCopy will be called when the CodeWrapper is clicked
  onCopy: _propTypes.default.func
};
Code.defaultProps = {
  multiCommand: false,
  onCopy: _noop2.default
};
var _default = Code;
exports.default = _default;