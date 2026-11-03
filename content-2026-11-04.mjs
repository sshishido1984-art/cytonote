// 原本の問題本文は収録せず、問題番号に対応する独自解説を収録する。
export function addBatch(add, S, source) {
 Object.assign(S, {
  seminoma: source('NCI SEER · Types of Testicular Cancer','https://training.seer.cancer.gov/testicular/intro/types.html','Seminomas','公式医学教材（二次資料）'),
  objectives: source('Nikon · Introduction to Microscope Objectives','https://www.microscopyu.com/microscopy-basics/introduction-to-microscope-objectives','Plan objectives：像面湾曲の補正','メーカー技術資料'),
  aperture: source('Nikon · Conjugate Planes in Optical Microscopy','https://www.microscopyu.com/microscopy-basics/conjugate-planes-in-optical-microscopy','Condenser aperture：コントラストと分解能の調整','メーカー技術資料'),
  mucin: source('Leica · Special Stains: Which One, Why and How?','https://www.leicabiosystems.com/en-it/knowledge-pathway/special-stains-which-one-why-and-how/','Mucicarmine：epithelial mucins','メーカー技術教材'),
  hodgkin: source('NCI · Childhood Hodgkin Lymphoma Treatment (PDQ)','https://www.cancer.gov/types/lymphoma/hp/child-hodgkin-treatment-pdq','Cellular Classification：HRS細胞のCD30、LP細胞の形態','公式医学解説（二次資料）'),
  meso2024: source('IMIG · 中皮腫病理診断のコンセンサス（2023 update、2024年刊行）','https://orca.cardiff.ac.uk/id/eprint/173721/1/i1543-2165-148-11-1251.pdf','Immunohistochemistry / Distinguishing Benign From Malignant Mesothelial Proliferations / Cytologic Diagnosis','学会コンセンサス'),
  urachus: source('Urachal carcinoma: a pathological and clinical study of 39 cases','https://pubmed.ncbi.nlm.nih.gov/21572312/','Abstract：尿膜管上皮性腫瘍の組織型','原著研究（抄録確認）'),
  urachusCyto: source('尿膜管腺癌の穿刺細胞診症例','https://pubmed.ncbi.nlm.nih.gov/27190817/','Figures 1–2：膀胱頂部・前壁の腫瘤と粘液性背景','原著症例報告（抄録・図説明確認）'),
  alveoli: source('University of Leeds · Alveoli','https://histology.leeds.ac.uk/home/respiratory/alveoli/','Type I / Type II cells：細胞数と被覆面積の区別','大学教材（二次資料）'),
  lamellar: source('Duke University · Respiratory System（2015）','https://histology.oit.duke.edu/MBS/Videos/Histo/Histo03-Respiratory/Respiratory_System_NOTES_2015.pdf','Alveolar Type II Cell：lamellar bodies','大学教材（二次資料）'),
  smallcell: source('University of Pittsburgh · Case 1097','https://path.upmc.edu/cases/case1097/dx.html','Discussion：小細胞癌の細胞質、核小体、核の圧排像','大学症例教材（二次資料）'),
  lungNeuro: source('American Society of Cytopathology · 肺神経内分泌腫瘍の教材','https://education.cytopathology.org/node/444','カルチノイドと小細胞癌の形態比較（検索表示で確認）','学会教材（二次資料・本文取得未完了）'),
  oxygen: source('Youngson et al. · Oxygen sensing in airway chemoreceptors derived from neuroepithelial bodies','https://pubmed.ncbi.nlm.nih.gov/8371757/','Abstract：ウサギ胎仔由来細胞での低酸素応答','原著研究（抄録確認・動物実験）'),
  thymus: source('NCI · Thymoma and Thymic Carcinoma Treatment (PDQ)','https://www.cancer.gov/types/thymus-cancer/hp/thymoma-treatment-pdq','Histological Classification：Type A / Type B3','公式医学解説（二次資料）'),
  metastasis: source('NCI · Osteosarcoma and Undifferentiated Pleomorphic Sarcoma of Bone Treatment (PDQ)','https://www.cancer.gov/types/bone/hp/osteosarcoma-treatment-pdq','Metastatic disease / Lung metastases：選択された症例での外科切除','公式医学解説（二次資料）'),
  lungBreast: source('Yang & Nonaka · 肺癌と乳癌の免疫組織化学的比較（2010）','https://pubmed.ncbi.nlm.nih.gov/20173733/','Abstract：TTF-1、Napsin Aと乳腺系マーカーの比較','原著研究（抄録確認）'),
  bcl10: source('Hosoda et al. · BCL10 as a useful marker for pancreatic acinar cell carcinoma（2013）','https://pubmed.ncbi.nlm.nih.gov/23530562/','Abstract：切除検体とEUS-FNA検体の検討','原著研究（抄録確認）'),
  apc: source('eviQ · APC (Familial adenomatous polyposis) – risk management','https://www.eviq.org.au/cancer-genetics/adult/risk-management/178-apc-familial-adenomatous-polyposis-risk-ma','Summary：APCと常染色体顕性遺伝','公的診療ガイドライン'),
  panin: source('Johns Hopkins · Kiemen Laboratory: Pancreatic cancer','https://labs.pathology.jhu.edu/kiemen/pancreatic-cancer/','PanINs：顕微鏡的な膵管内の前駆病変','大学研究室の解説（二次資料）'),
  gnrh: source('Society for Endocrinology · Gonadotrophin-releasing hormone','https://www.yourhormones.info/hormones/gonadotrophin-releasing-hormone/','What is GnRH? / How is it controlled?','学会教材（二次資料）'),
  lh: source('Society for Endocrinology · Luteinising hormone','https://www.yourhormones.info/hormones/luteinising-hormone/','下垂体前葉からの分泌','学会教材（二次資料）'),
  legh: source('Mikami et al. · LEGH is a metaplastic process with a pyloric gland phenotype（2001）','https://pubmed.ncbi.nlm.nih.gov/11683936/','Abstract：幽門腺形質と水様性帯下','原著研究（抄録確認）'),
  colpo: source('IARC · Colposcopy and Treatment of Cervical Intraepithelial Neoplasia','https://screening.iarc.fr/doc/Colposcopymanual.pdf','正常移行帯の腺開口、酢酸加工とacetowhitening','国際機関の教育教材（二次資料）'),
  candida: source('CDC · Vulvovaginal Candidiasis','https://www.cdc.gov/std/treatment-guidelines/candidiasis.htm','Diagnostic Considerations：pseudohyphae / C. glabrata','公式ガイドライン'),
  embryo: source('Embryology.ch · Female: differentiation of the canal system','https://embryology.ch/en/organogenesis/genital-system/development-of-internal-genital-organs/female-differentiation-canal-system.html','傍中腎管から卵管・子宮・腟上部への分化','大学教材（二次資料）'),
  ascus: source('日本産科婦人科学会 · HPV関連疾患の予防・検査・診療に関する解説 Part 4','https://www.jsog.or.jp/uploads/files/jsogpolicy/HPV_Part4.pdf','冊子4ページ：ASC-USの際のHPV検査。2021年時点の説明を参照','学会解説（二次資料）'),
  brca: source('NCI · BRCA1 and BRCA2: Cancer Risks and Management (PDQ)','https://www.cancer.gov/publications/pdq/information-summaries/genetics/brca-genes-hp-pdq','Autosomal dominant inheritance / Gynecologic cancers / Risk-reducing surgery','公式医学解説（二次資料）'),
  gtd: source('NCI · Gestational Trophoblastic Disease Treatment (PDQ)','https://www.cancer.gov/types/gestational-trophoblastic/hp/gtd-treatment-pdq','Cellular Classification / Placental-site trophoblastic tumor / Chemotherapy','公式医学解説（二次資料）'),
  p57: source('Western Australia WNHS · Gestational Trophoblastic Disease','https://www.kemh.health.wa.gov.au/~/media/HSPs/NMHS/Hospitals/WNHS/Documents/Clinical-guidelines/Obs-Gyn-Guidelines/Gestational-Trophoblastic-Disease.pdf?thn=0','3・5ページ：胞状奇胎の鑑別、p57の発現と親由来','公立医療機関の診療指針')
 });
 add(10,'腫瘍名と良悪性の対応',[3],'精上皮腫（seminoma）は悪性の胚細胞腫瘍です。腫瘍名の末尾が「腫」であっても良性とは限りません。名前の響きではなく、どの細胞系列の腫瘍で、どの分類に位置づけられるかを確認します。',[
  ['3','精巣胚細胞腫瘍を精上皮腫と非精上皮腫に分ける分類を押さえます。'],['学習の要点','「癌」「肉腫」が名称に含まれない悪性腫瘍もあります。']],['seminoma']);
 add(25,'対物レンズと開口絞りの使い分け',[4],'誤りはC・Dです。プラン補正は像面湾曲を抑え、画面周辺まで平坦な像を得るのに役立ちます。また、開口絞りを開きすぎるとコントラストが低下します。絞りを閉じれば常によいのではなく、分解能との釣り合いを調整します。',[
  ['C','写真撮影では色収差の補正だけでなく像面の平坦性も重要です。'],['D','開口を大きくすることとコントラストを高くすることは同義ではありません。'],['学習の要点','絞りすぎでも細部が失われます。照明の明るさの調整と開口の調整を区別します。']],['objectives','aperture'],'combination');
 add(33,'ムチカルミンと粘液の種類',[4],'ムチカルミンは上皮性粘液の検出に用いる染色です。間質性粘液の検出を代表的な用途とする対応が誤りです。粘液を一括して覚えず、由来と化学的性質、使用する染色法を対応させます。',[
  ['4','上皮性粘液と間質の酸性ムコ多糖を区別することが、この選択肢の判定点です。'],['学習の要点','染色名だけでなく、何を検出する反応かを整理すると特殊染色の問題に対応しやすくなります。']],['mucin']);
 add(43,'ホジキンリンパ腫の細胞とマーカー',[4],'C・Dを選びます。出題時の名称である結節性リンパ球優位型では、核が分葉したLP細胞（ポップコーン細胞）が特徴です。古典的ホジキンリンパ腫のHodgkin/Reed–Sternberg細胞ではCD30が代表的なマーカーです。',[
  ['C','ポップコーン細胞はLP細胞を指す形態的な呼び方です。'],['D','古典型とリンパ球優位型は、形態だけでなく免疫表現型も分けて整理します。'],['注意点','CD30陽性だけでホジキンリンパ腫を確定できるわけではありません。']],['hodgkin'],'combination');
 add(47,'中皮系の確認と悪性の判定',[3],'誤りはB・Cです。Calretininは中皮系の分化を支持しますが、反応性と腫瘍性の区別を直接示す染色ではありません。TTF-1は主に肺腺癌などとの鑑別で使います。BAP1・MTAPの消失やCDKN2Aのホモ接合性欠失は、適切な状況で悪性中皮増殖を支持します。',[
  ['A・D・E','発現消失や遺伝子欠失を評価します。内部対照や検体条件も必要です。'],['B・C','細胞の由来を調べる目的と、中皮細胞の良悪性を調べる目的を取り違えないようにします。'],['注意点','BAP1・MTAPが保持され、欠失を検出しなくても中皮腫は除外できません。']],['meso2024'],'combination');
 add(51,'尿膜管癌と粘液性背景',[3],'尿膜管癌では腺癌が主要な組織型であり、細胞診で粘液性の背景を伴うことがあります。膀胱頂部から前壁側という発生部位も手掛かりです。粘液があるという所見だけで尿膜管原発と断定せず、腫瘤の位置や他臓器病変と照合します。',[
  ['3','粘液を伴う腫瘍細胞集塊は、尿膜管腺癌の細胞診症例でも示されています。'],['注意点','引用した細胞診症例は具体例です。全例が同じ細胞像を示すという根拠にはしません。']],['urachus','urachusCyto']);
 add(52,'体腔液でのClaudin 4の読み方',[4],'この鑑別ではClaudin 4の細胞膜陽性が腺癌を支持します。Claudin 4は上皮性分化を示すマーカーとして用いられ、中皮系細胞との区別に役立ちます。核の位置や配列だけでは重なりがあるため、形態と免疫染色を組み合わせます。',[
  ['4','細胞膜に沿った陽性所見を評価します。非特異的な細胞質染色とは区別します。'],['注意点','すべての癌が陽性になるわけではなく、陰性だけで中皮系と確定することもできません。']],['meso2024']);
 add(61,'肺胞の被覆面積と層板小体',[5],'誤りはD・Eです。I型肺胞上皮は薄く広がり、肺胞表面の大部分を覆ってガス交換に関与します。サーファクタントに関係する層板小体はII型肺胞上皮の特徴です。細胞の個数の割合と、表面を覆う面積の割合を区別します。',[
  ['D','I型は肺胞表面の約95％を覆うと大学教材で説明されています。分母は細胞数ではなく表面積です。'],['E','オスミウム好性の層板小体はII型の分泌機能に結びつけて覚えます。']],['alveoli','lamellar'],'combination');
 add(64,'小細胞癌の核所見',[3],'誤りはB・Cです。小細胞癌は乏しい細胞質、目立たない核小体、核の圧排による鋳型状配列などを示します。目立つロゼット様構造はカルチノイドとの比較で整理します。ロゼットが絶対に出現しないという意味ではありません。',[
  ['B','核小体が目立つことを典型所見とはしません。'],['C','神経内分泌腫瘍という共通点だけで、カルチノイドと小細胞癌の細胞像を同じに扱わないことが要点です。'],['注意点','挫滅などの標本作製上の影響も、核線や核の形の評価に関わります。']],['smallcell','lungNeuro'],'combination');
 add(66,'気道の酸素感知',[4],'神経内分泌細胞を選びます。気道の神経上皮小体を構成する細胞は、酸素環境の変化を感知する機能に関与します。分泌、異物排除、上皮の維持といった他の役割と区別して整理します。',[
  ['4','根拠の原著では、ウサギ胎仔由来の神経上皮小体細胞を用いた低酸素応答が検討されています。'],['根拠の範囲','動物由来細胞の機能研究です。ヒトでの診断精度を示した臨床試験ではありません。']],['oxygen']);
 add(74,'胸腺腫の型とリンパ球の量',[4],'Type Aは紡錘形ないし卵円形の上皮細胞を主体とし、リンパ球は乏しいか目立たない型です。したがって、リンパ球が多数みられるという対応が誤りです。Type B3でもリンパ球は比較的乏しく、上皮細胞の性状と併せて分類します。',[
  ['4','Type Aの上皮細胞の形とリンパ球の少なさを組み合わせて覚えます。'],['5','Type B3もリンパ球が少ないため、リンパ球数だけでAとB3を分けることはできません。']],['thymus']);
 add(75,'肺転移と外科切除',[1],'肺転移があれば一律に手術適応がない、という説明が誤りです。原発腫瘍の種類、他部位の病変、完全切除の可能性、全身状態などを考慮し、選択された症例で肺転移巣の切除を検討します。',[
  ['1','NCIの骨肉腫診療解説には、肺転移の外科切除が治療選択肢として記載されています。'],['注意点','これは手術を検討する具体例です。あらゆる癌の肺転移で切除の利益が同じという意味ではありません。']],['metastasis']);
 add(78,'肺腺癌と乳癌転移の鑑別',[1,3],'TTF-1とNapsin Aを選びます。いずれも肺腺癌を支持するマーカーとして、乳腺系マーカーと組み合わせて評価します。既往歴だけで転移と決めず、形態、画像、複数の免疫染色を統合することが重要です。',[
  ['1・3','肺腺癌側を支持する組合せです。ただし陰性例もあり、単独の陽性で原発部位を確定しません。'],['2・4・5','GATA3、GCDFP-15、Mammaglobinは乳腺分化を検討する側のマーカーです。']],['lungBreast'],'multiple');
 add(89,'膵腺房細胞癌の免疫染色',[3],'BCL10を選びます。膵腺房細胞癌の腺房分化を確認するマーカーとして研究され、EUS-FNA検体での検討もあります。膵腫瘍を腺管系、腺房系、神経内分泌系に分けて考えると、マーカーの目的を整理できます。',[
  ['3','BCL10の有用性が検討されていますが、全例陽性ではなく、他の組織型での陽性も報告されています。'],['注意点','免疫染色は形態と組み合わせて判断します。遺伝子名と染色抗体の反応性を同じ意味で扱わないようにします。']],['bcl10']);
 add(91,'家族性大腸腺腫症と原因遺伝子',[5],'家族性大腸腺腫症（FAP）で代表的な原因遺伝子はAPCです。PTENとする組合せが誤りです。消化管ポリポーシスを来す遺伝性疾患は複数あり、似た臨床像でも原因遺伝子や遺伝形式が異なります。',[
  ['5','APC関連FAPは常染色体顕性（優性）の遺伝性腫瘍素因として整理します。'],['学習の要点','疾患名・原因遺伝子・遺伝形式をひと組にして覚えると混同を防げます。']],['apc']);
 add(94,'PanINは顕微鏡的な病変',[1],'PanINは膵管内に生じる顕微鏡的な前駆病変です。肉眼的に確認する病変とする説明が誤りです。膵管内の腫瘍性病変を、病変の大きさと異型の程度という別々の軸で整理しましょう。',[
  ['1','顕微鏡的な病変である点が、この設問の判定の中心です。'],['注意点','前駆病変という言葉は、すべてが必ず浸潤癌へ進むという意味ではありません。検査法の適応は個別の臨床状況で判断されます。']],['panin']);
 add(103,'視床下部と下垂体のホルモン',[1],'A・Bを選びます。GnRHは視床下部から分泌され、下垂体前葉でのLH・FSHの産生と分泌を調節します。視床下部、下垂体前葉、性腺の順に、上流から下流へ働きをたどると理解しやすくなります。',[
  ['A・B','放出ホルモンであるGnRHと、性腺刺激ホルモンであるLHを区別します。'],['C','FSHも下垂体前葉から分泌されます。後葉と取り違えないようにします。'],['注意点','「主な分泌源」を問う設問です。ホルモンが一つの組織でしか作られないという意味ではありません。']],['gnrh','lh'],'combination');
 add(104,'LEGHの幽門腺形質',[4],'C・Dを選びます。分葉状頸管腺過形成（LEGH）は胃幽門腺に似た形質を示す頸管腺の病変で、水様性帯下の原因になることがあります。正常頸管腺と同じ粘液性状と考えず、胃型の分化を理解することが要点です。',[
  ['C','水様性帯下は報告された症状ですが、すべての症例に必須の症状ではありません。'],['D','幽門腺に似た形態と粘液形質を結びつけます。'],['注意点','胃型の分化を認めることと、悪性であることは同義ではありません。']],['legh'],'combination');
 add(105,'コルポスコピーと酢酸加工',[5],'誤りはD・Eです。白色上皮（acetowhite epithelium）は酢酸加工後に生じる白色変化を指します。また、腺開口は正常の移行帯を見極める手掛かりです。加工前から白くみえる病変と、酢酸によって白くなる病変を区別します。',[
  ['D','観察の時点を確認します。酢酸加工前の白色病変を、そのままacetowhite変化とは呼びません。'],['E','移行帯には腺開口やナボット嚢胞がみられ、範囲を同定する際の指標となります。']],['colpo'],'combination');
 add(107,'腟カンジダ症の形態',[4],'仮性菌糸を選びます。Candidaでは出芽酵母や菌糸・仮性菌糸が観察の手掛かりとなります。菌種によって形態が異なり、C. glabrataのように仮性菌糸を形成しないものもあるため、見えないだけで否定はできません。',[
  ['4','仮性菌糸と酵母の組合せを確認します。'],['注意点','菌体の検出と症候性の感染症は区別します。無症状の保菌もあるため、症状や検査所見との照合が必要です。']],['candida']);
 add(108,'ミュラー管由来の器官',[2],'基礎発生学の整理では、ミュラー管（傍中腎管）から卵管、子宮、腟上部が形成されます。左右の管の癒合と、その後の形態変化が子宮の発生に重要です。この設問では、その基本的な対応を選びます。',[
  ['2','卵管と子宮を連続した管系の発生として理解します。'],['学習の要点','管系の形成と性腺の形成を分けて整理し、子宮の形成異常から卵巣の欠損を自動的に推定しないようにします。']],['embryo']);
 add(110,'ASC-USとHPVトリアージ',[1],'ASC-USを選びます。軽度の異型があるもののLSILと断定できない場合に、ハイリスクHPV検査で次の対応を判断するトリアージが用いられます。HPV感染そのものを細胞診だけで確定することとは区別します。',[
  ['1','学会の解説でもASC-US判定後のHPV検査が説明されています。'],['注意点','出題時の基本的な対応を整理した問題です。実際の管理は年齢、検診歴、HPV結果、適用する診療指針などによって異なります。']],['ascus']);
 add(112,'HBOCの遺伝形式',[1],'HBOCの腫瘍素因は常染色体顕性（優性）遺伝であり、潜性（劣性）とする説明が誤りです。BRCA1・BRCA2の病的バリアントを受け継ぐことと、必ずがんを発症することは同じではありません。',[
  ['1','遺伝するのは発症リスクを高める素因であり、発症には不完全浸透があります。'],['学習の要点','BRCA関連の卵巣・卵管癌では高異型度漿液性癌が重要です。リスク低減手術も、将来の関連がんリスクを完全にゼロにするものではありません。']],['brca']);
 add(117,'胞状奇胎の鑑別と絨毛癌',[3,5],'p57KIP2免疫染色による全胞状奇胎の鑑別と、絨毛癌の化学療法感受性を選びます。p57は母由来アレルの発現を反映し、通常の全胞状奇胎では絨毛細胞性栄養膜・絨毛間質で陰性になります。内部陽性対照と形態を併せて評価します。',[
  ['3','p57は有用ですが、単独ですべての胞状奇胎の分類を完結できるわけではありません。必要に応じて遺伝子型の解析などを併用します。'],['5','妊娠性絨毛癌では化学療法への高い感受性が重要です。病期やリスク評価により治療法は異なります。'],['1・2・4','絨毛性疾患は良性病変も含みます。部分胞状奇胎は通常父母双方のゲノムを含み、PSTTでもhCGが上昇し得ます。']],['gtd','p57'],'multiple');
}
