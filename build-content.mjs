import {writeFileSync} from 'node:fs';
import {addBatch} from './content-2026-11-04.mjs';
import {addSecondBatch} from './content-2026-11-04-b.mjs';
import {referenceFor} from './question-reference.mjs';
const source=(title,url,locator,kind='公式教材')=>({title,url,locator,kind});
const S={
 necrosis:source('University of Edinburgh · Necrosis','https://pathologia.ed.ac.uk/topic/necrosis/','Cell injuries / Cellular morphology / Morphological patterns'),
 necrosis2:source('Necrosis Pathology · NCBI Bookshelf','https://www.ncbi.nlm.nih.gov/books/NBK557627/','Pathophysiology / Histopathology','医学教材（二次資料）'),
 lung:source('Duke University · Respiratory Histopathology','https://histology.oit.duke.edu/DPT/Respiratory/Respiratory.html','Blood Supply'),
 liver:source('University of Leeds · Liver','https://histology.leeds.ac.uk/home/digestive/liver/','Functions of the Liver：二重の血液供給'),
 iarc:source('IARC Monographs Volume 110：化学物質の発がん性評価','https://www.iarc.who.int/news-events/iarc-monographs-volume-110-evaluation-of-five-chemicals/','2014年7月11日：1,2-dichloropropane の評価','公式評価'),
 deaths:source('がんの統計2025 資料編','https://ganjoho.jp/public/qa_links/report/statistics/pdf/cancer_statistics_2025_data_J.pdf','冊子80〜81ページ（PDF 6〜7ページ）：2023年死亡数・男女計','登録統計'),
 child:source('国立がん研究センター · 小児・AYA世代のがん罹患','https://ganjoho.jp/reg_stat/statistics/stat/child_aya.html','がん種の内訳：2016〜2018年の全国がん登録に基づく表','登録統計'),
 germ:source('NCI SEER Training · Derivation of Tissues','https://training.seer.cancer.gov/disease/categories/tissues.html','三胚葉からの組織分化'),
 virus:source('ICTV · Virus Properties（第9次報告）','https://ictv.global/report_9th/Introduction/VirusProperties','Herpesviridae / Caliciviridae / Coronaviridae / Flaviviridae / Orthomyxoviridae のゲノム','公式分類'),
 granulation:source('Ohio State University · Granulation Tissue','https://medicine.osu.edu/-/media/files/medicine/departments/otolaryngology/atlas-of-head-and-neck-pathology/g/granulationtissue2.pdf','Atlas of Head and Neck Pathology：構成細胞と瘢痕化'),
 nucleus:source('University of Leeds · Nucleus','https://histology.leeds.ac.uk/home/cell/nucleus/','核膜、核膜孔、ユークロマチンとヘテロクロマチン'),
 tb:source('CDC · Clinical Overview of Tuberculosis','https://www.cdc.gov/tb/hcp/clinical-overview/','Overview：結核の病原菌'),
 syphilis:source('CDC · Syphilis','https://www.cdc.gov/std/treatment-guidelines/syphilis.htm','病原体の記載','公式ガイドライン'),
 lgv:source('CDC · Lymphogranuloma Venereum','https://www.cdc.gov/std/treatment-guidelines/lgv.htm','病原体・診断','公式ガイドライン'),
 bartonella:source('CDC · Clinical Overview of Bartonellosis','https://www.cdc.gov/bartonella/hcp/clinical-overview/index.html','Bartonella henselae'),
 mmr:source('NCI · Genetics of Breast and Gynecologic Cancers (PDQ)','https://www.cancer.gov/types/breast/hp/breast-ovarian-genetics-pdq','Lynch Syndrome / BRCA1 and BRCA2','公式医学解説（二次資料）'),
 obesity:source('NCI · Obesity and Cancer','https://www.cancer.gov/about-cancer/causes-prevention/risk/obesity/obesity-fact-sheet','体脂肪量と大腸がんの関連','公式医学解説（二次資料）'),
 thyroid:source('NCI · Childhood Thyroid Cancer Treatment (PDQ)','https://www.cancer.gov/types/thyroid/hp/child-thyroid-treatment-pdq','Differentiated Thyroid Cancer / Risk Factors','公式医学解説（二次資料）'),
 births:source('NCI · Reproductive History and Cancer Risk','https://www.cancer.gov/about-cancer/causes-prevention/risk/hormones/reproductive-history-fact-sheet','妊娠・出産回数と乳がんリスク','公式医学解説（二次資料）'),
 intestine:source('University of Leeds · Small Intestine','https://histology.leeds.ac.uk/home/digestive/small_intestine/','Crypts of Lieberkuhn / Brunner’s glands'),
 resolution:source('Nikon MicroscopyU · Resolution','https://www.microscopyu.com/microscopy-basics/resolution','開口数・波長・分解能の関係','メーカー技術資料'),
 depth:source('Nikon MicroscopyU · Depth of Field and Depth of Focus','https://www.microscopyu.com/microscopy-basics/depth-of-field-and-depth-of-focus','Table 1 / 接眼レンズの役割','メーカー技術資料'),
 empty:source('Nikon MicroscopyU · Useful Magnification Range','https://www.microscopyu.com/microscopy-basics/useful-magnification-range','Empty magnification','メーカー技術資料'),
 wsi:source('University of Bern · Slide Scanning','https://www.itpa.vetsuisse.unibe.ch/services/slide_scanning/index_eng.html','WSIの定義と遠隔利用・教育への利点'),
 wsi2:source('UCL · Digital Pathology','https://www.ucl.ac.uk/brain-sciences/ion/research/clinical-divisions/division-neuropathology/ucl-iqpath/digital-pathology','WSI viewer：pan and zoom around the entire slide'),
 waste:source('環境省 · 感染性廃棄物の識別表示','https://www.env.go.jp/content/000044789.pdf','バイオハザードマークの色と容器','行政資料'),
 bio:source('CDC · Safe Work Practices in Diagnostic Laboratories','https://www.cdc.gov/mmwr/preview/mmwrhtml/su6101a1.htm','廃棄物の universal biohazard symbol / sharps precautions','公式ガイドライン'),
 gbm:source('University of Pittsburgh · Neuropathology Case 584','https://path.upmc.edu/divisions/neuropath/bpath/cases/case174/dx.html','Discussion：多形性、壊死、偽柵状配列','大学症例教材'),
 neuro:source('LSU · Nervous System: Illustrated Surgical Pathology','https://www.medschool.lsuhsc.edu/neurosurgery/docs/Nervous-System-Cambridge-Illustrated-Surgical-Pathology.pdf','Glioblastoma / Pilocytic astrocytoma','医学教材（二次資料）'),
 phyllodes:source('CAP · Phyllodes Tumor Protocol（2026年版）','https://www.cap.org/wp-content/uploads/2026/09/Breast.Phyllodes_1.2.0.0.REL_CAPCP.pdf?download=true','Explanatory Notes：stromal cellularity / atypia / overgrowth。基本的な間質評価を参照','公式病理プロトコル'),
 men1:source('NCI · Genetics of Endocrine and Neuroendocrine Neoplasias (PDQ)','https://www.cancer.gov/types/thyroid/hp/medullary-thyroid-genetics-pdq','MEN1：Parathyroid / Pituitary / Other tumors','公式医学解説（二次資料）'),
 men2:source('NCI · Multiple Endocrine Neoplasia Type 2 (PDQ)','https://www.cancer.gov/publications/pdq/information-summaries/genetics/men2-hp-pdq','Brief Clinical Description / Clinical Features','公式医学解説（二次資料）'),
 menChild:source('NCI · Childhood MEN Syndromes Treatment (PDQ)','https://www.cancer.gov/types/multiple-endocrine-neoplasia/hp-child-men-syndromes-treatment-pdq','MEN1に関連する胸腺腫瘍の記載','公式医学解説（二次資料）')
};
const questions=[];
let checkedAt='2026-11-03';
function add(number,title,answer,explanation,notes,sources,format='single'){
 const {domain,page}=referenceFor(number);
 questions.push({id:`2025-58-${number}`,year:2025,round:58,number,domain,page,topic:title,title,format,selectCount:format==='multiple'?2:1,answer,status:'researched',revision:1,explanation,optionNotes:notes.map(([label,text])=>({label,text})),sources:sources.map(s=>S[s]),checkedAt});
}
add(1,'細胞死と炎症反応',[4],'古典的なネクローシスでは、虚血や毒性物質などの傷害により細胞が膨化し、膜の破綻と内容物の流出が炎症を誘発します。C・Dの組合せを選びます。現代の細胞死分類には制御性ネクローシスもあるため、「壊死はすべて非制御性」と一般化しないことも大切です。',[
 ['A・B','感染細胞を選択的に除去する働きや細胞の縮小は、ここではアポトーシスとの対比で整理します。'],['C・D','細胞傷害に続く内容物の流出と、周囲の炎症反応を結びつけて考えます。'],['E','細胞内の制御機構による細胞死という記述は、この基礎的な対比ではアポトーシス側です。制御性壊死という例外的な概念とは区別します。']],['necrosis','necrosis2'],'combination');
add(4,'臓器のはたらきと血液供給',[1],'肺はガス交換を担う肺循環と、気管支などの組織を養う気管支循環を持ちます。肝臓は門脈と肝動脈から血液を受けます。この設問の機能血管・栄養血管という対比に対応するのはA・Bです。',[
 ['A','肺動脈系と気管支動脈系を区別します。'],['B','消化管からの血液を運ぶ門脈と、酸素供給を担う肝動脈を対応させます。'],['C〜E','臓器に複数の血管が出入りすることと、この設問の「機能血管・栄養血管の二重支配」は同じ意味ではありません。']],['lung','liver'],'combination');
add(5,'職業性ばく露と発がん部位',[5],'1,2-ジクロロプロパンが該当します。IARCの評価では、日本の印刷作業者に発生した胆道がんの研究を含む根拠により、ヒトに対する発がん性が認められています。「発がん性がある物質」を知るだけでなく、関連する臓器とばく露状況を対応させましょう。',[
 ['5','印刷業でのばく露と胆道がんの関連を直接扱ったIARCの評価が根拠です。'],['1〜4','別の物質の有害性や発がん性を、そのまま胆管がんの原因物質という判断に置き換えないようにします。']],['iarc']);
add(6,'統計を読む：対象年と集計範囲',[1],'対象は2023年の男女計の死亡数です。肺75,762人、大腸53,131人、膵臓40,175人、胃38,771人となり、肺→大腸→膵臓の順です。肺はC33＋C34、大腸はC18＋C19＋C20で集計しています。罹患数や別年度の死亡数と混同しないことが要点です。',[
 ['1','設問の対象年と男女計に合わせた順位と一致します。'],['2・3','この年の男女計では、胃より膵臓の死亡数が多くなります。'],['4・5','この年の男女計では、大腸より肺の死亡数が多くなります。']],['deaths']);
add(7,'小児がんの疫学',[1],'全国がん登録2016〜2018年に基づく0〜14歳の内訳では、白血病が最多です。国立がん研究センターの表では男女計の32％を占めます。この割合は対象集団中のがん種の構成比であり、人口10万人あたりの罹患率そのものとは区別します。',[
 ['1','指定された年齢集団・期間の第1位に該当します。'],['2〜5','脳腫瘍は全体として第2位ですが、膠芽腫だけを脳腫瘍全体と同じ集計にしてはいけません。他の候補も白血病を上回りません。']],['child']);
add(8,'胚葉と組織の由来',[1],'肝臓の実質・胆管系上皮は内胚葉に由来します。臓器には実質、間質、血管など異なる由来の成分が含まれるため、「臓器のすべての細胞が同じ胚葉由来」とは解釈しません。',[
 ['1','肝実質とそれに続く管系は、内胚葉由来の代表として整理できます。'],['2〜5','腎臓の主要な実質は中胚葉由来です。皮膚の表皮、神経堤由来の副腎髄質、口腔外胚葉由来の下垂体前葉と区別します。']],['germ']);
add(9,'ウイルスゲノムの基本',[3],'ヘルペスウイルスは二本鎖DNAをゲノムとします。原本にある他の候補はRNAウイルスです。外被の有無、RNAの極性、分節の有無は、それぞれ別の分類軸として整理しましょう。',[
 ['1・2・4','ノロウイルス、コロナウイルス、C型肝炎ウイルスはプラス鎖RNAウイルスです。'],['3','ヘルペスウイルス群は二本鎖DNAです。'],['5','インフルエンザウイルスは分節したマイナス鎖RNAを持ちます。']],['virus']);
add(11,'創傷治癒と肉芽組織',[2],'肉芽組織は創傷治癒の過程に現れ、線維芽細胞、新生毛細血管、炎症細胞などからなります。成熟に伴い膠原線維が増え、瘢痕へ移行します。「肉芽組織」と、類上皮細胞が集まる「肉芽腫」を区別します。',[
 ['2','類上皮細胞を中心とする構造は肉芽腫の説明であり、肉芽組織の基本的構成ではありません。'],['1・3・4・5','炎症細胞、治癒過程、新生血管・線維芽細胞、瘢痕化は、肉芽組織の説明として整合します。']],['granulation']);
add(12,'壊死のパターンを整理する',[2],'腎梗塞の基本的な壊死パターンは凝固壊死です。虚血性壊死でも、脳では融解壊死が代表的です。疾患名だけでなく、傷害を受けた組織と消化酵素の働きから整理すると覚えやすくなります。',[
 ['1','結核に関連する代表的な形態は乾酪壊死です。'],['2','腎の梗塞を出血性壊死とする対応が誤りです。'],['3','脳の虚血性傷害では融解壊死を考えます。'],['4','急性膵炎では膵酵素による脂肪壊死が問題になります。'],['5','心筋の虚血性傷害では凝固壊死が代表的です。']],['necrosis2']);
add(13,'核の構造とクロマチン',[3],'ヘテロクロマチンは凝縮が強く、電子顕微鏡では高い電子密度を示します。比較的疎で転写活性の高いユークロマチンと対比しましょう。外核膜と粗面小胞体の連続性、核膜孔を介した輸送も重要です。',[
 ['1・2','核は核膜で囲まれ、外核膜は粗面小胞体へ連続しています。'],['3','電子密度を低いとする点が逆です。'],['4・5','クロマチンはDNAとヒストンなどからなる複合体です。RNAの核外への移動には核膜孔が関与します。']],['nucleus']);
add(14,'病原体を疾患に結びつける',[2],'結核の原因は結核菌群です。Mycobacterium aviumは非結核性抗酸菌であり、両者を区別することがこの問題の要点です。',[
 ['1','梅毒の病原体はTreponema pallidumです。'],['2','M. aviumを結核の病原体とする対応が誤りです。'],['3','猫ひっかき病ではBartonella henselaeが代表的です。'],['4','鼠径リンパ肉芽腫症はChlamydia trachomatisの特定の血清型に関連します。'],['5','AIDSはHIV感染に関連する後天性免疫不全です。']],['tb','syphilis','bartonella','lgv']);
add(15,'DNA修復経路を区別する',[5],'ミスマッチ修復の評価で基本となる4つのタンパク質はMLH1、MSH2、MSH6、PMS2です。BRCA1もDNA修復に重要ですが、主に相同組換え修復に関わり、この4つのMMRタンパク質とは区別します。',[
 ['1〜4','いずれもMMRタンパク質の基本的な評価対象です。'],['5','DNA修復に関係する遺伝子を、すべてミスマッチ修復遺伝子とまとめないことが重要です。']],['mmr']);
add(16,'がんの危険因子を整理する',[3,5],'大腸がんと肥満、甲状腺がんと放射線ばく露の組合せを選びます。疫学的な関連を理解しつつ、ばく露した人が必ず発症するという意味ではないことにも注意します。',[
 ['1','胃がんの代表的な感染性危険因子として整理するのはH. pyloriです。アニサキスとの対応ではありません。'],['2','多産を一般的な乳がん危険因子とする対応は適切ではありません。出産とリスクの関係には時期やサブタイプなどの条件があります。'],['3','体脂肪量の増加と大腸がんリスクの関連が報告されています。'],['4','アニリンばく露を皮膚がんの代表的な原因因子とする組合せは選びません。'],['5','とくに小児期の放射線ばく露と、その後の甲状腺がんリスクの関連が知られています。']],['obesity','thyroid','births'],'multiple');
add(17,'消化管の腺と部位',[2,3],'十二指腸の粘膜下層にあるブルンネル腺と、小腸粘膜のリーベルキューン腺（陰窩）が対応します。腺の名前だけでなく、粘膜内か粘膜下層かもセットで整理しましょう。',[
 ['2','ブルンネル腺は十二指腸に特徴的で、アルカリ性の粘液を分泌します。'],['3','空腸にもリーベルキューン腺が存在します。'],['1・4・5','胃の腺、眼瞼のマイボーム腺、外陰部のバルトリン腺の位置を取り違えないようにします。']],['intestine'],'multiple');
add(22,'倍率と分解能は別のもの',[4],'光学顕微鏡の分解能は開口数と波長に依存し、一般にNAが大きく、波長が短いほど細部を分離できます。接眼レンズだけで拡大しても新たな細部は分離されません。C・Dを選びます。',[
 ['A','一般に高倍率・高NAの対物レンズでは、標本側の被写界深度は浅くなります。像側の焦点深度とは区別します。'],['B・E','倍率を上げることと分解能の向上は同義ではなく、有効倍率を超えると無効拡大になります。'],['C・D','分解可能な最小距離は、波長が短くNAが大きいほど小さくなります。']],['resolution','depth','empty'],'combination');
add(28,'デジタル標本のしくみ',[4],'WSIは標本全体を高解像度で取り込み、ビューアで移動・拡大縮小して観察する仕組みです。観察範囲や倍率を変更できないとするC・Dが誤りです。',[
 ['A','高解像度データの保存・配信には、容量や通信速度を考慮する必要があります。'],['B','画像の複製・保存は可能ですが、長期保存にはバックアップや形式・システムの維持が必要です。'],['C・D','標本内を移動し、表示倍率を変えられることがWSIビューアの基本機能です。'],['E','遠隔での共有、共同検討、教育に利用されています。']],['wsi','wsi2'],'combination');
add(40,'感染性廃棄物の表示',[1,5],'共通のバイオハザード記号と、日本で推奨される廃棄物の色分けを区別します。鋭利物は黄色で、突き刺しに耐える容器が必要です。液状・泥状は赤色、固形状は橙色です。',[
 ['1','バイオハザード記号は国際的に共通して使われます。色分けまで全世界共通という意味ではありません。'],['2','日本のこの区分で用いられる色は赤・橙・黄です。'],['3・4','赤は液状・泥状、橙は固形状であり、原本の対応は入れ替わっています。'],['5','注射針などの鋭利物は黄色の表示とし、貫通・漏出に耐える容器を使用します。']],['waste','bio'],'multiple');
add(42,'神経系腫瘍の形態を読む',[1],'膠芽腫の代表的な形態は細胞・核の多形性と、壊死周囲の偽柵状配列です。A・Bを選びます。現在の診断では形態に加えて分子所見を統合するため、この2所見だけで診断が完結するという意味ではありません。',[
 ['A・B','多形性と壊死を囲む偽柵状配列は、膠芽腫で重視される形態所見です。'],['C','Rosenthal線維は毛様細胞性星細胞腫などで代表的な所見です。'],['D・E','鋳型状配列や核内偽封入体は、この問題で問う膠芽腫の代表的な組合せではありません。単一所見だけで腫瘍を断定しないようにします。']],['gbm','neuro'],'combination');
add(50,'葉状腫瘍：上皮と間質',[4],'葉状腫瘍は上皮と間質からなる線維上皮性腫瘍です。悪性度の評価では、とくに間質の細胞密度、異型、過増殖、核分裂像、境界などを検討します。悪性葉状腫瘍の悪性成分を乳管上皮と取り違えないことが要点です。',[
 ['1','上皮だけの腫瘍ではなく、上皮と間質の両成分を持ちます。'],['2・3','良性でも上皮成分があり、線維腺腫との鑑別が問題になります。上皮がないという説明ではありません。'],['4','悪性評価の中心は間質成分です。'],['5','異型乳管上皮の増殖を悪性葉状腫瘍の基本所見とはしません。']],['phyllodes']);
add(55,'MENの病変分布',[4],'MEN1では副甲状腺、下垂体、膵・十二指腸の神経内分泌腫瘍が主要病変です。MEN2は甲状腺髄様癌、褐色細胞腫などが中心です。膵消化管内分泌腫瘍をMEN2の特徴とする対応が誤りです。',[
 ['1・2','下垂体腫瘍と多腺性の副甲状腺過形成はMEN1の病像と整合します。'],['3','MEN1関連の胸腺神経内分泌腫瘍は、予後上重要な病変です。'],['4','膵・十二指腸NETはMEN1の主要病変として整理します。'],['5','MEN2では髄様癌の生涯リスクが高くなります。ただし実際の浸透率・発症年齢はRETの遺伝子型や評価時点に依存し、診察時に全員が発症しているという意味ではありません。']],['men1','men2','menChild']);
checkedAt='2026-11-04';
addBatch(add,S,source);
addSecondBatch(add,S,source);
questions.sort((a,b)=>a.number-b.number);
writeFileSync(new URL('./dist/questions.json',import.meta.url),JSON.stringify({version:3,updatedAt:'2026-11-04',answerPolicy:'文献調査による独自解答。公式正答は未確認。',questions},null,2)+'\n');
console.log(`Wrote ${questions.length} researched questions.`);
