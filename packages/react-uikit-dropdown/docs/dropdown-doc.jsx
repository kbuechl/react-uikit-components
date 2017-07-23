import React, { PropTypes } from 'react';

import Table from 'react-uikit-table';
import Grid from 'react-uikit-grid';
import List from 'react-uikit-list';

import Dropdown from '../lib/dropdown';
import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

let velocity;
if (process.env.NODE_ENV !== 'mdGenerator') {
  velocity = require('velocity-animate');
} else {
  velocity = () => {};
}

const name = 'Dropdown';
const npmName = 'react-uikit-dropdown';
const summary = 'Defines different styles for dropdowns.';
const propTuples = [
  { Prop: 'blank', Type: 'bool' },
  { Prop: 'boundary', Type: 'string' },
  { Prop: 'dropbody', Type: 'object' },
  { Prop: 'grid', Type: 'string' },
  { Prop: 'hover', Type: 'bool' },
  { Prop: 'justify', Type: 'string' },
  { Prop: 'navbar', Type: 'bool' },
  { Prop: 'noflip', Type: 'bool' },
  { Prop: 'opened', Type: 'bool' },
  { Prop: 'parent', Type: 'bool' },
  { Prop: 'pos', Type: 'string' },
  { Prop: 'scrollable', Type: 'bool' },
  { Prop: 'small', Type: 'bool' },
  { Prop: 'standard', Type: 'object' },
  { Prop: 'trigger', Type: 'object' },
  { Prop: 'type', Type: "oneOf: 'button' / 'button-group' / 'dropdown' / 'grid' / 'navbar'" }
];

const animateSnippet = `animate: {\n  in: this.animateIn,\n  out: this.animateOut\n}`;

const eventsExample = ({ animate, clickDemo, hoverDemo }) => (
  <Grid small='1-3'>
    <Dropdown kitid='hoverDemo' opened={hoverDemo} noflip hover margin='bottom' trigger={{ body:'Hover', animate }}>
      This is a hover dropdown
    </Dropdown>
    <Dropdown kitid='clickDemo' opened={clickDemo} noflip margin='bottom' trigger={{ body:'Click', animate }}>
      This is a click dropdown
    </Dropdown>
  </Grid>
);
eventsExample.propTypes = {
  animate: PropTypes.object,
  clickDemo: PropTypes.bool,
  hoverDemo: PropTypes.bool,
};
const eventsSnippet = `
  <Dropdown opened={this.state.hoverOpened} noflip hover margin='bottom' trigger={{ body:'Hover', ${animateSnippet} }} >
    This is a hover dropdown
  </Dropdown>

  <Dropdown opened={this.state.clickOpened} noflip hover margin='bottom' trigger={{ body:'Click', ${animateSnippet} }} >
    This is a click dropdown
  </Dropdown>`;

const triggerSnippet = `  const animateIn = (element, bool) {
    this.setState({ opened : bool});
    velocity(element, {opacity: 1}, {visibility: 'visible'}, 200);
  }


  const animateOut = (element, bool) {
    this.setState({ opened : bool});
    velocity(element, {opacity: 0}, { visibility: 'hidden' }, 200);
  }

  <Dropdown noflip opened={this.state.opened} margin='bottom' trigger={{ body:'Click', ${animateSnippet}  }}>
    This is a click dropdown
  </Dropdown>`;

const positionsTable = (
  <Table caption='Dropdown positions' head='*' body={[
    {
      Prop: <code>pos="bottom-left"</code>,
      Description: 'Default position. Aligns the dropdown to the trigger left edge below the trigger.'
    }, {
      Prop: <code>pos="bottom-center"</code>,
      Description: 'Centers the dropdown below the trigger.'
    }, {
      Prop: <code>pos="bottom-right"</code>,
      Description: 'Aligns the dropdown to the trigger right edge below the trigger.'
    }, {
      Prop: <code>pos="top-left"</code>,
      Description: 'Aligns the dropdown to the trigger left edge above the trigger'
    }, {
      Prop: <code>pos="top-center"</code>,
      Description: 'Centers the dropdown above the trigger.'
    }, {
      Prop: <code>pos="top-right"</code>,
      Description: 'Aligns the dropdown to the trigger right edge above the trigger.'
    }, {
      Prop: <code>pos="left-top"</code>,
      Description: 'Aligns the dropdown bottom right corner to the trigger top left corner.'
    }, {
      Prop: <code>pos="left-center"</code>,
      Description: 'Centers the dropdown\'s right edge to the trigger left edge.'
    }, {
      Prop: <code>pos="left-bottom"</code>,
      Description: 'Aligns the dropdown\'s top right corner to the trigger bottom left corner.'
    }, {
      Prop: <code>pos="right-top"</code>,
      Description: 'Aligns the dropdown top left corner to the trigger top right corner.'
    }, {
      Prop: <code>pos="right-center"</code>,
      Description: 'Centers the dropdown\'s left edge to the trigger right edge.'
    }, {
      Prop: <code>pos="right-bottom"</code>,
      Description: 'Aligns the dropdown top left corner to the trigger bottom right corner.'
    }
  ]}/>
);
const positionsExample = (props) => (
  <div>
    <Grid small='1-3'>
      <Dropdown noflip kitid='bottomLeftDemo' opened={props.bottomLeftDemo} margin='bottom' pos='bottom-left' trigger={{ body:'Bottom left', animate: props.animate }}>
        Bottom left dropdown
      </Dropdown>
      <Dropdown noflip kitid='bottomCenterDemo' opened={props.bottomCenterDemo} margin='bottom' pos='bottom-center' trigger={{ body:'Bottom center', animate: props.animate }}>
        Bottom center dropdown
      </Dropdown>
      <Dropdown noflip kitid='bottomRightDemo' opened={props.bottomRightDemo} margin='bottom' pos='bottom-right' trigger={{ body:'Bottom right', animate: props.animate }}>
        Bottom right dropdown
      </Dropdown>
    </Grid>
    <Grid small='1-3'>
      <Dropdown noflip kitid='topLeftDemo' opened={props.topLeftDemo} margin='bottom' pos='top-left' trigger={{ body:'Top left', animate: props.animate }}>
        Top left dropdown
      </Dropdown>
      <Dropdown noflip kitid='topCenterDemo' opened={props.topCenterDemo} margin='bottom' pos='top-center' trigger={{ body:'Top center', animate: props.animate }}>
        Top center dropdown
      </Dropdown>
      <Dropdown noflip kitid='topRightDemo' opened={props.topRightDemo} margin='bottom' pos='top-right' trigger={{ body:'Top right', animate: props.animate }}>
        Top right dropdown
      </Dropdown>
    </Grid>
    <Grid small='1-3'>
      <Dropdown noflip kitid='leftTopDemo' opened={props.leftTopDemo} margin='bottom' pos='left-top' trigger={{ body:'Left top', animate: props.animate }}>
        Left top dropdown
      </Dropdown>
      <Dropdown noflip kitid='leftCenterDemo' opened={props.leftCenterDemo} margin='bottom' pos='left-center' trigger={{ body:'Left center', animate: props.animate }}>
        Left center dropdown
      </Dropdown>
      <Dropdown noflip kitid='leftBottomDemo' opened={props.leftBottomDemo} margin='bottom' pos='left-bottom' trigger={{ body:'Left bottom', animate: props.animate }}>
        Left bottom dropdown
      </Dropdown>
    </Grid>
    <Grid small='1-3'>
      <Dropdown noflip kitid='rightTopDemo' opened={props.rightTopDemo} margin='bottom' pos='right-top' trigger={{ body:'Right top', animate: props.animate }}>
        Right top dropdown
      </Dropdown>
      <Dropdown noflip kitid='rightCenterDemo' opened={props.rightCenterDemo} margin='bottom' pos='right-center' trigger={{ body:'Right center', animate: props.animate }}>
        Right center dropdown
      </Dropdown>
      <Dropdown noflip kitid='rightBottomDemo' opened={props.rightBottomDemo} margin='bottom' pos='right-bottom' trigger={{ body:'Right bottom', animate: props.animate }}>
        Right bottom dropdown
      </Dropdown>
    </Grid>
  </div>
);
positionsExample.propTypes = {
  animate: PropTypes.object,
  bottomCenterDemo: PropTypes.bool,
  bottomRightDemo: PropTypes.bool,
  bottomLeftDemo: PropTypes.bool,
  topCenterDemo: PropTypes.bool,
  topLeftDemo: PropTypes.bool,
  topRightDemo: PropTypes.bool,
  leftTopDemo: PropTypes.bool,
  leftCenterDemo: PropTypes.bool,
  leftBottomDemo: PropTypes.bool,
  rightTopDemo: PropTypes.bool,
  rightCenterDemo: PropTypes.bool,
  rightBottomDemo: PropTypes.bool,
};
const positionsSnippet = `  <div>
    <Grid small='1-3'>
      <Dropdown noflip kitid='bottomLeftDemo' opened={this.state.bottomLeftDemo} margin='bottom' pos='bottom-left' trigger={{ body:'Bottom left', ${animateSnippet} }}>
        Bottom left dropdown
      </Dropdown>
      <Dropdown noflip kitid='bottomCenterDemo' opened={this.state.bottomCenterDemo} margin='bottom' pos='bottom-center' trigger={{ body:'Bottom center', ${animateSnippet} }}>
        Bottom center dropdown
      </Dropdown>
      <Dropdown noflip kitid='bottomRightDemo' opened={this.state.bottomRightDemo} margin='bottom' pos='bottom-right' trigger={{ body:'Bottom right', ${animateSnippet} }}>
        Bottom right dropdown
      </Dropdown>
    </Grid>
    <Grid small='1-3'>
      <Dropdown noflip kitid='topLeftDemo' opened={this.state.topLeftDemo} margin='bottom' pos='top-left' trigger={{ body:'Top left', ${animateSnippet} }}>
        Top left dropdown
      </Dropdown>
      <Dropdown noflip kitid='topCenterDemo' opened={this.state.topCenterDemo} margin='bottom' pos='top-center' trigger={{ body:'Top center', ${animateSnippet} }}>
        Top center dropdown
      </Dropdown>
      <Dropdown noflip kitid='topRightDemo' opened={this.state.topRightDemo} margin='bottom' pos='top-right' trigger={{ body:'Top right', ${animateSnippet} }}>
        Top right dropdown
      </Dropdown>
    </Grid>
    <Grid small='1-3'>
      <Dropdown noflip kitid='leftTopDemo' opened={this.state.leftTopDemo} margin='bottom' pos='left-top' trigger={{ body:'Left top', ${animateSnippet} }}>
        Left top dropdown
      </Dropdown>
      <Dropdown noflip kitid='leftCenterDemo' opened={this.state.leftCenterDemo} margin='bottom' pos='left-center' trigger={{ body:'Left center', ${animateSnippet} }}>
        Left center dropdown
      </Dropdown>
      <Dropdown noflip kitid='leftBottomDemo' opened={this.state.leftBottomDemo} margin='bottom' pos='left-bottom' trigger={{ body:'Left bottom', ${animateSnippet} }}>
        Left bottom dropdown
      </Dropdown>
    </Grid>
    <Grid small='1-3'>
      <Dropdown noflip kitid='rightTopDemo' opened={this.state.rightTopDemo} margin='bottom' pos='right-top' trigger={{ body:'Right top', ${animateSnippet} }}>
        Right top dropdown
      </Dropdown>
      <Dropdown noflip kitid='rightCenterDemo' opened={this.state.rightCenterDemo} margin='bottom' pos='right-center' trigger={{ body:'Right center', ${animateSnippet} }}>
        Right center dropdown
      </Dropdown>
      <Dropdown noflip kitid='rightBottomDemo' opened={this.state.rightBottomDemo} margin='bottom' pos='right-bottom' trigger={{ body:'Right bottom', ${animateSnippet} }}>
        Right bottom dropdown
      </Dropdown>
    </Grid>
  </div>`;

const justifyExample = ({ animate, justifiedDemo }) => (
  <Grid kitid='justify1'>
    <Dropdown noflip kitid='justifiedDemo' opened={justifiedDemo} justify='justify1' trigger={{ body:'Justified dropdown', animate }}>
      Justified dropdown
    </Dropdown>
  </Grid>
);
justifyExample.propTypes = {
  animate: PropTypes.object,
  justifiedDemo: PropTypes.bool,
};
const justifySnippet = `
  <Grid kitid='justify1'>
    <Dropdown noflip kitid='justifiedDemo' opened={this.state.justifiedDemo} justify='justify1' trigger={{ body:'Justified dropdown', ${animateSnippet} }}>
      Justified dropdown
    </Dropdown>
  </Grid>`;

const smallExample = ({ animate, smallDemo }) => (
  <Grid>
    <Dropdown noflip small kitid='smallDemo' opened={smallDemo} justify='justify1' trigger={{ body:'dropdown', animate }}>
      this is a drop down
   </Dropdown>
  </Grid>
);
smallExample.propTypes = {
  animate: PropTypes.object,
  smallDemo: PropTypes.bool,
};
const smallSnippet = `
  <Grid>
    <Dropdown noflip small kitid='smallDemo' opened={this.state.smallDemo} justify='justify1' trigger={{ body:'dropdown', ${animateSnippet} }}>
      this is a drop down
   </Dropdown>
  </Grid>`;

const blankExample = ({ animate, blankDemo }) => (
  <Grid>
    <Dropdown noflip kitid='blankDemo' opened={blankDemo} blank trigger={{body:'dropdown', animate}}>
      this is a drop down
   </Dropdown>
  </Grid>
);
blankExample.propTypes = {
  animate: PropTypes.object,
  blankDemo: PropTypes.bool,
};
const blankSnippet = `
  <Grid>
    <Dropdown noflip kitid='blankDemo' opened={this.state.blankDemo} blank trigger={{body:'dropdown', ${animateSnippet}}}>
      this is a drop down
   </Dropdown>
  </Grid>`;

const scrollableExample = ({ animate, scrollableDemo }) => (
  <Grid>
    <Dropdown noflip kitid='scrollableDemo' opened={scrollableDemo} dropbody={{style: {height:'150px'}}} scrollable trigger={{body:'dropdown', animate}}>
       <ul>
         <li>item</li><li>item</li><li>item</li><li>item</li><li>item</li><li>item</li><li>item</li><li>item</li>
      </ul>
    </Dropdown>
  </Grid>
);
scrollableExample.propTypes = {
  animate: PropTypes.object,
  scrollableDemo: PropTypes.bool,
};
const scrollableSnippet = `
  <Grid>
    <Dropdown noflip kitid='scrollableDemo' opened={this.state.scrollableDemo} dropbody={{style: {height:'150px'}}} scrollable trigger={{body:'dropdown', ${animateSnippet}}}>
       <ul>
         <li>item</li><li>item</li><li>item</li><li>item</li><li>item</li><li>item</li><li>item</li><li>item</li>
      </ul>
    </Dropdown>
  </Grid>`;

const buttonGroupExample = ({ animate, groupDemo }) => (
  <Grid>
    <Dropdown noflip kitid='groupDemo' opened={groupDemo} standard={{onClick: () => alert('Standard action')}} type='button-group' trigger={{body:'dropdown', animate}}>
     this is a drop down
   </Dropdown>
  </Grid>
);
buttonGroupExample.propTypes = {
  animate: PropTypes.object,
  groupDemo: PropTypes.bool,
};
const buttonGroupSnippet = `
  <Grid>
    <Dropdown noflip kitid='groupDemo' opened={this.state.groupDemo} standard={{onClick: () => alert('Standard action')}} type='button-group' trigger={{body:'dropdown', ${animateSnippet}}}>
     this is a drop down
   </Dropdown>
  </Grid>`;

const gridExample = ({ animate, gridDemo }) => (
  <Grid>
    <Dropdown kitid='gridDemo' opened={gridDemo} grid='2' type='button' trigger={{ body:'Multiple columns', animate }}>
     <List col='1-2' line items={['item', 'item', 'item', 'item', 'item']} />
     <List col='1-2' line items={['item', 'item', 'item', 'item', 'item']} />
   </Dropdown>
  </Grid>
);
gridExample.propTypes = {
  animate: PropTypes.object,
  gridDemo: PropTypes.bool,
};
const gridSnippet = `
  <Grid>
    <Dropdown kitid='gridDemo' opened={gridDemo} grid='2' type='button' trigger={{ body:'Multiple columns', animate }}>
     <List col='1-2' line items={['item', 'item', 'item', 'item', 'item']} />
     <List col='1-2' line items={['item', 'item', 'item', 'item', 'item']} />
   </Dropdown>
  </Grid>`;

export default class dropdownDoc extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        hoverDemo       : false,
        clickDemo       : false,
        topLeftDemo     : false,
        bottomCenterDemo: false,
        bottomRightDemo : false,
        bottomLeftDemo : false,
        topCenterDemo   : false,
        topRightDemo    : false,
        leftTopDemo     : false,
        leftCenterDemo  : false,
        leftBottomDemo  : false,
        rightTopDemo    : false,
        rightCenterDemo : false,
        rightBottomDemo : false,
        justifiedDemo   : false,
        smallDemo       : false,
        blankDemo       : false,
        scrollableDemo  : false,
        groupDemo       : false,
        gridDemo        : false
      };

      this.animateIn = this.animateIn.bind(this);
      this.animateOut = this.animateOut.bind(this);
      this.updateState = this.updateState.bind(this);
  }

  updateState (element, bool) {
    const state = element.dataset.kitid.split('-')[1];
    const obj = {};

    obj[state] = bool;
    this.setState(obj);
  }


  animateIn (element, bool) {
    this.updateState(element, bool);
    velocity(element, {opacity: 1}, {visibility: 'visible'}, 200);
  }


  animateOut (element, bool) {
    this.updateState(element, bool);
    velocity(element, {opacity: 0}, { visibility: 'hidden' }, 200);
  }


  render () {
    // this.state.hoverDemo, this.state.clickDemo
    const {
      hoverDemo,
      clickDemo,
      topLeftDemo,
      bottomCenterDemo,
      bottomRightDemo,
      bottomLeftDemo,
      topCenterDemo,
      topRightDemo,
      leftTopDemo,
      leftCenterDemo,
      leftBottomDemo,
      rightTopDemo,
      rightCenterDemo,
      rightBottomDemo,
      justifiedDemo,
      smallDemo,
      blankDemo,
      scrollableDemo,
      groupDemo,
      gridDemo,
    } = this.state;
    const positions = { bottomCenterDemo, bottomRightDemo, bottomLeftDemo, topLeftDemo, topCenterDemo, topRightDemo, leftTopDemo, leftCenterDemo, leftBottomDemo, rightTopDemo, rightCenterDemo, rightBottomDemo };
    const animate = { in: this.animateIn, out: this.animateOut };
    return (
      <div>
        <DocHeader {... { name, npmName, summary }} />
        <DocExample
          name="Dropdown events"
          description={<span>The Dropdown component toggles a dropdown when its trigger component is either clicked on or hovered over. By default the component handles clicks only. To change the behaviour to hover add the <code>hover</code> prop.</span>}
          jsx={eventsExample({ animate, clickDemo, hoverDemo })}
          snippet={eventsSnippet}
        />
        <DocExample
          name="Dropdown trigger"
          description={<div>
            <p>The dropdown trigger prop takes all the same props as the Trigger component. The body property is what will be displayed as the trigger and the animation props takes two callbacks which are toggled.</p>
            <p>The dropdown element is passed the animation callbacks via the animation.in and animation.out trigger properties. An animation library such as <a href='http://julian.com/research/velocity/'>velocity</a> can be used to animate between the two states. For more details on how see the Trigger component.</p>
          </div>}
          snippet={triggerSnippet}
        />
        <DocExample
          name="Dropdown boundary"
          description={<div>
            <p>By default the Dropdown component will automatically flip the dropdown when it touches a boundry. To turn off this feature add the <code>noflip</code> prop to the component.</p>
            <p>The boundry is set to the viewport of the device. The  boundry can be changed by passing a selector to the boundry prop as the container.</p>
          </div>}
        />
        <DocExample
          name="Dropdown Positions"
          description={<span>The position of a dropdown can be changed by adding the <code>pos='position'</code>.</span>}
          table={positionsTable}
          jsx={positionsExample({ animate, ...positions })}
          snippet={positionsSnippet}
        />
        <DocExample
          name="Justified dropdown"
          description={<span>To justify a dropdown add a <code>kitid='targetid'</code> prop to the target element to be justified against and on the dropdown component add the <code>justify='targetid'</code> with the kitid of the target.</span>}
          jsx={justifyExample({ animate, justifiedDemo })}
          snippet={justifySnippet}
        />
        <DocExample
          name="Small dropdown"
          description={<span>For a more compact dropdown which also has no text wrapping add the <code>small</code> prop.</span>}
          jsx={smallExample({ animate, smallDemo })}
          snippet={smallSnippet}
        />
        <DocExample
          name="Blank dropdown"
          description={<span>The <code>blank</code> prop creates a dropdown without any styling.</span>}
          jsx={blankExample({ animate, blankDemo })}
          snippet={blankSnippet}
        />
        <DocExample
          name="Scrollable dropdown"
          description={<span>When a fixed height is added to the dropdown and its content is longer than height the <code>scrollable</code> prop can be added to make the dropdown scrollable.</span>}
          jsx={scrollableExample({ animate, scrollableDemo })}
          snippet={scrollableSnippet}
        />
        <DocExample
          name="Button group"
          description={<span>Dropdowns can be used to create split buttons where one button triggers the standard action and the other toggles the dropdown.</span>}
          jsx={buttonGroupExample({ animate, groupDemo })}
          snippet={buttonGroupSnippet}
        />
        <DocExample
          name="Button grid"
          description={<span>A dropdown can behave like a grid by adding the <code>grid='*'</code> prop. A dropdown grid can have a maximum of 5 columns.</span>}
          jsx={gridExample({ animate, gridDemo })}
          snippet={gridSnippet}
        />
      <DocFooter { ...{ name, propTuples }} />
      </div>
    );
  }
}
