// 第2回追加。公式正答未確認のため、すべて文献調査による独自解答。
export function addSecondBatch(add,S,source){
 Object.assign(S,{
  mastSIU:source('Southern Illinois University · Connective Tissue Study Guide','https://histology.siu.edu/intro/ct.htm','Mast cells：顆粒内のヒスタミン・ヘパリン','大学教材（二次資料）'),
  vaginaSIU:source('Southern Illinois University · Vagina (PAS stain)','https://histology.siu.edu/erg/RE205b.htm','Notes：腟上皮細胞内のグリコーゲン','大学教材（二次資料）'),
  ihcMichigan:source('University of Michigan · IHC Antibody List','https://www.pathology.med.umich.edu/immunohistochemistry/ihc-antibody-list','PAX-8：Staining Pattern / D2-40','大学病理部門の検査資料'),
  acinicMilan:source('University of Wisconsin–Madison / Milan Atlas · Acinic cell carcinoma','https://milan.soc.wisc.edu/ViewItem.aspx?id=1659','Cytomorphologic Criteria：PAS陽性・ジアスターゼ抵抗性の顆粒','大学・学会教材（二次資料）'),
  gillVigo:source('University of Vigo · Gill’s hematoxylin','https://mmegias.webs.uvigo.es/02-english/6-tecnicas/protocolos/s-colorante-hem-Gill.php','Procedure：試薬の組成','大学実習プロトコル'),
  gillBSC:source('Biological Stain Commission · FAQ','https://biologicalstaincommission.org/faq-list/','MayerとGillの組成の比較：chloral hydrate / ethylene glycol','染色標準化団体の技術解説'),
  abpasVigo:source('University of Vigo · Alcian blue / PAS','https://mmegias.webs.uvigo.es/02-english/6-tecnicas/protocolos/p-tincion-pas-azul-alcian.php','Procedure 7〜11 / Results / Notes：染色順序とSchiff試薬の使用温度','大学実習プロトコル'),
  thyroidNUS:source('National University of Singapore · FNA: Thyroid','https://medicine.nus.edu.sg/pathweb/cytopath/picture-atlas/fna-thyroid/','Benign Case 1–3 / Papillary thyroid carcinoma：コロイド、巨細胞、リンパ球','大学細胞診教材（二次資料）'),
  mediastinalGerm:source('Fichtner et al. · Primary germ cell tumours of the mediastinum（2024）','https://onlinelibrary.wiley.com/doi/full/10.1111/his.15090','Primary mediastinal yolk sac tumour / Primary mediastinal choriocarcinoma、Figures 4–5','総説（二次資料・本文確認）'),
  lungAdeno:source('University of Pittsburgh · Case 1097: 肺腺癌の細胞所見','https://path.upmc.edu/cases/case1097/dx.html','Discussionの肺腺癌の説明：eccentrically placed nuclei、nucleoli、mucin vacuoles','大学症例教材（二次資料）'),
  airwayDuke:source('Duke University · Respiratory System','https://histology.oit.duke.edu/MBS/SysSci/SS-Respiratory/SS-Respiratory.html','Overview表 / Larynx and trachea：部位別の被覆上皮','大学教材（二次資料）'),
  salivaryNUS:source('National University of Singapore · FNA: Salivary gland','https://medicine.nus.edu.sg/pathweb/cytopath/picture-atlas/fna-salivary-gland/','Warthin tumour / Pleomorphic adenoma：上皮と背景成分','大学細胞診教材（二次資料）'),
  ductJapan:source('日本の304例による唾液腺導管癌の多施設研究（2022）','https://pubmed.ncbi.nlm.nih.gov/35352425/','Abstract / Results：高齢者と男性が多い対象集団','原著研究（抄録確認）'),
  wartsCDC:source('CDC · Anogenital Warts','https://www.cdc.gov/std/treatment-guidelines/anogenital-warts.htm','冒頭：低リスクHPV 6型・11型との関連','公式ガイドライン'),
  placenta:source('Graham J Burton · Human Placental Structure and Development（2014）','https://www.nichd.nih.gov/sites/default/files/about/meetings/2014/Documents/BurtonWashington2014.pdf','The placental cell types / Implantation：栄養膜の層構造','大学研究者の講義資料（二次資料・NIH公開）'),
  endometrium:source('Fadare & Parkash · Diagnosis of Neoplasia in Endometrial Biopsies','https://assets.cambridge.org/97811070/40434/excerpt/9781107040434_excerpt.pdf','Chapter 1、9–10ページ：増殖期と分泌期、核分裂の時期による変化','医学専門書（二次資料・出版社公開抜粋）'),
  reinkeJSCC:source('新井ほか · Reinke結晶が多数認められた卵巣間質性Leydig細胞腫の1例（1997）','https://www.jstage.jst.go.jp/article/jjscc1962/36/5/36_5_517/_article/-char/en','Abstract：Leydig細胞とReinke結晶の対応','原著症例報告（抄録確認）'),
  hpvIARC:source('IARC Monographs Volume 90 · Human Papillomaviruses','https://publications.iarc.fr/_publications/media/download/2807/b70ca8ae7bb3eafb6a0e98d6ae7a554e36e302ab.pdf','検出方法の解説：PCRとin-situ hybridization（PDF 58ページ付近）。検出原理を参照','国際機関の評価資料'),
  hpvCDC:source('CDC Pink Book · Chapter 11: Human Papillomavirus','https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-11-human-papillomavirus.html','Human Papillomavirus / HPV Vaccines：DNA、高リスク型、予防の目的','公式医学教材（二次資料）')
 });
 add(18,'細胞に含まれる顆粒と物質',[4,5],'肥満細胞のヒスタミンと、腟扁平上皮細胞のグリコーゲンを選びます。肥満細胞は炎症反応に関わる物質を顆粒に蓄え、腟上皮では細胞質のグリコーゲンをPAS反応で確認できます。顆粒の見え方と、その中の物質を対応させて学びましょう。',[
  ['4','肥満細胞の顆粒にはヒスタミンやヘパリンなどが含まれます。'],['5','腟上皮細胞内に蓄積するグリコーゲンが対応します。'],['注意点','PAS反応はグリコーゲン以外にも陽性となるため、PAS陽性だけで物質を断定しません。']],['mastSIU','vaginaSIU'],'multiple');
 add(23,'免疫染色の陽性部位',[4],'C・Dを選びます。D2-40（Podoplanin）は細胞膜、PAX8は核を評価します。免疫染色では「茶色く染まった」ことだけでなく、目的とする細胞の、正しい部位に染まっているかを確認することが大切です。',[
  ['C','D2-40は膜に沿った染色を評価します。'],['D','PAX8は核内の陽性所見を評価します。細胞質だけの着色とは区別します。'],['学習の要点','染色部位、内部対照、背景染色を確認してから陽性・陰性を判断します。']],['ihcMichigan','meso2024'],'combination');
 add(30,'腺房細胞癌の顆粒と消化試験',[4],'唾液腺腺房細胞癌のチモーゲン顆粒はPAS陽性を示し、ジアスターゼ消化に抵抗性です。グリコーゲン由来のPAS反応との区別に、消化後に染色が残るかという視点を使います。陽性物質の性状を調べる意味を理解しましょう。',[
  ['4','消化後も残るPAS陽性顆粒が、腺房分化を考える手掛かりになります。'],['注意点','顆粒の量には差があり、すべての検体で明瞭に観察できるわけではありません。形態や他の検査と併せて判断します。']],['acinicMilan']);
 add(32,'ヘマトキシリンの処方を区別する',[3],'Gillのヘマトキシリンに抱水クロラールが含まれるとする記述が誤りです。代表的なGillの処方ではエチレングリコールを用い、抱水クロラールはMayerの処方との比較で整理します。似た名称の染色液でも組成は同じではありません。',[
  ['3','大学のGill処方には、エチレングリコール、ヘマトキシリン、ヨウ素酸ナトリウム、硫酸アルミニウム、酢酸などが示されています。'],['注意点','市販品には改変処方もあります。実際の試薬の扱いは製品説明書を確認し、名称だけで調製・操作条件を決めないようにします。']],['gillVigo','gillBSC']);
 add(36,'PAS反応とAlcian blueの重染色',[1,4],'PAS反応によるグリコーゲンの赤紫色と、Alcian blueを先に行う重染色の順序を選びます。重染色では、酸性粘液を青色に染める操作の後にPAS反応を行い、染色性の違いを観察します。',[
  ['1','PAS反応の赤紫色と、検出対象の糖質を対応させます。グリコーゲンの同定には消化試験も役立ちます。'],['4','大学プロトコルでも、Alcian blue→過ヨウ素酸→Schiff試薬の順です。'],['2','Schiff試薬の冷蔵保存と、染色時の温度は別です。参照プロトコルでは室温に戻して使用します。']],['abpasVigo','mucin'],'multiple');
 add(57,'良性甲状腺病変のコロイドと巨細胞',[1,4],'腺腫様甲状腺腫での液状コロイドと、亜急性甲状腺炎での多核巨細胞を選びます。コロイドの性状だけでなく、濾胞上皮、炎症細胞、巨細胞の組合せを確認することが重要です。',[
  ['1','コロイド結節では薄く広がるコロイドと、均一な濾胞上皮のシートが手掛かりです。'],['4','亜急性甲状腺炎では、大型の多核巨細胞や類上皮細胞性肉芽腫がみられます。'],['注意点','多核巨細胞は他の甲状腺病変でもみられます。一つの所見だけで診断を固定しないようにします。']],['thyroidNUS'],'multiple');
 add(65,'縦隔胚細胞腫瘍と絨毛癌の形態',[4],'誤りはC・Dです。若年男性の縦隔腫瘤と著明なβ-hCG上昇から、設問では絨毛癌成分を考えます。細胞性栄養膜細胞と合胞体栄養膜細胞からなりますが、正常胎盤のような間質を含む絨毛構造は形成しません。',[
  ['C','Schiller–Duval小体は卵黄嚢腫瘍の特徴として整理します。'],['D','栄養膜細胞の増殖と、間質を持つ絨毛そのものの形成を区別します。'],['注意点','縦隔の胚細胞腫瘍は複数成分が混在することがあります。血清マーカーだけで全組織型を確定するという意味ではありません。']],['mediastinalGerm'],'combination');
 add(70,'肺腺癌の核の位置',[3],'類円形の核が偏在する所見を選びます。腺癌では細胞質や粘液空胞との位置関係により、核が細胞の一側へ寄ってみえることがあります。核の位置に加えて、核小体、クロマチン、集塊の構築を併せて観察します。',[
  ['3','腺系の分化を考える基本的な細胞所見です。'],['注意点','核偏在は腺癌だけに特異的ではなく、肺腺癌でもすべての細胞が同じ形を示すわけではありません。']],['lungAdeno']);
 add(71,'気道の部位と被覆上皮',[3],'呼吸細気管支を選びます。気管や気管支の多列線毛円柱上皮から、末梢へ進むにつれて上皮は低くなり、呼吸細気管支では単層立方上皮と、壁に開口する肺胞が特徴になります。',[
  ['3','多列線毛円柱上皮で被覆される中枢気道との違いを押さえます。'],['注意点','呼吸細気管支の近位側には線毛細胞が残ることがあります。「線毛がある」と「多列線毛上皮である」は同じではありません。喉頭でも真声帯は重層扁平上皮です。']],['airwayDuke']);
 add(87,'唾液腺導管癌の好発背景',[5],'候補の中では唾液腺導管癌を選びます。高齢の男性に多いという傾向があり、日本の多施設症例研究でもそれと整合する年齢・性別の分布が示されています。好発背景は診断の補助情報として使います。',[
  ['5','唾液腺導管癌を、年齢・性別の傾向と結びつけて整理します。'],['注意点','女性や若年者に発生しないという意味ではありません。年齢と性別だけで腫瘍型を決めず、病理所見を確認します。']],['ductJapan']);
 add(90,'ワルチン腫瘍の構成成分',[1],'軟骨細胞を特徴とする記述が誤りです。ワルチン腫瘍ではオンコサイト性上皮、リンパ球、嚢胞内容に由来する蛋白様物質やデブリの組合せが手掛かりです。軟骨様の間質を伴う多形腺腫との違いを整理します。',[
  ['1','軟骨様間質を代表的な構成成分とする腫瘍は、多形腺腫との対比で覚えます。'],['学習の要点','上皮細胞だけでなく、背景のリンパ球や嚢胞性物質も診断に役立つ情報です。']],['salivaryNUS']);
 add(109,'尖圭コンジローマとHPV型',[5],'尖圭コンジローマとHPV 6型・11型の対応を選びます。これらは代表的な低リスク型であり、高リスク型HPVと同じ発がんリスクとして扱いません。HPVという名称だけでなく、型と関連病変を結びつけて学びます。',[
  ['5','CDCの指針でも、性器疣贅の主な原因として6型・11型が挙げられています。'],['注意点','これは代表的な原因型の対応です。別のHPV型の重複感染がないことを意味せず、疣贅の存在だけで高リスクHPV感染の有無は判断できません。']],['wartsCDC']);
 add(111,'胎盤絨毛の栄養膜細胞',[1],'合胞体栄養膜細胞は胎盤絨毛の外側を覆う層です。細胞性栄養膜細胞、絨毛間質、胎児血管との位置関係を整理しましょう。「細胞性」と「合胞体」の名称だけでなく、層構造として覚えることが要点です。',[
  ['1','多核の合胞体栄養膜が外側に位置します。'],['学習の要点','絨毛の外を満たす母体血と、絨毛内の胎児血管を区別すると、栄養膜の位置を理解しやすくなります。']],['placenta']);
 add(113,'子宮内膜の分泌期と核分裂',[4],'核分裂が多いことを分泌期の代表的特徴とする記述が誤りです。核分裂は増殖期で目立ち、分泌期の中期から後期には減少または消失します。分泌期初期に残る場合はあるため、「分泌期には絶対にない」とは覚えません。',[
  ['4','増殖期から分泌期への変化として、核分裂の減少を整理します。'],['学習の要点','核下空胞から核上・腺腔側への分泌の変化も、月経周期の時期と対応させて観察します。']],['endometrium']);
 add(115,'Reinke結晶とLeydig細胞',[5],'Reinke結晶はLeydig細胞に関連する特徴的な所見であり、セルトリ細胞腫との対応が誤りです。セルトリ細胞とLeydig細胞は、性索間質性腫瘍の中でも別の細胞成分として区別します。',[
  ['5','卵巣Leydig細胞腫の細胞診症例でも、Reinke結晶が報告されています。'],['注意点','Sertoli–Leydig細胞腫という複合した名称に注意します。そのLeydig成分に結晶を認める場合と、純粋なセルトリ細胞腫を混同しないようにします。結晶は全例で確認できるとは限りません。']],['reinkeJSCC']);
 add(120,'HPVのゲノム・検出法・予防',[2,3],'HPVの検出法としてISHとPCRがあること、および提示された16・18・31・33・52・58型が高リスク型であることを選びます。HPVは二本鎖DNAウイルスで、検出方法や型の分類と、感染予防の目的を分けて理解します。',[
  ['2','ISHは細胞・組織内の局在を保って核酸を検出する方法、PCRは標的核酸を増幅する方法です。'],['3','高リスク型への感染と発がんは同義ではありません。持続感染などの条件が重要です。'],['1・4・5','RNAウイルスではありません。感染者の発がん割合を一律の数値に固定せず、予防ワクチンも既存感染の治療とは区別します。']],['hpvIARC','hpvCDC'],'multiple');
}
