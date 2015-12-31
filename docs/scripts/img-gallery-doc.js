'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUikitCodeblock = require('react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

var _reactUikitImgGallery = require('react-uikit-img-gallery');

var _reactUikitImgGallery2 = _interopRequireDefault(_reactUikitImgGallery);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImgGalleryDoc = function ImgGalleryDoc(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Img Gallery'
      ),
      _react2.default.createElement(
        'p',
        { className: 'uk-article-lead' },
        'Create gallery of images.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/otissv/react-uikit-img-gallery' },
          'react-uikit-img-gallery'
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
        'npm install react-uikit-img-gallery --save;\n\n// ES6\nimport ImgGallery from \'react-uikit-img-gallery\';\n\n// ES5\nvar ImgGallery = require(\'react-uikit-img-gallery\');\n'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(_reactUikitImgGallery2.default, {
        items: [{ src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }]
      }),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<ImgGroup\n  items={[\n    {src: \'docs/images/placeholder_200x150_2.svg\'},\n    {src: \'docs/images/placeholder_200x150_2.svg\'},\n    {src: \'docs/images/placeholder_200x150_2.svg\'},\n    {src: \'docs/images/placeholder_200x150_2.svg\'},\n    {src: \'docs/images/placeholder_200x150_2.svg\'},\n    {src: \'docs/images/placeholder_200x150_2.svg\'}\n  ]}\n/>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Img gallery items'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'code',
          null,
          'items'
        ),
        ' is an array wich takes a collection of JSON objects. JSON object properties can be an any of the props fom the Img component.'
      ),
      _react2.default.createElement(_reactUikitImgGallery2.default, {
        items: [{ src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }, { src: 'docs/images/placeholder_200x150_2.svg', margin: 'bottom right' }]
      }),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<ImgGroup\n  items={[\n    {src: \'docs/images/placeholder_200x150_2.svg\', margin: \'bottom right\'},\n    {src: \'docs/images/placeholder_200x150_2.svg\', margin: \'bottom right\'},\n    {src: \'docs/images/placeholder_200x150_2.svg\', margin: \'bottom right\'},\n    {src: \'docs/images/placeholder_200x150_2.svg\', margin: \'bottom right\'},\n    {src: \'docs/images/placeholder_200x150_2.svg\', margin: \'bottom right\'},\n    {src: \'docs/images/placeholder_200x150_2.svg\', margin: \'bottom right\'}\n  ]}\n/>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Img gallery props'
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
                'items'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'array of objects.',
              _react2.default.createElement('br', null),
              'See Img component for props.'
            )
          )
        )
      )
    )
  );
};

exports.default = ImgGalleryDoc;