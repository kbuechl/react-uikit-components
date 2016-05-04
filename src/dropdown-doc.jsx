'use strict';


import React from 'react';
import velocity from 'velocity-animate';
import Codeblock from 'react-uikit-codeblock';
import Dropdown from 'react-uikit-dropdown';
import Table from 'react-uikit-table';
import Grid from 'react-uikit-grid';
import List from 'react-uikit-list';


export default class dropdownDoc extends React.Component {
  animateIn (element) {
    velocity(element, {opacity: 1}, {visibility: 'visible'}, 200);
  }


  animateOut (element) {
    velocity(element, {opacity: 0}, { visibility: 'hidden' }, 200);
  }


  render () {
    return <div>
      <section>
        <h1>Dropdown</h1>
        <p className='uk-dropdown-lead'>
          Defines different styles for dropdowns.
        </p>

        <p>
          <a href='https://github.com/otissv/react-uikit-dropdown'>react-uikit-dropdown</a> on github.
        </p>
      </section>

      <section>
        <h2>Usage</h2>

        <Codeblock>
{`npm install react-uikit-dropdown --save;

// ES6
import uikit from 'react-uikit-dropdown';

// ES5
var Dropdown = require('react-uikit-dropdown').default;
`}
        </Codeblock>
      </section>

      <section>
        <h2>Dropdown events</h2>
        <p>
          The Dropdown component toggles a dropdown when its trigger component
          is either clicked on or hovered over. By default the component handles clicks only.
          To change the behaviour to hover add the <code>hover</code> prop.
        </p>


        <h4 className='example'>Example</h4>
        <Grid small='1-3'>
          <Dropdown
            noflip
            hover
            margin='bottom'
            trigger={{
              body:'Hover',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }
            }}
          >
            This is a hover dropdown
          </Dropdown>

          <Dropdown noflip
            margin='bottom'
            trigger={{
              body:'Click',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }
            }}
          >
            This is a click dropdown
          </Dropdown>
        </Grid>


        <h4 className='code'>Code</h4>
        <Codeblock scroll='text'>
{`<Dropdown
  noflip
  hover
  margin='bottom'
  trigger={{
    body:'Hover',
    animate: {
      in: (element) => this.animateIn(element),
      out: (element) => this.animateOut(element)
    }
  }}
>
  This is a hover dropdown
</Dropdown>

<Dropdown
  noflip
  margin='bottom'
  trigger={{
    body:'Click',
    animate: {
      in: (element) => this.animateIn(element),
      out: (element) => this.animateOut(element)
    }
  }}
>
  This is a click dropdown
</Dropdown>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Dropdown trigger</h2>

        <p>
         The dropdown trigger prop takes all the same props as the Trigger component.
         The body property is what will be displayed as the trigger and the
         animation props takes two callbacks which are toggled.
        </p>

        <p>
          The dropdown element is passed the animation callbacks via the animation.in and animation.out trigger properties.
          An animation library such as <a href='http://julian.com/research/velocity/'>velocity</a> can
          be used to animate between the two states. For more details on how see the Trigger component.
        </p>

        <Codeblock scroll='text'>
{`const animateIn = (element) {
  velocity(element, {opacity: 1}, {visibility: 'visible'}, 200);
}


const animateOut = (element) {
  velocity(element, {opacity: 0}, { visibility: 'hidden' }, 200);
}

<Dropdown
  noflip
  margin='bottom'
  trigger={{
    body:'Click',
    animate: {
      in: (element) => this.animateIn(element),
      out: (element) => this.animateOut(element)
    }
  }}
>
  This is a click dropdown
</Dropdown>

`}
        </Codeblock>
      </section>


      <section>
        <h2>Dropdown boundary</h2>
        <p>
          By default the Dropdown component will automatically flip the dropdown
          when it touches a boundry. To turn off this feature add
          the <code>noflip</code> prop to the component.
        </p>

        <p>The boundry is set to the viewport of the device. The  boundry can be
          changed by passing a selector to the boundry prop as the container.
        </p>
      </section>


      <section>
        <h2>Dropdown Positions</h2>

        <p>
          The position of a dropdown can be changed by adding the <code>pos='position'</code>.
        </p>

        <Table caption='Dropdpwn positions' head='*' body={[
          {
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
          }
        ]}/>

        <h4 className='example'>Example</h4>
        <Grid small='1-3'>
          <Dropdown noflip
            margin='bottom'
            pos='bottom-left'
            trigger={{
              body:'Bottom left',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }
            }}
          >
            Bottom left dropdown
          </Dropdown>
          <Dropdown noflip
            margin='bottom'
            pos='bottom-center'
            trigger={{
              body:'Bottom center',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }
            }}
          >
            Bottom center dropdown
          </Dropdown>
          <Dropdown noflip
            margin='bottom'
            pos='bottom-right'
            trigger={{
              body:'Bottom right',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }
            }}
          >
            Bottom right dropdown
          </Dropdown>
        </Grid>

        <Grid small='1-3'>
          <Dropdown noflip
            margin='bottom'
            pos='top-left'
            trigger={{
              body:'Top left',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }
            }}
          >
            Top left dropdown
          </Dropdown>
          <Dropdown noflip
            margin='bottom'
            pos='top-center'
            trigger={{
              body:'Top center',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }
            }}
          >
            Top center dropdown
          </Dropdown>
          <Dropdown noflip
            margin='bottom'
            pos='top-right'
            trigger={{
              body:'Top right',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }
            }}
          >
            Top right dropdown
          </Dropdown>
        </Grid>

        <Grid small='1-3'>
          <Dropdown noflip
            margin='bottom'
            pos='left-top'
            trigger={{
              body:'Left top',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }
            }}
          >
            Left top dropdown
          </Dropdown>
          <Dropdown noflip
            margin='bottom'
            pos='left-center'
            trigger={{
              body:'Left center',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }
            }}
          >
            Left center dropdown
          </Dropdown>
          <Dropdown noflip
            margin='bottom'
            pos='left-bottom'
            trigger={{
              body:'Left bottom',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }
            }}
          >
            Left bottom dropdown
          </Dropdown>
        </Grid>

        <Grid small='1-3'>
          <Dropdown noflip
            margin='bottom'
            pos='right-top'
            trigger={{
              body:'Right top',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }
            }}
          >
            Right top dropdown
          </Dropdown>
          <Dropdown noflip
            margin='bottom'
            pos='right-center'
            trigger={{
              body:'Right center',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }
            }}
          >
            Right center dropdown
          </Dropdown>
          <Dropdown noflip
            margin='bottom'
            pos='right-bottom'
            trigger={{
              body:'Right bottom',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }
            }}
          >
            Right bottom dropdown
          </Dropdown>
        </Grid>


        <h4 className='code'>Code</h4>
        <Codeblock scroll='text'>
{`<Grid small='1-3'>
  <Dropdown
    noflip
    margin='bottom'
    pos='bottom-left'
    trigger={{
      body:'Bottom left',
      animate: {
        in: (element) => this.animateIn(element),
        out: (element) => this.animateOut(element)
      }
    }}
  >
    Bottom left dropdown
  </Dropdown>
  <Dropdown
    noflip
    margin='bottom'
    pos='bottom-center'
    trigger={{
      body:'Bottom center',
      animate: {
        in: (element) => this.animateIn(element),
        out: (element) => this.animateOut(element)
      }
    }}
  >
    Bottom center dropdown
  </Dropdown>
  <Dropdown
    noflip
    margin='bottom'
    pos='bottom-right'
    trigger={{
      body:'Bottom right',
      animate: {
        in: (element) => this.animateIn(element),
        out: (element) => this.animateOut(element)
      }
    }}
  >
    Bottom right dropdown
  </Dropdown>
</Grid>

<Grid small='1-3'>
  <Dropdown
    noflip
    margin='bottom'
    pos='top-left'
    trigger={{
      body:'Top left',
      animate: {
        in: (element) => this.animateIn(element),
        out: (element) => this.animateOut(element)
      }
    }}
  >
    Top left dropdown
  </Dropdown>
  <Dropdown
    noflip
    margin='bottom'
    pos='top-center'
    trigger={{
      body:'Top center',
      animate: {
        in: (element) => this.animateIn(element),
        out: (element) => this.animateOut(element)
      }
    }}
  >
    Top center dropdown
  </Dropdown>
  <Dropdown
    noflip
    margin='bottom'
    pos='top-right'
    trigger={{
      body:'Top right',
      animate: {
        in: (element) => this.animateIn(element),
        out: (element) => this.animateOut(element)
      }
    }}
  >
    Top right dropdown
  </Dropdown>
</Grid>

<Grid small='1-3'>
  <Dropdown
    noflip
    margin='bottom'
    pos='left-top'
    trigger={{
      body:'Left top',
      animate: {
        in: (element) => this.animateIn(element),
        out: (element) => this.animateOut(element)
      }
    }}
  >
    Left top dropdown
  </Dropdown>
  <Dropdown
    noflip
    margin='bottom'
    pos='left-center'
    trigger={{
      body:'Left center',
      animate: {
        in: (element) => this.animateIn(element),
        out: (element) => this.animateOut(element)
      }
    }}
  >
    Left center dropdown
  </Dropdown>
  <Dropdown
    noflip
    margin='bottom'
    pos='left-bottom'
    trigger={{
      body:'Left bottom',
      animate: {
        in: (element) => this.animateIn(element),
        out: (element) => this.animateOut(element)
      }
    }}
  >
    Left bottom dropdown
  </Dropdown>
</Grid>

<Grid small='1-3'>
  <Dropdown
    noflip
    margin='bottom'
    pos='right-top'
    trigger={{
      body:'Right top',
      animate: {
        in: (element) => this.animateIn(element),
        out: (element) => this.animateOut(element)
      }
    }}
  >
    Right top dropdown
  </Dropdown>
  <Dropdown
    noflip
    margin='bottom'
    pos='right-center'
    trigger={{
      body:'Right center',
      animate: {
        in: (element) => this.animateIn(element),
        out: (element) => this.animateOut(element)
      }
    }}
  >
    Right center dropdown
  </Dropdown>
  <Dropdown
    noflip
    margin='bottom'
    pos='right-bottom'
    trigger={{
      body:'Right bottom',
      animate: {
        in: (element) => this.animateIn(element),
        out: (element) => this.animateOut(element)
      }
    }}
  >
    Right bottom dropdown
  </Dropdown>
</Grid>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Justified dropdown</h2>

      <p>
        To justify a dropdown add a <code>kitid='targetid'</code> prop to the target element to be justified against
        and on the dropdown component add the <code>justify='targetid'</code> with the kitid of the target.
      </p>

        <h4 className='example'>Example</h4>
        <Grid kitid='justify1'>
          <Dropdown noflip
            justify='justify1'
            trigger={{
              body:'Justified dropdown',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }
            }}
          >
            Justified dropdown
          </Dropdown>
        </Grid>


        <h4 className='code'>Code</h4>
        <Codeblock>
{`<Grid kitid='justify1'>
  <Dropdown
    noflip
    justify='justify1'
    trigger={{
      body:'Justified dropdown',
      animate: {
        in: (element) => this.animateIn(element),
        out: (element) => this.animateOut(element)
      }
    }}
  >
    Justified dropdown
  </Dropdown>
</Grid>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Small dropdown</h2>

      <p>
        For a more compact dropdown which also has no text wrapping add the <code>small</code> prop.
      </p>

        <h4 className='example'>Example</h4>
        <Grid>
          <Dropdown noflip
           small
           trigger={{body:'dropdown',
               animate: {
                 in: (element) => this.animateIn(element),
                 out: (element) => this.animateOut(element)
               }}}>
           this is a drop down
         </Dropdown>
        </Grid>


        <h4 className='code'>Code</h4>
        <Codeblock>
{`<Dropdown
  noflip
  small
  trigger={{
    body:'dropdown',
    animate: {
     in: (element) => this.animateIn(element),
     out: (element) => this.animateOut(element)
    }
  }}
>
  this is a drop down
 </Dropdown>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Blank dropdown</h2>

      <p>
        The <code>blank</code> prop creates a dropdown without any styling.
      </p>

        <h4 className='example'>Example</h4>
        <Grid>
          <Dropdown noflip
           blank
           trigger={{body:'dropdown',
             animate: {
               in: (element) => this.animateIn(element),
               out: (element) => this.animateOut(element)
             }}}>
           this is a drop down
         </Dropdown>
        </Grid>


        <h4 className='code'>Code</h4>
        <Codeblock>
{`<Dropdown
  noflip
  blank
  trigger={{
    body:'dropdown',
    animate: {
     in: (element) => this.animateIn(element),
     out: (element) => this.animateOut(element)
    }
  }}
>
  this is a drop down
</Dropdown>

`}
        </Codeblock>
      </section>

      <section>
        <h2>Scrollable dropdown</h2>

        <p>
          When a fixed height is added to the dropdown and its content is longer than height
          the <code>scrollable</code> prop can be added to make the dropdown scrollable.
        </p>

        <h4 className='example'>Example</h4>
        <Grid>
          <Dropdown noflip
            dropbody={{style: {height:'150px'}}}
            scrollable
            trigger={{body:'dropdown',
             animate: {
               in: (element) => this.animateIn(element),
               out: (element) => this.animateOut(element)
             }}}>
           <ul>
             <li>item</li>
             <li>item</li>
             <li>item</li>
             <li>item</li>
             <li>item</li>
             <li>item</li>
             <li>item</li>
             <li>item</li>
          </ul>
         </Dropdown>
        </Grid>


        <h4 className='code'>Code</h4>
        <Codeblock scroll='text'>
{`<Dropdown
  noflip
  dropbody={{style: {height:'150px'}}}
  scrollable
  trigger={{
    body:'dropdown',
    animate: {
     in: (element) => this.animateIn(element),
     out: (element) => this.animateOut(element)
    }
  }}
>
  <ul>
    <li>item</li>
    <li>item</li>
    <li>item</li>
    <li>item</li>
    <li>item</li>
    <li>item</li>
    <li>item</li>
    <li>item</li>
  </ul>
</Dropdown>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Button group</h2>

        <p>
          Dropdowns can be used to create split buttons where one button triggers the standard action
          and the other toggles the dropdown.
        </p>

        <h4 className='example'>Example</h4>
        <Grid>
          <Dropdown noflip
           standard={{onClick: () => alert('Standard action')}}
           type='button-group'
           trigger={{body:'dropdown',
               animate: {
                 in: (element) => this.animateIn(element),
                 out: (element) => this.animateOut(element)
               }}}>
           this is a drop down
         </Dropdown>
        </Grid>


        <h4 className='code'>Code</h4>
        <Codeblock>
{`<Dropdown
  noflip
  standard={{onClick: () => alert('Standard action')}}
  type='button-group'
  icon='caret-down'
  trigger={{
    body:'dropdown',
    animate: {
       in: (element) => this.animateIn(element),
       out: (element) => this.animateOut(element)
    }
  }}
>
  this is a drop down
</Dropdown>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Button grid</h2>

      <p>
        A dropdown can behave like a grid by adding the <code>grid='*'</code> prop.
        A dropdown grid can have a maximum of 5 columns.
      </p>

        <h4 className='example'>Example</h4>
        <Grid>
          <Dropdown
            grid='2'
            type='button'
            trigger={{
              body:'Multiple columns',
              animate: {
                in: (element) => this.animateIn(element),
                out: (element) => this.animateOut(element)
              }
            }}
          >
           <List
             col='1-2'
             line
             items={['item', 'item', 'item', 'item', 'item']}
            />
          <List
            col='1-2'
            line
            items={['item', 'item', 'item', 'item', 'item']}
           />
         </Dropdown>
        </Grid>


        <h4 className='code'>Code</h4>
        <Codeblock scroll='text'>
{`<Dropdown
  grid='2'
  type='button'
  trigger={{
    body:'Multiple columns',
    animate: {
      in: (element) => this.animateIn(element),
      out: (element) => this.animateOut(element)
    }
  }}
>
 <List
   col='1-2'
   line
   items={['item', 'item', 'item', 'item', 'item']}
  />
<List
  col='1-2'
  line
  items={['item', 'item', 'item', 'item', 'item']}
 />
</Dropdown>
`}
        </Codeblock>
      </section>


    </div>;
  }
}
