
import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', () => {
  // Write test cases inside this block
  it('checks for button click for navigation-back ',async()=>{
    const el=await fixture(html`<loanemi-details></loanemi-details>`);
    const myspy=Sinon.spy(el,'_toCustomer');
    btn[1].click();
    expect(myspy).to.be.true();
  });
  it('should display interest rate',async ()=>{
    const el = await fixture(html`<loanemi-details></loanemi-details>`);
    const val1=el.shadowRoot.querySelectorAll('p');
    console.log(el.shadowRoot.querySelectorAll('p'));
    
    await expect(el).to.be.accessible();
  });
    // it('checks for method',async ()=>{
    //   const el= await fixture(html `<loanemi-details></loanemi-details>`);
    //   const fun=Sinon.spy(el,'_toBasicDetails')
    //   const val=el.shadowRoot.querySelector('lion-button')[0]
    //   val.click();
    //   expect(fun.called).to.be.true;
    //   });
    it('checks for customer detail button nav', ()=>{
      const el=fixture(html `<loanemi-details></loanemi-details>`);
      const myval=el.shadowRoot.querySelectorAll('lion-button');
      const myspy=Sinon.spy(el,'_toCustomer');
      myval[1].click();
      expect(myspy.calledOnce).to.be.true;
       
    });
    it('checks for basic detail button nav', ()=>{
      const el=fixture(html `<loanemi-details></loanemi-details>`);
      const val=el.shadowRoot.querySelectorAll('lion-button');
      const myspy=Sinon.spy(el,'_toCustomer');
      val[0].click();
      expect(myspy.calledOnce).to.be.true;
       
    });
    it('checks for methods',async ()=>{
      const el=await fixture(html `<loanemi-details></loanemi-details>`);
      const myspy=Sinon.spy(el,'super')
      el.constructor();
      expect(myspy.calledOnce).to.be.true;
      });
      it('checks available methods',async()=>{
        const el=await fixture(html`<loanemi-details></loanemi-details>`);
        const val=await Sinon.spy(el,'super');
        await el.constructor();
        await expect(val.calledOnce).to.be.true;
      });
  
    it('should navigate to basic details is working ',async()=>{
      const el = await fixture(html` <loanemi-details></loanemi-details>`);
     //await expect(el).to.be.accessible();
     await el.shadowRoot.querySelector('.cancelbtn').click();
    });
  
    
    it('should navigate to customer page is working ',async()=>{
      const el = await fixture(html` <loanemi-details></loanemi-details>`);
     await el.shadowRoot.querySelector('.continue-btn').click();
    });
});
