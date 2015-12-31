webpackHotUpdate(0,{

/***/ 3028:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitComment = __webpack_require__(3027);\n\nvar _reactUikitComment2 = _interopRequireDefault(_reactUikitComment);\n\nvar _reactUikitCodeblock = __webpack_require__(218);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitTable = __webpack_require__(269);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nvar _reactUikitNote = __webpack_require__(826);\n\nvar _reactUikitNote2 = _interopRequireDefault(_reactUikitNote);\n\nvar _reactUikitButton = __webpack_require__(372);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar meta = _react2.default.createElement(\n  'div',\n  null,\n  _react2.default.createElement(_reactUikitButton2.default, { type: 'link', context: 'link', size: 'mini', body: '12 days ago' }),\n  ' |',\n  _react2.default.createElement(_reactUikitButton2.default, { type: 'link', context: 'link', size: 'mini', body: 'Profile' }),\n  ' |',\n  _react2.default.createElement(_reactUikitButton2.default, { type: 'link', context: 'link', size: 'mini', body: '#' })\n);\n\nvar CommentDoc = function CommentDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.2/css/uikit.almost-flat.min.css' }),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Commnet'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Create comments, for example for articles.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-comment --save;\\n\\n//ES6\\nimport Commnet from \\'react-uikit-comment\\';\\n\\n// ES5\\nvar Commnet = require(\\'react-uikit-comment\\');'\n      ),\n      _react2.default.createElement('hr', null),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The Comment component consists of a comment header, including an avatar, a title and meta data, and a comment body.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              null,\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Description'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'avatar'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Add avatar prop to create an avatar for the comment author'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'title'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Add tilte prop to createCreates a comment title.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'meta'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Add meta prop to add meta data about the comment.'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'body'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'Add body prop to add text comment body. Body is overridden if commet has children.'\n            )\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitComment2.default,\n        { title: 'Author', meta: meta,\n          avatar: { src: 'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder' } },\n        _react2.default.createElement(\n          'p',\n          null,\n          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'\n        )\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        'const meta = <div>\\n  <Button type=\\'link\\' context=\\'link\\' size=\\'mini\\' body=\\'12 days ago\\'/> |\\n  <Button type=\\'link\\' context=\\'link\\' size=\\'mini\\' body=\\'Profile\\'/> |\\n  <Button type=\\'link\\' context=\\'link\\' size=\\'mini\\' body=\\'#\\'/>\\n</div>;\\n\\n...\\n<Commnet title=\\'Author\\' meta={meta}\\n  avatar={{src:\\'docs/images/placeholder_avatar.svg\\', alt: \\'Avatar placeholder\\'}}>\\n\\n  <p>\\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\\n    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam\\n    erat, sed diam voluptua.\\n  </p>\\n</Commnet>\\n...\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Comment Color'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To style a comment differently, for example to highlight it as the admin\\'s comment, just add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'primary'\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitComment2.default,\n        { primary: true, title: 'Author', meta: '12 days ago | Profile | #',\n          avatar: { src: 'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder' } },\n        _react2.default.createElement(\n          'p',\n          null,\n          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'\n        )\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Commnet primary title=\\'Author\\' meta=\\'12 days ago | Profile | #\\'\\n  avatar={{src:\\'docs/images/placeholder_avatar.svg\\', alt: \\'Avatar placeholder\\'}}>\\n\\n  <p>\\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\\n    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam\\n    erat, sed diam voluptua.\\n  </p>\\n</Commnet>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Commnet Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See Base for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              null,\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              null,\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'avatar'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'object',\n              _react2.default.createElement('br', null),\n              ' ',\n              '{src, alt }'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'body'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'meta'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'any'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'primary'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'bool'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              null,\n              _react2.default.createElement(\n                'code',\n                null,\n                'title'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              null,\n              'string'\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Tests'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test'\n        ),\n        ' to run tests with minimal output.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test:spec'\n        ),\n        ' to run tests with detailed output.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run test:watch'\n        ),\n        'watches all directories and run tests with minimal output on file changes.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Build'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run build'\n        ),\n        ' to build files fro distribution.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run build:watch'\n        ),\n        ' watches src directory and builds files on changes.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Lint'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run lint'\n        ),\n        ' lints scripts in src directory.',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'code',\n          null,\n          'npm run lint:watch'\n        ),\n        ' watches src directory and lints scripts in src directory.',\n        _react2.default.createElement('br', null)\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'License'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'MIT'\n      )\n    )\n  );\n};\n\nexports.default = CommentDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21tZW50LWRvYy5qc3g/MzQ5MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV2IsSUFBTSxJQUFJLEdBQUc7OztFQUNYLDREQUFRLElBQUksRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxhQUFhLEdBQUU7O0VBQ25FLDREQUFRLElBQUksRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxTQUFTLEdBQUU7O0VBQy9ELDREQUFRLElBQUksRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxHQUFHLEdBQUU7Q0FDckQsQ0FBQzs7QUFHUCxJQUFNLFVBQVUsR0FBRyxTQUFiLFVBQVUsQ0FBSSxLQUFLO1NBQ3ZCOzs7SUFDRSx3Q0FBTSxHQUFHLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxtRkFBbUYsR0FBRztJQUNsSDs7O01BQ0U7Ozs7T0FBZ0I7TUFDaEI7Ozs7T0FFSTtLQUNNO0lBRVY7OztNQUNFOzs7O09BQWM7TUFDZDs7OztPQVFZO01BRVoseUNBQU07TUFDUjs7OztPQUdJO01BRUo7OztRQUNFOzs7VUFDRTs7O1lBQ0U7Ozs7YUFBYTtZQUNiOzs7O2FBQW9CO1dBQ2pCO1NBQ0M7UUFDUjs7O1VBQ0U7OztZQUNFOzs7Y0FBSTs7OztlQUFtQjthQUFLO1lBQzVCOzs7O2FBQW1FO1dBQ2hFO1VBQ0w7OztZQUNFOzs7Y0FBSTs7OztlQUFrQjthQUFLO1lBQzNCOzs7O2FBQXlEO1dBQ3REO1VBQ0w7OztZQUNFOzs7Y0FBSTs7OztlQUFpQjthQUFLO1lBQzFCOzs7O2FBQTBEO1dBQ3ZEO1VBQ0w7OztZQUNFOzs7Y0FBSTs7OztlQUFpQjthQUFLO1lBQzFCOzs7O2FBR0s7V0FDRjtTQUNDO09BQ0Y7TUFFUjs7VUFBSSxTQUFTLEVBQUMsU0FBUzs7T0FBYTtNQUVwQzs7VUFBUyxLQUFLLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBRSxJQUFLO0FBQ2pDLGdCQUFNLEVBQUUsRUFBQyxHQUFHLEVBQUMsb0NBQW9DLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFO1FBRTlFOzs7O1NBSUk7T0FDSTtNQUdWOztVQUFJLFNBQVMsRUFBQyxNQUFNOztPQUFVO01BQzlCOztVQUFXLE1BQU0sRUFBQyxLQUFLOztPQW9CWDtLQUNKO0lBRVY7OztNQUNFOzs7O09BQXNCO01BQ3RCOzs7O1FBRWdDOzs7O1NBQW9COztPQUNoRDtNQUVKOztVQUFJLFNBQVMsRUFBQyxTQUFTOztPQUFhO01BQ3BDOztVQUFTLE9BQU8sUUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQywyQkFBMkI7QUFDOUQsZ0JBQU0sRUFBRSxFQUFDLEdBQUcsRUFBQyxvQ0FBb0MsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUU7UUFFOUU7Ozs7U0FJSTtPQUNJO01BR1Y7O1VBQUksU0FBUyxFQUFDLE1BQU07O09BQVU7TUFDOUI7O1VBQVcsTUFBTSxFQUFDLEtBQUs7O09BWVg7S0FDSjtJQUVWOzs7TUFDRTs7OztPQUFzQjtNQUN0Qjs7OztPQUVJO01BRUo7OztRQUNFOzs7VUFDRTs7O1lBQ0U7Ozs7YUFBYTtZQUNiOzs7O2FBQWE7V0FDVjtTQUNDO1FBQ1I7OztVQUNFOzs7WUFDRTs7O2NBQ0U7Ozs7ZUFBbUI7YUFDaEI7WUFDTDs7OztjQUFVLHlDQUFNOzs7YUFBcUI7V0FDbEM7VUFDTDs7O1lBQ0U7OztjQUNFOzs7O2VBQWlCO2FBQ2Q7WUFDTDs7OzthQUFlO1dBQ1o7VUFDTDs7O1lBQ0U7OztjQUNFOzs7O2VBQWlCO2FBQ2Q7WUFDTDs7OzthQUFZO1dBQ1Q7VUFDTDs7O1lBQ0U7OztjQUNFOzs7O2VBQW9CO2FBQ2pCO1lBQ0w7Ozs7YUFBYTtXQUNWO1VBQ0w7OztZQUNFOzs7Y0FDRTs7OztlQUFrQjthQUNmO1lBQ0w7Ozs7YUFBZTtXQUNaO1NBQ0M7T0FDRjtLQUNBO0lBR1Y7OztNQUNJOzs7O09BQWM7TUFDZDs7O1FBQ0U7Ozs7U0FBeUI7O1FBQWtDLHlDQUFNO1FBQ2pFOzs7O1NBQThCOztRQUFtQyx5Q0FBTTtRQUN2RTs7OztTQUErQjs7UUFBMEUseUNBQU07T0FDN0c7S0FDSTtJQUVWOzs7TUFDRTs7OztPQUFjO01BQ2Q7OztRQUNFOzs7O1NBQTBCOztRQUFpQyx5Q0FBTTtRQUNqRTs7OztTQUFnQzs7UUFBbUQseUNBQU07T0FDdkY7S0FDSTtJQUdWOzs7TUFDRTs7OztPQUFhO01BQ2I7OztRQUNFOzs7O1NBQXlCOztRQUFnQyx5Q0FBTTtRQUMvRDs7OztTQUErQjs7UUFBMEQseUNBQU07T0FDN0Y7S0FDSTtJQUVWOzs7TUFDRTs7OztPQUFnQjtNQUNkOzs7O09BQVU7S0FDSjtHQUVSO0NBQ1AsQ0FBQzs7a0JBRWEsVUFBVSIsImZpbGUiOiIzMDI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tbW5ldCBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWNvbW1lbnQnO1xuaW1wb3J0IENvZGVibG9jayBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWNvZGVibG9jayc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZSc7XG5pbXBvcnQgTm90ZSBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LW5vdGUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWJ1dHRvbic7XG5cblxuY29uc3QgbWV0YSA9IDxkaXY+XG4gIDxCdXR0b24gdHlwZT0nbGluaycgY29udGV4dD0nbGluaycgc2l6ZT0nbWluaScgYm9keT0nMTIgZGF5cyBhZ28nLz4gfFxuICA8QnV0dG9uIHR5cGU9J2xpbmsnIGNvbnRleHQ9J2xpbmsnIHNpemU9J21pbmknIGJvZHk9J1Byb2ZpbGUnLz4gfFxuICA8QnV0dG9uIHR5cGU9J2xpbmsnIGNvbnRleHQ9J2xpbmsnIHNpemU9J21pbmknIGJvZHk9JyMnLz5cbjwvZGl2PjtcblxuXG5jb25zdCBDb21tZW50RG9jID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9J2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3Vpa2l0LzIuMjQuMi9jc3MvdWlraXQuYWxtb3N0LWZsYXQubWluLmNzcycgLz5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMT5Db21tbmV0PC9oMT5cbiAgICAgIDxwPlxuICAgICAgICBDcmVhdGUgY29tbWVudHMsIGZvciBleGFtcGxlIGZvciBhcnRpY2xlcy5cbiAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMj5Vc2FnZTwvaDI+XG4gICAgICAgIDxDb2RlYmxvY2s+XG57YG5wbSBpbnN0YWxsIHJlYWN0LXVpa2l0LWNvbW1lbnQgLS1zYXZlO1xuXG4vL0VTNlxuaW1wb3J0IENvbW1uZXQgZnJvbSAncmVhY3QtdWlraXQtY29tbWVudCc7XG5cbi8vIEVTNVxudmFyIENvbW1uZXQgPSByZXF1aXJlKCdyZWFjdC11aWtpdC1jb21tZW50Jyk7YH1cbiAgICAgICAgPC9Db2RlYmxvY2s+XG5cbiAgICAgICAgPGhyIC8+XG4gICAgICA8cD5cbiAgICAgICAgVGhlIENvbW1lbnQgY29tcG9uZW50IGNvbnNpc3RzIG9mIGEgY29tbWVudCBoZWFkZXIsIGluY2x1ZGluZyBhblxuICAgICAgICBhdmF0YXIsIGEgdGl0bGUgYW5kIG1ldGEgZGF0YSwgYW5kIGEgY29tbWVudCBib2R5LlxuICAgICAgPC9wPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UHJvcDwvdGg+XG4gICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+PGNvZGU+YXZhdGFyPC9jb2RlPjwvdGQ+XG4gICAgICAgICAgICA8dGQ+QWRkIGF2YXRhciBwcm9wIHRvIGNyZWF0ZSBhbiBhdmF0YXIgZm9yIHRoZSBjb21tZW50IGF1dGhvcjwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+PGNvZGU+dGl0bGU8L2NvZGU+PC90ZD5cbiAgICAgICAgICAgIDx0ZD5BZGQgdGlsdGUgcHJvcCB0byBjcmVhdGVDcmVhdGVzIGEgY29tbWVudCB0aXRsZS48L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPjxjb2RlPm1ldGE8L2NvZGU+PC90ZD5cbiAgICAgICAgICAgIDx0ZD5BZGQgbWV0YSBwcm9wIHRvIGFkZCBtZXRhIGRhdGEgYWJvdXQgdGhlIGNvbW1lbnQuPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD48Y29kZT5ib2R5PC9jb2RlPjwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIEFkZCBib2R5IHByb3AgdG8gYWRkIHRleHQgY29tbWVudCBib2R5LiBCb2R5IGlzIG92ZXJyaWRkZW5cbiAgICAgICAgICAgICAgaWYgY29tbWV0IGhhcyBjaGlsZHJlbi5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvVGFibGU+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuXG4gICAgICA8Q29tbW5ldCB0aXRsZT0nQXV0aG9yJyBtZXRhPXttZXRhfVxuICAgICAgICBhdmF0YXI9e3tzcmM6J2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyX2F2YXRhci5zdmcnLCBhbHQ6ICdBdmF0YXIgcGxhY2Vob2xkZXInfX0+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW1cbiAgICAgICAgICBub251bXkgZWlybW9kIHRlbXBvciBpbnZpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1eWFtXG4gICAgICAgICAgZXJhdCwgc2VkIGRpYW0gdm9sdXB0dWEuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvQ29tbW5ldD5cblxuXG4gICAgICA8aDQgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oND5cbiAgICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue1xuYGNvbnN0IG1ldGEgPSA8ZGl2PlxuICA8QnV0dG9uIHR5cGU9J2xpbmsnIGNvbnRleHQ9J2xpbmsnIHNpemU9J21pbmknIGJvZHk9JzEyIGRheXMgYWdvJy8+IHxcbiAgPEJ1dHRvbiB0eXBlPSdsaW5rJyBjb250ZXh0PSdsaW5rJyBzaXplPSdtaW5pJyBib2R5PSdQcm9maWxlJy8+IHxcbiAgPEJ1dHRvbiB0eXBlPSdsaW5rJyBjb250ZXh0PSdsaW5rJyBzaXplPSdtaW5pJyBib2R5PScjJy8+XG48L2Rpdj47XG5cbi4uLlxuPENvbW1uZXQgdGl0bGU9J0F1dGhvcicgbWV0YT17bWV0YX1cbiAgYXZhdGFyPXt7c3JjOidkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl9hdmF0YXIuc3ZnJywgYWx0OiAnQXZhdGFyIHBsYWNlaG9sZGVyJ319PlxuXG4gIDxwPlxuICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtXG4gICAgbm9udW15IGVpcm1vZCB0ZW1wb3IgaW52aWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdXlhbVxuICAgIGVyYXQsIHNlZCBkaWFtIHZvbHVwdHVhLlxuICA8L3A+XG48L0NvbW1uZXQ+XG4uLi5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5Db21tZW50IENvbG9yPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBUbyBzdHlsZSBhIGNvbW1lbnQgZGlmZmVyZW50bHksIGZvciBleGFtcGxlIHRvIGhpZ2hsaWdodCBpdCBhcyB0aGVcbiAgICAgICAgYWRtaW4ncyBjb21tZW50LCBqdXN0IGFkZCB0aGUgPGNvZGU+cHJpbWFyeTwvY29kZT4gcHJvcC5cbiAgICAgIDwvcD5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgICA8Q29tbW5ldCBwcmltYXJ5IHRpdGxlPSdBdXRob3InIG1ldGE9JzEyIGRheXMgYWdvIHwgUHJvZmlsZSB8ICMnXG4gICAgICAgIGF2YXRhcj17e3NyYzonZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfYXZhdGFyLnN2ZycsIGFsdDogJ0F2YXRhciBwbGFjZWhvbGRlcid9fT5cblxuICAgICAgICA8cD5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCBzZWQgZGlhbVxuICAgICAgICAgIG5vbnVteSBlaXJtb2QgdGVtcG9yIGludmlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXV5YW1cbiAgICAgICAgICBlcmF0LCBzZWQgZGlhbSB2b2x1cHR1YS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9Db21tbmV0PlxuXG5cbiAgICAgIDxoNCBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2g0PlxuICAgICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57XG5gPENvbW1uZXQgcHJpbWFyeSB0aXRsZT0nQXV0aG9yJyBtZXRhPScxMiBkYXlzIGFnbyB8IFByb2ZpbGUgfCAjJ1xuICBhdmF0YXI9e3tzcmM6J2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyX2F2YXRhci5zdmcnLCBhbHQ6ICdBdmF0YXIgcGxhY2Vob2xkZXInfX0+XG5cbiAgPHA+XG4gICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW1cbiAgICBub251bXkgZWlybW9kIHRlbXBvciBpbnZpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1eWFtXG4gICAgZXJhdCwgc2VkIGRpYW0gdm9sdXB0dWEuXG4gIDwvcD5cbjwvQ29tbW5ldD5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5Db21tbmV0IFByb3BzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBTZWUgQmFzZSBmb3IgYWRkaXRpb25hbCB1dGlsaXR5IHByb3BzLlxuICAgICAgPC9wPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UHJvcDwvdGg+XG4gICAgICAgICAgICA8dGg+VHlwZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+YXZhdGFyPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5vYmplY3Q8YnIgLz4ge2B7c3JjLCBhbHQgfWB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+Ym9keTwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+c3RyaW5nPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+bWV0YTwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+YW55PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+cHJpbWFyeTwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+Ym9vbDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPnRpdGxlPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5zdHJpbmc8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMj5UZXN0czwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxjb2RlPm5wbSBydW4gdGVzdDwvY29kZT4gdG8gcnVuIHRlc3RzIHdpdGggbWluaW1hbCBvdXRwdXQuPGJyIC8+XG4gICAgICAgICAgPGNvZGU+bnBtIHJ1biB0ZXN0OnNwZWM8L2NvZGU+IHRvIHJ1biB0ZXN0cyB3aXRoIGRldGFpbGVkIG91dHB1dC48YnIgLz5cbiAgICAgICAgICA8Y29kZT5ucG0gcnVuIHRlc3Q6d2F0Y2g8L2NvZGU+d2F0Y2hlcyBhbGwgZGlyZWN0b3JpZXMgYW5kIHJ1biB0ZXN0cyB3aXRoIG1pbmltYWwgb3V0cHV0IG9uIGZpbGUgY2hhbmdlcy48YnIgLz5cbiAgICAgICAgPC9wPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgyPkJ1aWxkPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGNvZGU+bnBtIHJ1biBidWlsZDwvY29kZT4gdG8gYnVpbGQgZmlsZXMgZnJvIGRpc3RyaWJ1dGlvbi48YnIgLz5cbiAgICAgICAgICA8Y29kZT5ucG0gcnVuIGJ1aWxkOndhdGNoPC9jb2RlPiB3YXRjaGVzIHNyYyBkaXJlY3RvcnkgYW5kIGJ1aWxkcyBmaWxlcyBvbiBjaGFuZ2VzLjxiciAvPlxuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMj5MaW50PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGNvZGU+bnBtIHJ1biBsaW50PC9jb2RlPiBsaW50cyBzY3JpcHRzIGluIHNyYyBkaXJlY3RvcnkuPGJyIC8+XG4gICAgICAgICAgPGNvZGU+bnBtIHJ1biBsaW50OndhdGNoPC9jb2RlPiB3YXRjaGVzIHNyYyBkaXJlY3RvcnkgYW5kIGxpbnRzIHNjcmlwdHMgaW4gc3JjIGRpcmVjdG9yeS48YnIgLz5cbiAgICAgICAgPC9wPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgyPkxpY2Vuc2U8L2gyPlxuICAgICAgICAgIDxwPk1JVDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cblxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnREb2M7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbW1lbnQtZG9jLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})