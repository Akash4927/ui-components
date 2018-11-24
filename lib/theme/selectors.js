"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spacing = exports.fontSize = exports.color = exports.borderRadius = exports.boxShadow = exports.selector = void 0;

var _isObject2 = _interopRequireDefault(require("lodash/isObject"));

var _get2 = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// `selector()` allows you to create closures over as
// many levels as you wish, each time returning another function.
// This lets you compose selectors and when they are passed an object
// finally select that value
var selector = function selector(propsOrSelector) {
  var prevArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if ((0, _isObject2.default)(propsOrSelector)) {
    return (0, _get2.default)(propsOrSelector, prevArgs);
  }

  return function (value) {
    return selector(value, _toConsumableArray(prevArgs).concat([propsOrSelector]));
  };
};

exports.selector = selector;
var themeSelector = selector('theme'); // these are pre-composed selectors for our theme
// Usage:
//   const Success = styled.i`
//     color: ${color('green500')};
//   `;

var boxShadow = themeSelector('boxShadow');
exports.boxShadow = boxShadow;
var borderRadius = themeSelector('borderRadius');
exports.borderRadius = borderRadius;
var color = themeSelector('colors');
exports.color = color;
var fontSize = themeSelector('fontSizes');
exports.fontSize = fontSize;
var spacing = themeSelector('spacing');
exports.spacing = spacing;