import test from 'node:test';
import assert from 'node:assert/strict';
import {locations2025} from '../dist/pdf-locations.mjs';
import {pdfLink,locationGuide} from '../dist/pdf-focus.mjs';
import {referenceFor} from '../question-reference.mjs';
test('every original question has a bounded location on its correct physical page',()=>{
 assert.equal(Object.keys(locations2025).length,120);
 for(const [n,p] of Object.entries(locations2025)){assert.equal(p.page,referenceFor(Number(n)).page);assert.ok(p.top>=0&&p.bottom>p.top&&p.bottom<=p.height);assert.ok(p.ordinal>=1&&p.ordinal<=p.count);}
});
test('focus navigation includes the selected question position and retains page fallback',()=>{
 const q={year:2025,number:120,page:13};assert.match(pdfLink(q,'https://example.org/a.pdf','focus'),/#page=13&zoom=150,0,/);
 assert.match(pdfLink(q,'https://example.org/a.pdf'),/view=Fit/);assert.match(locationGuide(q),/上から1問目/);
 assert.equal((locationGuide({year:2025,number:3,page:1}).match(/map-band target/g)||[]).length,1);
 assert.equal(locationGuide({year:2024,number:3,page:1}),'');
});
