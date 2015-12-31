webpackHotUpdate(0,{

/***/ 2568:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitButton = __webpack_require__(620);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nvar _reactUikitCodeblock = __webpack_require__(621);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitPanel = __webpack_require__(2567);\n\nvar _reactUikitPanel2 = _interopRequireDefault(_reactUikitPanel);\n\nvar _reactUikitTable = __webpack_require__(623);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ButtonDoc = function ButtonDoc(props) {\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n    console.log('click');\n  };\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Button'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Easily create nicely looking buttons, which come in different styles.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<code>npm install react-uikit-button --save;\\n\\n// ES6\\n<code>import Button from \\'react-uikit-button\\';\\n\\n// ES5\\nvar Button = require(\\'react-uikit-button\\');'\n      ),\n      _react2.default.createElement('hr', null),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The Button component creates either a button, a link or a close button by settiing the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'type'\n        ),\n        '.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'By defualt the Button component will create a button if no type is provided.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitButton2.default, { body: 'Link', type: 'link', margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { body: 'Button', margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { body: 'Disabled', disabled: true, margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { type: 'close', onClick: function onClick(e) {\n          return handleClick(e);\n        } }),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<Button body=\\'Link\\' type=\\'link\\' margin=\\'bottom right\\'/>\\n<Button body=\\'Button\\' margin=\\'bottom right\\'/>\\n<Button body=\\'Disabled\\' disabled margin=\\'bottom right\\'/>\\n<Button type=\\'close\\' onClick={(e) => handleClick(e)}/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button contexts'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The color of the button can be easily changed by adding a context to the context prop'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              null,\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Description'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context=\\'primary\\''\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Emphasizes to identify the primary action in a set of buttons.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context=\\'success\\''\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Indicates a successful or positive action.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context=\\'danger\\''\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Indicates a dangerous or negative action.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context=\\'link\\''\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Deemphasizes to look like a link while maintaining button behavior.'\n            )\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitButton2.default, { context: 'primary', body: 'Primary', margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { context: 'success', body: 'Success', margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { context: 'danger', body: 'Danger', margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { context: 'link', body: 'Link', type: 'link' }),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<Button context=\\'primary\\' body=\\'Primary\\' margin=\\'bottom right\\'/>\\n<Button context=\\'success\\' body=\\'Success\\' margin=\\'bottom right\\'/>\\n<Button context=\\'danger\\' body=\\'Danger\\' margin=\\'bottom right\\'/>\\n<Button context=\\'link\\' body=\\'Link\\' type=\\'link\\'/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button sizes'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To change the size of a Button set the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'size'\n        ),\n        ' prop to ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'mini'\n        ),\n        ', ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'small'\n        ),\n        ' or ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'large'\n        ),\n        '.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<Button size=\\'mini\\' body=\\'Mini button\\' margin=\\'right\\'/>\\n<Button size=\\'mini\\' body=\\'Mini button\\' context=\\'primary\\'/><br />\\n\\n<Button size=\\'small\\' body=\\'Small button\\' margin=\\'right\\'/>\\n<Button size=\\'small\\' body=\\'Small button\\' context=\\'primary\\'/><br />\\n\\n<Button body=\\'Default button\\'/>\\n<Button body=\\'Default button\\' context=\\'primary\\'/><br />\\n\\n<Button size=\\'large\\' body=\\'Large button\\' margin=\\'right\\'/>\\n<Button size=\\'large\\' body=\\'Large button\\' context=\\'primary\\'/><br />\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button sizes'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Tto change the size of a Button set the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'size'\n        ),\n        ' prop to ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'mini'\n        ),\n        ', ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'small'\n        ),\n        ' or ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'large'\n        ),\n        '.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<Button size=\\'mini\\' body=\\'Mini button\\' margin=\\'right\\'/>\\n<Button size=\\'mini\\' body=\\'Mini button\\' context=\\'primary\\'/><br />\\n\\n<Button size=\\'small\\' body=\\'Small button\\' margin=\\'right\\'/>\\n<Button size=\\'small\\' body=\\'Small button\\' context=\\'primary\\'/><br />\\n\\n<Button body=\\'Default button\\'/>\\n<Button body=\\'Default button\\' context=\\'primary\\'/><br />\\n\\n<Button size=\\'large\\' body=\\'Large button\\' margin=\\'right\\'/>\\n<Button size=\\'large\\' body=\\'Large button\\' context=\\'primary\\'/><br />\\n\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button blocks'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To create a full witth Button add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'block'\n        ),\n        ' prop to the buttton component.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '\\n<Button block body=\\'Button\\' margin=\\'smallBottom\\' />\\n<Button block body=\\'Button\\' context=\\'primary\\'/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button dropdown'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Coming soon...'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See Base for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              null,\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'body'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'block'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'bool'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              ' primary, success, danger or link'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'disabled'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'bool'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'onClick'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'func'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'size'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              ' mini small or large'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'type'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              ' button close or link'\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Tests'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test'\n        ),\n        ' to run tests with minimal output.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test:spec'\n        ),\n        ' to run tests with detailed output.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test:watch'\n        ),\n        'watches all directories and run tests with minimal output on file changes.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Build'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run build'\n        ),\n        ' to build files fro distribution.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run build:watch'\n        ),\n        ' watches src directory and builds files on changes.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Lint'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run lint'\n        ),\n        ' lints scripts in src directory.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run lint:watch'\n        ),\n        ' watches src directory and lints scripts in src directory.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'License'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'MIT'\n      )\n    )\n  );\n};\n\nexports.default = ButtonDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idXR0b24tZG9jLmpzeD9iZjIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVViLElBQU0sU0FBUyxHQUFHLFNBQVosU0FBUyxDQUFJLEtBQUssRUFBSztBQUMzQixNQUFNLFdBQVcsR0FBRyxTQUFkLFdBQVcsQ0FBSSxDQUFDLEVBQUs7QUFDekIsS0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25CLFdBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7R0FDdEIsQ0FBQzs7QUFFRixTQUFPOzs7SUFDTDs7O01BQ0U7Ozs7T0FBZTtNQUNmOzs7O09BRUk7S0FDSTtJQUVWOzs7TUFDRTs7OztPQUFjO01BQ2Q7Ozs7T0FRWTtNQUdaLHlDQUFLO01BRUw7Ozs7UUFFMkM7Ozs7U0FBaUI7O09BQ3hEO01BRUo7Ozs7T0FFSTtNQUVKOztVQUFJLFNBQVMsRUFBQyxTQUFTOztPQUFhO01BQ3BDLDREQUFRLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsY0FBYyxHQUFFO01BQ3ZELDREQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLGNBQWMsR0FBRTtNQUM3Qyw0REFBUSxJQUFJLEVBQUMsVUFBVSxFQUFDLFFBQVEsUUFBQyxNQUFNLEVBQUMsY0FBYyxHQUFFO01BQ3hELDREQUFRLElBQUksRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFFLGlCQUFDLENBQUM7aUJBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztTQUFDLEdBQUU7TUFFdEQ7O1VBQUksU0FBUyxFQUFDLE1BQU07O09BQVU7TUFDOUI7Ozs7T0FNWTtLQUNKO0lBR1Y7OztNQUNFOzs7O09BQXdCO01BQ3hCOzs7O09BRUk7TUFFSjs7O1FBQ0U7OztVQUNFOzs7WUFDRTs7OzthQUFhO1lBQ2I7Ozs7YUFBb0I7V0FDakI7U0FDQztRQUNSOzs7VUFD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QUEwQjs7UUFBaUMseUNBQU07UUFDakU7Ozs7U0FBZ0M7O1FBQW1ELHlDQUFNO09BQ3ZGO0tBQ0k7SUFHVjs7O01BQ0U7Ozs7T0FBYTtNQUNiOzs7UUFDRTs7OztTQUF5Qjs7UUFBZ0MseUNBQU07UUFDL0Q7Ozs7U0FBK0I7O1FBQTBELHlDQUFNO09BQzdGO0tBQ0k7SUFHVjs7O01BQ0U7Ozs7T0FBZ0I7TUFDZDs7OztPQUFVO0tBQ0o7R0FFTjtDQUNQLENBQUM7O2tCQUdhLFNBQVMiLCJmaWxlIjoiMjU2OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWJ1dHRvbic7XG5pbXBvcnQgQ29kZWJsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtY29kZWJsb2NrJztcbmltcG9ydCBQYW5lbCBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LXBhbmVsJztcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LXRhYmxlJztcblxuXG5jb25zdCBCdXR0b25Eb2MgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcbiAgfTtcblxuICByZXR1cm4gPGRpdj5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMT5CdXR0b248L2gxPlxuICAgICAgPHA+XG4gICAgICAgIEVhc2lseSBjcmVhdGUgbmljZWx5IGxvb2tpbmcgYnV0dG9ucywgd2hpY2ggY29tZSBpbiBkaWZmZXJlbnQgc3R5bGVzLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPlVzYWdlPC9oMj5cbiAgICAgIDxDb2RlYmxvY2s+XG57YDxjb2RlPm5wbSBpbnN0YWxsIHJlYWN0LXVpa2l0LWJ1dHRvbiAtLXNhdmU7XG5cbi8vIEVTNlxuPGNvZGU+aW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC11aWtpdC1idXR0b24nO1xuXG4vLyBFUzVcbnZhciBCdXR0b24gPSByZXF1aXJlKCdyZWFjdC11aWtpdC1idXR0b24nKTtgfVxuICAgICAgPC9Db2RlYmxvY2s+XG5cblxuICAgICAgPGhyLz5cblxuICAgICAgPHA+XG4gICAgICAgIFRoZSBCdXR0b24gY29tcG9uZW50IGNyZWF0ZXMgZWl0aGVyIGEgYnV0dG9uLFxuICAgICAgICBhIGxpbmsgb3IgYSBjbG9zZSBidXR0b24gYnkgc2V0dGlpbmcgdGhlIDxjb2RlPnR5cGU8L2NvZGU+LlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgQnkgZGVmdWFsdCB0aGUgQnV0dG9uIGNvbXBvbmVudCB3aWxsIGNyZWF0ZSBhIGJ1dHRvbiBpZiBubyB0eXBlIGlzIHByb3ZpZGVkLlxuICAgICAgPC9wPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICAgIDxCdXR0b24gYm9keT0nTGluaycgdHlwZT0nbGluaycgbWFyZ2luPSdib3R0b20gcmlnaHQnLz5cbiAgICAgIDxCdXR0b24gYm9keT0nQnV0dG9uJyBtYXJnaW49J2JvdHRvbSByaWdodCcvPlxuICAgICAgPEJ1dHRvbiBib2R5PSdEaXNhYmxlZCcgZGlzYWJsZWQgbWFyZ2luPSdib3R0b20gcmlnaHQnLz5cbiAgICAgIDxCdXR0b24gdHlwZT0nY2xvc2UnIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX0vPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oMz5cbiAgICAgIDxDb2RlYmxvY2s+XG57YDxCdXR0b24gYm9keT0nTGluaycgdHlwZT0nbGluaycgbWFyZ2luPSdib3R0b20gcmlnaHQnLz5cbjxCdXR0b24gYm9keT0nQnV0dG9uJyBtYXJnaW49J2JvdHRvbSByaWdodCcvPlxuPEJ1dHRvbiBib2R5PSdEaXNhYmxlZCcgZGlzYWJsZWQgbWFyZ2luPSdib3R0b20gcmlnaHQnLz5cbjxCdXR0b24gdHlwZT0nY2xvc2UnIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX0vPlxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+QnV0dG9uIGNvbnRleHRzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgY29sb3Igb2YgdGhlIGJ1dHRvbiBjYW4gYmUgZWFzaWx5IGNoYW5nZWQgYnkgYWRkaW5nIGEgY29udGV4dCB0byB0aGUgY29udGV4dCBwcm9wXG4gICAgICA8L3A+XG5cbiAgICAgIDxUYWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Qcm9wPC90aD5cbiAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+Y29udGV4dD0ncHJpbWFyeSc8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICBFbXBoYXNpemVzIHRvIGlkZW50aWZ5IHRoZSBwcmltYXJ5IGFjdGlvbiBpbiBhIHNldCBvZiBidXR0b25zLlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+Y29udGV4dD0nc3VjY2Vzcyc8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICBJbmRpY2F0ZXMgYSBzdWNjZXNzZnVsIG9yIHBvc2l0aXZlIGFjdGlvbi5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPmNvbnRleHQ9J2Rhbmdlcic8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIEluZGljYXRlcyBhIGRhbmdlcm91cyBvciBuZWdhdGl2ZSBhY3Rpb24uXG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5jb250ZXh0PSdsaW5rJzwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIERlZW1waGFzaXplcyB0byBsb29rIGxpa2UgYSBsaW5rIHdoaWxlIG1haW50YWluaW5nIGJ1dHRvbiBiZWhhdmlvci5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvVGFibGU+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgICAgPEJ1dHRvbiBjb250ZXh0PSdwcmltYXJ5JyBib2R5PSdQcmltYXJ5JyBtYXJnaW49J2JvdHRvbSByaWdodCcvPlxuICAgICAgPEJ1dHRvbiBjb250ZXh0PSdzdWNjZXNzJyBib2R5PSdTdWNjZXNzJyBtYXJnaW49J2JvdHRvbSByaWdodCcvPlxuICAgICAgPEJ1dHRvbiBjb250ZXh0PSdkYW5nZXInIGJvZHk9J0RhbmdlcicgbWFyZ2luPSdib3R0b20gcmlnaHQnLz5cbiAgICAgIDxCdXR0b24gY29udGV4dD0nbGluaycgYm9keT0nTGluaycgdHlwZT0nbGluaycvPlxuXG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2gzPlxuICAgICAgPENvZGVibG9jaz5cbntgPEJ1dHRvbiBjb250ZXh0PSdwcmltYXJ5JyBib2R5PSdQcmltYXJ5JyBtYXJnaW49J2JvdHRvbSByaWdodCcvPlxuPEJ1dHRvbiBjb250ZXh0PSdzdWNjZXNzJyBib2R5PSdTdWNjZXNzJyBtYXJnaW49J2JvdHRvbSByaWdodCcvPlxuPEJ1dHRvbiBjb250ZXh0PSdkYW5nZXInIGJvZHk9J0RhbmdlcicgbWFyZ2luPSdib3R0b20gcmlnaHQnLz5cbjxCdXR0b24gY29udGV4dD0nbGluaycgYm9keT0nTGluaycgdHlwZT0nbGluaycvPlxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkJ1dHRvbiBzaXplczwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgVG8gY2hhbmdlIHRoZSBzaXplIG9mIGEgQnV0dG9uIHNldCB0aGUgPGNvZGU+c2l6ZTwvY29kZT4gcHJvcFxuICAgICAgICB0byA8Y29kZT5taW5pPC9jb2RlPiwgPGNvZGU+c21hbGw8L2NvZGU+IG9yIDxjb2RlPmxhcmdlPC9jb2RlPi5cbiAgICAgIDwvcD5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2gzPlxuICAgICAgPENvZGVibG9jaz5cbntgPEJ1dHRvbiBzaXplPSdtaW5pJyBib2R5PSdNaW5pIGJ1dHRvbicgbWFyZ2luPSdyaWdodCcvPlxuPEJ1dHRvbiBzaXplPSdtaW5pJyBib2R5PSdNaW5pIGJ1dHRvbicgY29udGV4dD0ncHJpbWFyeScvPjxiciAvPlxuXG48QnV0dG9uIHNpemU9J3NtYWxsJyBib2R5PSdTbWFsbCBidXR0b24nIG1hcmdpbj0ncmlnaHQnLz5cbjxCdXR0b24gc2l6ZT0nc21hbGwnIGJvZHk9J1NtYWxsIGJ1dHRvbicgY29udGV4dD0ncHJpbWFyeScvPjxiciAvPlxuXG48QnV0dG9uIGJvZHk9J0RlZmF1bHQgYnV0dG9uJy8+XG48QnV0dG9uIGJvZHk9J0RlZmF1bHQgYnV0dG9uJyBjb250ZXh0PSdwcmltYXJ5Jy8+PGJyIC8+XG5cbjxCdXR0b24gc2l6ZT0nbGFyZ2UnIGJvZHk9J0xhcmdlIGJ1dHRvbicgbWFyZ2luPSdyaWdodCcvPlxuPEJ1dHRvbiBzaXplPSdsYXJnZScgYm9keT0nTGFyZ2UgYnV0dG9uJyBjb250ZXh0PSdwcmltYXJ5Jy8+PGJyIC8+XG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5CdXR0b24gc2l6ZXM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFR0byBjaGFuZ2UgdGhlIHNpemUgb2YgYSBCdXR0b24gc2V0IHRoZSA8Y29kZT5zaXplPC9jb2RlPiBwcm9wXG4gICAgICAgIHRvIDxjb2RlPm1pbmk8L2NvZGU+LCA8Y29kZT5zbWFsbDwvY29kZT4gb3IgPGNvZGU+bGFyZ2U8L2NvZGU+LlxuICAgICAgPC9wPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDM+XG4gICAgICA8Q29kZWJsb2NrPlxue2A8QnV0dG9uIHNpemU9J21pbmknIGJvZHk9J01pbmkgYnV0dG9uJyBtYXJnaW49J3JpZ2h0Jy8+XG48QnV0dG9uIHNpemU9J21pbmknIGJvZHk9J01pbmkgYnV0dG9uJyBjb250ZXh0PSdwcmltYXJ5Jy8+PGJyIC8+XG5cbjxCdXR0b24gc2l6ZT0nc21hbGwnIGJvZHk9J1NtYWxsIGJ1dHRvbicgbWFyZ2luPSdyaWdodCcvPlxuPEJ1dHRvbiBzaXplPSdzbWFsbCcgYm9keT0nU21hbGwgYnV0dG9uJyBjb250ZXh0PSdwcmltYXJ5Jy8+PGJyIC8+XG5cbjxCdXR0b24gYm9keT0nRGVmYXVsdCBidXR0b24nLz5cbjxCdXR0b24gYm9keT0nRGVmYXVsdCBidXR0b24nIGNvbnRleHQ9J3ByaW1hcnknLz48YnIgLz5cblxuPEJ1dHRvbiBzaXplPSdsYXJnZScgYm9keT0nTGFyZ2UgYnV0dG9uJyBtYXJnaW49J3JpZ2h0Jy8+XG48QnV0dG9uIHNpemU9J2xhcmdlJyBib2R5PSdMYXJnZSBidXR0b24nIGNvbnRleHQ9J3ByaW1hcnknLz48YnIgLz5cblxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+QnV0dG9uIGJsb2NrczwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgVG8gY3JlYXRlIGEgZnVsbCB3aXR0aCBCdXR0b24gYWRkIHRoZSA8Y29kZT5ibG9jazwvY29kZT4gcHJvcFxuICAgICAgICB0byB0aGUgYnV0dHRvbiBjb21wb25lbnQuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oMz5cbiAgICAgIDxDb2RlYmxvY2s+XG57YFxuPEJ1dHRvbiBibG9jayBib2R5PSdCdXR0b24nIG1hcmdpbj0nc21hbGxCb3R0b20nIC8+XG48QnV0dG9uIGJsb2NrIGJvZHk9J0J1dHRvbicgY29udGV4dD0ncHJpbWFyeScvPlxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+QnV0dG9uIGRyb3Bkb3duPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBDb21pbmcgc29vbi4uLlxuICAgICAgPC9wPlxuXG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5CdXR0b24gUHJvcHM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFNlZSBCYXNlIGZvciBhZGRpdGlvbmFsIHV0aWxpdHkgcHJvcHMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxUYWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Qcm9wPC90aD5cbiAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5ib2R5PC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5zdHJpbmc8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5ibG9jazwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+Ym9vbDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPmNvbnRleHQ8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPm9uZU9mIDxiciAvPiBwcmltYXJ5LCBzdWNjZXNzLCBkYW5nZXIgb3IgbGluazwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPmRpc2FibGVkPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5ib29sPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+b25DbGljazwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+ZnVuYzwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPnNpemU8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPm9uZU9mIDxiciAvPiBtaW5pIHNtYWxsIG9yIGxhcmdlPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+dHlwZTwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+b25lT2YgPGJyIC8+IGJ1dHRvbiBjbG9zZSBvciBsaW5rPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPlRlc3RzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICA8Y29kZT5ucG0gcnVuIHRlc3Q8L2NvZGU+IHRvIHJ1biB0ZXN0cyB3aXRoIG1pbmltYWwgb3V0cHV0LjxiciAvPlxuICAgICAgICA8Y29kZT5ucG0gcnVuIHRlc3Q6c3BlYzwvY29kZT4gdG8gcnVuIHRlc3RzIHdpdGggZGV0YWlsZWQgb3V0cHV0LjxiciAvPlxuICAgICAgICA8Y29kZT5ucG0gcnVuIHRlc3Q6d2F0Y2g8L2NvZGU+d2F0Y2hlcyBhbGwgZGlyZWN0b3JpZXMgYW5kIHJ1biB0ZXN0cyB3aXRoIG1pbmltYWwgb3V0cHV0IG9uIGZpbGUgY2hhbmdlcy48YnIgLz5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5CdWlsZDwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgPGNvZGU+bnBtIHJ1biBidWlsZDwvY29kZT4gdG8gYnVpbGQgZmlsZXMgZnJvIGRpc3RyaWJ1dGlvbi48YnIgLz5cbiAgICAgICAgPGNvZGU+bnBtIHJ1biBidWlsZDp3YXRjaDwvY29kZT4gd2F0Y2hlcyBzcmMgZGlyZWN0b3J5IGFuZCBidWlsZHMgZmlsZXMgb24gY2hhbmdlcy48YnIgLz5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkxpbnQ8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIDxjb2RlPm5wbSBydW4gbGludDwvY29kZT4gbGludHMgc2NyaXB0cyBpbiBzcmMgZGlyZWN0b3J5LjxiciAvPlxuICAgICAgICA8Y29kZT5ucG0gcnVuIGxpbnQ6d2F0Y2g8L2NvZGU+IHdhdGNoZXMgc3JjIGRpcmVjdG9yeSBhbmQgbGludHMgc2NyaXB0cyBpbiBzcmMgZGlyZWN0b3J5LjxiciAvPlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+TGljZW5zZTwvaDI+XG4gICAgICAgIDxwPk1JVDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgPC9kaXY+XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkRvYztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnV0dG9uLWRvYy5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})