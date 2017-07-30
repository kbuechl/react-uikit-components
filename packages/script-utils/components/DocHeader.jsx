import React, { PropTypes } from 'react';
import Codeblock from 'react-uikit-codeblock';

const DocHeader = ({ name, npmName, secondaryName, secondaryPath, summary }) => (
  <div>
    <section>
      <h1>React Uikit { name }</h1>
      <p className='uk-article-lead'>{ summary }</p>
      <p data-markdown-omit>
        See <a href={`https://github.com/otissv/react-uikit-components/tree/master/packages/${npmName}`}>the website </a> for docs.
      </p>
    </section>
    <section>
      <h2>Usage</h2>
      <Codeblock lang="bash">
        {`# To install in your project: \nnpm install ${npmName} --save;`}
      </Codeblock>
      <Codeblock lang="javascript">
{`// ES6
import ${name} from '${npmName}'; ${secondaryName ? `\nimport ${secondaryName} from '${secondaryPath}';`: ''}

// ES5
var ${name} = require('${npmName}').default;${secondaryName ? `\nvar ${secondaryName} = require('${secondaryPath}').default;`: ''}`}
      </Codeblock>
    </section>
  </div>
);

DocHeader.propTypes = {
  name: PropTypes.string.isRequired,
  npmName: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  secondaryName: PropTypes.string,
  secondaryPath: PropTypes.string,
};

DocHeader.defaultProps = {
  secondaryName: '',
};

export default DocHeader;
