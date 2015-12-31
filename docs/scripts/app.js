'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _routes = require('./routes.jsx');

var _routes2 = _interopRequireDefault(_routes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mountNode = document.getElementById('mount-node');

_reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, { history: (0, _createBrowserHistory2.default)(), routes: _routes2.default }), mountNode);