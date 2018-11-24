"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _partialRight2 = _interopRequireDefault(require("lodash/partialRight"));

var _first2 = _interopRequireDefault(require("lodash/first"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _noop2 = _interopRequireDefault(require("lodash/noop"));

var _orderBy2 = _interopRequireDefault(require("lodash/orderBy"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _Header = _interopRequireDefault(require("./_Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var borderColor = function borderColor(props) {
  return (0, _polished.transparentize)(0.6, props.theme.colors.purple100);
};

var Table = _styledComponents.default.table.withConfig({
  displayName: "DataTable__Table",
  componentId: "sc-1atv02p-0"
})(["border-collapse:collapse;width:100%;table-layout:fixed;td{padding:10px 8px;vertical-align:top;border-left:1px solid ", ";}thead td{border:0;font-weight:bold;}thead,tbody{border-bottom:1px solid ", ";> tr td:first-child{border-left:0;}}", ";"], borderColor, borderColor, function (props) {
  return props.flush && "\n    tr td:first-child {\n      padding-left: 0;\n    }\n  ";
}); // Split this into a helper to keep the `doSort` method consistent with the initial state `sort`.


var sort = function sort(data, key, order) {
  return (0, _orderBy2.default)(data, key, [order]);
};
/**
 *  A sortable table for showing large data sets.
 *  ```javascript
 *
 *  const data = [
 *  {
 *    name: 'Bob',
 *    email: 'a@weave.works',
 *  },
 *  {
 *    name: 'Albert',
 *    email: 'b@weave.works',
 *  },
 * ];
 *
 *  React.render(
 *   <DataTable
 *    data={data}
 *    columns={[{ value: 'name', label: 'Name' }, { value: 'email', label: 'Email' }]}
 *   >
 *    {rows =>
 *      map(rows, r => (
 *        <tr key={r.email}>
 *          <td>{r.name}</td>
 *          <td>{r.email}</td>
 *        </tr>
 *      ))
 *    }
 *   </DataTable>
 * )
 * ```
 *
 * #### Nested table
 * ```javascript
 * const nesteData = [
 *   {
 *     workloadId: 'default:deployment/myworkload',
 *     containers: [
 *       { name: 'nginx', behind: '4' },
 *       { name: 'redis', behind: '1' },
 *       { name: 'envoy', behind: '2' },
 *     ],
 *   },
 *   {
 *     workloadId: 'default:deployment/helloworld',
 *     containers: [{ name: 'helloworld', behind: '2' }],
 *   },
 *  ];
 *
 *  <DataTable
 *   nested
 *   data={nesteData}
 *   sortBy="workloadId"
 *   sortOrder="asc"
 *   columns={[
 *     { value: 'workloadId', label: 'Workload' },
 *     { value: 'containers', label: 'Containers' },
 *     { value: 'behind', label: 'Behind' },
 *   ]}
 *   sortOverrides={{ behind: row => max(map(row.containers, c => c.behind)) }}
 * >
 *   {rows =>
 *     map(rows, r => (
 *       <tbody key={r.workloadId}>
 *         {map(r.containers, (c, i) => (
 *           <tr key={c.name}>
 *             {i === 0 && <td rowSpan={r.containers.length}>{r.workloadId}</td>}
 *             <td>{c.name}</td>
 *             <td>{c.behind}</td>
 *           </tr>
 *         ))}
 *       </tbody>
 *     ))
 *   }
 * </DataTable>
 * ```
 *
 */


var DataTable =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(DataTable, _React$PureComponent);

  function DataTable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DataTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DataTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      sortField: _this.props.sortBy || (0, _get2.default)((0, _first2.default)(_this.props.columns), 'value'),
      sortOrder: _this.props.sortOrder,
      sortedData: sort(_this.props.data, _this.props.sortBy, _this.props.sortOrder)
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "doSort", function (data, sortField) {
      var sortOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'asc';
      var sortOverrides = _this.props.sortOverrides;

      _this.setState({
        sortField: sortField,
        sortOrder: sortOrder,
        sortedData: // User overrides if specified, else do the default sort
        sortOverrides && sortOverrides[sortField] ? (0, _orderBy2.default)(data, (0, _partialRight2.default)(sortOverrides[sortField], sortOrder), sortOrder) : sort(data, sortField, sortOrder)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleHeaderClick", function (ev, columnValue) {
      var order;
      var field = _this.state.sortField;

      var column = _this.props.columns.find(function (c) {
        return c.value === columnValue;
      });

      var isCurrentColumn = columnValue === _this.state.sortField;

      if (isCurrentColumn) {
        // If we are already sorting by this column, change the order.
        order = _this.state.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        // Else, order by the new column, ascending
        order = column.initialSortOrder || 'asc';
        field = columnValue;
      }

      _this.doSort(_this.state.sortedData, field, order);

      _this.props.onSort(field, order);
    });

    return _this;
  }

  _createClass(DataTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.doSort(this.state.sortedData, this.state.sortField, this.state.sortOrder);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$state = this.state,
          sortOrder = _this$state.sortOrder,
          sortField = _this$state.sortField;
      var field = sortField;
      var order = sortOrder;

      if (nextProps !== this.props) {
        // Only translate if props have *actually* changed.
        if (nextProps.sortBy !== this.props.sortBy || nextProps.sortOrder !== this.props.sortOrder) {
          field = nextProps.sortBy;
          order = nextProps.sortOrder;
        }

        this.doSort(nextProps.data, field, order);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          columns = _this$props.columns,
          nested = _this$props.nested,
          extraHeaders = _this$props.extraHeaders,
          flush = _this$props.flush;
      var _this$state2 = this.state,
          sortedData = _this$state2.sortedData,
          sortOrder = _this$state2.sortOrder,
          sortField = _this$state2.sortField;
      return _react.default.createElement(Table, {
        className: className,
        flush: flush
      }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, (0, _map2.default)(columns, function (_ref) {
        var value = _ref.value,
            label = _ref.label,
            sortable = _ref.sortable,
            width = _ref.width,
            element = _ref.element;
        return _react.default.createElement(_Header.default, {
          sortable: sortable,
          order: sortField === value ? sortOrder : null,
          value: value,
          onClick: _this2.handleHeaderClick,
          key: value,
          width: width,
          title: label
        }, element || label);
      }), (0, _map2.default)(extraHeaders, function (h, i) {
        return _react.default.createElement("th", {
          key: i
        }, h);
      }))), nested ? children(sortedData) : _react.default.createElement("tbody", null, children(sortedData)));
    }
  }]);

  return DataTable;
}(_react.default.PureComponent);

var columnPropType = _propTypes.default.shape({
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  label: _propTypes.default.string,
  sortable: _propTypes.default.bool,
  initialSortOrder: _propTypes.default.oneOf(['asc', 'desc']),
  width: _propTypes.default.string,
  element: _propTypes.default.element
});

DataTable.propTypes = {
  /**
   * The rows that will be sorted by clicking on the headers.
   * There must be a key in your row object that matches the column `value`.
   */
  data: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,

  /**
   * Flush will align the first column with the edge of the table, instead of
   * having left padding
   */
  flush: _propTypes.default.bool,

  /**
   * A render-prop function that will be passed the sorted rows for the table.
   */
  children: _propTypes.default.func.isRequired,

  /**
   * An array of objects that will be used as columns.
   * `value` must map to a key in your data in order for sorting to work.
   * If an `element` key is specified, that element will be used instead of `label`.
   */
  columns: _propTypes.default.arrayOf(columnPropType).isRequired,

  /**
   * The value by which to sort the rows passed to the `data` prop.
   */
  sortBy: _propTypes.default.string,

  /**
   * Whether to sort by 'asc' or 'desc' on initial load.
   * Modifying this prop will override the user's currently selected sort order.
   */
  sortOrder: _propTypes.default.oneOf(['asc', 'desc']),

  /**
   * A map of customer sorting functions that will be used when a column is sorted.
   * They keys of this object should match the colum `values` that to which you wish to
   * provide customer sorting logic.
   *
   */
  sortOverrides: _propTypes.default.object,

  /**
   * If true, a wrapping `<tbody />` element will NOT be rendered.
   * All child rows of `nested` tables should be <tbody /> tags
   */
  nested: _propTypes.default.bool,

  /**
   * Extra elements that will be added to the table headers.
   * These columns will NOT be sortable.
   */
  extraHeaders: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Optional callback triggered when a header is clicked.
   */
  onSort: _propTypes.default.func
};
DataTable.defaultProps = {
  sortOrder: 'asc',
  sortOverrides: {},
  nested: false,
  extraHeaders: [],
  sortBy: '',
  onSort: _noop2.default,
  flush: false
};
var _default = DataTable;
exports.default = _default;