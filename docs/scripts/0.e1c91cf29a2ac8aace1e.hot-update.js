webpackHotUpdate(0,{

/***/ 3485:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitCodeblock = __webpack_require__(131);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitImgGallery = __webpack_require__(3464);\n\nvar _reactUikitImgGallery2 = _interopRequireDefault(_reactUikitImgGallery);\n\nvar _reactUikitTable = __webpack_require__(179);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nvar _reactUikitGrid = __webpack_require__(3463);\n\nvar _reactUikitGrid2 = _interopRequireDefault(_reactUikitGrid);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ImgGalleryDoc = function ImgGalleryDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Img Gallery'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Create gallery of images.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'a',\n          { href: 'https://github.com/otissv/react-uikit-img-gallery' },\n          'react-uikit-img-gallery'\n        ),\n        ' on github.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-img-gallery --save;\\n\\n// ES6\\nimport ImgGallery from \\'react-uikit-img-gallery\\';\\n\\n// ES5\\nvar ImgGallery = require(\\'react-uikit-img-gallery\\');\\n'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitGrid2.default,\n        { col: '1-1' },\n        _react2.default.createElement(_reactUikitImgGallery2.default, {\n          items: [{ src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }]\n        })\n      ),\n      _react2.default.createElement(\n        _reactUikitGrid2.default,\n        null,\n        _react2.default.createElement(_reactUikitImgGallery2.default, {\n          items: [{ src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }]\n        })\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<ImgGroup\\nitems={[\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'}\\n]}\\n/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Img gallery items'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Props can be passed to the image by adding ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'props'\n        ),\n        ' property to to an item.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImgGallery2.default, {\n        items: [{ src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }]\n      }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<ImgGroup\\n  items={[\\n    {src: \\'docs/images/placeholder_200x150_2.svg\\', margin: \\'bottom right\\'},\\n    {src: \\'docs/images/placeholder_200x150_2.svg\\', margin: \\'bottom right\\'},\\n    {src: \\'docs/images/placeholder_200x150_2.svg\\', margin: \\'bottom right\\'},\\n    {src: \\'docs/images/placeholder_200x150_2.svg\\', margin: \\'bottom right\\'},\\n    {src: \\'docs/images/placeholder_200x150_2.svg\\', margin: \\'bottom right\\'},\\n    {src: \\'docs/images/placeholder_200x150_2.svg\\', margin: \\'bottom right\\'}\\n  ]}\\n/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Img gallery props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See base component for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'items'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'array of objects.',\n              _react2.default.createElement('br', null),\n              'See Img componet for props.'\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = ImgGalleryDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWctZ2FsbGVyeS1kb2MuanN4P2VjZDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWIsSUFBTSxhQUFhLEdBQUcsU0FBaEIsYUFBYSxDQUFJLEtBQUs7U0FDMUI7OztJQUNFOzs7TUFDRTs7OztPQUFvQjtNQUNwQjs7VUFBRyxTQUFTLEVBQUMsaUJBQWlCOztPQUUxQjtNQUVKOzs7UUFDRTs7WUFBRyxJQUFJLEVBQUMsbURBQW1EOztTQUE0Qjs7T0FDckY7S0FDSTtJQUdWOzs7TUFDQTs7OztPQUFjO01BQ2xCOzs7O09BU1k7TUFFUjs7VUFBSSxTQUFTLEVBQUMsU0FBUzs7T0FBYTtNQUNwQzs7VUFBTSxHQUFHLEVBQUMsS0FBSztRQUNiO0FBQ0UsZUFBSyxFQUFFLENBQ0wsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsRUFDOUMsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsRUFDOUMsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsRUFDOUMsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsRUFDOUMsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsRUFDOUMsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsQ0FDOUM7VUFDRjtPQUNHO01BRVA7OztRQUNFO0FBQ0UsZUFBSyxFQUFFLENBQ0wsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUN0RSxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFDLEVBQ3RFLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUMsRUFDdEUsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUN0RSxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFDLEVBQ3RFLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUMsQ0FDdEU7VUFDRjtPQUNHO01BR1A7O1VBQUksU0FBUyxFQUFDLE1BQU07O09BQVU7TUFDOUI7O1VBQVcsTUFBTSxFQUFDLEtBQUs7O09BYVg7S0FDSjtJQUdWOzs7TUFDRTs7OztPQUEwQjtNQUMxQjs7OztRQUM2Qzs7OztTQUFrQjs7T0FDM0Q7TUFDSjs7VUFBSSxTQUFTLEVBQUMsU0FBUzs7T0FBYTtNQUNwQztBQUNFLGFBQUssRUFBRSxDQUNMLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUMsRUFDdEUsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUN0RSxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFDLEVBQ3RFLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUMsRUFDdEUsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUN0RSxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFDLENBQ3RFO1FBQ0Y7TUFHRjs7VUFBSSxTQUFTLEVBQUMsTUFBTTs7T0FBVTtNQUM5Qjs7VUFBVyxNQUFNLEVBQUMsS0FBSzs7T0FhWDtLQUNKO0lBR1I7OztNQUNFOzs7O09BQTBCO01BRTFCOzs7O09BRUk7TUFFSjs7O1FBQ0U7OztVQUNFOzs7WUFDRTs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVU7WUFDdEM7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUFVO1dBQ25DO1NBQ0M7UUFDUjs7O1VBQ0U7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYztjQUMxQjs7OztlQUFrQjthQUNmO1lBQ0w7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOztjQUNULHlDQUFLOzthQUVuQjtXQUNGO1NBQ0M7T0FDRjtLQUNBO0dBRU47Q0FDUCxDQUFDOztrQkFFYSxhQUFhIiwiZmlsZSI6IjM0ODUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb2RlYmxvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1jb2RlYmxvY2snO1xuaW1wb3J0IEltZ0dyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtaW1nLWdhbGxlcnknO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtdGFibGUnO1xuaW1wb3J0IEdyaWQgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1ncmlkJztcblxuXG5jb25zdCBJbWdHYWxsZXJ5RG9jID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDE+SW1nIEdhbGxlcnk8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPSd1ay1hcnRpY2xlLWxlYWQnPlxuICAgICAgICBDcmVhdGUgZ2FsbGVyeSBvZiBpbWFnZXMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vb3Rpc3N2L3JlYWN0LXVpa2l0LWltZy1nYWxsZXJ5Jz5yZWFjdC11aWtpdC1pbWctZ2FsbGVyeTwvYT4gb24gZ2l0aHViLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgPGgyPlVzYWdlPC9oMj5cbjxDb2RlYmxvY2s+XG57YG5wbSBpbnN0YWxsIHJlYWN0LXVpa2l0LWltZy1nYWxsZXJ5IC0tc2F2ZTtcblxuLy8gRVM2XG5pbXBvcnQgSW1nR2FsbGVyeSBmcm9tICdyZWFjdC11aWtpdC1pbWctZ2FsbGVyeSc7XG5cbi8vIEVTNVxudmFyIEltZ0dhbGxlcnkgPSByZXF1aXJlKCdyZWFjdC11aWtpdC1pbWctZ2FsbGVyeScpO1xuYH1cbjwvQ29kZWJsb2NrPlxuXG4gICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgPEdyaWQgY29sPScxLTEnPlxuICAgICAgPEltZ0dyb3VwXG4gICAgICAgIGl0ZW1zPXtbXG4gICAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAgICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICAgICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gICAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAgICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICAgICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ31cbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgPC9HcmlkPlxuXG4gICAgPEdyaWQ+XG4gICAgICA8SW1nR3JvdXBcbiAgICAgICAgaXRlbXM9e1tcbiAgICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIG1hcmdpbjogJ2JvdHRvbSByaWdodCd9LFxuICAgICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J30sXG4gICAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBtYXJnaW46ICdib3R0b20gcmlnaHQnfSxcbiAgICAgICAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIG1hcmdpbjogJ2JvdHRvbSByaWdodCd9LFxuICAgICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J30sXG4gICAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBtYXJnaW46ICdib3R0b20gcmlnaHQnfVxuICAgICAgICBdfVxuICAgICAgLz5cbiAgICA8L0dyaWQ+XG5cblxuICAgIDxoNCBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2g0PlxuICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue1xuYDxJbWdHcm91cFxuaXRlbXM9e1tcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSxcbiAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfVxuXX1cbi8+XG5gfVxuICAgIDwvQ29kZWJsb2NrPlxuICA8L3NlY3Rpb24+XG5cblxuICA8c2VjdGlvbj5cbiAgICA8aDI+SW1nIGdhbGxlcnkgaXRlbXM8L2gyPlxuICAgIDxwPlxuICAgICAgUHJvcHMgY2FuIGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgYnkgYWRkaW5nIDxjb2RlPnByb3BzPC9jb2RlPiBwcm9wZXJ0eSB0byB0byBhbiBpdGVtLlxuICAgIDwvcD5cbiAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICA8SW1nR3JvdXBcbiAgICAgIGl0ZW1zPXtbXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J31cbiAgICAgIF19XG4gICAgLz5cblxuXG4gICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57XG5gPEltZ0dyb3VwXG4gIGl0ZW1zPXtbXG4gICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBtYXJnaW46ICdib3R0b20gcmlnaHQnfSxcbiAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIG1hcmdpbjogJ2JvdHRvbSByaWdodCd9LFxuICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J30sXG4gICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBtYXJnaW46ICdib3R0b20gcmlnaHQnfSxcbiAgICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIG1hcmdpbjogJ2JvdHRvbSByaWdodCd9LFxuICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgbWFyZ2luOiAnYm90dG9tIHJpZ2h0J31cbiAgXX1cbi8+XG5gfVxuICAgIDwvQ29kZWJsb2NrPlxuICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkltZyBnYWxsZXJ5IHByb3BzPC9oMj5cblxuICAgICAgPHA+XG4gICAgICBTZWUgYmFzZSBjb21wb25lbnQgZm9yIGFkZGl0aW9uYWwgdXRpbGl0eSBwcm9wcy5cbiAgICAgIDwvcD5cblxuICAgICAgPFRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5Qcm9wPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+VHlwZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPml0ZW1zPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIGFycmF5IG9mIG9iamVjdHMuPGJyLz5cbiAgICAgICAgICAgICAgU2VlIEltZyBjb21wb25ldCBmb3IgcHJvcHMuXG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvc2VjdGlvbj5cblxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltZ0dhbGxlcnlEb2M7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2ltZy1nYWxsZXJ5LWRvYy5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})