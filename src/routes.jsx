'use strict';

import React from 'react';
import { Link } from 'react-router';
import Grid from 'react-uikit-grid';
import Nav from '../components/react-uikit-nav/src/nav.jsx';
import NavItem from '../components/react-uikit-nav/src/nav-item.jsx';
import uikit from 'react-uikit-base';

// Layout Handlers
import AlertDoc from './alert-doc.jsx';
import ArticleDoc from './article-doc.jsx';
import BadgeDoc from './badge-doc.jsx';
import BaseDoc from './base-doc.jsx';
import BlockDoc from './block-doc.jsx';
import ButtonDoc from './button-doc.jsx';
import ButtonGroupDoc from './button-group-doc.jsx';
import CodeblockDoc from './codeblock-doc.jsx';
import CommentDoc from './comment-doc.jsx';
import CommentListDoc from './comment-list-doc.jsx';
import DropdownDoc from './dropdown-doc.jsx';
import FlexDoc from './flex-doc.jsx';
import GridDoc from './grid-doc.jsx';
import ImgDoc from './img-doc.jsx';
import ImgGalleryDoc from './img-gallery-doc.jsx';
import ListDoc from './list-doc.jsx';
// import NavDoc from './nav-doc.jsx';
import ModalDoc from './modal-doc.jsx';
import NoteDoc from './note-doc.jsx';
import OverlayDoc from './overlay-doc.jsx';
import PanelDoc from './panel-doc.jsx';
import TableDoc from './table-doc.jsx';
import TextDoc from './text-doc.jsx';
import ThumbnailDoc from './thumbnail-doc.jsx';

const ContentView = (props) => (
  <div {...props} className={uikit.helpers.cleanClasses(props.classes)}>
    {props.children}
  </div>
);

ContentView.propTypes = {
  children: React.PropTypes.any,
  classes: React.PropTypes.array
};

const HeaderView = (props) => (
  <div {...props} className={uikit.helpers.cleanClasses(props.classes)}>
    <h1>React UIkit Components</h1>
    <a href="https://github.com/otissv/react-uikit-components">
      <img style={{position: 'absolute', top: 0, right: 0, border: 0}}
        src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67"
        alt="Fork me on GitHub"
        data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"/>

    </a>
  </div>
);

HeaderView.propTypes = {
  children: React.PropTypes.any,
  classes: React.PropTypes.array
};


const Content = uikit.base(ContentView);
const Header = uikit.base(HeaderView);


const Layout = (props) => (
  <div>
    <div className='doc-header'>
      <Header margin='bottom left right' />
    </div>
    <Grid >
      <Nav col='1-6' type='side'>
        <NavItem type='item'><Link to='/alert'>Alert</Link></NavItem>
        <NavItem type='item'><Link to='/article'>Article</Link></NavItem>
        <NavItem type='item'><Link to='/base'>Base</Link></NavItem>
        <NavItem type='item'><Link to='/badge'>Badge</Link></NavItem>
        <NavItem type='item'><Link to='/block'>Block</Link></NavItem>
        <NavItem type='item'><Link to='/button'>Button</Link></NavItem>
        <NavItem type='item'><Link to='/button-group'>Button group</Link></NavItem>
        <NavItem type='item'><Link to='/codeblock'>Codeblock</Link></NavItem>
        <NavItem type='item'><Link to='/comment'>Comment</Link></NavItem>
        <NavItem type='item'><Link to='/comment-list'>Comment list</Link></NavItem>
        <NavItem type='item'><Link to='/dropdown'>Dropdown</Link></NavItem>
        <NavItem type='item'><Link to='/flex'>Flex</Link></NavItem>
        <NavItem type='item'><Link to='/grid'>Grid</Link></NavItem>
        <NavItem type='item'><Link to='/img'>Img</Link></NavItem>
        <NavItem type='item'><Link to='/img-gallery'>Img gallery</Link></NavItem>
        <NavItem type='item'><Link to='/list'>List</Link></NavItem>
        <NavItem type='item'><Link to='/modal'>Modal</Link></NavItem>
        <NavItem type='item'><Link to='/note'>Note</Link></NavItem>
        <NavItem type='item'><Link to='/overlay'>Overlay</Link></NavItem>
        <NavItem type='item'><Link to='/panel'>Panel</Link></NavItem>
        <NavItem type='item'><Link to='/table'>Table</Link></NavItem>
        <NavItem type='item'><Link to='/text'>Text</Link></NavItem>
        <NavItem type='item'><Link to='/thumbnail'>Thumbnail</Link></NavItem>
      </Nav>

      <Content col='5-6' margin='right'>{props.children}</Content>
    </Grid>
  </div>
);

Layout.propTypes = {
  children : React.PropTypes.any
};


const routes = {
  path: '/',
  component: Layout,
  childRoutes: [
    { path: '/alert', component        : AlertDoc },
    { path: '/article', component      : ArticleDoc },
    { path: '/base', component         : BaseDoc },
    { path: '/badge', component        : BadgeDoc },
    { path: '/block', component        : BlockDoc },
    { path: '/button', component       : ButtonDoc },
    { path: '/button-group', component : ButtonGroupDoc },
    { path: '/codeblock', component    : CodeblockDoc },
    { path: '/comment', component      : CommentDoc },
    { path: '/comment-list', component : CommentListDoc },
    { path: '/dropdown', component     : DropdownDoc },
    { path: '/flex', component         : FlexDoc },
    { path: '/grid', component         : GridDoc },
    { path: '/img', component          : ImgDoc },
    { path: '/img-gallery', component  : ImgGalleryDoc },
    { path: '/list', component         : ListDoc },
    { path: '/note', component         : NoteDoc },
    { path: '/modal', component        : ModalDoc },
    { path: '/overlay', component      : OverlayDoc },
    { path: '/panel', component        : PanelDoc },
    { path: '/table', component        : TableDoc },
    { path: '/text', component         : TextDoc },
    { path: '/thumbnail', component    : ThumbnailDoc }
  ]
};

export default routes;
