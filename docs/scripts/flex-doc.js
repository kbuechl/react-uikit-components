'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUikitCodeblock = require('react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

var _reactUikitPanel = require('react-uikit-panel');

var _reactUikitPanel2 = _interopRequireDefault(_reactUikitPanel);

var _reactUikitFlex = require('react-uikit-flex');

var _reactUikitFlex2 = _interopRequireDefault(_reactUikitFlex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexDoc = function FlexDoc(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Flex'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Utilise the power of Flexbox to create a wide range of layouts.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/otissv/react-uikit-flex' },
          'react-uikit-flex'
        ),
        ' on github.'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Usage'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        'npm install react-uikit-flex --save;\n\n// ES6\n>import Flex from \'react-uikit-flex\';\n\n// ES5\nvar Flex = require(\'react-uikit-flex\');'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Flex component uses flexbox, a concept that is still quite new but extremely powerful for creating layouts.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitFlex2.default,
        null,
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          'Box'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'left', col: '1-3', box: true },
          'Box'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'left', col: '1-3', box: true },
          'Box'
        )
      ),
      _react2.default.createElement(
        'h3',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        '<Flex>\n    <Panel col=\'1-3\' box>\n      Box\n    </Panel>\n    <Panel margin=\'left\'col=\'1-3\'box>\n      Box\n    </Panel>\n    <Panel margin=\'left\' col=\'1-3\'box>\n      Box\n    </Panel>\n</Flex>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Flex alignment'
      ),
      _react2.default.createElement(
        'p',
        null,
        'These props define the horizontal and vertical alignment of Flex items and distribute the space between them.'
      ),
      _react2.default.createElement(
        _reactUikitTable2.default,
        null,
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Prop'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Description'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'center'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to center Flex items horizontally.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'right'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to align Flex items to the right.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'top'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to align Flex items to the top.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'middle'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to align Flex items to the middle.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'bottom'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to align Flex items to the bottom'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'between'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to distribute items evenly, with the first item at the beginning and last item at the end of the main axis.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'around'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to distribute items evenly with equal space on both sides of each item.'
            )
          )
        )
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitFlex2.default,
        { middle: true, between: true },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-4', box: true, style: { height: '50px' } },
          'Box'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'left', col: '1-4', box: true, style: { height: '70px' } },
          'Box'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'left', col: '1-4', box: true, style: { height: '100px' } },
          'Box'
        )
      ),
      _react2.default.createElement(
        'h3',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        ' <Flex middle between >\n  <Panel col=\'1-3\' box style={{height: \'50px\'}}>\n    Box\n  </Panel>\n  <Panel margin=\'left\' col=\'1-3\' box style={{height: \'70px\'}}>\n    Box\n  </Panel>\n  <Panel margin=\'left\' col=\'1-3\' box style={{height: \'100px\'}}>\n    Box\n  </Panel>\n</Flex>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Flex direction'
      ),
      _react2.default.createElement(
        'p',
        null,
        'These props define the axis flex items placed on and their direction. By default, items run horizontally from left to right.'
      ),
      _react2.default.createElement(
        _reactUikitTable2.default,
        null,
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Prop'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Description'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'direction=\'rowReverse\''
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to lay out Flex items from right to left.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'direction=\'column\''
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to lay out Flex items as vertical columns.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'direction=\'columnReverse\''
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to lay out Flex items from bottom to top.'
            )
          )
        )
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitFlex2.default,
        { direction: 'columnReverse' },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', box: true },
          '1'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'bottom', col: '1-3', box: true },
          '2'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'bottom', col: '1-3', box: true },
          '3'
        )
      ),
      _react2.default.createElement(
        'h3',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        '<Flex direction=\'columnReverse\'>\n  <Panel col=\'1-3\' box>\n    1\n  </Panel>\n  <Panel margin=\'bottom\' col=\'1-3\' box>\n    2\n  </Panel>\n  <Panel margin=\'bottom\' col=\'1-3\' box>\n    3\n  </Panel>\n</Flex>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Flex row wrap'
      ),
      _react2.default.createElement(
        'p',
        null,
        'By default, Flex items fit themselves into one row. Add the ',
        _react2.default.createElement(
          'code',
          null,
          'row=\'wrap\''
        ),
        ' prop so that the items wrap into another row when they no longer fit into the viewport. To change the items\' direction so that they run from right to left, add the ',
        _react2.default.createElement(
          'code',
          null,
          'reverse'
        ),
        ' prop. The following props modify the alignment of wrapping Flex items. To force the Flex items into one row, just add the ',
        _react2.default.createElement(
          'code',
          null,
          'nowrap'
        ),
        ' prop.'
      ),
      _react2.default.createElement(
        _reactUikitTable2.default,
        null,
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Prop'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Description'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'row=\'wrap\''
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to for wrap Flex items on multiple rows.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'row=\'top\''
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to align multirow Flex items to the top.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'row=\'middle\''
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to vertically center multirow Flex items.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'row=\'bottom\''
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to align multiline Flex items to the bottom.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'row=\'between\''
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to distribute Flex item rows evenly, with the first row at the top and last row at the bottom of the container.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'row=\'around\''
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to distribute Flex rows evenly with equal space at the top and bottom of each row.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'row=\'reverse\''
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to change the direction of the Flex items from right to left.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'row=\'nowrap\''
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add this prop to remove row wrapping.'
            )
          )
        )
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitFlex2.default,
        { row: 'wrap reverse around' },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3', margin: 'bottom right', box: true },
          '1'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'bottom right', col: '1-2', box: true },
          '2'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'bottom right', col: '1-3', box: true },
          '3'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'bottom right', col: '1-3', box: true },
          '4'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { box: true },
          '5'
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { margin: 'bottom right', col: '1-3', box: true },
          '6'
        )
      ),
      _react2.default.createElement(
        'h3',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { scroll: 'text' },
        '<Flex row=\'wrap reverse around\'>\n  <Panel col=\'1-3\' margin=\'bottom right\' box>\n    1\n  </Panel>\n  <Panel margin=\'bottom right\' col=\'1-2\' box>\n    2\n  </Panel>\n  <Panel margin=\'bottom right\' col=\'1-3\' box>\n    3\n  </Panel>\n  <Panel margin=\'bottom right\' col=\'1-3\' box>\n    4\n  </Panel>\n  <Panel box>\n    5\n  </Panel>\n  <Panel margin=\'bottom right\' col=\'1-3\' box>\n    6\n  </Panel>\n</Flex>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Flex and grid'
      ),
      'The Flex component can be combined with a grid from the Grid component by adding ',
      _react2.default.createElement(
        'code',
        null,
        'grid'
      ),
      ' prop.',
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitFlex2.default,
        { grid: true },
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { col: '1-3' },
          _react2.default.createElement('img', { src: 'docs/images/placeholder_400x250.svg', alt: 'Placeholder image' })
        ),
        _react2.default.createElement(
          _reactUikitPanel2.default,
          { flexAlign: 'middle', col: '2-3' },
          _react2.default.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          )
        )
      ),
      _react2.default.createElement(
        'h3',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        '<Flex grid>\n  <Panel col=\'1-3\'>\n    <img src=\'docs/images/placeholder_400x250.svg\' alt=\'Placeholder image\' />\n  </Panel>\n  <Panel flexAlign=\'middle\' col=\'2-3\'>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem\n      ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum\n      dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor\n      sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,\n      consectetur adipisicing elit.\n    </p>\n  </Panel>\n</Flex>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Flex order'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To see how to order Flex items see ',
        _react2.default.createElement(
          'code',
          null,
          'order'
        ),
        ' prop in the Base component under Utiliy props.'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Flex Props'
      ),
      _react2.default.createElement(
        'p',
        null,
        'See Base for additional utility props.'
      ),
      _react2.default.createElement(
        _reactUikitTable2.default,
        null,
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Prop'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Type'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'around'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'bool'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'center'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'bool'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'bottom'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'bool'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'between'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'bool'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'direction'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'oneOf',
              _react2.default.createElement('br', null),
              'rowRevers, column or columnReverse'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'grid'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'bool'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'middle'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'bool'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'right'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'bool'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'row'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'string',
              _react2.default.createElement('br', null),
              'wrap, bottom, middle, top, between, around, reverse and nowrap'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'code',
                null,
                'top'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'bool'
            )
          )
        )
      )
    )
  );
};

exports.default = FlexDoc;