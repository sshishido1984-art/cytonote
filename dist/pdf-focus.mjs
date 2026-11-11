import {locations2025} from './pdf-locations.mjs';
export function locationFor(q){return q.year===2025?locations2025[q.number]:null;}
export function pdfLink(q,url,mode='page'){
 const loc=locationFor(q);
 return `${url}#page=${q.page}${mode==='focus'&&loc?`&zoom=150,0,${Math.round(loc.top)}`:'&view=Fit'}&pagemode=none`;
}
export function locationGuide(q){
 const p=locationFor(q);if(!p)return '';
 const rows=Object.entries(locations2025).filter(([,v])=>v.page===p.page);
 return `<div class="pdf-location-guide"><div class="page-map" aria-hidden="true">${rows.map(([n,v])=>`<div class="map-band ${Number(n)===q.number?'target':''}" style="top:${v.top/v.height*100}%;height:${(v.bottom-v.top)/v.height*100}%">${n}</div>`).join('')}</div><div><span class="tag">今回の問題 ${q.number}</span><p><strong>PDF ${p.page}ページ・上から${p.ordinal}問目</strong><br>このページの${p.count}問中、色枠の位置が目印です。</p><small>左は位置案内図です。原本の画像ではありません。</small></div></div>`;
}
