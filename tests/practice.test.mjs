import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {hasQuestionText} from '../dist/question-text.mjs';
import {chooseQuestions,freshState,normalizeState,recordAnswer} from '../dist/core.mjs';
const bank=JSON.parse(readFileSync(new URL('../dist/questions.json',import.meta.url))).questions;
test('practice questions have separate IDs, inline text and complete explanations without exam metadata',()=>{
 const practice=bank.filter(q=>q.kind==='practice');assert.ok(practice.length>=5);
 for(const q of practice){assert.match(q.id,/^practice-\d+$/);assert.ok(hasQuestionText(q));assert.equal(q.year,undefined);assert.equal(q.page,undefined);assert.equal(q.round,undefined);assert.equal(q.optionNotes.length,5);assert.equal(new Set(q.options).size,5);}
});
test('kind filters partition practice and past questions',()=>{
 const s=freshState(),practice=chooseQuestions(bank,s,{kind:'practice'}),past=chooseQuestions(bank,s,{kind:'past'});
 assert.equal(past.length,76);assert.equal(practice.length+past.length,bank.length);assert.ok(practice.every(q=>q.kind==='practice'));assert.ok(past.every(q=>q.kind!=='practice'));
});
test('same question number in different banks preserves separate histories and notes',()=>{
 const p=bank.find(q=>q.id==='practice-0001'),q=bank.find(q=>q.id==='2025-58-1');const s=freshState();
 for(const item of [p,q]){s.session={id:item.id,queue:[item.id],index:0,selected:[],confidence:'sure',submitted:false,startedAt:'2026-11-22T12:00:00Z',label:'test'};recordAnswer(s,item,item.answer,'sure');s.notes[item.id]=item.id;}
 const restored=normalizeState(JSON.parse(JSON.stringify(s)),bank);assert.equal(restored.attempts.length,2);assert.equal(restored.notes[p.id],p.id);assert.equal(restored.notes[q.id],q.id);
});
