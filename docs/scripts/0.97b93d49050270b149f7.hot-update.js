webpackHotUpdate(0,{

/***/ 3645:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(515);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(509);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(2);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(510);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _reactUikitCodeblock = __webpack_require__(302);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitNote = __webpack_require__(396);\n\nvar _reactUikitNote2 = _interopRequireDefault(_reactUikitNote);\n\nvar _reactUikitTable = __webpack_require__(255);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  NoteHandler: {\n    displayName: 'NoteHandler'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/home/ninja/work/projects/react-uikit-components/src/note-doc.jsx',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/home/ninja/work/projects/react-uikit-components/src/note-doc.jsx',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar NoteHandler = _wrapComponent('NoteHandler')((function (_React$Component) {\n  _inherits(NoteHandler, _React$Component);\n\n  function NoteHandler() {\n    _classCallCheck(this, NoteHandler);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(NoteHandler).apply(this, arguments));\n  }\n\n  _createClass(NoteHandler, [{\n    key: 'render',\n    value: function render() {\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement(\n          'section',\n          null,\n          _react3.default.createElement(\n            'h1',\n            null,\n            'Note'\n          ),\n          _react3.default.createElement(\n            'p',\n            { className: 'uk-article-lead' },\n            'Easily add notes.'\n          ),\n          _react3.default.createElement(\n            'p',\n            null,\n            _react3.default.createElement(\n              'a',\n              { href: 'https://github.com/otissv/react-uikit-note' },\n              'react-uikit-note'\n            ),\n            ' on github.'\n          )\n        ),\n        _react3.default.createElement(\n          'section',\n          null,\n          _react3.default.createElement(\n            'h2',\n            null,\n            'Usage'\n          ),\n          _react3.default.createElement(\n            _reactUikitCodeblock2.default,\n            null,\n            'npm install react-uikit-note --save;\\n// ES6\\nimport Note from \\'react-uikit-note\\';\\n\\n// ES5\\nvar Note = require&(\\'react-uikit-note\\')'\n          ),\n          _react3.default.createElement('hr', { className: 'uk-article-divider' }),\n          _react3.default.createElement(\n            'p',\n            null,\n            'The Note component consists of a paragraph with a prefixed bagde. To create a Note component add a label for the badge prop ',\n            _react3.default.createElement(\n              'code',\n              null,\n              'badge=\\'NOTE\\''\n            ),\n            ' and either add text as a child or to the ',\n            _react3.default.createElement(\n              'code',\n              null,\n              'body'\n            ),\n            ' prop. If no bagde is provided The default badge is \\'Note\\''\n          ),\n          _react3.default.createElement(\n            'h3',\n            { className: 'example' },\n            'Example'\n          ),\n          _react3.default.createElement(\n            _reactUikitNote2.default,\n            null,\n            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'\n          ),\n          _react3.default.createElement(\n            'h4',\n            { className: 'code' },\n            'Code'\n          ),\n          _react3.default.createElement(\n            _reactUikitCodeblock2.default,\n            { syntax: 'xml' },\n            '<Note>\\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n  tempor incididunt ut labore et dolore magna aliqua.\\n</Note>\\n\\n<Note badge=\\'EXAMPLE\\'>\\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n  tempor incididunt ut labore et dolore magna aliqua.\\n</Note>\\n'\n          )\n        ),\n        _react3.default.createElement(\n          'section',\n          null,\n          _react3.default.createElement(\n            'h2',\n            null,\n            'Note context'\n          ),\n          _react3.default.createElement(\n            'p',\n            null,\n            'Note badges can be given context using the badge prop and setting the context property.'\n          ),\n          _react3.default.createElement(\n            'h3',\n            { className: 'example' },\n            'Example'\n          ),\n          _react3.default.createElement(\n            _reactUikitNote2.default,\n            { badge: { body: 'EXAMPLE', context: 'danger' } },\n            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'\n          ),\n          _react3.default.createElement(\n            'h4',\n            { className: 'code' },\n            'Code'\n          ),\n          _react3.default.createElement(\n            _reactUikitCodeblock2.default,\n            { syntax: 'xml' },\n            '<Note badge={{body: \\'EXAMPLE\\', context:\\'danger\\'}}>\\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n  tempor incididunt ut labore et dolore magna aliqua.\\n</Note>\\n  '\n          )\n        ),\n        _react3.default.createElement(\n          'section',\n          null,\n          _react3.default.createElement(\n            'h2',\n            null,\n            'Note Props'\n          ),\n          _react3.default.createElement(\n            'p',\n            null,\n            'See base component for additional utility props.'\n          ),\n          _react3.default.createElement(\n            _reactUikitTable2.default,\n            null,\n            _react3.default.createElement(\n              'thead',\n              null,\n              _react3.default.createElement(\n                'tr',\n                null,\n                _react3.default.createElement(\n                  'th',\n                  { className: 'uk-text-left' },\n                  'Prop'\n                ),\n                _react3.default.createElement(\n                  'th',\n                  { className: 'uk-text-left' },\n                  'Type'\n                )\n              )\n            ),\n            _react3.default.createElement(\n              'tbody',\n              null,\n              _react3.default.createElement(\n                'tr',\n                null,\n                _react3.default.createElement(\n                  'td',\n                  { className: 'uk-text-left' },\n                  _react3.default.createElement(\n                    'code',\n                    null,\n                    'badge'\n                  )\n                ),\n                _react3.default.createElement(\n                  'td',\n                  { className: 'uk-text-left' },\n                  'string or object'\n                )\n              ),\n              _react3.default.createElement(\n                'tr',\n                null,\n                _react3.default.createElement(\n                  'td',\n                  { className: 'uk-text-left' },\n                  _react3.default.createElement(\n                    'code',\n                    null,\n                    'body'\n                  )\n                ),\n                _react3.default.createElement(\n                  'td',\n                  { className: 'uk-text-left' },\n                  'string'\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return NoteHandler;\n})(_react3.default.Component));\n\nexports.default = NoteHandler;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(398)(module)))\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub3RlLWRvYy5qc3g/M2NjOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwREFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNRLFdBQVc7O1dBQVgsV0FBVzswQkFBWCxXQUFXOztrRUFBWCxXQUFXOzs7ZUFBWCxXQUFXOzs2QkFDcEI7QUFDUixhQUFPOzs7UUFDTDs7O1VBQ0U7Ozs7V0FBYTtVQUNiOztjQUFHLFNBQVMsRUFBQyxpQkFBaUI7O1dBRTFCO1VBRUo7OztZQUNFOztnQkFBRyxJQUFJLEVBQUMsNENBQTRDOzthQUFxQjs7V0FDdkU7U0FDSTtRQUdWOzs7VUFDRTs7OztXQUFjO1VBQ2Q7Ozs7V0FPWTtVQUVaLHNDQUFJLFNBQVMsRUFBQyxvQkFBb0IsR0FBRztVQUVyQzs7OztZQUdPOzs7O2FBQXlCOztZQUNKOzs7O2FBQWlCOztXQUV6QztVQUVKOztjQUFJLFNBQVMsRUFBQyxTQUFTOztXQUFhO1VBQ3BDOzs7O1dBR087VUFFUDs7Y0FBSSxTQUFTLEVBQUMsTUFBTTs7V0FBVTtVQUM5Qjs7Y0FBVyxNQUFNLEVBQUMsS0FBSzs7V0FXWDtTQUNKO1FBR1Y7OztVQUNFOzs7O1dBQXFCO1VBQ3JCOzs7O1dBRUk7VUFFSjs7Y0FBSSxTQUFTLEVBQUMsU0FBUzs7V0FBYTtVQUNwQzs7Y0FBTSxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQyxRQUFRLEVBQUU7O1dBRzFDO1VBRVA7O2NBQUksU0FBUyxFQUFDLE1BQU07O1dBQVU7VUFDOUI7O2NBQVcsTUFBTSxFQUFDLEtBQUs7O1dBTVg7U0FDSjtRQUdWOzs7VUFDRTs7OztXQUFtQjtVQUNuQjs7OztXQUVJO1VBRUo7OztZQUNFOzs7Y0FDRTs7O2dCQUNFOztvQkFBSSxTQUFTLEVBQUMsY0FBYzs7aUJBQVU7Z0JBQ3RDOztvQkFBSSxTQUFTLEVBQUMsY0FBYzs7aUJBQVU7ZUFDbkM7YUFDQztZQUNSOzs7Y0FDRTs7O2dCQUNFOztvQkFBSSxTQUFTLEVBQUMsY0FBYztrQkFDMUI7Ozs7bUJBQWtCO2lCQUNmO2dCQUNMOztvQkFBSSxTQUFTLEVBQUMsY0FBYzs7aUJBQXNCO2VBQy9DO2NBQ0w7OztnQkFDRTs7b0JBQUksU0FBUyxFQUFDLGNBQWM7a0JBQzFCOzs7O21CQUFpQjtpQkFDZDtnQkFDTDs7b0JBQUksU0FBUyxFQUFDLGNBQWM7O2lCQUFZO2VBQ3JDO2FBQ0M7V0FDRjtTQUNBO09BRU4sQ0FBQztLQUNSOzs7U0FoSGtCLFdBQVc7R0FBUyxnQkFBTSxTQUFTIiwiZmlsZSI6IjM2NDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb2RlYmxvY2sgZnJvbSAncmVhY3QtdWlraXQtY29kZWJsb2NrJztcbmltcG9ydCBOb3RlIGZyb20gJ3JlYWN0LXVpa2l0LW5vdGUnO1xuaW1wb3J0IFRhYmxlIGZyb20gJ3JlYWN0LXVpa2l0LXRhYmxlJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RlSGFuZGxlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgxPk5vdGU8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3VrLWFydGljbGUtbGVhZCc+XG4gICAgICAgICAgRWFzaWx5IGFkZCBub3Rlcy5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9vdGlzc3YvcmVhY3QtdWlraXQtbm90ZSc+cmVhY3QtdWlraXQtbm90ZTwvYT4gb24gZ2l0aHViLlxuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMj5Vc2FnZTwvaDI+XG4gICAgICAgIDxDb2RlYmxvY2s+XG57YG5wbSBpbnN0YWxsIHJlYWN0LXVpa2l0LW5vdGUgLS1zYXZlO1xuLy8gRVM2XG5pbXBvcnQgTm90ZSBmcm9tICdyZWFjdC11aWtpdC1ub3RlJztcblxuLy8gRVM1XG52YXIgTm90ZSA9IHJlcXVpcmUmKCdyZWFjdC11aWtpdC1ub3RlJylgfVxuICAgICAgICA8L0NvZGVibG9jaz5cblxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwidWstYXJ0aWNsZS1kaXZpZGVyXCIgLz5cblxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgTm90ZSBjb21wb25lbnQgY29uc2lzdHMgb2YgYSBwYXJhZ3JhcGggd2l0aCBhIHByZWZpeGVkIGJhZ2RlLlxuICAgICAgICAgIFRvIGNyZWF0ZSBhIE5vdGUgY29tcG9uZW50IGFkZCBhIGxhYmVsIGZvciB0aGUgYmFkZ2VcbiAgICAgICAgICBwcm9wIDxjb2RlPmJhZGdlPSdOT1RFJzwvY29kZT4gYW5kIGVpdGhlciBhZGRcbiAgICAgICAgICB0ZXh0IGFzIGEgY2hpbGQgb3IgdG8gdGhlIDxjb2RlPmJvZHk8L2NvZGU+IHByb3AuXG4gICAgICAgICAgSWYgbm8gYmFnZGUgaXMgcHJvdmlkZWQgVGhlIGRlZmF1bHQgYmFkZ2UgaXMgJ05vdGUnXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICAgICAgPE5vdGU+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXG4gICAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXG4gICAgICAgIDwvTm90ZT5cblxuICAgICAgICA8aDQgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oND5cbiAgICAgICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57YDxOb3RlPlxuICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbiAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXG48L05vdGU+XG5cbjxOb3RlIGJhZGdlPSdFWEFNUExFJz5cbiAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXG4gIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxuPC9Ob3RlPlxuYH1cbiAgICAgICAgPC9Db2RlYmxvY2s+XG4gICAgICA8L3NlY3Rpb24+XG5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMj5Ob3RlIGNvbnRleHQ8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBOb3RlIGJhZGdlcyBjYW4gYmUgZ2l2ZW4gY29udGV4dCB1c2luZyB0aGUgYmFkZ2UgcHJvcCBhbmQgc2V0dGluZyB0aGUgY29udGV4dCBwcm9wZXJ0eS5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgICAgICA8Tm90ZSBiYWRnZT17e2JvZHk6ICdFWEFNUExFJywgY29udGV4dDonZGFuZ2VyJ319PlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxuICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxuICAgICAgICA8L05vdGU+XG5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue2A8Tm90ZSBiYWRnZT17e2JvZHk6ICdFWEFNUExFJywgY29udGV4dDonZGFuZ2VyJ319PlxuICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbiAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXG48L05vdGU+XG4gIGB9XG4gICAgICAgIDwvQ29kZWJsb2NrPlxuICAgICAgPC9zZWN0aW9uPlxuXG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDI+Tm90ZSBQcm9wczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFNlZSBiYXNlIGNvbXBvbmVudCBmb3IgYWRkaXRpb25hbCB1dGlsaXR5IHByb3BzLlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPFRhYmxlPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5Qcm9wPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5UeXBlPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgICAgPGNvZGU+YmFkZ2U8L2NvZGU+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+c3RyaW5nIG9yIG9iamVjdDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICAgIDxjb2RlPmJvZHk8L2NvZGU+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+c3RyaW5nPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgIDwvZGl2PjtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9ub3RlLWRvYy5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})