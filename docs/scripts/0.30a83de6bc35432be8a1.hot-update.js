webpackHotUpdate(0,{

/***/ 2700:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitButton = __webpack_require__(372);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nvar _reactUikitCodeblock = __webpack_require__(218);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitTable = __webpack_require__(269);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ButtonDoc = function ButtonDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Button'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Easily create nicely looking buttons, which come in different styles.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<code>npm install react-uikit-button --save;\\n\\n// ES6\\n<code>import Button from \\'react-uikit-button\\';\\n\\n// ES5\\nvar Button = require(\\'react-uikit-button\\');'\n      ),\n      _react2.default.createElement('hr', null),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The Button component creates either a button, a link or a close button by setting the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'type'\n        ),\n        '.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'By defualt the Button component will create a button if no type is provided.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitButton2.default, { body: 'Link', type: 'link', margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { body: 'Button', margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { body: 'Disabled', disabled: true, margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { type: 'close' }),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<Button body=\\'Link\\' type=\\'link\\' margin=\\'bottom right\\'/>\\n<Button body=\\'Button\\' margin=\\'bottom right\\'/>\\n<Button body=\\'Disabled\\' disabled margin=\\'bottom right\\'/>\\n<Button type=\\'close\\'/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button contexts'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The color of the button can be easily changed by adding a context to the context prop'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              null,\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Description'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context=\\'primary\\''\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Emphasizes to identify the primary action in a set of buttons.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context=\\'success\\''\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Indicates a successful or positive action.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context=\\'danger\\''\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Indicates a dangerous or negative action.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context=\\'link\\''\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'De-emphasizes to look like a link while maintaining button behavior.'\n            )\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitButton2.default, { context: 'primary', body: 'Primary', margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { context: 'success', body: 'Success', margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { context: 'danger', body: 'Danger', margin: 'bottom right' }),\n      _react2.default.createElement(_reactUikitButton2.default, { context: 'link', body: 'Link', type: 'link' }),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<Button context=\\'primary\\' body=\\'Primary\\' margin=\\'bottom right\\'/>\\n<Button context=\\'success\\' body=\\'Success\\' margin=\\'bottom right\\'/>\\n<Button context=\\'danger\\' body=\\'Danger\\' margin=\\'bottom right\\'/>\\n<Button context=\\'link\\' body=\\'Link\\' type=\\'link\\'/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button sizes'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To change the size of a Button set the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'size'\n        ),\n        ' prop to mini, small, or large.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitButton2.default, { size: 'mini', body: 'Mini button', margin: 'right bottom' }),\n      _react2.default.createElement(_reactUikitButton2.default, { size: 'mini', body: 'Mini button', context: 'primary', margin: 'bottom' }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(_reactUikitButton2.default, { size: 'small', body: 'Small button', margin: 'right bottom' }),\n      _react2.default.createElement(_reactUikitButton2.default, { size: 'small', body: 'Small button', context: 'primary', margin: 'bottom' }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(_reactUikitButton2.default, { body: 'Default button', margin: 'right bottom' }),\n      _react2.default.createElement(_reactUikitButton2.default, { body: 'Default button', context: 'primary', margin: 'bottom' }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(_reactUikitButton2.default, { size: 'large', body: 'Large button', margin: 'bottom' }),\n      _react2.default.createElement(_reactUikitButton2.default, { size: 'large', body: 'Large button', context: 'primary', margin: 'bottom' }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<Button size=\\'mini\\' body=\\'Mini button\\' margin=\\'right bottom\\'/>\\n<Button size=\\'mini\\' body=\\'Mini button\\' context=\\'primary\\' margin=\\'bottom\\'/><br />\\n\\n<Button size=\\'small\\' body=\\'Small button\\' margin=\\'right bottom\\'/>\\n<Button size=\\'small\\' body=\\'Small button\\' context=\\'primary\\' margin=\\'bottom\\'/><br />\\n\\n<Button body=\\'Default button\\' margin=\\'right bottom\\'/>\\n<Button body=\\'Default button\\' context=\\'primary\\' margin=\\'bottom\\'/><br />\\n\\n<Button size=\\'large\\' body=\\'Large button\\' margin=\\'bottom\\'/>\\n<Button size=\\'large\\' body=\\'Large button\\' context=\\'primary\\' margin=\\'bottom\\'/><br />\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button blocks'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To create a full width button add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'block'\n        ),\n        ' prop to the buttton component.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitButton2.default, { block: true, body: 'Button', margin: 'smallBottom' }),\n      _react2.default.createElement(_reactUikitButton2.default, { block: true, body: 'Button', context: 'primary' }),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '\\n<Button block body=\\'Button\\' margin=\\'smallBottom\\' />\\n<Button block body=\\'Button\\' context=\\'primary\\'/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button dropdown'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Buttons can also be used to trigger a dropdown. See button dropdown in Dropdown component for more details.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Button Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See Base for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              null,\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'body'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'block'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'bool'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              ' primary, success, danger or link'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'disabled'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'bool'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'size'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              ' mini small or large'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'type'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              ' button close or link'\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = ButtonDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idXR0b24tZG9jLmpzeD9iZjIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2IsSUFBTSxTQUFTLEdBQUcsU0FBWixTQUFTLENBQUksS0FBSyxFQUFLO0FBQzNCLFNBQU87OztJQUNMOzs7TUFDRTs7OztPQUFlO01BQ2Y7Ozs7T0FFSTtLQUNJO0lBRVY7OztNQUNFOzs7O09BQWM7TUFDZDs7OztPQVFZO01BR1oseUNBQUs7TUFFTDs7OztRQUUwQzs7OztTQUFpQjs7T0FDdkQ7TUFFSjs7OztPQUVJO01BRUo7O1VBQUksU0FBUyxFQUFDLFNBQVM7O09BQWE7TUFDcEMsNERBQVEsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxjQUFjLEdBQUU7TUFDdkQsNERBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsY0FBYyxHQUFFO01BQzdDLDREQUFRLElBQUksRUFBQyxVQUFVLEVBQUMsUUFBUSxRQUFDLE1BQU0sRUFBQyxjQUFjLEdBQUU7TUFDeEQsNERBQVEsSUFBSSxFQUFDLE9BQU8sR0FBRTtNQUV0Qjs7VUFBSSxTQUFTLEVBQUMsTUFBTTs7T0FBVTtNQUM5Qjs7OztPQU1ZO0tBQ0o7SUFHVjs7O01BQ0U7Ozs7T0FBd0I7TUFDeEI7Ozs7T0FFSTtNQUVKOzs7UUFDRTs7O1VBQ0U7OztZQUNFOzs7O2FBQWE7WUFDYjs7OzthQUFvQjtXQUNqQjtTQUNDO1FBQ1I7OztVQUNFOzs7WUFDRTs7O2NBQ0U7Ozs7ZUFBOEI7YUFDM0I7WUFDTDs7OzthQUVLO1dBQ0Y7VUFDTDs7O1lBQ0U7OztjQUNFOzs7O2VBQThCO2FBQzNCO1lBQ0w7Ozs7YUFFSztXQUNGO1VBQ0w7OztZQUNFOzs7Y0FDRTs7OztlQUE2QjthQUMxQjtZQUNMOzs7O2FBRUs7V0FDRjtVQUNMOzs7WUFDRTs7O2NBQ0U7Ozs7ZUFBMkI7YUFDeEI7WUFD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Q0w7Ozs7YUFBYTtXQUNWO1VBQ0w7OztZQUNFOzs7Y0FDRTs7OztlQUFpQjthQUNkO1lBQ0w7Ozs7Y0FBVSx5Q0FBTTs7YUFBeUI7V0FDdEM7VUFDTDs7O1lBQ0U7OztjQUNFOzs7O2VBQWlCO2FBQ2Q7WUFDTDs7OztjQUFVLHlDQUFNOzthQUEwQjtXQUN2QztTQUNDO09BQ0Y7S0FDQTtHQUNOLENBQUM7Q0FDUixDQUFDOztrQkFHYSxTQUFTIiwiZmlsZSI6IjI3MDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1idXR0b24nO1xuaW1wb3J0IENvZGVibG9jayBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWNvZGVibG9jayc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZSc7XG5cblxuY29uc3QgQnV0dG9uRG9jID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiA8ZGl2PlxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPkJ1dHRvbjwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgRWFzaWx5IGNyZWF0ZSBuaWNlbHkgbG9va2luZyBidXR0b25zLCB3aGljaCBjb21lIGluIGRpZmZlcmVudCBzdHlsZXMuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+VXNhZ2U8L2gyPlxuICAgICAgPENvZGVibG9jaz5cbntgPGNvZGU+bnBtIGluc3RhbGwgcmVhY3QtdWlraXQtYnV0dG9uIC0tc2F2ZTtcblxuLy8gRVM2XG48Y29kZT5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LXVpa2l0LWJ1dHRvbic7XG5cbi8vIEVTNVxudmFyIEJ1dHRvbiA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWJ1dHRvbicpO2B9XG4gICAgICA8L0NvZGVibG9jaz5cblxuXG4gICAgICA8aHIvPlxuXG4gICAgICA8cD5cbiAgICAgICAgVGhlIEJ1dHRvbiBjb21wb25lbnQgY3JlYXRlcyBlaXRoZXIgYSBidXR0b24sXG4gICAgICAgIGEgbGluayBvciBhIGNsb3NlIGJ1dHRvbiBieSBzZXR0aW5nIHRoZSA8Y29kZT50eXBlPC9jb2RlPi5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIEJ5IGRlZnVhbHQgdGhlIEJ1dHRvbiBjb21wb25lbnQgd2lsbCBjcmVhdGUgYSBidXR0b24gaWYgbm8gdHlwZSBpcyBwcm92aWRlZC5cbiAgICAgIDwvcD5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgICA8QnV0dG9uIGJvZHk9J0xpbmsnIHR5cGU9J2xpbmsnIG1hcmdpbj0nYm90dG9tIHJpZ2h0Jy8+XG4gICAgICA8QnV0dG9uIGJvZHk9J0J1dHRvbicgbWFyZ2luPSdib3R0b20gcmlnaHQnLz5cbiAgICAgIDxCdXR0b24gYm9keT0nRGlzYWJsZWQnIGRpc2FibGVkIG1hcmdpbj0nYm90dG9tIHJpZ2h0Jy8+XG4gICAgICA8QnV0dG9uIHR5cGU9J2Nsb3NlJy8+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2gzPlxuICAgICAgPENvZGVibG9jaz5cbntgPEJ1dHRvbiBib2R5PSdMaW5rJyB0eXBlPSdsaW5rJyBtYXJnaW49J2JvdHRvbSByaWdodCcvPlxuPEJ1dHRvbiBib2R5PSdCdXR0b24nIG1hcmdpbj0nYm90dG9tIHJpZ2h0Jy8+XG48QnV0dG9uIGJvZHk9J0Rpc2FibGVkJyBkaXNhYmxlZCBtYXJnaW49J2JvdHRvbSByaWdodCcvPlxuPEJ1dHRvbiB0eXBlPSdjbG9zZScvPlxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+QnV0dG9uIGNvbnRleHRzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgY29sb3Igb2YgdGhlIGJ1dHRvbiBjYW4gYmUgZWFzaWx5IGNoYW5nZWQgYnkgYWRkaW5nIGEgY29udGV4dCB0byB0aGUgY29udGV4dCBwcm9wXG4gICAgICA8L3A+XG5cbiAgICAgIDxUYWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Qcm9wPC90aD5cbiAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+Y29udGV4dD0ncHJpbWFyeSc8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICBFbXBoYXNpemVzIHRvIGlkZW50aWZ5IHRoZSBwcmltYXJ5IGFjdGlvbiBpbiBhIHNldCBvZiBidXR0b25zLlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+Y29udGV4dD0nc3VjY2Vzcyc8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICBJbmRpY2F0ZXMgYSBzdWNjZXNzZnVsIG9yIHBvc2l0aXZlIGFjdGlvbi5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPmNvbnRleHQ9J2Rhbmdlcic8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIEluZGljYXRlcyBhIGRhbmdlcm91cyBvciBuZWdhdGl2ZSBhY3Rpb24uXG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5jb250ZXh0PSdsaW5rJzwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIERlLWVtcGhhc2l6ZXMgdG8gbG9vayBsaWtlIGEgbGluayB3aGlsZSBtYWludGFpbmluZyBidXR0b24gYmVoYXZpb3IuXG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICAgIDxCdXR0b24gY29udGV4dD0ncHJpbWFyeScgYm9keT0nUHJpbWFyeScgbWFyZ2luPSdib3R0b20gcmlnaHQnLz5cbiAgICAgIDxCdXR0b24gY29udGV4dD0nc3VjY2VzcycgYm9keT0nU3VjY2VzcycgbWFyZ2luPSdib3R0b20gcmlnaHQnLz5cbiAgICAgIDxCdXR0b24gY29udGV4dD0nZGFuZ2VyJyBib2R5PSdEYW5nZXInIG1hcmdpbj0nYm90dG9tIHJpZ2h0Jy8+XG4gICAgICA8QnV0dG9uIGNvbnRleHQ9J2xpbmsnIGJvZHk9J0xpbmsnIHR5cGU9J2xpbmsnLz5cblxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oMz5cbiAgICAgIDxDb2RlYmxvY2s+XG57YDxCdXR0b24gY29udGV4dD0ncHJpbWFyeScgYm9keT0nUHJpbWFyeScgbWFyZ2luPSdib3R0b20gcmlnaHQnLz5cbjxCdXR0b24gY29udGV4dD0nc3VjY2VzcycgYm9keT0nU3VjY2VzcycgbWFyZ2luPSdib3R0b20gcmlnaHQnLz5cbjxCdXR0b24gY29udGV4dD0nZGFuZ2VyJyBib2R5PSdEYW5nZXInIG1hcmdpbj0nYm90dG9tIHJpZ2h0Jy8+XG48QnV0dG9uIGNvbnRleHQ9J2xpbmsnIGJvZHk9J0xpbmsnIHR5cGU9J2xpbmsnLz5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5CdXR0b24gc2l6ZXM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFRvIGNoYW5nZSB0aGUgc2l6ZSBvZiBhIEJ1dHRvbiBzZXQgdGhlIDxjb2RlPnNpemU8L2NvZGU+IHByb3BcbiAgICAgICAgdG8gbWluaSwgc21hbGwsIG9yIGxhcmdlLlxuICAgICAgPC9wPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICAgIDxCdXR0b24gc2l6ZT0nbWluaScgYm9keT0nTWluaSBidXR0b24nIG1hcmdpbj0ncmlnaHQgYm90dG9tJy8+XG4gICAgICA8QnV0dG9uIHNpemU9J21pbmknIGJvZHk9J01pbmkgYnV0dG9uJyBjb250ZXh0PSdwcmltYXJ5JyBtYXJnaW49J2JvdHRvbScvPjxiciAvPlxuXG4gICAgICA8QnV0dG9uIHNpemU9J3NtYWxsJyBib2R5PSdTbWFsbCBidXR0b24nIG1hcmdpbj0ncmlnaHQgYm90dG9tJy8+XG4gICAgICA8QnV0dG9uIHNpemU9J3NtYWxsJyBib2R5PSdTbWFsbCBidXR0b24nIGNvbnRleHQ9J3ByaW1hcnknIG1hcmdpbj0nYm90dG9tJy8+PGJyIC8+XG5cbiAgICAgIDxCdXR0b24gYm9keT0nRGVmYXVsdCBidXR0b24nIG1hcmdpbj0ncmlnaHQgYm90dG9tJy8+XG4gICAgICA8QnV0dG9uIGJvZHk9J0RlZmF1bHQgYnV0dG9uJyBjb250ZXh0PSdwcmltYXJ5JyBtYXJnaW49J2JvdHRvbScvPjxiciAvPlxuXG4gICAgICA8QnV0dG9uIHNpemU9J2xhcmdlJyBib2R5PSdMYXJnZSBidXR0b24nIG1hcmdpbj0nYm90dG9tJy8+XG4gICAgICA8QnV0dG9uIHNpemU9J2xhcmdlJyBib2R5PSdMYXJnZSBidXR0b24nIGNvbnRleHQ9J3ByaW1hcnknIG1hcmdpbj0nYm90dG9tJy8+PGJyIC8+XG5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDM+XG4gICAgICA8Q29kZWJsb2NrPlxue2A8QnV0dG9uIHNpemU9J21pbmknIGJvZHk9J01pbmkgYnV0dG9uJyBtYXJnaW49J3JpZ2h0IGJvdHRvbScvPlxuPEJ1dHRvbiBzaXplPSdtaW5pJyBib2R5PSdNaW5pIGJ1dHRvbicgY29udGV4dD0ncHJpbWFyeScgbWFyZ2luPSdib3R0b20nLz48YnIgLz5cblxuPEJ1dHRvbiBzaXplPSdzbWFsbCcgYm9keT0nU21hbGwgYnV0dG9uJyBtYXJnaW49J3JpZ2h0IGJvdHRvbScvPlxuPEJ1dHRvbiBzaXplPSdzbWFsbCcgYm9keT0nU21hbGwgYnV0dG9uJyBjb250ZXh0PSdwcmltYXJ5JyBtYXJnaW49J2JvdHRvbScvPjxiciAvPlxuXG48QnV0dG9uIGJvZHk9J0RlZmF1bHQgYnV0dG9uJyBtYXJnaW49J3JpZ2h0IGJvdHRvbScvPlxuPEJ1dHRvbiBib2R5PSdEZWZhdWx0IGJ1dHRvbicgY29udGV4dD0ncHJpbWFyeScgbWFyZ2luPSdib3R0b20nLz48YnIgLz5cblxuPEJ1dHRvbiBzaXplPSdsYXJnZScgYm9keT0nTGFyZ2UgYnV0dG9uJyBtYXJnaW49J2JvdHRvbScvPlxuPEJ1dHRvbiBzaXplPSdsYXJnZScgYm9keT0nTGFyZ2UgYnV0dG9uJyBjb250ZXh0PSdwcmltYXJ5JyBtYXJnaW49J2JvdHRvbScvPjxiciAvPlxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+QnV0dG9uIGJsb2NrczwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgVG8gY3JlYXRlIGEgZnVsbCB3aWR0aCBidXR0b24gYWRkIHRoZSA8Y29kZT5ibG9jazwvY29kZT4gcHJvcFxuICAgICAgICB0byB0aGUgYnV0dHRvbiBjb21wb25lbnQuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgICAgPEJ1dHRvbiBibG9jayBib2R5PSdCdXR0b24nIG1hcmdpbj0nc21hbGxCb3R0b20nIC8+XG4gICAgICA8QnV0dG9uIGJsb2NrIGJvZHk9J0J1dHRvbicgY29udGV4dD0ncHJpbWFyeScvPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oMz5cbiAgICAgIDxDb2RlYmxvY2s+XG57YFxuPEJ1dHRvbiBibG9jayBib2R5PSdCdXR0b24nIG1hcmdpbj0nc21hbGxCb3R0b20nIC8+XG48QnV0dG9uIGJsb2NrIGJvZHk9J0J1dHRvbicgY29udGV4dD0ncHJpbWFyeScvPlxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+QnV0dG9uIGRyb3Bkb3duPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBCdXR0b25zIGNhbiBhbHNvIGJlIHVzZWQgdG8gdHJpZ2dlciBhIGRyb3Bkb3duLlxuICAgICAgICBTZWUgYnV0dG9uIGRyb3Bkb3duIGluIERyb3Bkb3duIGNvbXBvbmVudCBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgPC9wPlxuXG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5CdXR0b24gUHJvcHM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFNlZSBCYXNlIGZvciBhZGRpdGlvbmFsIHV0aWxpdHkgcHJvcHMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxUYWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Qcm9wPC90aD5cbiAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5ib2R5PC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5zdHJpbmc8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5ibG9jazwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+Ym9vbDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPmNvbnRleHQ8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPm9uZU9mIDxiciAvPiBwcmltYXJ5LCBzdWNjZXNzLCBkYW5nZXIgb3IgbGluazwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPmRpc2FibGVkPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5ib29sPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+c2l6ZTwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+b25lT2YgPGJyIC8+IG1pbmkgc21hbGwgb3IgbGFyZ2U8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT50eXBlPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5vbmVPZiA8YnIgLz4gYnV0dG9uIGNsb3NlIG9yIGxpbms8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvc2VjdGlvbj5cbiAgPC9kaXY+O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Eb2M7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1dHRvbi1kb2MuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})