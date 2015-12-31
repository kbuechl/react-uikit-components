webpackHotUpdate(0,{

/***/ 1432:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitAlert = __webpack_require__(1420);\n\nvar _reactUikitAlert2 = _interopRequireDefault(_reactUikitAlert);\n\nvar _reactUikitCodeblock = __webpack_require__(1422);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitTable = __webpack_require__(1430);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nvar _reactUikitButton = __webpack_require__(469);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nvar _reactUikitBase = __webpack_require__(1421);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _velocityAnimate = __webpack_require__(1597);\n\nvar _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar handleAlertOpen = function handleAlertOpen(e, kitid) {\n  e.preventDefault();\n  var element = _reactUikitBase2.default.helpers.getElement(kitid);\n\n  (0, _velocityAnimate2.default)(element, {\n    opacity: 1,\n    translateX: [0, -300]\n  }, { display: 'block' });\n};\n\nvar handleAlertClose = function handleAlertClose(e) {\n  e.preventDefault();\n  // const kitid = e.targrt.getAttribute('data-kit')\n  var element = _reactUikitBase2.default.helpers.getElement(kitid);\n  console.log(e);\n  (0, _velocityAnimate2.default)(element, {\n    opacity: 1,\n    translateX: [-300, 0]\n  }, { display: 'block' });\n\n  console.log('close');\n};\n\nvar AlertDoc = function AlertDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Alert'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Defines styles for success, warning and error messages.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-alert --save;\\n\\n// ES6\\nimport Alert from \\'react-uikit-alert\\';\\n\\n// ES5\\nvar Alert = require(\\'react-uikit-alert\\');\\n'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The alert component creates an alert box.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitButton2.default, {\n        body: 'Open Alert',\n        onClick: function onClick(e, kitid) {\n          return handleAlertOpen(e, 'alert1');\n        }\n      }),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { close: function close(e) {\n            return handleAlertClose(e);\n          }, kitid: 'alert1' },\n        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Alert>\\nLorem ipsum dolor sit amet, consectetur adipisicing elit\\n</Alert>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Alert close button'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To add a close button add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'close'\n        ),\n        ' prop to the alert component.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { close: function close() {} },\n        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Alert close={(e) => this.handleAlertClose(e)}>\\nLorem ipsum dolor sit amet, consectetur adipisicing elit.\\n</Alert>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Alert contexts'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To change the context of an alert add ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'success\\''\n        ),\n        ', ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'warning\\''\n        ),\n        ', or ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'danger\\''\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { context: 'success' },\n        'To indicate success or a positive message add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'success\\''\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { context: 'warning' },\n        'To indicate a message containing a warning add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'warning\\''\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { context: 'danger' },\n        'To indicate an important message add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'danger\\''\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Alert context=\\'success\\'>\\nTo indicate success or a positive message add the <code>context=\\'success\\'</code> prop.\\n</Alert>\\n<Alert context=\\'warning\\'>\\nTo indicate a message containing a warning add the <code>context=\\'warning\\'</code> prop.\\n</Alert>\\n<Alert context=\\'danger\\'>\\nTo indicate an important message add the <code>context=\\'danger\\'</code> prop.\\n</Alert>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Alert size'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To increase the spacing in an alert add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'large'\n        ),\n        ' prop to the alert component.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { large: true },\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Important notice'\n        ),\n        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Alert large >\\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\ntempor incididunt ut labore et dolore magna aliqua.\\n</Alert>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Alert Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See base component for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'close'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'func'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'context'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              'success, warning or danger'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'large'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'bool'\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = AlertDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hbGVydC1kb2MuanN4P2NhNjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhYixJQUFNLGVBQWUsR0FBRyxTQUFsQixlQUFlLENBQUksQ0FBQyxFQUFFLEtBQUssRUFBSztBQUNwQyxHQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsTUFBTSxPQUFPLEdBQUcseUJBQU0sT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFaEQsaUNBQ0UsT0FBTyxFQUNQO0FBQ0UsV0FBTyxFQUFFLENBQUM7QUFDVixjQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7R0FDdEIsRUFDRCxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FDbkIsQ0FBQztDQUNILENBQUM7O0FBR0YsSUFBTSxnQkFBZ0IsR0FBRyxTQUFuQixnQkFBZ0IsQ0FBSSxDQUFDLEVBQUs7QUFDOUIsR0FBQyxDQUFDLGNBQWMsRUFBRTs7QUFFbEIsTUFBTSxPQUFPLEdBQUcseUJBQU0sT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsRCxTQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2IsaUNBQ0UsT0FBTyxFQUNQO0FBQ0UsV0FBTyxFQUFFLENBQUM7QUFDVixjQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7R0FDdEIsRUFDRCxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FDbkIsQ0FBQzs7QUFFRixTQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQ3RCLENBQUM7O0FBR0YsSUFBTSxRQUFRLEdBQUcsU0FBWCxRQUFRLENBQUksS0FBSztTQUNyQjs7O0lBQ0U7OztNQUNFOzs7O09BQWM7TUFDZDs7VUFBRyxTQUFTLEVBQUMsaUJBQWlCOztPQUUxQjtLQUNJO0lBR1Y7OztNQUNFOzs7O09BQWM7TUFDZDs7OztPQVNZO01BR1o7Ozs7T0FFSTtNQUVKOztVQUFJLFNBQVMsRUFBQyxTQUFTOztPQUFhO01BRXBDO0FBQ0UsWUFBSSxFQUFDLFlBQVk7QUFDakIsZUFBTyxFQUFFLGlCQUFDLENBQUMsRUFBRSxLQUFLO2lCQUFLLGVBQWUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDO1NBQUM7UUFDcEQ7TUFFSjs7VUFBTyxLQUFLLEVBQUUsZUFBQyxDQUFDO21CQUFLLGdCQUFnQixDQUFDLENBQUMsQ0FBQztXQUFDLEVBQUMsS0FBSyxFQUFDLFFBQVE7O09BRzlDO01BR1I7O1VBQUksU0FBUyxFQUFDLE1BQU07O09BQVU7TUFDOUI7O1VBQVcsTUFBTSxFQUFDLEtBQUs7O09BS1g7S0FDSjtJQUVWOzs7TUFDRTs7OztPQUEyQjtNQUMzQjs7OztRQUNnQzs7OztTQUFrQjs7T0FDOUM7TUFFSjs7VUFBSSxTQUFTLEVBQUMsU0FBUzs7T0FBYTtNQUNwQzs7VUFBTyxLQUFLLEVBQUUsaUJBQU0sRUFBRzs7T0FFZjtNQUdSOztVQUFJLFNBQVMsRUFBQyxNQUFNOztPQUFVO01BQzlCOztVQUFXLE1BQU0sRUFBQyxLQUFLOztPQUtYO0tBQ0o7SUFHVjs7O01BQ0U7Ozs7T0FBdUI7TUFDdkI7Ozs7UUFDd0M7Ozs7U0FBOEI7O1FBQUU7Ozs7U0FBOEI7O1FBQ2pHOzs7O1NBQTZCOztPQUM5QjtNQUVKOztVQUFJLFNBQVMsRUFBQyxTQUFTOztPQUFhO01BQ3BDOztVQUFPLE9BQU8sRUFBQyxTQUFTOztRQUM0Qjs7OztTQUE4Qjs7T0FDMUU7TUFDUjs7VUFBTyxPQUFPLEVBQUMsU0FBUzs7UUFDNkI7Ozs7U0FBOEI7O09BQzNFO01BQ1I7O1VBQU8sT0FBTyxFQUFDLFFBQVE7O1FBQ29COzs7O1NBQTZCOztPQUNoRTtNQUdSOztVQUFJLFNBQVMsRUFBQyxNQUFNOztPQUFVO01BQzlCOztVQUFXLE1BQU0sRUFBQyxLQUFLOztPQVdYO0tBQ0o7SUFHVjs7O01BQ0U7Ozs7T0FBbUI7TUFDbkI7Ozs7UUFDOEM7Ozs7U0FBa0I7O09BQzVEO01BRUo7O1VBQUksU0FBUyxFQUFDLFNBQVM7O09BQWE7TUFDcEM7O1VBQU8sS0FBSztRQUNWOzs7O1NBQXlCOztPQUduQjtNQUdSOztVQUFJLFNBQVMsRUFBQyxNQUFNOztPQUFVO01BQzlCOztVQUFXLE1BQU0sRUFBQyxLQUFLOztPQU1YO0tBQ0o7SUFHVjs7O01BQ0U7Ozs7T0FBb0I7TUFFcEI7Ozs7T0FFSTtNQUVKOzs7UUFDRTs7O1VBQ0U7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7YUFBVTtZQUN0Qzs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVU7V0FDbkM7U0FDQztRQUNSOzs7VUFDRTs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjO2NBQzFCOzs7O2VBQWtCO2FBQ2Y7WUFDTDs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVU7V0FDbkM7VUFDTDs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjO2NBQzFCOzs7O2VBQW9CO2FBQ2pCO1lBQ0w7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOztjQUNwQix5Q0FBTTs7YUFFVDtXQUNGO1VBQ0w7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYztjQUMxQjs7OztlQUFrQjthQUNmO1lBQ0w7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUFVO1dBQ25DO1NBQ0M7T0FDRjtLQUNBO0dBRU47Q0FDUCxDQUFDOztrQkFHYSxRQUFRIiwiZmlsZSI6IjE0MzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWFsZXJ0JztcbmltcG9ydCBDb2RlYmxvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1jb2RlYmxvY2snO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtdGFibGUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWJ1dHRvbic7XG5pbXBvcnQgdWlraXQgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1iYXNlJztcbmltcG9ydCB2ZWxvY2l0eSBmcm9tICd2ZWxvY2l0eS1hbmltYXRlJztcblxuXG5cbmNvbnN0IGhhbmRsZUFsZXJ0T3BlbiA9IChlLCBraXRpZCkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGVsZW1lbnQgPSB1aWtpdC5oZWxwZXJzLmdldEVsZW1lbnQoa2l0aWQpO1xuXG4gIHZlbG9jaXR5KFxuICAgIGVsZW1lbnQsXG4gICAge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zbGF0ZVg6IFswLCAtMzAwXVxuICAgIH0sXG4gICAge2Rpc3BsYXk6ICdibG9jayd9XG4gICk7XG59O1xuXG5cbmNvbnN0IGhhbmRsZUFsZXJ0Q2xvc2UgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIGNvbnN0IGtpdGlkID0gZS50YXJncnQuZ2V0QXR0cmlidXRlKCdkYXRhLWtpdCcpXG4gIGNvbnN0IGVsZW1lbnQgPSB1aWtpdC5oZWxwZXJzLmdldEVsZW1lbnQoa2l0aWQpO1xuY29uc29sZS5sb2coZSk7XG4gIHZlbG9jaXR5KFxuICAgIGVsZW1lbnQsXG4gICAge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zbGF0ZVg6IFstMzAwLCAwXVxuICAgIH0sXG4gICAge2Rpc3BsYXk6ICdibG9jayd9XG4gICk7XG5cbiAgY29uc29sZS5sb2coJ2Nsb3NlJyk7XG59O1xuXG5cbmNvbnN0IEFsZXJ0RG9jID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDE+QWxlcnQ8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPSd1ay1hcnRpY2xlLWxlYWQnPlxuICAgICAgICBEZWZpbmVzIHN0eWxlcyBmb3Igc3VjY2Vzcywgd2FybmluZyBhbmQgZXJyb3IgbWVzc2FnZXMuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5Vc2FnZTwvaDI+XG4gICAgICA8Q29kZWJsb2NrPlxue2BucG0gaW5zdGFsbCByZWFjdC11aWtpdC1hbGVydCAtLXNhdmU7XG5cbi8vIEVTNlxuaW1wb3J0IEFsZXJ0IGZyb20gJ3JlYWN0LXVpa2l0LWFsZXJ0JztcblxuLy8gRVM1XG52YXIgQWxlcnQgPSByZXF1aXJlKCdyZWFjdC11aWtpdC1hbGVydCcpO1xuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuXG5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgYWxlcnQgY29tcG9uZW50IGNyZWF0ZXMgYW4gYWxlcnQgYm94LlxuICAgICAgPC9wPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cblxuICAgICAgPEJ1dHRvblxuICAgICAgICBib2R5PSdPcGVuIEFsZXJ0J1xuICAgICAgICBvbkNsaWNrPXsoZSwga2l0aWQpID0+IGhhbmRsZUFsZXJ0T3BlbihlLCAnYWxlcnQxJyl9XG4gICAgICAvPlxuXG4gICAgPEFsZXJ0IGNsb3NlPXsoZSkgPT4gaGFuZGxlQWxlcnRDbG9zZShlKX0ga2l0aWQ9J2FsZXJ0MSc+XG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxuICAgICAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cbiAgICAgIDwvQWxlcnQ+XG5cblxuICAgICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgICA8Q29kZWJsb2NrIHN5bnRheD0neG1sJz5cbntgPEFsZXJ0PlxuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXRcbjwvQWxlcnQ+XG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+QWxlcnQgY2xvc2UgYnV0dG9uPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBUbyBhZGQgYSBjbG9zZSBidXR0b24gYWRkIHRoZSA8Y29kZT5jbG9zZTwvY29kZT4gcHJvcCB0byB0aGUgYWxlcnQgY29tcG9uZW50LlxuICAgICAgPC9wPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICAgIDxBbGVydCBjbG9zZT17KCkgPT4ge319PlxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cbiAgICAgIDwvQWxlcnQ+XG5cblxuICAgICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgICA8Q29kZWJsb2NrIHN5bnRheD0neG1sJz5cbntgPEFsZXJ0IGNsb3NlPXsoZSkgPT4gdGhpcy5oYW5kbGVBbGVydENsb3NlKGUpfT5cbkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxuPC9BbGVydD5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkFsZXJ0IGNvbnRleHRzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBUbyBjaGFuZ2UgdGhlIGNvbnRleHQgb2YgYW4gYWxlcnQgYWRkIDxjb2RlPmNvbnRleHQ9J3N1Y2Nlc3MnPC9jb2RlPiwgPGNvZGU+Y29udGV4dD0nd2FybmluZyc8L2NvZGU+LFxuICAgICAgICBvciA8Y29kZT5jb250ZXh0PSdkYW5nZXInPC9jb2RlPiBwcm9wLlxuICAgICAgPC9wPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICAgIDxBbGVydCBjb250ZXh0PSdzdWNjZXNzJz5cbiAgICAgICAgVG8gaW5kaWNhdGUgc3VjY2VzcyBvciBhIHBvc2l0aXZlIG1lc3NhZ2UgYWRkIHRoZSA8Y29kZT5jb250ZXh0PSdzdWNjZXNzJzwvY29kZT4gcHJvcC5cbiAgICAgIDwvQWxlcnQ+XG4gICAgICA8QWxlcnQgY29udGV4dD0nd2FybmluZyc+XG4gICAgICAgIFRvIGluZGljYXRlIGEgbWVzc2FnZSBjb250YWluaW5nIGEgd2FybmluZyBhZGQgdGhlIDxjb2RlPmNvbnRleHQ9J3dhcm5pbmcnPC9jb2RlPiBwcm9wLlxuICAgICAgPC9BbGVydD5cbiAgICAgIDxBbGVydCBjb250ZXh0PSdkYW5nZXInPlxuICAgICAgICBUbyBpbmRpY2F0ZSBhbiBpbXBvcnRhbnQgbWVzc2FnZSBhZGQgdGhlIDxjb2RlPmNvbnRleHQ9J2Rhbmdlcic8L2NvZGU+IHByb3AuXG4gICAgICA8L0FsZXJ0PlxuXG5cbiAgICAgIDxoNCBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2g0PlxuICAgICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57YDxBbGVydCBjb250ZXh0PSdzdWNjZXNzJz5cblRvIGluZGljYXRlIHN1Y2Nlc3Mgb3IgYSBwb3NpdGl2ZSBtZXNzYWdlIGFkZCB0aGUgPGNvZGU+Y29udGV4dD0nc3VjY2Vzcyc8L2NvZGU+IHByb3AuXG48L0FsZXJ0PlxuPEFsZXJ0IGNvbnRleHQ9J3dhcm5pbmcnPlxuVG8gaW5kaWNhdGUgYSBtZXNzYWdlIGNvbnRhaW5pbmcgYSB3YXJuaW5nIGFkZCB0aGUgPGNvZGU+Y29udGV4dD0nd2FybmluZyc8L2NvZGU+IHByb3AuXG48L0FsZXJ0PlxuPEFsZXJ0IGNvbnRleHQ9J2Rhbmdlcic+XG5UbyBpbmRpY2F0ZSBhbiBpbXBvcnRhbnQgbWVzc2FnZSBhZGQgdGhlIDxjb2RlPmNvbnRleHQ9J2Rhbmdlcic8L2NvZGU+IHByb3AuXG48L0FsZXJ0PlxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+QWxlcnQgc2l6ZTwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgVG8gaW5jcmVhc2UgdGhlIHNwYWNpbmcgaW4gYW4gYWxlcnQgYWRkIHRoZSA8Y29kZT5sYXJnZTwvY29kZT4gcHJvcCB0byB0aGUgYWxlcnQgY29tcG9uZW50LlxuICAgICAgPC9wPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICAgIDxBbGVydCBsYXJnZSA+XG4gICAgICAgIDxoMT5JbXBvcnRhbnQgbm90aWNlPC9oMT5cbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXG4gICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxuICAgICAgPC9BbGVydD5cblxuXG4gICAgICA8aDQgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oND5cbiAgICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue2A8QWxlcnQgbGFyZ2UgPlxuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXG50ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cbjwvQWxlcnQ+XG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5BbGVydCBQcm9wczwvaDI+XG5cbiAgICAgIDxwPlxuICAgICAgICBTZWUgYmFzZSBjb21wb25lbnQgZm9yIGFkZGl0aW9uYWwgdXRpbGl0eSBwcm9wcy5cbiAgICAgIDwvcD5cblxuICAgICAgPFRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5Qcm9wPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+VHlwZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0ciA+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICA8Y29kZT5jbG9zZTwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPmZ1bmM8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+Y29udGV4dDwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICBvbmVPZiA8YnIgLz5cbiAgICAgICAgICAgICAgc3VjY2Vzcywgd2FybmluZyBvciBkYW5nZXJcbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICA8Y29kZT5sYXJnZTwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPmJvb2w8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvc2VjdGlvbj5cblxuICA8L2Rpdj5cbik7XG5cblxuZXhwb3J0IGRlZmF1bHQgQWxlcnREb2M7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FsZXJ0LWRvYy5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})