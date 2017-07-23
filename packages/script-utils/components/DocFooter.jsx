import React, { PropTypes } from 'react';
import Table from 'react-uikit-table';

const DocFooter = ({ name, hasPropsInBase, propTuples }) => (
  <section>
    <h2>{name} Props</h2>
    { hasPropsInBase &&
      <p>
      See Base for additional utility props.
      </p>
    }
    { propTuples &&
      <Table head={['Prop', 'Type']} body={propTuples} />
    }
  </section>
);

DocFooter.propTypes = {
  name: PropTypes.string.isRequired,
  // is this necessary?
  hasPropsInBase: PropTypes.bool,
  propTuples: PropTypes.array,
};

DocFooter.defaultProps = {
  hasPropsInBase: true,
};


export default DocFooter;
