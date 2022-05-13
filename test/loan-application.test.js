import { html, fixture, expect } from '@open-wc/testing';
import { isTemplatePartActive } from 'lit-html';
import Sinon from 'sinon';
import {stub} from 'sinon';

import '../loan-application.js';
import { LoanApplication } from '../src/LoanApplication.js';

describe('LoanApplication', () => {
  // Write test cases inside this block
  it('checks for increment details', async()=>{
    const el=await fixture(html`<loan-application></loan-application>`);
    const mystub=await Sinon.spy(el,'_increment').returns(true);
    expect(mystub.calledOnce).to.be.true;
  });

  });


  
