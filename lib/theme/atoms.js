"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.atoms = void 0;

var _colors = require("./colors");

// component-specific
var atoms = {
  Alert: {
    info: {
      color: _colors.colors.white,
      background: _colors.colors.blue600
    },
    success: {
      color: _colors.colors.white,
      background: _colors.colors.green500
    },
    warning: {
      color: _colors.colors.white,
      background: _colors.colors.yellow500
    },
    error: {
      color: _colors.colors.white,
      background: _colors.colors.orange600
    }
  },
  Button: {
    default: {
      color: _colors.colors.black,
      background: _colors.colors.white,
      hoverColor: _colors.colors.purple800,
      hoverBackground: _colors.colors.gray50
    },
    primary: {
      color: _colors.colors.white,
      background: _colors.colors.blue700,
      hoverColor: _colors.colors.white,
      hoverBackground: _colors.colors.blue800
    },
    danger: {
      color: _colors.colors.white,
      background: _colors.colors.orange600,
      hoverColor: _colors.colors.white,
      hoverBackground: _colors.colors.orange700
    },
    disabled: {
      color: _colors.colors.gray600,
      background: _colors.colors.gray50,
      hoverColor: _colors.colors.gray600,
      hoverBackground: _colors.colors.gray50
    }
  }
};
exports.atoms = atoms;