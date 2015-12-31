'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactUikitGrid = require('react-uikit-grid');

var _reactUikitGrid2 = _interopRequireDefault(_reactUikitGrid);

var _nav = require('../components/react-uikit-nav/src/nav.jsx');

var _nav2 = _interopRequireDefault(_nav);

var _navItem = require('../components/react-uikit-nav/src/nav-item.jsx');

var _navItem2 = _interopRequireDefault(_navItem);

var _reactUikitBase = require('react-uikit-base');

var _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);

var _alertDoc = require('./alert-doc.jsx');

var _alertDoc2 = _interopRequireDefault(_alertDoc);

var _articleDoc = require('./article-doc.jsx');

var _articleDoc2 = _interopRequireDefault(_articleDoc);

var _badgeDoc = require('./badge-doc.jsx');

var _badgeDoc2 = _interopRequireDefault(_badgeDoc);

var _baseDoc = require('./base-doc.jsx');

var _baseDoc2 = _interopRequireDefault(_baseDoc);

var _blockDoc = require('./block-doc.jsx');

var _blockDoc2 = _interopRequireDefault(_blockDoc);

var _buttonDoc = require('./button-doc.jsx');

var _buttonDoc2 = _interopRequireDefault(_buttonDoc);

var _buttonGroupDoc = require('./button-group-doc.jsx');

var _buttonGroupDoc2 = _interopRequireDefault(_buttonGroupDoc);

var _codeblockDoc = require('./codeblock-doc.jsx');

var _codeblockDoc2 = _interopRequireDefault(_codeblockDoc);

var _commentDoc = require('./comment-doc.jsx');

var _commentDoc2 = _interopRequireDefault(_commentDoc);

var _commentListDoc = require('./comment-list-doc.jsx');

var _commentListDoc2 = _interopRequireDefault(_commentListDoc);

var _dropdownDoc = require('./dropdown-doc.jsx');

var _dropdownDoc2 = _interopRequireDefault(_dropdownDoc);

var _flexDoc = require('./flex-doc.jsx');

var _flexDoc2 = _interopRequireDefault(_flexDoc);

var _gridDoc = require('./grid-doc.jsx');

var _gridDoc2 = _interopRequireDefault(_gridDoc);

var _imgDoc = require('./img-doc.jsx');

var _imgDoc2 = _interopRequireDefault(_imgDoc);

var _imgGalleryDoc = require('./img-gallery-doc.jsx');

var _imgGalleryDoc2 = _interopRequireDefault(_imgGalleryDoc);

var _listDoc = require('./list-doc.jsx');

var _listDoc2 = _interopRequireDefault(_listDoc);

var _noteDoc = require('./note-doc.jsx');

var _noteDoc2 = _interopRequireDefault(_noteDoc);

var _overlayDoc = require('./overlay-doc.jsx');

var _overlayDoc2 = _interopRequireDefault(_overlayDoc);

var _panelDoc = require('./panel-doc.jsx');

var _panelDoc2 = _interopRequireDefault(_panelDoc);

var _tableDoc = require('./table-doc.jsx');

var _tableDoc2 = _interopRequireDefault(_tableDoc);

var _textDoc = require('./text-doc.jsx');

var _textDoc2 = _interopRequireDefault(_textDoc);

var _thumbnailDoc = require('./thumbnail-doc.jsx');

var _thumbnailDoc2 = _interopRequireDefault(_thumbnailDoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import NavDoc from './nav-doc.jsx';

// Layout Handlers

var Main = function Main(props) {
  return _react2.default.createElement(
    'div',
    { className: _reactUikitBase2.default.helpers.cleanClasses(props.classes) },
    props.children
  );
};

Main.propTypes = {
  children: _react2.default.PropTypes.any,
  classes: _react2.default.PropTypes.array
};

var Content = _reactUikitBase2.default.base(Main);

var Layout = function Layout(props) {
  return _react2.default.createElement(
    _reactUikitGrid2.default,
    null,
    _react2.default.createElement(
      _nav2.default,
      { col: '1-6', type: 'side' },
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/alert' },
          'Alert'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/article' },
          'Article'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/base' },
          'Base'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/badge' },
          'Badge'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/block' },
          'Block'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/button' },
          'Button'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/button-group' },
          'Button group'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/codeblock' },
          'Codeblock'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/comment' },
          'Comment'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/comment-list' },
          'Comment list'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/dropdown' },
          'Dropdown'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/flex' },
          'Flex'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/grid' },
          'Grid'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/img' },
          'Img'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/img-gallery' },
          'Img gallery'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/list' },
          'List'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/note' },
          'Note'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/overlay' },
          'Overlay'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/panel' },
          'Panel'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/table' },
          'Table'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/text' },
          'Text'
        )
      ),
      _react2.default.createElement(
        _navItem2.default,
        { type: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/thumbnail' },
          'Thumbnail'
        )
      )
    ),
    _react2.default.createElement(
      Content,
      { col: '5-6', margin: 'right' },
      props.children
    )
  );
};

Layout.propTypes = {
  children: _react2.default.PropTypes.any
};

var routes = {
  path: '/',
  component: Layout,
  childRoutes: [{ path: '/alert', component: _alertDoc2.default }, { path: '/article', component: _articleDoc2.default }, { path: '/base', component: _baseDoc2.default }, { path: '/badge', component: _badgeDoc2.default }, { path: '/block', component: _blockDoc2.default }, { path: '/button', component: _buttonDoc2.default }, { path: '/button-group', component: _buttonGroupDoc2.default }, { path: '/codeblock', component: _codeblockDoc2.default }, { path: '/comment', component: _commentDoc2.default }, { path: '/comment-list', component: _commentListDoc2.default }, { path: '/dropdown', component: _dropdownDoc2.default }, { path: '/flex', component: _flexDoc2.default }, { path: '/grid', component: _gridDoc2.default }, { path: '/img', component: _imgDoc2.default }, { path: '/img-gallery', component: _imgGalleryDoc2.default }, { path: '/list', component: _listDoc2.default }, { path: '/note', component: _noteDoc2.default }, { path: '/overlay', component: _overlayDoc2.default }, { path: '/panel', component: _panelDoc2.default }, { path: '/table', component: _tableDoc2.default }, { path: '/text', component: _textDoc2.default }, { path: '/thumbnail', component: _thumbnailDoc2.default }]
};

exports.default = routes;

// <Nav col='1-6' type='side'>
//   <NavItem type='item'><Link to='/alert'>Alert</Link></NavItem>
//   <NavItem type='item'><Link to='/article'>Article</Link></NavItem>
//   <NavItem type='item'><Link to='/base'>Base</Link></NavItem>
//   <NavItem type='item'><Link to='/badge'>Badge</Link></NavItem>
//   <NavItem type='item'><Link to='/block'>Block</Link></NavItem>
//   <NavItem type='item'><Link to='/button-group'>Button group</Link></NavItem>
//   <NavItem type='item'><Link to='/button'>Button</Link></NavItem>
//   <NavItem type='item'><Link to='/codeblock'>Codeblock</Link></NavItem>
//   <NavItem type='item'><Link to='/comment'>Comment</Link></NavItem>
//   <NavItem type='item'><Link to='/comment-list'>Comment list</Link></NavItem>
//   <NavItem type='item'><Link to='/flex'>Flex</Link></NavItem>
//   <NavItem type='item'><Link to='/grid'>Grid</Link></NavItem>
//   <NavItem type='item'><Link to='/img'>Img</Link></NavItem>
//   <NavItem type='item'><Link to='/img-gallery'>Img gallery</Link></NavItem>
//   <NavItem type='item'><Link to='/list-group'>List group</Link></NavItem>
//   <NavItem type='item'><Link to='/modal'>Modal</Link></NavItem>
//   <NavItem type='item'><Link to='/overlay'>Overlay</Link></NavItem>
//   <NavItem type='item'><Link to='/nav'>Nav</Link></NavItem>
//   <NavItem type='item'><Link to='/note'>note</Link></NavItem>
//   <NavItem type='item'><Link to='/panel'>Panel</Link></NavItem>
//   <NavItem type='item'><Link to='/table'>Tabl</Link></NavItem>
//   <NavItem type='item'><Link to='/text'>Text</Link></NavItem>
//   <NavItem type='item'><Link to='/thumbnail'>Thumbnail</Link></NavItem>
// </Nav>