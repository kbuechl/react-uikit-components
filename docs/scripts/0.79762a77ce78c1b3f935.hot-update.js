webpackHotUpdate(0,{

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitCodeblock = __webpack_require__(16);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitImgGallery = __webpack_require__(392);\n\nvar _reactUikitImgGallery2 = _interopRequireDefault(_reactUikitImgGallery);\n\nvar _reactUikitTable = __webpack_require__(17);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ImgGalleryDoc = function ImgGalleryDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Img Gallery'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Create galery of imiages.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-img-gallery --save;\\n\\nES6\\nimport ImgGallery from \\'react-uikit-img-gallery\\';\\nES5\\nvar ImgGallery = require(\\'react-uikit-img-gallery\\')S;\\n'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImgGallery2.default, {\n        items: [{ src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }]\n      }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<ImgGroup\\nitems={[\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'}\\n]}\\n/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Img props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Props can be passed to the image by adding ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'props'\n        ),\n        ' property to to an item.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImgGallery2.default, {\n        items: [{ src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }]\n      }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<ImgGroup\\nitems={[\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}}\\n]}\\n/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Img gallery props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See base for additional props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'items'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'array of objects.',\n              _react2.default.createElement('br', null),\n              '{\\n                alt,\\n                src,\\n                height,\\n                large,\\n                medium,\\n                props,\\n                small,\\n                width,\\n                xlarge\\n              }'\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = ImgGalleryDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWctZ2FsbGVyeS1kb2MuanN4P2VjZDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTYixJQUFNLGFBQWEsR0FBRyxTQUFoQixhQUFhLENBQUksS0FBSztTQUMxQjs7O0lBQ0U7OztNQUNFOzs7O09BQW9CO01BQ3BCOztVQUFHLFNBQVMsRUFBQyxpQkFBaUI7O09BRTFCO0tBQ0k7SUFHVjs7O01BQ0E7Ozs7T0FBYztNQUNsQjs7OztPQVFZO01BRVI7O1VBQUksU0FBUyxFQUFDLFNBQVM7O09BQWE7TUFDcEM7QUFDRSxhQUFLLEVBQUUsQ0FDTCxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxDQUM5QztRQUNGO01BR0Y7O1VBQUksU0FBUyxFQUFDLE1BQU07O09BQVU7TUFDOUI7O1VBQVcsTUFBTSxFQUFDLEtBQUs7O09BYVg7S0FDSjtJQUdWOzs7TUFDRTs7OztPQUFrQjtNQUNsQjs7OztRQUM2Qzs7OztTQUFrQjs7T0FDM0Q7TUFDSjs7VUFBSSxTQUFTLEVBQUMsU0FBUzs7T0FBYTtNQUNwQztBQUNFLGFBQUssRUFBRSxDQUNMLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUMsRUFBQyxFQUMvRSxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDLEVBQUMsRUFDL0UsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUFDLEVBQy9FLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUMsRUFBQyxFQUMvRSxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDLEVBQUMsRUFDL0UsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUFDLENBQy9FO1FBQ0Y7TUFHRjs7VUFBSSxTQUFTLEVBQUMsTUFBTTs7T0FBVTtNQUM5Qjs7VUFBVyxNQUFNLEVBQUMsS0FBSzs7T0FhWDtLQUNKO0lBR1I7OztNQUNFOzs7O09BQTBCO01BRTFCOzs7O09BRUk7TUFFSjs7O1FBQ0U7OztVQUNFOzs7WUFDRTs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVU7WUFDdEM7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUFVO1dBQ25DO1NBQ0M7UUFDUjs7O1VBQ0U7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYztjQUMxQjs7OztlQUFrQjthQUNmO1lBQ0w7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOztjQUNULHlDQUFLOzthQVluQjtXQUNGO1NBQ0M7T0FDRjtLQUNBO0dBRU47Q0FDUCxDQUFDOztrQkFFYSxhQUFhIiwiZmlsZSI6IjMwMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvZGVibG9jayBmcm9tICdyZWFjdC11aWtpdC1jb2RlYmxvY2snO1xuaW1wb3J0IEltZ0dyb3VwIGZyb20gJ3JlYWN0LXVpa2l0LWltZy1nYWxsZXJ5JztcbmltcG9ydCBUYWJsZSBmcm9tICdyZWFjdC11aWtpdC10YWJsZSc7XG5cblxuY29uc3QgSW1nR2FsbGVyeURvYyA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPkltZyBHYWxsZXJ5PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT0ndWstYXJ0aWNsZS1sZWFkJz5cbiAgICAgICAgQ3JlYXRlIGdhbGVyeSBvZiBpbWlhZ2VzLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgPGgyPlVzYWdlPC9oMj5cbjxDb2RlYmxvY2s+XG57YG5wbSBpbnN0YWxsIHJlYWN0LXVpa2l0LWltZy1nYWxsZXJ5IC0tc2F2ZTtcblxuRVM2XG5pbXBvcnQgSW1nR2FsbGVyeSBmcm9tICdyZWFjdC11aWtpdC1pbWctZ2FsbGVyeSc7XG5FUzVcbnZhciBJbWdHYWxsZXJ5ID0gcmVxdWlyZSgncmVhY3QtdWlraXQtaW1nLWdhbGxlcnknKVM7XG5gfVxuPC9Db2RlYmxvY2s+XG5cbiAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICA8SW1nR3JvdXBcbiAgICAgIGl0ZW1zPXtbXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ31cbiAgICAgIF19XG4gICAgLz5cblxuXG4gICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57XG5gPEltZ0dyb3VwXG5pdGVtcz17W1xuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9XG5dfVxuLz5cbmB9XG4gICAgPC9Db2RlYmxvY2s+XG4gIDwvc2VjdGlvbj5cblxuXG4gIDxzZWN0aW9uPlxuICAgIDxoMj5JbWcgcHJvcHM8L2gyPlxuICAgIDxwPlxuICAgICAgUHJvcHMgY2FuIGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgYnkgYWRkaW5nIDxjb2RlPnByb3BzPC9jb2RlPiBwcm9wZXJ0eSB0byB0byBhbiBpdGVtLlxuICAgIDwvcD5cbiAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICA8SW1nR3JvdXBcbiAgICAgIGl0ZW1zPXtbXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX1cbiAgICAgIF19XG4gICAgLz5cblxuXG4gICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57XG5gPEltZ0dyb3VwXG5pdGVtcz17W1xuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319XG5dfVxuLz5cbmB9XG4gICAgPC9Db2RlYmxvY2s+XG4gIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+SW1nIGdhbGxlcnkgcHJvcHM8L2gyPlxuXG4gICAgICA8cD5cbiAgICAgICAgU2VlIGJhc2UgZm9yIGFkZGl0aW9uYWwgcHJvcHMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxUYWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+UHJvcDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlR5cGU8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICA8Y29kZT5pdGVtczwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICBhcnJheSBvZiBvYmplY3RzLjxici8+XG4gICAgICAgICAgICAgIHtge1xuICAgICAgICAgICAgICAgIGFsdCxcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGxhcmdlLFxuICAgICAgICAgICAgICAgIG1lZGl1bSxcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBzbWFsbCxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICB4bGFyZ2VcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvc2VjdGlvbj5cblxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltZ0dhbGxlcnlEb2M7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2ltZy1nYWxsZXJ5LWRvYy5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})