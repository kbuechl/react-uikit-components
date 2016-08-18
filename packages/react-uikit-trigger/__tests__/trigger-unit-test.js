'use strict';
import test from 'tape';
import Trigger from '../lib/trigger';
import React from 'react';
import renderElement from './helpers/renderElement';


test('trigger Component', nested => {
  nested.test('Trigger type: button',
    assert => {
      const trigger = renderElement(<Trigger kitid="but" type='button'>Button trigger</Trigger>).dom();

      const actualText = trigger.html();
      const expectedText = '<button data-kitid="but" class="uk-button  uk-width-1-1" type="button">Button trigger </button>';
      assert.equals(actualText, expectedText,
        'Correctly renders trigger element as button');

      assert.end();
    });


  nested.test('Trigger type: link',
    assert => {
      const trigger = renderElement(<Trigger kitid="link" type='link'>Link trigger</Trigger>).dom();

      const actualText = trigger.html();
      const expectedText = '<a data-kitid="link" class="uk-button  uk-width-1-1" href="#" role="button">Link trigger </a>';
      assert.equals(actualText, expectedText,
        'Correctly renders trigger element as link');

      assert.end();
    });


  nested.test('Trigger type: span',
    assert => {
      const trigger = renderElement(<Trigger kitid="span" type='span'>Span trigger</Trigger>).dom();

      const actualText = trigger.html();
      const expectedText = '<span data-kitid="span">Span trigger </span>';
      assert.equals(actualText, expectedText,
        'Correctly renders trigger element as span');

      assert.end();
    });


    nested.test('Trigger type: div',
      assert => {
        const trigger = renderElement(<Trigger kitid="div" type='div'>Span trigger</Trigger>).dom();

        const actualText = trigger.html();
        const expectedText = '<div data-kitid="div">Span trigger </div>';
        assert.equals(actualText, expectedText,
          'Correctly renders trigger element as div');

        assert.end();
      });

});
