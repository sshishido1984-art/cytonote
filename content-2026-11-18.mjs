export function addNov18(add,S,source){
 Object.assign(S,{
  goitre18:source('Eurocytology・Multinodular goitre','https://www.eurocytology.eu/course/thyroid/benign-conditions/multinodular-goitre/','冒頭2段落とCytologic diagnostic features。被膜、濾胞の大小、変性所見を確認。','学会教育教材（本文確認）'),
  asa18:source('Sylvia L. Asa（トロント大学）・The History and Histology of Follicular Lesions of Thyroid','https://papsociety.org/guidelines/companion16h2.pdf','PDF34ページ、Sporadic nodular goiterの段落。濾胞径の不均一性と上皮の扁平・立方・円柱状形態を確認。','大学教員の講義資料（本文確認）'),
  bladder18:source('UC Davis・Bladder Tumors（Kurt Schaberg）','https://schaberg.faculty.ucdavis.edu/wp-content/uploads/sites/604/2020/04/Bladder-Tumors.pdf','PDF3ページ、Papillary Neoplasmsの表と説明。血管結合組織の芯、乳頭の融合・分岐を確認。','大学教材（本文・表確認）'),
  micro18:source('Aminほか・膀胱微小乳頭型尿路上皮癌18例（1994）','https://pubmed.ncbi.nlm.nih.gov/7977945/','論文表題と抄録の形態記載。卵巣漿液性癌との類似、浸潤部の小集塊を確認。','原著研究（抄録確認）'),
  eau18:source('EAU・非筋層浸潤性膀胱癌ガイドライン','https://uroweb.org/guidelines/non-muscle-invasive-bladder-cancer/chapter/diagnosis','5.5 Urinary cytology。低異型度腫瘍の低感度を確認。感度だけから細胞剥離率は算出できない。','学会指針（本文確認）'),
  smallBladder18:source('Guほか・原発性膀胱小細胞神経内分泌癌12例（2023）','https://pubmed.ncbi.nlm.nih.gov/37407530/','抄録Results。尿路上皮癌成分を伴う症例を確認。合併の存在を示す根拠として使用。','原著研究（抄録確認）'),
  rms18:source('米国国立がん研究所・小児横紋筋肉腫','https://www.cancer.gov/types/soft-tissue-sarcoma/patient/rhabdomyosarcoma-treatment-pdq','General Informationの胎児型と泌尿生殖器発生の記載、Rhabdomyosarcoma of the bladder or prostate。','公的機関の患者教育資料（本文確認）'),
  renalUrine18:source('Liほか・腎細胞癌における尿細胞診の多施設検討（2024）','https://pubmed.ncbi.nlm.nih.gov/38329359/','抄録Methods、Results、Conclusions。腎細胞癌対応尿細胞診1,147件と尿路上皮癌等666件の比較。検体採取法により成績が異なる。','原著研究（抄録確認）'),
  lymphoma18:source('Lontosほか・Primary Urinary Tract Lymphoma（2017）','https://pubmed.ncbi.nlm.nih.gov/29187485/','抄録Materials and Methods、Results。SEERの原発性尿路リンパ腫1,264人、優勢な組織型はDLBCL。','登録研究（抄録確認）'),
  nodes18:source('UC Davis・Lymph Nodes, Non-Lymphoma（Kurt Schaberg）','https://schaberg.faculty.ucdavis.edu/wp-content/uploads/sites/604/2022/05/Lymph-node-nonlymphoma.pdf','PDF1ページReactive Follicular Hyperplasia、5ページCat Scratch Disease／Kikuchi Lymphadenitis／Granulomas。','大学教材（本文確認）'),
  tb18:source('Ohio State University・Atlas of Head and Neck Pathology：Tuberculosis','https://medicine.osu.edu/-/media/files/medicine/departments/otolaryngology/atlas-of-head-and-neck-pathology/t/tuberculosis2.pdf?hash=83CE3E81CDF7D0943C5EDC782097204BF74E24F8&la=en','PDF1〜2ページ。結核リンパ節とサルコイドーシスの形態説明。病理形態のみ参照し、治療・疫学記述は使用していない。','大学教材（本文・図説明確認）'),
  kikuchi18:source('Tsangほか・菊池病75例の形態学的検討（1994）','https://pubmed.ncbi.nlm.nih.gov/8116791/','抄録の組織球形態、核崩壊物、好中球が少ないとの記載。組織学的検討であり細胞診の診断精度は評価していない。','原著研究（抄録確認）'),
  lungScc18:source('Kamiyaほか・末梢型肺扁平上皮癌の細胞像（1995）','https://pubmed.ncbi.nlm.nih.gov/7847010/','抄録全文。末梢型32例と比較対象の肺門型31例。粗顆粒状クロマチン、核小体、採取方法による差を確認。','原著研究（抄録確認）')
 });
 add(46,'腺腫様甲状腺腫の構築と変性',[3],
  '独自解答は3（B・C）です。腺腫様甲状腺腫では大小の濾胞が混在し、結節ごとの構築にも差があります。整った被膜と均一な小濾胞構造を基本像とする説明は適切ではありません。',[
   ['A','濾胞上皮の過形成により複数の結節を形成することが基本です。'],
   ['B','通常は完全な被膜で包まれません。部分的な線維化や被膜様構造があっても、それだけで腺腫と決めないようにします。'],
   ['C','コロイドに富む大きな濾胞と、細胞に富む小さな濾胞が混在します。局所的な小濾胞はあり得ますが、病変全体を一律に小濾胞主体とは扱いません。'],
   ['D','拡張した濾胞の扁平な上皮と、立方状・円柱状の上皮が混在し、均一ではありません。'],
   ['E','増大に伴う出血、瘢痕化、囊胞化や異栄養性石灰化がみられます。']
  ],['goitre18','asa18'],'combination');
 add(48,'尿路上皮癌の乳頭構築を読む',[4],
  '独自解答は4（C・D）です。高異型度の乳頭状尿路上皮癌でも乳頭の融合・分岐がみられます。微小乳頭型で形態が比較される相手は卵巣の漿液性癌です。',[
   ['B','乳頭の芯に血管結合組織を持ち、その表面を腫瘍性尿路上皮が覆う構築を確認します。'],
   ['C','大学教材の比較表では、高異型度でも融合・分岐を認めると整理されています。細胞の極性や配列の乱れも合わせて評価します。'],
   ['D','原著で示された類似は漿液性癌とのものです。浸潤部では小さく密な腫瘍細胞集塊が手掛かりになります。'],
   ['E','低異型度腫瘍は尿細胞診で検出しにくいことがガイドラインで確認できます。ただし、検出感度の低さをそのまま細胞の剥離率と読み替えることはできません。'],
   ['確認範囲','今回の資料照合は乳頭構築、微小乳頭型との対応、低異型度腫瘍の検出特性が中心です。Aの背景所見の出現頻度は定量的に確認していません。']
  ],['bladder18','micro18','eau18'],'combination');
 add(59,'泌尿器腫瘍の組織型と尿細胞診',[2,4],
  '独自解答は2・4です。膀胱の小細胞神経内分泌癌には尿路上皮癌成分が併存する例があります。小児の泌尿生殖器腫瘍では胎児型横紋筋肉腫が重要です。',[
   ['2','小細胞癌の症例集積で、尿路上皮癌成分の併存が確認されています。すべての症例が混合型という意味ではありません。'],
   ['3','多施設研究では、腎細胞癌は尿路上皮癌に比べ尿細胞診での検出が低率でした。腎の腫瘍でも、腎実質由来と腎盂尿路上皮由来を区別します。'],
   ['4','NCIの小児腫瘍教材では胎児型の好発部位として泌尿生殖器を挙げ、膀胱・前立腺病変を扱っています。成人例が存在しないという意味ではありません。'],
   ['5','原発性尿路リンパ腫の登録研究で優勢だったのは、B細胞性のびまん性大細胞型B細胞リンパ腫です。'],
   ['確認範囲','今回は2〜5の裏付けを確認しました。1の膀胱内の部位別頻度は独立に検証していないため、頻度の数値は提示していません。']
  ],['smallBladder18','rms18','renalUrine18','lymphoma18'],'multiple');
 add(60,'リンパ節炎の組織球と壊死',[1,5],
  '独自解答は1・5です。結核性リンパ節炎では核が辺縁に配列するLanghans型巨細胞、菊池病（亜急性壊死性リンパ節炎）では核崩壊物と三日月状の核を持つ組織球が手掛かりです。',[
   ['1','結核の肉芽腫で認められますが、Langhans型巨細胞だけに病原体特異性はありません。壊死の性状や菌の証明も評価します。'],
   ['2','反応性濾胞過形成では胚中心を持つ二次濾胞の増加を評価します。化膿性肉芽腫を基本像とする対応ではありません。'],
   ['3','猫ひっかき病では、星芒状の膿瘍を囲む組織球など、化膿性肉芽腫性病変が特徴です。'],
   ['4','サルコイドーシスでは通常、非壊死性肉芽腫を認めます。乾酪壊死を典型的所見として対応させません。'],
   ['5','菊池病の原著では、核崩壊物を取り込む組織球と、辺縁に位置する三日月状核が記載されています。好中球が乏しい点も鑑別に役立ちます。']
  ],['nodes18','tb18','kikuchi18'],'multiple');
 add(67,'喀痰で扁平上皮分化を読む',[3],
  '独自解答は3です。提示された候補では、粗い核クロマチンが肺扁平上皮癌を考える手掛かりになります。ただし、この所見だけで組織型を確定せず、角化などの細胞質所見も合わせて判断します。',[
   ['3','肺扁平上皮癌の細胞学的検討で粗顆粒状クロマチンが記載されています。採取方法や腫瘍の部位による像の差にも注意します。'],
   ['4','同じ原著には明瞭な核小体を持つ例もあります。核小体があるから扁平上皮癌ではない、という除外の仕方はできません。'],
   ['1・2・5','これらの所見だけを扁平上皮分化の決め手にはしません。今回の原著抄録では各所見の感度・特異度までは確認できていません。'],
   ['確認範囲','原著の粗顆粒状クロマチンの記述は主に穿刺・擦過標本についてです。喀痰では扁平上皮分化が認識できたと報告されていますが、喀痰での各所見の頻度表は未確認です。']
  ],['lungScc18']);
}
