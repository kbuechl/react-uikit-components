# React Uikit Text



## Usage

    npm install react-uikit-text --save;

    // ES6
    import Text from 'react-uikit-text';

    // ES5
    var Text = require('react-uikit-text');

## Text Types

<span>The Text component creates a number of various Text components. The default type is `p` which creates a paragraph.</span>

<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">`type='p'`</td>

<td><span>Define a paragraph using the</span></td>

</tr>

<tr>

<td colspan="1">`type='a'`</td>

<td>a type.</a></span></td>

</tr>

<tr>

<td colspan="1">`type='em'`</td>

<td><span>Emphasize text using the _em element_.</span></td>

</tr>

<tr>

<td colspan="1">`type='strong'`</td>

<td><span>Imply any extra importance using the **strong type**.</span></td>

</tr>

<tr>

<td colspan="1">`type='code'`</td>

<td><span>Define inline code snippets using the `code type.`</span></td>

</tr>

<tr>

<td colspan="1">`type='ins'`</td>

<td>ins type</ins>.</span></td>

</tr>

<tr>

<td colspan="1">`type='mark'`</td>

<td>mark type</mark>.</span></td>

</tr>

<tr>

<td colspan="1">`type='q'`</td>

<td>q type</q>.</span></td>

</tr>

<tr>

<td colspan="1">`type='abbr'`</td>

<td>abbr type</abbr> with a `title=''` Prop.</span></td>

</tr>

<tr>

<td colspan="1">`type='del'`</td>

<td>del type</del> with a `title=''` Prop.</span></td>

</tr>

<tr>

<td colspan="1">`type='dfn'`</td>

<td>dfn type</dfn> with a `title=''` Prop.</span></td>

</tr>

<tr>

<td colspan="1">`type='small'`</td>

<td>small</small> type.</span></td>

</tr>

<tr>

<td colspan="1">`type='h1'`</td>

<td><span>Define a h1 heading using the

# h1 type

.</span></td>

</tr>

<tr>

<td colspan="1">`type='h2'`</td>

<td><span>Define a h2 heading using the

## h2 type

.</span></td>

</tr>

<tr>

<td colspan="1">`type='h3'`</td>

<td><span>Define a h3 heading using the

### h3 type

.</span></td>

</tr>

<tr>

<td colspan="1">`type='h4'`</td>

<td><span>Define a h4 heading using the

#### h4 type

.</span></td>

</tr>

<tr>

<td colspan="1">`type='h5'`</td>

<td><span>Define a h5 heading using the

##### h5 type</span> </td>

</tr>

<tr>

<td colspan="1">`type='h6'`</td>

<td><span>Define a h6 heading using the

###### h6 type

.</span></td>

</tr>

<tr>

<td colspan="1">`type='span'`</td>

<td>span type</span>. Use when no other component or HTML element is suitable.</span></td>

</tr>

<tr>

<td colspan="1">`type='hr'`</td>

<td><span>Create a horizontal rule by using the `hr type`.</span></td>

</tr>

</tbody>

</table>

## Text headings

<span>Use `heading` prop to alter any of the Text component types to a heading.</span>

<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">`heading='h1'`</td>

<td>Changes the size of text to h1</td>

</tr>

<tr>

<td colspan="1">`heading='h2'`</td>

<td>Changes the size of text to h2</td>

</tr>

<tr>

<td colspan="1">`heading='h3'`</td>

<td>Changes the size of text to h3</td>

</tr>

<tr>

<td colspan="1">`heading='h4'`</td>

<td>Changes the size of text to h4</td>

</tr>

<tr>

<td colspan="1">`heading='h5'`</td>

<td>Changes the size of text to h5</td>

</tr>

<tr>

<td colspan="1">`heading='h6'`</td>

<td>Changes the size of text to h6</td>

</tr>

</tbody>

</table>

### Code

    <Text heading='h1'>...</Text>
    <Text heading='h2'>...</Text>
    <Text heading='h3'>...</Text>
    <Text heading='h4'>...</Text>
    <Text heading='h5'>...</Text>
    <Text heading='h6'>...</Text>

## Text bold

<span>Add the `bold` prop to create bold text.</span>


### Code

    <Text bold type='span'>bold text</Text>

## Text size

<span>Text size can be changed by using one of the `size=''` props.</span>

<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">`size='small'`</td>

<td>decrease the font size.</span></span></td>

</tr>

<tr>

<td colspan="1">`size='large'`</td>

<td>increase the font size.</span></span></td>

</tr>

</tbody>

</table>

## Text context

<span>The text context prop can be used to give text context.</span>

<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">`context='muted'`</td>

<td></td>

</tr>

<tr>

<td colspan="1">`context='primary'`</td>

<td></td>

</tr>

<tr>

<td colspan="1">`context='success'`</td>

<td></td>

</tr>

<tr>

<td colspan="1">`context='warning'`</td>

<td></td>

</tr>

<tr>

<td colspan="1">`context='danger'`</td>

<td></td>

</tr>

<tr>

<td colspan="1">`context='contrast'`</td>

<td></td>

</tr>

</tbody>

</table>

### Code

      <Text context='muted'>Add the muted props for text.</Text>
      <Text context='primary'>Add the primary props to text context.</Text>
      <Text context='success'>Add the success props to  your to text context.</Text>
      <Text context='warning'>Addthe  warning props to  your to text context.</Text>
      <Text context='danger'>Add the danger props to  your to text context.</Text>
      <Text context='contrast'>Add the contrast props to make the text context readable on flat context areas or pictures. It's often white.</Text>

## Text align

<span>The textAlign prop horizontally aligns text.</span>

<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">`textAlign='left'`</td>

<td>Aligns text to the left.</td>

</tr>

<tr>

<td colspan="1">`textAlign='leftSmall'`</td>

<td>Aligns text to the left only on small devices.</td>

</tr>

<tr>

<td colspan="1">`textAlign='leftMedium'`</td>

<td>Aligns text to the left on medium and small devices.</td>

</tr>

<tr>

<td colspan="1">`textAlign='right'`</td>

<td>Aligns text to the right.</td>

</tr>

<tr>

<td colspan="1">`textAlign='center'`</td>

<td>Centers text horizontally.</td>

</tr>

<tr>

<td colspan="1">`textAlign='centerSmall'`</td>

<td>Centers text horizontally only on small devices.</td>

</tr>

<tr>

<td colspan="1">`textAlign='centerMedium'`</td>

<td>Centers text horizontally on medium and small devices.</td>

</tr>

<tr>

<td colspan="1">`textAlign='justify'`</td>

<td>Justifies text.</td>

</tr>

</tbody>

</table>



### Code

      <Grid gutter='small' indent>
        <Panel box margin='bottom' col='1-2'>
          <Text textAlign='left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left'</code></Text>
        </Panel>
        <Panel box margin='bottom' col='1-2'>
          <Text textAlign='leftSmall'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left-small'</code></Text>
        </Panel>
        <Panel box margin='bottom' col='1-2'>
          <Text textAlign='leftMedium'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left-medium'</code></Text>
        </Panel>
        <Panel box margin='bottom' col='1-2'>
          <Text textAlign='right'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='right'</code></Text>
        </Panel>
        <Panel box margin='bottom' col='1-2'>
          <Text textAlign='center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center'</code></Text>
        </Panel>
        <Panel box margin='bottom' col='1-2'>
          <Text textAlign='centerSmall'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center-small'</code></Text>
        </Panel>
        <Panel box margin='bottom' col='1-2'>
          <Text textAlign='centerMedium'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center-medium'</code></Text>
        </Panel>
        <Panel box margin='bottom' col='1-2'>
          <Text textAlign='justify'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='justify'</code></Text>
        </Panel>
      </Grid>

## Text vertical

<span>The textVertical prop vertically aligns text to an object.</span>

<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">`textVertical='top'`</td>

<td>Aligns text to the top.</td>

</tr>

<tr>

<td colspan="1">`textVertical='middle'`</td>

<td>Centers text vertically.</td>

</tr>

<tr>

<td colspan="1">`textVertical='bottom'`</td>

<td>Aligns text to the bottom.</td>

</tr>

</tbody>

</table>



### Code

      // style.css
      .uk-text-top > * {
     vertical-align: top;
    }
      ...

      // script.js
      <Grid gutter='small'>
        <Panel colMedium='1-2' colLarge='1-3' margin='bottom'>
          <img src='docs/images/placeholder_avatar.svg' width='50' height='50' /><Text textVertical='top' type='span'>Lorem ipsum <code>textVerticle='top'</code></Text>
        </Panel>
        <Panel colMedium='1-2' colLarge='1-3' margin='bottom'>
          <img src='docs/images/placeholder_avatar.svg' width='50' height='50' /><Text textVertical='middle' type='span'>Lorem ipsum <code>textVerticle='middle'</code></Text>
        </Panel>
        <Panel colMedium='1-2' colLarge='1-3' margin='bottom'>
          <img src='docs/images/placeholder_avatar.svg' width='50' height='50' /><Text textVertical='bottom' type='span'>Lorem ipsum <code>textVerticle='bottom'</code></Text>
        </Panel>
      </Grid>

## Text wrap

<span>The textWrap prop wraps text.</span>

<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">`textWrap='truncate'`</td>

<td>Prevents text from wrapping into multiple lines, truncating it instead.</td>

</tr>

<tr>

<td colspan="1">`textWrap='break'`</td>

<td>Breaks strings if their length exceeds the width of their container.</td>

</tr>

<tr>

<td colspan="1">`textWrap='nowrap'`</td>

<td>Breaks strings if their length exceeds the width of their container.</td>

</tr>

</tbody>

</table>



### Code

      <Grid gutter='small' indent>
        <Panel col='1-3' box>
          <Text textWrap='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<code>textWrap='truncate'</code></Text>
        </Panel>
        <Panel col='1-3' box>
          <Text textWrap='break'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<code>textWrap='break'</code></Text>
        </Panel>
        <Panel col='1-3' box>
          <Text textWrap='nowrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<code>textWrap='nowrap'</code></Text>
        </Panel>
      </Grid>

## Text Props



<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">bold</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">context</td>

<td>oneOf: 'muted' | 'primary' | 'success' | 'warning' | 'danger' | 'contrast'</td>

</tr>

<tr>

<td colspan="1">heading</td>

<td>oneOf: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'</td>

</tr>

<tr>

<td colspan="1">href</td>

<td>string for a type only.</td>

</tr>

<tr>

<td colspan="1">size</td>

<td>oneOf: 'small' | 'large'</td>

</tr>

<tr>

<td colspan="1">type</td>

<td>oneOf: 'a' | 'abbr' | 'code' | 'del' | 'dfn' | 'em' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'hr' | 'ins' | 'mark' | 'q' | 'p' (default) | 'small' | 'span' | 'strong'</td>

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