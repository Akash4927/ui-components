"use strict";

var _selectors = require("./selectors");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var props = {
  theme: _.default
};
describe('ThemeSelectors', function () {
  describe('fontSizes', function () {
    it('should retrieve a fontSize', function () {
      expect(_typeof(_selectors.fontSize)).toBe('function');
      expect((0, _selectors.fontSize)('small')(props)).toBe(10);
    });
  });
  describe('colors', function () {
    it('should retrieve a color', function () {
      expect(_typeof(_selectors.color)).toBe('function');
      expect((0, _selectors.color)('grey200')(props)).toBe('#333');
    });
  });
  describe('custom selector', function () {
    it('should return a function ', function () {
      var wongoBongo = (0, _selectors.selector)('wongo.bongo');
      expect(_typeof(wongoBongo)).toBe('function');
      expect(wongoBongo('jibberish')).toBe('boo');
    });
  });
});