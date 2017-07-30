# React Uikit Dropdown



## Usage

    npm install react-uikit-dropdown --save;

    // ES6
    import Dropdown from 'react-uikit-dropdown';

    // ES5
    var Dropdown = require('react-uikit-dropdown');

## Dropdown events

<span>The Dropdown component toggles a dropdown when its trigger component is either clicked on or hovered over. By default the component handles clicks only. To change the behaviour to hover add the `hover` prop.</span>


### Code

      <Dropdown opened={this.state.hoverOpened} noflip hover margin='bottom' trigger={{ body:'Hover', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }} >
        This is a hover dropdown
      </Dropdown>

      <Dropdown opened={this.state.clickOpened} noflip hover margin='bottom' trigger={{ body:'Click', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }} >
        This is a click dropdown
      </Dropdown>

## Dropdown trigger



### Code

      const animateIn = (element, bool) {
        this.setState({ opened : bool});
        velocity(element, {opacity: 1}, {visibility: 'visible'}, 200);
      }

      const animateOut = (element, bool) {
        this.setState({ opened : bool});
        velocity(element, {opacity: 0}, { visibility: 'hidden' }, 200);
      }

      <Dropdown noflip opened={this.state.opened} margin='bottom' trigger={{ body:'Click', animate: {
      in: this.animateIn,
      out: this.animateOut
    }  }}>
        This is a click dropdown
      </Dropdown>

## Dropdown boundary



## Dropdown Positions

<span>The position of a dropdown can be changed by adding the `pos='position'`.</span>

<table class="uk-table"><caption>Dropdown positions</caption>

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1"`</td>

<td>Default position. Aligns the dropdown to the trigger left edge below the trigger.</td>

</tr>

<tr>

<td colspan="1"`</td>

<td>Centers the dropdown below the trigger.</td>

</tr>

<tr>

<td colspan="1"`</td>

<td>Aligns the dropdown to the trigger right edge below the trigger.</td>

</tr>

<tr>

<td colspan="1"`</td>

<td>Aligns the dropdown to the trigger left edge above the trigger</td>

</tr>

<tr>

<td colspan="1"`</td>

<td>Centers the dropdown above the trigger.</td>

</tr>

<tr>

<td colspan="1"`</td>

<td>Aligns the dropdown to the trigger right edge above the trigger.</td>

</tr>

<tr>

<td colspan="1"`</td>

<td>Aligns the dropdown bottom right corner to the trigger top left corner.</td>

</tr>

<tr>

<td colspan="1"`</td>

<td>Centers the dropdown's right edge to the trigger left edge.</td>

</tr>

<tr>

<td colspan="1"`</td>

<td>Aligns the dropdown's top right corner to the trigger bottom left corner.</td>

</tr>

<tr>

<td colspan="1"`</td>

<td>Aligns the dropdown top left corner to the trigger top right corner.</td>

</tr>

<tr>

<td colspan="1"`</td>

<td>Centers the dropdown's left edge to the trigger right edge.</td>

</tr>

<tr>

<td colspan="1"`</td>

<td>Aligns the dropdown top left corner to the trigger bottom right corner.</td>

</tr>

</tbody>

</table>



### Code

      <div>
        <Grid small='1-3'>
          <Dropdown noflip kitid='bottomLeftDemo' opened={this.state.bottomLeftDemo} margin='bottom' pos='bottom-left' trigger={{ body:'Bottom left', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
            Bottom left dropdown
          </Dropdown>
          <Dropdown noflip kitid='bottomCenterDemo' opened={this.state.bottomCenterDemo} margin='bottom' pos='bottom-center' trigger={{ body:'Bottom center', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
            Bottom center dropdown
          </Dropdown>
          <Dropdown noflip kitid='bottomRightDemo' opened={this.state.bottomRightDemo} margin='bottom' pos='bottom-right' trigger={{ body:'Bottom right', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
            Bottom right dropdown
          </Dropdown>
        </Grid>
        <Grid small='1-3'>
          <Dropdown noflip kitid='topLeftDemo' opened={this.state.topLeftDemo} margin='bottom' pos='top-left' trigger={{ body:'Top left', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
            Top left dropdown
          </Dropdown>
          <Dropdown noflip kitid='topCenterDemo' opened={this.state.topCenterDemo} margin='bottom' pos='top-center' trigger={{ body:'Top center', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
            Top center dropdown
          </Dropdown>
          <Dropdown noflip kitid='topRightDemo' opened={this.state.topRightDemo} margin='bottom' pos='top-right' trigger={{ body:'Top right', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
            Top right dropdown
          </Dropdown>
        </Grid>
        <Grid small='1-3'>
          <Dropdown noflip kitid='leftTopDemo' opened={this.state.leftTopDemo} margin='bottom' pos='left-top' trigger={{ body:'Left top', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
            Left top dropdown
          </Dropdown>
          <Dropdown noflip kitid='leftCenterDemo' opened={this.state.leftCenterDemo} margin='bottom' pos='left-center' trigger={{ body:'Left center', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
            Left center dropdown
          </Dropdown>
          <Dropdown noflip kitid='leftBottomDemo' opened={this.state.leftBottomDemo} margin='bottom' pos='left-bottom' trigger={{ body:'Left bottom', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
            Left bottom dropdown
          </Dropdown>
        </Grid>
        <Grid small='1-3'>
          <Dropdown noflip kitid='rightTopDemo' opened={this.state.rightTopDemo} margin='bottom' pos='right-top' trigger={{ body:'Right top', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
            Right top dropdown
          </Dropdown>
          <Dropdown noflip kitid='rightCenterDemo' opened={this.state.rightCenterDemo} margin='bottom' pos='right-center' trigger={{ body:'Right center', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
            Right center dropdown
          </Dropdown>
          <Dropdown noflip kitid='rightBottomDemo' opened={this.state.rightBottomDemo} margin='bottom' pos='right-bottom' trigger={{ body:'Right bottom', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
            Right bottom dropdown
          </Dropdown>
        </Grid>
      </div>

## Justified dropdown

<span>To justify a dropdown add a `kitid='targetid'` prop to the target element to be justified against and on the dropdown component add the `justify='targetid'` with the kitid of the target.</span>


### Code

      <Grid kitid='justify1'>
        <Dropdown noflip kitid='justifiedDemo' opened={this.state.justifiedDemo} justify='justify1' trigger={{ body:'Justified dropdown', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
          Justified dropdown
        </Dropdown>
      </Grid>

## Small dropdown

<span>For a more compact dropdown which also has no text wrapping add the `small` prop.</span>


### Code

      <Grid>
        <Dropdown noflip small kitid='smallDemo' opened={this.state.smallDemo} justify='justify1' trigger={{ body:'dropdown', animate: {
      in: this.animateIn,
      out: this.animateOut
    } }}>
          this is a drop down
       </Dropdown>
      </Grid>

## Blank dropdown

<span>The `blank` prop creates a dropdown without any styling.</span>


### Code

      <Grid>
        <Dropdown noflip kitid='blankDemo' opened={this.state.blankDemo} blank trigger={{body:'dropdown', animate: {
      in: this.animateIn,
      out: this.animateOut
    }}}>
          this is a drop down
       </Dropdown>
      </Grid>

## Scrollable dropdown

<span>When a fixed height is added to the dropdown and its content is longer than height the `scrollable` prop can be added to make the dropdown scrollable.</span>


### Code

      <Grid>
        <Dropdown noflip kitid='scrollableDemo' opened={this.state.scrollableDemo} dropbody={{style: {height:'150px'}}} scrollable trigger={{body:'dropdown', animate: {
      in: this.animateIn,
      out: this.animateOut
    }}}>
           <ul>
             <li>item</li><li>item</li><li>item</li><li>item</li><li>item</li><li>item</li><li>item</li><li>item</li>
          </ul>
        </Dropdown>
      </Grid>

## Button group

<span>Dropdowns can be used to create split buttons where one button triggers the standard action and the other toggles the dropdown.</span>


### Code

      <Grid>
        <Dropdown noflip kitid='groupDemo' opened={this.state.groupDemo} standard={{onClick: () => alert('Standard action')}} type='button-group' trigger={{body:'dropdown', animate: {
      in: this.animateIn,
      out: this.animateOut
    }}}>
         this is a drop down
       </Dropdown>
      </Grid>

## Button grid

<span>A dropdown can behave like a grid by adding the `grid='*'` prop. A dropdown grid can have a maximum of 5 columns.</span>


### Code

      <Grid>
        <Dropdown kitid='gridDemo' opened={gridDemo} grid='2' type='button' trigger={{ body:'Multiple columns', animate }}>
         <List col='1-2' line items={['item', 'item', 'item', 'item', 'item']} />
         <List col='1-2' line items={['item', 'item', 'item', 'item', 'item']} />
       </Dropdown>
      </Grid>

## Dropdown Props



<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">blank</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">boundary</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">dropbody</td>

<td>object</td>

</tr>

<tr>

<td colspan="1">grid</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">hover</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">justify</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">navbar</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">noflip</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">opened</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">parent</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">pos</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">scrollable</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">small</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">standard</td>

<td>object</td>

</tr>

<tr>

<td colspan="1">trigger</td>

<td>object</td>

</tr>

<tr>

<td colspan="1">type</td>

<td>oneOf: 'button' | 'button-group' | 'dropdown' | 'grid' | 'navbar'</td>

</tr>

</tbody>

</table>

## Tests

`npm run test` to run tests with minimal output.  
`npm run test:spec` to run tests with detailed output.  
`npm run test:watch` watches all directories and run tests with minimal output on file changes.  

## Build
`npm run build` to build files from distribution.  
`npm run build:watch` watches src directory and builds files on changes.  

## Lint
`npm run lint` lints scripts in src directory.  
`npm run lint:watch` watches src directory and lints scripts in src directory.  

## License
MIT