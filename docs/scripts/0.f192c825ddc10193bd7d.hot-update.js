webpackHotUpdate(0,{

/***/ 626:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(86);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(82);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(2);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(83);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _velocityAnimate = __webpack_require__(787);\n\nvar _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);\n\nvar _reactUikitCodeblock = __webpack_require__(23);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitDropdown = __webpack_require__(618);\n\nvar _reactUikitDropdown2 = _interopRequireDefault(_reactUikitDropdown);\n\nvar _reactUikitTable = __webpack_require__(24);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nvar _reactUikitGrid = __webpack_require__(84);\n\nvar _reactUikitGrid2 = _interopRequireDefault(_reactUikitGrid);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  dropdownDoc: {\n    displayName: 'dropdownDoc'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/home/ninja/work/projects/react-uikit-components/src/dropdown-doc.jsx',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/home/ninja/work/projects/react-uikit-components/src/dropdown-doc.jsx',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar dropdownDoc = _wrapComponent('dropdownDoc')((function (_React$Component) {\n  _inherits(dropdownDoc, _React$Component);\n\n  function dropdownDoc(props) {\n    _classCallCheck(this, dropdownDoc);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(dropdownDoc).call(this, props));\n\n    _this.state = {\n      drop1Opened: false\n    };\n    return _this;\n  }\n\n  _createClass(dropdownDoc, [{\n    key: 'animateIn',\n    value: function animateIn(element) {\n      this.setState({ drop1Opened: true });\n      (0, _velocityAnimate2.default)(element, { opacity: 1 }, { visibility: 'visible' }, 200);\n    }\n  }, {\n    key: 'animateOut',\n    value: function animateOut(element) {\n      this.setState({ drop1Opened: false });\n      (0, _velocityAnimate2.default)(element, { opacity: 0 }, { visibility: 'hidden' }, 200);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement(\n          'section',\n          null,\n          _react3.default.createElement(\n            'h1',\n            null,\n            'dropdown'\n          ),\n          _react3.default.createElement(\n            'p',\n            { className: 'uk-dropdown-lead' },\n            'Defines different styles for list dropdownigations.'\n          )\n        ),\n        _react3.default.createElement(\n          'section',\n          null,\n          _react3.default.createElement(\n            'h2',\n            null,\n            'Usage'\n          ),\n          _react3.default.createElement(\n            _reactUikitCodeblock2.default,\n            null,\n            'npm install react-uikit-dropdown --save;\\n\\n// ES6\\nimport uikit from \\'react-uikit-dropdown\\';\\n\\n// ES5\\nvar Dropdown = require(\\'react-uikit-dropdown\\');\\n'\n          ),\n          _react3.default.createElement('hr', { className: 'uk-article-divider' })\n        ),\n        _react3.default.createElement(\n          'section',\n          null,\n          _react3.default.createElement(\n            _reactUikitGrid2.default,\n            null,\n            _react3.default.createElement(\n              _reactUikitDropdown2.default,\n              {\n                pos: 'bottom-left',\n                opened: this.state.drop1Opened,\n                trigger: {\n                  body: 'bottom left',\n                  animate: {\n                    in: function _in(element) {\n                      return _this2.animateIn(element);\n                    },\n                    out: function out(element) {\n                      return _this2.animateOut(element);\n                    }\n                  }\n                }\n              },\n              'this is a drop down'\n            ),\n            _react3.default.createElement(\n              _reactUikitDropdown2.default,\n              {\n                pos: 'bottom-center',\n                opened: this.state.drop1Opened,\n                trigger: {\n                  body: 'bottom center',\n                  animate: {\n                    in: function _in(element) {\n                      return _this2.animateIn(element);\n                    },\n                    out: function out(element) {\n                      return _this2.animateOut(element);\n                    }\n                  }\n                }\n              },\n              'this is a drop down'\n            ),\n            _react3.default.createElement(\n              _reactUikitDropdown2.default,\n              {\n                pos: 'bottom-right',\n                opened: this.state.drop1Opened,\n                trigger: {\n                  body: 'botom right',\n                  animate: {\n                    in: function _in(element) {\n                      return _this2.animateIn(element);\n                    },\n                    out: function out(element) {\n                      return _this2.animateOut(element);\n                    }\n                  }\n                }\n              },\n              'this is a drop down'\n            )\n          ),\n          _react3.default.createElement(\n            _reactUikitGrid2.default,\n            null,\n            _react3.default.createElement(\n              _reactUikitDropdown2.default,\n              {\n                pos: 'top-left',\n                opened: this.state.drop1Opened,\n                trigger: {\n                  body: 'top left',\n                  animate: {\n                    in: function _in(element) {\n                      return _this2.animateIn(element);\n                    },\n                    out: function out(element) {\n                      return _this2.animateOut(element);\n                    }\n                  }\n                }\n              },\n              'this is a drop down'\n            ),\n            _react3.default.createElement(\n              _reactUikitDropdown2.default,\n              {\n                pos: 'top-center',\n                opened: this.state.drop1Opened,\n                trigger: {\n                  body: 'top center',\n                  animate: {\n                    in: function _in(element) {\n                      return _this2.animateIn(element);\n                    },\n                    out: function out(element) {\n                      return _this2.animateOut(element);\n                    }\n                  }\n                }\n              },\n              'this is a drop down'\n            ),\n            _react3.default.createElement(\n              _reactUikitDropdown2.default,\n              {\n                pos: 'top-right',\n                opened: this.state.drop1Opened,\n                trigger: {\n                  body: 'top right',\n                  animate: {\n                    in: function _in(element) {\n                      return _this2.animateIn(element);\n                    },\n                    out: function out(element) {\n                      return _this2.animateOut(element);\n                    }\n                  }\n                }\n              },\n              'this is a drop down'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return dropdownDoc;\n})(_react3.default.Component));\n\nexports.default = dropdownDoc;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)(module)))\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kcm9wZG93bi1kb2MuanN4PzA3OWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMERBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdRLFdBQVc7O0FBQzlCLFdBRG1CLFdBQVcsQ0FDakIsS0FBSyxFQUFFOzBCQURELFdBQVc7O3VFQUFYLFdBQVcsYUFFdEIsS0FBSzs7QUFDWCxVQUFLLEtBQUssR0FBRztBQUNYLGlCQUFXLEVBQUUsS0FBSztLQUNuQixDQUFDOztHQUNIOztlQU5rQixXQUFXOzs4QkFTbkIsT0FBTyxFQUFFO0FBQ2xCLFVBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztBQUNuQyxxQ0FBUyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDL0Q7OzsrQkFHVyxPQUFPLEVBQUU7QUFDbkIsVUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0FBQ3BDLHFDQUFTLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNoRTs7OzZCQUdTOzs7QUFDUixhQUFPOzs7UUFDTDs7O1VBQ0U7Ozs7V0FBaUI7VUFDakI7O2NBQUcsU0FBUyxFQUFDLGtCQUFrQjs7V0FFM0I7U0FDSTtRQUVWOzs7VUFDRTs7OztXQUFjO1VBRWQ7Ozs7V0FTWTtVQUVaLHNDQUFJLFNBQVMsRUFBQyxvQkFBb0IsR0FBRztTQUU3QjtRQUdWOzs7VUFDRTs7O1lBQ0U7OztBQUNFLG1CQUFHLEVBQUMsYUFBYTtBQUNqQixzQkFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBWTtBQUMvQix1QkFBTyxFQUFFO0FBQ1Asc0JBQUksRUFBQyxhQUFhO0FBQ2xCLHlCQUFPLEVBQUU7QUFDUCxzQkFBRSxFQUFFLGFBQUMsT0FBTzs2QkFBSyxPQUFLLFNBQVMsQ0FBQyxPQUFPLENBQUM7cUJBQUE7QUFDeEMsdUJBQUcsRUFBRSxhQUFDLE9BQU87NkJBQUssT0FBSyxVQUFVLENBQUMsT0FBTyxDQUFDO3FCQUFBO21CQUMzQztpQkFDRDs7O2FBR087WUFDWDs7O0FBQ0UsbUJBQUcsRUFBQyxlQUFlO0FBQ25CLHNCQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFZO0FBQy9CLHVCQUFPLEVBQUU7QUFDUCxzQkFBSSxFQUFDLGVBQWU7QUFDcEIseUJBQU8sRUFBRTtBQUNQLHNCQUFFLEVBQUUsYUFBQyxPQUFPOzZCQUFLLE9BQUssU0FBUyxDQUFDLE9BQU8sQ0FBQztxQkFBQTtBQUN4Qyx1QkFBRyxFQUFFLGFBQUMsT0FBTzs2QkFBSyxPQUFLLFVBQVUsQ0FBQyxPQUFPLENBQUM7cUJBQUE7bUJBQzNDO2lCQUNEOzs7YUFHTztZQUNYOzs7QUFDRSxtQkFBRyxFQUFDLGNBQWM7QUFDbEIsc0JBQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVk7QUFDL0IsdUJBQU8sRUFBRTtBQUNQLHNCQUFJLEVBQUMsYUFBYTtBQUNsQix5QkFBTyxFQUFFO0FBQ1Asc0JBQUUsRUFBRSxhQUFDLE9BQU87NkJBQUssT0FBSyxTQUFTLENBQUMsT0FBTyxDQUFDO3FCQUFBO0FBQ3hDLHVCQUFHLEVBQUUsYUFBQyxPQUFPOzZCQUFLLE9BQUssVUFBVSxDQUFDLE9BQU8sQ0FBQztxQkFBQTttQkFDM0M7aUJBQ0Q7OzthQUdPO1dBQ047VUFDUDs7O1lBQ0U7OztBQUNFLG1CQUFHLEVBQUMsVUFBVTtBQUNkLHNCQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFZO0FBQy9CLHVCQUFPLEVBQUU7QUFDUCxzQkFBSSxFQUFDLFVBQVU7QUFDZix5QkFBTyxFQUFFO0FBQ1Asc0JBQUUsRUFBRSxhQUFDLE9BQU87NkJBQUssT0FBSyxTQUFTLENBQUMsT0FBTyxDQUFDO3FCQUFBO0FBQ3hDLHVCQUFHLEVBQUUsYUFBQyxPQUFPOzZCQUFLLE9BQUssVUFBVSxDQUFDLE9BQU8sQ0FBQztxQkFBQTttQkFDM0M7aUJBQ0Q7OzthQUdPO1lBQ1g7OztBQUNFLG1CQUFHLEVBQUMsWUFBWTtBQUNoQixzQkFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBWTtBQUMvQix1QkFBTyxFQUFFO0FBQ1Asc0JBQUksRUFBQyxZQUFZO0FBQ2pCLHlCQUFPLEVBQUU7QUFDUCxzQkFBRSxFQUFFLGFBQUMsT0FBTzs2QkFBSyxPQUFLLFNBQVMsQ0FBQyxPQUFPLENBQUM7cUJBQUE7QUFDeEMsdUJBQUcsRUFBRSxhQUFDLE9BQU87NkJBQUssT0FBSyxVQUFVLENBQUMsT0FBTyxDQUFDO3FCQUFBO21CQUMzQztpQkFDRDs7O2FBR087WUFDWDs7O0FBQ0UsbUJBQUcsRUFBQyxXQUFXO0FBQ2Ysc0JBQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVk7QUFDL0IsdUJBQU8sRUFBRTtBQUNQLHNCQUFJLEVBQUMsV0FBVztBQUNoQix5QkFBTyxFQUFFO0FBQ1Asc0JBQUUsRUFBRSxhQUFDLE9BQU87NkJBQUssT0FBSyxTQUFTLENBQUMsT0FBTyxDQUFDO3FCQUFBO0FBQ3hDLHVCQUFHLEVBQUUsYUFBQyxPQUFPOzZCQUFLLE9BQUssVUFBVSxDQUFDLE9BQU8sQ0FBQztxQkFBQTttQkFDM0M7aUJBQ0Q7OzthQUdPO1dBQ047U0FDQztPQUdOLENBQUM7S0FDUjs7O1NBeElrQixXQUFXO0dBQVMsZ0JBQU0sU0FBUyIsImZpbGUiOiI2MjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB2ZWxvY2l0eSBmcm9tICd2ZWxvY2l0eS1hbmltYXRlJztcbmltcG9ydCBDb2RlYmxvY2sgZnJvbSAncmVhY3QtdWlraXQtY29kZWJsb2NrJztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWRyb3Bkb3duJztcbmltcG9ydCBUYWJsZSBmcm9tICdyZWFjdC11aWtpdC10YWJsZSc7XG5pbXBvcnQgR3JpZCBmcm9tICdyZWFjdC11aWtpdC1ncmlkJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkcm9wZG93bkRvYyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZHJvcDFPcGVuZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG5cbiAgYW5pbWF0ZUluIChlbGVtZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJvcDFPcGVuZWQ6IHRydWV9KTtcbiAgICB2ZWxvY2l0eShlbGVtZW50LCB7b3BhY2l0eTogMX0sIHt2aXNpYmlsaXR5OiAndmlzaWJsZSd9LCAyMDApO1xuICB9XG5cblxuICBhbmltYXRlT3V0IChlbGVtZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJvcDFPcGVuZWQ6IGZhbHNlfSk7XG4gICAgdmVsb2NpdHkoZWxlbWVudCwge29wYWNpdHk6IDB9LCB7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH0sIDIwMCk7XG4gIH1cblxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgxPmRyb3Bkb3duPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd1ay1kcm9wZG93bi1sZWFkJz5cbiAgICAgICAgICBEZWZpbmVzIGRpZmZlcmVudCBzdHlsZXMgZm9yIGxpc3QgZHJvcGRvd25pZ2F0aW9ucy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgyPlVzYWdlPC9oMj5cblxuICAgICAgICA8Q29kZWJsb2NrPlxue2BucG0gaW5zdGFsbCByZWFjdC11aWtpdC1kcm9wZG93biAtLXNhdmU7XG5cbi8vIEVTNlxuaW1wb3J0IHVpa2l0IGZyb20gJ3JlYWN0LXVpa2l0LWRyb3Bkb3duJztcblxuLy8gRVM1XG52YXIgRHJvcGRvd24gPSByZXF1aXJlKCdyZWFjdC11aWtpdC1kcm9wZG93bicpO1xuYH1cbiAgICAgICAgPC9Db2RlYmxvY2s+XG5cbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cInVrLWFydGljbGUtZGl2aWRlclwiIC8+XG5cbiAgICAgIDwvc2VjdGlvbj5cblxuXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICBwb3M9J2JvdHRvbS1sZWZ0J1xuICAgICAgICAgICAgb3BlbmVkPXt0aGlzLnN0YXRlLmRyb3AxT3BlbmVkfVxuICAgICAgICAgICAgdHJpZ2dlcj17e1xuICAgICAgICAgICAgICBib2R5Oidib3R0b20gbGVmdCcsXG4gICAgICAgICAgICAgIGFuaW1hdGU6IHtcbiAgICAgICAgICAgICAgICBpbjogKGVsZW1lbnQpID0+IHRoaXMuYW5pbWF0ZUluKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIG91dDogKGVsZW1lbnQpID0+IHRoaXMuYW5pbWF0ZU91dChlbGVtZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHRoaXMgaXMgYSBkcm9wIGRvd25cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgcG9zPSdib3R0b20tY2VudGVyJ1xuICAgICAgICAgICAgb3BlbmVkPXt0aGlzLnN0YXRlLmRyb3AxT3BlbmVkfVxuICAgICAgICAgICAgdHJpZ2dlcj17e1xuICAgICAgICAgICAgICBib2R5Oidib3R0b20gY2VudGVyJyxcbiAgICAgICAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgICAgICAgIGluOiAoZWxlbWVudCkgPT4gdGhpcy5hbmltYXRlSW4oZWxlbWVudCksXG4gICAgICAgICAgICAgICAgb3V0OiAoZWxlbWVudCkgPT4gdGhpcy5hbmltYXRlT3V0KGVsZW1lbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgdGhpcyBpcyBhIGRyb3AgZG93blxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICBwb3M9J2JvdHRvbS1yaWdodCdcbiAgICAgICAgICAgIG9wZW5lZD17dGhpcy5zdGF0ZS5kcm9wMU9wZW5lZH1cbiAgICAgICAgICAgIHRyaWdnZXI9e3tcbiAgICAgICAgICAgICAgYm9keTonYm90b20gcmlnaHQnLFxuICAgICAgICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgICAgICAgaW46IChlbGVtZW50KSA9PiB0aGlzLmFuaW1hdGVJbihlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBvdXQ6IChlbGVtZW50KSA9PiB0aGlzLmFuaW1hdGVPdXQoZWxlbWVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB0aGlzIGlzIGEgZHJvcCBkb3duXG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZD5cbiAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgIHBvcz0ndG9wLWxlZnQnXG4gICAgICAgICAgICBvcGVuZWQ9e3RoaXMuc3RhdGUuZHJvcDFPcGVuZWR9XG4gICAgICAgICAgICB0cmlnZ2VyPXt7XG4gICAgICAgICAgICAgIGJvZHk6J3RvcCBsZWZ0JyxcbiAgICAgICAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgICAgICAgIGluOiAoZWxlbWVudCkgPT4gdGhpcy5hbmltYXRlSW4oZWxlbWVudCksXG4gICAgICAgICAgICAgICAgb3V0OiAoZWxlbWVudCkgPT4gdGhpcy5hbmltYXRlT3V0KGVsZW1lbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgdGhpcyBpcyBhIGRyb3AgZG93blxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICBwb3M9J3RvcC1jZW50ZXInXG4gICAgICAgICAgICBvcGVuZWQ9e3RoaXMuc3RhdGUuZHJvcDFPcGVuZWR9XG4gICAgICAgICAgICB0cmlnZ2VyPXt7XG4gICAgICAgICAgICAgIGJvZHk6J3RvcCBjZW50ZXInLFxuICAgICAgICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgICAgICAgaW46IChlbGVtZW50KSA9PiB0aGlzLmFuaW1hdGVJbihlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBvdXQ6IChlbGVtZW50KSA9PiB0aGlzLmFuaW1hdGVPdXQoZWxlbWVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB0aGlzIGlzIGEgZHJvcCBkb3duXG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgIHBvcz0ndG9wLXJpZ2h0J1xuICAgICAgICAgICAgb3BlbmVkPXt0aGlzLnN0YXRlLmRyb3AxT3BlbmVkfVxuICAgICAgICAgICAgdHJpZ2dlcj17e1xuICAgICAgICAgICAgICBib2R5Oid0b3AgcmlnaHQnLFxuICAgICAgICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgICAgICAgaW46IChlbGVtZW50KSA9PiB0aGlzLmFuaW1hdGVJbihlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBvdXQ6IChlbGVtZW50KSA9PiB0aGlzLmFuaW1hdGVPdXQoZWxlbWVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB0aGlzIGlzIGEgZHJvcCBkb3duXG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8L2Rpdj47XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZHJvcGRvd24tZG9jLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})