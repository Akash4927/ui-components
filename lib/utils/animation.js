"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.weakSpring = weakSpring;
exports.strongSpring = strongSpring;

var _reactMotion = require("react-motion");

function weakSpring(value) {
  return (0, _reactMotion.spring)(value, {
    stiffness: 100,
    damping: 18,
    precision: 1
  });
}

function strongSpring(value) {
  return (0, _reactMotion.spring)(value, {
    stiffness: 800,
    damping: 50,
    precision: 1
  });
}