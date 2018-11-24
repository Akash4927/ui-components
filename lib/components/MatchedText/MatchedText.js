"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _compact2 = _interopRequireDefault(require("lodash/compact"));

var _flatMap2 = _interopRequireDefault(require("lodash/flatMap"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _intersperse = _interopRequireDefault(require("intersperse"));

var _polished = require("polished");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// For chunk = { text: 'abcd', matched: false } and match = 'bc', the output will be
// [{ text: 'a', matched: false }, { text: 'bc', matched: true }, { text: 'd', matched: false }].
var splitChunk = function splitChunk(chunk, match) {
  return (0, _compact2.default)((0, _intersperse.default)(chunk.text.split(match), match)).map(function (text) {
    return {
      matched: text === match,
      text: text
    };
  });
}; // Splits the text into chunks by finding all occurences of all matches in the list.


var buildChunks = function buildChunks(_ref) {
  var text = _ref.text,
      matches = _ref.matches;
  var chunks = [{
    text: text,
    matched: false
  }];
  matches.forEach(function (match) {
    chunks = (0, _flatMap2.default)(chunks, // Only unmatched chunks can be further split by other matches
    function (chunk) {
      return chunk.matched ? [chunk] : splitChunk(chunk, match);
    });
  });
  return chunks;
};

var MatchedChunk = _styledComponents.default.span.withConfig({
  displayName: "MatchedText__MatchedChunk",
  componentId: "sc-1ai4c87-0"
})(["background-color:", ";border-radius:", ";"], function (props) {
  return (0, _polished.transparentize)(0.7, props.theme.colors.blue400);
}, function (props) {
  return props.theme.borderRadius.soft;
});
/**
 * Renders a block of text with matched sections highlighted
 *
 * `foo` is highlighted:
 *
 * ```
 * <MatchedText text="this that foo and bar" matches={['foo']} />
 * ```
 *
 */


var MatchedText =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MatchedText, _React$PureComponent);

  function MatchedText(props) {
    var _this;

    _classCallCheck(this, MatchedText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MatchedText).call(this, props));
    _this.state = {
      chunks: buildChunks(props)
    };
    return _this;
  }

  _createClass(MatchedText, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        chunks: buildChunks(nextProps)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("span", {
        title: this.props.text
      }, this.state.chunks.map(function (chunk, index) {
        if (chunk.matched) {
          /* eslint-disable react/no-array-index-key */
          return _react.default.createElement(MatchedChunk, {
            key: "".concat(index, ":").concat(chunk.text)
          }, chunk.text);
          /* eslint-enable react/no-array-index-key */
        }

        return chunk.text;
      }));
    }
  }]);

  return MatchedText;
}(_react.default.PureComponent);

MatchedText.propTypes = {
  /**
   * The base text to display
   */
  text: _propTypes.default.string.isRequired,

  /**
   * The chunks to be highlighted
   */
  matches: _propTypes.default.arrayOf(_propTypes.default.string)
};
MatchedText.defaultProps = {
  matches: []
};
var _default = MatchedText;
exports.default = _default;