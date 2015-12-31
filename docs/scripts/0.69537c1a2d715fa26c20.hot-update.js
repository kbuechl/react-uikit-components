webpackHotUpdate(0,{

/***/ 2085:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitCodeblock = __webpack_require__(621);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitNote = __webpack_require__(1908);\n\nvar _reactUikitNote2 = _interopRequireDefault(_reactUikitNote);\n\nvar _reactUikitTable = __webpack_require__(623);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nvar _reactUikitBlock = __webpack_require__(2245);\n\nvar _reactUikitBlock2 = _interopRequireDefault(_reactUikitBlock);\n\nvar _reactUikitGrid = __webpack_require__(2566);\n\nvar _reactUikitGrid2 = _interopRequireDefault(_reactUikitGrid);\n\nvar _reactUikitPanel = __webpack_require__(2567);\n\nvar _reactUikitPanel2 = _interopRequireDefault(_reactUikitPanel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar BlockDoc = function BlockDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Block'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Separate content sections by bundling them in blocks.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-base --save;\\n\\n// ES6\\nimport Block from \\'react-uikit-block\\';\\n\\n// ES5\\nvar Block = require(\\'react-uikit-block\\');'\n      ),\n      _react2.default.createElement('hr', { className: 'uk-article-divider' }),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitBlock2.default,\n        { context: 'muted' },\n        _react2.default.createElement(\n          'h4',\n          null,\n          'Block'\n        ),\n        _react2.default.createElement(\n          _reactUikitGrid2.default,\n          { widths: '1-3' },\n          _react2.default.createElement(\n            _reactUikitPanel2.default,\n            null,\n            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'\n          ),\n          _react2.default.createElement(\n            _reactUikitPanel2.default,\n            null,\n            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'\n          ),\n          _react2.default.createElement(\n            _reactUikitPanel2.default,\n            null,\n            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { scroll: 'text' },\n        '<Block context=\\'muted\\'>\\n<h4>Block</h4>\\n<Grid widths=\\'1-3\\'>\\n  <Panel>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n  <Panel >\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n  <Panel >\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n</Grid>\\n</Block>'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Block container'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To add the body in a container use the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'container'\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitBlock2.default,\n        { context: 'muted', container: true },\n        _react2.default.createElement(\n          'h4',\n          null,\n          'Block'\n        ),\n        _react2.default.createElement(\n          _reactUikitGrid2.default,\n          { widths: '1-3' },\n          _react2.default.createElement(\n            _reactUikitPanel2.default,\n            null,\n            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'\n          ),\n          _react2.default.createElement(\n            _reactUikitPanel2.default,\n            null,\n            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'\n          ),\n          _react2.default.createElement(\n            _reactUikitPanel2.default,\n            null,\n            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { scroll: 'text' },\n        '<Block context=\\'muted\\' container >\\n<h4>Block</h4>\\n<Grid widths=\\'1-3\\'>\\n  <Panel>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n  <Panel>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n  <Panel >\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n</Grid>\\n</Block>'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Block Context'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To apply different background colors, add one of the following values for the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context'\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              null,\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Description'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'default'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Add the default background color, usually white or similar.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'muted'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Adds a light background color.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'primary'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Adds a primary background color.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'secondary'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Adds a another background color, usually a dark one.'\n            )\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitBlock2.default,\n        { context: 'primary', container: true, contrast: true },\n        _react2.default.createElement(\n          'h4',\n          null,\n          'Block'\n        ),\n        _react2.default.createElement(\n          _reactUikitGrid2.default,\n          { widths: '1-3' },\n          _react2.default.createElement(\n            _reactUikitPanel2.default,\n            null,\n            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'\n          ),\n          _react2.default.createElement(\n            _reactUikitPanel2.default,\n            null,\n            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'\n          ),\n          _react2.default.createElement(\n            _reactUikitPanel2.default,\n            null,\n            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { scroll: 'text' },\n        '<Block context=\\'primary\\' container contrast >\\n<h4>Block</h4>\\n<Grid widths=\\'1-3\\'>\\n  <Panel>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n  <Panel >\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n  <Panel >\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n</Grid>\\n</Block>'\n      ),\n      _react2.default.createElement(\n        _reactUikitNote2.default,\n        { badge: 'NOTE' },\n        'To properly display colors, borders and other elements on colored blocks, you might want to apply the contrast prop to the Block componet.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Block large'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To add the body in a container use the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'container'\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitBlock2.default,\n        { context: 'secondary', container: true, contrast: true, large: true },\n        _react2.default.createElement(\n          'h4',\n          null,\n          'Block'\n        ),\n        _react2.default.createElement(\n          _reactUikitGrid2.default,\n          { widths: '1-3' },\n          _react2.default.createElement(\n            _reactUikitPanel2.default,\n            null,\n            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'\n          ),\n          _react2.default.createElement(\n            _reactUikitPanel2.default,\n            null,\n            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'\n          ),\n          _react2.default.createElement(\n            _reactUikitPanel2.default,\n            null,\n            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        'h3',\n        null,\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { scroll: 'text' },\n        '<Block context=\\'secondary\\' container contrast large >\\n<h4>Block</h4>\\n<Grid widths=\\'1-3\\'>\\n  <Panel>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n\\n  <Panel >\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n  <Panel >\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n</Grid>\\n</Block>'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Block Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          '<Block>'\n        ),\n        ' props and their types.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See Base for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              null,\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'enums'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'container'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { colSpan: '2' },\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              'default, muted, primary, secondary'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'contrast'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'bool'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'large'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'bool'\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Tests'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test'\n        ),\n        ' to run tests with minimal output.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test:spec'\n        ),\n        ' to run tests with detailed output.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test:watch'\n        ),\n        'watches all directories and run tests with minimal output on file changes.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Build'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run build'\n        ),\n        ' to build files fro distribution.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run build:watch'\n        ),\n        ' watches src directory and builds files on changes.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Lint'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run lint'\n        ),\n        ' lints scripts in src directory.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run lint:watch'\n        ),\n        ' watches src directory and lints scripts in src directory.',\n        _react2.default.createElement('br', null)\n      )\n    )\n  );\n};\n\nexports.default = BlockDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ibG9jay1kb2MuanN4P2UxZGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXYixJQUFNLFFBQVEsR0FBRyxTQUFYLFFBQVEsQ0FBSSxLQUFLO1NBQ3JCOzs7SUFDRTs7O01BQ0U7Ozs7T0FBYztNQUNkOzs7O09BRUk7S0FDSTtJQUVWOzs7TUFDRTs7OztPQUFjO01BQ2Q7Ozs7T0FRWTtNQUVaLHNDQUFJLFNBQVMsRUFBQyxvQkFBb0IsR0FBRztNQUVyQzs7VUFBSSxTQUFTLEVBQUMsU0FBUzs7T0FBYTtNQUNwQzs7VUFBTyxPQUFPLEVBQUMsT0FBTztRQUNwQjs7OztTQUFjO1FBQ2Q7O1lBQU0sTUFBTSxFQUFDLEtBQUs7VUFDaEI7Ozs7V0FHUTtVQUNSOzs7O1dBR1E7VUFDUjs7OztXQUdRO1NBQ0g7T0FDRDtNQUVSOztVQUFJLFNBQVMsRUFBQyxNQUFNOztPQUFVO01BQzlCOztVQUFXLE1BQU0sRUFBQyxNQUFNOztPQWtCWjtLQUNKO0lBRVY7OztNQUNFOzs7O09BQXdCO01BQ3hCOzs7O1FBQ3lDOzs7O1NBQXNCOztPQUMzRDtNQUVKOztVQUFJLFNBQVMsRUFBQyxTQUFTOztPQUFhO01BRWxDOztVQUFPLE9BQU8sRUFBQyxPQUFPLEVBQUMsU0FBUztRQUNoQzs7OztTQUFjO1FBQ2Q7O1lBQU0sTUFBTSxFQUFDLEtBQUs7VUFDaEI7Ozs7V0FHUTtVQUNSOzs7O1dBR1E7VUFDUjs7OztXQUdRO1NBQ0g7T0FDQztNQUdWOztVQUFJLFNBQVMsRUFBQyxNQUFNOztPQUFVO01BQzlCOztVQUFXLE1BQU0sRUFBQyxNQUFNOztPQWtCWjtLQUNKO0lBR1Y7OztNQUNFOzs7O09BQXNCO01BQ3RCOzs7O1FBRVU7Ozs7U0FBb0I7O09BQzFCO01BRUo7OztRQUNFOzs7VUFDRTs7O1lBQ0U7Ozs7YUFBYTtZQUNiOzs7O2FBQW9CO1dBQ2pCO1NBQ0M7UUFDUjs7O1VBQ0U7OztZQUNFOzs7Y0FBSTs7OztlQUFvQjthQUFLO1lBQzdCOzs7O2FBQW9FO1dBQ2pFO1VBQ0w7OztZQUNFOzs7Y0FBSTs7OztlQUFrQjthQUFLO1lBQzNCOzs7O2FBQXVDO1dBQ3BDO1VBQ0w7OztZQUNFOzs7Y0FBSTs7OztlQUFvQjthQUFLO1lBQzdCOzs7O2FBQXlDO1dBQ3RDO1VBQ0w7OztZQUNFOzs7Y0FBSTs7OztlQUFzQjthQUFLO1lBQy9COzs7O2FBQTZEO1dBQzFEO1NBQ0M7T0FDRjtNQUVSOztVQUFJLFNBQVMsRUFBQyxTQUFTOztPQUFhO01BQ2xDOztVQUFPLE9BQU8sRUFBQyxTQUFTLEVBQUMsU0FBUyxRQUFDLFFBQVE7UUFDM0M7Ozs7U0FBYztRQUNkOztZQUFNLE1BQU0sRUFBQyxLQUFLO1VBQ2hCOzs7O1dBR1E7VUFDUjs7OztXQUdRO1VBQ1I7Ozs7V0FHUTtTQUNIO09BQ0M7TUFFVjs7VUFBSSxTQUFTLEVBQUMsTUFBTTs7T0FBVTtNQUM5Qjs7VUFBVyxNQUFNLEVBQUMsTUFBTTs7T0FrQlo7TUFFWjs7VUFBTSxLQUFLLEVBQUMsTUFBTTs7T0FFWDtLQUNDO0lBR1Y7OztNQUNFOzs7O09BQW9CO01BQ3BCOzs7O1FBQ3lDOzs7O1NBQXNCOztPQUMzRDtNQUVKOztVQUFJLFNBQVMsRUFBQyxTQUFTOztPQUFhO01BQ2xDOztVQUFPLE9BQU8sRUFBQyxXQUFXLEVBQUMsU0FBUyxRQUFDLFFBQVEsUUFBQyxLQUFLO1FBQ25EOzs7O1NBQWM7UUFDZDs7WUFBTSxNQUFNLEVBQUMsS0FBSztVQUNoQjs7OztXQUdRO1VBRVI7Ozs7V0FHUTtVQUNSOzs7O1dBR1E7U0FDSDtPQUNDO01BRVY7O1VBQUksU0FBUyxFQUFDLE1BQU07O09BQVU7TUFDOUI7Ozs7T0FBYTtNQUNiOztVQUFXLE1BQU0sRUFBQyxNQUFNOztPQW1CWjtLQUNKO0lBRVY7OztNQUNFOzs7O09BQW9CO01BQ3BCOzs7UUFDRTs7OztTQUEwQjs7T0FDeEI7TUFFSjs7OztPQUVJO01BRUo7OztRQUNFOzs7VUFDRTs7O1lBQ0U7Ozs7YUFBYTtZQUNiOzs7O2FBQWE7V0FDVjtTQUNDO1FBQ1I7OztVQUNFOzs7WUFDRTs7O2NBQ0U7Ozs7ZUFBb0I7YUFDakI7WUFDTDs7OzthQUFjO1dBQ1g7VUFDTDs7O1lBQ0U7OztjQUNFOzs7O2VBQXNCO2FBQ25CO1lBQ0w7O2dCQUFJLE9BQU8sRUFBQyxHQUFHOztjQUFPLHlDQUFNOzthQUNXO1dBQ3BDO1VBQ0w7OztZQUNFOzs7Y0FDRTs7OztlQUFxQjthQUNsQjtZQUNMOzs7O2FBQWE7V0FDVjtVQUNMOzs7WUFDRTs7O2NBQ0U7Ozs7ZUFBa0I7YUFDZjtZQUNMOzs7O2FBQWE7V0FDVjtTQUNDO09BQ0Y7S0FDQTtJQUdWOzs7TUFDRTs7OztPQUFjO01BQ2Q7OztRQUNFOzs7O1NBQXlCOztRQUFrQyx5Q0FBTTtRQUNqRTs7OztTQUE4Qjs7UUFBbUMseUNBQU07UUFDdkU7Ozs7U0FBK0I7O1FBQTBFLHlDQUFNO09BQzdHO0tBQ0k7SUFFVjs7O01BQ0U7Ozs7T0FBYztNQUNkOzs7UUFDRTs7OztTQUEwQjs7UUFBaUMseUNBQU07UUFDakU7Ozs7U0FBZ0M7O1FBQW1ELHlDQUFNO09BQ3ZGO0tBQ0k7SUFHVjs7O01BQ0U7Ozs7T0FBYTtNQUNiOzs7UUFDRTs7OztTQUF5Qjs7UUFBZ0MseUNBQU07UUFDL0Q7Ozs7U0FBK0I7O1FBQTBELHlDQUFNO09BQzdGO0tBQ0k7R0FFTjtDQUNQLENBQUM7O2tCQUdhLFFBQVEiLCJmaWxlIjoiMjA4NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb2RlYmxvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1jb2RlYmxvY2snO1xuaW1wb3J0IE5vdGUgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1ub3RlJztcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LXRhYmxlJztcbmltcG9ydCBCbG9jayBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWJsb2NrJztcbmltcG9ydCBHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtZ3JpZCc7XG5pbXBvcnQgUGFuZWwgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1wYW5lbCc7XG5cblxuY29uc3QgQmxvY2tEb2MgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMT5CbG9jazwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgU2VwYXJhdGUgY29udGVudCBzZWN0aW9ucyBieSBidW5kbGluZyB0aGVtIGluIGJsb2Nrcy5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5Vc2FnZTwvaDI+XG4gICAgICA8Q29kZWJsb2NrPlxue2BucG0gaW5zdGFsbCByZWFjdC11aWtpdC1iYXNlIC0tc2F2ZTtcblxuLy8gRVM2XG5pbXBvcnQgQmxvY2sgZnJvbSAncmVhY3QtdWlraXQtYmxvY2snO1xuXG4vLyBFUzVcbnZhciBCbG9jayA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWJsb2NrJyk7YH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuXG4gICAgICA8aHIgY2xhc3NOYW1lPVwidWstYXJ0aWNsZS1kaXZpZGVyXCIgLz5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgICA8QmxvY2sgY29udGV4dD0nbXV0ZWQnPlxuICAgICAgICA8aDQ+QmxvY2s8L2g0PlxuICAgICAgICA8R3JpZCB3aWR0aHM9JzEtMyc+XG4gICAgICAgICAgPFBhbmVsPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLlxuICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgPFBhbmVsID5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYS5cbiAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgIDxQYW5lbCA+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvXG4gICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEuXG4gICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9CbG9jaz5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDM+XG4gICAgICA8Q29kZWJsb2NrIHNjcm9sbD0ndGV4dCc+XG57YDxCbG9jayBjb250ZXh0PSdtdXRlZCc+XG48aDQ+QmxvY2s8L2g0PlxuPEdyaWQgd2lkdGhzPScxLTMnPlxuICA8UGFuZWw+XG4gICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkb1xuICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYS5cbiAgPC9QYW5lbD5cbiAgPFBhbmVsID5cbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvXG4gICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLlxuICA8L1BhbmVsPlxuICA8UGFuZWwgPlxuICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG9cbiAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEuXG4gIDwvUGFuZWw+XG48L0dyaWQ+XG48L0Jsb2NrPmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5CbG9jayBjb250YWluZXI8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFRvIGFkZCB0aGUgYm9keSBpbiBhIGNvbnRhaW5lciB1c2UgdGhlIDxjb2RlPmNvbnRhaW5lcjwvY29kZT4gcHJvcC5cbiAgICAgIDwvcD5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG5cbiAgICAgICAgPEJsb2NrIGNvbnRleHQ9J211dGVkJyBjb250YWluZXIgPlxuICAgICAgICA8aDQ+QmxvY2s8L2g0PlxuICAgICAgICA8R3JpZCB3aWR0aHM9JzEtMyc+XG4gICAgICAgICAgPFBhbmVsPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLlxuICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgPFBhbmVsPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLlxuICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgPFBhbmVsID5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYS5cbiAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQmxvY2s+XG5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDM+XG4gICAgICA8Q29kZWJsb2NrIHNjcm9sbD0ndGV4dCc+XG57YDxCbG9jayBjb250ZXh0PSdtdXRlZCcgY29udGFpbmVyID5cbjxoND5CbG9jazwvaDQ+XG48R3JpZCB3aWR0aHM9JzEtMyc+XG4gIDxQYW5lbD5cbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvXG4gICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLlxuICA8L1BhbmVsPlxuICA8UGFuZWw+XG4gICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkb1xuICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYS5cbiAgPC9QYW5lbD5cbiAgPFBhbmVsID5cbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvXG4gICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLlxuICA8L1BhbmVsPlxuPC9HcmlkPlxuPC9CbG9jaz5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5CbG9jayBDb250ZXh0PC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBUbyBhcHBseSBkaWZmZXJlbnQgYmFja2dyb3VuZCBjb2xvcnMsIGFkZCBvbmUgb2YgdGhlIGZvbGxvd2luZyB2YWx1ZXNcbiAgICAgICAgZm9yIHRoZSA8Y29kZT5jb250ZXh0PC9jb2RlPiBwcm9wLlxuICAgICAgPC9wPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UHJvcDwvdGg+XG4gICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+PGNvZGU+ZGVmYXVsdDwvY29kZT48L3RkPlxuICAgICAgICAgICAgPHRkPkFkZCB0aGUgZGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9yLCB1c3VhbGx5IHdoaXRlIG9yIHNpbWlsYXIuPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD48Y29kZT5tdXRlZDwvY29kZT48L3RkPlxuICAgICAgICAgICAgPHRkPkFkZHMgYSBsaWdodCBiYWNrZ3JvdW5kIGNvbG9yLjwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+PGNvZGU+cHJpbWFyeTwvY29kZT48L3RkPlxuICAgICAgICAgICAgPHRkPkFkZHMgYSBwcmltYXJ5IGJhY2tncm91bmQgY29sb3IuPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD48Y29kZT5zZWNvbmRhcnk8L2NvZGU+PC90ZD5cbiAgICAgICAgICAgIDx0ZD5BZGRzIGEgYW5vdGhlciBiYWNrZ3JvdW5kIGNvbG9yLCB1c3VhbGx5IGEgZGFyayBvbmUuPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9UYWJsZT5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgICAgIDxCbG9jayBjb250ZXh0PSdwcmltYXJ5JyBjb250YWluZXIgY29udHJhc3QgPlxuICAgICAgICA8aDQ+QmxvY2s8L2g0PlxuICAgICAgICA8R3JpZCB3aWR0aHM9JzEtMyc+XG4gICAgICAgICAgPFBhbmVsPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLlxuICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgPFBhbmVsID5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYS5cbiAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgIDxQYW5lbCA+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvXG4gICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEuXG4gICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oMz5cbiAgICAgIDxDb2RlYmxvY2sgc2Nyb2xsPSd0ZXh0Jz5cbntgPEJsb2NrIGNvbnRleHQ9J3ByaW1hcnknIGNvbnRhaW5lciBjb250cmFzdCA+XG48aDQ+QmxvY2s8L2g0PlxuPEdyaWQgd2lkdGhzPScxLTMnPlxuICA8UGFuZWw+XG4gICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkb1xuICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYS5cbiAgPC9QYW5lbD5cbiAgPFBhbmVsID5cbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvXG4gICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLlxuICA8L1BhbmVsPlxuICA8UGFuZWwgPlxuICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG9cbiAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEuXG4gIDwvUGFuZWw+XG48L0dyaWQ+XG48L0Jsb2NrPmB9XG4gICAgICA8L0NvZGVibG9jaz5cblxuICAgICAgPE5vdGUgYmFkZ2U9J05PVEUnPlxuICAgICAgICBUbyBwcm9wZXJseSBkaXNwbGF5IGNvbG9ycywgYm9yZGVycyBhbmQgb3RoZXIgZWxlbWVudHMgb24gY29sb3JlZCBibG9ja3MsIHlvdSBtaWdodCB3YW50IHRvIGFwcGx5IHRoZSBjb250cmFzdCBwcm9wIHRvIHRoZSBCbG9jayBjb21wb25ldC5cbiAgICAgIDwvTm90ZT5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkJsb2NrIGxhcmdlPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBUbyBhZGQgdGhlIGJvZHkgaW4gYSBjb250YWluZXIgdXNlIHRoZSA8Y29kZT5jb250YWluZXI8L2NvZGU+IHByb3AuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgICAgICA8QmxvY2sgY29udGV4dD0nc2Vjb25kYXJ5JyBjb250YWluZXIgY29udHJhc3QgbGFyZ2UgPlxuICAgICAgICA8aDQ+QmxvY2s8L2g0PlxuICAgICAgICA8R3JpZCB3aWR0aHM9JzEtMyc+XG4gICAgICAgICAgPFBhbmVsPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLlxuICAgICAgICAgIDwvUGFuZWw+XG5cbiAgICAgICAgICA8UGFuZWwgPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLlxuICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgPFBhbmVsID5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYS5cbiAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2gzPlxuICAgICAgPGgzPkNvZGU8L2gzPlxuICAgICAgPENvZGVibG9jayBzY3JvbGw9J3RleHQnPlxue2A8QmxvY2sgY29udGV4dD0nc2Vjb25kYXJ5JyBjb250YWluZXIgY29udHJhc3QgbGFyZ2UgPlxuPGg0PkJsb2NrPC9oND5cbjxHcmlkIHdpZHRocz0nMS0zJz5cbiAgPFBhbmVsPlxuICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG9cbiAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEuXG4gIDwvUGFuZWw+XG5cbiAgPFBhbmVsID5cbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvXG4gICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLlxuICA8L1BhbmVsPlxuICA8UGFuZWwgPlxuICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG9cbiAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEuXG4gIDwvUGFuZWw+XG48L0dyaWQ+XG48L0Jsb2NrPmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5CbG9jayBQcm9wczwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgPGNvZGU+Jmx0O0Jsb2NrJmd0OzwvY29kZT4gcHJvcHMgYW5kIHRoZWlyIHR5cGVzLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgU2VlIEJhc2UgZm9yIGFkZGl0aW9uYWwgdXRpbGl0eSBwcm9wcy5cbiAgICAgIDwvcD5cblxuICAgICAgPFRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlByb3A8L3RoPlxuICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPmNvbnRleHQ8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPmVudW1zPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+Y29udGFpbmVyPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjb2xTcGFuPScyJz5vbmVPZiA8YnIgLz5cbiAgICAgICAgICAgIGRlZmF1bHQsIG11dGVkLCBwcmltYXJ5LCBzZWNvbmRhcnk8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5jb250cmFzdDwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+Ym9vbDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPmxhcmdlPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5ib29sPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPlRlc3RzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICA8Y29kZT5ucG0gcnVuIHRlc3Q8L2NvZGU+IHRvIHJ1biB0ZXN0cyB3aXRoIG1pbmltYWwgb3V0cHV0LjxiciAvPlxuICAgICAgICA8Y29kZT5ucG0gcnVuIHRlc3Q6c3BlYzwvY29kZT4gdG8gcnVuIHRlc3RzIHdpdGggZGV0YWlsZWQgb3V0cHV0LjxiciAvPlxuICAgICAgICA8Y29kZT5ucG0gcnVuIHRlc3Q6d2F0Y2g8L2NvZGU+d2F0Y2hlcyBhbGwgZGlyZWN0b3JpZXMgYW5kIHJ1biB0ZXN0cyB3aXRoIG1pbmltYWwgb3V0cHV0IG9uIGZpbGUgY2hhbmdlcy48YnIgLz5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5CdWlsZDwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgPGNvZGU+bnBtIHJ1biBidWlsZDwvY29kZT4gdG8gYnVpbGQgZmlsZXMgZnJvIGRpc3RyaWJ1dGlvbi48YnIgLz5cbiAgICAgICAgPGNvZGU+bnBtIHJ1biBidWlsZDp3YXRjaDwvY29kZT4gd2F0Y2hlcyBzcmMgZGlyZWN0b3J5IGFuZCBidWlsZHMgZmlsZXMgb24gY2hhbmdlcy48YnIgLz5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkxpbnQ8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIDxjb2RlPm5wbSBydW4gbGludDwvY29kZT4gbGludHMgc2NyaXB0cyBpbiBzcmMgZGlyZWN0b3J5LjxiciAvPlxuICAgICAgICA8Y29kZT5ucG0gcnVuIGxpbnQ6d2F0Y2g8L2NvZGU+IHdhdGNoZXMgc3JjIGRpcmVjdG9yeSBhbmQgbGludHMgc2NyaXB0cyBpbiBzcmMgZGlyZWN0b3J5LjxiciAvPlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuICA8L2Rpdj5cbik7XG5cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tEb2M7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Jsb2NrLWRvYy5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})