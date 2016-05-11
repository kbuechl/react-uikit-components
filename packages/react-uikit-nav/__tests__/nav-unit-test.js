'use strict';
import test from 'tape';
import Nav from '../lib/nav';
import NavItem from '../lib/nav-item';
import React from 'react';
import {
  htmlToString,
  reactToDom,
  reactToString
} from './helpers/renderElement';


test('nav Component', nested => {
  nested.test('Renders nav component:',
    assert => {
      const actual = reactToString(
        <Nav kitid='nav' type='side' cols='1-4'>
          <NavItem kitid='n1' type='header' label='Header'/>
          <NavItem kitid='n2' label='Active' href='#' active />
          <NavItem kitid='n3' label='Item' href='#' />
          <NavItem kitid='n4' label='Item' href='#' subtitle='Subtitle'/>
          <NavItem kitid='n5' label='Item' href='#' />
          <NavItem kitid='n6' type='divider' />
          <NavItem kitid='n7' label='Item' href='#' />
          <NavItem kitid='n8' type='link' label='Item' href='#' />
        </Nav>
      );


      const expect = htmlToString(`
        <ul class="uk-nav  uk-nav-side" data-kitid="nav">
          <li type="header" label="Header" class="uk-nav-header" data-kitid="n1">Header</li>
          <li label="Active" href="#" class="uk-active" data-kitid="n2"><a href="#">Active</a></li>
          <li label="Item" href="#" data-kitid="n3"><a href="#">Item</a></li>
          <li label="Item" href="#" data-kitid="n4"><a href="#">Item<div>Subtitle</div></a></li>
          <li label="Item" href="#" data-kitid="n5"><a href="#">Item</a></li>
          <li type="divider" data-kitid="n6"></li>
          <li label="Item" href="#" data-kitid="n7"><a href="#">Item</a></li>
          <li type="link" label="Item" href="#" data-kitid="n8"><a href="#">Item</a></li>
        </ul>
      `);


      assert.equals(actual, expect,
        'Correctly renders nav component');

      assert.end();
    });


  nested.test('type=dropdown prop:',
    assert => {
      const nav = reactToDom( <Nav kitid='n1' type='dropdown' />).dom('ul');
      assert.ok(nav.hasClass('uk-nav-dropdown'), 'Adds dropdown class to nav element..');

      assert.end();
    });


  nested.test('parent prop:',
    assert => {

      const actual = reactToString(
        <Nav kitid='nav' parent type='side' cols='1-4'>
          <NavItem kitid='n1' label='Active' href='#' active />
          <NavItem kitid='n2' parent label='Item' href='#' >
            <Nav type='sub' kitid='sub'>
              <NavItem kitid='n2a' label='Sub item' href='#' />
              <NavItem kitid='n2b' label='Sub item' href='#' />
            </Nav>
          </NavItem>
          <NavItem kitid='n3' label='Item' href='#' />
        </Nav>
      );

      const expect = htmlToString(`
        <ul class="uk-nav  uk-nav-side uk-nav-parent-icon" data-kitid="nav">
          <li label="Active" href="#" class="uk-active" data-kitid="n1"><a href="#">Active</a></li>
          <li label="Item" href="#" class="uk-parent" data-kitid="n2">
            <a href="#">Item</a>
            <ul class="uk-nav  uk-nav-sub" data-kitid="sub">
              <li label="Sub item" href="#" data-kitid="n2a"><a href="#">Sub item</a></li>
              <li label="Sub item" href="#" data-kitid="n2b"><a href="#">Sub item</a></li>
            </ul>
          </li>
          <li label="Item" href="#" data-kitid="n3"><a href="#">Item</a></li>
        </ul>
      `);


      assert.equals(actual, expect,
        'Correctly renders parent prop for nav component.');

      assert.end();
    });

  nested.test('Renders nav items as collection:',
    assert => {
      const actual = reactToString(
        <Nav kitid='nav' type='side' items={[
          {
            label: 'Home',
            href: '#',
            active: true,
            kitid: 'n1'
          },
          {
            href: '#',
            kitid: 'n2',
            subtitle:'Subtitle'
          },
          {
            label: 'About',
            href: '#',
            kitid: 'n3'
          }
        ]} />
      );


      const expect = htmlToString(`
        <ul class="uk-nav  uk-nav-side" data-kitid="nav">
          <li label="Home" href="#" class="uk-active" data-kitid="n1"><a href="#">Home</a></li>
          <li href="#" data-kitid="n2"><a href="#"><div>Subtitle</div></a></li>
          <li label="About" href="#" data-kitid="n3"><a href="#">About</a></li>
        </ul>
      `);


      assert.equals(actual, expect,
        'Correctly renders nav items as collection.');

      assert.end();
    });


    nested.test('type=sub prop:',
      assert => {
        const actual = reactToString(
          <Nav kitid='nav' parent type='side' cols='1-4'>
          <NavItem kitid='p1' label='Active' href='#' active />
            <NavItem kitid='p22'  parent label='Item' href='#' >
              <Nav kitid='sub' type='sub'>
                <NavItem kitid='s1' label='Sub item' href='#' />
                <NavItem kitid='s2' label='Sub item' href='#' />
              </Nav>
            </NavItem>
            <NavItem kitid='p3' label='Item' href='#' />
          </Nav>
        );


        const expect = htmlToString(`
          <ul class="uk-nav  uk-nav-side uk-nav-parent-icon" data-kitid="nav">
            <li label="Active" href="#" class="uk-active" data-kitid="p1"><a href="#">Active</a></li>
            <li label="Item" href="#" class="uk-parent" data-kitid="p22">
              <a href="#">Item</a>
              <ul class="uk-nav  uk-nav-sub" data-kitid="sub">
                <li label="Sub item" href="#" data-kitid="s1"><a href="#">Sub item</a></li>
                <li label="Sub item" href="#" data-kitid="s2"><a href="#">Sub item</a></li>
              </ul>
            </li>
            <li label="Item" href="#" data-kitid="p3"><a href="#">Item</a></li>
          </ul>
        `);


        assert.equals(actual, expect,
          'Correctly renders nav component');

        assert.end();
      });

});
