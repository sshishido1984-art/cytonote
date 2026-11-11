import test from 'node:test';
import assert from 'node:assert/strict';
import {hasQuestionText,questionTextHtml,choiceLabel} from '../dist/question-text.mjs';
const q={prompt:'練習用の設問です。\n1つ選んでください。',options:['選択肢一','選択肢二','選択肢三','選択肢四','選択肢五'],format:'single'};
test('inline text requires complete choices; legacy questions retain PDF fallback',()=>{
 assert.equal(hasQuestionText(q),true);
 for(const partial of [{},{...q,prompt:''},{...q,options:['一']},{...q,format:'combination'}])assert.equal(hasQuestionText(partial),false);
 assert.equal(choiceLabel(q,3),'選択肢三');
 assert.equal(choiceLabel({format:'combination'},4),'C・D');
});
test('combination statements and prompts are escaped, with line breaks preserved',()=>{
 const full={...q,format:'combination',prompt:'<script>alert(1)</script>\n次の行',statements:['<img src=x>','Bの文','Cの文','Dの文','Eの文']};
 assert.equal(hasQuestionText(full),true);
 const html=questionTextHtml(full);
 assert.ok(html.includes('&lt;script&gt;'));assert.ok(html.includes('\n次の行'));assert.ok(html.includes('&lt;img src=x&gt;'));assert.ok(!html.includes('<script>'));
 assert.equal((html.match(/<li>/g)||[]).length,5);
});
