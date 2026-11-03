import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {referenceFor} from '../question-reference.mjs';
import {freshState,normalizeState,recordAnswer,chooseQuestions} from '../dist/core.mjs';
const bank=JSON.parse(readFileSync(new URL('../dist/questions.json',import.meta.url))).questions;
test('PDF references follow the actual irregular page boundaries',()=>{
 for(const [n,page] of [[1,1],[10,1],[11,2],[60,6],[61,7],[69,7],[70,8],[79,8],[80,9],[89,9],[90,10],[99,10],[100,11],[109,11],[110,12],[119,12],[120,13]])assert.equal(referenceFor(n).page,page,`Q${n}`);
 assert.equal(referenceFor(80).domain,'呼吸器');assert.equal(referenceFor(81).domain,'消化器');assert.equal(referenceFor(100).domain,'消化器');assert.equal(referenceFor(101).domain,'婦人科');
 assert.throws(()=>referenceFor(0));assert.throws(()=>referenceFor(121));
 for(const q of bank)assert.deepEqual({page:q.page,domain:q.domain},referenceFor(q.number));
});
test('the first expansion covers all six domains with 24 new explained questions',()=>{
 assert.equal(bank.length,44);assert.equal(new Set(bank.map(q=>q.domain)).size,6);
 assert.deepEqual(bank.filter(q=>q.checkedAt==='2026-11-04').map(q=>q.number),[10,25,33,43,47,51,52,61,64,66,74,75,78,89,91,94,103,104,105,107,108,110,112,117]);
});
test('a saved record from the original bank survives expansion and new questions remain unanswered',()=>{
 const old=bank.filter(q=>q.checkedAt==='2026-11-03');assert.equal(old.length,20);
 const s=freshState(),q=old[0];s.session={id:'before-expansion',queue:[q.id],index:0,selected:[],confidence:'sure',submitted:false,startedAt:'2026-11-03T00:00:00Z',label:'旧問題'};
 recordAnswer(s,q,q.answer,'sure');s.bookmarks=[q.id];s.notes[q.id]='保存済みメモ';
 const loaded=normalizeState(JSON.parse(JSON.stringify(s)),bank);
 assert.equal(loaded.attempts.length,1);assert.equal(loaded.attempts[0].correct,true);assert.equal(loaded.notes[q.id],'保存済みメモ');assert.deepEqual(loaded.bookmarks,[q.id]);
 assert.equal(chooseQuestions(bank,loaded,{filter:'unanswered'}).length,43);
});
