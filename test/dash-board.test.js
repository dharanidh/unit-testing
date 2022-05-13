import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/dashboard/Dashboard.js';
describe('dashboard',()=>{

it('checks dashboard',async ()=>{
    const el=await fixture(html `<dash-board></dash-board>`);
    const val=Sinon.spy(el,'getOverview');
    el.firstUpdated();
    expect(val.calledOnce).to.be.true;
   });
});
