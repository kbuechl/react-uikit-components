'use strict';

import React from 'react';
import { Router } from 'react-router';
import routes from './routes.jsx';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const mountNode = document.getElementById('mount-node');

ReactDOM.render(
  <Router history={ createBrowserHistory()} routes={routes}/>,
  mountNode
);
