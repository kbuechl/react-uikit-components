'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUikitComment = require('react-uikit-comment');

var _reactUikitComment2 = _interopRequireDefault(_reactUikitComment);

var _reactUikitCodeblock = require('react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

var _reactUikitButton = require('react-uikit-button');

var _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var meta = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(_reactUikitButton2.default, { type: 'link', context: 'link', size: 'mini', body: '12 days ago' }),
  ' |',
  _react2.default.createElement(_reactUikitButton2.default, { type: 'link', context: 'link', size: 'mini', body: 'Profile' }),
  ' |',
  _react2.default.createElement(_reactUikitButton2.default, { type: 'link', context: 'link', size: 'mini', body: '#' })
);

var CommentDoc = function CommentDoc(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Commnet'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Create comments, for example for articles.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/otissv/react-uikit-comment' },
          'react-uikit-comment'
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
        'npm install react-uikit-comment --save;\n\n//ES6\nimport Commnet from \'react-uikit-comment\';\n\n// ES5\nvar Commnet = require(\'react-uikit-comment\');'
      ),
      _react2.default.createElement('hr', null),
      _react2.default.createElement(
        'p',
        null,
        'The Comment component consists of a comment header, including an avatar, a title and meta data, and a comment body.'
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
                'avatar'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add avatar prop to create an avatar for the comment author'
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
                'title'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add tilte prop to createCreates a comment title.'
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
                'meta'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add meta prop to add meta data about the comment.'
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
                'body'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'Add body prop to add text comment body. Body is overridden if commet has children.'
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
        _reactUikitComment2.default,
        { title: 'Author', meta: meta,
          avatar: { src: 'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder' } },
        _react2.default.createElement(
          'p',
          null,
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
        )
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        'const meta = <div>\n  <Button type=\'link\' context=\'link\' size=\'mini\' body=\'12 days ago\'/> |\n  <Button type=\'link\' context=\'link\' size=\'mini\' body=\'Profile\'/> |\n  <Button type=\'link\' context=\'link\' size=\'mini\' body=\'#\'/>\n</div>;\n\n...\n<Commnet title=\'Author\' meta={meta}\n  avatar={{src:\'docs/images/placeholder_avatar.svg\', alt: \'Avatar placeholder\'}}>\n\n  <p>\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam\n    erat, sed diam voluptua.\n  </p>\n</Commnet>\n...\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Comment Color'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To style a comment differently, for example to highlight it as the admin\'s comment, just add the ',
        _react2.default.createElement(
          'code',
          null,
          'primary'
        ),
        ' prop.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitComment2.default,
        { primary: true, title: 'Author', meta: '12 days ago | Profile | #',
          avatar: { src: 'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder' } },
        _react2.default.createElement(
          'p',
          null,
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
        )
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<Commnet primary title=\'Author\' meta=\'12 days ago | Profile | #\'\n  avatar={{src:\'docs/images/placeholder_avatar.svg\', alt: \'Avatar placeholder\'}}>\n\n  <p>\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam\n    erat, sed diam voluptua.\n  </p>\n</Commnet>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Commnet Props'
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
                'avatar'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'object',
              _react2.default.createElement('br', null),
              ' ',
              '{src, alt }'
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
                'body'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'string'
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
                'meta'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'any'
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
                'primary'
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
                'title'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              'string'
            )
          )
        )
      )
    )
  );
};

exports.default = CommentDoc;