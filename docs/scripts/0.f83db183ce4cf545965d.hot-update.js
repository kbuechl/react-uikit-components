webpackHotUpdate(0,{

/***/ 619:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(170);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ufunc = __webpack_require__(171);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _cuid = __webpack_require__(394);\n\nvar _cuid2 = _interopRequireDefault(_cuid);\n\nvar _posOffset = __webpack_require__(620);\n\nvar _posOffset2 = _interopRequireDefault(_posOffset);\n\nvar _dropTrigger = __webpack_require__(798);\n\nvar _dropTrigger2 = _interopRequireDefault(_dropTrigger);\n\nvar _reactUikitBase = __webpack_require__(248);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _reactUikitButton = __webpack_require__(411);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Dropdown = (function (_React$Component) {\n  _inherits(Dropdown, _React$Component);\n\n  function Dropdown(props) {\n    _classCallCheck(this, Dropdown);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));\n\n    _this.state = {\n      opened: false\n    };\n\n    _this.dataId = props.kitid || (0, _cuid2.default)();\n\n    return _this;\n  }\n\n  _createClass(Dropdown, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      window.addEventListener('click', function () {\n        return _this2.handleListener();\n      }, true);\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      var _this3 = this;\n\n      window.removeEventListener('click', function () {\n        return _this3.handleListener();\n      }, false);\n    }\n  }, {\n    key: 'handleListener',\n    value: function handleListener(e) {\n      if (this.state.opened) {\n        var dropbody = _reactUikitBase2.default.helpers.queryData('dropdown-' + this.dataId);\n        dropbody.style.display = 'none';\n        this.setState({ opened: false });\n      }\n    }\n  }, {\n    key: 'handleTriggerClick',\n    value: function handleTriggerClick(e) {\n      var _this4 = this;\n\n      e.preventDefault();\n      var dropbody = _reactUikitBase2.default.helpers.queryData('dropdown-' + this.dataId);\n\n      dropbody.style.display = 'block';\n      dropbody.style.visibility = 'hidden';\n\n      var props = this.props;\n      var trigger = e.currentTarget;\n      var elementOffset = _posOffset2.default.offset(trigger, dropbody)(props.pos);\n\n      if (props.justify) {\n        var justify = _reactUikitBase2.default.helpers.queryData(props.justify);\n\n        dropbody.style.width = _posOffset2.default.dim(justify).width + 'px';\n      }\n\n      dropbody.style.top = elementOffset.top + 'px';\n      dropbody.style.left = elementOffset.left + 'px';\n\n      var animateIn = function animateIn() {\n        _this4.setState({ opened: true });\n        props.trigger.animate.in(dropbody);\n      };\n\n      var animateOut = function animateOut() {\n        _this4.setState({ opened: false });\n        props.trigger.animate.out(dropbody);\n      };\n\n      _ufunc2.default.either(animateIn, animateOut)(!this.state.opened);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this5 = this;\n\n      var props = this.props;\n      var kitid = _ufunc2.default.either(props.kitid, this.dataId)(props.kitid);\n\n      // CSS classes\n      var type = {\n        button: 'uk-button-dropdown',\n        dropdown: null,\n        grid: 'uk-grid uk-dropdown-grid',\n        navbar: 'uk-parent'\n      };\n\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses([type[props.type] || type['dropdown'], props.classes, props.className]);\n\n      var cssDropClassNames = _reactUikitBase2.default.helpers.cleanClasses([!props.blank ? 'uk-dropdown' : 'uk-dropdown-blank', props.small ? 'uk-dropdown-small' : null, props.type === 'navbar' ? 'uk-dropdown-navbar' : null, props.scrollable ? 'uk-dropdown-scrollable' : null]);\n\n      // Elements\n      var cleanProps = _reactUikitBase2.default.helpers.cleanProps(props, ['type']);\n\n      var attr = {\n        'aria-haspopup': 'true',\n        'aria-expanded': this.state.opened ? 'true' : 'false',\n        'data-kitid': 'dropContainer-' + kitid,\n        'className': cssClassNames\n      };\n\n      var dropbody = _react2.default.createElement('div', {\n        style: props.justify ? { width: _posOffset2.default.dim(this) } : null,\n        'data-kitid': 'dropdown-' + kitid,\n        className: cssDropClassNames\n      }, props.children);\n\n      var trigger = function trigger(mode) {\n        return _react2.default.createElement(_dropTrigger2.default, _extends({}, props.trigger, {\n          type: mode,\n          kitid: kitid,\n          icon: props.icon,\n          onClick: function onClick(e) {\n            return _this5.handleTriggerClick(e);\n          }\n        }));\n      };\n\n      var component = {\n        dropdown: _react2.default.createElement('div', _extends({}, cleanProps, attr), trigger, dropbody),\n\n        'button-group': _react2.default.createElement('div', _extends({}, cleanProps, {\n          className: 'uk-button-group'\n        }), _react2.default.createElement(_reactUikitButton2.default, null, props.children), _react2.default.createElement('div', attr, trigger, dropbody))\n      };\n\n      // Return Component\n      return component[props.type] || component['dropdown'];\n    }\n  }]);\n\n  return Dropdown;\n})(_react2.default.Component);\n\nDropdown.propTypes = {\n  blank: _react2.default.PropTypes.bool,\n  boundary: _react2.default.PropTypes.string,\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  grid: _react2.default.PropTypes.bool,\n  items: _react2.default.PropTypes.array,\n  justify: _react2.default.PropTypes.string,\n  kitid: _react2.default.PropTypes.string,\n  navbar: _react2.default.PropTypes.bool,\n  parent: _react2.default.PropTypes.bool,\n  pos: _react2.default.PropTypes.string,\n  scrollable: _react2.default.PropTypes.bool,\n  small: _react2.default.PropTypes.bool,\n  type: _react2.default.PropTypes.oneOf(['button', 'button-group', 'dropdown', 'grid', 'nav'])\n};\n;\n\nexports.default = _reactUikitBase2.default.base(Dropdown);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvZHJvcGRvd24uanM/ZWE1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBRSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBRSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxV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ekMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDdkMsUUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDdEMsUUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDdEMsS0FBRyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDckMsWUFBVSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDMUMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDckMsTUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztDQUM3RixDQUFDO0FBQ0YsQ0FBQzs7QUFFRCxPQUFPLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDIiwiZmlsZSI6IjYxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdWZ1bmMgPSByZXF1aXJlKCd1ZnVuYycpO1xuXG52YXIgX3VmdW5jMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VmdW5jKTtcblxudmFyIF9jdWlkID0gcmVxdWlyZSgnY3VpZCcpO1xuXG52YXIgX2N1aWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3VpZCk7XG5cbnZhciBfcG9zT2Zmc2V0ID0gcmVxdWlyZSgnLi9wb3NPZmZzZXQnKTtcblxudmFyIF9wb3NPZmZzZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zT2Zmc2V0KTtcblxudmFyIF9kcm9wVHJpZ2dlciA9IHJlcXVpcmUoJy4vZHJvcFRyaWdnZXInKTtcblxudmFyIF9kcm9wVHJpZ2dlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kcm9wVHJpZ2dlcik7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UgPSByZXF1aXJlKCdyZWFjdC11aWtpdC1iYXNlJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEJhc2UpO1xuXG52YXIgX3JlYWN0VWlraXRCdXR0b24gPSByZXF1aXJlKCdyZWFjdC11aWtpdC1idXR0b24nKTtcblxudmFyIF9yZWFjdFVpa2l0QnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VWlraXRCdXR0b24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBEcm9wZG93biA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRHJvcGRvd24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyb3Bkb3duKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihEcm9wZG93bikuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIF90aGlzLmRhdGFJZCA9IHByb3BzLmtpdGlkIHx8ICgwLCBfY3VpZDIuZGVmYXVsdCkoKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEcm9wZG93biwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5oYW5kbGVMaXN0ZW5lcigpO1xuICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczMuaGFuZGxlTGlzdGVuZXIoKTtcbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUxpc3RlbmVyKGUpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLm9wZW5lZCkge1xuICAgICAgICB2YXIgZHJvcGJvZHkgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5xdWVyeURhdGEoJ2Ryb3Bkb3duLScgKyB0aGlzLmRhdGFJZCk7XG4gICAgICAgIGRyb3Bib2R5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZVRyaWdnZXJDbGljaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRyaWdnZXJDbGljayhlKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIGRyb3Bib2R5ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMucXVlcnlEYXRhKCdkcm9wZG93bi0nICsgdGhpcy5kYXRhSWQpO1xuXG4gICAgICBkcm9wYm9keS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGRyb3Bib2R5LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciB0cmlnZ2VyID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgdmFyIGVsZW1lbnRPZmZzZXQgPSBfcG9zT2Zmc2V0Mi5kZWZhdWx0Lm9mZnNldCh0cmlnZ2VyLCBkcm9wYm9keSkocHJvcHMucG9zKTtcblxuICAgICAgaWYgKHByb3BzLmp1c3RpZnkpIHtcbiAgICAgICAgdmFyIGp1c3RpZnkgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5xdWVyeURhdGEocHJvcHMuanVzdGlmeSk7XG5cbiAgICAgICAgZHJvcGJvZHkuc3R5bGUud2lkdGggPSBfcG9zT2Zmc2V0Mi5kZWZhdWx0LmRpbShqdXN0aWZ5KS53aWR0aCArICdweCc7XG4gICAgICB9XG5cbiAgICAgIGRyb3Bib2R5LnN0eWxlLnRvcCA9IGVsZW1lbnRPZmZzZXQudG9wICsgJ3B4JztcbiAgICAgIGRyb3Bib2R5LnN0eWxlLmxlZnQgPSBlbGVtZW50T2Zmc2V0LmxlZnQgKyAncHgnO1xuXG4gICAgICB2YXIgYW5pbWF0ZUluID0gZnVuY3Rpb24gYW5pbWF0ZUluKCkge1xuICAgICAgICBfdGhpczQuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgICAgIHByb3BzLnRyaWdnZXIuYW5pbWF0ZS5pbihkcm9wYm9keSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgYW5pbWF0ZU91dCA9IGZ1bmN0aW9uIGFuaW1hdGVPdXQoKSB7XG4gICAgICAgIF90aGlzNC5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICAgIHByb3BzLnRyaWdnZXIuYW5pbWF0ZS5vdXQoZHJvcGJvZHkpO1xuICAgICAgfTtcblxuICAgICAgX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihhbmltYXRlSW4sIGFuaW1hdGVPdXQpKCF0aGlzLnN0YXRlLm9wZW5lZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIga2l0aWQgPSBfdWZ1bmMyLmRlZmF1bHQuZWl0aGVyKHByb3BzLmtpdGlkLCB0aGlzLmRhdGFJZCkocHJvcHMua2l0aWQpO1xuXG4gICAgICAvLyBDU1MgY2xhc3Nlc1xuICAgICAgdmFyIHR5cGUgPSB7XG4gICAgICAgIGJ1dHRvbjogJ3VrLWJ1dHRvbi1kcm9wZG93bicsXG4gICAgICAgIGRyb3Bkb3duOiBudWxsLFxuICAgICAgICBncmlkOiAndWstZ3JpZCB1ay1kcm9wZG93bi1ncmlkJyxcbiAgICAgICAgbmF2YmFyOiAndWstcGFyZW50J1xuICAgICAgfTtcblxuICAgICAgdmFyIGNzc0NsYXNzTmFtZXMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhbkNsYXNzZXMoW3R5cGVbcHJvcHMudHlwZV0gfHwgdHlwZVsnZHJvcGRvd24nXSwgcHJvcHMuY2xhc3NlcywgcHJvcHMuY2xhc3NOYW1lXSk7XG5cbiAgICAgIHZhciBjc3NEcm9wQ2xhc3NOYW1lcyA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuQ2xhc3NlcyhbIXByb3BzLmJsYW5rID8gJ3VrLWRyb3Bkb3duJyA6ICd1ay1kcm9wZG93bi1ibGFuaycsIHByb3BzLnNtYWxsID8gJ3VrLWRyb3Bkb3duLXNtYWxsJyA6IG51bGwsIHByb3BzLnR5cGUgPT09ICduYXZiYXInID8gJ3VrLWRyb3Bkb3duLW5hdmJhcicgOiBudWxsLCBwcm9wcy5zY3JvbGxhYmxlID8gJ3VrLWRyb3Bkb3duLXNjcm9sbGFibGUnIDogbnVsbF0pO1xuXG4gICAgICAvLyBFbGVtZW50c1xuICAgICAgdmFyIGNsZWFuUHJvcHMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhblByb3BzKHByb3BzLCBbJ3R5cGUnXSk7XG5cbiAgICAgIHZhciBhdHRyID0ge1xuICAgICAgICAnYXJpYS1oYXNwb3B1cCc6ICd0cnVlJyxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiB0aGlzLnN0YXRlLm9wZW5lZCA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgICdkYXRhLWtpdGlkJzogJ2Ryb3BDb250YWluZXItJyArIGtpdGlkLFxuICAgICAgICAnY2xhc3NOYW1lJzogY3NzQ2xhc3NOYW1lc1xuICAgICAgfTtcblxuICAgICAgdmFyIGRyb3Bib2R5ID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgc3R5bGU6IHByb3BzLmp1c3RpZnkgPyB7IHdpZHRoOiBfcG9zT2Zmc2V0Mi5kZWZhdWx0LmRpbSh0aGlzKSB9IDogbnVsbCxcbiAgICAgICAgICAnZGF0YS1raXRpZCc6ICdkcm9wZG93bi0nICsga2l0aWQsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjc3NEcm9wQ2xhc3NOYW1lc1xuICAgICAgICB9LFxuICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICAgKTtcblxuICAgICAgdmFyIHRyaWdnZXIgPSBmdW5jdGlvbiB0cmlnZ2VyKG1vZGUpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9kcm9wVHJpZ2dlcjIuZGVmYXVsdCwgX2V4dGVuZHMoe30sIHByb3BzLnRyaWdnZXIsIHtcbiAgICAgICAgICB0eXBlOiBtb2RlLFxuICAgICAgICAgIGtpdGlkOiBraXRpZCxcbiAgICAgICAgICBpY29uOiBwcm9wcy5pY29uLFxuICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNS5oYW5kbGVUcmlnZ2VyQ2xpY2soZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgY29tcG9uZW50ID0ge1xuICAgICAgICBkcm9wZG93bjogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIGNsZWFuUHJvcHMsIGF0dHIpLFxuICAgICAgICAgIHRyaWdnZXIsXG4gICAgICAgICAgZHJvcGJvZHlcbiAgICAgICAgKSxcblxuICAgICAgICAnYnV0dG9uLWdyb3VwJzogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIGNsZWFuUHJvcHMsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3VrLWJ1dHRvbi1ncm91cCdcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIF9yZWFjdFVpa2l0QnV0dG9uMi5kZWZhdWx0LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgIHRyaWdnZXIsXG4gICAgICAgICAgICBkcm9wYm9keVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfTtcblxuICAgICAgLy8gUmV0dXJuIENvbXBvbmVudFxuICAgICAgcmV0dXJuIGNvbXBvbmVudFtwcm9wcy50eXBlXSB8fCBjb21wb25lbnRbJ2Ryb3Bkb3duJ107XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERyb3Bkb3duO1xufSkoX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkRyb3Bkb3duLnByb3BUeXBlcyA9IHtcbiAgYmxhbms6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgYm91bmRhcnk6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hbnksXG4gIGNsYXNzTmFtZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzZXM6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGdyaWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgaXRlbXM6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGp1c3RpZnk6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBraXRpZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIG5hdmJhcjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBwYXJlbnQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgcG9zOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgc2Nyb2xsYWJsZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBzbWFsbDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICB0eXBlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9uZU9mKFsnYnV0dG9uJywgJ2J1dHRvbi1ncm91cCcsICdkcm9wZG93bicsICdncmlkJywgJ25hdiddKVxufTtcbjtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmJhc2UoRHJvcGRvd24pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtZHJvcGRvd24vbGliL2Ryb3Bkb3duLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})