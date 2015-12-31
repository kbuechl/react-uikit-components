webpackHotUpdate(0,{

/***/ 2085:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitCodeblock = __webpack_require__(621);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitNote = __webpack_require__(1908);\n\nvar _reactUikitNote2 = _interopRequireDefault(_reactUikitNote);\n\nvar _reactUikitTable = __webpack_require__(623);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar BlockDoc = function BlockDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Block'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Separate content sections by bundling them in blocks with different styles.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm install react-uikit-base --save;'\n        )\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'ES6 ',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'import Block from \\'react-uikit-block\\';'\n        ),\n        _react2.default.createElement('br', null)\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'ES5 ',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'var Block = require(\\'react-uikit-block\\');'\n        )\n      ),\n      _react2.default.createElement(\n        _reactUikitNote2.default,\n        { badge: { context: 'danger', body: 'Note:' } },\n        'UIkit css is not included. You can get it from ',\n        _react2.default.createElement(\n          'a',\n          { href: 'http://getuikit.com/' },\n          'getuikit.com'\n        ),\n        '. This has been tested with UIKit version 2.24.2.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See ',\n        _react2.default.createElement(\n          'a',\n          { href: 'http://otissv.github.io/react-uikit-components' },\n          'React UIKit Componets'\n        ),\n        ' for examples and full documentation.'\n      ),\n      _react2.default.createElement('hr', { className: 'uk-article-divider' }),\n      _react2.default.createElement(\n        'h3',\n        null,\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { scroll: 'text' },\n        '<Block context=\\'muted\\'>\\n<h4>Block</h4>\\n<Grid widths=\\'1-3\\'>\\n  <Panel>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n  <Panel >\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n  <Panel >\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n</Grid>\\n</Block>'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Block container'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To add the body in a container use the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'container'\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        null,\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { scroll: 'text' },\n        '<Block context=\\'muted\\' container >\\n<h4>Block</h4>\\n<Grid widths=\\'1-3\\'>\\n  <Panel>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n  <Panel>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n  <Panel >\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n</Grid>\\n</Block>'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Block Context'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To apply different background colors, add one of the following values for the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'context'\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              null,\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Description'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'default'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Add the default background color, usually white or similar.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'muted'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Adds a light background color.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'primary'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Adds a primary background color.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'secondary'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Adds a another background color, usually a dark one.'\n            )\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'h3',\n        null,\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { scroll: 'text' },\n        '<Block context=\\'primary\\' container contrast >\\n<h4>Block</h4>\\n<Grid widths=\\'1-3\\'>\\n  <Panel>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n  <Panel >\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n  <Panel >\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n</Grid>\\n</Block>'\n      ),\n      _react2.default.createElement(\n        _reactUikitNote2.default,\n        { badge: 'NOTE:' },\n        'To properly display colors, borders and other elements on colored blocks, you might want to apply the contrast prop to the Block componet.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Block large'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To add the body in a container use the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'container'\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        null,\n        'Example'\n      ),\n      _react2.default.createElement(\n        'h3',\n        null,\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { scroll: 'text' },\n        '<Block context=\\'secondary\\' container contrast large >\\n<h4>Block</h4>\\n<Grid widths=\\'1-3\\'>\\n  <Panel>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n\\n  <Panel >\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n  <Panel >\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\n    eiusmod tempor incididunt ut labore et dolore magna.\\n  </Panel>\\n</Grid>\\n</Block>'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Block Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          '<Block>'\n        ),\n        ' props and their types.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See ',\n        _react2.default.createElement(\n          'a',\n          { href: 'https://github.com/otissv/react-uikit-base' },\n          'base'\n        ),\n        ' for additional props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              null,\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'context'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'enums'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'container'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { colSpan: '2' },\n              'oneOf ',\n              _react2.default.createElement('br', null),\n              'default, muted, primary, secondary'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'contrast'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'bool'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'large'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'bool'\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Tests'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test'\n        ),\n        ' to run tests with minimal output.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test:spec'\n        ),\n        ' to run tests with detailed output.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test:watch'\n        ),\n        'watches all directories and run tests with minimal output on file changes.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Build'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run build'\n        ),\n        ' to build files fro distribution.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run build:watch'\n        ),\n        ' watches src directory and builds files on changes.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Lint'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run lint'\n        ),\n        ' lints scripts in src directory.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run lint:watch'\n        ),\n        ' watches src directory and lints scripts in src directory.',\n        _react2.default.createElement('br', null)\n      )\n    )\n  );\n};\n\nexports.default = BlockDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ibG9jay1kb2MuanN4P2UxZGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYixJQUFNLFFBQVEsR0FBRyxTQUFYLFFBQVEsQ0FBSSxLQUFLO1NBQ3JCOzs7SUFFRTs7O01BQ0U7Ozs7T0FBYztNQUNkOzs7O09BRUk7S0FDSTtJQUVWOzs7TUFDRTs7OztPQUFjO01BQ2Q7OztRQUNFOzs7O1NBQWlEO09BQy9DO01BQ0o7Ozs7UUFDTSx5Q0FBTTtRQUNaOzs7O1NBQW1EO1FBQUEseUNBQU07T0FDckQ7TUFFSjs7OztRQUNNLHlDQUFNO1FBQ1o7Ozs7U0FBOEQ7T0FDMUQ7TUFFSjs7VUFBTSxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7O1FBQ0M7O1lBQUcsSUFBSSxFQUFDLHNCQUFzQjs7U0FBaUI7O09BRXpGO01BRVA7Ozs7UUFDTTs7WUFBRyxJQUFJLEVBQUMsZ0RBQWdEOztTQUEwQjs7T0FDcEY7TUFFRixzQ0FBSSxTQUFTLEVBQUMsb0JBQW9CLEdBQUc7TUFFdkM7Ozs7T0FBZ0I7TUFFaEI7O1VBQVcsTUFBTSxFQUFDLE1BQU07O09Ba0JaO0tBQ0o7SUFFVjs7O01BQ0U7Ozs7T0FBd0I7TUFDeEI7Ozs7UUFDeUM7Ozs7U0FBc0I7O09BQzNEO01BRUo7Ozs7T0FBZ0I7TUFFaEI7O1VBQVcsTUFBTSxFQUFDLE1BQU07O09Ba0JaO0tBQ0o7SUFHVjs7O01BQ0U7Ozs7T0FBc0I7TUFDdEI7Ozs7UUFFVTs7OztTQUFvQjs7T0FDMUI7TUFFSjs7O1FBQ0U7OztVQUNFOzs7WUFDRTs7OzthQUFhO1lBQ2I7Ozs7YUFBb0I7V0FDakI7U0FDQztRQUNSOzs7VUFDRTs7O1lBQ0U7OztjQUFJOzs7O2VBQW9CO2FBQUs7WUFDN0I7Ozs7YUFBb0U7V0FDakU7VUFDTDs7O1lBQ0U7OztjQUFJOzs7O2VBQWtCO2FBQUs7WUFDM0I7Ozs7YUFBdUM7V0FDcEM7VUFDTDs7O1lBQ0U7OztjQUFJOzs7O2VBQW9CO2FBQUs7WUFDN0I7Ozs7YUFBeUM7V0FDdEM7VUFDTDs7O1lBQ0U7OztjQUFJOzs7O2VBQXNCO2FBQUs7WUFDL0I7Ozs7YUFBNkQ7V0FDMUQ7U0FDQztPQUNGO01BRVI7Ozs7T0FBZ0I7TUFFaEI7O1VBQVcsTUFBTSxFQUFDLE1BQU07O09Ba0JaO01BRVo7O1VBQU0sS0FBSyxFQUFDLE9BQU87O09BRVo7S0FDQztJQUdWOzs7TUFDRTs7OztPQUFvQjtNQUNwQjs7OztRQUN5Qzs7OztTQUFzQjs7T0FDM0Q7TUFFSjs7OztPQUFnQjtNQUVoQjs7OztPQUFhO01BQ2I7O1VBQVcsTUFBTSxFQUFDLE1BQU07O09BbUJaO0tBQ0o7SUFFVjs7O01BQ0U7Ozs7T0FBb0I7TUFDcEI7OztRQUNFOzs7O1NBQTBCOztPQUN4QjtNQUVKOzs7O1FBQ007O1lBQUcsSUFBSSxFQUFDLDRDQUE0Qzs7U0FBUzs7T0FDL0Q7TUFFSjs7O1FBQ0U7OztVQUNFOzs7WUFDRTs7OzthQUFhO1lBQ2I7Ozs7YUFBYTtXQUNWO1NBQ0M7UUFDUjs7O1VBQ0U7OztZQUNFOzs7Y0FDRTs7OztlQUFvQjthQUNqQjtZQUNMOzs7O2FBQWM7V0FDWDtVQUNMOzs7WUFDRTs7O2NBQ0U7Ozs7ZUFBc0I7YUFDbkI7WUFDTDs7Z0JBQUksT0FBTyxFQUFDLEdBQUc7O2NBQU8seUNBQU07O2FBQ1c7V0FDcEM7VUFDTDs7O1lBQ0U7OztjQUNFOzs7O2VBQXFCO2FBQ2xCO1lBQ0w7Ozs7YUFBYTtXQUNWO1VBQ0w7OztZQUNFOzs7Y0FDRTs7OztlQUFrQjthQUNmO1lBQ0w7Ozs7YUFBYTtXQUNWO1NBQ0M7T0FDRjtLQUNBO0lBR1Y7OztNQUNFOzs7O09BQWM7TUFDZDs7O1FBQ0U7Ozs7U0FBeUI7O1FBQWtDLHlDQUFNO1FBQ2pFOzs7O1NBQThCOztRQUFtQyx5Q0FBTTtRQUN2RTs7OztTQUErQjs7UUFBMEUseUNBQU07T0FDN0c7S0FDSTtJQUVWOzs7TUFDRTs7OztPQUFjO01BQ2Q7OztRQUNFOzs7O1NBQTBCOztRQUFpQyx5Q0FBTTtRQUNqRTs7OztTQUFnQzs7UUFBbUQseUNBQU07T0FDdkY7S0FDSTtJQUdWOzs7TUFDRTs7OztPQUFhO01BQ2I7OztRQUNFOzs7O1NBQXlCOztRQUFnQyx5Q0FBTTtRQUMvRDs7OztTQUErQjs7UUFBMEQseUNBQU07T0FDN0Y7S0FDSTtHQUVOO0NBQ1AsQ0FBQzs7a0JBR2EsUUFBUSIsImZpbGUiOiIyMDg1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvZGVibG9jayBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWNvZGVibG9jayc7XG5pbXBvcnQgTm90ZSBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LW5vdGUnO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtdGFibGUnO1xuXG5cbmNvbnN0IEJsb2NrRG9jID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMT5CbG9jazwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgU2VwYXJhdGUgY29udGVudCBzZWN0aW9ucyBieSBidW5kbGluZyB0aGVtIGluIGJsb2NrcyB3aXRoIGRpZmZlcmVudCBzdHlsZXMuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+VXNhZ2U8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIDxjb2RlPm5wbSBpbnN0YWxsIHJlYWN0LXVpa2l0LWJhc2UgLS1zYXZlOzwvY29kZT5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBFUzYgPGJyIC8+XG4gICAgICA8Y29kZT5pbXBvcnQgQmxvY2sgZnJvbSAncmVhY3QtdWlraXQtYmxvY2snOzwvY29kZT48YnIgLz5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIEVTNSA8YnIgLz5cbiAgICAgIDxjb2RlPnZhciBCbG9jayA9IHJlcXVpcmUmIzQwOydyZWFjdC11aWtpdC1ibG9jaycmIzQxOzs8L2NvZGU+XG4gICAgICA8L3A+XG5cbiAgICAgIDxOb3RlIGJhZGdlPXt7Y29udGV4dDogJ2RhbmdlcicsIGJvZHk6ICdOb3RlOid9fT5cbiAgICAgICAgVUlraXQgY3NzIGlzIG5vdCBpbmNsdWRlZC4gWW91IGNhbiBnZXQgaXQgZnJvbSA8YSBocmVmPSdodHRwOi8vZ2V0dWlraXQuY29tLyc+Z2V0dWlraXQuY29tPC9hPi5cbiAgICAgICAgVGhpcyBoYXMgYmVlbiB0ZXN0ZWQgd2l0aCBVSUtpdCB2ZXJzaW9uIDIuMjQuMi5cbiAgICAgIDwvTm90ZT5cblxuICAgICAgPHA+XG4gICAgICAgIFNlZSA8YSBocmVmPSdodHRwOi8vb3Rpc3N2LmdpdGh1Yi5pby9yZWFjdC11aWtpdC1jb21wb25lbnRzJz5SZWFjdCBVSUtpdCBDb21wb25ldHM8L2E+IGZvciBleGFtcGxlcyBhbmQgZnVsbCBkb2N1bWVudGF0aW9uLlxuICAgICAgPC9wPlxuXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJ1ay1hcnRpY2xlLWRpdmlkZXJcIiAvPlxuXG4gICAgICA8aDM+RXhhbXBsZTwvaDM+XG5cbiAgICAgIDxDb2RlYmxvY2sgc2Nyb2xsPSd0ZXh0Jz5cbntgPEJsb2NrIGNvbnRleHQ9J211dGVkJz5cbjxoND5CbG9jazwvaDQ+XG48R3JpZCB3aWR0aHM9JzEtMyc+XG4gIDxQYW5lbD5cbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvXG4gICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLlxuICA8L1BhbmVsPlxuICA8UGFuZWwgPlxuICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG9cbiAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEuXG4gIDwvUGFuZWw+XG4gIDxQYW5lbCA+XG4gICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkb1xuICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYS5cbiAgPC9QYW5lbD5cbjwvR3JpZD5cbjwvQmxvY2s+YH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkJsb2NrIGNvbnRhaW5lcjwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgVG8gYWRkIHRoZSBib2R5IGluIGEgY29udGFpbmVyIHVzZSB0aGUgPGNvZGU+Y29udGFpbmVyPC9jb2RlPiBwcm9wLlxuICAgICAgPC9wPlxuXG4gICAgICA8aDM+RXhhbXBsZTwvaDM+XG5cbiAgICAgIDxDb2RlYmxvY2sgc2Nyb2xsPSd0ZXh0Jz5cbntgPEJsb2NrIGNvbnRleHQ9J211dGVkJyBjb250YWluZXIgPlxuPGg0PkJsb2NrPC9oND5cbjxHcmlkIHdpZHRocz0nMS0zJz5cbiAgPFBhbmVsPlxuICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG9cbiAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEuXG4gIDwvUGFuZWw+XG4gIDxQYW5lbD5cbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvXG4gICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLlxuICA8L1BhbmVsPlxuICA8UGFuZWwgPlxuICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG9cbiAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEuXG4gIDwvUGFuZWw+XG48L0dyaWQ+XG48L0Jsb2NrPmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkJsb2NrIENvbnRleHQ8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFRvIGFwcGx5IGRpZmZlcmVudCBiYWNrZ3JvdW5kIGNvbG9ycywgYWRkIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlc1xuICAgICAgICBmb3IgdGhlIDxjb2RlPmNvbnRleHQ8L2NvZGU+IHByb3AuXG4gICAgICA8L3A+XG5cbiAgICAgIDxUYWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Qcm9wPC90aD5cbiAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD48Y29kZT5kZWZhdWx0PC9jb2RlPjwvdGQ+XG4gICAgICAgICAgICA8dGQ+QWRkIHRoZSBkZWZhdWx0IGJhY2tncm91bmQgY29sb3IsIHVzdWFsbHkgd2hpdGUgb3Igc2ltaWxhci48L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPjxjb2RlPm11dGVkPC9jb2RlPjwvdGQ+XG4gICAgICAgICAgICA8dGQ+QWRkcyBhIGxpZ2h0IGJhY2tncm91bmQgY29sb3IuPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD48Y29kZT5wcmltYXJ5PC9jb2RlPjwvdGQ+XG4gICAgICAgICAgICA8dGQ+QWRkcyBhIHByaW1hcnkgYmFja2dyb3VuZCBjb2xvci48L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPjxjb2RlPnNlY29uZGFyeTwvY29kZT48L3RkPlxuICAgICAgICAgICAgPHRkPkFkZHMgYSBhbm90aGVyIGJhY2tncm91bmQgY29sb3IsIHVzdWFsbHkgYSBkYXJrIG9uZS48L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuXG4gICAgICA8aDM+RXhhbXBsZTwvaDM+XG5cbiAgICAgIDxDb2RlYmxvY2sgc2Nyb2xsPSd0ZXh0Jz5cbntgPEJsb2NrIGNvbnRleHQ9J3ByaW1hcnknIGNvbnRhaW5lciBjb250cmFzdCA+XG48aDQ+QmxvY2s8L2g0PlxuPEdyaWQgd2lkdGhzPScxLTMnPlxuICA8UGFuZWw+XG4gICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkb1xuICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYS5cbiAgPC9QYW5lbD5cbiAgPFBhbmVsID5cbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvXG4gICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLlxuICA8L1BhbmVsPlxuICA8UGFuZWwgPlxuICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG9cbiAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEuXG4gIDwvUGFuZWw+XG48L0dyaWQ+XG48L0Jsb2NrPmB9XG4gICAgICA8L0NvZGVibG9jaz5cblxuICAgICAgPE5vdGUgYmFkZ2U9J05PVEU6Jz5cbiAgICAgICAgVG8gcHJvcGVybHkgZGlzcGxheSBjb2xvcnMsIGJvcmRlcnMgYW5kIG90aGVyIGVsZW1lbnRzIG9uIGNvbG9yZWQgYmxvY2tzLCB5b3UgbWlnaHQgd2FudCB0byBhcHBseSB0aGUgY29udHJhc3QgcHJvcCB0byB0aGUgQmxvY2sgY29tcG9uZXQuXG4gICAgICA8L05vdGU+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5CbG9jayBsYXJnZTwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgVG8gYWRkIHRoZSBib2R5IGluIGEgY29udGFpbmVyIHVzZSB0aGUgPGNvZGU+Y29udGFpbmVyPC9jb2RlPiBwcm9wLlxuICAgICAgPC9wPlxuXG4gICAgICA8aDM+RXhhbXBsZTwvaDM+XG5cbiAgICAgIDxoMz5Db2RlPC9oMz5cbiAgICAgIDxDb2RlYmxvY2sgc2Nyb2xsPSd0ZXh0Jz5cbntgPEJsb2NrIGNvbnRleHQ9J3NlY29uZGFyeScgY29udGFpbmVyIGNvbnRyYXN0IGxhcmdlID5cbjxoND5CbG9jazwvaDQ+XG48R3JpZCB3aWR0aHM9JzEtMyc+XG4gIDxQYW5lbD5cbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvXG4gICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLlxuICA8L1BhbmVsPlxuXG4gIDxQYW5lbCA+XG4gICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkb1xuICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYS5cbiAgPC9QYW5lbD5cbiAgPFBhbmVsID5cbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvXG4gICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLlxuICA8L1BhbmVsPlxuPC9HcmlkPlxuPC9CbG9jaz5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+QmxvY2sgUHJvcHM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIDxjb2RlPiZsdDtCbG9jayZndDs8L2NvZGU+IHByb3BzIGFuZCB0aGVpciB0eXBlcy5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIFNlZSA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vb3Rpc3N2L3JlYWN0LXVpa2l0LWJhc2UnPmJhc2U8L2E+IGZvciBhZGRpdGlvbmFsIHByb3BzLlxuICAgICAgPC9wPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UHJvcDwvdGg+XG4gICAgICAgICAgICA8dGg+VHlwZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+Y29udGV4dDwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+ZW51bXM8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Y29kZT5jb250YWluZXI8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNvbFNwYW49JzInPm9uZU9mIDxiciAvPlxuICAgICAgICAgICAgZGVmYXVsdCwgbXV0ZWQsIHByaW1hcnksIHNlY29uZGFyeTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPmNvbnRyYXN0PC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5ib29sPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+bGFyZ2U8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPmJvb2w8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+VGVzdHM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIDxjb2RlPm5wbSBydW4gdGVzdDwvY29kZT4gdG8gcnVuIHRlc3RzIHdpdGggbWluaW1hbCBvdXRwdXQuPGJyIC8+XG4gICAgICAgIDxjb2RlPm5wbSBydW4gdGVzdDpzcGVjPC9jb2RlPiB0byBydW4gdGVzdHMgd2l0aCBkZXRhaWxlZCBvdXRwdXQuPGJyIC8+XG4gICAgICAgIDxjb2RlPm5wbSBydW4gdGVzdDp3YXRjaDwvY29kZT53YXRjaGVzIGFsbCBkaXJlY3RvcmllcyBhbmQgcnVuIHRlc3RzIHdpdGggbWluaW1hbCBvdXRwdXQgb24gZmlsZSBjaGFuZ2VzLjxiciAvPlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkJ1aWxkPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICA8Y29kZT5ucG0gcnVuIGJ1aWxkPC9jb2RlPiB0byBidWlsZCBmaWxlcyBmcm8gZGlzdHJpYnV0aW9uLjxiciAvPlxuICAgICAgICA8Y29kZT5ucG0gcnVuIGJ1aWxkOndhdGNoPC9jb2RlPiB3YXRjaGVzIHNyYyBkaXJlY3RvcnkgYW5kIGJ1aWxkcyBmaWxlcyBvbiBjaGFuZ2VzLjxiciAvPlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+TGludDwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgPGNvZGU+bnBtIHJ1biBsaW50PC9jb2RlPiBsaW50cyBzY3JpcHRzIGluIHNyYyBkaXJlY3RvcnkuPGJyIC8+XG4gICAgICAgIDxjb2RlPm5wbSBydW4gbGludDp3YXRjaDwvY29kZT4gd2F0Y2hlcyBzcmMgZGlyZWN0b3J5IGFuZCBsaW50cyBzY3JpcHRzIGluIHNyYyBkaXJlY3RvcnkuPGJyIC8+XG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG4gIDwvZGl2PlxuKTtcblxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja0RvYztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYmxvY2stZG9jLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})