'use strict';
import test from 'tape';
import Codeblock from '../lib/codeblock';
import React from 'react';
import renderElement from './helpers/renderElement';


test('codeblock Component', nested => {
  nested.test('Renders codeblock component.',
    assert => {
      const codeblock = renderElement(<Codeblock>This is a codeblock</Codeblock>).dom();

      const actual = codeblock.html();
      const expect = '<pre><code>This is a codeblock</code></pre>';

      assert.equals(actual, expect,
        'Correctly renders codeblock element');


      assert.end();
    });


  nested.test('syntax prop.',
    assert => {
      const codeblock = renderElement(<Codeblock syntax='xml'/>).dom();

      const actual = codeblock.html();
      const expect = '<pre class="xml"><code class="xml"></code></pre>';

      assert.equals(actual, expect,
        'Adds syntax class to codeblock element');

      assert.end();
    });

});
