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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseDoc = function BaseDoc(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'UIKit base'
      ),
      _react2.default.createElement(
        'p',
        { className: 'uk-article-lead' },
        'Create react components for UIKit.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/otissv/react-uikit-base' },
          'react-uikit-base'
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
        'npm install react-uikit-base --save;\n\n// ES6\n<code>import uikit from \'react-uikit-base\';\n\n// ES5\nvar uikit = require;(\'react-uikit-base\');\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Base'
      ),
      _react2.default.createElement(
        'p',
        null,
        'To create a uikit component pass a component as an argument to the base property. The new component will have all the utility props avaliable to it.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'code' },
        'Code'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        'import React from \'react\';\n\nconst Component = (props) => {\nconst cssClassNames = uikit.helpers.cleanClasses([\n  this.props.classes,\n  this.props.className\n]);\n\nreturn <div className={cssClassNames}>\n  {this.props.children}\n</div>;\n};\n\nuikit.base(Component);\n\n// <Component />\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Element'
      ),
      _react2.default.createElement(
        'p',
        null,
        'An empty component that has all the utility props can be quickly created by using the element property.',
        _react2.default.createElement('br', null),
        'This can be useful for generic containers.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        'import React from \'react\';\n\nconst Col = uikit.element;\n\n// <Col>\n//   {this.props.children}\n// </Col>\n'
      )
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Helper functions'
      ),
      _react2.default.createElement(
        'p',
        null,
        'UIkit components come with a number of helper function to assist in creating new components.'
      ),
      _react2.default.createElement('hr', { className: 'uk-article-divider' }),
      _react2.default.createElement(
        'h3',
        null,
        'breakpoints'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Returns media and screen objects for handling different responsive sizes.'
      ),
      _react2.default.createElement(
        'h4',
        null,
        'Media'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Returns a string of the media size.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(_reactUikitTable2.default, { striped: true, caption: 'Responsive media sizes', head: '*', body: [{ Media: 'small', Size: 767 }, { Media: 'medium', Size: 768 }, { Media: 'large', Size: 960 }, { Media: 'xlarge', Size: 1200 }] }),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        'breakpoints.small; // 767\nbreakpoints.medium; // 768\nbreakpoints.large; // 960\nbreakpoints.xlarge; // 1200\n'
      ),
      _react2.default.createElement(
        'h4',
        null,
        'Screen'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Returns a true or false depending on the window.innerWidth.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(_reactUikitTable2.default, { striped: true, caption: 'Responsive media sizes', head: '*', body: [{ Screen: 'small', Size: 'less than 767' }, { Screen: 'medium', Size: 'More than 768 and less than 960' }, { Screen: 'large', Size: 'More than 960 and less than 1200' }, { Screen: 'xlarge', Size: 'More than 1200' }] }),
      _react2.default.createElement('hr', { className: 'uk-article-divider' }),
      _react2.default.createElement(
        'h3',
        null,
        'closeClass'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Return UiKits \'uk-close\' class. If alt is passed as an argument \'uk-close-alt\' is returned instead.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        'closeClass();    // \'uk-close\';\ncloseClass(alt); // \'uk-close-alt\';\n'
      ),
      _react2.default.createElement('hr', { className: 'uk-article-divider' }),
      _react2.default.createElement(
        'h3',
        null,
        'colSpan'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Returns an array of available column width spans.See utility props below.'
      ),
      _react2.default.createElement('hr', { className: 'uk-article-divider' }),
      _react2.default.createElement(
        'h3',
        null,
        'cleanClasses'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Returns a new array with all falsey values removed.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        '\nclass Alert (props) => {\n...\nconst cssClassNames = uikit.helpers.cleanClasses([\n  \'uk-alert\',\n  props.large ? \'uk-alert-large\' : null,\n  props.className\n]);\n...\n}\n\n<Alert kitid=\'alert1\'/>\n// <div data-kitid="alert1" class="uk-alert"></div>\n'
      ),
      _react2.default.createElement('hr', { className: 'uk-article-divider' }),
      _react2.default.createElement(
        'h3',
        null,
        'cleanProps'
      ),
      _react2.default.createElement(
        'p',
        null,
        'cleanProps take two arguments, props object and array of keys to be removed. A new object literal is returned excluding keys that were in the array.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        'const MyComponent (props) = {\nignoreProps = [\'type\'];\n\nreturn <div {...cleanProps(props, ignoreProps)}></div>;\n};\n\n\n'
      ),
      _react2.default.createElement('hr', { className: 'uk-article-divider' }),
      _react2.default.createElement(
        'h3',
        null,
        'getClass'
      ),
      _react2.default.createElement(
        'p',
        null,
        'getClass takes two arguments. The key as a string and an object. If the key exists the value is returned, else an empty string is returned.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        '\n'
      ),
      _react2.default.createElement('hr', { className: 'uk-article-divider' }),
      _react2.default.createElement(
        'h3',
        null,
        'stringToClasses'
      ),
      _react2.default.createElement(
        'p',
        null,
        'stringToClasses take two arguments. The string of keys and an object. ',
        _react2.default.createElement('br', null),
        'A new string is returned containing all the values of the keys that exist in the object.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        '\n'
      ),
      _react2.default.createElement('hr', { className: 'uk-article-divider' }),
      _react2.default.createElement(
        'h3',
        null,
        'queryData'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Returns DOM node that matches a data attribute value.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        'queryData(\'myAttr="myid2"\');\n\n// <div data-myAttr="myid2"></div>\n'
      ),
      _react2.default.createElement('hr', { className: 'uk-article-divider' }),
      _react2.default.createElement(
        'h3',
        null,
        'queryDataAll'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Returns all DOM nodes that match a data attribute value.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        'queryData(\'myAttr="myid2"\');\n\n// [\n//   <div data-myAttr="myid2"></div>\n//   <div data-myAttr="myid2"></div>\n//   <div data-myAttr="myid2"></div>\n// ]\n'
      ),
      _react2.default.createElement('hr', { className: 'uk-article-divider' }),
      _react2.default.createElement(
        'h3',
        null,
        'getElement'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Returns DOM node that matches a data-kitid value.'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'example' },
        'Example'
      ),
      _react2.default.createElement(
        _reactUikitCodeblock2.default,
        null,
        'getElement(\'myid1\');\n\n// <div data-kitid="myid1"></div>\n'
      ),
      _react2.default.createElement('hr', { className: 'uk-article-divider' })
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Utility props'
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
                'align'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              ' left, right, center, middleLeft or middleRight'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Aligns elements with spacing between the text and the element.'
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
                'children'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'any'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Children elements.'
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
                'className'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'string'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'CSS class names.'
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
                'borderRadius'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              ' rounded or circle'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Add rounded corners to an element.'
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
                'clear'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              'fix, nbfc and alt'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Clears floats.'
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
                'center'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'bool'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Center a container. For any other block element, you additionally need to apply a width.'
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
                'col'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              '\'1-1\'',
              _react2.default.createElement('br', null),
              '\'1-2\'',
              _react2.default.createElement('br', null),
              '\'1-3\', \'2-3\'',
              _react2.default.createElement('br', null),
              '\'1-4\', \'2-4\', \'3-4\'',
              _react2.default.createElement('br', null),
              '\'1-5\', \'2-5\', \' 3-5\', \'4-5\'',
              _react2.default.createElement('br', null),
              '\'1-6\', \'2-6\', \' 3-6\', \'4-6\', \'5-6\'',
              _react2.default.createElement('br', null),
              '\'1-10\', \'2-10\', \'3-10\', \'4-10\', \'5-10\', \'6-10\', \'7-10\', \'8-10\', \'9-10\''
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Wraps the component inside of a div element and adds width class based on fraction.'
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
                'colsSmall'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              '\'1-1\'',
              _react2.default.createElement('br', null),
              '\'1-2\'',
              _react2.default.createElement('br', null),
              '\'1-3\', \'2-3\'',
              _react2.default.createElement('br', null),
              '\'1-4\', \'2-4\', \'3-4\'',
              _react2.default.createElement('br', null),
              '\'1-5\', \'2-5\', \' 3-5\', \'4-5\'',
              _react2.default.createElement('br', null),
              '\'1-6\', \'2-6\', \' 3-6\', \'4-6\', \'5-6\'',
              _react2.default.createElement('br', null),
              '\'1-10\', \'2-10\', \'3-10\', \'4-10\', \'5-10\', \'6-10\', \'7-10\', \'8-10\', \'9-10\''
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Wraps the component inside of a div element and adds width class based on fraction if the device width is 480px or higher'
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
                'colsMedium'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              '\'1-1\'',
              _react2.default.createElement('br', null),
              '\'1-2\'',
              _react2.default.createElement('br', null),
              '\'1-3\', \'2-3\'',
              _react2.default.createElement('br', null),
              '\'1-4\', \'2-4\', \'3-4\'',
              _react2.default.createElement('br', null),
              '\'1-5\', \'2-5\', \' 3-5\', \'4-5\'',
              _react2.default.createElement('br', null),
              '\'1-6\', \'2-6\', \' 3-6\', \'4-6\', \'5-6\'',
              _react2.default.createElement('br', null),
              '\'1-10\', \'2-10\', \'3-10\', \'4-10\', \'5-10\', \'6-10\', \'7-10\', \'8-10\', \'9-10\''
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Wraps the component inside of a div element and adds width based class on fraction if the device width is 768px or higher'
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
                'colsLarge'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              '\'1-1\'',
              _react2.default.createElement('br', null),
              '\'1-2\'',
              _react2.default.createElement('br', null),
              '\'1-3\', \'2-3\'',
              _react2.default.createElement('br', null),
              '\'1-4\', \'2-4\', \'3-4\'',
              _react2.default.createElement('br', null),
              '\'1-5\', \'2-5\', \' 3-5\', \'4-5\'',
              _react2.default.createElement('br', null),
              '\'1-6\', \'2-6\', \' 3-6\', \'4-6\', \'5-6\'',
              _react2.default.createElement('br', null),
              '\'1-10\', \'2-10\', \'3-10\', \'4-10\', \'5-10\', \'6-10\', \'7-10\', \'8-10\', \'9-10\''
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Wraps the component inside of a div element and adds width based class on fraction if the device width is 960px or higher'
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
                'contrast'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'bool'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Changes the color of the element.'
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
                'display'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              'block, inline or inlineblock.'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Changes the display style element'
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
                'float'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              'left or right.'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Floats an element left or right.'
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
                'hidden'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'string',
              _react2.default.createElement('br', null),
              'all, invisible, large, small, medium, touch and notouch.'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Hides element on different devices.'
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
                'kitid'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'string'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Adds a data attribute to be used as an identifier.'
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
                'list'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'bool'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Wraps the component inside of a li element'
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
                'margin'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'string',
              _react2.default.createElement('br', null),
              'top, left, bottom, right, smallTop, smallLeft, smallBottom, smallRight, largeTop, largeLeft, largeBottom, largeRight, remove, removeTop and removeBottom.'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Adds spacing to block elements'
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
                'order'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              'first, firstSmall, firstMedium, firstLarge, firstXlarge, last, lastSmall, lastMedium, lastLarge, lastXlarge'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Changes the order of an item if it is a child of a flexbox.'
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
                'padding'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'string',
              _react2.default.createElement('br', null),
              'top, left, bottom, right, smallTop, smallLeft, smallBottom, smallRight, largeTop, largeLeft, largeBottom, largeRight, remove, removeTop, removeBottom and removeVertical'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Adds or removes the padding from an element.'
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
                'position'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              'top, topLeft, topRight, bottom, bottomLeft, bottomRight, cover, relative, or zIndex.'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Positions element.'
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
                'responsive'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'string',
              _react2.default.createElement('br', null),
              'width and height'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Makes max width and/or height 100%'
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
                'scroll'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              'auto, box, or text.'
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
                'textAlign'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              'center, centerSmall, centerMedium, left, leftSmall, leftMedium, justify, or right.'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Aligns text horizontally.'
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
                'textVertical'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              'top, middle, or bottom.'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Aligns text vertically'
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
                'textWrap'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'oneOf',
              _react2.default.createElement('br', null),
              'truncate, break, or nowrap.'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Wraps or prevents wrapping of text.'
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
                'vertical'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'parent, middle, bottom'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Vertically align element.'
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
                'viewport'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'bool'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Fills the height of the entire viewport.'
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
                'visible'
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'string',
              _react2.default.createElement('br', null),
              'hover, hoverInline, large, small, medium'
            ),
            _react2.default.createElement(
              'td',
              { className: 'uk-text-left' },
              'Shows element on differnt devices.'
            )
          )
        )
      )
    )
  );
};

exports.default = BaseDoc;