const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function hasQuestionText(q){
 return typeof q.prompt==='string'&&q.prompt.trim().length>0&&Array.isArray(q.options)&&q.options.length===5&&q.options.every(v=>typeof v==='string'&&v.trim().length>0)&&(q.format!=='combination'||(Array.isArray(q.statements)&&q.statements.length===5&&q.statements.every(v=>typeof v==='string'&&v.trim().length>0)));
}
export function questionTextHtml(q){
 if(!hasQuestionText(q))return '';
 return `<section class="question-text" aria-label="問題文"><p class="question-prompt">${esc(q.prompt)}</p>${q.format==='combination'?`<ol class="question-statements">${q.statements.map((v,i)=>`<li><strong>${'ABCDE'[i]}.</strong><span>${esc(v)}</span></li>`).join('')}</ol>`:''}</section>`;
}
export function choiceLabel(q,n){return hasQuestionText(q)?q.options[n-1]:(q.format==='combination'?['A・B','A・E','B・C','C・D','D・E'][n-1]:'');}
