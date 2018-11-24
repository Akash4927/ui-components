"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeIdAttribute = encodeIdAttribute;

// Cleans up a value to be used as an element ID.
// Encodes invalid characters to be valid in XHTML and makes it
// so that it can be reversed by decodeIdAttribute.
function encodeIdAttribute(id) {
  return id.replace(/[<>&;]/gm, function (m) {
    return "__u".concat(m.charCodeAt(0), "__");
  });
}