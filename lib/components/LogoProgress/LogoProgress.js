"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var diagonalStripes = (0, _styledComponents.keyframes)(["0%{opacity:1;}20%{-webkit-transform:translateX(0px) translateY(0px);opacity:1;}48%{-webkit-transform:translateX(150px) translateY(-150px);opacity:1;}50%{opacity:0;}59%{-webkit-transform:translateX(-150px) translateY(150px);opacity:0;}60%{opacity:0.7;}100%{-webkit-transform:translateX(0px) translateY(0px);opacity:1;}"]);
var verticalStripes = (0, _styledComponents.keyframes)(["0%{opacity:1;}20%{-webkit-transform:translateY(0px);opacity:1;}48%{-webkit-transform:translateY(150px);opacity:1;}50%{opacity:0;}59%{-webkit-transform:translateY(-150px);opacity:0;}60%{opacity:0.7;}100%{-webkit-transform:translateY(0px);opacity:1;}"]);

var WeaveLogoProgress = _styledComponents.default.div.withConfig({
  displayName: "LogoProgress__WeaveLogoProgress",
  componentId: "sc-1qhizh5-0"
})(["display:block;border-radius:", ";width:150px;height:150px;overflow:hidden;.st0{fill:", ";}.st1{fill:", ";}.st2{fill:", ";}.a,.e{-webkit-animation:", " 1.25s ease-in-out 0s infinite both;}.c{-webkit-animation:", " 1.25s ease-in-out 0.1s infinite both;}.b{-webkit-animation:", " 1.25s ease-in-out 0.15s infinite both;}.f{-webkit-animation:", " 1.25s ease-in-out 0.15s infinite both;}.d{-webkit-animation:", " 1.25s ease-in-out 0.25s infinite both;}"], function (props) {
  return props.theme.borderRadius.circle;
}, function (props) {
  return props.theme.colors.purple900;
}, function (props) {
  return props.theme.colors.blue400;
}, function (props) {
  return props.theme.colors.orange500;
}, diagonalStripes, diagonalStripes, diagonalStripes, verticalStripes, verticalStripes);
/**
 * Intederminate spinner used for page-level loading eg. login, logout
 * ```javascript
 * import React from 'react';
 * import { LogoProgress } from 'weaveworks-ui-components'
 *
 * React.render(
 *   <LogoProgress />
 * );
 * ```
 */


var LogoProgress =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LogoProgress, _React$Component);

  function LogoProgress() {
    _classCallCheck(this, LogoProgress);

    return _possibleConstructorReturn(this, _getPrototypeOf(LogoProgress).apply(this, arguments));
  }

  _createClass(LogoProgress, [{
    key: "render",
    value: function render() {
      var _this$props$size = this.props.size,
          size = _this$props$size === void 0 ? 150 : _this$props$size;
      var styles = {
        width: size,
        height: size
      };
      return _react.default.createElement("div", {
        style: styles
      }, _react.default.createElement(WeaveLogoProgress, null, _react.default.createElement("svg", null, _react.default.createElement("g", null, _react.default.createElement("path", {
        className: "st0 a",
        d: "M43.2,54.1L1.1,91.7c1.9,7.6,4.9,14.7,8.9,21.1l33.2-29.7V54.1z"
      }), _react.default.createElement("path", {
        className: "st1 b",
        d: "M83.5,119.9L83.5,119.9l-21.7,19.4v7.9c3.6,0.5,7.3,0.8,11.1,0.8c4.4,0,8.7-0.4,12.9-1.1l58-51.8 c2-6.7,3-13.7,3-21c0-3.4-0.3-6.8-0.7-10.1L83.5,119.9z"
      }), _react.default.createElement("path", {
        className: "st2 c",
        d: "M38.5,139.2l103.7-92.6c-2.8-6.9-6.6-13.4-11.2-19.1l-109,99.7L38.5,139.2z"
      }), _react.default.createElement("path", {
        className: "st1 d",
        d: "M83.7,147.2V0.8C80.2,0.3,76.7,0,73.1,0C69.3,0,65.6,0.3,62,0.8v146.3L83.7,147.2z"
      }), _react.default.createElement("path", {
        className: "st0 e",
        d: "M43.2,83.2l75.4-67.4c-6-4.7-12.7-8.5-20-11.2L43.2,54.1V83.2z"
      }), _react.default.createElement("path", {
        className: "st2 f",
        d: "M43.2,109.8v-4.3V6.2c-8.1,3.6-15.4,8.5-21.7,14.6v106.4c4.9,4.7,10.4,8.8,16.4,12l0,0L43.2,109.8z"
      })))));
    }
  }]);

  return LogoProgress;
}(_react.default.Component);

var _default = LogoProgress;
exports.default = _default;