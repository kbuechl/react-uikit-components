webpackHotUpdate(0,{

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitCodeblock = __webpack_require__(16);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitImg = __webpack_require__(80);\n\nvar _reactUikitImg2 = _interopRequireDefault(_reactUikitImg);\n\nvar _reactUikitTable = __webpack_require__(17);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ImgDoc = function ImgDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Img'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Easily create responsive images.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-img --save;\\n\\n// ES6\\nimport Img from \\'react-uikit-img\\';\\n\\n// ES5\\nvar Img = require(\\'react-uikit-img\\');\\n'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImg2.default, { width: '300px', height: '200px', src: 'docs/images/placeholder_200x150_2.svg' }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Img width=\\'300px\\' height=\\'200px\\' src=\\'docs/images/placeholder_200x150_2.svg\\' />\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Responsive image'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The Image component provides different images for various viewport widths. To enable responsive behavior by adding one or all of the responsive props ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'small'\n        ),\n        ', ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'medium'\n        ),\n        ' ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'large'\n        ),\n        ' ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'xlarge'\n        ),\n        '.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Each responsive size takes a JSON object.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'JSON key'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Descrition'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'width'\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'The width of the image. The defualt width is 100% if no width is specified'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'height'\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'The height of the image. The defualt height is auto if no height is specified'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'src'\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'The src url for the image'\n            )\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'For non-responsive images use the html ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'img'\n        ),\n        ' tag.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImg2.default, {\n        small: { height: '150px', src: 'docs/images/placeholder_200x150_1.svg' },\n        medium: { height: '250px', src: 'docs/images/placeholder_200x150_2.svg' },\n        large: { height: '350px', src: 'docs/images/placeholder_200x150_3.svg' },\n        xlarge: { height: '450px', src: 'docs/images/placeholder_200x150_4.svg' }\n      }),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Img\\n  small={{height: \\'150px\\', src: \\'docs/images/placeholder_200x150_1.svg\\'} }\\n  medium={{height: \\'250px\\', src: \\'docs/images/placeholder_200x150_2.svg\\'} }\\n  large={{height: \\'350px\\', src: \\'docs/images/placeholder_200x150_3.svg\\'} }\\n  xlarge={{height: \\'450px\\', src: \\'docs/images/placeholder_200x150_4.svg\\'} }\\n/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Cover images'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'cover'\n        ),\n        ' component allows you to create fullscreen teasers using images. It will always be centered vertically and horizontally and cover its container without losing its proportions. You can also place additional content, like text or images on top of the image by placing it inside of the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          '<Image>'\n        ),\n        ' component.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitImg2.default,\n        { cover: true,\n          small: { height: '150px', src: 'docs/images/placeholder_200x150_1.svg' },\n          medium: { height: '250px', src: 'docs/images/placeholder_200x150_2.svg' },\n          large: { height: '350px', src: 'docs/images/placeholder_200x150_3.svg' },\n          xlarge: { height: '450px', src: 'docs/images/placeholder_200x150_4.svg' }\n        },\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Cover image'\n        )\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Img cover\\n  small={{height: \\'150px\\', src: \\'docs/images/placeholder_200x150_1.svg\\'} }\\n  medium={{height: \\'250px\\', src: \\'docs/images/placeholder_200x150_2.svg\\'} }\\n  large={{height: \\'350px\\', src: \\'docs/images/placeholder_200x150_3.svg\\'} }\\n  xlarge={{height: \\'450px\\', src: \\'docs/images/placeholder_200x150_4.svg\\'} }\\n>\\n\\n  <h1>Cover image</h1>\\n</Img>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Img Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See base for additional props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'alt'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'cover'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { colSpan: '2' },\n              'Bool'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'height'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'large'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'object',\n              _react2.default.createElement('br', null),\n              '{width, height, src}'\n            ),\n            _react2.default.createElement('td', { className: 'uk-text-left' })\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'medium'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'object',\n              _react2.default.createElement('br', null),\n              '{width, height, src}'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'small'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'object',\n              _react2.default.createElement('br', null),\n              '{width, height, src}'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'src'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'width'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'xlarge'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'object',\n              _react2.default.createElement('br', null),\n              '{width, height, src}'\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = ImgDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWctZG9jLmpzeD83NDhiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWIsSUFBTSxNQUFNLEdBQUcsU0FBVCxNQUFNLENBQUksS0FBSztTQUNuQjs7O0lBQ0U7OztNQUNFOzs7O09BQVk7TUFDWjs7VUFBRyxTQUFTLEVBQUMsaUJBQWlCOztPQUUxQjtLQUNJO0lBR1Y7OztNQUNFOzs7O09BQWM7TUFDZDs7OztPQVNZO01BR1o7O1VBQUksU0FBUyxFQUFDLFNBQVM7O09BQWE7TUFDcEMseURBQUssS0FBSyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyx1Q0FBdUMsR0FBRztNQUVoRjs7VUFBSSxTQUFTLEVBQUMsTUFBTTs7T0FBVTtNQUM5Qjs7VUFBVyxNQUFNLEVBQUMsS0FBSzs7T0FJWDtLQUNKO0lBRVY7OztNQUVBOzs7O09BQXlCO01BQ3pCOzs7O1FBRytCOzs7O1NBQWtCOztRQUFFOzs7O1NBQW1COztRQUFDOzs7O1NBQWtCOztRQUFDOzs7O1NBQW1COztPQUN6RztNQUVKOzs7O09BRUk7TUFFSjs7O1FBQ0U7OztVQUNFOzs7WUFDRTs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQWM7WUFDMUM7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUFnQjtXQUN6QztTQUNDO1FBQ1I7OztVQUNFOzs7WUFDRTs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVc7WUFDdkM7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUFnRjtXQUN6RztVQUNMOzs7WUFDRTs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVk7WUFDeEM7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUFtRjtXQUM1RztVQUNMOzs7WUFDRTs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVM7WUFDckM7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUErQjtXQUN4RDtTQUND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Z0JBQUksU0FBUyxFQUFDLGNBQWM7Y0FDMUI7Ozs7ZUFBbUI7YUFDaEI7WUFDTDs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2NBQU8seUNBQU07O2FBQTZCO1dBQ25FO1NBQ0M7T0FDRjtLQUNBO0dBRU47Q0FDUCxDQUFDOztrQkFFYSxNQUFNIiwiZmlsZSI6IjMwMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvZGVibG9jayBmcm9tICdyZWFjdC11aWtpdC1jb2RlYmxvY2snO1xuaW1wb3J0IEltZyBmcm9tICdyZWFjdC11aWtpdC1pbWcnO1xuaW1wb3J0IFRhYmxlIGZyb20gJ3JlYWN0LXVpa2l0LXRhYmxlJztcblxuXG5cbmNvbnN0IEltZ0RvYyA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPkltZzwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9J3VrLWFydGljbGUtbGVhZCc+XG4gICAgICAgIEVhc2lseSBjcmVhdGUgcmVzcG9uc2l2ZSBpbWFnZXMuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5Vc2FnZTwvaDI+XG4gICAgICA8Q29kZWJsb2NrPlxue2BucG0gaW5zdGFsbCByZWFjdC11aWtpdC1pbWcgLS1zYXZlO1xuXG4vLyBFUzZcbmltcG9ydCBJbWcgZnJvbSAncmVhY3QtdWlraXQtaW1nJztcblxuLy8gRVM1XG52YXIgSW1nID0gcmVxdWlyZSgncmVhY3QtdWlraXQtaW1nJyk7XG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgICA8SW1nIHdpZHRoPSczMDBweCcgaGVpZ2h0PScyMDBweCcgc3JjPSdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJyAvPlxuXG4gICAgICA8aDQgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oND5cbiAgICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue1xuYDxJbWcgd2lkdGg9JzMwMHB4JyBoZWlnaHQ9JzIwMHB4JyBzcmM9J2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnIC8+XG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24+XG5cbiAgICA8aDI+UmVzcG9uc2l2ZSBpbWFnZTwvaDI+XG4gICAgPHA+XG4gICAgICBUaGUgSW1hZ2UgY29tcG9uZW50IHByb3ZpZGVzIGRpZmZlcmVudCBpbWFnZXMgZm9yIHZhcmlvdXNcbiAgICAgIHZpZXdwb3J0IHdpZHRocy4gVG8gZW5hYmxlIHJlc3BvbnNpdmUgYmVoYXZpb3IgYnkgYWRkaW5nIG9uZSBvclxuICAgICAgIGFsbCBvZiB0aGUgcmVzcG9uc2l2ZSBwcm9wcyA8Y29kZT5zbWFsbDwvY29kZT4sIDxjb2RlPm1lZGl1bTwvY29kZT4gPGNvZGU+bGFyZ2U8L2NvZGU+IDxjb2RlPnhsYXJnZTwvY29kZT4uXG4gICAgPC9wPlxuXG4gICAgPHA+XG4gICAgICBFYWNoIHJlc3BvbnNpdmUgc2l6ZSB0YWtlcyBhIEpTT04gb2JqZWN0LlxuICAgIDwvcD5cblxuICAgIDxUYWJsZT5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+SlNPTiBrZXk8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+RGVzY3JpdGlvbjwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz53aWR0aDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5UaGUgd2lkdGggb2YgdGhlIGltYWdlLiBUaGUgZGVmdWFsdCB3aWR0aCBpcyAxMDAlIGlmIG5vIHdpZHRoIGlzIHNwZWNpZmllZDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPmhlaWdodDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5UaGUgaGVpZ2h0IG9mIHRoZSBpbWFnZS4gVGhlIGRlZnVhbHQgaGVpZ2h0IGlzIGF1dG8gaWYgbm8gaGVpZ2h0IGlzIHNwZWNpZmllZDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPnNyYzwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5UaGUgc3JjIHVybCBmb3IgdGhlIGltYWdlPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC9UYWJsZT5cblxuICAgIDxwPlxuICAgICAgRm9yIG5vbi1yZXNwb25zaXZlIGltYWdlcyB1c2UgdGhlIGh0bWwgPGNvZGU+aW1nPC9jb2RlPiB0YWcuXG4gICAgPC9wPlxuXG4gICAgPGg0IGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDQ+XG5cbiAgICA8SW1nXG4gICAgICBzbWFsbD17e2hlaWdodDogJzE1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8xLnN2Zyd9IH1cbiAgICAgIG1lZGl1bT17e2hlaWdodDogJzI1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9IH1cbiAgICAgIGxhcmdlPXt7aGVpZ2h0OiAnMzUwcHgnLCBzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzMuc3ZnJ30gfVxuICAgICAgeGxhcmdlPXt7aGVpZ2h0OiAnNDUwcHgnLCBzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzQuc3ZnJ30gfVxuICAgIC8+XG5cblxuICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue1xuYDxJbWdcbiAgc21hbGw9e3toZWlnaHQ6ICcxNTBweCcsIHNyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMS5zdmcnfSB9XG4gIG1lZGl1bT17e2hlaWdodDogJzI1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9IH1cbiAgbGFyZ2U9e3toZWlnaHQ6ICczNTBweCcsIHNyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMy5zdmcnfSB9XG4gIHhsYXJnZT17e2hlaWdodDogJzQ1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF80LnN2Zyd9IH1cbi8+XG5gfVxuICAgIDwvQ29kZWJsb2NrPlxuICA8L3NlY3Rpb24+XG5cblxuICA8c2VjdGlvbj5cbiAgICA8aDE+Q292ZXIgaW1hZ2VzPC9oMT5cbiAgICA8cD5cbiAgICAgIFRoZSA8Y29kZT5jb3ZlcjwvY29kZT4gY29tcG9uZW50IGFsbG93cyB5b3UgdG8gY3JlYXRlIGZ1bGxzY3JlZW4gdGVhc2VycyB1c2luZyBpbWFnZXMuIEl0IHdpbGwgYWx3YXlzXG4gICAgICBiZSBjZW50ZXJlZCB2ZXJ0aWNhbGx5IGFuZCBob3Jpem9udGFsbHkgYW5kIGNvdmVyIGl0cyBjb250YWluZXIgd2l0aG91dFxuICAgICAgbG9zaW5nIGl0cyBwcm9wb3J0aW9ucy4gWW91IGNhbiBhbHNvIHBsYWNlIGFkZGl0aW9uYWwgY29udGVudCwgbGlrZSB0ZXh0XG4gICAgICBvciBpbWFnZXMgb24gdG9wIG9mIHRoZSBpbWFnZSBieSBwbGFjaW5nIGl0IGluc2lkZSBvZiB0aGUgPGNvZGU+Jmx0O0ltYWdlJmd0OzwvY29kZT4gY29tcG9uZW50LlxuICAgIDwvcD5cblxuXG4gICAgPGg0IGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDQ+XG5cbiAgICA8SW1nIGNvdmVyXG4gICAgICBzbWFsbD17e2hlaWdodDogJzE1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8xLnN2Zyd9IH1cbiAgICAgIG1lZGl1bT17e2hlaWdodDogJzI1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9IH1cbiAgICAgIGxhcmdlPXt7aGVpZ2h0OiAnMzUwcHgnLCBzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzMuc3ZnJ30gfVxuICAgICAgeGxhcmdlPXt7aGVpZ2h0OiAnNDUwcHgnLCBzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzQuc3ZnJ30gfVxuICAgID5cblxuICAgICAgPGgxPkNvdmVyIGltYWdlPC9oMT5cbiAgICA8L0ltZz5cblxuXG4gICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57XG5gPEltZyBjb3ZlclxuICBzbWFsbD17e2hlaWdodDogJzE1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8xLnN2Zyd9IH1cbiAgbWVkaXVtPXt7aGVpZ2h0OiAnMjUwcHgnLCBzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30gfVxuICBsYXJnZT17e2hlaWdodDogJzM1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8zLnN2Zyd9IH1cbiAgeGxhcmdlPXt7aGVpZ2h0OiAnNDUwcHgnLCBzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzQuc3ZnJ30gfVxuPlxuXG4gIDxoMT5Db3ZlciBpbWFnZTwvaDE+XG48L0ltZz5cbmB9XG4gICAgPC9Db2RlYmxvY2s+XG4gIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+SW1nIFByb3BzPC9oMj5cblxuICAgICAgICA8cD5cbiAgICAgICAgICBTZWUgYmFzZSBmb3IgYWRkaXRpb25hbCBwcm9wcy5cbiAgICAgICAgPC9wPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlByb3A8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5UeXBlPC90aD5cblxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICA8Y29kZT5hbHQ8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5zdHJpbmc8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+Y292ZXI8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNvbFNwYW49JzInPkJvb2w8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+aGVpZ2h0PC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+c3RyaW5nPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPmxhcmdlPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+b2JqZWN0PGJyIC8+e2B7d2lkdGgsIGhlaWdodCwgc3JjfWB9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPm1lZGl1bTwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPm9iamVjdDxiciAvPntge3dpZHRoLCBoZWlnaHQsIHNyY31gfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICA8Y29kZT5zbWFsbDwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPm9iamVjdDxiciAvPntge3dpZHRoLCBoZWlnaHQsIHNyY31gfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICA8Y29kZT5zcmM8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5zdHJpbmc8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+d2lkdGg8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5zdHJpbmc8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+eGxhcmdlPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+b2JqZWN0PGJyIC8+e2B7d2lkdGgsIGhlaWdodCwgc3JjfWB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8L3NlY3Rpb24+XG5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbWdEb2M7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2ltZy1kb2MuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})