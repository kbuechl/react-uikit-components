webpackHotUpdate(0,{

/***/ 619:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(170);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ufunc = __webpack_require__(171);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _cuid = __webpack_require__(394);\n\nvar _cuid2 = _interopRequireDefault(_cuid);\n\nvar _posOffset = __webpack_require__(620);\n\nvar _posOffset2 = _interopRequireDefault(_posOffset);\n\nvar _reactUikitTrigger = __webpack_require__(622);\n\nvar _reactUikitTrigger2 = _interopRequireDefault(_reactUikitTrigger);\n\nvar _reactUikitBase = __webpack_require__(248);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _reactUikitButton = __webpack_require__(411);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Dropdown = (function (_React$Component) {\n  _inherits(Dropdown, _React$Component);\n\n  function Dropdown(props) {\n    _classCallCheck(this, Dropdown);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));\n\n    _this.state = {\n      opened: false\n    };\n\n    _this.dataId = props.kitid || (0, _cuid2.default)();\n\n    return _this;\n  }\n\n  _createClass(Dropdown, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      window.addEventListener('click', function () {\n        return _this2.handleListener();\n      }, true);\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      var _this3 = this;\n\n      window.removeEventListener('click', function () {\n        return _this3.handleListener();\n      }, false);\n    }\n  }, {\n    key: 'handleListener',\n    value: function handleListener(e) {\n      if (this.state.opened) {\n        var dropbody = _reactUikitBase2.default.helpers.queryData('dropdown-' + this.dataId);\n        dropbody.style.display = 'none';\n        this.setState({ opened: false });\n      }\n    }\n  }, {\n    key: 'handleTriggerClick',\n    value: function handleTriggerClick(e) {\n      var _this4 = this;\n\n      e.preventDefault();\n      var dropbody = _reactUikitBase2.default.helpers.queryData('dropdown-' + this.dataId);\n\n      dropbody.style.display = 'block';\n      dropbody.style.visibility = 'hidden';\n\n      var props = this.props;\n      var trigger = e.currentTarget;\n      var elementOffset = _posOffset2.default.offset(trigger, dropbody)(props.pos);\n\n      if (props.justify) {\n        var justify = _reactUikitBase2.default.helpers.queryData(props.justify);\n\n        dropbody.style.width = _posOffset2.default.dim(justify).width + 'px';\n      }\n\n      dropbody.style.top = elementOffset.top + 'px';\n\n      if (props.type === 'button-group') {\n        var buttonGroup = document.querySelector('uk-button-group');\n        // const triggerWidth = posOffset.dim(document.buttonGroup).width;\n        console.log(buttonGroup);\n        dropbody.style.left = triggerWidth + 'px';\n      } else {\n        dropbody.style.left = '' + elementOffset.left;\n      }\n\n      var animateIn = function animateIn() {\n        _this4.setState({ opened: true });\n        props.trigger.animate.in(dropbody);\n      };\n\n      var animateOut = function animateOut() {\n        _this4.setState({ opened: false });\n        props.trigger.animate.out(dropbody);\n      };\n\n      _ufunc2.default.either(animateIn, animateOut)(!this.state.opened);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this5 = this;\n\n      var props = this.props;\n      var kitid = _ufunc2.default.either(props.kitid, this.dataId)(props.kitid);\n\n      // CSS classes\n      var type = {\n        button: 'uk-button-dropdown',\n        dropdown: null,\n        grid: 'uk-grid uk-dropdown-grid',\n        navbar: 'uk-parent'\n      };\n\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses([type[props.type] || type[dropdown], props.classes, props.className]);\n\n      var cssDropClassNames = _reactUikitBase2.default.helpers.cleanClasses([!props.blank ? 'uk-dropdown' : 'uk-dropdown-blank', props.small ? 'uk-dropdown-small' : null, props.type === 'navbar' ? 'uk-dropdown-navbar' : null, props.scrollable ? 'uk-dropdown-scrollable' : null]);\n\n      // Elements\n      var cleanProps = _reactUikitBase2.default.helpers.cleanProps(props, ['type']);\n      var cleanTriggerProps = _ufunc2.default.either(_reactUikitBase2.default.helpers.cleanProps(props.trigger, ['body']), props.trigger)(props.type === 'button-group');\n\n      var attr = {\n        'aria-haspopup': 'true',\n        'aria-expanded': this.state.opened ? 'true' : 'false',\n        'data-kitid': 'dropContainer-' + kitid,\n        'className': cssClassNames\n      };\n\n      var dropdown = _react2.default.createElement('div', {\n        style: props.justify ? { width: _posOffset2.default.dim(this) } : null,\n        'data-kitid': 'dropdown-' + kitid,\n        className: cssDropClassNames\n      }, props.children);\n\n      var trigger = function trigger(mode) {\n        return _react2.default.createElement(_reactUikitTrigger2.default, _extends({}, cleanTriggerProps, {\n\n          icon: props.icon || 'caret-down',\n          kitid: kitid,\n          onClick: function onClick(e) {\n            return _this5.handleTriggerClick(e);\n          }\n        }));\n      };\n\n      var component = {\n        dropdown: _react2.default.createElement('div', _extends({}, cleanProps, attr), trigger(), dropdown),\n\n        'button-group': _react2.default.createElement('div', _extends({}, cleanProps, {\n          className: 'uk-button-group' }), _react2.default.createElement(_reactUikitButton2.default, null, props.children), _react2.default.createElement('div', attr, trigger('link'), dropdown))\n      };\n\n      // Return Component\n      return component[props.type] || component['dropdown'];\n    }\n  }]);\n\n  return Dropdown;\n})(_react2.default.Component);\n\nDropdown.propTypes = {\n  blank: _react2.default.PropTypes.bool,\n  boundary: _react2.default.PropTypes.string,\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  grid: _react2.default.PropTypes.bool,\n  items: _react2.default.PropTypes.array,\n  justify: _react2.default.PropTypes.string,\n  kitid: _react2.default.PropTypes.string,\n  navbar: _react2.default.PropTypes.bool,\n  parent: _react2.default.PropTypes.bool,\n  pos: _react2.default.PropTypes.string,\n  scrollable: _react2.default.PropTypes.bool,\n  small: _react2.default.PropTypes.bool,\n  type: _react2.default.PropTypes.oneOf(['button', 'button-group', 'dropdown', 'grid', 'nav'])\n};\n;\n\nexports.default = _reactUikitBase2.default.base(Dropdown);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvZHJvcGRvd24uanM/ZWE1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBRSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBRSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxV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LFNBQVMsR0FBRztBQUNuQixPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUNyQyxVQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUMxQyxVQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRztBQUN2QyxXQUFTLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUMzQyxTQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSztBQUN4QyxNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUNwQyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSztBQUN0QyxTQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN6QyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN2QyxRQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUN0QyxRQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUN0QyxLQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUNyQyxZQUFVLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUMxQyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUNyQyxNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQzdGLENBQUM7QUFDRixDQUFDOztBQUVELE9BQU8sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiNjE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91ZnVuYyA9IHJlcXVpcmUoJ3VmdW5jJyk7XG5cbnZhciBfdWZ1bmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdWZ1bmMpO1xuXG52YXIgX2N1aWQgPSByZXF1aXJlKCdjdWlkJyk7XG5cbnZhciBfY3VpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jdWlkKTtcblxudmFyIF9wb3NPZmZzZXQgPSByZXF1aXJlKCcuL3Bvc09mZnNldCcpO1xuXG52YXIgX3Bvc09mZnNldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NPZmZzZXQpO1xuXG52YXIgX3JlYWN0VWlraXRUcmlnZ2VyID0gcmVxdWlyZSgnLi4vLi4vcmVhY3QtdWlraXQtdHJpZ2dlcicpO1xuXG52YXIgX3JlYWN0VWlraXRUcmlnZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VWlraXRUcmlnZ2VyKTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZSA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWJhc2UnKTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0QmFzZSk7XG5cbnZhciBfcmVhY3RVaWtpdEJ1dHRvbiA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWJ1dHRvbicpO1xuXG52YXIgX3JlYWN0VWlraXRCdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEJ1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIERyb3Bkb3duID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEcm9wZG93biwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRHJvcGRvd24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJvcGRvd24pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKERyb3Bkb3duKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5lZDogZmFsc2VcbiAgICB9O1xuXG4gICAgX3RoaXMuZGF0YUlkID0gcHJvcHMua2l0aWQgfHwgKDAsIF9jdWlkMi5kZWZhdWx0KSgpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERyb3Bkb3duLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLmhhbmRsZUxpc3RlbmVyKCk7XG4gICAgICB9LCB0cnVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMy5oYW5kbGVMaXN0ZW5lcigpO1xuICAgICAgfSwgZmFsc2UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZUxpc3RlbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTGlzdGVuZXIoZSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUub3BlbmVkKSB7XG4gICAgICAgIHZhciBkcm9wYm9keSA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLnF1ZXJ5RGF0YSgnZHJvcGRvd24tJyArIHRoaXMuZGF0YUlkKTtcbiAgICAgICAgZHJvcGJvZHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlVHJpZ2dlckNsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVHJpZ2dlckNsaWNrKGUpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgZHJvcGJvZHkgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5xdWVyeURhdGEoJ2Ryb3Bkb3duLScgKyB0aGlzLmRhdGFJZCk7XG5cbiAgICAgIGRyb3Bib2R5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgZHJvcGJvZHkuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHRyaWdnZXIgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICB2YXIgZWxlbWVudE9mZnNldCA9IF9wb3NPZmZzZXQyLmRlZmF1bHQub2Zmc2V0KHRyaWdnZXIsIGRyb3Bib2R5KShwcm9wcy5wb3MpO1xuXG4gICAgICBpZiAocHJvcHMuanVzdGlmeSkge1xuICAgICAgICB2YXIganVzdGlmeSA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLnF1ZXJ5RGF0YShwcm9wcy5qdXN0aWZ5KTtcblxuICAgICAgICBkcm9wYm9keS5zdHlsZS53aWR0aCA9IF9wb3NPZmZzZXQyLmRlZmF1bHQuZGltKGp1c3RpZnkpLndpZHRoICsgJ3B4JztcbiAgICAgIH1cblxuICAgICAgZHJvcGJvZHkuc3R5bGUudG9wID0gZWxlbWVudE9mZnNldC50b3AgKyAncHgnO1xuXG4gICAgICBpZiAocHJvcHMudHlwZSA9PT0gJ2J1dHRvbi1ncm91cCcpIHtcbiAgICAgICAgdmFyIGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWstYnV0dG9uLWdyb3VwJyk7XG4gICAgICAgIC8vIGNvbnN0IHRyaWdnZXJXaWR0aCA9IHBvc09mZnNldC5kaW0oZG9jdW1lbnQuYnV0dG9uR3JvdXApLndpZHRoO1xuICAgICAgICBjb25zb2xlLmxvZyhidXR0b25Hcm91cCk7XG4gICAgICAgIGRyb3Bib2R5LnN0eWxlLmxlZnQgPSB0cmlnZ2VyV2lkdGggKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJvcGJvZHkuc3R5bGUubGVmdCA9ICcnICsgZWxlbWVudE9mZnNldC5sZWZ0O1xuICAgICAgfVxuXG4gICAgICB2YXIgYW5pbWF0ZUluID0gZnVuY3Rpb24gYW5pbWF0ZUluKCkge1xuICAgICAgICBfdGhpczQuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgICAgIHByb3BzLnRyaWdnZXIuYW5pbWF0ZS5pbihkcm9wYm9keSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgYW5pbWF0ZU91dCA9IGZ1bmN0aW9uIGFuaW1hdGVPdXQoKSB7XG4gICAgICAgIF90aGlzNC5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICAgIHByb3BzLnRyaWdnZXIuYW5pbWF0ZS5vdXQoZHJvcGJvZHkpO1xuICAgICAgfTtcblxuICAgICAgX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihhbmltYXRlSW4sIGFuaW1hdGVPdXQpKCF0aGlzLnN0YXRlLm9wZW5lZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIga2l0aWQgPSBfdWZ1bmMyLmRlZmF1bHQuZWl0aGVyKHByb3BzLmtpdGlkLCB0aGlzLmRhdGFJZCkocHJvcHMua2l0aWQpO1xuXG4gICAgICAvLyBDU1MgY2xhc3Nlc1xuICAgICAgdmFyIHR5cGUgPSB7XG4gICAgICAgIGJ1dHRvbjogJ3VrLWJ1dHRvbi1kcm9wZG93bicsXG4gICAgICAgIGRyb3Bkb3duOiBudWxsLFxuICAgICAgICBncmlkOiAndWstZ3JpZCB1ay1kcm9wZG93bi1ncmlkJyxcbiAgICAgICAgbmF2YmFyOiAndWstcGFyZW50J1xuICAgICAgfTtcblxuICAgICAgdmFyIGNzc0NsYXNzTmFtZXMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhbkNsYXNzZXMoW3R5cGVbcHJvcHMudHlwZV0gfHwgdHlwZVtkcm9wZG93bl0sIHByb3BzLmNsYXNzZXMsIHByb3BzLmNsYXNzTmFtZV0pO1xuXG4gICAgICB2YXIgY3NzRHJvcENsYXNzTmFtZXMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhbkNsYXNzZXMoWyFwcm9wcy5ibGFuayA/ICd1ay1kcm9wZG93bicgOiAndWstZHJvcGRvd24tYmxhbmsnLCBwcm9wcy5zbWFsbCA/ICd1ay1kcm9wZG93bi1zbWFsbCcgOiBudWxsLCBwcm9wcy50eXBlID09PSAnbmF2YmFyJyA/ICd1ay1kcm9wZG93bi1uYXZiYXInIDogbnVsbCwgcHJvcHMuc2Nyb2xsYWJsZSA/ICd1ay1kcm9wZG93bi1zY3JvbGxhYmxlJyA6IG51bGxdKTtcblxuICAgICAgLy8gRWxlbWVudHNcbiAgICAgIHZhciBjbGVhblByb3BzID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5Qcm9wcyhwcm9wcywgWyd0eXBlJ10pO1xuICAgICAgdmFyIGNsZWFuVHJpZ2dlclByb3BzID0gX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhblByb3BzKHByb3BzLnRyaWdnZXIsIFsnYm9keSddKSwgcHJvcHMudHJpZ2dlcikocHJvcHMudHlwZSA9PT0gJ2J1dHRvbi1ncm91cCcpO1xuXG4gICAgICB2YXIgYXR0ciA9IHtcbiAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZScsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogdGhpcy5zdGF0ZS5vcGVuZWQgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICAnZGF0YS1raXRpZCc6ICdkcm9wQ29udGFpbmVyLScgKyBraXRpZCxcbiAgICAgICAgJ2NsYXNzTmFtZSc6IGNzc0NsYXNzTmFtZXNcbiAgICAgIH07XG5cbiAgICAgIHZhciBkcm9wZG93biA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIHN0eWxlOiBwcm9wcy5qdXN0aWZ5ID8geyB3aWR0aDogX3Bvc09mZnNldDIuZGVmYXVsdC5kaW0odGhpcykgfSA6IG51bGwsXG4gICAgICAgICAgJ2RhdGEta2l0aWQnOiAnZHJvcGRvd24tJyArIGtpdGlkLFxuICAgICAgICAgIGNsYXNzTmFtZTogY3NzRHJvcENsYXNzTmFtZXNcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG5cbiAgICAgIHZhciB0cmlnZ2VyID0gZnVuY3Rpb24gdHJpZ2dlcihtb2RlKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RVaWtpdFRyaWdnZXIyLmRlZmF1bHQsIF9leHRlbmRzKHt9LCBjbGVhblRyaWdnZXJQcm9wcywge1xuXG4gICAgICAgICAgaWNvbjogcHJvcHMuaWNvbiB8fCAnY2FyZXQtZG93bicsXG4gICAgICAgICAga2l0aWQ6IGtpdGlkLFxuICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNS5oYW5kbGVUcmlnZ2VyQ2xpY2soZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgY29tcG9uZW50ID0ge1xuICAgICAgICBkcm9wZG93bjogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIGNsZWFuUHJvcHMsIGF0dHIpLFxuICAgICAgICAgIHRyaWdnZXIoKSxcbiAgICAgICAgICBkcm9wZG93blxuICAgICAgICApLFxuXG4gICAgICAgICdidXR0b24tZ3JvdXAnOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgY2xlYW5Qcm9wcywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAndWstYnV0dG9uLWdyb3VwJyB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIF9yZWFjdFVpa2l0QnV0dG9uMi5kZWZhdWx0LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgIHRyaWdnZXIoJ2xpbmsnKSxcbiAgICAgICAgICAgIGRyb3Bkb3duXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9O1xuXG4gICAgICAvLyBSZXR1cm4gQ29tcG9uZW50XG4gICAgICByZXR1cm4gY29tcG9uZW50W3Byb3BzLnR5cGVdIHx8IGNvbXBvbmVudFsnZHJvcGRvd24nXTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuRHJvcGRvd24ucHJvcFR5cGVzID0ge1xuICBibGFuazogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBib3VuZGFyeTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFueSxcbiAgY2xhc3NOYW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NlczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hcnJheSxcbiAgZ3JpZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBpdGVtczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hcnJheSxcbiAganVzdGlmeTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGtpdGlkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgbmF2YmFyOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIHBhcmVudDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBwb3M6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzY3JvbGxhYmxlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIHNtYWxsOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIHR5cGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydidXR0b24nLCAnYnV0dG9uLWdyb3VwJywgJ2Ryb3Bkb3duJywgJ2dyaWQnLCAnbmF2J10pXG59O1xuO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuYmFzZShEcm9wZG93bik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvZHJvcGRvd24uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})