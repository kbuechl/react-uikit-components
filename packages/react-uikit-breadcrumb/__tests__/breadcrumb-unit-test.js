'use strict';
import test from 'tape';
import Breadcrumb from '../lib/breadcrumb';
import BreadcrumbItem from '../lib/breadcrumb-item';
import React from 'react';
import {
  htmlToString,
  reactToString
} from './helpers/renderElement';


test('breadcrumb Component', nested => {
  nested.test('Renders breadcrumb component:',
    assert => {
      const actual = reactToString(
        <Breadcrumb kitid='bread'>
          <BreadcrumbItem kitid='1' body='Home'/>
          <BreadcrumbItem kitid='4' type='Blog' body='link'/>
          <BreadcrumbItem kitid='3' type='disabled' body='Category'/>
          <BreadcrumbItem kitid='2' type='active' body='Post'/>
        </Breadcrumb>
      );


      const expect = htmlToString(`
        <ul class="uk-breadcrumb" data-kitid="bread">
          <li data-kitid="1"><a>Home</a></li>
          <li data-kitid="4"><a>link</a></li>
          <li data-kitid="3">
            <span>Category</span>
          </li>
          <li class="uk-active null" data-kitid="2">
            <span>Post</span>
          </li>
        </ul>
      `);


      assert.equals(actual, expect,
        'Correctly renders breadcrumb component');

      assert.end();
    });

});
