webpackHotUpdate(0,{

/***/ 619:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(170);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ufunc = __webpack_require__(171);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _cuid = __webpack_require__(395);\n\nvar _cuid2 = _interopRequireDefault(_cuid);\n\nvar _posOffset = __webpack_require__(620);\n\nvar _posOffset2 = _interopRequireDefault(_posOffset);\n\nvar _ramda = __webpack_require__(248);\n\nvar _ramda2 = _interopRequireDefault(_ramda);\n\nvar _reactUikitBase = __webpack_require__(249);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _reactUikitTrigger = __webpack_require__(622);\n\nvar _reactUikitTrigger2 = _interopRequireDefault(_reactUikitTrigger);\n\nvar _dropbody = __webpack_require__(797);\n\nvar _dropbody2 = _interopRequireDefault(_dropbody);\n\nvar _reactUikitButton = __webpack_require__(411);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Dropdown = (function (_React$Component) {\n  _inherits(Dropdown, _React$Component);\n\n  function Dropdown(props) {\n    _classCallCheck(this, Dropdown);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));\n\n    _this.state = {\n      opened: false\n    };\n\n    _this.dataId = props.kitid || (0, _cuid2.default)();\n    return _this;\n  }\n\n  _createClass(Dropdown, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      window.addEventListener('click', function () {\n        return _this2.handleListener();\n      }, true);\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      var _this3 = this;\n\n      window.removeEventListener('click', function () {\n        return _this3.handleListener();\n      }, false);\n    }\n  }, {\n    key: 'handleListener',\n    value: function handleListener(e) {\n      if (this.state.opened) {\n        var dropbody = _reactUikitBase2.default.helpers.queryData('dropdown-' + this.dataId);\n        dropbody.style.display = 'none';\n        this.setState({ opened: false });\n      }\n    }\n  }, {\n    key: 'handleTriggerClick',\n    value: function handleTriggerClick(e) {\n      var _this4 = this;\n\n      e.preventDefault();\n      var props = this.props;\n      var dropbody = _reactUikitBase2.default.helpers.queryData('dropdown-' + this.dataId);\n      var trigger = e.currentTarget;\n\n      var toHidden = function toHidden(element) {\n        element.style.display = 'block';\n        element.style.visibility = 'hidden';\n\n        return element;\n      };\n\n      var justify = function justify(element) {\n        if (props.justify) {\n          var _justify = _reactUikitBase2.default.helpers.queryData(props.justify);\n          element.style.width = _posOffset2.default.dim(_justify).width + 'px';\n        }\n\n        return element;\n      };\n\n      var getPosition = function getPosition(element) {\n        var elementOffset = _posOffset2.default.offset(trigger, element)(props.pos);\n        element.style.top = elementOffset.top + 'px';\n\n        if (props.type === 'button-group') {\n          var buttonGroup = document.querySelector('.uk-button-group');\n          var paddingLeft = window.getComputedStyle(buttonGroup, null).getPropertyValue('padding-left');\n\n          element.style.left = paddingLeft;\n        } else {\n          element.style.left = elementOffset.left + 'px';\n        }\n\n        return element;\n      };\n\n      var animate = function animate(element) {\n        var animateIn = function animateIn() {\n          _this4.setState({ opened: true });\n          props.trigger.animate.in(element);\n        };\n\n        var animateOut = function animateOut() {\n          _this4.setState({ opened: false });\n          props.trigger.animate.out(element);\n        };\n\n        _ufunc2.default.either(animateIn, animateOut)(!_this4.state.opened);\n      };\n\n      _ramda2.default.pipe(toHidden, justify, getPosition, animate)(dropbody);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this5 = this;\n\n      var props = this.props;\n      var kitid = _ufunc2.default.either(props.kitid, this.dataId)(props.kitid);\n\n      // CSS classes\n      var type = {\n        button: 'uk-button-dropdown',\n        'button-group': 'uk-button-group',\n        dropdown: null,\n        grid: 'uk-grid uk-dropdown-grid',\n        navbar: 'uk-parent'\n      };\n\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses([type[props.type] || type['dropdown'], props.hover ? 'uk-open' : null, props.classes, props.className]);\n\n      var cssDropClassNames = _reactUikitBase2.default.helpers.cleanClasses([!props.blank ? 'uk-dropdown' : 'uk-dropdown-blank', props.small ? 'uk-dropdown-small' : null, props.type === 'navbar' ? 'uk-dropdown-navbar' : null, props.scrollable ? 'uk-dropdown-scrollable' : null]);\n\n      // Elements\n      var cleanProps = _reactUikitBase2.default.helpers.cleanProps(props, ['type']);\n      var cleanTriggerProps = _ufunc2.default.either(_reactUikitBase2.default.helpers.cleanProps(props.trigger, ['body']), props.trigger)(props.type === 'button-group');\n\n      var attr = {\n        'aria-haspopup': 'true',\n        'aria-expanded': this.state.opened ? 'true' : 'false',\n        'data-kitid': 'dropContainer-' + kitid,\n        'className': cssClassNames\n      };\n\n      var dropbody = _react2.default.createElement(_dropbody2.default, _extends({}, props.bodyProps, {\n        style: props.justify ? { width: _posOffset2.default.dim(this) } : null,\n        'data-kitid': 'dropdown-' + kitid,\n        className: cssDropClassNames\n      }), props.children);\n\n      var trigger = function trigger(mode) {\n        return _react2.default.createElement(_reactUikitTrigger2.default, _extends({}, cleanTriggerProps, {\n          icon: props.icon || 'caret-down',\n          kitid: kitid,\n          onClick: function onClick(e) {\n            return _this5.handleTriggerClick(e);\n          }\n        }));\n      };\n\n      var component = {\n        dropdown: _react2.default.createElement('div', _extends({}, cleanProps, attr), trigger(), dropbody),\n\n        'button-group': _react2.default.createElement('div', _extends({}, cleanProps, attr), _react2.default.createElement(_reactUikitButton2.default, null, props.children), _react2.default.createElement('div', null, trigger('link'), dropbody)),\n\n        navbar: _react2.default.createElement('li', _extends({}, cleanProps, attr), _react2.default.createElement(_reactUikitButton2.default, null, props.children), _react2.default.createElement('div', null, trigger('link'), dropbody))\n      };\n\n      // Return Component\n      return component[props.type] || component['dropdown'];\n    }\n  }]);\n\n  return Dropdown;\n})(_react2.default.Component);\n\nDropdown.propTypes = {\n  blank: _react2.default.PropTypes.bool,\n  boundary: _react2.default.PropTypes.string,\n  bodyProps: _react2.default.PropTypes.object,\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  grid: _react2.default.PropTypes.bool,\n  hover: _react2.default.PropTypes.bool,\n  items: _react2.default.PropTypes.array,\n  justify: _react2.default.PropTypes.string,\n  kitid: _react2.default.PropTypes.string,\n  navbar: _react2.default.PropTypes.bool,\n  parent: _react2.default.PropTypes.bool,\n  pos: _react2.default.PropTypes.string,\n  scrollable: _react2.default.PropTypes.bool,\n  small: _react2.default.PropTypes.bool,\n  trigger: _react2.default.PropTypes.object,\n  type: _react2.default.PropTypes.oneOf(['button', 'button-group', 'dropdown', 'grid', 'nav'])\n};\n;\n\nexports.default = _reactUikitBase2.default.base(Dropdown);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvZHJvcGRvd24uanM/ZWE1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBRSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBRSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxV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QUN2RDtHQUNGLENBQUMsQ0FBQyxDQUFDOztBQUVKLFNBQU8sUUFBUSxDQUFDO0NBQ2pCLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7QUFFOUIsUUFBUSxDQUFDLFNBQVMsR0FBRztBQUNuQixPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUNyQyxVQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUMxQyxXQUFTLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUMzQyxVQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRztBQUN2QyxXQUFTLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUMzQyxTQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSztBQUN4QyxNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUNwQyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUNyQyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSztBQUN0QyxTQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN6QyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN2QyxRQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUN0QyxRQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUN0QyxLQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUNyQyxZQUFVLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUMxQyxPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUNyQyxTQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN6QyxNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQzdGLENBQUM7QUFDRixDQUFDOztBQUVELE9BQU8sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiNjE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91ZnVuYyA9IHJlcXVpcmUoJ3VmdW5jJyk7XG5cbnZhciBfdWZ1bmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdWZ1bmMpO1xuXG52YXIgX2N1aWQgPSByZXF1aXJlKCdjdWlkJyk7XG5cbnZhciBfY3VpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jdWlkKTtcblxudmFyIF9wb3NPZmZzZXQgPSByZXF1aXJlKCcuL3Bvc09mZnNldCcpO1xuXG52YXIgX3Bvc09mZnNldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NPZmZzZXQpO1xuXG52YXIgX3JhbWRhID0gcmVxdWlyZSgncmFtZGEnKTtcblxudmFyIF9yYW1kYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW1kYSk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UgPSByZXF1aXJlKCdyZWFjdC11aWtpdC1iYXNlJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEJhc2UpO1xuXG52YXIgX3JlYWN0VWlraXRUcmlnZ2VyID0gcmVxdWlyZSgnLi4vLi4vcmVhY3QtdWlraXQtdHJpZ2dlcicpO1xuXG52YXIgX3JlYWN0VWlraXRUcmlnZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VWlraXRUcmlnZ2VyKTtcblxudmFyIF9kcm9wYm9keSA9IHJlcXVpcmUoJy4vZHJvcGJvZHknKTtcblxudmFyIF9kcm9wYm9keTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kcm9wYm9keSk7XG5cbnZhciBfcmVhY3RVaWtpdEJ1dHRvbiA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWJ1dHRvbicpO1xuXG52YXIgX3JlYWN0VWlraXRCdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEJ1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIERyb3Bkb3duID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEcm9wZG93biwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRHJvcGRvd24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJvcGRvd24pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKERyb3Bkb3duKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5lZDogZmFsc2VcbiAgICB9O1xuXG4gICAgX3RoaXMuZGF0YUlkID0gcHJvcHMua2l0aWQgfHwgKDAsIF9jdWlkMi5kZWZhdWx0KSgpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEcm9wZG93biwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5oYW5kbGVMaXN0ZW5lcigpO1xuICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczMuaGFuZGxlTGlzdGVuZXIoKTtcbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUxpc3RlbmVyKGUpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLm9wZW5lZCkge1xuICAgICAgICB2YXIgZHJvcGJvZHkgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5xdWVyeURhdGEoJ2Ryb3Bkb3duLScgKyB0aGlzLmRhdGFJZCk7XG4gICAgICAgIGRyb3Bib2R5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZVRyaWdnZXJDbGljaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRyaWdnZXJDbGljayhlKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBkcm9wYm9keSA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLnF1ZXJ5RGF0YSgnZHJvcGRvd24tJyArIHRoaXMuZGF0YUlkKTtcbiAgICAgIHZhciB0cmlnZ2VyID0gZS5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICB2YXIgdG9IaWRkZW4gPSBmdW5jdGlvbiB0b0hpZGRlbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgfTtcblxuICAgICAgdmFyIGp1c3RpZnkgPSBmdW5jdGlvbiBqdXN0aWZ5KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHByb3BzLmp1c3RpZnkpIHtcbiAgICAgICAgICB2YXIgX2p1c3RpZnkgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5xdWVyeURhdGEocHJvcHMuanVzdGlmeSk7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IF9wb3NPZmZzZXQyLmRlZmF1bHQuZGltKF9qdXN0aWZ5KS53aWR0aCArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH07XG5cbiAgICAgIHZhciBnZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIGdldFBvc2l0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnRPZmZzZXQgPSBfcG9zT2Zmc2V0Mi5kZWZhdWx0Lm9mZnNldCh0cmlnZ2VyLCBlbGVtZW50KShwcm9wcy5wb3MpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGVsZW1lbnRPZmZzZXQudG9wICsgJ3B4JztcblxuICAgICAgICBpZiAocHJvcHMudHlwZSA9PT0gJ2J1dHRvbi1ncm91cCcpIHtcbiAgICAgICAgICB2YXIgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWstYnV0dG9uLWdyb3VwJyk7XG4gICAgICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoYnV0dG9uR3JvdXAsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpO1xuXG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gcGFkZGluZ0xlZnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gZWxlbWVudE9mZnNldC5sZWZ0ICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgfTtcblxuICAgICAgdmFyIGFuaW1hdGUgPSBmdW5jdGlvbiBhbmltYXRlKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGFuaW1hdGVJbiA9IGZ1bmN0aW9uIGFuaW1hdGVJbigpIHtcbiAgICAgICAgICBfdGhpczQuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgICAgICAgcHJvcHMudHJpZ2dlci5hbmltYXRlLmluKGVsZW1lbnQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBhbmltYXRlT3V0ID0gZnVuY3Rpb24gYW5pbWF0ZU91dCgpIHtcbiAgICAgICAgICBfdGhpczQuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgIHByb3BzLnRyaWdnZXIuYW5pbWF0ZS5vdXQoZWxlbWVudCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihhbmltYXRlSW4sIGFuaW1hdGVPdXQpKCFfdGhpczQuc3RhdGUub3BlbmVkKTtcbiAgICAgIH07XG5cbiAgICAgIF9yYW1kYTIuZGVmYXVsdC5waXBlKHRvSGlkZGVuLCBqdXN0aWZ5LCBnZXRQb3NpdGlvbiwgYW5pbWF0ZSkoZHJvcGJvZHkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGtpdGlkID0gX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihwcm9wcy5raXRpZCwgdGhpcy5kYXRhSWQpKHByb3BzLmtpdGlkKTtcblxuICAgICAgLy8gQ1NTIGNsYXNzZXNcbiAgICAgIHZhciB0eXBlID0ge1xuICAgICAgICBidXR0b246ICd1ay1idXR0b24tZHJvcGRvd24nLFxuICAgICAgICAnYnV0dG9uLWdyb3VwJzogJ3VrLWJ1dHRvbi1ncm91cCcsXG4gICAgICAgIGRyb3Bkb3duOiBudWxsLFxuICAgICAgICBncmlkOiAndWstZ3JpZCB1ay1kcm9wZG93bi1ncmlkJyxcbiAgICAgICAgbmF2YmFyOiAndWstcGFyZW50J1xuICAgICAgfTtcblxuICAgICAgdmFyIGNzc0NsYXNzTmFtZXMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhbkNsYXNzZXMoW3R5cGVbcHJvcHMudHlwZV0gfHwgdHlwZVsnZHJvcGRvd24nXSwgcHJvcHMuaG92ZXIgPyAndWstb3BlbicgOiBudWxsLCBwcm9wcy5jbGFzc2VzLCBwcm9wcy5jbGFzc05hbWVdKTtcblxuICAgICAgdmFyIGNzc0Ryb3BDbGFzc05hbWVzID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5DbGFzc2VzKFshcHJvcHMuYmxhbmsgPyAndWstZHJvcGRvd24nIDogJ3VrLWRyb3Bkb3duLWJsYW5rJywgcHJvcHMuc21hbGwgPyAndWstZHJvcGRvd24tc21hbGwnIDogbnVsbCwgcHJvcHMudHlwZSA9PT0gJ25hdmJhcicgPyAndWstZHJvcGRvd24tbmF2YmFyJyA6IG51bGwsIHByb3BzLnNjcm9sbGFibGUgPyAndWstZHJvcGRvd24tc2Nyb2xsYWJsZScgOiBudWxsXSk7XG5cbiAgICAgIC8vIEVsZW1lbnRzXG4gICAgICB2YXIgY2xlYW5Qcm9wcyA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuUHJvcHMocHJvcHMsIFsndHlwZSddKTtcbiAgICAgIHZhciBjbGVhblRyaWdnZXJQcm9wcyA9IF91ZnVuYzIuZGVmYXVsdC5laXRoZXIoX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5Qcm9wcyhwcm9wcy50cmlnZ2VyLCBbJ2JvZHknXSksIHByb3BzLnRyaWdnZXIpKHByb3BzLnR5cGUgPT09ICdidXR0b24tZ3JvdXAnKTtcblxuICAgICAgdmFyIGF0dHIgPSB7XG4gICAgICAgICdhcmlhLWhhc3BvcHVwJzogJ3RydWUnLFxuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IHRoaXMuc3RhdGUub3BlbmVkID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgJ2RhdGEta2l0aWQnOiAnZHJvcENvbnRhaW5lci0nICsga2l0aWQsXG4gICAgICAgICdjbGFzc05hbWUnOiBjc3NDbGFzc05hbWVzXG4gICAgICB9O1xuXG4gICAgICB2YXIgZHJvcGJvZHkgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX2Ryb3Bib2R5Mi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMuYm9keVByb3BzLCB7XG4gICAgICAgICAgc3R5bGU6IHByb3BzLmp1c3RpZnkgPyB7IHdpZHRoOiBfcG9zT2Zmc2V0Mi5kZWZhdWx0LmRpbSh0aGlzKSB9IDogbnVsbCxcbiAgICAgICAgICAnZGF0YS1raXRpZCc6ICdkcm9wZG93bi0nICsga2l0aWQsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjc3NEcm9wQ2xhc3NOYW1lc1xuICAgICAgICB9KSxcbiAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG5cbiAgICAgIHZhciB0cmlnZ2VyID0gZnVuY3Rpb24gdHJpZ2dlcihtb2RlKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RVaWtpdFRyaWdnZXIyLmRlZmF1bHQsIF9leHRlbmRzKHt9LCBjbGVhblRyaWdnZXJQcm9wcywge1xuICAgICAgICAgIGljb246IHByb3BzLmljb24gfHwgJ2NhcmV0LWRvd24nLFxuICAgICAgICAgIGtpdGlkOiBraXRpZCxcbiAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczUuaGFuZGxlVHJpZ2dlckNsaWNrKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGNvbXBvbmVudCA9IHtcbiAgICAgICAgZHJvcGRvd246IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIF9leHRlbmRzKHt9LCBjbGVhblByb3BzLCBhdHRyKSxcbiAgICAgICAgICB0cmlnZ2VyKCksXG4gICAgICAgICAgZHJvcGJvZHlcbiAgICAgICAgKSxcblxuICAgICAgICAnYnV0dG9uLWdyb3VwJzogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIGNsZWFuUHJvcHMsIGF0dHIpLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX3JlYWN0VWlraXRCdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICApLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgdHJpZ2dlcignbGluaycpLFxuICAgICAgICAgICAgZHJvcGJvZHlcbiAgICAgICAgICApXG4gICAgICAgICksXG5cbiAgICAgICAgbmF2YmFyOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnbGknLFxuICAgICAgICAgIF9leHRlbmRzKHt9LCBjbGVhblByb3BzLCBhdHRyKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIF9yZWFjdFVpa2l0QnV0dG9uMi5kZWZhdWx0LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHRyaWdnZXIoJ2xpbmsnKSxcbiAgICAgICAgICAgIGRyb3Bib2R5XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9O1xuXG4gICAgICAvLyBSZXR1cm4gQ29tcG9uZW50XG4gICAgICByZXR1cm4gY29tcG9uZW50W3Byb3BzLnR5cGVdIHx8IGNvbXBvbmVudFsnZHJvcGRvd24nXTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuRHJvcGRvd24ucHJvcFR5cGVzID0ge1xuICBibGFuazogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBib3VuZGFyeTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGJvZHlQcm9wczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vYmplY3QsXG4gIGNoaWxkcmVuOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFueSxcbiAgY2xhc3NOYW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NlczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hcnJheSxcbiAgZ3JpZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBob3ZlcjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBpdGVtczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hcnJheSxcbiAganVzdGlmeTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGtpdGlkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgbmF2YmFyOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIHBhcmVudDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBwb3M6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzY3JvbGxhYmxlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIHNtYWxsOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIHRyaWdnZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub2JqZWN0LFxuICB0eXBlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9uZU9mKFsnYnV0dG9uJywgJ2J1dHRvbi1ncm91cCcsICdkcm9wZG93bicsICdncmlkJywgJ25hdiddKVxufTtcbjtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmJhc2UoRHJvcGRvd24pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtZHJvcGRvd24vbGliL2Ryb3Bkb3duLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})