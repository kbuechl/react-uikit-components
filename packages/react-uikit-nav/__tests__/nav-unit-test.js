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
          <NavItem kitid='n1' type='header' body='Header'/>
          <NavItem kitid='n2' body='Active' href='#' active />
          <NavItem kitid='n3' body='Item' href='#' />
          <NavItem kitid='n4' body='Item' href='#' subtitle='Subtitle'/>
          <NavItem kitid='n5' body='Item' href='#' />
          <NavItem kitid='n6' type='divider' />
          <NavItem kitid='n7' body='Item' href='#' />
          <NavItem kitid='n8' type='link' body='Item' href='#' />
        </Nav>
      );


      const expect = htmlToString(`
        <ul class="uk-nav  uk-nav-side" data-kitid="nav"><li class="uk-nav-header" data-kitid="n1">Header</li><li class="uk-active" data-kitid="n2"><a href="#" data-kitid="n2">Active</a></li><li data-kitid="n3"><a href="#" data-kitid="n3">Item</a></li><li data-kitid="n4"><a href="#" data-kitid="n4">Item<div>Subtitle</div></a></li><li data-kitid="n5"><a href="#" data-kitid="n5">Item</a></li><li class="uk-nav-divider" data-kitid="n6"></li><li data-kitid="n7"><a href="#" data-kitid="n7">Item</a></li><li data-kitid="n8"><a href="#" data-kitid="n8">Item</a></li></ul>
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
          <NavItem kitid='n1' body='Active' href='#' active />
          <NavItem kitid='n2' parent body='Item' href='#' >
            <Nav type='sub' kitid='sub'>
              <NavItem kitid='n2a' body='Sub item' href='#' />
              <NavItem kitid='n2b' body='Sub item' href='#' />
            </Nav>
          </NavItem>
          <NavItem kitid='n3' body='Item' href='#' />
        </Nav>
      );

      const expect = htmlToString(`
        <ul class="uk-nav  uk-nav-side uk-nav-parent-icon" data-kitid="nav"><li class="uk-active" data-kitid="n1"><a href="#" data-kitid="n1">Active</a></li><li class="uk-parent" data-kitid="n2"><a href="#" data-kitid="n2">Item</a><ul class="uk-nav  uk-nav-sub" data-kitid="sub"><li data-kitid="n2a"><a href="#" data-kitid="n2a">Sub item</a></li><li data-kitid="n2b"><a href="#" data-kitid="n2b">Sub item</a></li></ul></li><li data-kitid="n3"><a href="#" data-kitid="n3">Item</a></li></ul>
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
            body: 'Home',
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
            body: 'About',
            href: '#',
            kitid: 'n3'
          }
        ]} />
      );


      const expect = htmlToString(`
        <ul class="uk-nav  uk-nav-side" data-kitid="nav"><li class="uk-active" data-kitid="n1"><a href="#" data-kitid="n1">Home</a></li><li data-kitid="n2"><a href="#" data-kitid="n2"><div>Subtitle</div></a></li><li data-kitid="n3"><a href="#" data-kitid="n3">About</a></li></ul>
      `);


      assert.equals(actual, expect,
        'Correctly renders nav items as collection.');

      assert.end();
    });


    nested.test('type=sub prop:',
      assert => {
        const actual = reactToString(
          <Nav kitid='nav' parent type='side' cols='1-4'>
          <NavItem kitid='p1' body='Active' href='#' active />
            <NavItem kitid='p22'  parent body='Item' href='#' >
              <Nav kitid='sub' type='sub'>
                <NavItem kitid='s1' body='Sub item' href='#' />
                <NavItem kitid='s2' body='Sub item' href='#' />
              </Nav>
            </NavItem>
            <NavItem kitid='p3' body='Item' href='#' />
          </Nav>
        );


        const expect = htmlToString(`
          <ul class="uk-nav  uk-nav-side uk-nav-parent-icon" data-kitid="nav"><li class="uk-active" data-kitid="p1"><a href="#" data-kitid="p1">Active</a></li><li class="uk-parent" data-kitid="p22"><a href="#" data-kitid="p22">Item</a><ul class="uk-nav  uk-nav-sub" data-kitid="sub"><li data-kitid="s1"><a href="#" data-kitid="s1">Sub item</a></li><li data-kitid="s2"><a href="#" data-kitid="s2">Sub item</a></li></ul></li><li data-kitid="p3"><a href="#" data-kitid="p3">Item</a></li></ul>
        `);


        assert.equals(actual, expect,
          'Correctly renders nav component');

        assert.end();
      });

});
