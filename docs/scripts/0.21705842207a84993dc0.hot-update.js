webpackHotUpdate(0,{

/***/ 1432:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitAlert = __webpack_require__(1420);\n\nvar _reactUikitAlert2 = _interopRequireDefault(_reactUikitAlert);\n\nvar _reactUikitCodeblock = __webpack_require__(1422);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitTable = __webpack_require__(1430);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nvar _reactUikitButton = __webpack_require__(469);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nvar _reactUikitBase = __webpack_require__(1421);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _velocityAnimate = __webpack_require__(1597);\n\nvar _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar handleAlertOpen = function handleAlertOpen(e, kitid) {\n  e.preventDefault();\n  var element = _reactUikitBase2.default.helpers.getElement(kitid);\n\n  (0, _velocityAnimate2.default)(element, {\n    opacity: [1, 0.5],\n    translateX: [0, -300]\n  }, { display: 'block' });\n};\n\nvar handleAlertClose = function handleAlertClose(e, kitid) {\n  e.preventDefault();\n  var element = _reactUikitBase2.default.helpers.getElement(kitid);\n\n  (0, _velocityAnimate2.default)(element, {\n    opacity: [0, 1],\n    translateX: [-300, 0]\n  }, { display: 'block' });\n};\n\nvar AlertDoc = function AlertDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Alert'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Defines styles for success, warning and error messages.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-alert --save;\\n\\n// ES6\\nimport Alert from \\'react-uikit-alert\\';\\n\\n// ES5\\nvar Alert = require(\\'react-uikit-alert\\');\\n'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The alert component creates an alert box.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To add a close button add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'close'\n        ),\n        ' prop with a callback. The kitid as well as the event will be passed to the callback alllowing for things such as animations.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'By default Alert components are set to display none. Add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'show'\n        ),\n        ' to make the component visible.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitButton2.default, {\n        body: 'Open Alert',\n        onClick: function onClick(e, kitid) {\n          return handleAlertOpen(e, 'alert1');\n        }\n      }),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { close: function close(e, kitid) {\n            return handleAlertClose(e, kitid);\n          }, kitid: 'alert1' },\n        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        'const handleAlertOpen = (e, kitid) => {\\n  e.preventDefault();\\n  const element = uikit.helpers.getElement(kitid);\\n\\n  velocity(\\n    element,\\n    {\\n      opacity: [1, 0.5],\\n      translateX: [0, -300]\\n    },\\n    {display: \\'block\\'}\\n  );\\n};\\n\\nconst handleAlertClose = (e, kitid) => {\\n  e.preventDefault();\\n  const element = uikit.helpers.getElement(kitid);\\n\\n  velocity(\\n    element,\\n    {\\n      opacity: [0, 1],\\n      translateX: [-300, 0]\\n    },\\n    {display: \\'block\\'}\\n  );\\n};\\n\\n...\\n\\n<Button\\n  body=\\'Open Alert\\'\\n  onClick={(e, kitid) => handleAlertOpen(e, \\'alert1\\')}\\n/>\\n\\n<Alert close={(e, kitid) => handleAlertClose(e, kitid)} kitid=\\'alert1\\'>\\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n  tempor incididunt ut labore et dolore magna aliqua.\\n</Alert>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Alert contexts'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To change the context of an alert add ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'success\\''\n        ),\n        ', ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'warning\\''\n        ),\n        ', or ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'danger\\''\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { context: 'success' },\n        'To indicate success or a positive message add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'success\\''\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { context: 'warning' },\n        'To indicate a message containing a warning add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'warning\\''\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { context: 'danger' },\n        'To indicate an important message add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'danger\\''\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Alert context=\\'success\\'>\\nTo indicate success or a positive message add the <code>context=\\'success\\'</code> prop.\\n</Alert>\\n<Alert context=\\'warning\\'>\\nTo indicate a message containing a warning add the <code>context=\\'warning\\'</code> prop.\\n</Alert>\\n<Alert context=\\'danger\\'>\\nTo indicate an important message add the <code>context=\\'danger\\'</code> prop.\\n</Alert>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Alert size'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To increase the spacing in an alert add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'large'\n        ),\n        ' prop to the alert component.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { show: true, large: true },\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Important notice'\n        ),\n        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Alert large >\\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\ntempor incididunt ut labore et dolore magna aliqua.\\n</Alert>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Alert Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See base component for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'close'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'func'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'context'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              'success, warning or danger'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'large'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'bool'\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = AlertDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hbGVydC1kb2MuanN4P2NhNjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhYixJQUFNLGVBQWUsR0FBRyxTQUFsQixlQUFlLENBQUksQ0FBQyxFQUFFLEtBQUssRUFBSztBQUNwQyxHQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsTUFBTSxPQUFPLEdBQUcseUJBQU0sT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFaEQsaUNBQ0UsT0FBTyxFQUNQO0FBQ0UsV0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUNqQixjQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7R0FDdEIsRUFDRCxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FDbkIsQ0FBQztDQUNILENBQUM7O0FBR0YsSUFBTSxnQkFBZ0IsR0FBRyxTQUFuQixnQkFBZ0IsQ0FBSSxDQUFDLEVBQUUsS0FBSyxFQUFLO0FBQ3JDLEdBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQixNQUFNLE9BQU8sR0FBRyx5QkFBTSxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVoRCxpQ0FDRSxPQUFPLEVBQ1A7QUFDRSxXQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2YsY0FBVSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0dBQ3RCLEVBQ0QsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQ25CLENBQUM7Q0FDSCxDQUFDOztBQUdGLElBQU0sUUFBUSxHQUFHLFNBQVgsUUFBUSxDQUFJLEtBQUs7U0FDckI7OztJQUNFOzs7TUFDRTs7OztPQUFjO01BQ2Q7O1VBQUcsU0FBUyxFQUFDLGlCQUFpQjs7T0FFMUI7S0FDSTtJQUdWOzs7TUFDRTs7OztPQUFjO01BQ2Q7Ozs7T0FTWTtNQUdaOzs7O09BRUk7TUFFSjs7OztRQUNnQzs7OztTQUFrQjs7T0FFOUM7TUFDSjs7OztRQUMrRDs7OztTQUFpQjs7T0FFNUU7TUFDSjs7VUFBSSxTQUFTLEVBQUMsU0FBUzs7T0FBYTtNQUVwQztBQUNFLFlBQUksRUFBQyxZQUFZO0FBQ2pCLGVBQU8sRUFBRSxpQkFBQyxDQUFDLEVBQUUsS0FBSztpQkFBSyxlQUFlLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQztTQUFDO1FBQ3BEO01BRUY7O1VBQU8sS0FBSyxFQUFFLGVBQUMsQ0FBQyxFQUFFLEtBQUs7bUJBQUssZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztXQUFDLEVBQUMsS0FBSyxFQUFDLFFBQVE7O09BRzlEO01BR1I7O1VBQUksU0FBUyxFQUFDLE1BQU07O09BQVU7TUFDOUI7O1VBQVcsTUFBTSxFQUFDLEtBQUs7O09BeUNYO0tBQ0o7SUFHVjs7O01BQ0U7Ozs7T0FBdUI7TUFDdkI7Ozs7UUFDd0M7Ozs7U0FBOEI7O1FBQUU7Ozs7U0FBOEI7O1FBQ2pHOzs7O1NBQTZCOztPQUM5QjtNQUVKOztVQUFJLFNBQVMsRUFBQyxTQUFTOztPQUFhO01BQ3BDOztVQUFPLE9BQU8sRUFBQyxTQUFTOztRQUM0Qjs7OztTQUE4Qjs7T0FDMUU7TUFDUjs7VUFBTyxPQUFPLEVBQUMsU0FBUzs7UUFDNkI7Ozs7U0FBOEI7O09BQzNFO01BQ1I7O1VBQU8sT0FBTyxFQUFDLFFBQVE7O1FBQ29COzs7O1NBQTZCOztPQUNoRTtNQUdSOztVQUFJLFNBQVMsRUFBQyxNQUFNOztPQUFVO01BQzlCOztVQUFXLE1BQU0sRUFBQyxLQUFLOztPQVdYO0tBQ0o7SUFHVjs7O01BQ0U7Ozs7T0FBbUI7TUFDbkI7Ozs7UUFDOEM7Ozs7U0FBa0I7O09BQzVEO01BRUo7O1VBQUksU0FBUyxFQUFDLFNBQVM7O09BQWE7TUFDcEM7O1VBQU8sSUFBSSxRQUFDLEtBQUs7UUFDZjs7OztTQUF5Qjs7T0FHbkI7TUFHUjs7VUFBSSxTQUFTLEVBQUMsTUFBTTs7T0FBVTtNQUM5Qjs7VUFBVyxNQUFNLEVBQUMsS0FBSzs7T0FNWDtLQUNKO0lBR1Y7OztNQUNFOzs7O09BQW9CO01BRXBCOzs7O09BRUk7TUFFSjs7O1FBQ0U7OztVQUNFOzs7WUFDRTs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVU7WUFDdEM7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUFVO1dBQ25DO1NBQ0M7UUFDUjs7O1VBQ0U7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYztjQUMxQjs7OztlQUFrQjthQUNmO1lBQ0w7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUFVO1dBQ25DO1VBQ0w7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYztjQUMxQjs7OztlQUFvQjthQUNqQjtZQUNMOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7Y0FDcEIseUNBQU07O2FBRVQ7V0FDRjtVQUNMOzs7WUFDRTs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7Y0FDMUI7Ozs7ZUFBa0I7YUFDZjtZQUNMOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7YUFBVTtXQUNuQztTQUNDO09BQ0Y7S0FDQTtHQUVOO0NBQ1AsQ0FBQzs7a0JBR2EsUUFBUSIsImZpbGUiOiIxNDMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1hbGVydCc7XG5pbXBvcnQgQ29kZWJsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtY29kZWJsb2NrJztcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LXRhYmxlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1idXR0b24nO1xuaW1wb3J0IHVpa2l0IGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtYmFzZSc7XG5pbXBvcnQgdmVsb2NpdHkgZnJvbSAndmVsb2NpdHktYW5pbWF0ZSc7XG5cblxuXG5jb25zdCBoYW5kbGVBbGVydE9wZW4gPSAoZSwga2l0aWQpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBlbGVtZW50ID0gdWlraXQuaGVscGVycy5nZXRFbGVtZW50KGtpdGlkKTtcblxuICB2ZWxvY2l0eShcbiAgICBlbGVtZW50LFxuICAgIHtcbiAgICAgIG9wYWNpdHk6IFsxLCAwLjVdLFxuICAgICAgdHJhbnNsYXRlWDogWzAsIC0zMDBdXG4gICAgfSxcbiAgICB7ZGlzcGxheTogJ2Jsb2NrJ31cbiAgKTtcbn07XG5cblxuY29uc3QgaGFuZGxlQWxlcnRDbG9zZSA9IChlLCBraXRpZCkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGVsZW1lbnQgPSB1aWtpdC5oZWxwZXJzLmdldEVsZW1lbnQoa2l0aWQpO1xuXG4gIHZlbG9jaXR5KFxuICAgIGVsZW1lbnQsXG4gICAge1xuICAgICAgb3BhY2l0eTogWzAsIDFdLFxuICAgICAgdHJhbnNsYXRlWDogWy0zMDAsIDBdXG4gICAgfSxcbiAgICB7ZGlzcGxheTogJ2Jsb2NrJ31cbiAgKTtcbn07XG5cblxuY29uc3QgQWxlcnREb2MgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMT5BbGVydDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9J3VrLWFydGljbGUtbGVhZCc+XG4gICAgICAgIERlZmluZXMgc3R5bGVzIGZvciBzdWNjZXNzLCB3YXJuaW5nIGFuZCBlcnJvciBtZXNzYWdlcy5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPlVzYWdlPC9oMj5cbiAgICAgIDxDb2RlYmxvY2s+XG57YG5wbSBpbnN0YWxsIHJlYWN0LXVpa2l0LWFsZXJ0IC0tc2F2ZTtcblxuLy8gRVM2XG5pbXBvcnQgQWxlcnQgZnJvbSAncmVhY3QtdWlraXQtYWxlcnQnO1xuXG4vLyBFUzVcbnZhciBBbGVydCA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWFsZXJ0Jyk7XG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG5cblxuICAgICAgPHA+XG4gICAgICAgIFRoZSBhbGVydCBjb21wb25lbnQgY3JlYXRlcyBhbiBhbGVydCBib3guXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBUbyBhZGQgYSBjbG9zZSBidXR0b24gYWRkIHRoZSA8Y29kZT5jbG9zZTwvY29kZT4gcHJvcCB3aXRoIGEgY2FsbGJhY2suXG4gICAgICAgIFRoZSBraXRpZCBhcyB3ZWxsIGFzIHRoZSBldmVudCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2sgYWxsbG93aW5nIGZvciB0aGluZ3Mgc3VjaCBhcyBhbmltYXRpb25zLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEJ5IGRlZmF1bHQgQWxlcnQgY29tcG9uZW50cyBhcmUgc2V0IHRvIGRpc3BsYXkgbm9uZS4gQWRkIHRoZSA8Y29kZT5zaG93PC9jb2RlPiB0b1xuICAgICAgICBtYWtlIHRoZSBjb21wb25lbnQgdmlzaWJsZS5cbiAgICAgIDwvcD5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGJvZHk9J09wZW4gQWxlcnQnXG4gICAgICAgIG9uQ2xpY2s9eyhlLCBraXRpZCkgPT4gaGFuZGxlQWxlcnRPcGVuKGUsICdhbGVydDEnKX1cbiAgICAgIC8+XG5cbiAgICAgIDxBbGVydCBjbG9zZT17KGUsIGtpdGlkKSA9PiBoYW5kbGVBbGVydENsb3NlKGUsIGtpdGlkKX0ga2l0aWQ9J2FsZXJ0MSc+XG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxuICAgICAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cbiAgICAgIDwvQWxlcnQ+XG5cblxuICAgICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgICA8Q29kZWJsb2NrIHN5bnRheD0neG1sJz5cbntgY29uc3QgaGFuZGxlQWxlcnRPcGVuID0gKGUsIGtpdGlkKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZWxlbWVudCA9IHVpa2l0LmhlbHBlcnMuZ2V0RWxlbWVudChraXRpZCk7XG5cbiAgdmVsb2NpdHkoXG4gICAgZWxlbWVudCxcbiAgICB7XG4gICAgICBvcGFjaXR5OiBbMSwgMC41XSxcbiAgICAgIHRyYW5zbGF0ZVg6IFswLCAtMzAwXVxuICAgIH0sXG4gICAge2Rpc3BsYXk6ICdibG9jayd9XG4gICk7XG59O1xuXG5jb25zdCBoYW5kbGVBbGVydENsb3NlID0gKGUsIGtpdGlkKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZWxlbWVudCA9IHVpa2l0LmhlbHBlcnMuZ2V0RWxlbWVudChraXRpZCk7XG5cbiAgdmVsb2NpdHkoXG4gICAgZWxlbWVudCxcbiAgICB7XG4gICAgICBvcGFjaXR5OiBbMCwgMV0sXG4gICAgICB0cmFuc2xhdGVYOiBbLTMwMCwgMF1cbiAgICB9LFxuICAgIHtkaXNwbGF5OiAnYmxvY2snfVxuICApO1xufTtcblxuLi4uXG5cbjxCdXR0b25cbiAgYm9keT0nT3BlbiBBbGVydCdcbiAgb25DbGljaz17KGUsIGtpdGlkKSA9PiBoYW5kbGVBbGVydE9wZW4oZSwgJ2FsZXJ0MScpfVxuLz5cblxuPEFsZXJ0IGNsb3NlPXsoZSwga2l0aWQpID0+IGhhbmRsZUFsZXJ0Q2xvc2UoZSwga2l0aWQpfSBraXRpZD0nYWxlcnQxJz5cbiAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXG4gIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxuPC9BbGVydD5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkFsZXJ0IGNvbnRleHRzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBUbyBjaGFuZ2UgdGhlIGNvbnRleHQgb2YgYW4gYWxlcnQgYWRkIDxjb2RlPmNvbnRleHQ9J3N1Y2Nlc3MnPC9jb2RlPiwgPGNvZGU+Y29udGV4dD0nd2FybmluZyc8L2NvZGU+LFxuICAgICAgICBvciA8Y29kZT5jb250ZXh0PSdkYW5nZXInPC9jb2RlPiBwcm9wLlxuICAgICAgPC9wPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICAgIDxBbGVydCBjb250ZXh0PSdzdWNjZXNzJz5cbiAgICAgICAgVG8gaW5kaWNhdGUgc3VjY2VzcyBvciBhIHBvc2l0aXZlIG1lc3NhZ2UgYWRkIHRoZSA8Y29kZT5jb250ZXh0PSdzdWNjZXNzJzwvY29kZT4gcHJvcC5cbiAgICAgIDwvQWxlcnQ+XG4gICAgICA8QWxlcnQgY29udGV4dD0nd2FybmluZyc+XG4gICAgICAgIFRvIGluZGljYXRlIGEgbWVzc2FnZSBjb250YWluaW5nIGEgd2FybmluZyBhZGQgdGhlIDxjb2RlPmNvbnRleHQ9J3dhcm5pbmcnPC9jb2RlPiBwcm9wLlxuICAgICAgPC9BbGVydD5cbiAgICAgIDxBbGVydCBjb250ZXh0PSdkYW5nZXInPlxuICAgICAgICBUbyBpbmRpY2F0ZSBhbiBpbXBvcnRhbnQgbWVzc2FnZSBhZGQgdGhlIDxjb2RlPmNvbnRleHQ9J2Rhbmdlcic8L2NvZGU+IHByb3AuXG4gICAgICA8L0FsZXJ0PlxuXG5cbiAgICAgIDxoNCBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2g0PlxuICAgICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57YDxBbGVydCBjb250ZXh0PSdzdWNjZXNzJz5cblRvIGluZGljYXRlIHN1Y2Nlc3Mgb3IgYSBwb3NpdGl2ZSBtZXNzYWdlIGFkZCB0aGUgPGNvZGU+Y29udGV4dD0nc3VjY2Vzcyc8L2NvZGU+IHByb3AuXG48L0FsZXJ0PlxuPEFsZXJ0IGNvbnRleHQ9J3dhcm5pbmcnPlxuVG8gaW5kaWNhdGUgYSBtZXNzYWdlIGNvbnRhaW5pbmcgYSB3YXJuaW5nIGFkZCB0aGUgPGNvZGU+Y29udGV4dD0nd2FybmluZyc8L2NvZGU+IHByb3AuXG48L0FsZXJ0PlxuPEFsZXJ0IGNvbnRleHQ9J2Rhbmdlcic+XG5UbyBpbmRpY2F0ZSBhbiBpbXBvcnRhbnQgbWVzc2FnZSBhZGQgdGhlIDxjb2RlPmNvbnRleHQ9J2Rhbmdlcic8L2NvZGU+IHByb3AuXG48L0FsZXJ0PlxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+QWxlcnQgc2l6ZTwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgVG8gaW5jcmVhc2UgdGhlIHNwYWNpbmcgaW4gYW4gYWxlcnQgYWRkIHRoZSA8Y29kZT5sYXJnZTwvY29kZT4gcHJvcCB0byB0aGUgYWxlcnQgY29tcG9uZW50LlxuICAgICAgPC9wPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICAgIDxBbGVydCBzaG93IGxhcmdlID5cbiAgICAgICAgPGgxPkltcG9ydGFudCBub3RpY2U8L2gxPlxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbiAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXG4gICAgICA8L0FsZXJ0PlxuXG5cbiAgICAgIDxoNCBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2g0PlxuICAgICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57YDxBbGVydCBsYXJnZSA+XG5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbnRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxuPC9BbGVydD5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkFsZXJ0IFByb3BzPC9oMj5cblxuICAgICAgPHA+XG4gICAgICAgIFNlZSBiYXNlIGNvbXBvbmVudCBmb3IgYWRkaXRpb25hbCB1dGlsaXR5IHByb3BzLlxuICAgICAgPC9wPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlByb3A8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5UeXBlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyID5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPmNsb3NlPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+ZnVuYzwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICA8Y29kZT5jb250ZXh0PC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIG9uZU9mIDxiciAvPlxuICAgICAgICAgICAgICBzdWNjZXNzLCB3YXJuaW5nIG9yIGRhbmdlclxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPmxhcmdlPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+Ym9vbDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgPC9zZWN0aW9uPlxuXG4gIDwvZGl2PlxuKTtcblxuXG5leHBvcnQgZGVmYXVsdCBBbGVydERvYztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYWxlcnQtZG9jLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})