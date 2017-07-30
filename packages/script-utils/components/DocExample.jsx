import React, { PropTypes } from 'react';
import Codeblock from 'react-uikit-codeblock';

const DocExample = ({ name, description, table, jsx, snippet, scroll = null, trailingNote }) => (
  <section>
    { name &&
      <h2>{name}</h2>
    }
    { description &&
      <div>{description}</div>
    }
    { table &&
      table
    }

    {/* Hide the example header and jsx in a tag we plan to filter :p */}
    { jsx &&
      <div data-markdown-omit="true">
        <h3 className='example'>Example</h3>
        {jsx}
      </div>
    }
    { snippet &&
      <div data-markdown-omit-wrapper="true" style={{ marginTop: "10px" }}>
        <h3 className='code'>Code</h3>
        <Codeblock scroll={scroll} lang="javascript">
          {snippet}
        </Codeblock>
      </div>
    }
    { trailingNote &&
      trailingNote
    }
  </section>
);

DocExample.propTypes = {
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  jsx: PropTypes.node,
  name: PropTypes.string,
  snippet: PropTypes.string,
  scroll: PropTypes.string,
  table: PropTypes.node,
  trailingNote: PropTypes.node,
};

export default DocExample;
