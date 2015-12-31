webpackHotUpdate(0,{

/***/ 1432:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitAlert = __webpack_require__(1420);\n\nvar _reactUikitAlert2 = _interopRequireDefault(_reactUikitAlert);\n\nvar _reactUikitCodeblock = __webpack_require__(1422);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitTable = __webpack_require__(1430);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nvar _reactUikitButton = __webpack_require__(469);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nvar _reactUikitBase = __webpack_require__(1421);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _velocityAnimate = __webpack_require__(1597);\n\nvar _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar handleAlertOpen = function handleAlertOpen(e, kitid) {\n  e.preventDefault();\n  var element = _reactUikitBase2.default.helpers.getElement(kitid);\n\n  (0, _velocityAnimate2.default)(element, {\n    opacity: 1,\n    translateX: [0, -300]\n  }, { display: 'block' });\n};\n\nvar handleAlertClose = function handleAlertClose(e, kitid) {\n  e.preventDefault();\n  var element = _reactUikitBase2.default.helpers.getElement(kitid);\n  console.log(element);\n  (0, _velocityAnimate2.default)(element, {\n    opacity: 1,\n    translateX: [-300, 0]\n  }, { display: 'block' });\n\n  console.log('close');\n};\n\nvar AlertDoc = function AlertDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Alert'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Defines styles for success, warning and error messages.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-alert --save;\\n\\n// ES6\\nimport Alert from \\'react-uikit-alert\\';\\n\\n// ES5\\nvar Alert = require(\\'react-uikit-alert\\');\\n'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The alert component creates an alert box.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitButton2.default, {\n        body: 'Open Alert',\n        onClick: function onClick(e, kitid) {\n          return handleAlertOpen(e, 'alert1');\n        }\n      }),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { close: function close(e) {\n            return handleAlertClose(e);\n          }, kitid: 'alert1' },\n        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Alert>\\nLorem ipsum dolor sit amet, consectetur adipisicing elit\\n</Alert>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Alert close button'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To add a close button add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'close'\n        ),\n        ' prop to the alert component.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { close: function close() {} },\n        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Alert close={(e) => this.handleAlertClose(e)}>\\nLorem ipsum dolor sit amet, consectetur adipisicing elit.\\n</Alert>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Alert contexts'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To change the context of an alert add ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'success\\''\n        ),\n        ', ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'warning\\''\n        ),\n        ', or ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'danger\\''\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { context: 'success' },\n        'To indicate success or a positive message add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'success\\''\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { context: 'warning' },\n        'To indicate a message containing a warning add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'warning\\''\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { context: 'danger' },\n        'To indicate an important message add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'danger\\''\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Alert context=\\'success\\'>\\nTo indicate success or a positive message add the <code>context=\\'success\\'</code> prop.\\n</Alert>\\n<Alert context=\\'warning\\'>\\nTo indicate a message containing a warning add the <code>context=\\'warning\\'</code> prop.\\n</Alert>\\n<Alert context=\\'danger\\'>\\nTo indicate an important message add the <code>context=\\'danger\\'</code> prop.\\n</Alert>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Alert size'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To increase the spacing in an alert add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'large'\n        ),\n        ' prop to the alert component.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { large: true },\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Important notice'\n        ),\n        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Alert large >\\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\ntempor incididunt ut labore et dolore magna aliqua.\\n</Alert>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Alert Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See base component for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'close'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'func'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'context'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              'success, warning or danger'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'large'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'bool'\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = AlertDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hbGVydC1kb2MuanN4P2NhNjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhYixJQUFNLGVBQWUsR0FBRyxTQUFsQixlQUFlLENBQUksQ0FBQyxFQUFFLEtBQUssRUFBSztBQUNwQyxHQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsTUFBTSxPQUFPLEdBQUcseUJBQU0sT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFaEQsaUNBQ0UsT0FBTyxFQUNQO0FBQ0UsV0FBTyxFQUFFLENBQUM7QUFDVixjQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7R0FDdEIsRUFDRCxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FDbkIsQ0FBQztDQUNILENBQUM7O0FBR0YsSUFBTSxnQkFBZ0IsR0FBRyxTQUFuQixnQkFBZ0IsQ0FBSSxDQUFDLEVBQUUsS0FBSyxFQUFLO0FBQ3JDLEdBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQixNQUFNLE9BQU8sR0FBRyx5QkFBTSxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xELFNBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkIsaUNBQ0UsT0FBTyxFQUNQO0FBQ0UsV0FBTyxFQUFFLENBQUM7QUFDVixjQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7R0FDdEIsRUFDRCxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FDbkIsQ0FBQzs7QUFFRixTQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQ3RCLENBQUM7O0FBR0YsSUFBTSxRQUFRLEdBQUcsU0FBWCxRQUFRLENBQUksS0FBSztTQUNyQjs7O0lBQ0U7OztNQUNFOzs7O09BQWM7TUFDZDs7VUFBRyxTQUFTLEVBQUMsaUJBQWlCOztPQUUxQjtLQUNJO0lBR1Y7OztNQUNFOzs7O09BQWM7TUFDZDs7OztPQVNZO01BR1o7Ozs7T0FFSTtNQUVKOztVQUFJLFNBQVMsRUFBQyxTQUFTOztPQUFhO01BRXBDO0FBQ0UsWUFBSSxFQUFDLFlBQVk7QUFDakIsZUFBTyxFQUFFLGlCQUFDLENBQUMsRUFBRSxLQUFLO2lCQUFLLGVBQWUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDO1NBQUM7UUFDcEQ7TUFFSjs7VUFBTyxLQUFLLEVBQUUsZUFBQyxDQUFDO21CQUFLLGdCQUFnQixDQUFDLENBQUMsQ0FBQztXQUFDLEVBQUMsS0FBSyxFQUFDLFFBQVE7O09BRzlDO01BR1I7O1VBQUksU0FBUyxFQUFDLE1BQU07O09BQVU7TUFDOUI7O1VBQVcsTUFBTSxFQUFDLEtBQUs7O09BS1g7S0FDSjtJQUVWOzs7TUFDRTs7OztPQUEyQjtNQUMzQjs7OztRQUNnQzs7OztTQUFrQjs7T0FDOUM7TUFFSjs7VUFBSSxTQUFTLEVBQUMsU0FBUzs7T0FBYTtNQUNwQzs7VUFBTyxLQUFLLEVBQUUsaUJBQU0sRUFBRzs7T0FFZjtNQUdSOztVQUFJLFNBQVMsRUFBQyxNQUFNOztPQUFVO01BQzlCOztVQUFXLE1BQU0sRUFBQyxLQUFLOztPQUtYO0tBQ0o7SUFHVjs7O01BQ0U7Ozs7T0FBdUI7TUFDdkI7Ozs7UUFDd0M7Ozs7U0FBOEI7O1FBQUU7Ozs7U0FBOEI7O1FBQ2pHOzs7O1NBQTZCOztPQUM5QjtNQUVKOztVQUFJLFNBQVMsRUFBQyxTQUFTOztPQUFhO01BQ3BDOztVQUFPLE9BQU8sRUFBQyxTQUFTOztRQUM0Qjs7OztTQUE4Qjs7T0FDMUU7TUFDUjs7VUFBTyxPQUFPLEVBQUMsU0FBUzs7UUFDNkI7Ozs7U0FBOEI7O09BQzNFO01BQ1I7O1VBQU8sT0FBTyxFQUFDLFFBQVE7O1FBQ29COzs7O1NBQTZCOztPQUNoRTtNQUdSOztVQUFJLFNBQVMsRUFBQyxNQUFNOztPQUFVO01BQzlCOztVQUFXLE1BQU0sRUFBQyxLQUFLOztPQVdYO0tBQ0o7SUFHVjs7O01BQ0U7Ozs7T0FBbUI7TUFDbkI7Ozs7UUFDOEM7Ozs7U0FBa0I7O09BQzVEO01BRUo7O1VBQUksU0FBUyxFQUFDLFNBQVM7O09BQWE7TUFDcEM7O1VBQU8sS0FBSztRQUNWOzs7O1NBQXlCOztPQUduQjtNQUdSOztVQUFJLFNBQVMsRUFBQyxNQUFNOztPQUFVO01BQzlCOztVQUFXLE1BQU0sRUFBQyxLQUFLOztPQU1YO0tBQ0o7SUFHVjs7O01BQ0U7Ozs7T0FBb0I7TUFFcEI7Ozs7T0FFSTtNQUVKOzs7UUFDRTs7O1VBQ0U7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7YUFBVTtZQUN0Qzs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVU7V0FDbkM7U0FDQztRQUNSOzs7VUFDRTs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjO2NBQzFCOzs7O2VBQWtCO2FBQ2Y7WUFDTDs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVU7V0FDbkM7VUFDTDs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjO2NBQzFCOzs7O2VBQW9CO2FBQ2pCO1lBQ0w7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOztjQUNwQix5Q0FBTTs7YUFFVDtXQUNGO1VBQ0w7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYztjQUMxQjs7OztlQUFrQjthQUNmO1lBQ0w7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUFVO1dBQ25DO1NBQ0M7T0FDRjtLQUNBO0dBRU47Q0FDUCxDQUFDOztrQkFHYSxRQUFRIiwiZmlsZSI6IjE0MzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWFsZXJ0JztcbmltcG9ydCBDb2RlYmxvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1jb2RlYmxvY2snO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtdGFibGUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWJ1dHRvbic7XG5pbXBvcnQgdWlraXQgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1iYXNlJztcbmltcG9ydCB2ZWxvY2l0eSBmcm9tICd2ZWxvY2l0eS1hbmltYXRlJztcblxuXG5cbmNvbnN0IGhhbmRsZUFsZXJ0T3BlbiA9IChlLCBraXRpZCkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGVsZW1lbnQgPSB1aWtpdC5oZWxwZXJzLmdldEVsZW1lbnQoa2l0aWQpO1xuXG4gIHZlbG9jaXR5KFxuICAgIGVsZW1lbnQsXG4gICAge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zbGF0ZVg6IFswLCAtMzAwXVxuICAgIH0sXG4gICAge2Rpc3BsYXk6ICdibG9jayd9XG4gICk7XG59O1xuXG5cbmNvbnN0IGhhbmRsZUFsZXJ0Q2xvc2UgPSAoZSwga2l0aWQpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBlbGVtZW50ID0gdWlraXQuaGVscGVycy5nZXRFbGVtZW50KGtpdGlkKTtcbmNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICB2ZWxvY2l0eShcbiAgICBlbGVtZW50LFxuICAgIHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2xhdGVYOiBbLTMwMCwgMF1cbiAgICB9LFxuICAgIHtkaXNwbGF5OiAnYmxvY2snfVxuICApO1xuXG4gIGNvbnNvbGUubG9nKCdjbG9zZScpO1xufTtcblxuXG5jb25zdCBBbGVydERvYyA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPkFsZXJ0PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT0ndWstYXJ0aWNsZS1sZWFkJz5cbiAgICAgICAgRGVmaW5lcyBzdHlsZXMgZm9yIHN1Y2Nlc3MsIHdhcm5pbmcgYW5kIGVycm9yIG1lc3NhZ2VzLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+VXNhZ2U8L2gyPlxuICAgICAgPENvZGVibG9jaz5cbntgbnBtIGluc3RhbGwgcmVhY3QtdWlraXQtYWxlcnQgLS1zYXZlO1xuXG4vLyBFUzZcbmltcG9ydCBBbGVydCBmcm9tICdyZWFjdC11aWtpdC1hbGVydCc7XG5cbi8vIEVTNVxudmFyIEFsZXJ0ID0gcmVxdWlyZSgncmVhY3QtdWlraXQtYWxlcnQnKTtcbmB9XG4gICAgICA8L0NvZGVibG9jaz5cblxuXG4gICAgICA8cD5cbiAgICAgICAgVGhlIGFsZXJ0IGNvbXBvbmVudCBjcmVhdGVzIGFuIGFsZXJ0IGJveC5cbiAgICAgIDwvcD5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgYm9keT0nT3BlbiBBbGVydCdcbiAgICAgICAgb25DbGljaz17KGUsIGtpdGlkKSA9PiBoYW5kbGVBbGVydE9wZW4oZSwgJ2FsZXJ0MScpfVxuICAgICAgLz5cblxuICAgIDxBbGVydCBjbG9zZT17KGUpID0+IGhhbmRsZUFsZXJ0Q2xvc2UoZSl9IGtpdGlkPSdhbGVydDEnPlxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbiAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXG4gICAgICA8L0FsZXJ0PlxuXG5cbiAgICAgIDxoNCBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2g0PlxuICAgICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57YDxBbGVydD5cbkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0XG48L0FsZXJ0PlxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkFsZXJ0IGNsb3NlIGJ1dHRvbjwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgVG8gYWRkIGEgY2xvc2UgYnV0dG9uIGFkZCB0aGUgPGNvZGU+Y2xvc2U8L2NvZGU+IHByb3AgdG8gdGhlIGFsZXJ0IGNvbXBvbmVudC5cbiAgICAgIDwvcD5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgICA8QWxlcnQgY2xvc2U9eygpID0+IHt9fT5cbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXG4gICAgICA8L0FsZXJ0PlxuXG5cbiAgICAgIDxoNCBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2g0PlxuICAgICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57YDxBbGVydCBjbG9zZT17KGUpID0+IHRoaXMuaGFuZGxlQWxlcnRDbG9zZShlKX0+XG5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cbjwvQWxlcnQ+XG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5BbGVydCBjb250ZXh0czwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgVG8gY2hhbmdlIHRoZSBjb250ZXh0IG9mIGFuIGFsZXJ0IGFkZCA8Y29kZT5jb250ZXh0PSdzdWNjZXNzJzwvY29kZT4sIDxjb2RlPmNvbnRleHQ9J3dhcm5pbmcnPC9jb2RlPixcbiAgICAgICAgb3IgPGNvZGU+Y29udGV4dD0nZGFuZ2VyJzwvY29kZT4gcHJvcC5cbiAgICAgIDwvcD5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgICA8QWxlcnQgY29udGV4dD0nc3VjY2Vzcyc+XG4gICAgICAgIFRvIGluZGljYXRlIHN1Y2Nlc3Mgb3IgYSBwb3NpdGl2ZSBtZXNzYWdlIGFkZCB0aGUgPGNvZGU+Y29udGV4dD0nc3VjY2Vzcyc8L2NvZGU+IHByb3AuXG4gICAgICA8L0FsZXJ0PlxuICAgICAgPEFsZXJ0IGNvbnRleHQ9J3dhcm5pbmcnPlxuICAgICAgICBUbyBpbmRpY2F0ZSBhIG1lc3NhZ2UgY29udGFpbmluZyBhIHdhcm5pbmcgYWRkIHRoZSA8Y29kZT5jb250ZXh0PSd3YXJuaW5nJzwvY29kZT4gcHJvcC5cbiAgICAgIDwvQWxlcnQ+XG4gICAgICA8QWxlcnQgY29udGV4dD0nZGFuZ2VyJz5cbiAgICAgICAgVG8gaW5kaWNhdGUgYW4gaW1wb3J0YW50IG1lc3NhZ2UgYWRkIHRoZSA8Y29kZT5jb250ZXh0PSdkYW5nZXInPC9jb2RlPiBwcm9wLlxuICAgICAgPC9BbGVydD5cblxuXG4gICAgICA8aDQgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oND5cbiAgICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue2A8QWxlcnQgY29udGV4dD0nc3VjY2Vzcyc+XG5UbyBpbmRpY2F0ZSBzdWNjZXNzIG9yIGEgcG9zaXRpdmUgbWVzc2FnZSBhZGQgdGhlIDxjb2RlPmNvbnRleHQ9J3N1Y2Nlc3MnPC9jb2RlPiBwcm9wLlxuPC9BbGVydD5cbjxBbGVydCBjb250ZXh0PSd3YXJuaW5nJz5cblRvIGluZGljYXRlIGEgbWVzc2FnZSBjb250YWluaW5nIGEgd2FybmluZyBhZGQgdGhlIDxjb2RlPmNvbnRleHQ9J3dhcm5pbmcnPC9jb2RlPiBwcm9wLlxuPC9BbGVydD5cbjxBbGVydCBjb250ZXh0PSdkYW5nZXInPlxuVG8gaW5kaWNhdGUgYW4gaW1wb3J0YW50IG1lc3NhZ2UgYWRkIHRoZSA8Y29kZT5jb250ZXh0PSdkYW5nZXInPC9jb2RlPiBwcm9wLlxuPC9BbGVydD5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkFsZXJ0IHNpemU8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFRvIGluY3JlYXNlIHRoZSBzcGFjaW5nIGluIGFuIGFsZXJ0IGFkZCB0aGUgPGNvZGU+bGFyZ2U8L2NvZGU+IHByb3AgdG8gdGhlIGFsZXJ0IGNvbXBvbmVudC5cbiAgICAgIDwvcD5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgICA8QWxlcnQgbGFyZ2UgPlxuICAgICAgICA8aDE+SW1wb3J0YW50IG5vdGljZTwvaDE+XG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxuICAgICAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cbiAgICAgIDwvQWxlcnQ+XG5cblxuICAgICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgICA8Q29kZWJsb2NrIHN5bnRheD0neG1sJz5cbntgPEFsZXJ0IGxhcmdlID5cbkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxudGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXG48L0FsZXJ0PlxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+QWxlcnQgUHJvcHM8L2gyPlxuXG4gICAgICA8cD5cbiAgICAgICAgU2VlIGJhc2UgY29tcG9uZW50IGZvciBhZGRpdGlvbmFsIHV0aWxpdHkgcHJvcHMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxUYWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+UHJvcDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlR5cGU8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHIgPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+Y2xvc2U8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5mdW5jPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPmNvbnRleHQ8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgb25lT2YgPGJyIC8+XG4gICAgICAgICAgICAgIHN1Y2Nlc3MsIHdhcm5pbmcgb3IgZGFuZ2VyXG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+bGFyZ2U8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5ib29sPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8L3NlY3Rpb24+XG5cbiAgPC9kaXY+XG4pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0RG9jO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hbGVydC1kb2MuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})