webpackHotUpdate(0,{

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(8);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(170);\n\nvar _reactUikitGrid = __webpack_require__(326);\n\nvar _reactUikitGrid2 = _interopRequireDefault(_reactUikitGrid);\n\nvar _nav = __webpack_require__(273);\n\nvar _nav2 = _interopRequireDefault(_nav);\n\nvar _navItem = __webpack_require__(154);\n\nvar _navItem2 = _interopRequireDefault(_navItem);\n\nvar _reactUikitBase = __webpack_require__(42);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _alertDoc = __webpack_require__(274);\n\nvar _alertDoc2 = _interopRequireDefault(_alertDoc);\n\nvar _articleDoc = __webpack_require__(398);\n\nvar _articleDoc2 = _interopRequireDefault(_articleDoc);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import BaseDoc from './base-doc.jsx';\n// import BlockDoc from './block-doc.jsx';\n// import ButtonDoc from './button-doc.jsx';\n// import ButtonGroupDoc from './button-group-doc.jsx';\n// import CodeblockDoc from './codeblock-doc.jsx';\n// import CommentDoc from './comment-doc.jsx';\n// import CommentListDoc from './comment-list-doc.jsx';\n// import FlexDoc from './flex-doc.jsx';\n// import GridDoc from './grid-doc.jsx';\n// import ImgDoc from './img-doc.jsx';\n// import ImgGalleryDoc from './img-gallery-doc.jsx';\n// import ListDoc from './list-doc.jsx';\n// import NoteDoc from './note-doc.jsx';\n// import OverlayDoc from './overlay-doc.jsx';\n// import PanelDoc from './panel-doc.jsx';\n// import TableDoc from './table-doc.jsx';\n// import TextDoc from './text-doc.jsx';\n// import ThumbnailDoc from './thumbnail-doc.jsx';\n\n// Layout Handlers\nvar Main = function Main(props) {\n  return _react2.default.createElement(\n    'div',\n    props,\n    props.children\n  );\n};\n\nMain.propTypes = {\n  children: _react2.default.PropTypes.any\n};\n\nvar Content = _reactUikitBase2.default.base(Main);\n\nvar Layout = function Layout(props) {\n  return _react2.default.createElement(\n    _reactUikitGrid2.default,\n    null,\n    _react2.default.createElement(\n      Content,\n      { col: '4-6' },\n      props.children,\n      'hey'\n    )\n  );\n};\n\nLayout.propTypes = {\n  children: _react2.default.PropTypes.any\n};\n\nvar routes = {\n  path: '/',\n  component: Layout,\n  childRoutes: [{ path: '/alert', component: _alertDoc2.default }, { path: '/article', component: _articleDoc2.default }]\n};\n\n// { path: '/base', component         : BaseDoc },\n// { path: '/badge', component        : BadgeDoc },\n// { path: '/block', component        : BlockDoc },\n// { path: '/button', component       : ButtonDoc },\n// { path: '/button-group', component : ButtonGroupDoc },\n// { path: '/codeblock', component    : CodeblockDoc },\n// { path: '/comment', component      : CommentDoc },\n// { path: '/comment-list', component : CommentListDoc },\n// { path: '/flex', component         : FlexDoc },\n// { path: '/grid', component         : GridDoc },\n// { path: '/img', component          : ImgDoc },\n// { path: '/img-gallery', component  : ImgGalleryDoc },\n// { path: '/list', component         : ListDoc },\n// { path: '/note', component         : NoteDoc },\n// { path: '/overlay', component      : OverlayDoc },\n// { path: '/panel', component        : PanelDoc },\n// { path: '/table', component        : TableDoc },\n// { path: '/text', component         : TextDoc },\n// { path: '/thumbnail', component    : ThumbnailDoc }\nexports.default = routes;\n\n// <Nav col='1-6' type='side'>\n//   <NavItem type='item'><Link to='/alert'>Alert</Link></NavItem>\n//   <NavItem type='item'><Link to='/article'>Article</Link></NavItem>\n//   <NavItem type='item'><Link to='/base'>Base</Link></NavItem>\n//   <NavItem type='item'><Link to='/badge'>Badge</Link></NavItem>\n//   <NavItem type='item'><Link to='/block'>Block</Link></NavItem>\n//   <NavItem type='item'><Link to='/button-group'>Button group</Link></NavItem>\n//   <NavItem type='item'><Link to='/button'>Button</Link></NavItem>\n//   <NavItem type='item'><Link to='/codeblock'>Codeblock</Link></NavItem>\n//   <NavItem type='item'><Link to='/comment'>Comment</Link></NavItem>\n//   <NavItem type='item'><Link to='/comment-list'>Comment list</Link></NavItem>\n//   <NavItem type='item'><Link to='/flex'>Flex</Link></NavItem>\n//   <NavItem type='item'><Link to='/grid'>Grid</Link></NavItem>\n//   <NavItem type='item'><Link to='/img'>Img</Link></NavItem>\n//   <NavItem type='item'><Link to='/img-gallery'>Img gallery</Link></NavItem>\n//   <NavItem type='item'><Link to='/list-group'>List group</Link></NavItem>\n//   <NavItem type='item'><Link to='/modal'>Modal</Link></NavItem>\n//   <NavItem type='item'><Link to='/overlay'>Overlay</Link></NavItem>\n//   <NavItem type='item'><Link to='/nav'>Nav</Link></NavItem>\n//   <NavItem type='item'><Link to='/note'>note</Link></NavItem>\n//   <NavItem type='item'><Link to='/panel'>Panel</Link></NavItem>\n//   <NavItem type='item'><Link to='/table'>Tabl</Link></NavItem>\n//   <NavItem type='item'><Link to='/text'>Text</Link></NavItem>\n//   <NavItem type='item'><Link to='/thumbnail'>Thumbnail</Link></NavItem>\n// </Nav>\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanN4PzlmZGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NiLElBQU0sSUFBSSxHQUFHLFNBQVAsSUFBSSxDQUFJLEtBQUs7U0FDakI7O0lBQVMsS0FBSztJQUNYLEtBQUssQ0FBQyxRQUFRO0dBQ1g7Q0FDUCxDQUFDOztBQUVGLElBQUksQ0FBQyxTQUFTLEdBQUc7QUFDZixVQUFRLEVBQUcsZ0JBQU0sU0FBUyxDQUFDLEdBQUc7Q0FDL0IsQ0FBQzs7QUFFRixJQUFNLE9BQU8sR0FBRyx5QkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRWpDLElBQU0sTUFBTSxHQUFHLFNBQVQsTUFBTSxDQUFJLEtBQUs7U0FDbkI7OztJQUVFO0FBQUMsYUFBTztRQUFDLEdBQUcsRUFBQyxLQUFLO01BQUUsS0FBSyxDQUFDLFFBQVE7O0tBQWM7R0FDM0M7Q0FDUixDQUFDOztBQUVGLE1BQU0sQ0FBQyxTQUFTLEdBQUc7QUFDakIsVUFBUSxFQUFHLGdCQUFNLFNBQVMsQ0FBQyxHQUFHO0NBQy9CLENBQUM7O0FBR0YsSUFBTSxNQUFNLEdBQUc7QUFDYixNQUFJLEVBQUUsR0FBRztBQUNULFdBQVMsRUFBRSxNQUFNO0FBQ2pCLGFBQVcsRUFBRSxDQUNYLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLG9CQUFrQixFQUFFLEVBQy9DLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLHNCQUFrQixFQUFFLENBb0JsRDtDQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFFYSxNQUFNIiwiZmlsZSI6IjI3Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEdyaWQgZnJvbSAncmVhY3QtdWlraXQtZ3JpZCc7XG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtbmF2L3NyYy9uYXYuanN4JztcbmltcG9ydCBOYXZJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtbmF2L3NyYy9uYXYtaXRlbS5qc3gnO1xuaW1wb3J0IHVpa2l0IGZyb20gJ3JlYWN0LXVpa2l0LWJhc2UnO1xuXG4vLyBMYXlvdXQgSGFuZGxlcnNcbmltcG9ydCBBbGVydERvYyBmcm9tICcuL2FsZXJ0LWRvYy5qc3gnO1xuaW1wb3J0IEFydGljbGVEb2MgZnJvbSAnLi9hcnRpY2xlLWRvYy5qc3gnO1xuXG4vLyBpbXBvcnQgQmFzZURvYyBmcm9tICcuL2Jhc2UtZG9jLmpzeCc7XG4vLyBpbXBvcnQgQmxvY2tEb2MgZnJvbSAnLi9ibG9jay1kb2MuanN4Jztcbi8vIGltcG9ydCBCdXR0b25Eb2MgZnJvbSAnLi9idXR0b24tZG9jLmpzeCc7XG4vLyBpbXBvcnQgQnV0dG9uR3JvdXBEb2MgZnJvbSAnLi9idXR0b24tZ3JvdXAtZG9jLmpzeCc7XG4vLyBpbXBvcnQgQ29kZWJsb2NrRG9jIGZyb20gJy4vY29kZWJsb2NrLWRvYy5qc3gnO1xuLy8gaW1wb3J0IENvbW1lbnREb2MgZnJvbSAnLi9jb21tZW50LWRvYy5qc3gnO1xuLy8gaW1wb3J0IENvbW1lbnRMaXN0RG9jIGZyb20gJy4vY29tbWVudC1saXN0LWRvYy5qc3gnO1xuLy8gaW1wb3J0IEZsZXhEb2MgZnJvbSAnLi9mbGV4LWRvYy5qc3gnO1xuLy8gaW1wb3J0IEdyaWREb2MgZnJvbSAnLi9ncmlkLWRvYy5qc3gnO1xuLy8gaW1wb3J0IEltZ0RvYyBmcm9tICcuL2ltZy1kb2MuanN4Jztcbi8vIGltcG9ydCBJbWdHYWxsZXJ5RG9jIGZyb20gJy4vaW1nLWdhbGxlcnktZG9jLmpzeCc7XG4vLyBpbXBvcnQgTGlzdERvYyBmcm9tICcuL2xpc3QtZG9jLmpzeCc7XG4vLyBpbXBvcnQgTm90ZURvYyBmcm9tICcuL25vdGUtZG9jLmpzeCc7XG4vLyBpbXBvcnQgT3ZlcmxheURvYyBmcm9tICcuL292ZXJsYXktZG9jLmpzeCc7XG4vLyBpbXBvcnQgUGFuZWxEb2MgZnJvbSAnLi9wYW5lbC1kb2MuanN4Jztcbi8vIGltcG9ydCBUYWJsZURvYyBmcm9tICcuL3RhYmxlLWRvYy5qc3gnO1xuLy8gaW1wb3J0IFRleHREb2MgZnJvbSAnLi90ZXh0LWRvYy5qc3gnO1xuLy8gaW1wb3J0IFRodW1ibmFpbERvYyBmcm9tICcuL3RodW1ibmFpbC1kb2MuanN4JztcblxuY29uc3QgTWFpbiA9IChwcm9wcykgPT4oXG4gIDxkaXYgey4uLnByb3BzfT5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuTWFpbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuIDogUmVhY3QuUHJvcFR5cGVzLmFueVxufTtcblxuY29uc3QgQ29udGVudCA9IHVpa2l0LmJhc2UoTWFpbik7XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxuICA8R3JpZCA+XG5cbiAgICA8Q29udGVudCBjb2w9JzQtNic+e3Byb3BzLmNoaWxkcmVufWhleTwvQ29udGVudD5cbiAgPC9HcmlkPlxuKTtcblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW4gOiBSZWFjdC5Qcm9wVHlwZXMuYW55XG59O1xuXG5cbmNvbnN0IHJvdXRlcyA9IHtcbiAgcGF0aDogJy8nLFxuICBjb21wb25lbnQ6IExheW91dCxcbiAgY2hpbGRSb3V0ZXM6IFtcbiAgICB7IHBhdGg6ICcvYWxlcnQnLCBjb21wb25lbnQgICAgICAgIDogQWxlcnREb2MgfSxcbiAgICB7IHBhdGg6ICcvYXJ0aWNsZScsIGNvbXBvbmVudCAgICAgIDogQXJ0aWNsZURvYyB9LFxuICAgIC8vIHsgcGF0aDogJy9iYXNlJywgY29tcG9uZW50ICAgICAgICAgOiBCYXNlRG9jIH0sXG4gICAgLy8geyBwYXRoOiAnL2JhZGdlJywgY29tcG9uZW50ICAgICAgICA6IEJhZGdlRG9jIH0sXG4gICAgLy8geyBwYXRoOiAnL2Jsb2NrJywgY29tcG9uZW50ICAgICAgICA6IEJsb2NrRG9jIH0sXG4gICAgLy8geyBwYXRoOiAnL2J1dHRvbicsIGNvbXBvbmVudCAgICAgICA6IEJ1dHRvbkRvYyB9LFxuICAgIC8vIHsgcGF0aDogJy9idXR0b24tZ3JvdXAnLCBjb21wb25lbnQgOiBCdXR0b25Hcm91cERvYyB9LFxuICAgIC8vIHsgcGF0aDogJy9jb2RlYmxvY2snLCBjb21wb25lbnQgICAgOiBDb2RlYmxvY2tEb2MgfSxcbiAgICAvLyB7IHBhdGg6ICcvY29tbWVudCcsIGNvbXBvbmVudCAgICAgIDogQ29tbWVudERvYyB9LFxuICAgIC8vIHsgcGF0aDogJy9jb21tZW50LWxpc3QnLCBjb21wb25lbnQgOiBDb21tZW50TGlzdERvYyB9LFxuICAgIC8vIHsgcGF0aDogJy9mbGV4JywgY29tcG9uZW50ICAgICAgICAgOiBGbGV4RG9jIH0sXG4gICAgLy8geyBwYXRoOiAnL2dyaWQnLCBjb21wb25lbnQgICAgICAgICA6IEdyaWREb2MgfSxcbiAgICAvLyB7IHBhdGg6ICcvaW1nJywgY29tcG9uZW50ICAgICAgICAgIDogSW1nRG9jIH0sXG4gICAgLy8geyBwYXRoOiAnL2ltZy1nYWxsZXJ5JywgY29tcG9uZW50ICA6IEltZ0dhbGxlcnlEb2MgfSxcbiAgICAvLyB7IHBhdGg6ICcvbGlzdCcsIGNvbXBvbmVudCAgICAgICAgIDogTGlzdERvYyB9LFxuICAgIC8vIHsgcGF0aDogJy9ub3RlJywgY29tcG9uZW50ICAgICAgICAgOiBOb3RlRG9jIH0sXG4gICAgLy8geyBwYXRoOiAnL292ZXJsYXknLCBjb21wb25lbnQgICAgICA6IE92ZXJsYXlEb2MgfSxcbiAgICAvLyB7IHBhdGg6ICcvcGFuZWwnLCBjb21wb25lbnQgICAgICAgIDogUGFuZWxEb2MgfSxcbiAgICAvLyB7IHBhdGg6ICcvdGFibGUnLCBjb21wb25lbnQgICAgICAgIDogVGFibGVEb2MgfSxcbiAgICAvLyB7IHBhdGg6ICcvdGV4dCcsIGNvbXBvbmVudCAgICAgICAgIDogVGV4dERvYyB9LFxuICAgIC8vIHsgcGF0aDogJy90aHVtYm5haWwnLCBjb21wb25lbnQgICAgOiBUaHVtYm5haWxEb2MgfVxuICBdXG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG5cblxuLy8gPE5hdiBjb2w9JzEtNicgdHlwZT0nc2lkZSc+XG4vLyAgIDxOYXZJdGVtIHR5cGU9J2l0ZW0nPjxMaW5rIHRvPScvYWxlcnQnPkFsZXJ0PC9MaW5rPjwvTmF2SXRlbT5cbi8vICAgPE5hdkl0ZW0gdHlwZT0naXRlbSc+PExpbmsgdG89Jy9hcnRpY2xlJz5BcnRpY2xlPC9MaW5rPjwvTmF2SXRlbT5cbi8vICAgPE5hdkl0ZW0gdHlwZT0naXRlbSc+PExpbmsgdG89Jy9iYXNlJz5CYXNlPC9MaW5rPjwvTmF2SXRlbT5cbi8vICAgPE5hdkl0ZW0gdHlwZT0naXRlbSc+PExpbmsgdG89Jy9iYWRnZSc+QmFkZ2U8L0xpbms+PC9OYXZJdGVtPlxuLy8gICA8TmF2SXRlbSB0eXBlPSdpdGVtJz48TGluayB0bz0nL2Jsb2NrJz5CbG9jazwvTGluaz48L05hdkl0ZW0+XG4vLyAgIDxOYXZJdGVtIHR5cGU9J2l0ZW0nPjxMaW5rIHRvPScvYnV0dG9uLWdyb3VwJz5CdXR0b24gZ3JvdXA8L0xpbms+PC9OYXZJdGVtPlxuLy8gICA8TmF2SXRlbSB0eXBlPSdpdGVtJz48TGluayB0bz0nL2J1dHRvbic+QnV0dG9uPC9MaW5rPjwvTmF2SXRlbT5cbi8vICAgPE5hdkl0ZW0gdHlwZT0naXRlbSc+PExpbmsgdG89Jy9jb2RlYmxvY2snPkNvZGVibG9jazwvTGluaz48L05hdkl0ZW0+XG4vLyAgIDxOYXZJdGVtIHR5cGU9J2l0ZW0nPjxMaW5rIHRvPScvY29tbWVudCc+Q29tbWVudDwvTGluaz48L05hdkl0ZW0+XG4vLyAgIDxOYXZJdGVtIHR5cGU9J2l0ZW0nPjxMaW5rIHRvPScvY29tbWVudC1saXN0Jz5Db21tZW50IGxpc3Q8L0xpbms+PC9OYXZJdGVtPlxuLy8gICA8TmF2SXRlbSB0eXBlPSdpdGVtJz48TGluayB0bz0nL2ZsZXgnPkZsZXg8L0xpbms+PC9OYXZJdGVtPlxuLy8gICA8TmF2SXRlbSB0eXBlPSdpdGVtJz48TGluayB0bz0nL2dyaWQnPkdyaWQ8L0xpbms+PC9OYXZJdGVtPlxuLy8gICA8TmF2SXRlbSB0eXBlPSdpdGVtJz48TGluayB0bz0nL2ltZyc+SW1nPC9MaW5rPjwvTmF2SXRlbT5cbi8vICAgPE5hdkl0ZW0gdHlwZT0naXRlbSc+PExpbmsgdG89Jy9pbWctZ2FsbGVyeSc+SW1nIGdhbGxlcnk8L0xpbms+PC9OYXZJdGVtPlxuLy8gICA8TmF2SXRlbSB0eXBlPSdpdGVtJz48TGluayB0bz0nL2xpc3QtZ3JvdXAnPkxpc3QgZ3JvdXA8L0xpbms+PC9OYXZJdGVtPlxuLy8gICA8TmF2SXRlbSB0eXBlPSdpdGVtJz48TGluayB0bz0nL21vZGFsJz5Nb2RhbDwvTGluaz48L05hdkl0ZW0+XG4vLyAgIDxOYXZJdGVtIHR5cGU9J2l0ZW0nPjxMaW5rIHRvPScvb3ZlcmxheSc+T3ZlcmxheTwvTGluaz48L05hdkl0ZW0+XG4vLyAgIDxOYXZJdGVtIHR5cGU9J2l0ZW0nPjxMaW5rIHRvPScvbmF2Jz5OYXY8L0xpbms+PC9OYXZJdGVtPlxuLy8gICA8TmF2SXRlbSB0eXBlPSdpdGVtJz48TGluayB0bz0nL25vdGUnPm5vdGU8L0xpbms+PC9OYXZJdGVtPlxuLy8gICA8TmF2SXRlbSB0eXBlPSdpdGVtJz48TGluayB0bz0nL3BhbmVsJz5QYW5lbDwvTGluaz48L05hdkl0ZW0+XG4vLyAgIDxOYXZJdGVtIHR5cGU9J2l0ZW0nPjxMaW5rIHRvPScvdGFibGUnPlRhYmw8L0xpbms+PC9OYXZJdGVtPlxuLy8gICA8TmF2SXRlbSB0eXBlPSdpdGVtJz48TGluayB0bz0nL3RleHQnPlRleHQ8L0xpbms+PC9OYXZJdGVtPlxuLy8gICA8TmF2SXRlbSB0eXBlPSdpdGVtJz48TGluayB0bz0nL3RodW1ibmFpbCc+VGh1bWJuYWlsPC9MaW5rPjwvTmF2SXRlbT5cbi8vIDwvTmF2PlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9yb3V0ZXMuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})