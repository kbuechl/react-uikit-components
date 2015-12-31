webpackHotUpdate(0,{

/***/ 618:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(274);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ufunc = __webpack_require__(170);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _reactUikitBase = __webpack_require__(410);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _cuid = __webpack_require__(393);\n\nvar _cuid2 = _interopRequireDefault(_cuid);\n\nvar _reactUikitTrigger = __webpack_require__(621);\n\nvar _reactUikitTrigger2 = _interopRequireDefault(_reactUikitTrigger);\n\nvar _posOffset = __webpack_require__(619);\n\nvar _posOffset2 = _interopRequireDefault(_posOffset);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Dropdown = (function (_React$Component) {\n  _inherits(Dropdown, _React$Component);\n\n  function Dropdown(props) {\n    _classCallCheck(this, Dropdown);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));\n\n    _this.dataId = (0, _cuid2.default)();\n\n    _this.state = {\n      opened: false\n    };\n    return _this;\n  }\n\n  _createClass(Dropdown, [{\n    key: 'handleTriggerClick',\n    value: function handleTriggerClick(e) {\n      var _this2 = this;\n\n      e.preventDefault();\n      var dropbody = _reactUikitBase2.default.helpers.queryData('dropdown-' + this.dataId);\n\n      dropbody.style.display = 'block';\n      dropbody.style.visibility = 'hidden';\n\n      var props = this.props;\n      var trigger = e.currentTarget;\n      var elementOffset = _posOffset2.default.offset(trigger, dropbody)(props.pos);\n\n      if (props.justify) {\n        var justify = _reactUikitBase2.default.helpers.queryData(props.justify);\n\n        dropbody.style.width = _posOffset2.default.dim(justify).width;\n        console.dir(_posOffset2.default.dim(justify).width);\n      }\n\n      dropbody.style.top = elementOffset.top + 'px';\n      dropbody.style.left = elementOffset.left + 'px';\n\n      var animateIn = function animateIn() {\n        _this2.setState({ opened: true });\n        props.trigger.animate.in(dropbody);\n      };\n\n      var animateOut = function animateOut() {\n        _this2.setState({ opened: false });\n        props.trigger.animate.out(dropbody);\n      };\n\n      _ufunc2.default.either(animateIn, animateOut)(!this.state.opened);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var props = this.props;\n      var kitid = _ufunc2.default.either(props.kitid, this.dataId)(props.kitid);\n\n      // CSS classes\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses([props.classes, props.className]);\n\n      // Elements\n\n      // Return Component\n      return _react2.default.createElement('div', {\n        className: cssClassNames,\n        'aria-haspopup': 'true',\n        'aria-expanded': this.state.opened ? 'true' : 'false',\n        'data-kitid': 'dropContainer-' + kitid\n      }, _react2.default.createElement(_reactUikitTrigger2.default, _extends({}, props.trigger, {\n        kitid: kitid,\n        onClick: function onClick(e) {\n          return _this3.handleTriggerClick(e);\n        }\n      })), _react2.default.createElement('div', {\n        style: { width: _posOffset2.default.dim(this) },\n        'data-kitid': 'dropdown-' + kitid,\n        className: 'uk-dropdown'\n      }, props.children));\n    }\n  }]);\n\n  return Dropdown;\n})(_react2.default.Component);\n\nDropdown.propTypes = {\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  context: _react2.default.PropTypes.oneOf(['dropdown', 'offcanvas', 'side', 'sub']),\n  items: _react2.default.PropTypes.array,\n  kitid: _react2.default.PropTypes.string,\n  parent: _react2.default.PropTypes.bool,\n  pos: _react2.default.PropTypes.string,\n  type: _react2.default.PropTypes.oneOf(['bar', 'dropdown', 'offcanvas', 'side', 'sub', 'thumbnail'])\n};\n;\n\nexports.default = _reactUikitBase2.default.base(Dropdown);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvZHJvcGRvd24uanM/ZWE1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBRSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBRSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxV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QztDQUNwRyxDQUFDO0FBQ0YsQ0FBQzs7QUFFRCxPQUFPLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDIiwiZmlsZSI6IjYxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdWZ1bmMgPSByZXF1aXJlKCd1ZnVuYycpO1xuXG52YXIgX3VmdW5jMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VmdW5jKTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZSA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWJhc2UnKTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0QmFzZSk7XG5cbnZhciBfY3VpZCA9IHJlcXVpcmUoJ2N1aWQnKTtcblxudmFyIF9jdWlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2N1aWQpO1xuXG52YXIgX3JlYWN0VWlraXRUcmlnZ2VyID0gcmVxdWlyZSgnLi4vLi4vcmVhY3QtdWlraXQtdHJpZ2dlcicpO1xuXG52YXIgX3JlYWN0VWlraXRUcmlnZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VWlraXRUcmlnZ2VyKTtcblxudmFyIF9wb3NPZmZzZXQgPSByZXF1aXJlKCcuL3Bvc09mZnNldCcpO1xuXG52YXIgX3Bvc09mZnNldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NPZmZzZXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBEcm9wZG93biA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRHJvcGRvd24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyb3Bkb3duKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihEcm9wZG93bikuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuZGF0YUlkID0gKDAsIF9jdWlkMi5kZWZhdWx0KSgpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRHJvcGRvd24sIFt7XG4gICAga2V5OiAnaGFuZGxlVHJpZ2dlckNsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVHJpZ2dlckNsaWNrKGUpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgZHJvcGJvZHkgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5xdWVyeURhdGEoJ2Ryb3Bkb3duLScgKyB0aGlzLmRhdGFJZCk7XG5cbiAgICAgIGRyb3Bib2R5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgZHJvcGJvZHkuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHRyaWdnZXIgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICB2YXIgZWxlbWVudE9mZnNldCA9IF9wb3NPZmZzZXQyLmRlZmF1bHQub2Zmc2V0KHRyaWdnZXIsIGRyb3Bib2R5KShwcm9wcy5wb3MpO1xuXG4gICAgICBpZiAocHJvcHMuanVzdGlmeSkge1xuICAgICAgICB2YXIganVzdGlmeSA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLnF1ZXJ5RGF0YShwcm9wcy5qdXN0aWZ5KTtcblxuICAgICAgICBkcm9wYm9keS5zdHlsZS53aWR0aCA9IF9wb3NPZmZzZXQyLmRlZmF1bHQuZGltKGp1c3RpZnkpLndpZHRoO1xuICAgICAgICBjb25zb2xlLmRpcihfcG9zT2Zmc2V0Mi5kZWZhdWx0LmRpbShqdXN0aWZ5KS53aWR0aCk7XG4gICAgICB9XG5cbiAgICAgIGRyb3Bib2R5LnN0eWxlLnRvcCA9IGVsZW1lbnRPZmZzZXQudG9wICsgJ3B4JztcbiAgICAgIGRyb3Bib2R5LnN0eWxlLmxlZnQgPSBlbGVtZW50T2Zmc2V0LmxlZnQgKyAncHgnO1xuXG4gICAgICB2YXIgYW5pbWF0ZUluID0gZnVuY3Rpb24gYW5pbWF0ZUluKCkge1xuICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgICAgIHByb3BzLnRyaWdnZXIuYW5pbWF0ZS5pbihkcm9wYm9keSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgYW5pbWF0ZU91dCA9IGZ1bmN0aW9uIGFuaW1hdGVPdXQoKSB7XG4gICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICAgIHByb3BzLnRyaWdnZXIuYW5pbWF0ZS5vdXQoZHJvcGJvZHkpO1xuICAgICAgfTtcblxuICAgICAgX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihhbmltYXRlSW4sIGFuaW1hdGVPdXQpKCF0aGlzLnN0YXRlLm9wZW5lZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIga2l0aWQgPSBfdWZ1bmMyLmRlZmF1bHQuZWl0aGVyKHByb3BzLmtpdGlkLCB0aGlzLmRhdGFJZCkocHJvcHMua2l0aWQpO1xuXG4gICAgICAvLyBDU1MgY2xhc3Nlc1xuICAgICAgdmFyIGNzc0NsYXNzTmFtZXMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhbkNsYXNzZXMoW3Byb3BzLmNsYXNzZXMsIHByb3BzLmNsYXNzTmFtZV0pO1xuXG4gICAgICAvLyBFbGVtZW50c1xuXG4gICAgICAvLyBSZXR1cm4gQ29tcG9uZW50XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjc3NDbGFzc05hbWVzLFxuICAgICAgICAgICdhcmlhLWhhc3BvcHVwJzogJ3RydWUnLFxuICAgICAgICAgICdhcmlhLWV4cGFuZGVkJzogdGhpcy5zdGF0ZS5vcGVuZWQgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICAgICdkYXRhLWtpdGlkJzogJ2Ryb3BDb250YWluZXItJyArIGtpdGlkXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdFVpa2l0VHJpZ2dlcjIuZGVmYXVsdCwgX2V4dGVuZHMoe30sIHByb3BzLnRyaWdnZXIsIHtcbiAgICAgICAgICBraXRpZDoga2l0aWQsXG4gICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLmhhbmRsZVRyaWdnZXJDbGljayhlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IF9wb3NPZmZzZXQyLmRlZmF1bHQuZGltKHRoaXMpIH0sXG4gICAgICAgICAgICAnZGF0YS1raXRpZCc6ICdkcm9wZG93bi0nICsga2l0aWQsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd1ay1kcm9wZG93bidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERyb3Bkb3duO1xufSkoX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkRyb3Bkb3duLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYW55LFxuICBjbGFzc05hbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc2VzOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFycmF5LFxuICBjb250ZXh0OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9uZU9mKFsnZHJvcGRvd24nLCAnb2ZmY2FudmFzJywgJ3NpZGUnLCAnc3ViJ10pLFxuICBpdGVtczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hcnJheSxcbiAga2l0aWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBwYXJlbnQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgcG9zOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ2JhcicsICdkcm9wZG93bicsICdvZmZjYW52YXMnLCAnc2lkZScsICdzdWInLCAndGh1bWJuYWlsJ10pXG59O1xuO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuYmFzZShEcm9wZG93bik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvZHJvcGRvd24uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})