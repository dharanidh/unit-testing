import { html, fixture, expect } from '@open-wc/testing';
import { isTemplatePartActive } from 'lit-html';

import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block
  it('passes accessibility test for EN', async () => {
    const el = await fixture(html` <loan-header></loan-header> `);
    const val= el.shadowRoot.querySelector('button');
   // console.log(el.shadowRoot.querySelector('button'));
    expect(val).to.be.accessible();
  });

  
 it('can check for an exiting css class', async () => {
  const el = await fixture(`<div class="btn"></div>`);
  expect(el).to.have.class('btn');
  

});
it('passes accessibility test for NL', async () => {
  const el = await fixture(html` <loan-header></loan-header> `);
  const val= el.shadowRoot.querySelector('button');
 // console.log(el.shadowRoot.querySelector('button'));
  expect(val).to.be.accessible();
});
it('should pass convert language',async ()=>{
  const el = await fixture(html` <loan-header></loan-header> `);
  const val= await el.shadowRoot.querySelector('p').innerText;
  //console.log(el.shadowRoot.querySelector('p').innerText);
  expect(val).to.equal('Apply Loan');
 });
 
  });
  
   
 
    
  

