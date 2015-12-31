webpackHotUpdate(0,{

/***/ 2607:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitCodeblock = __webpack_require__(217);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitNote = __webpack_require__(834);\n\nvar _reactUikitNote2 = _interopRequireDefault(_reactUikitNote);\n\nvar _reactUikitTable = __webpack_require__(268);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CodeblockDoc = function CodeblockDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.2/css/uikit.almost-flat.min.css' }),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Codeblock'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Displays code inside of a block.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'javascript' },\n        '<code>npm install react-uikit-codeblock --save;\\n\\n// ES6\\nimport Codeblock from \\'react-uikit-codeblock\\';\\n\\n// ES5\\nvar Codeblock = require(\\'react-uikit-codeblock\\')'\n      ),\n      _react2.default.createElement('hr', { className: 'uk-article-divider' }),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To use Codeblock component place backticks inside of braces and place the code inside of the backticks.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'For inline code use the html element ',\n        _react2.default.createElement(\n          'code',\n          null,\n          '<code>'\n        ),\n        '.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        null,\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<Codeblock>\\n{`<div>...<div>`};\\n</Codeblock>'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'scroll'\n        ),\n        ' prop can be added to create a scrollable Codeblock.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'syntax'\n        ),\n        ' prop can be used in conjunction with ',\n        _react2.default.createElement(\n          'a',\n          { href: 'https://highlightjs.org/' },\n          'highlight.js'\n        ),\n        ' for syntax highlighting by specifying a language.'\n      ),\n      _react2.default.createElement(\n        _reactUikitNote2.default,\n        { badge: 'Note:' },\n        'highlight.js is not included'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Codeblock Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          '<Codeblock>'\n        ),\n        ' props and their types.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See ',\n        _react2.default.createElement(\n          'a',\n          { href: 'https://github.com/otissv/react-uikit-base' },\n          'base'\n        ),\n        ' for additional props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              null,\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'syntax'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'string'\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Tests'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test'\n        ),\n        ' to run tests with minimal output.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test:spec'\n        ),\n        ' to run tests with detailed output.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test:watch'\n        ),\n        'watches all directories and run tests with minimal output on file changes.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Build'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run build'\n        ),\n        ' to build files fro distribution.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run build:watch'\n        ),\n        ' watches src directory and builds files on changes.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Lint'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run lint'\n        ),\n        ' lints scripts in src directory.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run lint:watch'\n        ),\n        ' watches src directory and lints scripts in src directory.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'License'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'MIT'\n      )\n    )\n  );\n};\n\nexports.default = CodeblockDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlYmxvY2stZG9jLmpzeD8wZDJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWIsSUFBTSxZQUFZLEdBQUcsU0FBZixZQUFZLENBQUksS0FBSztTQUN6Qjs7O0lBQ0Usd0NBQU0sR0FBRyxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsbUZBQW1GLEdBQUc7SUFDbEg7OztNQUNFOzs7O09BQWtCO01BQ2xCOzs7O09BRUk7S0FDTTtJQUVWOzs7TUFDRTs7OztPQUFjO01BQ2Q7O1VBQVcsTUFBTSxFQUFDLFlBQVk7O09BUWxCO01BRVosc0NBQUksU0FBUyxFQUFDLG9CQUFvQixHQUFHO01BQ3ZDOzs7O09BR0k7TUFFSjs7OztRQUN1Qzs7OztTQUF5Qjs7T0FDNUQ7TUFFSjs7OztPQUFnQjtNQUVoQjs7OztPQUlZO01BRVo7Ozs7UUFDTTs7OztTQUFtQjs7T0FDckI7TUFFSjs7OztRQUNNOzs7O1NBQW1COztRQUNsQjs7WUFBRyxJQUFJLEVBQUMsMEJBQTBCOztTQUFpQjs7T0FFdEQ7TUFFSjs7VUFBTSxLQUFLLEVBQUMsT0FBTzs7T0FBb0M7S0FDL0M7SUFHVjs7O01BQ0U7Ozs7T0FBd0I7TUFDeEI7OztRQUNFOzs7O1NBQThCOztPQUM1QjtNQUVKOzs7O1FBQ007O1lBQUcsSUFBSSxFQUFDLDRDQUE0Qzs7U0FBUzs7T0FDL0Q7TUFFSjs7O1FBQ0U7OztVQUNFOzs7WUFDRTs7OzthQUFhO1lBQ2I7Ozs7YUFBYTtXQUNWO1NBQ0M7UUFDUjs7O1VBQ0U7OztZQUNFOzs7Y0FDRTs7OztlQUFtQjthQUNoQjtZQUNMOzs7O2FBQWU7V0FDWjtTQUNDO09BQ0Y7S0FDQTtJQUdWOzs7TUFDSTs7OztPQUFjO01BQ2Q7OztRQUNFOzs7O1NBQXlCOztRQUFrQyx5Q0FBTTtRQUNqRTs7OztTQUE4Qjs7UUFBbUMseUNBQU07UUFDdkU7Ozs7U0FBK0I7O1FBQTBFLHlDQUFNO09BQzdHO0tBQ0k7SUFFVjs7O01BQ0U7Ozs7T0FBYztNQUNkOzs7UUFDRTs7OztTQUEwQjs7UUFBaUMseUNBQU07UUFDakU7Ozs7U0FBZ0M7O1FBQW1ELHlDQUFNO09BQ3ZGO0tBQ0k7SUFHVjs7O01BQ0U7Ozs7T0FBYTtNQUNiOzs7UUFDRTs7OztTQUF5Qjs7UUFBZ0MseUNBQU07UUFDL0Q7Ozs7U0FBK0I7O1FBQTBELHlDQUFNO09BQzdGO0tBQ0k7SUFFVjs7O01BQ0U7Ozs7T0FBZ0I7TUFDZDs7OztPQUFVO0tBQ0o7R0FFUjtDQUNQLENBQUM7O2tCQUdhLFlBQVkiLCJmaWxlIjoiMjYwNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb2RlYmxvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1jb2RlYmxvY2svJztcbmltcG9ydCBOb3RlIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtbm90ZS8nO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtdGFibGUvJztcblxuXG5jb25zdCBDb2RlYmxvY2tEb2MgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj0naHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvdWlraXQvMi4yNC4yL2Nzcy91aWtpdC5hbG1vc3QtZmxhdC5taW4uY3NzJyAvPlxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPkNvZGVibG9jazwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgRGlzcGxheXMgY29kZSBpbnNpZGUgb2YgYSBibG9jay5cbiAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMj5Vc2FnZTwvaDI+XG4gICAgICAgIDxDb2RlYmxvY2sgc3ludGF4PSdqYXZhc2NyaXB0Jz5cbntgPGNvZGU+bnBtIGluc3RhbGwgcmVhY3QtdWlraXQtY29kZWJsb2NrIC0tc2F2ZTtcblxuLy8gRVM2XG5pbXBvcnQgQ29kZWJsb2NrIGZyb20gJ3JlYWN0LXVpa2l0LWNvZGVibG9jayc7XG5cbi8vIEVTNVxudmFyIENvZGVibG9jayA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWNvZGVibG9jaycpYH1cbiAgICAgICAgPC9Db2RlYmxvY2s+XG5cbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cInVrLWFydGljbGUtZGl2aWRlclwiIC8+XG4gICAgICA8cD5cbiAgICAgICAgVG8gdXNlIENvZGVibG9jayBjb21wb25lbnQgcGxhY2UgYmFja3RpY2tzIGluc2lkZSBvZiBicmFjZXMgYW5kXG4gICAgICAgIHBsYWNlIHRoZSBjb2RlIGluc2lkZSBvZiB0aGUgYmFja3RpY2tzLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgRm9yIGlubGluZSBjb2RlIHVzZSB0aGUgaHRtbCBlbGVtZW50IDxjb2RlPiZsdDtjb2RlJmd0OzwvY29kZT4uXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMz5FeGFtcGxlPC9oMz5cblxuICAgICAgPENvZGVibG9jaz5cbntgPENvZGVibG9jaz5cbntcXGA8ZGl2Pi4uLjxkaXY+XFxgfTtcbjwvQ29kZWJsb2NrPmB9XG4gICAgICA8L0NvZGVibG9jaz5cblxuICAgICAgPHA+XG4gICAgICAgIFRoZSA8Y29kZT5zY3JvbGw8L2NvZGU+IHByb3AgY2FuIGJlIGFkZGVkIHRvIGNyZWF0ZSBhIHNjcm9sbGFibGUgQ29kZWJsb2NrLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgVGhlIDxjb2RlPnN5bnRheDwvY29kZT4gcHJvcCBjYW4gYmUgdXNlZCBpbiBjb25qdW5jdGlvblxuICAgICAgICB3aXRoIDxhIGhyZWY9J2h0dHBzOi8vaGlnaGxpZ2h0anMub3JnLyc+aGlnaGxpZ2h0LmpzPC9hPiBmb3Igc3ludGF4XG4gICAgICAgIGhpZ2hsaWdodGluZyBieSBzcGVjaWZ5aW5nIGEgbGFuZ3VhZ2UuXG4gICAgICA8L3A+XG5cbiAgICAgIDxOb3RlIGJhZGdlPSdOb3RlOic+aGlnaGxpZ2h0LmpzIGlzIG5vdCBpbmNsdWRlZDwvTm90ZT5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkNvZGVibG9jayBQcm9wczwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgPGNvZGU+Jmx0O0NvZGVibG9jayZndDs8L2NvZGU+IHByb3BzIGFuZCB0aGVpciB0eXBlcy5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIFNlZSA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vb3Rpc3N2L3JlYWN0LXVpa2l0LWJhc2UnPmJhc2U8L2E+IGZvciBhZGRpdGlvbmFsIHByb3BzLlxuICAgICAgPC9wPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UHJvcDwvdGg+XG4gICAgICAgICAgICA8dGg+VHlwZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+c3ludGF4PC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5zdHJpbmc8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMj5UZXN0czwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxjb2RlPm5wbSBydW4gdGVzdDwvY29kZT4gdG8gcnVuIHRlc3RzIHdpdGggbWluaW1hbCBvdXRwdXQuPGJyIC8+XG4gICAgICAgICAgPGNvZGU+bnBtIHJ1biB0ZXN0OnNwZWM8L2NvZGU+IHRvIHJ1biB0ZXN0cyB3aXRoIGRldGFpbGVkIG91dHB1dC48YnIgLz5cbiAgICAgICAgICA8Y29kZT5ucG0gcnVuIHRlc3Q6d2F0Y2g8L2NvZGU+d2F0Y2hlcyBhbGwgZGlyZWN0b3JpZXMgYW5kIHJ1biB0ZXN0cyB3aXRoIG1pbmltYWwgb3V0cHV0IG9uIGZpbGUgY2hhbmdlcy48YnIgLz5cbiAgICAgICAgPC9wPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgyPkJ1aWxkPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGNvZGU+bnBtIHJ1biBidWlsZDwvY29kZT4gdG8gYnVpbGQgZmlsZXMgZnJvIGRpc3RyaWJ1dGlvbi48YnIgLz5cbiAgICAgICAgICA8Y29kZT5ucG0gcnVuIGJ1aWxkOndhdGNoPC9jb2RlPiB3YXRjaGVzIHNyYyBkaXJlY3RvcnkgYW5kIGJ1aWxkcyBmaWxlcyBvbiBjaGFuZ2VzLjxiciAvPlxuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMj5MaW50PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGNvZGU+bnBtIHJ1biBsaW50PC9jb2RlPiBsaW50cyBzY3JpcHRzIGluIHNyYyBkaXJlY3RvcnkuPGJyIC8+XG4gICAgICAgICAgPGNvZGU+bnBtIHJ1biBsaW50OndhdGNoPC9jb2RlPiB3YXRjaGVzIHNyYyBkaXJlY3RvcnkgYW5kIGxpbnRzIHNjcmlwdHMgaW4gc3JjIGRpcmVjdG9yeS48YnIgLz5cbiAgICAgICAgPC9wPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgyPkxpY2Vuc2U8L2gyPlxuICAgICAgICAgIDxwPk1JVDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cblxuICA8L2Rpdj5cbik7XG5cblxuZXhwb3J0IGRlZmF1bHQgQ29kZWJsb2NrRG9jO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb2RlYmxvY2stZG9jLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})