'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUikitCodeblock = require('react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

var _reactUikitThumbnail = require('react-uikit-thumbnail');

var _reactUikitThumbnail2 = _interopRequireDefault(_reactUikitThumbnail);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThumbnailDoc = function ThumbnailDoc(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Thumbnail'
      ),
      _react2.default.createElement(
        'p',
        { className: 'uk-article-lead' },
        'Create different thumbnail images.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/otissv/react-uikit-thumbnail' },
          'react-uikit-thumbnail'
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
        'npm install react-uikit-thumbnail --save;\n\n// ES6\n<code>import Article from \'react-uikit-thumbnail\';\n\n// ES5\nvar Article = require(\'react-uikit-thumbnail\');'
      ),
      _react2.default.createElement('hr', { className: 'uk-article-divider' }),
      _react2.default.createElement(
        'p',
        null,
        'Thumbnail component creates a thumbnail around the Img component.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'There are three types of thumbnails: block, link and figure. Block is the defualt type. To change the type of thumbnail add the ',
        _react2.default.createElement(
          'code',
          null,
          'type'
        ),
        ' prop and the respective type.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(_reactUikitThumbnail2.default, { height: '100px', src: 'docs/images/placeholder_200x150_2.svg' }),
      _react2.default.createElement(_reactUikitThumbnail2.default, { type: 'link', height: '100px', src: 'docs/images/placeholder_200x150_2.svg' }),
      _react2.default.createElement(_reactUikitThumbnail2.default, { type: 'figure', height: '100px', src: 'docs/images/placeholder_200x150_2.svg' }),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<Thumbnail height=\'100px\' src=\'docs/images/placeholder_200x150_2.svg\' />\n<Thumbnail type=\'link\' height=\'100px\' src=\'docs/images/placeholder_200x150_2.svg\' />\n<Thumbnail type=\'figure\' height=\'100px\' src=\'docs/images/placeholder_200x150_2.svg\' />\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Thumbnail caption'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To add a caption, simply add it as a child of the thumbnail.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitThumbnail2.default,
        { height: '100px', src: 'docs/images/placeholder_200x150_2.svg' },
        'Caption ',
        _react2.default.createElement(
          'code',
          null,
          'div'
        )
      ),
      _react2.default.createElement(
        _reactUikitThumbnail2.default,
        { type: 'link', height: '100px', src: 'docs/images/placeholder_200x150_2.svg' },
        'Caption ',
        _react2.default.createElement(
          'code',
          null,
          'link'
        )
      ),
      _react2.default.createElement(
        _reactUikitThumbnail2.default,
        { type: 'figure', height: '100px', src: 'docs/images/placeholder_200x150_2.svg' },
        'Caption ',
        _react2.default.createElement(
          'code',
          null,
          'figure'
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
        '<Thumbnail height=\'100px\' src=\'docs/images/placeholder_200x150_2.svg\'>\nCaption <code>div</code>\n</Thumbnail>\n<Thumbnail type=\'link\' height=\'100px\' src=\'docs/images/placeholder_200x150_2.svg\'>\nCaption <code>link</code>\n</Thumbnail>\n<Thumbnail type=\'figure\' height=\'100px\' src=\'docs/images/placeholder_200x150_2.svg\'>\nCaption <code>figure</code>\n</Thumbnail>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Thumbnail sizes'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Thumbnails can be resized using the ',
        _react2.default.createElement(
          'code',
          null,
          'size'
        ),
        ' prop.'
      ),
      _react2.default.createElement('hr', { className: 'uk-article-divider' }),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitThumbnail2.default,
        { size: 'large', src: 'docs/images/placeholder_600x400.svg' },
        _react2.default.createElement(
          'code',
          null,
          'large'
        )
      ),
      _react2.default.createElement(
        _reactUikitThumbnail2.default,
        { size: 'medium', src: 'docs/images/placeholder_600x400.svg' },
        _react2.default.createElement(
          'code',
          null,
          'medium'
        )
      ),
      _react2.default.createElement(
        _reactUikitThumbnail2.default,
        { size: 'small', src: 'docs/images/placeholder_600x400.svg' },
        _react2.default.createElement(
          'code',
          null,
          'small'
        )
      ),
      _react2.default.createElement(
        _reactUikitThumbnail2.default,
        { size: 'mini', src: 'docs/images/placeholder_600x400.svg' },
        _react2.default.createElement(
          'code',
          null,
          'mini'
        )
      ),
      _react2.default.createElement(
        _reactUikitThumbnail2.default,
        { size: 'expand', src: 'docs/images/placeholder_600x400.svg' },
        _react2.default.createElement(
          'code',
          null,
          'expand'
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
        '<Thumbnail size=\'large\' src=\'docs/images/placeholder_600x400.svg\'>\n<code>large</code>\n</Thumbnail>\n<Thumbnail size=\'medium\' src=\'docs/images/placeholder_600x400.svg\'>\n<code>medium</code>\n</Thumbnail>\n<Thumbnail size=\'small\' src=\'docs/images/placeholder_600x400.svg\'>\n<code>small</code>\n</Thumbnail>\n<Thumbnail size=\'mini\' src=\'docs/images/placeholder_600x400.svg\'>\n<code>mini</code>\n</Thumbnail>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Img Props'
      ),
      'Props can be passed to the Img compoent by using the ',
      _react2.default.createElement(
        'code',
        null,
        'img'
      ),
      ' prop. See Img compoent for further details.'
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Thumbnail Props'
      ),
      _react2.default.createElement(
        'p',
        null,
        'See base component for additional utility props.'
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
              { className: 'uk-text-left' },
              'Prop'
            ),
            _react2.default.createElement(
              'th',
              { className: 'uk-text-left' },
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
              { className: 'uk-text-left' },
              _react2.default.createElement(
                'code',
                null,
                'height'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'string'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              _react2.default.createElement(
                'code',
                null,
                'img'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'object',
              _react2.default.createElement('br', null),
              'See Img component props.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              _react2.default.createElement(
                'code',
                null,
                'medium'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'object',
              _react2.default.createElement('br', null),
              'See Img component props.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              _react2.default.createElement(
                'code',
                null,
                'large'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'object',
              _react2.default.createElement('br', null),
              'See Img component props.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              _react2.default.createElement(
                'code',
                null,
                'small'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'object',
              _react2.default.createElement('br', null),
              'See Img component props.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              _react2.default.createElement(
                'code',
                null,
                'src'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'string',
              _react2.default.createElement('br', null)
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              _react2.default.createElement(
                'code',
                null,
                'size'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              'large, medium, small, mini or expand'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              _react2.default.createElement(
                'code',
                null,
                'type'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              'block, figure or link. Default is block.'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              _react2.default.createElement(
                'code',
                null,
                'width'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'string'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              _react2.default.createElement(
                'code',
                null,
                'xlarge'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'object',
              _react2.default.createElement('br', null),
              'See Img component props.'
            )
          )
        )
      )
    )
  );
};

exports.default = ThumbnailDoc;