'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUikitCodeblock = require('react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

var _reactUikitImg = require('react-uikit-img');

var _reactUikitImg2 = _interopRequireDefault(_reactUikitImg);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImgDoc = function ImgDoc(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Img'
      ),
      _react2.default.createElement(
        'p',
        { className: 'uk-article-lead' },
        'Easily create responsive images.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/otissv/react-uikit-img' },
          'react-uikit-img'
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
        'npm install react-uikit-img --save;\n\n// ES6\nimport Img from \'react-uikit-img\';\n\n// ES5\nvar Img = require(\'react-uikit-img\');\n'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(_reactUikitImg2.default, { width: '300px', height: '200px', src: 'docs/images/placeholder_200x150_2.svg' }),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<Img width=\'300px\' height=\'200px\' src=\'docs/images/placeholder_200x150_2.svg\' />\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Responsive image'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The Image component can provide different images for various viewport widths. Enable responsive behavior by adding one or all of the responsive props small, medium, large, xlarge.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Each responsive size takes a JSON object.'
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
              'JSON key'
            ),
            _react2.default.createElement(
              'th',
              { className: 'uk-text-left' },
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
              { className: 'uk-text-left' },
              'width'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'The width of the image. The defualt width is 100% if no width is specified'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'height'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'The height of the image. The defualt height is auto if no height is specified'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'src'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'The src url for the image'
            )
          )
        )
      ),
      _react2.default.createElement(
        'h4',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(_reactUikitImg2.default, {
        small: { height: '150px', src: 'docs/images/placeholder_200x150_1.svg' },
        medium: { height: '250px', src: 'docs/images/placeholder_200x150_2.svg' },
        large: { height: '350px', src: 'docs/images/placeholder_200x150_3.svg' },
        xlarge: { height: '450px', src: 'docs/images/placeholder_200x150_4.svg' }
      }),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<Img\n  small={{height: \'150px\', src: \'docs/images/placeholder_200x150_1.svg\'} }\n  medium={{height: \'250px\', src: \'docs/images/placeholder_200x150_2.svg\'} }\n  large={{height: \'350px\', src: \'docs/images/placeholder_200x150_3.svg\'} }\n  xlarge={{height: \'450px\', src: \'docs/images/placeholder_200x150_4.svg\'} }\n/>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Cover images'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'code',
          null,
          'cover'
        ),
        ' prop allows you to create fullscreen teasers using images. It will always be centered vertically and horizontally and cover its container without losing its proportions. You can also place additional content, like text or images on top of the image by placing it inside of the ',
        _react2.default.createElement(
          'code',
          null,
          '<Image>'
        ),
        ' component.'
      ),
      _react2.default.createElement(
        'h4',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitImg2.default,
        { cover: true,
          small: { height: '150px', src: 'docs/images/placeholder_200x150_1.svg' },
          medium: { height: '250px', src: 'docs/images/placeholder_200x150_2.svg' },
          large: { height: '350px', src: 'docs/images/placeholder_200x150_3.svg' },
          xlarge: { height: '450px', src: 'docs/images/placeholder_200x150_4.svg' }
        },
        _react2.default.createElement(
          'h1',
          null,
          'Cover image'
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
        '<Img cover\n  small={{height: \'150px\', src: \'docs/images/placeholder_200x150_1.svg\'} }\n  medium={{height: \'250px\', src: \'docs/images/placeholder_200x150_2.svg\'} }\n  large={{height: \'350px\', src: \'docs/images/placeholder_200x150_3.svg\'} }\n  xlarge={{height: \'450px\', src: \'docs/images/placeholder_200x150_4.svg\'} }\n>\n\n  <h1>Cover image</h1>\n</Img>\n'
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
                'alt'
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
                'cover'
              )
            ),
            _react2.default.createElement(
              'td',
              { colSpan: '2' },
              'Bool'
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
                'large'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'object',
              _react2.default.createElement('br', null),
              '{width, height, src}'
            ),
            _react2.default.createElement('td', { className: 'uk-text-left' })
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
              '{width, height, src}'
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
              '{width, height, src}'
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
              '{width, height, src}'
            )
          )
        )
      )
    )
  );
};

exports.default = ImgDoc;