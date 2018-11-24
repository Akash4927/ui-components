"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _noop2 = _interopRequireDefault(require("lodash/noop"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Dialog__Wrapper",
  componentId: "k4h4pd-0"
})(["z-index:", ";transition:opacity 0.2s ease;align-items:center;position:fixed;display:flex;opacity:0;height:100%;left:-100%;width:100%;top:0;", ";"], function (props) {
  return props.theme.layers.modal;
}, function (props) {
  return props.active && "\n    left: 0;\n    opacity: 1;\n  ";
});

var Overlay = _styledComponents.default.div.withConfig({
  displayName: "Dialog__Overlay",
  componentId: "k4h4pd-1"
})(["background-color:", ";position:absolute;opacity:0.3;height:100%;width:100%;left:0;top:0;backdrop-filter:blur(2px);"], function (props) {
  return props.theme.colors.black;
});

var Window = _styledComponents.default.div.withConfig({
  displayName: "Dialog__Window",
  componentId: "k4h4pd-2"
})(["box-shadow:", ";border-radius:", ";background-color:", ";color:", ";width:", ";margin:0 auto;max-width:768px;padding:15px 20px 20px;position:relative;"], function (props) {
  return props.theme.boxShadow.light;
}, function (props) {
  return props.theme.borderRadius.soft;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.purple800;
}, function (props) {
  return props.width;
});

var Header = _styledComponents.default.div.withConfig({
  displayName: "Dialog__Header",
  componentId: "k4h4pd-3"
})(["display:flex;justify-content:space-between;align-items:center;"]);

var Title = _styledComponents.default.span.withConfig({
  displayName: "Dialog__Title",
  componentId: "k4h4pd-4"
})(["font-size:", ";font-weight:bold;"], function (props) {
  return props.theme.fontSizes.normal;
});

var ButtonClose = _styledComponents.default.button.withConfig({
  displayName: "Dialog__ButtonClose",
  componentId: "k4h4pd-5"
})(["border:0;background:transparent;cursor:pointer;margin-right:-5px;padding:5px;outline:0;&:hover{opacity:0.5;}"]);

var Content = _styledComponents.default.div.withConfig({
  displayName: "Dialog__Content",
  componentId: "k4h4pd-6"
})([""]);

var Actions = _styledComponents.default.div.withConfig({
  displayName: "Dialog__Actions",
  componentId: "k4h4pd-7"
})(["text-align:right;min-height:36px;button{margin-left:10px;}"]);
/**
 * A dialog window
 * ```javascript
 * export defaut function DialogExample({closeHandler, actionClickHandler}) {
 *  return (
 *   <Dialog
 *      active={true}
 *      actions={['Submit', 'Cancel']}
 *      onClose={closeHandler}
 *      onActionClick={actionClickHandler}
 *    >
 *      <p>Here is some content that I would like to display</p>
 *    </Dialog>
 *  );
 * }
 * ```
 *
 * Example with pre-created action elements
 * ```javascript
 * export defaut function DialogExample({someHandlerFunc, otherHandlerFunc, handleClose}) {
 *     const Action1 = () => (
 *      <div onClick={someHandlerFunc}>Action1</div>
 *    );
 *     const Action2 = () => (
 *       <div onClick={otherHandlerFunc}>Action2</div>
 *    );
 *
 *    return (
 *      <Dialog
 *         active={true}
 *         actions={[Action1, Action2]}
 *         onClose={handleClose}
 *       >
 *         <p>This one has custom actions</p>
 *       </Dialog>
 *    );
 * }
 * ```
 */


var Dialog =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Dialog, _PureComponent);

  function Dialog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dialog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (event) {
      if (_this.props.active && event.key === 'Escape') {
        _this.props.onClose(event);
      }
    });

    return _this;
  }

  _createClass(Dialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          hideClose = _this$props.hideClose,
          title = _this$props.title,
          width = _this$props.width,
          actions = _this$props.actions,
          onActionClick = _this$props.onActionClick,
          onClose = _this$props.onClose,
          children = _this$props.children;
      return _react.default.createElement(Wrapper, {
        active: active
      }, _react.default.createElement(Overlay, {
        onClick: onClose
      }), _react.default.createElement(Window, {
        width: width
      }, _react.default.createElement(Header, null, _react.default.createElement(Title, null, title), !hideClose && _react.default.createElement(ButtonClose, {
        text: "",
        onClick: onClose
      }, _react.default.createElement("i", {
        className: "fa fa-times"
      }))), _react.default.createElement(Content, null, active && children), !(0, _isEmpty2.default)(actions) && _react.default.createElement(Actions, null, actions.map(function (Action, index) {
        if (_react.default.isValidElement(Action)) {
          /* eslint-disable react/no-array-index-key */
          return _react.default.cloneElement(Action, {
            key: index
          });
          /* eslint-enable react/no-array-index-key */
        }

        return _react.default.createElement(_Button.default, {
          key: Action,
          text: Action,
          onClick: function onClick() {
            return onActionClick(Action);
          }
        });
      }))));
    }
  }]);

  return Dialog;
}(_react.PureComponent);

Dialog.propTypes = {
  /**
   * Flag to show/hide the dialog
   */
  active: _propTypes.default.bool.isRequired,

  /**
   * The title of the dialog
   */
  title: _propTypes.default.string,

  /**
   * Width of the dialog window (CSS format)
   */
  width: _propTypes.default.string,

  /**
   * An array of options that the user will be able to click.
   * Each item in the array will be rendered as a <Button /> in the dialog window.
   * Items can also be React elements.
   */
  actions: _propTypes.default.array,

  /**
   * Callback that runs when an action is clicked by the user. If the actions
   * If the `actions` prop is an array of strings,
   * this callback will return the action that was clicked.
   */
  onActionClick: _propTypes.default.func,

  /**
   * Callback that will be run when the modal is closed
   */
  onClose: _propTypes.default.func,

  /**
   * Flag to hide the close icon in top right corner
   */
  hideClose: _propTypes.default.bool
};
Dialog.defaultProps = {
  title: '',
  width: '75%',
  actions: [],
  onActionClick: _noop2.default,
  onClose: _noop2.default,
  hideClose: false
};
var _default = Dialog;
exports.default = _default;