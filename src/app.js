'use strict';

import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './routes.jsx';
import ReactDOM from 'react-dom';


const mountNode = document.getElementById('mount-node');

ReactDOM.render(
  <Router history={browserHistory} routes={routes}/>,
  mountNode
);