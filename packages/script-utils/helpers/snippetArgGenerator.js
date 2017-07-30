import R from 'ramda';

// Provides a snippet for a JSON prop: ${keyIsPresent ? ` key={${JSON.stringify(value)}}`: ''}`
const jsonTemplateGenerator = (prop) => (propz) => `${propz[prop] ? ` ${prop}={${JSON.stringify(propz[prop])}}`: ''}`;
// Provides a snippet for a boolean prop: ${keyIsPresent ? ` key`: ''}`
const boolTemplateGenerator = (prop) => (propz) => `${propz[prop] ? ` ${prop}`: ''}`;
// Provides a snippet for a string prop: ${keyIsPresent ? ` key="value"`: ''}`
const stringTemplateGenerator = (prop) => (propz) => `${propz[prop] ? ` ${prop}="${propz[prop]}"`: ''}`;

// A function which takes an object of propTypes: { bool: [], json: [], string: [] }
// And returns an Array of the above template functions ready to be written into a JSX snippet.
export const templatePropGenerator = (props) =>
  R.compose(
    R.flatten,
    R.values,
    R.evolve({
      bool: R.map(boolTemplateGenerator),
      json: R.map(jsonTemplateGenerator),
      string: R.map(stringTemplateGenerator),
    })
  )(props);

// Useful string snippet.
export const shortLoremIpsumString = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
export const longLoremIpsumString = `${shortLoremIpsumString} Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
  mollit anim id est laborum.`;
