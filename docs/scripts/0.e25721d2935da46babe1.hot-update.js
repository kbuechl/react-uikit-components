webpackHotUpdate(0,{

/***/ 2568:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitButton = __webpack_require__(620);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nvar _reactUikitCodeblock = __webpack_require__(621);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitTable = __webpack_require__(623);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ButtonDoc = function ButtonDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Button'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Easily create nicely looking buttons, which come in different styles.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<code>npm install react-uikit-button --save;\\n\\n// ES6\\n<code>import Button from \\'react-uikit-button\\';\\n\\n// ES5\\nvar Button = require(\\'react-uikit-button\\');'\n      ),\n      _react2.default.createElement('hr', null),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The Button component creates either a button, a link or a close button by setting the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'type'\n        ),\n        '.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'By defualt the Button component will create a button if no type is provided.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitButton2.default, { body: 'Link', type: 'link', margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { body: 'Button', margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { body: 'Disabled', disabled: true, margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { type: 'close' }),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<Button body=\\'Link\\' type=\\'link\\' margin=\\'bottom right\\'/>\\n<Button body=\\'Button\\' margin=\\'bottom right\\'/>\\n<Button body=\\'Disabled\\' disabled margin=\\'bottom right\\'/>\\n<Button type=\\'close\\'/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button contexts'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The color of the button can be easily changed by adding a context to the context prop'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              null,\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Description'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context=\\'primary\\''\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Emphasizes to identify the primary action in a set of buttons.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context=\\'success\\''\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Indicates a successful or positive action.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context=\\'danger\\''\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Indicates a dangerous or negative action.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context=\\'link\\''\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'De-emphasizes to look like a link while maintaining button behavior.'\n            )\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitButton2.default, { context: 'primary', body: 'Primary', margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { context: 'success', body: 'Success', margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { context: 'danger', body: 'Danger', margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { context: 'link', body: 'Link', type: 'link' }),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<Button context=\\'primary\\' body=\\'Primary\\' margin=\\'bottom right\\'/>\\n<Button context=\\'success\\' body=\\'Success\\' margin=\\'bottom right\\'/>\\n<Button context=\\'danger\\' body=\\'Danger\\' margin=\\'bottom right\\'/>\\n<Button context=\\'link\\' body=\\'Link\\' type=\\'link\\'/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button sizes'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To change the size of a Button set the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'size'\n        ),\n        ' prop to mini, small, or large.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitButton2.default, { size: 'mini', body: 'Mini button', margin: 'right bottom' }),\n      _react2.default.createElement(_reactUikitButton2.default, { size: 'mini', body: 'Mini button', context: 'primary', margin: 'bottom' }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(_reactUikitButton2.default, { size: 'small', body: 'Small button', margin: 'right bottom' }),\n      _react2.default.createElement(_reactUikitButton2.default, { size: 'small', body: 'Small button', context: 'primary', margin: 'bottom' }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(_reactUikitButton2.default, { body: 'Default button', margin: 'right bottom' }),\n      _react2.default.createElement(_reactUikitButton2.default, { body: 'Default button', context: 'primary', margin: 'bottom' }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(_reactUikitButton2.default, { size: 'large', body: 'Large button', margin: 'bottom' }),\n      _react2.default.createElement(_reactUikitButton2.default, { size: 'large', body: 'Large button', context: 'primary', margin: 'bottom' }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<Button size=\\'mini\\' body=\\'Mini button\\' margin=\\'right bottom\\'/>\\n<Button size=\\'mini\\' body=\\'Mini button\\' context=\\'primary\\' margin=\\'bottom\\'/><br />\\n\\n<Button size=\\'small\\' body=\\'Small button\\' margin=\\'right bottom\\'/>\\n<Button size=\\'small\\' body=\\'Small button\\' context=\\'primary\\' margin=\\'bottom\\'/><br />\\n\\n<Button body=\\'Default button\\' margin=\\'right bottom\\'/>\\n<Button body=\\'Default button\\' context=\\'primary\\' margin=\\'bottom\\'/><br />\\n\\n<Button size=\\'large\\' body=\\'Large button\\' margin=\\'bottom\\'/>\\n<Button size=\\'large\\' body=\\'Large button\\' context=\\'primary\\' margin=\\'bottom\\'/><br />\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button blocks'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To create a full width button add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'block'\n        ),\n        ' prop to the buttton component.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitButton2.default, { block: true, body: 'Button', margin: 'smallBottom' }),\n      _react2.default.createElement(_reactUikitButton2.default, { block: true, body: 'Button', context: 'primary' }),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '\\n<Button block body=\\'Button\\' margin=\\'smallBottom\\' />\\n<Button block body=\\'Button\\' context=\\'primary\\'/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button dropdown'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Buttons can also be used to trigger a dropdown. See button dropdown in Dropdown component for more details.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See Base for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              null,\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'body'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'block'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'bool'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              ' primary, success, danger or link'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'disabled'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'bool'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'size'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              ' mini small or large'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'type'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              ' button close or link'\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Tests'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test'\n        ),\n        ' to run tests with minimal output.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test:spec'\n        ),\n        ' to run tests with detailed output.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test:watch'\n        ),\n        'watches all directories and run tests with minimal output on file changes.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Build'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run build'\n        ),\n        ' to build files fro distribution.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run build:watch'\n        ),\n        ' watches src directory and builds files on changes.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Lint'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run lint'\n        ),\n        ' lints scripts in src directory.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run lint:watch'\n        ),\n        ' watches src directory and lints scripts in src directory.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'License'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'MIT'\n      )\n    )\n  );\n};\n\nexports.default = ButtonDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idXR0b24tZG9jLmpzeD9iZjIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2IsSUFBTSxTQUFTLEdBQUcsU0FBWixTQUFTLENBQUksS0FBSyxFQUFLO0FBQzNCLFNBQU87OztJQUNMOzs7TUFDRTs7OztPQUFlO01BQ2Y7Ozs7T0FFSTtLQUNJO0lBRVY7OztNQUNFOzs7O09BQWM7TUFDZDs7OztPQVFZO01BR1oseUNBQUs7TUFFTDs7OztRQUUwQzs7OztTQUFpQjs7T0FDdkQ7TUFFSjs7OztPQUVJO01BRUo7O1VBQUksU0FBUyxFQUFDLFNBQVM7O09BQWE7TUFDcEMsNERBQVEsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxjQUFjLEdBQUU7TUFDdkQsNERBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsY0FBYyxHQUFFO01BQzdDLDREQUFRLElBQUksRUFBQyxVQUFVLEVBQUMsUUFBUSxRQUFDLE1BQU0sRUFBQyxjQUFjLEdBQUU7TUFDeEQsNERBQVEsSUFBSSxFQUFDLE9BQU8sR0FBRTtNQUV0Qjs7VUFBSSxTQUFTLEVBQUMsTUFBTTs7T0FBVTtNQUM5Qjs7OztPQU1ZO0tBQ0o7SUFHVjs7O01BQ0U7Ozs7T0FBd0I7TUFDeEI7Ozs7T0FFSTtNQUVKOzs7UUFDRTs7O1VBQ0U7OztZQUNFOzs7O2FBQWE7WUFDYjs7OzthQUFvQjtXQUNqQjtTQUNDO1FBQ1I7OztVQUNFOzs7WUFDRTs7O2NBQ0U7Ozs7ZUFBOEI7YUFDM0I7WUFDTDs7OzthQUVLO1dBQ0Y7VUFDTDs7O1lBQ0U7OztjQUNFOzs7O2VBQThCO2FBQzNCO1lBQ0w7Ozs7YUFFSztXQUNGO1VBQ0w7OztZQUNFOzs7Y0FDRTs7OztlQUE2QjthQUMxQjtZQUNMOzs7O2FBRUs7V0FDRjtVQUNMOzs7WUFDRTs7O2NBQ0U7Ozs7ZUFBMkI7YUFDeEI7WUFD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Q0w7Ozs7YUFBYTtXQUNWO1VBQ0w7OztZQUNFOzs7Y0FDRTs7OztlQUFpQjthQUNkO1lBQ0w7Ozs7Y0FBVSx5Q0FBTTs7YUFBeUI7V0FDdEM7VUFDTDs7O1lBQ0U7OztjQUNFOzs7O2VBQWlCO2FBQ2Q7WUFDTDs7OztjQUFVLHlDQUFNOzthQUEwQjtXQUN2QztTQUNDO09BQ0Y7S0FDQTtJQUdWOzs7TUFDRTs7OztPQUFjO01BQ2Q7OztRQUNFOzs7O1NBQXlCOztRQUFrQyx5Q0FBTTtRQUNqRTs7OztTQUE4Qjs7UUFBbUMseUNBQU07UUFDdkU7Ozs7U0FBK0I7O1FBQTBFLHlDQUFNO09BQzdHO0tBQ0k7SUFFVjs7O01BQ0U7Ozs7T0FBYztNQUNkOzs7UUFDRTs7OztTQUEwQjs7UUFBaUMseUNBQU07UUFDakU7Ozs7U0FBZ0M7O1FBQW1ELHlDQUFNO09BQ3ZGO0tBQ0k7SUFHVjs7O01BQ0U7Ozs7T0FBYTtNQUNiOzs7UUFDRTs7OztTQUF5Qjs7UUFBZ0MseUNBQU07UUFDL0Q7Ozs7U0FBK0I7O1FBQTBELHlDQUFNO09BQzdGO0tBQ0k7SUFHVjs7O01BQ0U7Ozs7T0FBZ0I7TUFDZDs7OztPQUFVO0tBQ0o7R0FFTixDQUFDO0NBQ1IsQ0FBQzs7a0JBR2EsU0FBUyIsImZpbGUiOiIyNTY4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtYnV0dG9uJztcbmltcG9ydCBDb2RlYmxvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1jb2RlYmxvY2snO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtdGFibGUnO1xuXG5cbmNvbnN0IEJ1dHRvbkRvYyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gPGRpdj5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMT5CdXR0b248L2gxPlxuICAgICAgPHA+XG4gICAgICAgIEVhc2lseSBjcmVhdGUgbmljZWx5IGxvb2tpbmcgYnV0dG9ucywgd2hpY2ggY29tZSBpbiBkaWZmZXJlbnQgc3R5bGVzLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPlVzYWdlPC9oMj5cbiAgICAgIDxDb2RlYmxvY2s+XG57YDxjb2RlPm5wbSBpbnN0YWxsIHJlYWN0LXVpa2l0LWJ1dHRvbiAtLXNhdmU7XG5cbi8vIEVTNlxuPGNvZGU+aW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC11aWtpdC1idXR0b24nO1xuXG4vLyBFUzVcbnZhciBCdXR0b24gPSByZXF1aXJlKCdyZWFjdC11aWtpdC1idXR0b24nKTtgfVxuICAgICAgPC9Db2RlYmxvY2s+XG5cblxuICAgICAgPGhyLz5cblxuICAgICAgPHA+XG4gICAgICAgIFRoZSBCdXR0b24gY29tcG9uZW50IGNyZWF0ZXMgZWl0aGVyIGEgYnV0dG9uLFxuICAgICAgICBhIGxpbmsgb3IgYSBjbG9zZSBidXR0b24gYnkgc2V0dGluZyB0aGUgPGNvZGU+dHlwZTwvY29kZT4uXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBCeSBkZWZ1YWx0IHRoZSBCdXR0b24gY29tcG9uZW50IHdpbGwgY3JlYXRlIGEgYnV0dG9uIGlmIG5vIHR5cGUgaXMgcHJvdmlkZWQuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgICAgPEJ1dHRvbiBib2R5PSdMaW5rJyB0eXBlPSdsaW5rJyBtYXJnaW49J2JvdHRvbSByaWdodCcvPlxuICAgICAgPEJ1dHRvbiBib2R5PSdCdXR0b24nIG1hcmdpbj0nYm90dG9tIHJpZ2h0Jy8+XG4gICAgICA8QnV0dG9uIGJvZHk9J0Rpc2FibGVkJyBkaXNhYmxlZCBtYXJnaW49J2JvdHRvbSByaWdodCcvPlxuICAgICAgPEJ1dHRvbiB0eXBlPSdjbG9zZScvPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oMz5cbiAgICAgIDxDb2RlYmxvY2s+XG57YDxCdXR0b24gYm9keT0nTGluaycgdHlwZT0nbGluaycgbWFyZ2luPSdib3R0b20gcmlnaHQnLz5cbjxCdXR0b24gYm9keT0nQnV0dG9uJyBtYXJnaW49J2JvdHRvbSByaWdodCcvPlxuPEJ1dHRvbiBib2R5PSdEaXNhYmxlZCcgZGlzYWJsZWQgbWFyZ2luPSdib3R0b20gcmlnaHQnLz5cbjxCdXR0b24gdHlwZT0nY2xvc2UnLz5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkJ1dHRvbiBjb250ZXh0czwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgVGhlIGNvbG9yIG9mIHRoZSBidXR0b24gY2FuIGJlIGVhc2lseSBjaGFuZ2VkIGJ5IGFkZGluZyBhIGNvbnRleHQgdG8gdGhlIGNvbnRleHQgcHJvcFxuICAgICAgPC9wPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UHJvcDwvdGg+XG4gICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPmNvbnRleHQ9J3ByaW1hcnknPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgRW1waGFzaXplcyB0byBpZGVudGlmeSB0aGUgcHJpbWFyeSBhY3Rpb24gaW4gYSBzZXQgb2YgYnV0dG9ucy5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPmNvbnRleHQ9J3N1Y2Nlc3MnPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgSW5kaWNhdGVzIGEgc3VjY2Vzc2Z1bCBvciBwb3NpdGl2ZSBhY3Rpb24uXG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5jb250ZXh0PSdkYW5nZXInPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICBJbmRpY2F0ZXMgYSBkYW5nZXJvdXMgb3IgbmVnYXRpdmUgYWN0aW9uLlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+Y29udGV4dD0nbGluayc8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICBEZS1lbXBoYXNpemVzIHRvIGxvb2sgbGlrZSBhIGxpbmsgd2hpbGUgbWFpbnRhaW5pbmcgYnV0dG9uIGJlaGF2aW9yLlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9UYWJsZT5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgICA8QnV0dG9uIGNvbnRleHQ9J3ByaW1hcnknIGJvZHk9J1ByaW1hcnknIG1hcmdpbj0nYm90dG9tIHJpZ2h0Jy8+XG4gICAgICA8QnV0dG9uIGNvbnRleHQ9J3N1Y2Nlc3MnIGJvZHk9J1N1Y2Nlc3MnIG1hcmdpbj0nYm90dG9tIHJpZ2h0Jy8+XG4gICAgICA8QnV0dG9uIGNvbnRleHQ9J2RhbmdlcicgYm9keT0nRGFuZ2VyJyBtYXJnaW49J2JvdHRvbSByaWdodCcvPlxuICAgICAgPEJ1dHRvbiBjb250ZXh0PSdsaW5rJyBib2R5PSdMaW5rJyB0eXBlPSdsaW5rJy8+XG5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDM+XG4gICAgICA8Q29kZWJsb2NrPlxue2A8QnV0dG9uIGNvbnRleHQ9J3ByaW1hcnknIGJvZHk9J1ByaW1hcnknIG1hcmdpbj0nYm90dG9tIHJpZ2h0Jy8+XG48QnV0dG9uIGNvbnRleHQ9J3N1Y2Nlc3MnIGJvZHk9J1N1Y2Nlc3MnIG1hcmdpbj0nYm90dG9tIHJpZ2h0Jy8+XG48QnV0dG9uIGNvbnRleHQ9J2RhbmdlcicgYm9keT0nRGFuZ2VyJyBtYXJnaW49J2JvdHRvbSByaWdodCcvPlxuPEJ1dHRvbiBjb250ZXh0PSdsaW5rJyBib2R5PSdMaW5rJyB0eXBlPSdsaW5rJy8+XG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+QnV0dG9uIHNpemVzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBUbyBjaGFuZ2UgdGhlIHNpemUgb2YgYSBCdXR0b24gc2V0IHRoZSA8Y29kZT5zaXplPC9jb2RlPiBwcm9wXG4gICAgICAgIHRvIG1pbmksIHNtYWxsLCBvciBsYXJnZS5cbiAgICAgIDwvcD5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgICA8QnV0dG9uIHNpemU9J21pbmknIGJvZHk9J01pbmkgYnV0dG9uJyBtYXJnaW49J3JpZ2h0IGJvdHRvbScvPlxuICAgICAgPEJ1dHRvbiBzaXplPSdtaW5pJyBib2R5PSdNaW5pIGJ1dHRvbicgY29udGV4dD0ncHJpbWFyeScgbWFyZ2luPSdib3R0b20nLz48YnIgLz5cblxuICAgICAgPEJ1dHRvbiBzaXplPSdzbWFsbCcgYm9keT0nU21hbGwgYnV0dG9uJyBtYXJnaW49J3JpZ2h0IGJvdHRvbScvPlxuICAgICAgPEJ1dHRvbiBzaXplPSdzbWFsbCcgYm9keT0nU21hbGwgYnV0dG9uJyBjb250ZXh0PSdwcmltYXJ5JyBtYXJnaW49J2JvdHRvbScvPjxiciAvPlxuXG4gICAgICA8QnV0dG9uIGJvZHk9J0RlZmF1bHQgYnV0dG9uJyBtYXJnaW49J3JpZ2h0IGJvdHRvbScvPlxuICAgICAgPEJ1dHRvbiBib2R5PSdEZWZhdWx0IGJ1dHRvbicgY29udGV4dD0ncHJpbWFyeScgbWFyZ2luPSdib3R0b20nLz48YnIgLz5cblxuICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgYm9keT0nTGFyZ2UgYnV0dG9uJyBtYXJnaW49J2JvdHRvbScvPlxuICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgYm9keT0nTGFyZ2UgYnV0dG9uJyBjb250ZXh0PSdwcmltYXJ5JyBtYXJnaW49J2JvdHRvbScvPjxiciAvPlxuXG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2gzPlxuICAgICAgPENvZGVibG9jaz5cbntgPEJ1dHRvbiBzaXplPSdtaW5pJyBib2R5PSdNaW5pIGJ1dHRvbicgbWFyZ2luPSdyaWdodCBib3R0b20nLz5cbjxCdXR0b24gc2l6ZT0nbWluaScgYm9keT0nTWluaSBidXR0b24nIGNvbnRleHQ9J3ByaW1hcnknIG1hcmdpbj0nYm90dG9tJy8+PGJyIC8+XG5cbjxCdXR0b24gc2l6ZT0nc21hbGwnIGJvZHk9J1NtYWxsIGJ1dHRvbicgbWFyZ2luPSdyaWdodCBib3R0b20nLz5cbjxCdXR0b24gc2l6ZT0nc21hbGwnIGJvZHk9J1NtYWxsIGJ1dHRvbicgY29udGV4dD0ncHJpbWFyeScgbWFyZ2luPSdib3R0b20nLz48YnIgLz5cblxuPEJ1dHRvbiBib2R5PSdEZWZhdWx0IGJ1dHRvbicgbWFyZ2luPSdyaWdodCBib3R0b20nLz5cbjxCdXR0b24gYm9keT0nRGVmYXVsdCBidXR0b24nIGNvbnRleHQ9J3ByaW1hcnknIG1hcmdpbj0nYm90dG9tJy8+PGJyIC8+XG5cbjxCdXR0b24gc2l6ZT0nbGFyZ2UnIGJvZHk9J0xhcmdlIGJ1dHRvbicgbWFyZ2luPSdib3R0b20nLz5cbjxCdXR0b24gc2l6ZT0nbGFyZ2UnIGJvZHk9J0xhcmdlIGJ1dHRvbicgY29udGV4dD0ncHJpbWFyeScgbWFyZ2luPSdib3R0b20nLz48YnIgLz5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkJ1dHRvbiBibG9ja3M8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFRvIGNyZWF0ZSBhIGZ1bGwgd2lkdGggYnV0dG9uIGFkZCB0aGUgPGNvZGU+YmxvY2s8L2NvZGU+IHByb3BcbiAgICAgICAgdG8gdGhlIGJ1dHR0b24gY29tcG9uZW50LlxuICAgICAgPC9wPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICAgIDxCdXR0b24gYmxvY2sgYm9keT0nQnV0dG9uJyBtYXJnaW49J3NtYWxsQm90dG9tJyAvPlxuICAgICAgPEJ1dHRvbiBibG9jayBib2R5PSdCdXR0b24nIGNvbnRleHQ9J3ByaW1hcnknLz5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDM+XG4gICAgICA8Q29kZWJsb2NrPlxue2BcbjxCdXR0b24gYmxvY2sgYm9keT0nQnV0dG9uJyBtYXJnaW49J3NtYWxsQm90dG9tJyAvPlxuPEJ1dHRvbiBibG9jayBib2R5PSdCdXR0b24nIGNvbnRleHQ9J3ByaW1hcnknLz5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkJ1dHRvbiBkcm9wZG93bjwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgQnV0dG9ucyBjYW4gYWxzbyBiZSB1c2VkIHRvIHRyaWdnZXIgYSBkcm9wZG93bi5cbiAgICAgICAgU2VlIGJ1dHRvbiBkcm9wZG93biBpbiBEcm9wZG93biBjb21wb25lbnQgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIDwvcD5cblxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+QnV0dG9uIFByb3BzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBTZWUgQmFzZSBmb3IgYWRkaXRpb25hbCB1dGlsaXR5IHByb3BzLlxuICAgICAgPC9wPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UHJvcDwvdGg+XG4gICAgICAgICAgICA8dGg+VHlwZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+Ym9keTwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+c3RyaW5nPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+YmxvY2s8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPmJvb2w8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5jb250ZXh0PC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5vbmVPZiA8YnIgLz4gcHJpbWFyeSwgc3VjY2VzcywgZGFuZ2VyIG9yIGxpbms8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5kaXNhYmxlZDwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+Ym9vbDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPnNpemU8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPm9uZU9mIDxiciAvPiBtaW5pIHNtYWxsIG9yIGxhcmdlPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+dHlwZTwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+b25lT2YgPGJyIC8+IGJ1dHRvbiBjbG9zZSBvciBsaW5rPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPlRlc3RzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICA8Y29kZT5ucG0gcnVuIHRlc3Q8L2NvZGU+IHRvIHJ1biB0ZXN0cyB3aXRoIG1pbmltYWwgb3V0cHV0LjxiciAvPlxuICAgICAgICA8Y29kZT5ucG0gcnVuIHRlc3Q6c3BlYzwvY29kZT4gdG8gcnVuIHRlc3RzIHdpdGggZGV0YWlsZWQgb3V0cHV0LjxiciAvPlxuICAgICAgICA8Y29kZT5ucG0gcnVuIHRlc3Q6d2F0Y2g8L2NvZGU+d2F0Y2hlcyBhbGwgZGlyZWN0b3JpZXMgYW5kIHJ1biB0ZXN0cyB3aXRoIG1pbmltYWwgb3V0cHV0IG9uIGZpbGUgY2hhbmdlcy48YnIgLz5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5CdWlsZDwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgPGNvZGU+bnBtIHJ1biBidWlsZDwvY29kZT4gdG8gYnVpbGQgZmlsZXMgZnJvIGRpc3RyaWJ1dGlvbi48YnIgLz5cbiAgICAgICAgPGNvZGU+bnBtIHJ1biBidWlsZDp3YXRjaDwvY29kZT4gd2F0Y2hlcyBzcmMgZGlyZWN0b3J5IGFuZCBidWlsZHMgZmlsZXMgb24gY2hhbmdlcy48YnIgLz5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkxpbnQ8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIDxjb2RlPm5wbSBydW4gbGludDwvY29kZT4gbGludHMgc2NyaXB0cyBpbiBzcmMgZGlyZWN0b3J5LjxiciAvPlxuICAgICAgICA8Y29kZT5ucG0gcnVuIGxpbnQ6d2F0Y2g8L2NvZGU+IHdhdGNoZXMgc3JjIGRpcmVjdG9yeSBhbmQgbGludHMgc2NyaXB0cyBpbiBzcmMgZGlyZWN0b3J5LjxiciAvPlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+TGljZW5zZTwvaDI+XG4gICAgICAgIDxwPk1JVDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgPC9kaXY+O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Eb2M7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1dHRvbi1kb2MuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})