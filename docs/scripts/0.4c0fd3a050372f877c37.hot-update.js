webpackHotUpdate(0,{

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitCodeblock = __webpack_require__(16);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitImgGallery = __webpack_require__(392);\n\nvar _reactUikitImgGallery2 = _interopRequireDefault(_reactUikitImgGallery);\n\nvar _reactUikitTable = __webpack_require__(17);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ImgGalleryDoc = function ImgGalleryDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Img Gallery'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Create galery of imiages.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-img-gallery --save;\\n\\n// ES6\\nimport ImgGallery from \\'react-uikit-img-gallery\\';\\n\\n// ES5\\nvar ImgGallery = require(\\'react-uikit-img-gallery\\');\\n'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImgGallery2.default, {\n        items: [{ src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }]\n      }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<ImgGroup\\nitems={[\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'}\\n]}\\n/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Img props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Props can be passed to the image by adding ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'props'\n        ),\n        ' property to to an item.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImgGallery2.default, {\n        items: [{ src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }]\n      }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<ImgGroup\\nitems={[\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}}\\n]}\\n/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Img gallery props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See base for additional props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'items'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'array of objects.',\n              _react2.default.createElement('br', null),\n              '{\\n                alt,\\n                src,\\n                height,\\n                large,\\n                medium,\\n                props,\\n                small,\\n                width,\\n                xlarge\\n              }'\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = ImgGalleryDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWctZ2FsbGVyeS1kb2MuanN4P2VjZDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTYixJQUFNLGFBQWEsR0FBRyxTQUFoQixhQUFhLENBQUksS0FBSztTQUMxQjs7O0lBQ0U7OztNQUNFOzs7O09BQW9CO01BQ3BCOztVQUFHLFNBQVMsRUFBQyxpQkFBaUI7O09BRTFCO0tBQ0k7SUFHVjs7O01BQ0E7Ozs7T0FBYztNQUNsQjs7OztPQVNZO01BRVI7O1VBQUksU0FBUyxFQUFDLFNBQVM7O09BQWE7TUFDcEM7QUFDRSxhQUFLLEVBQUUsQ0FDTCxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxDQUM5QztRQUNGO01BR0Y7O1VBQUksU0FBUyxFQUFDLE1BQU07O09BQVU7TUFDOUI7O1VBQVcsTUFBTSxFQUFDLEtBQUs7O09BYVg7S0FDSjtJQUdWOzs7TUFDRTs7OztPQUFrQjtNQUNsQjs7OztRQUM2Qzs7OztTQUFrQjs7T0FDM0Q7TUFDSjs7VUFBSSxTQUFTLEVBQUMsU0FBUzs7T0FBYTtNQUNwQztBQUNFLGFBQUssRUFBRSxDQUNMLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUMsRUFBQyxFQUMvRSxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDLEVBQUMsRUFDL0UsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUFDLEVBQy9FLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUMsRUFBQyxFQUMvRSxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDLEVBQUMsRUFDL0UsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUFDLENBQy9FO1FBQ0Y7TUFHRjs7VUFBSSxTQUFTLEVBQUMsTUFBTTs7T0FBVTtNQUM5Qjs7VUFBVyxNQUFNLEVBQUMsS0FBSzs7T0FhWDtLQUNKO0lBR1I7OztNQUNFOzs7O09BQTBCO01BRTFCOzs7O09BRUk7TUFFSjs7O1FBQ0U7OztVQUNFOzs7WUFDRTs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVU7WUFDdEM7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUFVO1dBQ25DO1NBQ0M7UUFDUjs7O1VBQ0U7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYztjQUMxQjs7OztlQUFrQjthQUNmO1lBQ0w7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOztjQUNULHlDQUFLOzthQVluQjtXQUNGO1NBQ0M7T0FDRjtLQUNBO0dBRU47Q0FDUCxDQUFDOztrQkFFYSxhQUFhIiwiZmlsZSI6IjMwMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvZGVibG9jayBmcm9tICdyZWFjdC11aWtpdC1jb2RlYmxvY2snO1xuaW1wb3J0IEltZ0dyb3VwIGZyb20gJ3JlYWN0LXVpa2l0LWltZy1nYWxsZXJ5JztcbmltcG9ydCBUYWJsZSBmcm9tICdyZWFjdC11aWtpdC10YWJsZSc7XG5cblxuY29uc3QgSW1nR2FsbGVyeURvYyA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPkltZyBHYWxsZXJ5PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT0ndWstYXJ0aWNsZS1sZWFkJz5cbiAgICAgICAgQ3JlYXRlIGdhbGVyeSBvZiBpbWlhZ2VzLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgPGgyPlVzYWdlPC9oMj5cbjxDb2RlYmxvY2s+XG57YG5wbSBpbnN0YWxsIHJlYWN0LXVpa2l0LWltZy1nYWxsZXJ5IC0tc2F2ZTtcblxuLy8gRVM2XG5pbXBvcnQgSW1nR2FsbGVyeSBmcm9tICdyZWFjdC11aWtpdC1pbWctZ2FsbGVyeSc7XG5cbi8vIEVTNVxudmFyIEltZ0dhbGxlcnkgPSByZXF1aXJlKCdyZWFjdC11aWtpdC1pbWctZ2FsbGVyeScpO1xuYH1cbjwvQ29kZWJsb2NrPlxuXG4gICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgPEltZ0dyb3VwXG4gICAgICBpdGVtcz17W1xuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9XG4gICAgICBdfVxuICAgIC8+XG5cblxuICAgIDxoNCBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2g0PlxuICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue1xuYDxJbWdHcm91cFxuaXRlbXM9e1tcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfVxuXX1cbi8+XG5gfVxuICAgIDwvQ29kZWJsb2NrPlxuICA8L3NlY3Rpb24+XG5cblxuICA8c2VjdGlvbj5cbiAgICA8aDI+SW1nIHByb3BzPC9oMj5cbiAgICA8cD5cbiAgICAgIFByb3BzIGNhbiBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGJ5IGFkZGluZyA8Y29kZT5wcm9wczwvY29kZT4gcHJvcGVydHkgdG8gdG8gYW4gaXRlbS5cbiAgICA8L3A+XG4gICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgPEltZ0dyb3VwXG4gICAgICBpdGVtcz17W1xuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319LFxuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319LFxuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319LFxuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319LFxuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319LFxuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319XG4gICAgICBdfVxuICAgIC8+XG5cblxuICAgIDxoNCBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2g0PlxuICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue1xuYDxJbWdHcm91cFxuaXRlbXM9e1tcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fVxuXX1cbi8+XG5gfVxuICAgIDwvQ29kZWJsb2NrPlxuICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkltZyBnYWxsZXJ5IHByb3BzPC9oMj5cblxuICAgICAgPHA+XG4gICAgICAgIFNlZSBiYXNlIGZvciBhZGRpdGlvbmFsIHByb3BzLlxuICAgICAgPC9wPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlByb3A8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5UeXBlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+aXRlbXM8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgYXJyYXkgb2Ygb2JqZWN0cy48YnIvPlxuICAgICAgICAgICAgICB7YHtcbiAgICAgICAgICAgICAgICBhbHQsXG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICBsYXJnZSxcbiAgICAgICAgICAgICAgICBtZWRpdW0sXG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgc21hbGwsXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgeGxhcmdlXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8L3NlY3Rpb24+XG5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbWdHYWxsZXJ5RG9jO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbWctZ2FsbGVyeS1kb2MuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})