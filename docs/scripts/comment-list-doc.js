'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUikitCodeblock = require('react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

var _reactUikitCommentList = require('react-uikit-comment-list');

var _reactUikitCommentList2 = _interopRequireDefault(_reactUikitCommentList);

var _reactUikitComment = require('react-uikit-comment');

var _reactUikitComment2 = _interopRequireDefault(_reactUikitComment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentListDoc = function CommentListDoc(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/2.24.2/css/uikit.almost-flat.min.css' }),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Commentt List'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/otissv/react-uikit-comment-list' },
          'react-uikit-comment-list'
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
        'npm install react-uikit-comment-list --save;\n\n// ES6\nimport CommentList from \'react-uikit-comment-list\';\n\n// ES5\nvar CommentList = require(\'react-uikit-comment-list\'&#41);'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'p',
        null,
        'The CommentList componets enables the creattion of comment lists. I also supports nested comments'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitCommentList2.default,
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactUikitComment2.default,
            { title: 'Author', meta: '12 days ago | Profile | #',
              avatar: { src: 'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder' } },
            _react2.default.createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            )
          ),
          _react2.default.createElement(
            _reactUikitCommentList2.default,
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactUikitComment2.default,
                { title: 'Author', meta: '12 days ago | Profile | #',
                  avatar: { src: 'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder' } },
                _react2.default.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                )
              )
            )
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
        { scroll: 'text' },
        '<CommentList>\n  <li>\n    <Commnet title=\'Author\' meta=\'12 days ago | Profile | #\'\n      avatar={{src:\'docs/images/placeholder_avatar.svg\', alt: \'Avatar placeholder\'}}>\n\n      <p>\n        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam\n        erat, sed diam voluptua.\n      </p>\n    </Commnet>\n    <CommentList>\n      <li>\n        <Commnet title=\'Author\' meta=\'12 days ago | Profile | #\'\n          avatar={{src:\'docs/images/placeholder_avatar.svg\', alt: \'Avatar placeholder\'}}>\n\n          <p>\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam\n            erat, sed diam voluptua.\n          </p>\n        </Commnet>\n      </li>\n    </CommentList>\n  </li>\n</CommentList>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Commet list props'
      ),
      'See Base for additional utility props.'
    )
  );
};

exports.default = CommentListDoc;