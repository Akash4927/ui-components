"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Menu;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuWrapper = _styledComponents.default.div.withConfig({
  displayName: "Menu__MenuWrapper",
  componentId: "f3q817-0"
})(["color:", ";text-align:left;"], function (props) {
  return props.theme.colors.purple400;
});
/**
 * A menu component that can be used for navigation.
 *
 * ```javascript
 * export default function MenuExample({clickHandler}) {
 *   return (
 *     <Menu>
 *       <MenuItem onClick={clickHandler.bind(this, 'onClick')} text="Item 1" />
 *       <MenuItem onClick={clickHandler.bind(this, 'onClick')} text="Item 2" />
 *       <MenuItem
 *         onClick={clickHandler.bind(this, 'onClick')}
 *         isSubItem text="Sub Item 1"
 *       />
 *       <MenuItem
 *         onClick={clickHandler.bind(this, 'onClick')}
 *         isSubItem text="Sub Item 2"
 *       />
 *     </Menu>
 *   );
 * }
 * ```
 */


function Menu(_ref) {
  var children = _ref.children;
  return _react.default.createElement(MenuWrapper, {
    className: "weave-menu"
  }, children);
}