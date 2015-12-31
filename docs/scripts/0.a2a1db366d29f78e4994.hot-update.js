webpackHotUpdate(0,{

/***/ 3485:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitCodeblock = __webpack_require__(131);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitImgGallery = __webpack_require__(3464);\n\nvar _reactUikitImgGallery2 = _interopRequireDefault(_reactUikitImgGallery);\n\nvar _reactUikitTable = __webpack_require__(179);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ImgGalleryDoc = function ImgGalleryDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Img Gallery'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Create gallery of images.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'a',\n          { href: 'https://github.com/otissv/react-uikit-img-gallery' },\n          'react-uikit-img-gallery'\n        ),\n        ' on github.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-img-gallery --save;\\n\\n// ES6\\nimport ImgGallery from \\'react-uikit-img-gallery\\';\\n\\n// ES5\\nvar ImgGallery = require(\\'react-uikit-img-gallery\\');\\n'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImgGallery2.default, {\n        margin: 'bottom',\n        items: [{ src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }]\n      }),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Image gallery with margins.'\n      ),\n      _react2.default.createElement(_reactUikitImgGallery2.default, {\n        items: [{ src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }]\n      }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<ImgGroup\\nitems={[\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'}\\n]}\\n/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Img gallery items'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Props can be passed to the image by adding ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'props'\n        ),\n        ' property to to an item.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImgGallery2.default, {\n        items: [{ src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }]\n      }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<ImgGroup\\n  items={[\\n    {src: \\'docs/images/placeholder_200x150_2.svg\\', margin: \\'bottom right\\'},\\n    {src: \\'docs/images/placeholder_200x150_2.svg\\', margin: \\'bottom right\\'},\\n    {src: \\'docs/images/placeholder_200x150_2.svg\\', margin: \\'bottom right\\'},\\n    {src: \\'docs/images/placeholder_200x150_2.svg\\', margin: \\'bottom right\\'},\\n    {src: \\'docs/images/placeholder_200x150_2.svg\\', margin: \\'bottom right\\'},\\n    {src: \\'docs/images/placeholder_200x150_2.svg\\', margin: \\'bottom right\\'}\\n  ]}\\n/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Img gallery props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See base component for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'items'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'array of objects.',\n              _react2.default.createElement('br', null),\n              'See Img componet for props.'\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = ImgGalleryDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWctZ2FsbGVyeS1kb2MuanN4P2VjZDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTYixJQUFNLGFBQWEsR0FBRyxTQUFoQixhQUFhLENBQUksS0FBSztTQUMxQjs7O0lBQ0U7OztNQUNFOzs7O09BQW9CO01BQ3BCOztVQUFHLFNBQVMsRUFBQyxpQkFBaUI7O09BRTFCO01BRUo7OztRQUNFOztZQUFHLElBQUksRUFBQyxtREFBbUQ7O1NBQTRCOztPQUNyRjtLQUNJO0lBR1Y7OztNQUNBOzs7O09BQWM7TUFDbEI7Ozs7T0FTZ0I7TUFFWjs7VUFBSSxTQUFTLEVBQUMsU0FBUzs7T0FBYTtNQUNwQztBQUNFLGNBQU0sRUFBQyxRQUFRO0FBQ2YsYUFBSyxFQUFFLENBQ0wsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsRUFDOUMsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsRUFDOUMsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsRUFDOUMsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsRUFDOUMsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsRUFDOUMsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsQ0FDOUM7UUFDRjtNQUVGOzs7O09BRUk7TUFDSjtBQUNFLGFBQUssRUFBRSxDQUNMLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUMsRUFDdEUsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUN0RSxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFDLEVBQ3RFLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUMsRUFDdEUsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUN0RSxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFDLENBQ3RFO1FBQ0Y7TUFHRjs7VUFBSSxTQUFTLEVBQUMsTUFBTTs7T0FBVTtNQUM5Qjs7VUFBVyxNQUFNLEVBQUMsS0FBSzs7T0FhWDtLQUNKO0lBR1Y7OztNQUNFOzs7O09BQTBCO01BQzFCOzs7O1FBQzZDOzs7O1NBQWtCOztPQUMzRDtNQUNKOztVQUFJLFNBQVMsRUFBQyxTQUFTOztPQUFhO01BQ3BDO0FBQ0UsYUFBSyxFQUFFLENBQ0wsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUN0RSxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFDLEVBQ3RFLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUMsRUFDdEUsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUN0RSxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFDLEVBQ3RFLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUMsQ0FDdEU7UUFDRjtNQUdGOztVQUFJLFNBQVMsRUFBQyxNQUFNOztPQUFVO01BQzlCOztVQUFXLE1BQU0sRUFBQyxLQUFLOztPQWFYO0tBQ0o7SUFHUjs7O01BQ0U7Ozs7T0FBMEI7TUFFMUI7Ozs7T0FFSTtNQUVKOzs7UUFDRTs7O1VBQ0U7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7YUFBVTtZQUN0Qzs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVU7V0FDbkM7U0FDQztRQUNSOzs7VUFDRTs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjO2NBQzFCOzs7O2VBQWtCO2FBQ2Y7WUFDTDs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2NBQ1QseUNBQUs7O2FBRW5CO1dBQ0Y7U0FDQztPQUNGO0tBQ0E7R0FFTjtDQUNQLENBQUM7O2tCQUVhLGFBQWEiLCJmaWxlIjoiMzQ4NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvZGVibG9jayBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWNvZGVibG9jayc7XG5pbXBvcnQgSW1nR3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1pbWctZ2FsbGVyeSc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZSc7XG5cblxuY29uc3QgSW1nR2FsbGVyeURvYyA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPkltZyBHYWxsZXJ5PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT0ndWstYXJ0aWNsZS1sZWFkJz5cbiAgICAgICAgQ3JlYXRlIGdhbGxlcnkgb2YgaW1hZ2VzLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL290aXNzdi9yZWFjdC11aWtpdC1pbWctZ2FsbGVyeSc+cmVhY3QtdWlraXQtaW1nLWdhbGxlcnk8L2E+IG9uIGdpdGh1Yi5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgIDxoMj5Vc2FnZTwvaDI+XG48Q29kZWJsb2NrPlxue2BucG0gaW5zdGFsbCByZWFjdC11aWtpdC1pbWctZ2FsbGVyeSAtLXNhdmU7XG5cbi8vIEVTNlxuaW1wb3J0IEltZ0dhbGxlcnkgZnJvbSAncmVhY3QtdWlraXQtaW1nLWdhbGxlcnknO1xuXG4vLyBFUzVcbnZhciBJbWdHYWxsZXJ5ID0gcmVxdWlyZSgncmVhY3QtdWlraXQtaW1nLWdhbGxlcnknKTtcbmB9XG4gICAgPC9Db2RlYmxvY2s+XG5cbiAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICA8SW1nR3JvdXBcbiAgICAgIG1hcmdpbj0nYm90dG9tJ1xuICAgICAgaXRlbXM9e1tcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfVxuICAgICAgXX1cbiAgICAvPlxuXG4gICAgPHA+XG4gICAgICBJbWFnZSBnYWxsZXJ5IHdpdGggbWFyZ2lucy5cbiAgICA8L3A+XG4gICAgPEltZ0dyb3VwXG4gICAgICBpdGVtcz17W1xuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIG1hcmdpbjogJ2JvdHRvbSByaWdodCd9LFxuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIG1hcmdpbjogJ2JvdHRvbSByaWdodCd9LFxuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIG1hcmdpbjogJ2JvdHRvbSByaWdodCd9LFxuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIG1hcmdpbjogJ2JvdHRvbSByaWdodCd9LFxuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIG1hcmdpbjogJ2JvdHRvbSByaWdodCd9LFxuICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIG1hcmdpbjogJ2JvdHRvbSByaWdodCd9XG4gICAgICBdfVxuICAgIC8+XG5cblxuICAgIDxoNCBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2g0PlxuICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue1xuYDxJbWdHcm91cFxuaXRlbXM9e1tcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfVxuXX1cbi8+XG5gfVxuICAgIDwvQ29kZWJsb2NrPlxuICA8L3NlY3Rpb24+XG5cblxuICA8c2VjdGlvbj5cbiAgICA8aDI+SW1nIGdhbGxlcnkgaXRlbXM8L2gyPlxuICAgIDxwPlxuICAgICAgUHJvcHMgY2FuIGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgYnkgYWRkaW5nIDxjb2RlPnByb3BzPC9jb2RlPiBwcm9wZXJ0eSB0byB0byBhbiBpdGVtLlxuICAgIDwvcD5cbiAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICA8SW1nR3JvdXBcbiAgICAgIGl0ZW1zPXtbXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J31cbiAgICAgIF19XG4gICAgLz5cblxuXG4gICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57XG5gPEltZ0dyb3VwXG4gIGl0ZW1zPXtbXG4gICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBtYXJnaW46ICdib3R0b20gcmlnaHQnfSxcbiAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIG1hcmdpbjogJ2JvdHRvbSByaWdodCd9LFxuICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J30sXG4gICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBtYXJnaW46ICdib3R0b20gcmlnaHQnfSxcbiAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIG1hcmdpbjogJ2JvdHRvbSByaWdodCd9LFxuICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J31cbiAgXX1cbi8+XG5gfVxuICAgIDwvQ29kZWJsb2NrPlxuICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkltZyBnYWxsZXJ5IHByb3BzPC9oMj5cblxuICAgICAgPHA+XG4gICAgICBTZWUgYmFzZSBjb21wb25lbnQgZm9yIGFkZGl0aW9uYWwgdXRpbGl0eSBwcm9wcy5cbiAgICAgIDwvcD5cblxuICAgICAgPFRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5Qcm9wPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+VHlwZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPml0ZW1zPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIGFycmF5IG9mIG9iamVjdHMuPGJyLz5cbiAgICAgICAgICAgICAgU2VlIEltZyBjb21wb25ldCBmb3IgcHJvcHMuXG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvc2VjdGlvbj5cblxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltZ0dhbGxlcnlEb2M7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2ltZy1nYWxsZXJ5LWRvYy5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})