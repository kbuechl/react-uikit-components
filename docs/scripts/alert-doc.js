'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUikitAlert = require('react-uikit-alert');

var _reactUikitAlert2 = _interopRequireDefault(_reactUikitAlert);

var _reactUikitCodeblock = require('react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

var _reactUikitButton = require('react-uikit-button');

var _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);

var _reactUikitBase = require('react-uikit-base');

var _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);

var _velocityAnimate = require('velocity-animate');

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleAlertOpen = function handleAlertOpen(e, kitid) {
  e.preventDefault();
  var element = _reactUikitBase2.default.helpers.getElement(kitid);

  (0, _velocityAnimate2.default)(element, {
    opacity: [1, 0.5],
    translateX: [0, -300]
  }, { display: 'block' });
};

var handleAlertClose = function handleAlertClose(e, kitid) {
  e.preventDefault();
  var element = _reactUikitBase2.default.helpers.getElement(kitid);

  (0, _velocityAnimate2.default)(element, {
    opacity: [0, 1],
    translateX: [-300, 0]
  }, { display: 'block' });
};

var AlertDoc = function AlertDoc(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Alert'
      ),
      _react2.default.createElement(
        'p',
        { className: 'uk-article-lead' },
        'Defines styles for success, warning and error messages.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/otissv/react-uikit-alert' },
          'react-uikit-alert'
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
        'npm install react-uikit-alert --save;\n\n// ES6\nimport Alert from \'react-uikit-alert\';\n\n// ES5\nvar Alert = require(\'react-uikit-alert\');\n'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The alert component creates an alert box.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To add a close button add the ',
        _react2.default.createElement(
          'code',
          null,
          'close'
        ),
        ' prop with a callback. The kitid as well as the event will be passed to the callback alllowing for things such as animations.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'By default Alert components are set to display none. Add the ',
        _react2.default.createElement(
          'code',
          null,
          'show'
        ),
        ' to make the component visible.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(_reactUikitButton2.default, {
        body: 'Open Alert',
        onClick: function onClick(e, kitid) {
          return handleAlertOpen(e, 'alert1');
        }
      }),
      _react2.default.createElement(
        _reactUikitAlert2.default,
        { close: function close(e, kitid) {
            return handleAlertClose(e, kitid);
          }, kitid: 'alert1' },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { scroll: 'text', syntax: 'xml' },
        'const handleAlertOpen = (e, kitid) => {\n  e.preventDefault();\n  const element = uikit.helpers.getElement(kitid);\n\n  velocity(\n    element,\n    {\n      opacity: [1, 0.5],\n      translateX: [0, -300]\n    },\n    {display: \'block\'}\n  );\n};\n\nconst handleAlertClose = (e, kitid) => {\n  e.preventDefault();\n  const element = uikit.helpers.getElement(kitid);\n\n  velocity(\n    element,\n    {\n      opacity: [0, 1],\n      translateX: [-300, 0]\n    },\n    {display: \'block\'}\n  );\n};\n\n...\n\n<Button\n  body=\'Open Alert\'\n  onClick={(e, kitid) => handleAlertOpen(e, \'alert1\')}\n/>\n\n<Alert show close={(e, kitid) => handleAlertClose(e, kitid)} kitid=\'alert1\'>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n  tempor incididunt ut labore et dolore magna aliqua.\n</Alert>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Alert contexts'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To change the context of an alert add ',
        _react2.default.createElement(
          'code',
          null,
          'context=\'success\''
        ),
        ', ',
        _react2.default.createElement(
          'code',
          null,
          'context=\'warning\''
        ),
        ', or ',
        _react2.default.createElement(
          'code',
          null,
          'context=\'danger\''
        ),
        ' prop.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitAlert2.default,
        { show: true, context: 'success' },
        'To indicate success or a positive message add the ',
        _react2.default.createElement(
          'code',
          null,
          'context=\'success\''
        ),
        ' prop.'
      ),
      _react2.default.createElement(
        _reactUikitAlert2.default,
        { show: true, context: 'warning' },
        'To indicate a message containing a warning add the ',
        _react2.default.createElement(
          'code',
          null,
          'context=\'warning\''
        ),
        ' prop.'
      ),
      _react2.default.createElement(
        _reactUikitAlert2.default,
        { show: true, context: 'danger' },
        'To indicate an important message add the ',
        _react2.default.createElement(
          'code',
          null,
          'context=\'danger\''
        ),
        ' prop.'
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<Alert show context=\'success\'>\nTo indicate success or a positive message add the <code>context=\'success\'</code> prop.\n</Alert>\n<Alert show context=\'warning\'>\nTo indicate a message containing a warning add the <code>context=\'warning\'</code> prop.\n</Alert>\n<Alert show context=\'danger\'>\nTo indicate an important message add the <code>context=\'danger\'</code> prop.\n</Alert>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Alert size'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To increase the spacing in an alert add the ',
        _react2.default.createElement(
          'code',
          null,
          'large'
        ),
        ' prop to the alert component.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitAlert2.default,
        { show: true, large: true },
        _react2.default.createElement(
          'h1',
          null,
          'Important notice'
        ),
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      ),
      _react2.default.createElement(
        'h4',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        { syntax: 'xml' },
        '<Alert show large >\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua.\n</Alert>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Alert Props'
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
                'close'
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
                'context'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf ',
              _react2.default.createElement('br', null),
              'success, warning or danger'
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
              'bool'
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
                'show'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'bool'
            )
          )
        )
      )
    )
  );
};

exports.default = AlertDoc;