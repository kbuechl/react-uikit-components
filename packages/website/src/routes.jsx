'use strict';

import React from 'react';
import { Link } from 'react-router';
import Grid from 'react-uikit-grid';
import Nav from 'react-uikit-nav';
import NavItem from 'react-uikit-nav/lib/nav-item';
import Badge from 'react-uikit-badge';
import uikit from 'react-uikit-base';


// Layout Handlers
import AlertDoc from 'react-uikit-alert/docs-lib/alert-doc';
import ArticleDoc from 'react-uikit-article/docs-lib/article-doc';
import BadgeDoc from 'react-uikit-badge/docs-lib/badge-doc';
import BaseDoc from 'react-uikit-base/docs-lib/base-doc';
import BlockDoc from 'react-uikit-block/docs-lib/block-doc';
import BreadcrumbDoc from 'react-uikit-breadcrumb/docs-lib/breadcrumb-doc';
import ButtonDoc from 'react-uikit-button/docs-lib/button-doc';
import ButtonGroupDoc from 'react-uikit-button-group/docs-lib/button-group-doc';
import CodeblockDoc from 'react-uikit-codeblock/docs-lib/codeblock-doc';
import CommentDoc from 'react-uikit-comment/docs-lib/comment-doc';
import CommentListDoc from 'react-uikit-comment-list/docs-lib/comment-list-doc';
import DropdownDoc from 'react-uikit-dropdown/docs-lib/dropdown-doc';
import FormDoc from 'react-uikit-form/docs-lib/form-doc';
import FlexDoc from 'react-uikit-flex/docs-lib/flex-doc';
import GridDoc from 'react-uikit-grid/docs-lib/grid-doc';
import IconsDoc from 'react-uikit-icons/docs-lib/icons-doc';
import ImgDoc from 'react-uikit-img/docs-lib/img-doc';
import ImgGalleryDoc from 'react-uikit-img-gallery/docs-lib/img-gallery-doc';
import ListDoc from 'react-uikit-list/docs-lib/list-doc';
import ModalDoc from 'react-uikit-modal/docs-lib/modal-doc';
import NavDoc from 'react-uikit-nav/docs-lib/nav-doc';
import NoteDoc from 'react-uikit-note/docs-lib/note-doc';
import NotifyDoc from 'react-uikit-notify/docs-lib/notify-doc';
import OverlayDoc from 'react-uikit-overlay/docs-lib/overlay-doc';
import PanelDoc from 'react-uikit-panel/docs-lib/panel-doc';
import PlaceholderDoc from 'react-uikit-placeholder/docs-lib/placeholder-doc';
import ProgressDoc from 'react-uikit-progress/docs-lib/progress-doc';
import TableDoc from 'react-uikit-table/docs-lib/table-doc';
import TextDoc from 'react-uikit-text/docs-lib/text-doc';
import ThumbnailDoc from 'react-uikit-thumbnail/docs-lib/thumbnail-doc';

const ContentView = (props) => (
  <div className={uikit.helpers.cleanClasses(props.classes)}>
    {props.children}
  </div>
);

ContentView.propTypes = {
  children: React.PropTypes.any,
  classes: React.PropTypes.array
};

const HeaderView = (props) => (
  <div className={uikit.helpers.cleanClasses(props.classes)}>
    <a href='index.html'>
      <h1 className='uk-display-inline'>React UIkit Components</h1>
    </a>
    <a className='uk-button uk-button-primary uk-float-right' href='https://github.com/otissv/react-uikit-components'>GitHub</a>
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
        <NavItem type='header' body='DEFAULTS'/>
        <NavItem type='item'><Link to='/base'>UIkit Base</Link></NavItem>

        <NavItem type='header' body='LAYOUT'/>
        <NavItem type='item'><Link to='/grid'>Grid</Link></NavItem>
        <NavItem type='item'><Link to='/panel'>Panel</Link></NavItem>
        <NavItem type='item'><Link to='/block'>Block</Link></NavItem>
        <NavItem type='item'><Link to='/article'>Article</Link></NavItem>
        <NavItem type='item'><Link to='/comment'>Comment</Link></NavItem>
        <NavItem type='item'><Link to='/comment-list'>Comment list</Link></NavItem>
        <NavItem type='item'><Link to='/flex'>Flex</Link></NavItem>
        <NavItem type='item'><Link to='/codeblock'>Codeblock</Link></NavItem>
        <NavItem type='item'><Link to='/img-gallery'>Img gallery</Link></NavItem>

        <NavItem type='header' body='NAVIGATIONS'/>
        <NavItem type='item'><Link to='/nav'>Nav</Link></NavItem>
        <NavItem type='item'><Link to='/breadcrumb'>Breadcrumb</Link></NavItem>

        <NavItem type='header' body='ELEMENTS'/>
        <NavItem type='item'><Link to='/list'>List</Link></NavItem>
        <NavItem type='item'><Link to='/table'>Table</Link></NavItem>
        <NavItem type='item'><Link to='/form'>Form</Link></NavItem>

        <NavItem type='header' body='COMMON'/>
        <NavItem type='item'><Link to='/button'>Button</Link></NavItem>
        <NavItem type='item'><Link to='/button-group'>Button group</Link></NavItem>
        <NavItem type='item'><Link to='/icons'>Icons</Link></NavItem>
        <NavItem type='item'><Link to='/badge'>Badge</Link></NavItem>
        <NavItem type='item'><Link to='/alert'>Alert</Link></NavItem>
        <NavItem type='item'><Link to='/thumbnail'>Thumbnail</Link></NavItem>
        <NavItem type='item'><Link to='/overlay'>Overlay</Link></NavItem>
        <NavItem type='item'><Link to='/text'>Text</Link></NavItem>
        <NavItem type='item'><Link to='/note'>Note</Link></NavItem>
        <NavItem type='item'><Link to='/img'>Img</Link></NavItem>

        <NavItem type='header' body='OTHER'/>
        <NavItem type='item'><Link to='/dropdown'>Dropdown</Link></NavItem>
        <NavItem type='item'><Link to='/modal'>Modal</Link></NavItem>

        <NavItem type='header' body='COMPONENTS'/>
        <NavItem type='item'><Link to='/placeholder'>Placeholder</Link></NavItem>
        <NavItem type='item'><Link to='/notify'>Notify <Badge notification context='danger'>new</Badge></Link></NavItem>
        <NavItem type='item'><Link to='/progress'>Progress <Badge notification context='danger'>new</Badge></Link></NavItem>

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
    { indexRoute: { component: BaseDoc } },
    { path: '/alert', component        : AlertDoc },
    { path: '/article', component      : ArticleDoc },
    { path: '/base', component         : BaseDoc },
    { path: '/badge', component        : BadgeDoc },
    { path: '/block', component        : BlockDoc },
    { path: '/breadcrumb', component   : BreadcrumbDoc },
    { path: '/button', component       : ButtonDoc },
    { path: '/button-group', component : ButtonGroupDoc },
    { path: '/codeblock', component    : CodeblockDoc },
    { path: '/comment', component      : CommentDoc },
    { path: '/comment-list', component : CommentListDoc },
    { path: '/dropdown', component     : DropdownDoc },
    { path: '/flex', component         : FlexDoc },
    { path: '/form', component         : FormDoc },
    { path: '/grid', component         : GridDoc },
    { path: '/icons', component        : IconsDoc },
    { path: '/img',  component         : ImgDoc },
    { path: '/img-gallery', component  : ImgGalleryDoc },
    { path: '/list', component         : ListDoc },
    { path: '/modal', component        : ModalDoc },
    { path: '/nav', component          : NavDoc },
    { path: '/notify', component       : NotifyDoc },
    { path: '/note', component         : NoteDoc },
    { path: '/overlay', component      : OverlayDoc },
    { path: '/panel', component        : PanelDoc },
    { path: '/placeholder', component  : PlaceholderDoc },
    { path: '/progress', component     : ProgressDoc },
    { path: '/table', component        : TableDoc },
    { path: '/text', component         : TextDoc },
    { path: '/thumbnail', component    : ThumbnailDoc }
  ]
};

export default routes;
