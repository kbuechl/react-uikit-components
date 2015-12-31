webpackHotUpdate(0,{

/***/ 2568:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitButton = __webpack_require__(620);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nvar _reactUikitCodeblock = __webpack_require__(621);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitPanel = __webpack_require__(2567);\n\nvar _reactUikitPanel2 = _interopRequireDefault(_reactUikitPanel);\n\nvar _reactUikitTable = __webpack_require__(623);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nvar _reactUikitNote = __webpack_require__(1908);\n\nvar _reactUikitNote2 = _interopRequireDefault(_reactUikitNote);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ButtonDoc = function ButtonDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Button'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Easily create nicely looking buttons, which come in different styles.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<code>npm install react-uikit-button --save;\\n\\n// ES6\\n<code>import Button from \\'react-uikit-button\\';\\n\\n// ES5\\nvar Button = require(\\'react-uikit-button\\');'\n      ),\n      _react2.default.createElement('hr', null),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The Button component creates either a button, a link or a close button by settiing the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'type'\n        ),\n        '.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'By defualt the Button component will create a button if no type is provided.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitButton2.default, { type: 'link', body: 'Button', margin: 'right', margin: 'right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { body: 'Button', margin: 'right', margin: 'right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { body: 'Disabled', disabled: true, margin: 'right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { type: 'close' }),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<Button type=\\'link\\' body=\\'Button\\' margin=\\'right\\' margin=\\'right\\'/>\\n<Button body=\\'Button\\' margin=\\'right\\' margin=\\'right\\'/>\\n<Button body=\\'Disabled\\' disabled margin=\\'right\\'/>\\n<Button type=\\'close\\'/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button contexts'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The color of the button can be easily changed by adding a context to the context prop'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              null,\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Description'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context=\\'primary\\''\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Emphasizes to identify the primary action in a set of buttons.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context=\\'success\\''\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Indicates a successful or positive action.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context=\\'danger\\''\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Indicates a dangerous or negative action.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context=\\'link\\''\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Deemphasizes to look like a link while maintaining button behavior.'\n            )\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitButton2.default, { context: 'primary', body: 'Primary' }),\n      _react2.default.createElement(_reactUikitButton2.default, { context: 'success', body: 'Success' }),\n      _react2.default.createElement(_reactUikitButton2.default, { context: 'danger', body: 'Danger' }),\n      _react2.default.createElement(_reactUikitButton2.default, { context: 'link', body: 'Link', type: 'link' }),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<Button context=\\'primary\\' body=\\'Primary\\' />\\n<Button context=\\'success\\' body=\\'Success\\' />\\n<Button context=\\'danger\\' body=\\'Danger\\' />\\n<Button context=\\'link\\' body=\\'Link\\' type=\\'link\\' />\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button sizes'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To change the size of a Button set the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'size'\n        ),\n        ' prop to ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'mini'\n        ),\n        ', ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'small'\n        ),\n        ' or ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'large'\n        ),\n        '.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<Button size=\\'mini\\' body=\\'Mini button\\' margin=\\'right\\'/>\\n<Button size=\\'mini\\' body=\\'Mini button\\' context=\\'primary\\'/><br />\\n\\n<Button size=\\'small\\' body=\\'Small button\\' margin=\\'right\\'/>\\n<Button size=\\'small\\' body=\\'Small button\\' context=\\'primary\\'/><br />\\n\\n<Button body=\\'Default button\\'/>\\n<Button body=\\'Default button\\' context=\\'primary\\'/><br />\\n\\n<Button size=\\'large\\' body=\\'Large button\\' margin=\\'right\\'/>\\n<Button size=\\'large\\' body=\\'Large button\\' context=\\'primary\\'/><br />\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button sizes'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Tto change the size of a Button set the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'size'\n        ),\n        ' prop to ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'mini'\n        ),\n        ', ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'small'\n        ),\n        ' or ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'large'\n        ),\n        '.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<Button size=\\'mini\\' body=\\'Mini button\\' margin=\\'right\\'/>\\n<Button size=\\'mini\\' body=\\'Mini button\\' context=\\'primary\\'/><br />\\n\\n<Button size=\\'small\\' body=\\'Small button\\' margin=\\'right\\'/>\\n<Button size=\\'small\\' body=\\'Small button\\' context=\\'primary\\'/><br />\\n\\n<Button body=\\'Default button\\'/>\\n<Button body=\\'Default button\\' context=\\'primary\\'/><br />\\n\\n<Button size=\\'large\\' body=\\'Large button\\' margin=\\'right\\'/>\\n<Button size=\\'large\\' body=\\'Large button\\' context=\\'primary\\'/><br />\\n\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button blocks'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To create a full witth Button add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'block'\n        ),\n        ' prop to the buttton component.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '\\n<Button block body=\\'Button\\' margin=\\'smallBottom\\' />\\n<Button block body=\\'Button\\' context=\\'primary\\'/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button dropdown'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Coming soon...'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See Base for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              null,\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'body'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'block'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'bool'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              ' primary, success, danger or link'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'disabled'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'bool'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'onClick'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'func'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'size'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              ' mini small or large'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'type'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              ' button close or link'\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Tests'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test'\n        ),\n        ' to run tests with minimal output.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test:spec'\n        ),\n        ' to run tests with detailed output.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test:watch'\n        ),\n        'watches all directories and run tests with minimal output on file changes.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Build'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run build'\n        ),\n        ' to build files fro distribution.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run build:watch'\n        ),\n        ' watches src directory and builds files on changes.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Lint'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run lint'\n        ),\n        ' lints scripts in src directory.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run lint:watch'\n        ),\n        ' watches src directory and lints scripts in src directory.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'License'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'MIT'\n      )\n    )\n  );\n};\n\nexports.default = ButtonDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idXR0b24tZG9jLmpzeD9iZjIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXYixJQUFNLFNBQVMsR0FBRyxTQUFaLFNBQVMsQ0FBSSxLQUFLO1NBQ3RCOzs7SUFDRTs7O01BQ0U7Ozs7T0FBZTtNQUNmOzs7O09BRUk7S0FDSTtJQUVWOzs7TUFDRTs7OztPQUFjO01BQ2Q7Ozs7T0FRWTtNQUdaLHlDQUFLO01BRUw7Ozs7UUFFMkM7Ozs7U0FBaUI7O09BQ3hEO01BRUo7Ozs7T0FFSTtNQUVKOztVQUFJLFNBQVMsRUFBQyxTQUFTOztPQUFhO01BQ3BDLDREQUFRLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLEdBQUU7TUFDakUsNERBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLEdBQUU7TUFDckQsNERBQVEsSUFBSSxFQUFDLFVBQVUsRUFBQyxRQUFRLFFBQUMsTUFBTSxFQUFDLE9BQU8sR0FBRTtNQUNqRCw0REFBUSxJQUFJLEVBQUMsT0FBTyxHQUFFO01BRXRCOztVQUFJLFNBQVMsRUFBQyxNQUFNOztPQUFVO01BQzlCOzs7O09BTVk7S0FDSjtJQUdWOzs7TUFDRTs7OztPQUF3QjtNQUN4Qjs7OztPQUVJO01BRUo7OztRQUNFOzs7VUFDRTs7O1lBQ0U7Ozs7YUFBYTtZQUNiOzs7O2FBQW9CO1dBQ2pCO1NBQ0M7UUFDUjs7O1VBQ0U7OztZQUNFOzs7Y0FDRTs7OztlQUE4QjthQUMzQjtZQUNMOzs7O2FBRUs7V0FDRjtVQUNMOzs7WUFDRTs7O2NBQ0U7Ozs7ZUFBOEI7YUFDM0I7WUFDTDs7OzthQUVLO1dBQ0Y7VUFDTDs7O1lBQ0U7OztjQUNFOzs7O2VBQTZCO2FBQzFCO1lBQ0w7Ozs7YUFFSztXQUNG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QUFTIiwiZmlsZSI6IjI1NjguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1idXR0b24nO1xuaW1wb3J0IENvZGVibG9jayBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWNvZGVibG9jayc7XG5pbXBvcnQgUGFuZWwgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1wYW5lbCc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZSc7XG5pbXBvcnQgTm90ZSBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LW5vdGUnO1xuXG5cbmNvbnN0IEJ1dHRvbkRvYyA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPkJ1dHRvbjwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgRWFzaWx5IGNyZWF0ZSBuaWNlbHkgbG9va2luZyBidXR0b25zLCB3aGljaCBjb21lIGluIGRpZmZlcmVudCBzdHlsZXMuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+VXNhZ2U8L2gyPlxuICAgICAgPENvZGVibG9jaz5cbntgPGNvZGU+bnBtIGluc3RhbGwgcmVhY3QtdWlraXQtYnV0dG9uIC0tc2F2ZTtcblxuLy8gRVM2XG48Y29kZT5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LXVpa2l0LWJ1dHRvbic7XG5cbi8vIEVTNVxudmFyIEJ1dHRvbiA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWJ1dHRvbicpO2B9XG4gICAgICA8L0NvZGVibG9jaz5cblxuXG4gICAgICA8aHIvPlxuXG4gICAgICA8cD5cbiAgICAgICAgVGhlIEJ1dHRvbiBjb21wb25lbnQgY3JlYXRlcyBlaXRoZXIgYSBidXR0b24sXG4gICAgICAgIGEgbGluayBvciBhIGNsb3NlIGJ1dHRvbiBieSBzZXR0aWluZyB0aGUgPGNvZGU+dHlwZTwvY29kZT4uXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBCeSBkZWZ1YWx0IHRoZSBCdXR0b24gY29tcG9uZW50IHdpbGwgY3JlYXRlIGEgYnV0dG9uIGlmIG5vIHR5cGUgaXMgcHJvdmlkZWQuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgICAgPEJ1dHRvbiB0eXBlPSdsaW5rJyBib2R5PSdCdXR0b24nIG1hcmdpbj0ncmlnaHQnIG1hcmdpbj0ncmlnaHQnLz5cbiAgICAgIDxCdXR0b24gYm9keT0nQnV0dG9uJyBtYXJnaW49J3JpZ2h0JyBtYXJnaW49J3JpZ2h0Jy8+XG4gICAgICA8QnV0dG9uIGJvZHk9J0Rpc2FibGVkJyBkaXNhYmxlZCBtYXJnaW49J3JpZ2h0Jy8+XG4gICAgICA8QnV0dG9uIHR5cGU9J2Nsb3NlJy8+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2gzPlxuICAgICAgPENvZGVibG9jaz5cbntgPEJ1dHRvbiB0eXBlPSdsaW5rJyBib2R5PSdCdXR0b24nIG1hcmdpbj0ncmlnaHQnIG1hcmdpbj0ncmlnaHQnLz5cbjxCdXR0b24gYm9keT0nQnV0dG9uJyBtYXJnaW49J3JpZ2h0JyBtYXJnaW49J3JpZ2h0Jy8+XG48QnV0dG9uIGJvZHk9J0Rpc2FibGVkJyBkaXNhYmxlZCBtYXJnaW49J3JpZ2h0Jy8+XG48QnV0dG9uIHR5cGU9J2Nsb3NlJy8+XG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5CdXR0b24gY29udGV4dHM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFRoZSBjb2xvciBvZiB0aGUgYnV0dG9uIGNhbiBiZSBlYXNpbHkgY2hhbmdlZCBieSBhZGRpbmcgYSBjb250ZXh0IHRvIHRoZSBjb250ZXh0IHByb3BcbiAgICAgIDwvcD5cblxuICAgICAgPFRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlByb3A8L3RoPlxuICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5jb250ZXh0PSdwcmltYXJ5JzwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIEVtcGhhc2l6ZXMgdG8gaWRlbnRpZnkgdGhlIHByaW1hcnkgYWN0aW9uIGluIGEgc2V0IG9mIGJ1dHRvbnMuXG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5jb250ZXh0PSdzdWNjZXNzJzwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIEluZGljYXRlcyBhIHN1Y2Nlc3NmdWwgb3IgcG9zaXRpdmUgYWN0aW9uLlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+Y29udGV4dD0nZGFuZ2VyJzwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgSW5kaWNhdGVzIGEgZGFuZ2Vyb3VzIG9yIG5lZ2F0aXZlIGFjdGlvbi5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPmNvbnRleHQ9J2xpbmsnPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgRGVlbXBoYXNpemVzIHRvIGxvb2sgbGlrZSBhIGxpbmsgd2hpbGUgbWFpbnRhaW5pbmcgYnV0dG9uIGJlaGF2aW9yLlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9UYWJsZT5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgICA8QnV0dG9uIGNvbnRleHQ9J3ByaW1hcnknIGJvZHk9J1ByaW1hcnknIC8+XG4gICAgICA8QnV0dG9uIGNvbnRleHQ9J3N1Y2Nlc3MnIGJvZHk9J1N1Y2Nlc3MnIC8+XG4gICAgICA8QnV0dG9uIGNvbnRleHQ9J2RhbmdlcicgYm9keT0nRGFuZ2VyJyAvPlxuICAgICAgPEJ1dHRvbiBjb250ZXh0PSdsaW5rJyBib2R5PSdMaW5rJyB0eXBlPSdsaW5rJy8+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2gzPlxuICAgICAgPENvZGVibG9jaz5cbntgPEJ1dHRvbiBjb250ZXh0PSdwcmltYXJ5JyBib2R5PSdQcmltYXJ5JyAvPlxuPEJ1dHRvbiBjb250ZXh0PSdzdWNjZXNzJyBib2R5PSdTdWNjZXNzJyAvPlxuPEJ1dHRvbiBjb250ZXh0PSdkYW5nZXInIGJvZHk9J0RhbmdlcicgLz5cbjxCdXR0b24gY29udGV4dD0nbGluaycgYm9keT0nTGluaycgdHlwZT0nbGluaycgLz5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5CdXR0b24gc2l6ZXM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFRvIGNoYW5nZSB0aGUgc2l6ZSBvZiBhIEJ1dHRvbiBzZXQgdGhlIDxjb2RlPnNpemU8L2NvZGU+IHByb3BcbiAgICAgICAgdG8gPGNvZGU+bWluaTwvY29kZT4sIDxjb2RlPnNtYWxsPC9jb2RlPiBvciA8Y29kZT5sYXJnZTwvY29kZT4uXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oMz5cbiAgICAgIDxDb2RlYmxvY2s+XG57YDxCdXR0b24gc2l6ZT0nbWluaScgYm9keT0nTWluaSBidXR0b24nIG1hcmdpbj0ncmlnaHQnLz5cbjxCdXR0b24gc2l6ZT0nbWluaScgYm9keT0nTWluaSBidXR0b24nIGNvbnRleHQ9J3ByaW1hcnknLz48YnIgLz5cblxuPEJ1dHRvbiBzaXplPSdzbWFsbCcgYm9keT0nU21hbGwgYnV0dG9uJyBtYXJnaW49J3JpZ2h0Jy8+XG48QnV0dG9uIHNpemU9J3NtYWxsJyBib2R5PSdTbWFsbCBidXR0b24nIGNvbnRleHQ9J3ByaW1hcnknLz48YnIgLz5cblxuPEJ1dHRvbiBib2R5PSdEZWZhdWx0IGJ1dHRvbicvPlxuPEJ1dHRvbiBib2R5PSdEZWZhdWx0IGJ1dHRvbicgY29udGV4dD0ncHJpbWFyeScvPjxiciAvPlxuXG48QnV0dG9uIHNpemU9J2xhcmdlJyBib2R5PSdMYXJnZSBidXR0b24nIG1hcmdpbj0ncmlnaHQnLz5cbjxCdXR0b24gc2l6ZT0nbGFyZ2UnIGJvZHk9J0xhcmdlIGJ1dHRvbicgY29udGV4dD0ncHJpbWFyeScvPjxiciAvPlxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+QnV0dG9uIHNpemVzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBUdG8gY2hhbmdlIHRoZSBzaXplIG9mIGEgQnV0dG9uIHNldCB0aGUgPGNvZGU+c2l6ZTwvY29kZT4gcHJvcFxuICAgICAgICB0byA8Y29kZT5taW5pPC9jb2RlPiwgPGNvZGU+c21hbGw8L2NvZGU+IG9yIDxjb2RlPmxhcmdlPC9jb2RlPi5cbiAgICAgIDwvcD5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2gzPlxuICAgICAgPENvZGVibG9jaz5cbntgPEJ1dHRvbiBzaXplPSdtaW5pJyBib2R5PSdNaW5pIGJ1dHRvbicgbWFyZ2luPSdyaWdodCcvPlxuPEJ1dHRvbiBzaXplPSdtaW5pJyBib2R5PSdNaW5pIGJ1dHRvbicgY29udGV4dD0ncHJpbWFyeScvPjxiciAvPlxuXG48QnV0dG9uIHNpemU9J3NtYWxsJyBib2R5PSdTbWFsbCBidXR0b24nIG1hcmdpbj0ncmlnaHQnLz5cbjxCdXR0b24gc2l6ZT0nc21hbGwnIGJvZHk9J1NtYWxsIGJ1dHRvbicgY29udGV4dD0ncHJpbWFyeScvPjxiciAvPlxuXG48QnV0dG9uIGJvZHk9J0RlZmF1bHQgYnV0dG9uJy8+XG48QnV0dG9uIGJvZHk9J0RlZmF1bHQgYnV0dG9uJyBjb250ZXh0PSdwcmltYXJ5Jy8+PGJyIC8+XG5cbjxCdXR0b24gc2l6ZT0nbGFyZ2UnIGJvZHk9J0xhcmdlIGJ1dHRvbicgbWFyZ2luPSdyaWdodCcvPlxuPEJ1dHRvbiBzaXplPSdsYXJnZScgYm9keT0nTGFyZ2UgYnV0dG9uJyBjb250ZXh0PSdwcmltYXJ5Jy8+PGJyIC8+XG5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkJ1dHRvbiBibG9ja3M8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFRvIGNyZWF0ZSBhIGZ1bGwgd2l0dGggQnV0dG9uIGFkZCB0aGUgPGNvZGU+YmxvY2s8L2NvZGU+IHByb3BcbiAgICAgICAgdG8gdGhlIGJ1dHR0b24gY29tcG9uZW50LlxuICAgICAgPC9wPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDM+XG4gICAgICA8Q29kZWJsb2NrPlxue2BcbjxCdXR0b24gYmxvY2sgYm9keT0nQnV0dG9uJyBtYXJnaW49J3NtYWxsQm90dG9tJyAvPlxuPEJ1dHRvbiBibG9jayBib2R5PSdCdXR0b24nIGNvbnRleHQ9J3ByaW1hcnknLz5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkJ1dHRvbiBkcm9wZG93bjwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgQ29taW5nIHNvb24uLi5cbiAgICAgIDwvcD5cblxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+QnV0dG9uIFByb3BzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBTZWUgQmFzZSBmb3IgYWRkaXRpb25hbCB1dGlsaXR5IHByb3BzLlxuICAgICAgPC9wPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UHJvcDwvdGg+XG4gICAgICAgICAgICA8dGg+VHlwZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+Ym9keTwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+c3RyaW5nPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+YmxvY2s8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPmJvb2w8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5jb250ZXh0PC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5vbmVPZiA8YnIgLz4gcHJpbWFyeSwgc3VjY2VzcywgZGFuZ2VyIG9yIGxpbms8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5kaXNhYmxlZDwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+Ym9vbDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPm9uQ2xpY2s8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPmZ1bmM8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5zaXplPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5vbmVPZiA8YnIgLz4gbWluaSBzbWFsbCBvciBsYXJnZTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPnR5cGU8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPm9uZU9mIDxiciAvPiBidXR0b24gY2xvc2Ugb3IgbGluazwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5UZXN0czwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgPGNvZGU+bnBtIHJ1biB0ZXN0PC9jb2RlPiB0byBydW4gdGVzdHMgd2l0aCBtaW5pbWFsIG91dHB1dC48YnIgLz5cbiAgICAgICAgPGNvZGU+bnBtIHJ1biB0ZXN0OnNwZWM8L2NvZGU+IHRvIHJ1biB0ZXN0cyB3aXRoIGRldGFpbGVkIG91dHB1dC48YnIgLz5cbiAgICAgICAgPGNvZGU+bnBtIHJ1biB0ZXN0OndhdGNoPC9jb2RlPndhdGNoZXMgYWxsIGRpcmVjdG9yaWVzIGFuZCBydW4gdGVzdHMgd2l0aCBtaW5pbWFsIG91dHB1dCBvbiBmaWxlIGNoYW5nZXMuPGJyIC8+XG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+QnVpbGQ8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIDxjb2RlPm5wbSBydW4gYnVpbGQ8L2NvZGU+IHRvIGJ1aWxkIGZpbGVzIGZybyBkaXN0cmlidXRpb24uPGJyIC8+XG4gICAgICAgIDxjb2RlPm5wbSBydW4gYnVpbGQ6d2F0Y2g8L2NvZGU+IHdhdGNoZXMgc3JjIGRpcmVjdG9yeSBhbmQgYnVpbGRzIGZpbGVzIG9uIGNoYW5nZXMuPGJyIC8+XG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5MaW50PC9oMj5cbiAgICAgIDxwPlxuICAgICAgICA8Y29kZT5ucG0gcnVuIGxpbnQ8L2NvZGU+IGxpbnRzIHNjcmlwdHMgaW4gc3JjIGRpcmVjdG9yeS48YnIgLz5cbiAgICAgICAgPGNvZGU+bnBtIHJ1biBsaW50OndhdGNoPC9jb2RlPiB3YXRjaGVzIHNyYyBkaXJlY3RvcnkgYW5kIGxpbnRzIHNjcmlwdHMgaW4gc3JjIGRpcmVjdG9yeS48YnIgLz5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkxpY2Vuc2U8L2gyPlxuICAgICAgICA8cD5NSVQ8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG4gIDwvZGl2PlxuKTtcblxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Eb2M7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1dHRvbi1kb2MuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})