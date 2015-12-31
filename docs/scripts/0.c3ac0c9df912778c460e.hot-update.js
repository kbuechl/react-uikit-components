webpackHotUpdate(0,{

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitCodeblock = __webpack_require__(16);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitImgGallery = __webpack_require__(392);\n\nvar _reactUikitImgGallery2 = _interopRequireDefault(_reactUikitImgGallery);\n\nvar _reactUikitTable = __webpack_require__(17);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ImgGalleryDoc = function ImgGalleryDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Img Gallery'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Create galery of imiages.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-img-gallery --save;\\n\\nES6\\nimport ImgGallery from \\'react-uikit-img-gallery\\';\\n\\nES5\\nvar ImgGallery = require&#40;\\'react-uikit-img-gallery\\'&#41;;\\n'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImgGallery2.default, {\n        items: [{ src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }]\n      }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<ImgGroup\\nitems={[\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'}\\n]}\\n/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Img props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Props can be passed to the image by adding ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'props'\n        ),\n        ' property to to an item.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImgGallery2.default, {\n        items: [{ src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }]\n      }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<ImgGroup\\nitems={[\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}}\\n]}\\n/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Img gallery props'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'items'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'array of objects.',\n              _react2.default.createElement('br', null),\n              '{\\n                alt,\\n                src,\\n                height,\\n                large,\\n                medium,\\n                props,\\n                small,\\n                width,\\n                xlarge\\n              }'\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = ImgGalleryDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWctZ2FsbGVyeS1kb2MuanN4P2VjZDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTYixJQUFNLGFBQWEsR0FBRyxTQUFoQixhQUFhLENBQUksS0FBSztTQUMxQjs7O0lBQ0U7OztNQUNFOzs7O09BQW9CO01BQ3BCOztVQUFHLFNBQVMsRUFBQyxpQkFBaUI7O09BRTFCO0tBQ0k7SUFHVjs7O01BQ0E7Ozs7T0FBYztNQUNsQjs7OztPQVNZO01BRVI7O1VBQUksU0FBUyxFQUFDLFNBQVM7O09BQWE7TUFDcEM7QUFDRSxhQUFLLEVBQUUsQ0FDTCxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxDQUM5QztRQUNGO01BR0Y7O1VBQUksU0FBUyxFQUFDLE1BQU07O09BQVU7TUFDOUI7O1VBQVcsTUFBTSxFQUFDLEtBQUs7O09BYVg7S0FDSjtJQUdWOzs7TUFDRTs7OztPQUFrQjtNQUNsQjs7OztRQUM2Qzs7OztTQUFrQjs7T0FDM0Q7TUFDSjs7VUFBSSxTQUFTLEVBQUMsU0FBUzs7T0FBYTtNQUNwQztBQUNFLGFBQUssRUFBRSxDQUNMLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUMsRUFBQyxFQUMvRSxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDLEVBQUMsRUFDL0UsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUFDLEVBQy9FLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUMsRUFBQyxFQUMvRSxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDLEVBQUMsRUFDL0UsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUFDLENBQy9FO1FBQ0Y7TUFHRjs7VUFBSSxTQUFTLEVBQUMsTUFBTTs7T0FBVTtNQUM5Qjs7VUFBVyxNQUFNLEVBQUMsS0FBSzs7T0FhWDtLQUNKO0lBR1I7OztNQUNFOzs7O09BQTBCO01BRTFCOzs7UUFDRTs7O1VBQ0U7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7YUFBVTtZQUN0Qzs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVU7V0FDbkM7U0FDQztRQUNSOzs7VUFDRTs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjO2NBQzFCOzs7O2VBQWtCO2FBQ2Y7WUFDTDs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2NBQ1QseUNBQUs7O2FBWW5CO1dBQ0Y7U0FDQztPQUNGO0tBQ0E7R0FFTjtDQUNQLENBQUM7O2tCQUVhLGFBQWEiLCJmaWxlIjoiMzAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29kZWJsb2NrIGZyb20gJ3JlYWN0LXVpa2l0LWNvZGVibG9jayc7XG5pbXBvcnQgSW1nR3JvdXAgZnJvbSAncmVhY3QtdWlraXQtaW1nLWdhbGxlcnknO1xuaW1wb3J0IFRhYmxlIGZyb20gJ3JlYWN0LXVpa2l0LXRhYmxlJztcblxuXG5jb25zdCBJbWdHYWxsZXJ5RG9jID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDE+SW1nIEdhbGxlcnk8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPSd1ay1hcnRpY2xlLWxlYWQnPlxuICAgICAgICBDcmVhdGUgZ2FsZXJ5IG9mIGltaWFnZXMuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICA8aDI+VXNhZ2U8L2gyPlxuPENvZGVibG9jaz5cbntgbnBtIGluc3RhbGwgcmVhY3QtdWlraXQtaW1nLWdhbGxlcnkgLS1zYXZlO1xuXG5FUzZcbmltcG9ydCBJbWdHYWxsZXJ5IGZyb20gJ3JlYWN0LXVpa2l0LWltZy1nYWxsZXJ5JztcblxuRVM1XG52YXIgSW1nR2FsbGVyeSA9IHJlcXVpcmUmIzQwOydyZWFjdC11aWtpdC1pbWctZ2FsbGVyeScmIzQxOztcbmB9XG48L0NvZGVibG9jaz5cblxuICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgIDxJbWdHcm91cFxuICAgICAgaXRlbXM9e1tcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfVxuICAgICAgXX1cbiAgICAvPlxuXG5cbiAgICA8aDQgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oND5cbiAgICA8Q29kZWJsb2NrIHN5bnRheD0neG1sJz5cbntcbmA8SW1nR3JvdXBcbml0ZW1zPXtbXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ31cbl19XG4vPlxuYH1cbiAgICA8L0NvZGVibG9jaz5cbiAgPC9zZWN0aW9uPlxuXG5cbiAgPHNlY3Rpb24+XG4gICAgPGgyPkltZyBwcm9wczwvaDI+XG4gICAgPHA+XG4gICAgICBQcm9wcyBjYW4gYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBieSBhZGRpbmcgPGNvZGU+cHJvcHM8L2NvZGU+IHByb3BlcnR5IHRvIHRvIGFuIGl0ZW0uXG4gICAgPC9wPlxuICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgIDxJbWdHcm91cFxuICAgICAgaXRlbXM9e1tcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fVxuICAgICAgXX1cbiAgICAvPlxuXG5cbiAgICA8aDQgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oND5cbiAgICA8Q29kZWJsb2NrIHN5bnRheD0neG1sJz5cbntcbmA8SW1nR3JvdXBcbml0ZW1zPXtbXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX1cbl19XG4vPlxuYH1cbiAgICA8L0NvZGVibG9jaz5cbiAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5JbWcgZ2FsbGVyeSBwcm9wczwvaDI+XG5cbiAgICAgIDxUYWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+UHJvcDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlR5cGU8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICA8Y29kZT5pdGVtczwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICBhcnJheSBvZiBvYmplY3RzLjxici8+XG4gICAgICAgICAgICAgIHtge1xuICAgICAgICAgICAgICAgIGFsdCxcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGxhcmdlLFxuICAgICAgICAgICAgICAgIG1lZGl1bSxcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBzbWFsbCxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICB4bGFyZ2VcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvc2VjdGlvbj5cblxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltZ0dhbGxlcnlEb2M7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2ltZy1nYWxsZXJ5LWRvYy5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})