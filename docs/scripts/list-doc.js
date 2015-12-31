'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _reactUikitCodeblock = require('react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

var _reactUikitList = require('react-uikit-list');

var _reactUikitList2 = _interopRequireDefault(_reactUikitList);

var _listItem = require('react-uikit-list/lib/list-item');

var _listItem2 = _interopRequireDefault(_listItem);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

var _reactUikitNote = require('react-uikit-note');

var _reactUikitNote2 = _interopRequireDefault(_reactUikitNote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ListDoc: {
    displayName: 'ListDoc'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/list-doc.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/list-doc.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var items = [{ href: '#', kitId: 'list-group-1.1', body: 'Item 1' }, { href: '#', kitId: 'list-group-1.2', body: 'Item 2' }, { href: '#', kitId: 'list-group-1.3', body: 'Item 3' }, { href: '#', kitId: 'list-group-1.4', body: 'Item 4' }];

var ListDoc = _wrapComponent('ListDoc')((function (_React$Component) {
  _inherits(ListDoc, _React$Component);

  function ListDoc(props) {
    _classCallCheck(this, ListDoc);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListDoc).call(this, props));

    _this.state = { items: items };
    return _this;
  }

  _createClass(ListDoc, [{
    key: 'handleClick',
    value: function handleClick(e) {
      var items = _extends({}, this.state.items);

      items[e.item.index].checked = items[e.item.index].checked ? !items[e.item.index].checked : true;

      this.setState(items);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h1',
            null,
            'List'
          ),
          _react3.default.createElement(
            'p',
            { className: 'uk-article-lead' },
            'Dynamically creates lists.'
          ),
          _react3.default.createElement(
            'p',
            null,
            _react3.default.createElement(
              'a',
              { href: 'https://github.com/otissv/react-uikit-list' },
              'react-uikit-list'
            ),
            ' on github.'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Usage'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            null,
            'npm install react-uikit-list --save;\n\n  // ES6\n  import List from \'react-uikit-list\';\n  import Listitem from \'react-uikit-list/lib/ListItem\';\n\n  // ES5\n  var List = require(\'react-uikit-list\');\n  var Listitem = require(\'react-uikit-list/lib/ListItem\')'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'List types'
          ),
          _react3.default.createElement(
            'p',
            null,
            'Lists can be either unordered or description. Lists are unordered by default if no type is supplied. To create a description list add ',
            _react3.default.createElement(
              'code',
              null,
              'type=\'description\''
            ),
            ' prop.'
          ),
          _react3.default.createElement(
            _reactUikitNote2.default,
            null,
            'ListItem component and the items prop does not work with description lists. Also on narrower viewports the style will change back to the default stacked description list.'
          ),
          _react3.default.createElement(
            'h4',
            null,
            'Unordered list'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(_reactUikitList2.default, { items: ['item', 'item', 'item'] }),
          _react3.default.createElement(
            'h4',
            null,
            'Description list'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitList2.default,
            { type: 'description' },
            _react3.default.createElement(
              'dt',
              null,
              'Description lists'
            ),
            _react3.default.createElement(
              'dd',
              null,
              'A description list defines terms and their corresponding descriptions.'
            ),
            _react3.default.createElement(
              'dt',
              null,
              'Lorem ipsum'
            ),
            _react3.default.createElement(
              'dd',
              null,
              'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            ),
            _react3.default.createElement(
              'dt',
              null,
              'A long term is truncated'
            ),
            _react3.default.createElement(
              'dd',
              null,
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            )
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            '<List items={[\'item\', \'item\', \'item\']} />\n\n  <List type=\'description\' horizontal>\n    <dt>Description lists</dt>\n    <dd>A description list defines terms and their corresponding descriptions.</dd>\n    <dt>Lorem ipsum</dt>\n    <dd>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>\n    <dt>A long term is truncated</dt>\n    <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>\n  </List>\n  '
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'List with lines'
          ),
          _react3.default.createElement(
            'p',
            null,
            'The ',
            _react3.default.createElement(
              'code',
              null,
              'line'
            ),
            ' prop separates list items with lines.'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitList2.default,
            { line: true },
            _react3.default.createElement(_listItem2.default, { body: 'Item' }),
            _react3.default.createElement(_listItem2.default, { body: 'Item' }),
            _react3.default.createElement(_listItem2.default, { body: 'Item' })
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            '\n  <List line>\n    <ListItem body=\'Item\' />\n    <ListItem body=\'Item\' />\n    <ListItem body=\'Item\' />\n  </List>\n  '
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Striped items'
          ),
          _react3.default.createElement(
            'p',
            null,
            'The ',
            _react3.default.createElement(
              'code',
              null,
              'striped'
            ),
            ' prop adds zebra-striping to list items.'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitList2.default,
            { striped: true },
            _react3.default.createElement(_listItem2.default, { body: 'Item' }),
            _react3.default.createElement(_listItem2.default, { body: 'Item' }),
            _react3.default.createElement(_listItem2.default, { body: 'Item' })
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            '<List striped>\n    <ListItem body=\'Item\' />\n    <ListItem body=\'Item\' />\n    <ListItem body=\'Item\' />\n  </List>\n  '
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Space items'
          ),
          _react3.default.createElement(
            'p',
            null,
            'The ',
            _react3.default.createElement(
              'code',
              null,
              'space'
            ),
            ' prop increases the spacing between list items.'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitList2.default,
            { space: true },
            _react3.default.createElement(_listItem2.default, { body: 'Item' }),
            _react3.default.createElement(_listItem2.default, { body: 'Item' }),
            _react3.default.createElement(_listItem2.default, { body: 'Item' })
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            '<List space>\n    <ListItem body=\'Item\' />\n    <ListItem body=\'Item\' />\n    <ListItem body=\'Item\' />\n  </List>\n  '
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'List link items'
          ),
          _react3.default.createElement(
            'p',
            null,
            'The ',
            _react3.default.createElement(
              'code',
              null,
              'space'
            ),
            ' prop increases the spacing between list items.'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitList2.default,
            { space: true },
            _react3.default.createElement(_listItem2.default, { href: '#', kitId: 'list-group-1.1', body: 'Active item', badge: { body: '2', notification: true } }),
            _react3.default.createElement(_listItem2.default, { href: '#', kitId: 'list-group-1.2', body: 'Normal item' }),
            _react3.default.createElement(_listItem2.default, { href: '#', kitId: 'list-group-1.3' }),
            _react3.default.createElement(_listItem2.default, { href: '#', kitId: 'list-group-1.4', body: 'Normal item', badge: { body: '10', context: 'danger', notification: true } })
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            '<List space>\n    <ListItem href=\'#\' kitId=\'list-group-1.1\' body=\'Active item\' badge={{body: \'2\', notification: true}} />\n    <ListItem href=\'#\' kitId=\'list-group-1.2\' body=\'Normal item\' />\n    <ListItem href=\'#\' kitId=\'list-group-1.3\' />\n    <ListItem href=\'#\' kitId=\'list-group-1.4\' body=\'Normal item\' badge={{body: \'10\', context: \'danger\', notification: true}} />\n  </List>\n  '
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Selectable list'
          ),
          _react3.default.createElement(
            'p',
            null,
            'Link list can be made selectable by adding the ',
            _react3.default.createElement(
              'code',
              null,
              'selectable'
            ),
            ' prop which adds a checkbox infrom of an item.'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(_reactUikitList2.default, {
            line: true,
            selectable: true,
            onClick: function onClick(e) {
              return _this2.handleClick(e);
            },
            items: this.state.items }),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            'const items = [\n  {href: \'#\', kitId: \'list-group-1.1\', body: \'Item 1\'},\n  {href: \'#\', kitId: \'list-group-1.2\', body: \'Item 2\'},\n  {href: \'#\', kitId: \'list-group-1.3\', body: \'Item 3\'},\n  {href: \'#\', kitId: \'list-group-1.4\', body: \'Item 4\'}\n];\n...\n<List\n  line\n  selectable\n  onClick={(e) => this.handleClick(e)}\n  items={this.state.items}/>\n...\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Horizontal description list'
          ),
          _react3.default.createElement(
            'p',
            null,
            'Displays the terms and descriptions side by side.'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitList2.default,
            { type: 'description', horizontal: true },
            _react3.default.createElement(
              'dt',
              null,
              'Description lists'
            ),
            _react3.default.createElement(
              'dd',
              null,
              'A description list defines terms and their corresponding descriptions.'
            ),
            _react3.default.createElement(
              'dt',
              null,
              'Lorem ipsum'
            ),
            _react3.default.createElement(
              'dd',
              null,
              'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            ),
            _react3.default.createElement(
              'dt',
              null,
              'A long term is truncated'
            ),
            _react3.default.createElement(
              'dd',
              null,
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            )
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            '<List type=\'description horizontal\'>\n    <dt>Description lists</dt>\n    <dd>A description list defines terms and their corresponding descriptions.</dd>\n    <dt>Lorem ipsum</dt>\n    <dd>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>\n    <dt>A long term is truncated</dt>\n    <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>\n  </List>\n  '
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Dynamic list items'
          ),
          _react3.default.createElement(
            'p',
            null,
            'List items can be dynamically created by setting the ',
            _react3.default.createElement(
              'code',
              null,
              'items'
            ),
            ' prop to a collection of items.'
          ),
          _react3.default.createElement(
            'h3',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(_reactUikitList2.default, { items: ['item', 'item', 'item'] }),
          _react3.default.createElement(_reactUikitList2.default, { line: true, items: [{ href: '#', kitId: 'list-group-1.1', body: 'Active item', badge: { body: '2', notification: true } }, { href: '#', kitId: 'list-group-1.2', body: 'Normal item' }, { href: '#', kitId: 'list-group-1.3', body: 'Disabled item' }, { href: '#', kitId: 'list-group-1.4', body: 'Normal item', badge: { body: '10', context: 'danger', notification: true } }] }),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { syntax: 'xml' },
            '<List items={[\'item\', \'item\', \'item\']} />\n\n<List line items={[\n  {href: \'#\', kitId: \'list-group-1.1\', body: \'Active item\', badge: {body: \'2\', notification: true}},\n  {href: \'#\', kitId: \'list-group-1.2\', body: \'Normal item\'},\n  {href: \'#\', kitId: \'list-group-1.3\', body: \'Disabled item\'},\n  {href: \'#\', kitId: \'list-group-1.4\', body: \'Normal item\', badge: {body: \'10\', context: \'danger\', notification: true}}\n]}/>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Click and select events'
          ),
          _react3.default.createElement(
            'p',
            null,
            'List item has ',
            _react3.default.createElement(
              'code',
              null,
              'onClick'
            ),
            ' and ',
            _react3.default.createElement(
              'code',
              null,
              'onSelect'
            ),
            ' props which both return an object containing all the properties from the triggered event. There is also an addtional ',
            _react3.default.createElement(
              'code',
              null,
              'item'
            ),
            ' property added for convinience.'
          ),
          _react3.default.createElement(_reactUikitTable2.default, { head: ['Item property', 'Description'], body: [{
              propery: 'component',
              description: 'Items\' component'
            }, {
              propery: 'element',
              description: 'Items\' DOM element'
            }, {
              propery: 'index',
              description: 'Items\' index'
            }, {
              propery: 'kitid',
              description: 'Items\' id'
            }] })
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'List props'
          ),
          _react3.default.createElement(
            'p',
            null,
            'See base component for additional utility props.'
          ),
          _react3.default.createElement(
            _reactUikitTable2.default,
            null,
            _react3.default.createElement(
              'thead',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Prop'
                ),
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Type'
                )
              )
            ),
            _react3.default.createElement(
              'tbody',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'items'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'array'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'horizontal'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'bool'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'line'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'bool'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'striped'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'bool'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'space'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'bool'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'type'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'oneOf',
                  _react3.default.createElement('br', null),
                  'description or unordered. Default is unordered.'
                )
              )
            )
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'List Item props'
          ),
          _react3.default.createElement(
            'p',
            null,
            'See base component for additional utility props.'
          ),
          _react3.default.createElement(
            _reactUikitTable2.default,
            null,
            _react3.default.createElement(
              'thead',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Prop'
                ),
                _react3.default.createElement(
                  'th',
                  { className: 'uk-text-left' },
                  'Type'
                )
              )
            ),
            _react3.default.createElement(
              'tbody',
              null,
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'badge'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'object'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'body'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'string'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'href'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'string'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'onClick'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'func'
                )
              ),
              _react3.default.createElement(
                'tr',
                null,
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  _react3.default.createElement(
                    'code',
                    null,
                    'onSelect'
                  )
                ),
                _react3.default.createElement(
                  'td',
                  { className: 'uk-text-left' },
                  'func'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ListDoc;
})(_react3.default.Component));

;

exports.default = ListDoc;