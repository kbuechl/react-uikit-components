'use strict';

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

var _velocityAnimate = require('velocity-animate');

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

var _reactUikitCodeblock = require('react-uikit-codeblock');

var _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);

var _reactUikitDropdown = require('react-uikit-dropdown');

var _reactUikitDropdown2 = _interopRequireDefault(_reactUikitDropdown);

var _reactUikitTable = require('react-uikit-table');

var _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);

var _reactUikitGrid = require('react-uikit-grid');

var _reactUikitGrid2 = _interopRequireDefault(_reactUikitGrid);

var _reactUikitList = require('react-uikit-list');

var _reactUikitList2 = _interopRequireDefault(_reactUikitList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  dropdownDoc: {
    displayName: 'dropdownDoc'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/dropdown-doc.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/dropdown-doc.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var dropdownDoc = _wrapComponent('dropdownDoc')((function (_React$Component) {
  _inherits(dropdownDoc, _React$Component);

  function dropdownDoc() {
    _classCallCheck(this, dropdownDoc);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(dropdownDoc).apply(this, arguments));
  }

  _createClass(dropdownDoc, [{
    key: 'animateIn',
    value: function animateIn(element) {
      (0, _velocityAnimate2.default)(element, { opacity: 1 }, { visibility: 'visible' }, 200);
    }
  }, {
    key: 'animateOut',
    value: function animateOut(element) {
      (0, _velocityAnimate2.default)(element, { opacity: 0 }, { visibility: 'hidden' }, 200);
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
            'Dropdown'
          ),
          _react3.default.createElement(
            'p',
            { className: 'uk-dropdown-lead' },
            'Defines different styles for dropdowns.'
          ),
          _react3.default.createElement(
            'p',
            null,
            _react3.default.createElement(
              'a',
              { href: 'https://github.com/otissv/react-uikit-dropdown' },
              'react-uikit-dropdown'
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
            'npm install react-uikit-dropdown --save;\n\n// ES6\nimport uikit from \'react-uikit-dropdown\';\n\n// ES5\nvar Dropdown = require(\'react-uikit-dropdown\');\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Dropdown events'
          ),
          _react3.default.createElement(
            'p',
            null,
            'The Dropdown component toggles a dropdown when its trigger component is either clicked on or hovered over. By default the component handles clicks only. To change the behaviour to hover add the ',
            _react3.default.createElement(
              'code',
              null,
              'hover'
            ),
            ' prop.'
          ),
          _react3.default.createElement(
            'h4',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            { small: '1-3' },
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              {
                noflip: true,
                hover: true,
                margin: 'bottom',
                trigger: {
                  body: 'Hover',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  }
                }
              },
              'This is a hover dropdown'
            ),
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                margin: 'bottom',
                trigger: {
                  body: 'Click',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  }
                }
              },
              'This is a click dropdown'
            )
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { scroll: 'text' },
            '<Dropdown\n  noflip\n  hover\n  margin=\'bottom\'\n  trigger={{\n    body:\'Hover\',\n    animate: {\n      in: (element) => this.animateIn(element),\n      out: (element) => this.animateOut(element)\n    }\n  }}\n>\n  This is a hover dropdown\n</Dropdown>\n\n<Dropdown\n  noflip\n  margin=\'bottom\'\n  trigger={{\n    body:\'Click\',\n    animate: {\n      in: (element) => this.animateIn(element),\n      out: (element) => this.animateOut(element)\n    }\n  }}\n>\n  This is a click dropdown\n</Dropdown>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Dropdown trigger'
          ),
          _react3.default.createElement(
            'p',
            null,
            'The dropdown trigger prop takes all the same props as the Trigger component. The body property is what will be displayed as the trigger and the animation props takes two callbacks which are toggled.'
          ),
          _react3.default.createElement(
            'p',
            null,
            'The dropdown element is passed the animation callbacks via the animation.in and animation.out trigger properties. An animation library such as ',
            _react3.default.createElement(
              'a',
              { href: 'http://julian.com/research/velocity/' },
              'velocity'
            ),
            ' can be used to animate between the two states. For more details on how see the Trigger component.'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { scroll: 'text' },
            'const animateIn = (element) {\n  velocity(element, {opacity: 1}, {visibility: \'visible\'}, 200);\n}\n\n\nconst animateOut = (element) {\n  velocity(element, {opacity: 0}, { visibility: \'hidden\' }, 200);\n}\n\n<Dropdown\n  noflip\n  margin=\'bottom\'\n  trigger={{\n    body:\'Click\',\n    animate: {\n      in: (element) => this.animateIn(element),\n      out: (element) => this.animateOut(element)\n    }\n  }}\n>\n  This is a click dropdown\n</Dropdown>\n\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Dropdown boundary'
          ),
          _react3.default.createElement(
            'p',
            null,
            'By default the Dropdown component will automatically flip the dropdown when it touches a boundry. To turn off this feature add the ',
            _react3.default.createElement(
              'code',
              null,
              'noflip'
            ),
            ' prop to the component.'
          ),
          _react3.default.createElement(
            'p',
            null,
            'The boundry is set to the viewport of the device. The  boundry can be changed by passing a selector to the boundry prop as the container.'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Dropdown Positions'
          ),
          _react3.default.createElement(
            'p',
            null,
            'The position of a dropdown can be changed by adding the ',
            _react3.default.createElement(
              'code',
              null,
              'pos=\'position\''
            ),
            '.'
          ),
          _react3.default.createElement(_reactUikitTable2.default, { caption: 'Dropdpwn positions', head: '*', body: [{
              prop: 'pos="bottom-left"',
              Description: 'Default position. Aligns the dropdown to the trigger left edge below the trigger.'
            }, {
              prop: 'pos="bottom-center"',
              Description: 'Centers the dropdown below the trigger.'
            }, {
              prop: 'pos="bottom-right"',
              Description: 'Aligns the dropdown to the trigger right edge below the trigger.'
            }, {
              prop: 'pos="top-left"',
              Description: 'Aligns the dropdown to the trigger left edge above the trigger'
            }, {
              prop: 'pos="top-center"',
              Description: 'Centers the dropdown above the trigger.'
            }, {
              prop: 'pos="top-right"',
              Description: 'Aligns the dropdown to the trigger right edge above the trigger.'
            }, {
              prop: 'pos="left-top"',
              Description: 'Aligns the dropdown bottom right corner to the trigger top left corner.'
            }, {
              prop: 'pos="left-center"',
              Description: 'Centers the dropdown\'s right edge to the trigger left edge.'
            }, {
              prop: 'pos="left-bottom"',
              Description: 'Aligns the dropdown\'s top right corner to the trigger bottom left corner.'
            }, {
              prop: 'pos="right-top"',
              Description: 'Aligns the dropdown top left corner to the trigger top right corner.'
            }, {
              prop: 'pos="right-center"',
              Description: 'Centers the dropdown\'s left edge to the trigger right edge.'
            }, {
              prop: 'pos="right-bottom"',
              Description: 'Aligns the dropdown top left corner to the trigger bottom right corner.'
            }] }),
          _react3.default.createElement(
            'h4',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            { small: '1-3' },
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                margin: 'bottom',
                pos: 'bottom-left',
                trigger: {
                  body: 'Bottom left',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  }
                }
              },
              'Bottom left dropdown'
            ),
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                margin: 'bottom',
                pos: 'bottom-center',
                trigger: {
                  body: 'Bottom center',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  }
                }
              },
              'Bottom center dropdown'
            ),
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                margin: 'bottom',
                pos: 'bottom-right',
                trigger: {
                  body: 'Bottom right',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  }
                }
              },
              'Bottom right dropdown'
            )
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            { small: '1-3' },
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                margin: 'bottom',
                pos: 'top-left',
                trigger: {
                  body: 'Top left',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  }
                }
              },
              'Top left dropdown'
            ),
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                margin: 'bottom',
                pos: 'top-center',
                trigger: {
                  body: 'Top center',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  }
                }
              },
              'Top center dropdown'
            ),
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                margin: 'bottom',
                pos: 'top-right',
                trigger: {
                  body: 'Top right',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  }
                }
              },
              'Top right dropdown'
            )
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            { small: '1-3' },
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                margin: 'bottom',
                pos: 'left-top',
                trigger: {
                  body: 'Left top',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  }
                }
              },
              'Left top dropdown'
            ),
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                margin: 'bottom',
                pos: 'left-center',
                trigger: {
                  body: 'Left center',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  }
                }
              },
              'Left center dropdown'
            ),
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                margin: 'bottom',
                pos: 'left-bottom',
                trigger: {
                  body: 'Left bottom',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  }
                }
              },
              'Left bottom dropdown'
            )
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            { small: '1-3' },
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                margin: 'bottom',
                pos: 'right-top',
                trigger: {
                  body: 'Right top',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  }
                }
              },
              'Right top dropdown'
            ),
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                margin: 'bottom',
                pos: 'right-center',
                trigger: {
                  body: 'Right center',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  }
                }
              },
              'Right center dropdown'
            ),
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                margin: 'bottom',
                pos: 'right-bottom',
                trigger: {
                  body: 'Right bottom',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  }
                }
              },
              'Right bottom dropdown'
            )
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { scroll: 'text' },
            '<Grid small=\'1-3\'>\n  <Dropdown\n    noflip\n    margin=\'bottom\'\n    pos=\'bottom-left\'\n    trigger={{\n      body:\'Bottom left\',\n      animate: {\n        in: (element) => this.animateIn(element),\n        out: (element) => this.animateOut(element)\n      }\n    }}\n  >\n    Bottom left dropdown\n  </Dropdown>\n  <Dropdown\n    noflip\n    margin=\'bottom\'\n    pos=\'bottom-center\'\n    trigger={{\n      body:\'Bottom center\',\n      animate: {\n        in: (element) => this.animateIn(element),\n        out: (element) => this.animateOut(element)\n      }\n    }}\n  >\n    Bottom center dropdown\n  </Dropdown>\n  <Dropdown\n    noflip\n    margin=\'bottom\'\n    pos=\'bottom-right\'\n    trigger={{\n      body:\'Bottom right\',\n      animate: {\n        in: (element) => this.animateIn(element),\n        out: (element) => this.animateOut(element)\n      }\n    }}\n  >\n    Bottom right dropdown\n  </Dropdown>\n</Grid>\n\n<Grid small=\'1-3\'>\n  <Dropdown\n    noflip\n    margin=\'bottom\'\n    pos=\'top-left\'\n    trigger={{\n      body:\'Top left\',\n      animate: {\n        in: (element) => this.animateIn(element),\n        out: (element) => this.animateOut(element)\n      }\n    }}\n  >\n    Top left dropdown\n  </Dropdown>\n  <Dropdown\n    noflip\n    margin=\'bottom\'\n    pos=\'top-center\'\n    trigger={{\n      body:\'Top center\',\n      animate: {\n        in: (element) => this.animateIn(element),\n        out: (element) => this.animateOut(element)\n      }\n    }}\n  >\n    Top center dropdown\n  </Dropdown>\n  <Dropdown\n    noflip\n    margin=\'bottom\'\n    pos=\'top-right\'\n    trigger={{\n      body:\'Top right\',\n      animate: {\n        in: (element) => this.animateIn(element),\n        out: (element) => this.animateOut(element)\n      }\n    }}\n  >\n    Top right dropdown\n  </Dropdown>\n</Grid>\n\n<Grid small=\'1-3\'>\n  <Dropdown\n    noflip\n    margin=\'bottom\'\n    pos=\'left-top\'\n    trigger={{\n      body:\'Left top\',\n      animate: {\n        in: (element) => this.animateIn(element),\n        out: (element) => this.animateOut(element)\n      }\n    }}\n  >\n    Left top dropdown\n  </Dropdown>\n  <Dropdown\n    noflip\n    margin=\'bottom\'\n    pos=\'left-center\'\n    trigger={{\n      body:\'Left center\',\n      animate: {\n        in: (element) => this.animateIn(element),\n        out: (element) => this.animateOut(element)\n      }\n    }}\n  >\n    Left center dropdown\n  </Dropdown>\n  <Dropdown\n    noflip\n    margin=\'bottom\'\n    pos=\'left-bottom\'\n    trigger={{\n      body:\'Left bottom\',\n      animate: {\n        in: (element) => this.animateIn(element),\n        out: (element) => this.animateOut(element)\n      }\n    }}\n  >\n    Left bottom dropdown\n  </Dropdown>\n</Grid>\n\n<Grid small=\'1-3\'>\n  <Dropdown\n    noflip\n    margin=\'bottom\'\n    pos=\'right-top\'\n    trigger={{\n      body:\'Right top\',\n      animate: {\n        in: (element) => this.animateIn(element),\n        out: (element) => this.animateOut(element)\n      }\n    }}\n  >\n    Right top dropdown\n  </Dropdown>\n  <Dropdown\n    noflip\n    margin=\'bottom\'\n    pos=\'right-center\'\n    trigger={{\n      body:\'Right center\',\n      animate: {\n        in: (element) => this.animateIn(element),\n        out: (element) => this.animateOut(element)\n      }\n    }}\n  >\n    Right center dropdown\n  </Dropdown>\n  <Dropdown\n    noflip\n    margin=\'bottom\'\n    pos=\'right-bottom\'\n    trigger={{\n      body:\'Right bottom\',\n      animate: {\n        in: (element) => this.animateIn(element),\n        out: (element) => this.animateOut(element)\n      }\n    }}\n  >\n    Right bottom dropdown\n  </Dropdown>\n</Grid>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Justified dropdown'
          ),
          _react3.default.createElement(
            'p',
            null,
            'To justify a dropdown add a ',
            _react3.default.createElement(
              'code',
              null,
              'kitid=\'targetid\''
            ),
            ' prop to the target element to be justified against and on the dropdown component add the ',
            _react3.default.createElement(
              'code',
              null,
              'justify=\'targetid\''
            ),
            ' with the kitid of the target.'
          ),
          _react3.default.createElement(
            'h4',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            { kitid: 'justify1' },
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                justify: 'justify1',
                trigger: {
                  body: 'Justified dropdown',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  }
                }
              },
              'Justified dropdown'
            )
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            null,
            '<Grid kitid=\'justify1\'>\n  <Dropdown\n    noflip\n    justify=\'justify1\'\n    trigger={{\n      body:\'Justified dropdown\',\n      animate: {\n        in: (element) => this.animateIn(element),\n        out: (element) => this.animateOut(element)\n      }\n    }}\n  >\n    Justified dropdown\n  </Dropdown>\n</Grid>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Small dropdown'
          ),
          _react3.default.createElement(
            'p',
            null,
            'For a more compact dropdown which also has no text wrapping add the ',
            _react3.default.createElement(
              'code',
              null,
              'small'
            ),
            ' prop.'
          ),
          _react3.default.createElement(
            'h4',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            null,
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                small: true,
                trigger: { body: 'dropdown',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  } } },
              'this is a drop down'
            )
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            null,
            '<Dropdown\n  noflip\n  small\n  trigger={{\n    body:\'dropdown\',\n    animate: {\n     in: (element) => this.animateIn(element),\n     out: (element) => this.animateOut(element)\n    }\n  }}\n>\n  this is a drop down\n </Dropdown>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Blank dropdown'
          ),
          _react3.default.createElement(
            'p',
            null,
            'The ',
            _react3.default.createElement(
              'code',
              null,
              'blank'
            ),
            ' prop creates a dropdown without any styling.'
          ),
          _react3.default.createElement(
            'h4',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            null,
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                blank: true,
                trigger: { body: 'dropdown',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  } } },
              'this is a drop down'
            )
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            null,
            '<Dropdown\n  noflip\n  blank\n  trigger={{\n    body:\'dropdown\',\n    animate: {\n     in: (element) => this.animateIn(element),\n     out: (element) => this.animateOut(element)\n    }\n  }}\n>\n  this is a drop down\n</Dropdown>\n\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Scrollable dropdown'
          ),
          _react3.default.createElement(
            'p',
            null,
            'When a fixed height is added to the dropdown and its content is longer than height the ',
            _react3.default.createElement(
              'code',
              null,
              'scrollable'
            ),
            ' prop can be added to make the dropdown scrollable.'
          ),
          _react3.default.createElement(
            'h4',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            null,
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                dropbody: { style: { height: '150px' } },
                scrollable: true,
                trigger: { body: 'dropdown',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  } } },
              _react3.default.createElement(
                'ul',
                null,
                _react3.default.createElement(
                  'li',
                  null,
                  'item'
                ),
                _react3.default.createElement(
                  'li',
                  null,
                  'item'
                ),
                _react3.default.createElement(
                  'li',
                  null,
                  'item'
                ),
                _react3.default.createElement(
                  'li',
                  null,
                  'item'
                ),
                _react3.default.createElement(
                  'li',
                  null,
                  'item'
                ),
                _react3.default.createElement(
                  'li',
                  null,
                  'item'
                ),
                _react3.default.createElement(
                  'li',
                  null,
                  'item'
                ),
                _react3.default.createElement(
                  'li',
                  null,
                  'item'
                )
              )
            )
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { scroll: 'text' },
            '<Dropdown\n  noflip\n  dropbody={{style: {height:\'150px\'}}}\n  scrollable\n  trigger={{\n    body:\'dropdown\',\n    animate: {\n     in: (element) => this.animateIn(element),\n     out: (element) => this.animateOut(element)\n    }\n  }}\n>\n  <ul>\n    <li>item</li>\n    <li>item</li>\n    <li>item</li>\n    <li>item</li>\n    <li>item</li>\n    <li>item</li>\n    <li>item</li>\n    <li>item</li>\n  </ul>\n</Dropdown>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Button group'
          ),
          _react3.default.createElement(
            'p',
            null,
            'Dropdowns can be used to create split buttons where one button triggers the standard action and the other toggles the dropdown.'
          ),
          _react3.default.createElement(
            'h4',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            null,
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              { noflip: true,
                standard: { onClick: function onClick() {
                    return alert('Standard action');
                  } },
                type: 'button-group',
                trigger: { body: 'dropdown',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  } } },
              'this is a drop down'
            )
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            null,
            '<Dropdown\n  noflip\n  standard={{onClick: () => alert(\'Standard action\')}}\n  type=\'button-group\'\n  icon=\'caret-down\'\n  trigger={{\n    body:\'dropdown\',\n    animate: {\n       in: (element) => this.animateIn(element),\n       out: (element) => this.animateOut(element)\n    }\n  }}\n>\n  this is a drop down\n</Dropdown>\n'
          )
        ),
        _react3.default.createElement(
          'section',
          null,
          _react3.default.createElement(
            'h2',
            null,
            'Button grid'
          ),
          _react3.default.createElement(
            'p',
            null,
            'A dropdown can behave like a grid by adding the ',
            _react3.default.createElement(
              'code',
              null,
              'grid=\'*\''
            ),
            ' prop. A dropdown grid can have a maximum of 5 columns.'
          ),
          _react3.default.createElement(
            'h4',
            { className: 'example' },
            'Example'
          ),
          _react3.default.createElement(
            _reactUikitGrid2.default,
            null,
            _react3.default.createElement(
              _reactUikitDropdown2.default,
              {
                grid: '2',
                type: 'button',
                trigger: {
                  body: 'Multiple columns',
                  animate: {
                    in: function _in(element) {
                      return _this2.animateIn(element);
                    },
                    out: function out(element) {
                      return _this2.animateOut(element);
                    }
                  }
                }
              },
              _react3.default.createElement(_reactUikitList2.default, {
                col: '1-2',
                line: true,
                items: ['item', 'item', 'item', 'item', 'item']
              }),
              _react3.default.createElement(_reactUikitList2.default, {
                col: '1-2',
                line: true,
                items: ['item', 'item', 'item', 'item', 'item']
              })
            )
          ),
          _react3.default.createElement(
            'h4',
            { className: 'code' },
            'Code'
          ),
          _react3.default.createElement(
            _reactUikitCodeblock2.default,
            { scroll: 'text' },
            '<Dropdown\n  grid=\'2\'\n  type=\'button\'\n  trigger={{\n    body:\'Multiple columns\',\n    animate: {\n      in: (element) => this.animateIn(element),\n      out: (element) => this.animateOut(element)\n    }\n  }}\n>\n <List\n   col=\'1-2\'\n   line\n   items={[\'item\', \'item\', \'item\', \'item\', \'item\']}\n  />\n<List\n  col=\'1-2\'\n  line\n  items={[\'item\', \'item\', \'item\', \'item\', \'item\']}\n />\n</Dropdown>\n'
          )
        )
      );
    }
  }]);

  return dropdownDoc;
})(_react3.default.Component));

exports.default = dropdownDoc;