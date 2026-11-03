export const STORAGE_KEY = 'cytonote.study.v1';
export const SCHEMA = 1;
export const freshState = () => ({schema:SCHEMA, attempts:[], bookmarks:[], notes:{}, session:null});
export function isCorrect(selected, answer) {
  return Array.isArray(selected) && Array.isArray(answer) && selected.length === answer.length && new Set(selected).size === selected.length && [...selected].sort().every((n,i)=>n===[...answer].sort()[i]);
}
export function validSelection(selected, q) { return Array.isArray(selected) && selected.length===q.selectCount && new Set(selected).size===selected.length && selected.every(n=>Number.isInteger(n)&&n>=1&&n<=5); }
export function normalizeState(raw, questions) {
  if (!raw || raw.schema!==SCHEMA) throw new Error('対応していないバックアップ形式です。');
  const byId = new Map(questions.map(q=>[q.id,q]));
  const state=freshState();
  state.attempts = (Array.isArray(raw.attempts)?raw.attempts:[]).filter(a=>a && byId.has(a.id) && validSelection(a.selected,byId.get(a.id)) && Number.isFinite(Date.parse(a.at)) && typeof a.sessionId==='string').slice(-50000).map(a=>({id:a.id,selected:[...a.selected],correct:isCorrect(a.selected,byId.get(a.id).answer),confidence:a.confidence==='unsure'?'unsure':'sure',at:new Date(a.at).toISOString(),sessionId:a.sessionId.slice(0,100),revision:byId.get(a.id).revision??1}));
  state.bookmarks=[...new Set((Array.isArray(raw.bookmarks)?raw.bookmarks:[]).filter(id=>byId.has(id)))];
  for (const q of questions) if(typeof raw.notes?.[q.id]==='string') state.notes[q.id]=raw.notes[q.id].slice(0,4000);
  const s=raw.session;
  if(s && typeof s.id==='string' && Array.isArray(s.queue) && s.queue.length && s.queue.length<=1000 && s.queue.every(id=>byId.has(id)) && new Set(s.queue).size===s.queue.length && Number.isInteger(s.index) && s.index>=0 && s.index<s.queue.length && Number.isFinite(Date.parse(s.startedAt))) {
    const q=byId.get(s.queue[s.index]);
    const prior=state.attempts.findLast(a=>a.id===q.id && a.sessionId===s.id);
    state.session={id:s.id.slice(0,100),queue:[...s.queue],index:s.index,startedAt:s.startedAt,label:String(s.label??'演習').slice(0,100),selected:prior?[...prior.selected]:(Array.isArray(s.selected)?[...new Set(s.selected.filter(n=>Number.isInteger(n)&&n>=1&&n<=5))].slice(0,q.selectCount):[]),confidence:prior?.confidence??(s.confidence==='unsure'?'unsure':'sure'),submitted:!!prior};
  }
  return state;
}
export function latestByQuestion(state) { const map=new Map(); for(const a of state.attempts)map.set(a.id,a); return map; }
export function firstByQuestion(state) { const map=new Map(); for(const a of state.attempts)if(!map.has(a.id))map.set(a.id,a); return map; }
export function reviewIds(state) { return [...latestByQuestion(state).values()].filter(a=>!a.correct||a.confidence==='unsure').map(a=>a.id); }
export function stats(state,questions) {
 const ids=new Set(questions.map(q=>q.id));
 const attempts=state.attempts.filter(a=>ids.has(a.id));
 const first=[...firstByQuestion({...state,attempts}).values()];
 return {attempts:attempts.length,answered:first.length,correct:first.filter(a=>a.correct).length,rate:first.length?Math.round(100*first.filter(a=>a.correct).length/first.length):null,review:reviewIds({...state,attempts}).length};
}
export function chooseQuestions(questions,state,{domain='all',filter='all',search='',limit=0,shuffle=false}={}) {
 const latest=latestByQuestion(state);const review=new Set(reviewIds(state));const term=search.trim().toLowerCase();
 let result=questions.filter(q=>(domain==='all'||q.domain===domain) && (!term||`${q.title} ${q.topic} ${q.number} ${q.domain}`.toLowerCase().includes(term)) && (filter==='all'||filter==='unanswered'&&!latest.has(q.id)||filter==='wrong'&&latest.has(q.id)&&!latest.get(q.id).correct||filter==='unsure'&&latest.get(q.id)?.confidence==='unsure'||filter==='saved'&&state.bookmarks.includes(q.id)||filter==='review'&&review.has(q.id)));
 if(shuffle){result=[...result];for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}}
 return limit?result.slice(0,limit):result;
}
export function recordAnswer(state,q,selected,confidence,at=new Date().toISOString()) {
 if(!state.session || state.session.queue[state.session.index]!==q.id) throw new Error('演習の状態を確認してください。');
 if(state.session.submitted) return state.attempts.findLast(a=>a.sessionId===state.session.id && a.id===q.id);
 if(!validSelection(selected,q)) throw new Error(`${q.selectCount}つ選んでください。`);
 const a={id:q.id,selected:[...selected],correct:isCorrect(selected,q.answer),confidence:confidence==='unsure'?'unsure':'sure',at,sessionId:state.session.id,revision:q.revision??1};
 state.attempts.push(a);state.session.selected=[...selected];state.session.confidence=a.confidence;state.session.submitted=true;return a;
}
