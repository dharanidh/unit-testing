import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/dashboard/Dashboard.js';
describe('dashboard menu',()=>{


it('checks dashboard menu',async ()=>{
    const el=await fixture(html `<dashboard-menu></dashboard-menu>`);
    const val=Sinon.spy(el,'setTypeInLs');
    el.firstUpdated();
    expect(val.calledOnce).to.be.true;
   });
});
