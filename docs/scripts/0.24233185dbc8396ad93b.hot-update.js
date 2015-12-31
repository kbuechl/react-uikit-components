webpackHotUpdate(0,{

/***/ 1432:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitAlert = __webpack_require__(1420);\n\nvar _reactUikitAlert2 = _interopRequireDefault(_reactUikitAlert);\n\nvar _reactUikitCodeblock = __webpack_require__(1422);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitTable = __webpack_require__(1430);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nvar _reactUikitButton = __webpack_require__(469);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nvar _reactUikitBase = __webpack_require__(1421);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _velocityAnimate = __webpack_require__(1597);\n\nvar _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar handleAlertOpen = function handleAlertOpen(e, kitid) {\n  e.preventDefault();\n  var element = _reactUikitBase2.default.helpers.getElement(kitid);\n\n  (0, _velocityAnimate2.default)(element, {\n    opacity: 1,\n    translateX: [0, -300]\n  }, { display: 'block' });\n};\n\nvar handleAlertClose = function handleAlertClose(e) {\n  e.preventDefault();\n  // const kitid = e.targrt.getAttribute('data-kit')\n  // const element = uikit.helpers.getElement(kitid);\n  console.log(e);\n  (0, _velocityAnimate2.default)(element, {\n    opacity: 1,\n    translateX: [-300, 0]\n  }, { display: 'block' });\n\n  console.log('close');\n};\n\nvar AlertDoc = function AlertDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Alert'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Defines styles for success, warning and error messages.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-alert --save;\\n\\n// ES6\\nimport Alert from \\'react-uikit-alert\\';\\n\\n// ES5\\nvar Alert = require(\\'react-uikit-alert\\');\\n'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The alert component creates an alert box.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitButton2.default, {\n        body: 'Open Alert',\n        onClick: function onClick(e, kitid) {\n          return handleAlertOpen(e, 'alert1');\n        }\n      }),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { close: function close(e) {\n            return handleAlertClose(e);\n          }, kitid: 'alert1' },\n        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Alert>\\nLorem ipsum dolor sit amet, consectetur adipisicing elit\\n</Alert>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Alert close button'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To add a close button add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'close'\n        ),\n        ' prop to the alert component.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { close: function close() {} },\n        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Alert close={(e) => this.handleAlertClose(e)}>\\nLorem ipsum dolor sit amet, consectetur adipisicing elit.\\n</Alert>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Alert contexts'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To change the context of an alert add ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'success\\''\n        ),\n        ', ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'warning\\''\n        ),\n        ', or ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'danger\\''\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { context: 'success' },\n        'To indicate success or a positive message add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'success\\''\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { context: 'warning' },\n        'To indicate a message containing a warning add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'warning\\''\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { context: 'danger' },\n        'To indicate an important message add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context=\\'danger\\''\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Alert context=\\'success\\'>\\nTo indicate success or a positive message add the <code>context=\\'success\\'</code> prop.\\n</Alert>\\n<Alert context=\\'warning\\'>\\nTo indicate a message containing a warning add the <code>context=\\'warning\\'</code> prop.\\n</Alert>\\n<Alert context=\\'danger\\'>\\nTo indicate an important message add the <code>context=\\'danger\\'</code> prop.\\n</Alert>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Alert size'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To increase the spacing in an alert add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'large'\n        ),\n        ' prop to the alert component.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitAlert2.default,\n        { large: true },\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Important notice'\n        ),\n        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Alert large >\\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\ntempor incididunt ut labore et dolore magna aliqua.\\n</Alert>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Alert Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See base component for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'close'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'func'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'context'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              'success, warning or danger'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'large'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'bool'\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = AlertDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hbGVydC1kb2MuanN4P2NhNjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhYixJQUFNLGVBQWUsR0FBRyxTQUFsQixlQUFlLENBQUksQ0FBQyxFQUFFLEtBQUssRUFBSztBQUNwQyxHQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsTUFBTSxPQUFPLEdBQUcseUJBQU0sT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFaEQsaUNBQ0UsT0FBTyxFQUNQO0FBQ0UsV0FBTyxFQUFFLENBQUM7QUFDVixjQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7R0FDdEIsRUFDRCxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FDbkIsQ0FBQztDQUNILENBQUM7O0FBR0YsSUFBTSxnQkFBZ0IsR0FBRyxTQUFuQixnQkFBZ0IsQ0FBSSxDQUFDLEVBQUs7QUFDOUIsR0FBQyxDQUFDLGNBQWMsRUFBRTs7O0FBR3BCLFNBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDYixpQ0FDRSxPQUFPLEVBQ1A7QUFDRSxXQUFPLEVBQUUsQ0FBQztBQUNWLGNBQVUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztHQUN0QixFQUNELEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUNuQixDQUFDOztBQUVGLFNBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDdEIsQ0FBQzs7QUFHRixJQUFNLFFBQVEsR0FBRyxTQUFYLFFBQVEsQ0FBSSxLQUFLO1NBQ3JCOzs7SUFDRTs7O01BQ0U7Ozs7T0FBYztNQUNkOztVQUFHLFNBQVMsRUFBQyxpQkFBaUI7O09BRTFCO0tBQ0k7SUFHVjs7O01BQ0U7Ozs7T0FBYztNQUNkOzs7O09BU1k7TUFHWjs7OztPQUVJO01BRUo7O1VBQUksU0FBUyxFQUFDLFNBQVM7O09BQWE7TUFFcEM7QUFDRSxZQUFJLEVBQUMsWUFBWTtBQUNqQixlQUFPLEVBQUUsaUJBQUMsQ0FBQyxFQUFFLEtBQUs7aUJBQUssZUFBZSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUM7U0FBQztRQUNwRDtNQUVKOztVQUFPLEtBQUssRUFBRSxlQUFDLENBQUM7bUJBQUssZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1dBQUMsRUFBQyxLQUFLLEVBQUMsUUFBUTs7T0FHOUM7TUFHUjs7VUFBSSxTQUFTLEVBQUMsTUFBTTs7T0FBVTtNQUM5Qjs7VUFBVyxNQUFNLEVBQUMsS0FBSzs7T0FLWDtLQUNKO0lBRVY7OztNQUNFOzs7O09BQTJCO01BQzNCOzs7O1FBQ2dDOzs7O1NBQWtCOztPQUM5QztNQUVKOztVQUFJLFNBQVMsRUFBQyxTQUFTOztPQUFhO01BQ3BDOztVQUFPLEtBQUssRUFBRSxpQkFBTSxFQUFHOztPQUVmO01BR1I7O1VBQUksU0FBUyxFQUFDLE1BQU07O09BQVU7TUFDOUI7O1VBQVcsTUFBTSxFQUFDLEtBQUs7O09BS1g7S0FDSjtJQUdWOzs7TUFDRTs7OztPQUF1QjtNQUN2Qjs7OztRQUN3Qzs7OztTQUE4Qjs7UUFBRTs7OztTQUE4Qjs7UUFDakc7Ozs7U0FBNkI7O09BQzlCO01BRUo7O1VBQUksU0FBUyxFQUFDLFNBQVM7O09BQWE7TUFDcEM7O1VBQU8sT0FBTyxFQUFDLFNBQVM7O1FBQzRCOzs7O1NBQThCOztPQUMxRTtNQUNSOztVQUFPLE9BQU8sRUFBQyxTQUFTOztRQUM2Qjs7OztTQUE4Qjs7T0FDM0U7TUFDUjs7VUFBTyxPQUFPLEVBQUMsUUFBUTs7UUFDb0I7Ozs7U0FBNkI7O09BQ2hFO01BR1I7O1VBQUksU0FBUyxFQUFDLE1BQU07O09BQVU7TUFDOUI7O1VBQVcsTUFBTSxFQUFDLEtBQUs7O09BV1g7S0FDSjtJQUdWOzs7TUFDRTs7OztPQUFtQjtNQUNuQjs7OztRQUM4Qzs7OztTQUFrQjs7T0FDNUQ7TUFFSjs7VUFBSSxTQUFTLEVBQUMsU0FBUzs7T0FBYTtNQUNwQzs7VUFBTyxLQUFLO1FBQ1Y7Ozs7U0FBeUI7O09BR25CO01BR1I7O1VBQUksU0FBUyxFQUFDLE1BQU07O09BQVU7TUFDOUI7O1VBQVcsTUFBTSxFQUFDLEtBQUs7O09BTVg7S0FDSjtJQUdWOzs7TUFDRTs7OztPQUFvQjtNQUVwQjs7OztPQUVJO01BRUo7OztRQUNFOzs7VUFDRTs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUFVO1lBQ3RDOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7YUFBVTtXQUNuQztTQUNDO1FBQ1I7OztVQUNFOzs7WUFDRTs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7Y0FDMUI7Ozs7ZUFBa0I7YUFDZjtZQUNMOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7YUFBVTtXQUNuQztVQUNMOzs7WUFDRTs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7Y0FDMUI7Ozs7ZUFBb0I7YUFDakI7WUFDTDs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2NBQ3BCLHlDQUFNOzthQUVUO1dBQ0Y7VUFDTDs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjO2NBQzFCOzs7O2VBQWtCO2FBQ2Y7WUFDTDs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVU7V0FDbkM7U0FDQztPQUNGO0tBQ0E7R0FFTjtDQUNQLENBQUM7O2tCQUdhLFFBQVEiLCJmaWxlIjoiMTQzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtYWxlcnQnO1xuaW1wb3J0IENvZGVibG9jayBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWNvZGVibG9jayc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtYnV0dG9uJztcbmltcG9ydCB1aWtpdCBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWJhc2UnO1xuaW1wb3J0IHZlbG9jaXR5IGZyb20gJ3ZlbG9jaXR5LWFuaW1hdGUnO1xuXG5cblxuY29uc3QgaGFuZGxlQWxlcnRPcGVuID0gKGUsIGtpdGlkKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZWxlbWVudCA9IHVpa2l0LmhlbHBlcnMuZ2V0RWxlbWVudChraXRpZCk7XG5cbiAgdmVsb2NpdHkoXG4gICAgZWxlbWVudCxcbiAgICB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNsYXRlWDogWzAsIC0zMDBdXG4gICAgfSxcbiAgICB7ZGlzcGxheTogJ2Jsb2NrJ31cbiAgKTtcbn07XG5cblxuY29uc3QgaGFuZGxlQWxlcnRDbG9zZSA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy8gY29uc3Qga2l0aWQgPSBlLnRhcmdydC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2l0JylcbiAgLy8gY29uc3QgZWxlbWVudCA9IHVpa2l0LmhlbHBlcnMuZ2V0RWxlbWVudChraXRpZCk7XG5jb25zb2xlLmxvZyhlKTtcbiAgdmVsb2NpdHkoXG4gICAgZWxlbWVudCxcbiAgICB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNsYXRlWDogWy0zMDAsIDBdXG4gICAgfSxcbiAgICB7ZGlzcGxheTogJ2Jsb2NrJ31cbiAgKTtcblxuICBjb25zb2xlLmxvZygnY2xvc2UnKTtcbn07XG5cblxuY29uc3QgQWxlcnREb2MgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMT5BbGVydDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9J3VrLWFydGljbGUtbGVhZCc+XG4gICAgICAgIERlZmluZXMgc3R5bGVzIGZvciBzdWNjZXNzLCB3YXJuaW5nIGFuZCBlcnJvciBtZXNzYWdlcy5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPlVzYWdlPC9oMj5cbiAgICAgIDxDb2RlYmxvY2s+XG57YG5wbSBpbnN0YWxsIHJlYWN0LXVpa2l0LWFsZXJ0IC0tc2F2ZTtcblxuLy8gRVM2XG5pbXBvcnQgQWxlcnQgZnJvbSAncmVhY3QtdWlraXQtYWxlcnQnO1xuXG4vLyBFUzVcbnZhciBBbGVydCA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWFsZXJ0Jyk7XG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG5cblxuICAgICAgPHA+XG4gICAgICAgIFRoZSBhbGVydCBjb21wb25lbnQgY3JlYXRlcyBhbiBhbGVydCBib3guXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGJvZHk9J09wZW4gQWxlcnQnXG4gICAgICAgIG9uQ2xpY2s9eyhlLCBraXRpZCkgPT4gaGFuZGxlQWxlcnRPcGVuKGUsICdhbGVydDEnKX1cbiAgICAgIC8+XG5cbiAgICA8QWxlcnQgY2xvc2U9eyhlKSA9PiBoYW5kbGVBbGVydENsb3NlKGUpfSBraXRpZD0nYWxlcnQxJz5cbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXG4gICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxuICAgICAgPC9BbGVydD5cblxuXG4gICAgICA8aDQgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oND5cbiAgICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue2A8QWxlcnQ+XG5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdFxuPC9BbGVydD5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5BbGVydCBjbG9zZSBidXR0b248L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFRvIGFkZCBhIGNsb3NlIGJ1dHRvbiBhZGQgdGhlIDxjb2RlPmNsb3NlPC9jb2RlPiBwcm9wIHRvIHRoZSBhbGVydCBjb21wb25lbnQuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgICAgPEFsZXJ0IGNsb3NlPXsoKSA9PiB7fX0+XG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxuICAgICAgPC9BbGVydD5cblxuXG4gICAgICA8aDQgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oND5cbiAgICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue2A8QWxlcnQgY2xvc2U9eyhlKSA9PiB0aGlzLmhhbmRsZUFsZXJ0Q2xvc2UoZSl9PlxuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXG48L0FsZXJ0PlxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+QWxlcnQgY29udGV4dHM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFRvIGNoYW5nZSB0aGUgY29udGV4dCBvZiBhbiBhbGVydCBhZGQgPGNvZGU+Y29udGV4dD0nc3VjY2Vzcyc8L2NvZGU+LCA8Y29kZT5jb250ZXh0PSd3YXJuaW5nJzwvY29kZT4sXG4gICAgICAgIG9yIDxjb2RlPmNvbnRleHQ9J2Rhbmdlcic8L2NvZGU+IHByb3AuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgICAgPEFsZXJ0IGNvbnRleHQ9J3N1Y2Nlc3MnPlxuICAgICAgICBUbyBpbmRpY2F0ZSBzdWNjZXNzIG9yIGEgcG9zaXRpdmUgbWVzc2FnZSBhZGQgdGhlIDxjb2RlPmNvbnRleHQ9J3N1Y2Nlc3MnPC9jb2RlPiBwcm9wLlxuICAgICAgPC9BbGVydD5cbiAgICAgIDxBbGVydCBjb250ZXh0PSd3YXJuaW5nJz5cbiAgICAgICAgVG8gaW5kaWNhdGUgYSBtZXNzYWdlIGNvbnRhaW5pbmcgYSB3YXJuaW5nIGFkZCB0aGUgPGNvZGU+Y29udGV4dD0nd2FybmluZyc8L2NvZGU+IHByb3AuXG4gICAgICA8L0FsZXJ0PlxuICAgICAgPEFsZXJ0IGNvbnRleHQ9J2Rhbmdlcic+XG4gICAgICAgIFRvIGluZGljYXRlIGFuIGltcG9ydGFudCBtZXNzYWdlIGFkZCB0aGUgPGNvZGU+Y29udGV4dD0nZGFuZ2VyJzwvY29kZT4gcHJvcC5cbiAgICAgIDwvQWxlcnQ+XG5cblxuICAgICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgICA8Q29kZWJsb2NrIHN5bnRheD0neG1sJz5cbntgPEFsZXJ0IGNvbnRleHQ9J3N1Y2Nlc3MnPlxuVG8gaW5kaWNhdGUgc3VjY2VzcyBvciBhIHBvc2l0aXZlIG1lc3NhZ2UgYWRkIHRoZSA8Y29kZT5jb250ZXh0PSdzdWNjZXNzJzwvY29kZT4gcHJvcC5cbjwvQWxlcnQ+XG48QWxlcnQgY29udGV4dD0nd2FybmluZyc+XG5UbyBpbmRpY2F0ZSBhIG1lc3NhZ2UgY29udGFpbmluZyBhIHdhcm5pbmcgYWRkIHRoZSA8Y29kZT5jb250ZXh0PSd3YXJuaW5nJzwvY29kZT4gcHJvcC5cbjwvQWxlcnQ+XG48QWxlcnQgY29udGV4dD0nZGFuZ2VyJz5cblRvIGluZGljYXRlIGFuIGltcG9ydGFudCBtZXNzYWdlIGFkZCB0aGUgPGNvZGU+Y29udGV4dD0nZGFuZ2VyJzwvY29kZT4gcHJvcC5cbjwvQWxlcnQ+XG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5BbGVydCBzaXplPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBUbyBpbmNyZWFzZSB0aGUgc3BhY2luZyBpbiBhbiBhbGVydCBhZGQgdGhlIDxjb2RlPmxhcmdlPC9jb2RlPiBwcm9wIHRvIHRoZSBhbGVydCBjb21wb25lbnQuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgICAgPEFsZXJ0IGxhcmdlID5cbiAgICAgICAgPGgxPkltcG9ydGFudCBub3RpY2U8L2gxPlxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbiAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXG4gICAgICA8L0FsZXJ0PlxuXG5cbiAgICAgIDxoNCBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2g0PlxuICAgICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57YDxBbGVydCBsYXJnZSA+XG5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbnRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxuPC9BbGVydD5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkFsZXJ0IFByb3BzPC9oMj5cblxuICAgICAgPHA+XG4gICAgICAgIFNlZSBiYXNlIGNvbXBvbmVudCBmb3IgYWRkaXRpb25hbCB1dGlsaXR5IHByb3BzLlxuICAgICAgPC9wPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlByb3A8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5UeXBlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyID5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPmNsb3NlPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+ZnVuYzwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICA8Y29kZT5jb250ZXh0PC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIG9uZU9mIDxiciAvPlxuICAgICAgICAgICAgICBzdWNjZXNzLCB3YXJuaW5nIG9yIGRhbmdlclxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPmxhcmdlPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+Ym9vbDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgPC9zZWN0aW9uPlxuXG4gIDwvZGl2PlxuKTtcblxuXG5leHBvcnQgZGVmYXVsdCBBbGVydERvYztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYWxlcnQtZG9jLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})