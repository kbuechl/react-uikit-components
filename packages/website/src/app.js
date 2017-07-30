'use strict';

import React from 'react';
import { Router, hashHistory } from 'react-router';
import routes from './routes.jsx';
import ReactDOM from 'react-dom';

// import { createHistory } from 'history';


const mountNode = document.getElementById('mount-node');

ReactDOM.render(
  <Router history={hashHistory} routes={routes}/>,
  mountNode
);
