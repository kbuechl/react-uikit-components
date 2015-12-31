'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUikitArticle = require('react-uikit-article');

var _reactUikitArticle2 = _interopRequireDefault(_reactUikitArticle);

var _reactUikitCodeblock = require('react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

var _reactUikitNote = require('react-uikit-note');

var _reactUikitNote2 = _interopRequireDefault(_reactUikitNote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleDoc = function ArticleDoc(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Article'
      ),
      _react2.default.createElement(
        'p',
        { className: 'uk-article-lead' },
        'Create articles within your page.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/otissv/react-uikit-article' },
          'react-uikit-article'
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
        'npm install react-uikit-article --save;\n\n// ES6\nimport Article from \'react-uikit-article\';\n\n// ES5\nvar Article = require(\'react-uikit-article\');\n'
      ),
      _react2.default.createElement('hr', { className: 'uk-article-divider' }),
      _react2.default.createElement(
        'p',
        null,
        'The article component constists of the article itself, a title, a lead and meta data.'
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
              _react2.default.createElement(
                'code',
                null,
                'title'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Creates an article title.'
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
                'meta'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Adds meta data about the article.'
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
                'lead'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Highlights opening paragraph of the article'
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
        _reactUikitArticle2.default,
        {
          title: 'Article title',
          meta: 'Written by Super User on 12 April 2012. Posted in Blog',
          lead: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        _react2.default.createElement(
          'p',
          null,
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        ),
        _react2.default.createElement('hr', { className: 'uk-article-divider' }),
        _react2.default.createElement(
          'p',
          null,
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        ),
        _react2.default.createElement(
          'a',
          { href: '#' },
          'Read more'
        )
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { scroll: 'text', syntax: 'xml' },
        '  <Article\n  title=\'Article title\'\n  meta=\'Written by Super User on 12 April 2012. Posted in Blog\'\n  lead=\'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.\' >\n\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n  </p>\n\n  <hr className="uk-article-divider" />\n\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n  </p>\n  <a href="#">Read more</a>\n</Article>\n'
      ),
      _react2.default.createElement(
        _reactUikitNote2.default,
        null,
        'To create separate sections in an article use ',
        _react2.default.createElement(
          'code',
          null,
          '<hr className="uk-article-divider" />'
        ),
        '.'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Artilce Props'
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
                'lead'
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
                'meta'
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
                'onClose'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'func'
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
                'title'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'string'
            )
          )
        )
      )
    )
  );
};

exports.default = ArticleDoc;