webpackHotUpdate(0,{

/***/ 618:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(274);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ufunc = __webpack_require__(170);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _reactUikitBase = __webpack_require__(410);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _cuid = __webpack_require__(393);\n\nvar _cuid2 = _interopRequireDefault(_cuid);\n\nvar _reactUikitTrigger = __webpack_require__(621);\n\nvar _reactUikitTrigger2 = _interopRequireDefault(_reactUikitTrigger);\n\nvar _posOffset = __webpack_require__(619);\n\nvar _posOffset2 = _interopRequireDefault(_posOffset);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar dataId = (0, _cuid2.default)();\n\nvar Dropdown = (function (_React$Component) {\n  _inherits(Dropdown, _React$Component);\n\n  function Dropdown(props) {\n    _classCallCheck(this, Dropdown);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));\n\n    _this.dataId = dataId;\n\n    _this.state = {\n      opened: false\n    };\n    _this.handleListener = handleListener.bind(_this);\n\n    window.addEventListener('click', _this.handleListener, false);\n    return _this;\n  }\n\n  _createClass(Dropdown, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      window.addEventListener('click', function () {\n        return _this2.handleListener();\n      }, false);\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      window.removeEventListener('click', this.handleListener, false);\n    }\n  }, {\n    key: 'handleListener',\n    value: function handleListener() {\n      if (this.state.opened) {\n        var dropbody = _reactUikitBase2.default.helpers.queryData('dropdown-' + dataId);\n        dropbody.style.display = 'none';\n      }\n    }\n  }, {\n    key: 'handleTriggerClick',\n    value: function handleTriggerClick(e) {\n      var _this3 = this;\n\n      e.preventDefault();\n      var dropbody = _reactUikitBase2.default.helpers.queryData('dropdown-' + this.dataId);\n\n      dropbody.style.display = 'block';\n      dropbody.style.visibility = 'hidden';\n\n      var props = this.props;\n      var trigger = e.currentTarget;\n      var elementOffset = _posOffset2.default.offset(trigger, dropbody)(props.pos);\n\n      if (props.justify) {\n        var justify = _reactUikitBase2.default.helpers.queryData(props.justify);\n\n        dropbody.style.width = _posOffset2.default.dim(justify).width + 'px';\n      }\n\n      dropbody.style.top = elementOffset.top + 'px';\n      dropbody.style.left = elementOffset.left + 'px';\n\n      var animateIn = function animateIn() {\n        _this3.setState({ opened: true });\n        props.trigger.animate.in(dropbody);\n      };\n\n      var animateOut = function animateOut() {\n        _this3.setState({ opened: false });\n        props.trigger.animate.out(dropbody);\n      };\n\n      _ufunc2.default.either(animateIn, animateOut)(!this.state.opened);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this4 = this;\n\n      var props = this.props;\n      var kitid = _ufunc2.default.either(props.kitid, this.dataId)(props.kitid);\n\n      // CSS classes\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses([props.grid ? 'uk-grid uk-dropdown-grid' : null, props.classes, props.className]);\n\n      var dropdownClassNames = _reactUikitBase2.default.helpers.cleanClasses([props.blank ? 'uk-dropdown-blank' : 'uk-dropdown', props.navbar ? 'uk-dropdown-navbar' : null, props.scroll ? 'uk-dropdown-scrollable' : null, props.small ? 'uk-dropdown-small' : null]);\n\n      // Elements\n      var dropdown = _react2.default.createElement('div', {\n        style: { width: _posOffset2.default.dim(this) },\n        'data-kitid': 'dropdown-' + kitid,\n        className: dropdownClassNames\n      }, props.children);\n\n      var trigger = _react2.default.createElement(_reactUikitTrigger2.default, _extends({}, props.trigger, {\n        kitid: kitid,\n        onClick: function onClick(e) {\n          return _this4.handleTriggerClick(e);\n        }\n      }));\n\n      var div = _react2.default.createElement('div', {\n        className: cssClassNames,\n        'aria-haspopup': 'true',\n        'aria-expanded': this.state.opened ? 'true' : 'false',\n        'data-kitid': 'dropContainer-' + kitid\n      }, trigger, dropdown);\n\n      var list = _react2.default.createElement('li', {\n        className: cssClassNames,\n        'aria-haspopup': 'true',\n        'aria-expanded': this.state.opened ? 'true' : 'false',\n        'data-kitid': 'dropContainer-' + kitid\n      }, trigger, dropdown);\n\n      // Return Component\n      var component = _ufunc2.default.either(list, div);\n      return component(props.list || props.navbar);\n    }\n  }]);\n\n  return Dropdown;\n})(_react2.default.Component);\n\nDropdown.propTypes = {\n  blank: _react2.default.PropTypes.bool,\n  boundary: _react2.default.PropTypes.string,\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  context: _react2.default.PropTypes.oneOf(['dropdown', 'offcanvas', 'side', 'sub']),\n  grid: _react2.default.PropTypes.bool,\n  items: _react2.default.PropTypes.array,\n  justify: _react2.default.PropTypes.string,\n  kitid: _react2.default.PropTypes.string,\n  list: _react2.default.PropTypes.bool,\n  navbar: _react2.default.PropTypes.bool,\n  parent: _react2.default.PropTypes.bool,\n  pos: _react2.default.PropTypes.string,\n  scroll: _react2.default.PropTypes.bool,\n  small: _react2.default.PropTypes.bool\n};\n;\n\nexports.default = _reactUikitBase2.default.base(Dropdown);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvZHJvcGRvd24uanM/ZWE1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBRSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBRSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxV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LFVBQVEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQzFDLFVBQVEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHO0FBQ3ZDLFdBQVMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQzNDLFNBQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLO0FBQ3hDLFNBQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNsRixNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUNwQyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSztBQUN0QyxTQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN6QyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN2QyxNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUNwQyxRQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUN0QyxRQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUN0QyxLQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUNyQyxRQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUN0QyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtDQUN0QyxDQUFDO0FBQ0YsQ0FBQzs7QUFFRCxPQUFPLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDIiwiZmlsZSI6IjYxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdWZ1bmMgPSByZXF1aXJlKCd1ZnVuYycpO1xuXG52YXIgX3VmdW5jMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VmdW5jKTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZSA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWJhc2UnKTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0QmFzZSk7XG5cbnZhciBfY3VpZCA9IHJlcXVpcmUoJ2N1aWQnKTtcblxudmFyIF9jdWlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2N1aWQpO1xuXG52YXIgX3JlYWN0VWlraXRUcmlnZ2VyID0gcmVxdWlyZSgnLi4vLi4vcmVhY3QtdWlraXQtdHJpZ2dlcicpO1xuXG52YXIgX3JlYWN0VWlraXRUcmlnZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VWlraXRUcmlnZ2VyKTtcblxudmFyIF9wb3NPZmZzZXQgPSByZXF1aXJlKCcuL3Bvc09mZnNldCcpO1xuXG52YXIgX3Bvc09mZnNldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NPZmZzZXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBkYXRhSWQgPSAoMCwgX2N1aWQyLmRlZmF1bHQpKCk7XG5cbnZhciBEcm9wZG93biA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRHJvcGRvd24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyb3Bkb3duKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihEcm9wZG93bikuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuZGF0YUlkID0gZGF0YUlkO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfTtcbiAgICBfdGhpcy5oYW5kbGVMaXN0ZW5lciA9IGhhbmRsZUxpc3RlbmVyLmJpbmQoX3RoaXMpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXMuaGFuZGxlTGlzdGVuZXIsIGZhbHNlKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRHJvcGRvd24sIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuaGFuZGxlTGlzdGVuZXIoKTtcbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVMaXN0ZW5lciwgZmFsc2UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZUxpc3RlbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTGlzdGVuZXIoKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuZWQpIHtcbiAgICAgICAgdmFyIGRyb3Bib2R5ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMucXVlcnlEYXRhKCdkcm9wZG93bi0nICsgZGF0YUlkKTtcbiAgICAgICAgZHJvcGJvZHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVUcmlnZ2VyQ2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUcmlnZ2VyQ2xpY2soZSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBkcm9wYm9keSA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLnF1ZXJ5RGF0YSgnZHJvcGRvd24tJyArIHRoaXMuZGF0YUlkKTtcblxuICAgICAgZHJvcGJvZHkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBkcm9wYm9keS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgdHJpZ2dlciA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIHZhciBlbGVtZW50T2Zmc2V0ID0gX3Bvc09mZnNldDIuZGVmYXVsdC5vZmZzZXQodHJpZ2dlciwgZHJvcGJvZHkpKHByb3BzLnBvcyk7XG5cbiAgICAgIGlmIChwcm9wcy5qdXN0aWZ5KSB7XG4gICAgICAgIHZhciBqdXN0aWZ5ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMucXVlcnlEYXRhKHByb3BzLmp1c3RpZnkpO1xuXG4gICAgICAgIGRyb3Bib2R5LnN0eWxlLndpZHRoID0gX3Bvc09mZnNldDIuZGVmYXVsdC5kaW0oanVzdGlmeSkud2lkdGggKyAncHgnO1xuICAgICAgfVxuXG4gICAgICBkcm9wYm9keS5zdHlsZS50b3AgPSBlbGVtZW50T2Zmc2V0LnRvcCArICdweCc7XG4gICAgICBkcm9wYm9keS5zdHlsZS5sZWZ0ID0gZWxlbWVudE9mZnNldC5sZWZ0ICsgJ3B4JztcblxuICAgICAgdmFyIGFuaW1hdGVJbiA9IGZ1bmN0aW9uIGFuaW1hdGVJbigpIHtcbiAgICAgICAgX3RoaXMzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgICAgICBwcm9wcy50cmlnZ2VyLmFuaW1hdGUuaW4oZHJvcGJvZHkpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGFuaW1hdGVPdXQgPSBmdW5jdGlvbiBhbmltYXRlT3V0KCkge1xuICAgICAgICBfdGhpczMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgICBwcm9wcy50cmlnZ2VyLmFuaW1hdGUub3V0KGRyb3Bib2R5KTtcbiAgICAgIH07XG5cbiAgICAgIF91ZnVuYzIuZGVmYXVsdC5laXRoZXIoYW5pbWF0ZUluLCBhbmltYXRlT3V0KSghdGhpcy5zdGF0ZS5vcGVuZWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGtpdGlkID0gX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihwcm9wcy5raXRpZCwgdGhpcy5kYXRhSWQpKHByb3BzLmtpdGlkKTtcblxuICAgICAgLy8gQ1NTIGNsYXNzZXNcbiAgICAgIHZhciBjc3NDbGFzc05hbWVzID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5DbGFzc2VzKFtwcm9wcy5ncmlkID8gJ3VrLWdyaWQgdWstZHJvcGRvd24tZ3JpZCcgOiBudWxsLCBwcm9wcy5jbGFzc2VzLCBwcm9wcy5jbGFzc05hbWVdKTtcblxuICAgICAgdmFyIGRyb3Bkb3duQ2xhc3NOYW1lcyA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuQ2xhc3NlcyhbcHJvcHMuYmxhbmsgPyAndWstZHJvcGRvd24tYmxhbmsnIDogJ3VrLWRyb3Bkb3duJywgcHJvcHMubmF2YmFyID8gJ3VrLWRyb3Bkb3duLW5hdmJhcicgOiBudWxsLCBwcm9wcy5zY3JvbGwgPyAndWstZHJvcGRvd24tc2Nyb2xsYWJsZScgOiBudWxsLCBwcm9wcy5zbWFsbCA/ICd1ay1kcm9wZG93bi1zbWFsbCcgOiBudWxsXSk7XG5cbiAgICAgIC8vIEVsZW1lbnRzXG4gICAgICB2YXIgZHJvcGRvd24gPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBzdHlsZTogeyB3aWR0aDogX3Bvc09mZnNldDIuZGVmYXVsdC5kaW0odGhpcykgfSxcbiAgICAgICAgICAnZGF0YS1raXRpZCc6ICdkcm9wZG93bi0nICsga2l0aWQsXG4gICAgICAgICAgY2xhc3NOYW1lOiBkcm9wZG93bkNsYXNzTmFtZXNcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG5cbiAgICAgIHZhciB0cmlnZ2VyID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0VWlraXRUcmlnZ2VyMi5kZWZhdWx0LCBfZXh0ZW5kcyh7fSwgcHJvcHMudHJpZ2dlciwge1xuICAgICAgICBraXRpZDoga2l0aWQsXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczQuaGFuZGxlVHJpZ2dlckNsaWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG5cbiAgICAgIHZhciBkaXYgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNzc0NsYXNzTmFtZXMsXG4gICAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZScsXG4gICAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiB0aGlzLnN0YXRlLm9wZW5lZCA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgICAgJ2RhdGEta2l0aWQnOiAnZHJvcENvbnRhaW5lci0nICsga2l0aWRcbiAgICAgICAgfSxcbiAgICAgICAgdHJpZ2dlcixcbiAgICAgICAgZHJvcGRvd25cbiAgICAgICk7XG5cbiAgICAgIHZhciBsaXN0ID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdsaScsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNzc0NsYXNzTmFtZXMsXG4gICAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZScsXG4gICAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiB0aGlzLnN0YXRlLm9wZW5lZCA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgICAgJ2RhdGEta2l0aWQnOiAnZHJvcENvbnRhaW5lci0nICsga2l0aWRcbiAgICAgICAgfSxcbiAgICAgICAgdHJpZ2dlcixcbiAgICAgICAgZHJvcGRvd25cbiAgICAgICk7XG5cbiAgICAgIC8vIFJldHVybiBDb21wb25lbnRcbiAgICAgIHZhciBjb21wb25lbnQgPSBfdWZ1bmMyLmRlZmF1bHQuZWl0aGVyKGxpc3QsIGRpdik7XG4gICAgICByZXR1cm4gY29tcG9uZW50KHByb3BzLmxpc3QgfHwgcHJvcHMubmF2YmFyKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuRHJvcGRvd24ucHJvcFR5cGVzID0ge1xuICBibGFuazogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBib3VuZGFyeTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFueSxcbiAgY2xhc3NOYW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NlczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hcnJheSxcbiAgY29udGV4dDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ2Ryb3Bkb3duJywgJ29mZmNhbnZhcycsICdzaWRlJywgJ3N1YiddKSxcbiAgZ3JpZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBpdGVtczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hcnJheSxcbiAganVzdGlmeTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGtpdGlkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgbGlzdDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBuYXZiYXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgcGFyZW50OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIHBvczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHNjcm9sbDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBzbWFsbDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sXG59O1xuO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuYmFzZShEcm9wZG93bik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvZHJvcGRvd24uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})