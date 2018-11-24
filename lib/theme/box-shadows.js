"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boxShadow = void 0;

var _colors = require("./colors");

var boxShadow = {
  none: 'none',
  light: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  heavy: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  selected: "0px 0px 2px 2px ".concat(_colors.colors.purple400)
};
exports.boxShadow = boxShadow;