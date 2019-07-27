"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.atoms = void 0;

var _colors = require("./colors");

// component-specific
var atoms = {
  Alert: {
    error: {
      background: _colors.colors.orange600,
      color: _colors.colors.white
    },
    info: {
      background: _colors.colors.blue600,
      color: _colors.colors.white
    },
    success: {
      background: _colors.colors.green500,
      color: _colors.colors.white
    },
    warning: {
      background: _colors.colors.yellow500,
      color: _colors.colors.white
    }
  },
  Button: {
    danger: {
      background: _colors.colors.orange600,
      color: _colors.colors.white,
      hoverBackground: _colors.colors.orange700,
      hoverColor: _colors.colors.white
    },
    default: {
      background: _colors.colors.white,
      color: _colors.colors.black,
      hoverBackground: _colors.colors.gray50,
      hoverColor: _colors.colors.purple800
    },
    disabled: {
      background: _colors.colors.gray50,
      color: _colors.colors.gray600,
      hoverBackground: _colors.colors.gray50,
      hoverColor: _colors.colors.gray600
    },
    primary: {
      background: _colors.colors.blue700,
      color: _colors.colors.white,
      hoverBackground: _colors.colors.blue800,
      hoverColor: _colors.colors.white
    }
  }
};
exports.atoms = atoms;