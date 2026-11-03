const domains=['総論','技術','体腔液・尿・その他','呼吸器','消化器','婦人科'];
// PDFの物理ページ番号。冊子の印刷ページ番号とは1ページずれる。
const pageEnds=[10,20,30,40,50,60,69,79,89,99,109,119,120];
export function referenceFor(number){
 if(!Number.isInteger(number)||number<1||number>120)throw new RangeError('2025年度の問題番号は1〜120です');
 return {domain:domains[Math.floor((number-1)/20)],page:pageEnds.findIndex(end=>number<=end)+1};
}
