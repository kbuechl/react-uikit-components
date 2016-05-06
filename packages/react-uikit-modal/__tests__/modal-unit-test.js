'use strict';
import test from 'tape';
import Modal from '../lib/modal';
import React from 'react';
import {
  htmlToString,
  reactToString
} from './helpers/renderElement';


test('Modal Component', nested => {
  nested.test('Renders modal component:',
    assert => {
      const actual = reactToString(<Modal
          kitid='m1'
          show={false}
          trigger={{
            body: 'Open',
            animate: {
              'in': (modal, dialog) => this.animateIn(modal, dialog),
              out: (modal, dialog) => this.animateOut(modal, dialog)
            }
          }}
        >
          <h2>Headline</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </Modal>);

      const expect = htmlToString(`
        <div>
          <button class="uk-button  uk-width-1-1" data-kitid="trigger-m1" type="button">Open </button>
          <div class="uk-modal" data-kitid="modal-m1">
            <div class="uk-modal-dialog" data-kitid="dialog-m1">
              <h2>Headline</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      `);


      assert.equals(actual, expect,
        'Correctly renders modal element.');

      assert.end();
    });


  nested.test('close prop:',
    assert => {
      const actual = reactToString(<Modal
          kitid='m1'
          close
          show={false}
          trigger={{
            body: 'Open',
            animate: {
              'in': (modal, dialog) => this.animateIn(modal, dialog),
              out: (modal, dialog) => this.animateOut(modal, dialog)
            }
          }}
        >
          <h2>Headline</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </Modal>);

      const expect = htmlToString(`
        <div>
          <button class="uk-button  uk-width-1-1" data-kitid="trigger-m1" type="button">Open </button>
          <div class="uk-modal" data-kitid="modal-m1">
            <div class="uk-modal-dialog" data-kitid="dialog-m1">
              <a href="#" class="uk-modal-close uk-close" data-kitid="m1"></a>
              <h2>Headline</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      `);


      assert.equals(actual, expect,
        'Adds header close prop to modal element.');

      assert.end();
    });


  nested.test('header prop:',
    assert => {
      const actual = reactToString(<Modal
        kitid='m1'
        header='Modal with header and footer'
        trigger={{
          body: 'Open',
          animate: {
            'in': (modal, dialog) => this.animateIn(modal, dialog),
            out: (modal, dialog) => this.animateOut(modal, dialog)
          }
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </Modal>);

      const expect = htmlToString(`
        <div>
          <button class="uk-button  uk-width-1-1" data-kitid="trigger-m1" type="button">Open </button>
          <div class="uk-modal" data-kitid="modal-m1">
            <div class="uk-modal-dialog" data-kitid="dialog-m1">
              <div class="uk-modal-header">
                <h2>Modal with header and footer</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      `);


      assert.equals(actual, expect,
        'Adds header prop to modal element.');

      assert.end();
    });


  nested.test('footer prop:',
    assert => {
      const actual = reactToString(<Modal
        kitid='m1'
        footer={<button>Save</button>}
        trigger={{
          body: 'Open',
          animate: {
            'in': (modal, dialog) => this.animateIn(modal, dialog),
            out: (modal, dialog) => this.animateOut(modal, dialog)
          }
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </Modal>);

      const expect = htmlToString(`
        <div>
          <button class="uk-button  uk-width-1-1" data-kitid="trigger-m1" type="button">Open </button>
          <div class="uk-modal" data-kitid="modal-m1">
            <div class="uk-modal-dialog" data-kitid="dialog-m1">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="uk-modal-footer">
                <button>Save</button>
              </div>
            </div>
          </div>
        </div>
      `);


      assert.equals(actual, expect,
        'Adds footer prop to modal element.');

      assert.end();
    });


  nested.test('caption prop:',
    assert => {
      const actual = reactToString(<Modal
        kitid='m1'
        caption='This is a caption'
        trigger={{
          body: 'Open',
          animate: {
            'in': (modal, dialog) => this.animateIn(modal, dialog),
            out: (modal, dialog) => this.animateOut(modal, dialog)
          }
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </Modal>);

      const expect = htmlToString(`
        <div>
          <button class="uk-button  uk-width-1-1" data-kitid="trigger-m1" type="button">Open </button>
          <div class="uk-modal" data-kitid="modal-m1"><div class="uk-modal-dialog" data-kitid="dialog-m1">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div class="uk-modal-caption">This is a caption</div>
          </div>
          </div>
        </div>
      `);


      assert.equals(actual, expect,
        'Adds caption prop to modal element.');

      assert.end();
    });


  nested.test('lightbox prop:',
    assert => {
      const actual = reactToString(<Modal
        kitid='m1'
        lightbox
        trigger={{
          body: 'Open',
          animate: {
            'in': (modal, dialog) => this.animateIn(modal, dialog),
            out: (modal, dialog) => this.animateOut(modal, dialog)
          }
        }}
      >
        <p>
          Lorem ipsum dolor sit amet
        </p>
      </Modal>);

      const expect = htmlToString(`
        <div>
          <button class="uk-button  uk-width-1-1" data-kitid="trigger-m1" type="button">Open </button>
          <div class="uk-modal" data-kitid="modal-m1">
            <div class="uk-modal-dialog uk-modal-dialog-lightbox" data-kitid="dialog-m1">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      `);


      assert.equals(actual, expect,
        'Adds lightbox prop to modal element.');

      assert.end();
    });


  nested.test('blank prop:',
    assert => {
      const actual = reactToString(<Modal
        kitid='m1'
        blank
        trigger={{
          body: 'Open',
          animate: {
            'in': (modal, dialog) => this.animateIn(modal, dialog),
            out: (modal, dialog) => this.animateOut(modal, dialog)
          }
        }}
      >
        <p>
          Lorem ipsum dolor sit amet
        </p>
      </Modal>);

      const expect = htmlToString(`
        <div>
          <button class="uk-button  uk-width-1-1" data-kitid="trigger-m1" type="button">Open </button>
          <div class="uk-modal" data-kitid="modal-m1">
            <div class="uk-modal-dialog uk-modal-dialog-blank uk-height-viewport" data-kitid="dialog-m1">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      `);


      assert.equals(actual, expect,
        'Adds blank prop to modal element.');

      assert.end();
    });


  nested.test('type=alert prop:',
    assert => {
      const actual = reactToString(<Modal
        kitid='m1'
        ok={{context: 'primary'}}
        type='alert'
        trigger={{
          body: 'Open',
          animate: {
            'in': (modal, dialog) => this.animateIn(modal, dialog),
            out: (modal, dialog) => this.animateOut(modal, dialog)
          }
        }}
      >
        <p>
          Lorem ipsum dolor sit amet
        </p>
      </Modal>);

      const expect = htmlToString(`
        <div>
          <button class="uk-button  uk-width-1-1" data-kitid="trigger-m1" type="button">Open </button>
          <div type="alert" class="uk-modal" data-kitid="modal-m1">
            <div class="uk-modal-dialog" data-kitid="dialog-m1">
              <p>Lorem ipsum dolor sit amet</p>
              <div class="uk-modal-footer uk-text-right">
                <button data-kitid="ok-m1" class="uk-button   uk-button-primary" type="button">ok</button>
              </div>
            </div>
          </div>
        </div>
      `);


      assert.equals(actual, expect,
        'Adds ok type alert to modal element.');

      assert.end();
    });


  nested.test('type=prompt prop:',
    assert => {
      const actual = reactToString(<Modal
        kitid='m1'
        type='prompt'
        ok={{
          context: 'primary'
        }}
        trigger={{
          body: 'Open',
          animate: {
            'in': (modal, dialog) => this.animateIn(modal, dialog),
            out : (modal, dialog) => this.animateOut(modal, dialog)
          }
        }}
      >
        <p>
          This is an prompt modal
        </p>
      </Modal>);

      const expect = htmlToString(`
        <div>
          <button class="uk-button  uk-width-1-1" data-kitid="trigger-m1" type="button">Open </button>
          <div type="prompt" class="uk-modal" data-kitid="modal-m1">
            <div class="uk-modal-dialog uk-form" data-kitid="dialog-m1">
              <p>This is an prompt modal</p><input type="text" data-kitid="input-m1" class="uk-width-1-1">
              <div class="uk-modal-footer uk-text-right">
                <div>
                  <button data-kitid="ok-m1" class="uk-button uk-margin-right" type="button">cancel</button>
                  <button data-kitid="ok-m1" class="uk-button   uk-button-primary" type="button">ok</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `);


      assert.equals(actual, expect,
        'Adds ok type prompt to modal element.');

      assert.end();
    });


    nested.test('type=confirm show:false prop:',
      assert => {
        const actual = reactToString(<Modal
          kitid='m1'
          show={false}
          type='confirm'
          confirm={{
            context: 'danger',
            show: false,
            dialog: <div className='confirmDialog'>This is an comfirm modal</div>,
            body: 'Confirm',
            onClick: (e) => this.handleConfirmClick(e),
            animate: {
              'in': (e) => this.comfirmAnimateIn(e),
              out: (e) => this.comfirmAnimateOut(e)
            }
          }}
          ok={{
            context: 'primary',
            onClick: (e) => this.handleConfirmOkClick (e)
          }}

          trigger={{
            body: 'Open',
            animate: {
              'in': (modal, dialog) => this.animateIn(modal, dialog),
              out : (modal, dialog) => this.animateOut(modal, dialog)
            }
          }}
        >
          <p>
            Are you sure?
          </p>
        </Modal>);

        const expect = htmlToString(`
          <div>
            <button class="uk-button  uk-width-1-1" data-kitid="trigger-m1" type="button">Open </button>
            <div type="confirm" class="uk-modal" data-kitid="modal-m1">
              <div class="uk-modal-dialog uk-form" data-kitid="dialog-m1">
                <p>Are you sure?</p>
                <div class="uk-modal-footer uk-text-right">
                  <div>
                    <button data-kitid="ok-m1" class="uk-button uk-margin-right" type="button">cancel</button>
                    <button data-kitid="ok-m1" class="uk-button   uk-button-primary" type="button">ok</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `);


        assert.equals(actual, expect,
          'Adds ok type confim show:fasle to modal element.');

        assert.end();
      });


    nested.test('type=confirm show:true prop:',
      assert => {
        const actual = reactToString(<Modal
          kitid='m1'
          show={true}
          type='confirm'
          confirm={{
            context: 'danger',
            show: true,
            dialog: <p>This is an comfirm modal</p>,
            body: 'Confirm',
            onClick: (e) => this.handleConfirmClick(e),
            animate: {
              'in': (e) => this.comfirmAnimateIn(e),
              out: (e) => this.comfirmAnimateOut(e)
            }
          }}
          ok={{
            context: 'primary',
            onClick: (e) => this.handleConfirmOkClick (e)
          }}

          trigger={{
            body: 'Open',
            animate: {
              'in': (modal, dialog) => this.animateIn(modal, dialog),
              out : (modal, dialog) => this.animateOut(modal, dialog)
            }
          }}
        >
          <p>
            Are you sure?
          </p>
        </Modal>);

        const expect = htmlToString(`
          <div>
            <button class="uk-button  uk-width-1-1" data-kitid="trigger-m1" type="button">Open </button>
            <div type="confirm" class="uk-modal" data-kitid="modal-m1">
              <div class="uk-modal-dialog uk-form" data-kitid="dialog-m1">
                <p>This is an comfirm modal</p>
                <div class="uk-modal-footer uk-text-right">
                  <div>
                    <button data-kitid="ok-m1" class="uk-button uk-margin-right" type="button">cancel</button>
                    <button data-kitid="confirm-m1" class="uk-button   uk-button-danger" type="button">Confirm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `);


        assert.equals(actual, expect,
          'Adds ok type confim show:fasle to modal element.');

        assert.end();
      });


      nested.test('type=large prop:',
        assert => {
          const actual = reactToString(<Modal
            kitid='m1'
            large
            trigger={{
              body: 'Open',
              animate: {
                'in': (modal, dialog) => this.animateIn(modal, dialog),
                out : (modal, dialog) => this.animateOut(modal, dialog)
              }
            }}
          >
            <p>
              This is an prompt modal
            </p>
          </Modal>);

          const expect = htmlToString(`
            <div><button class="uk-button  uk-width-1-1" data-kitid="trigger-m1" type="button">Open </button>
              <div class="uk-modal" data-kitid="modal-m1">
                <div class="uk-modal-dialog uk-modal-dialog-large" data-kitid="dialog-m1">
                  <p>This is an prompt modal</p>
                </div>
              </div>
            </div>
          `);


          assert.equals(actual, expect,
            'Adds ok type large to modal element.');

          assert.end();
        });

});
