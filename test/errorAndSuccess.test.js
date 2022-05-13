import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';
import Sinon from 'sinon';
import { isTemplatePartActive } from 'lit-html';

describe('Success screen ', () => {
  // Write test cases inside this block
  it('should display error msg',()=>{

  
    const el=fixture(html`<loan-success></loan-success>`);
    const val=Sinon.spy(el,'_toHome');
    
    expect(val.called).to.be.true;
    });

});

describe('error screen', () => {
  // Write test cases inside this block
  it('should display error msg',()=>{

  
  const el=fixture(html`<loan-error></loan-error>`);
  const val=Sinon.spy(el,'_toHome');
  
  expect(val.called).to.be.true;
  });
});
