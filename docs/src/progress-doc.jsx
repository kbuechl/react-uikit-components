'use strict';


import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import Table from 'react-uikit-table';
import Progress from 'react-uikit-progress';

export default class ProgressDoc extends React.Component {
  render () {
    return <div>
      <section>
        <h1>Progress</h1>
        <p className='uk-Progress-lead'>
        Defines different styles for progress bars.
        </p>

        <p>
          <a href='https://github.com/otissv/react-uikit-progress'>react-uikit-progress</a> on github.
        </p>
      </section>

      <section>
        <h2>Usage</h2>
        <Codeblock>
{`npm install react-uikit-progress --save;</code>

// ES6
Progress uikit from 'react-uikit-progress';

// ES5
var Progress = require('react-uikit-progress').default;
`}
        </Codeblock>

        <hr className="uk-article-divider" />

        <h2>Progress</h2>
        <p>
          To create a Progress component set a number to the <code>bar</code> prop
          representing the percentage of the progress.
          Optionaly, text can be added to the bar my assigning the <code>body</code> prop.
        </p>

        <h3 className='example'>Example</h3>

        <Progress bar={40} body='40%'/>

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
{`<Progress bar={40} body='40%'/>
`}
        </Codeblock>
      </section>


      <section>
        <h2>Progress sizes</h2>

        <p>
          To change the size of the progress bar assign the <code>size</code>
          prop to either small or mini.
        </p>

        <h3 className='example'>Example</h3>

        <Progress bar={50} />
        <Progress bar={60} size='small' />
        <Progress bar={70} size='mini' />

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
        {
`<Progress bar={50} />
<Progress bar={60} size='small' />
<Progress bar={70} size='mini' />
`}
        </Codeblock>
      </section>


      <section>
        <h2>Progres context</h2>

        <p>
          A context can be given to a progess bar by assigning the context to
          success, warning or danger.
        </p>

        <h3 className='example'>Example</h3>

        <Progress bar={70} context='success' />
        <Progress bar={60} context='warning' />
        <Progress bar={50} context='danger' />

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
        {
`<Progress bar={70} context='success' />
<Progress bar={60} context='warning' />
<Progress bar={50} context='danger' />
`}
        </Codeblock>
      </section>


      <section>
        <h2>Striped</h2>

        <p>
          The Progress component can be striped by adding the <code>striped</code> prop.
          You can also add the <code>active</code> prop animate the stripes.
        </p>

        <h3 className='example'>Example</h3>

        <Progress bar={60} striped />
        <Progress bar={80} striped active />

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
        {
`<Progress bar={60} striped />
<Progress bar={80} striped active />
`}
        </Codeblock>
      </section>


      <section>
        <h2>Combined</h2>

        <h3 className='example'>Example</h3>

        <Progress
          bar={80}
          striped active
          size='small'
          context='danger'
        />

        <h4 className='code'>Code</h4>
        <Codeblock syntax='xml'>
        {
`<Progress
  bar={80}
  striped active
  size='small'
  context='danger'
/>
`}
        </Codeblock>
      </section>

      <section>
        <h2>Progress Props</h2>
        <p>

        See base component for additional utility props.
        </p>

        <Table head={['Prop', 'Type']} body={[
          { prop: 'active',type: 'bool' },
          { prop: 'bar',type: 'number' },
          { prop: 'body',type: 'string' },
          { prop: 'size', type: <div>oneOf<br/>mini or small</div> },
          { prop: 'context', type: <div>oneOf<br/>succes, warning or danger</div> },
          { prop: 'striped', type: 'bool' }
        ]}>

        </Table>
      </section>

    </div>;
  }
}
