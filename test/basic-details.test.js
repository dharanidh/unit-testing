import { formatDate } from '@lion/localize';
import { html, fixture, expect } from '@open-wc/testing';
import { isTemplatePartActive } from 'lit-html';
import { stub } from 'sinon';
import Sinon from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
    it('checks for accessible',()=>{
        const el=fixture(html`<basic-details></basic-details>`);
        const btn=el.shadowRoot.querySelectorAll('lion-button')[0];
        btn.click();
        expect(el).to.be.true;
    })
    it('checks for spy function',()=>{
        const el=fixture(html`<basic-details></basic-details>`);
        const myspy=Sinon.spy(el,'_toDashboard');
        form.click();
        expect(myspy.calledOnce).to.be.true;
          });
    
  
  
 
  
});
