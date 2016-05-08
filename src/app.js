'use strict';

import React from 'react';
import { Router, useRouterHistory } from 'react-router';
import routes from './routes.jsx';
import ReactDOM from 'react-dom';

import { createHistory } from 'history';


const history = useRouterHistory(createHistory)({
  basename: '/react-uikit-components'
});

const mountNode = document.getElementById('mount-node');

ReactDOM.render(
  <Router history={history} routes={routes}/>,
  mountNode
);
