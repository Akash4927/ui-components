"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromAtoms = exports.withTheme = exports.lookupValue = void 0;

var _react = _interopRequireDefault(require("react"));

var _intersection = _interopRequireDefault(require("lodash/intersection"));

var _first = _interopRequireDefault(require("lodash/first"));

var _keys = _interopRequireDefault(require("lodash/keys"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _styledComponents = require("styled-components");

var _theme = _interopRequireDefault(require("../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Return the value of a set of props against a lookup object.
// Helps when using "ternary" props, ie: <Text small bold />
// Third argument is the default value to return in the event of an `undefined`;
var lookupValue = function lookupValue(props, lookup, _default) {
  var matches = (0, _intersection.default)((0, _keys.default)(props), (0, _keys.default)(lookup));

  if (matches.length > 1) {
    throw new Error("You have specified conflicting props: ".concat(JSON.stringify(matches)));
  }

  return lookup[(0, _first.default)(matches)] || _default;
};

exports.lookupValue = lookupValue;

var withTheme = function withTheme(component) {
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _theme.default
  }, component);
}; // Shorthand for gettings values from the theme.
// `variationKey` is a string matching the prop to use to lookup `field`.
// See <Button /> or <Alert /> for an example.


exports.withTheme = withTheme;

var fromAtoms = function fromAtoms(component, variationKey, field) {
  return function (props) {
    return (0, _get2.default)(props.theme.atoms, [component, (0, _get2.default)(props, variationKey), field]);
  };
};

exports.fromAtoms = fromAtoms;