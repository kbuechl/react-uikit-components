# React Uikit Nav

Defines different styles for list navigations.

## Usage

```
# To install in your project: 
npm install react-uikit-nav --save;
```

```
// ES6
import Nav from 'react-uikit-nav'; 
import NavItem from 'react-uikit-nav/lib/nav-item';

// ES5
var Nav = require('react-uikit-nav').default;
var NavItem = require('react-uikit-nav/lib/nav-item').default;
```

## Nav

Navigation consists of two components `<Nav>` and `<NavItem>`. The Nav component displays a list of links for various types of Navs. To choose a type of Nav the `type` prop must be added to the Nav component

## Nav Side

Add the `type="side"` prop to place a nav inside your sidebar, panels or anywhere else in your content.

### Code

```
<Grid>
  <Nav type='side' cols='1-4'>
    <NavItem label='Active' href='#' active />
    <NavItem parent label='Item' href='#' >
        <Nav type='sub'>
          <NavItem label='Sub item' href='#' />
          <NavItem label='Sub item' href='#' />
        </Nav>
      </NavItem>
    <NavItem label='Item' href='#' />
    <NavItem label='Item' href='#' />
  </Nav>
</Grid>
```

## Navs Nested

Navs can easily be nested insde of each other by using the Nav `parent` and `sub` props and the NavItems `parent` prop.

### Code

```
<Grid>
  <Nav  parenttype='side' cols='1-4'>
    <NavItem label='Active' href='#' active />
    <NavItem label='Item' href='#' />
    <NavItem label='Item' href='#' />
    <NavItem label='Item' href='#' />
  </Nav>
</Grid>
```

## Nav Dropdown

Nav compnents can be placed into a Dropdown component by setting `type='dropdown'`

Props can be passed to the Dropdown in the form of JSON object via the `dropdown` prop. See Droppdown component props for more details.

### Code

```

<Droppdown trigger={{
  body: 'Nav dropdown',
  animate: {
    in: (element) => this.animateIn(element),
    out: (element) => this.animateOut(element)
  }
}}>
  <Nav parent type='dropdown' cols='1-4'>
    <NavItem body='Item' href='#' />
    <NavItem body='Another item' href='#' />
    <NavItem type='header' body='Header'/>
    <NavItem body='Item' href='#' />
    <NavItem body='Another item' href='#' />
  </Nav>
</Droppdown>
```

## Nav Items

The NavItem component creates a Nav item which can either be a link, header or a divider. This can be specified using the `type` prop. The default type is link.

| Prop | Description |
| --- | --- |
| `body` | Provides a body for a link. |
| `href` | Provides a URL for a link. |
| `active` | Shows the item as active. |
| `subtitle` | Creates a subtitle. |
| `type='link'` | Creates a link NavItem. |
| `type='header'` | Creates a header NavItem. |
| `type='body'` | Creates a body a link. |
| `type='divider'` | Creates a divider NavItem for separating menu items. |

### Code

```

<Grid indent>
  <Nav type='side' cols='1-4'>
    <NavItem type='header' body='Header'/>
    <NavItem body='Active' href='#' active />
    <NavItem body='Item' href='#' />
    <NavItem body='Item' href='#' subtitle='Subtitle'/>
    <NavItem body='Item' href='#' />
    <NavItem type='divider' />
    <NavItem body='Item' href='#' />
  </Nav>
</Grid>
```

## Nav Item collections

An array of objects can be passed to the `items` prop of a Nav to generate NavItems

### Code

```

<Grid indent>
  <Nav cols='1-4' type='side' items={[{body: 'Home', href: '#', active: true}, {body: 'About', href: '#'}]} />
</Grid>
```

## React Router

NavItem can be used with [React Router](http://rackt.github.io/react-router/) by adding `<Link>` as a child of `<NavItem>`

See [React Router](http://rackt.github.io/react-router/) for router configuration

### Code

```
<Nav type='side'>
  <NavItem><Link to="app">Home</Link></NavItem>
</Nav>
```

## Nav Props

See base component for additional utility props.

| Prop | Type |
| --- | --- |
| parent | bool |
| type | oneOf: 'dropdown' | 'side' | 'sub' |

## Nav Props

See Base for additional utility props.

| Prop | Type |
| --- | --- |
| body | string |
| href | string |
| active | bool |
| subtitle | string |
| type | oneOf: 'link' | 'header' | 'body' | 'divider' |

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