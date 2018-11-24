"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Grid;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridWrapper = _styledComponents.default.div.withConfig({
  displayName: "Grid__GridWrapper",
  componentId: "sc-1ro1n4k-0"
})(["max-width:100%;"]);
/**
 * A grid for building layouts.
 *
 * Use the `<GridColumn />` component to specify a col-span.
 * The max number of columns is 12, so a col-span of 12 will span 100% of the available width.
 *
 * ```javascript
 * import {Grid, GridColumn, GridRow} from 'weave-ui';
 *
 * export default function MyGrid() {
 *  return (
 *   <Grid>
 *      <GridRow>
 *        <GridColumn span={4}>
 *          <p>First Col</p>
 *          Lorem ipsum dolor ....
 *        </GridColumn>
 *        <GridColumn span={8}>
 *          <p>Second Col</p>
 *          Lorem ipsum dolor ...
 *        </GridColumn>
 *     </GridRow>
 *   </Grid>
 * )}
 * ```
 *
 * See also:
 * [GridColumn](/components/gridcolumn)
 */


function Grid(_ref) {
  var children = _ref.children;
  return _react.default.createElement(GridWrapper, {
    className: "weave-grid"
  }, children);
}