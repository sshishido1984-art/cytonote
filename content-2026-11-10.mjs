// 公式正答未確認。資料に基づく独自解答。
// 出典は NCI PDQ の本文、または PubMed 抄録で記載を確認したもの。抄録のみの資料は kind に明記。
export function addThirdBatch(add,S,source){
 const pdq='公的機関の医学解説（二次資料・本文確認）';
 const abs=kind=>`${kind}（抄録確認）`;
 const pm=id=>`https://pubmed.ncbi.nlm.nih.gov/${id}/`;
 S.nsclcNCI=source('NCI PDQ · Non-Small Cell Lung Cancer Treatment','https://www.cancer.gov/types/lung/hp/non-small-cell-lung-treatment-pdq','PD-L1発現（免疫組織化学）とペムブロリズマブ / NTRK融合・HER2バリアントに対する治療',pdq);
 S.alkIhc=source('Nambirajan et al. · Arch Pathol Lab Med（2024）',pm(38054562),'Abstract：ALK（D5F3）はALK阻害薬のコンパニオン診断、ROS1の免疫染色はスクリーニング',abs('原著論文'));
 S.predictiveIhc=source('Vranić et al. · Biomol Biomed（2026）',pm(42522678),'Abstract：非小細胞肺癌の治療効果予測における免疫組織化学の位置づけ',abs('総説'));
 S.panTrk=source('Hyrcza et al. · Mod Pathol（2024）',pm(37972928),'Abstract：pan-TRK免疫染色はスクリーニング検査',abs('原著論文'));
 S.dsvPtc=source('Pillai et al. · Crit Rev Oncol Hematol（2015）',pm(25577570),'Abstract：びまん性硬化型乳頭癌の線維化、扁平上皮化生、多数の砂粒体',abs('総説'));
 S.pdtc=source('Xu & Ghossein · Semin Diagn Pathol（2020）',pm(32360274),'Abstract：低分化癌のTurin基準（充実性・索状・島状構造）',abs('総説'));
 S.tallCell=source('Samankan et al. · Pathol Res Pract（2022）',pm(35834884),'Abstract：論文が用いた高細胞型の定義（高さが幅の2倍以上、30％以上）',abs('原著論文'));
 S.bladderNCI=source('NCI PDQ · Bladder Cancer Treatment','https://www.cancer.gov/types/bladder/hp/bladder-treatment-pdq','組織型：小細胞癌・腺癌 / 尿膜管由来の腺癌は膀胱頂部',pdq);
 S.sccBladder=source('Ismaili · Orphanet J Rare Dis（2011）',pm(22078012),'Abstract：膀胱小細胞癌は他の組織型の癌との併存が多い',abs('総説'));
 S.rmsNCI=source('NCI PDQ · Childhood Rhabdomyosarcoma Treatment','https://www.cancer.gov/types/soft-tissue-sarcoma/hp/rhabdomyosarcoma-treatment-pdq','Incidence：症例の50％が10歳までに発生 / 原発部位：泌尿生殖器',pdq);
 S.bladderLymphoma=source('Venyo · Adv Urol（2014）',pm(24511310),'Abstract：膀胱リンパ腫はMALTリンパ腫、びまん性大細胞型B細胞リンパ腫が多い',abs('総説'));
 S.kikuchi=source('Dwivedi et al. · Cureus（2025）',pm(40462807),'Abstract：菊池病の穿刺吸引細胞診30例、三日月状核の組織球',abs('原著論文'));
 S.tbFna=source('Gupta et al. · Acta Cytol（1992）',pm(1580124),'Abstract：結核性リンパ節炎の穿刺吸引細胞診、類上皮細胞・Langhans型巨細胞・壊死',abs('原著論文'));
 S.csl=source('Jabcuga et al. · Am J Surg Pathol（2016）',pm(26551620),'Abstract：猫ひっかき病リンパ節炎の星芒状微小膿瘍',abs('原著論文'));
 S.sarcoid=source('Sreeja et al. · J Oral Maxillofac Pathol（2022）',pm(35968162),'Abstract：サルコイドーシスは非乾酪性肉芽腫',abs('総説'));
 S.asthmaSputum=source('Sakula · Thorax（1986）',pm(3538483),'表題：喘息患者の喀痰にみられるシャルコー・ライデン結晶とクルシュマン螺旋体','論文（表題のみ確認・抄録なし）');
 S.ferruginous=source('Ghio et al. · J Environ Pathol Toxicol Oncol（2021）',pm(33639069),'Abstract：喀痰・気管支肺胞洗浄液の含鉄小体',abs('総説'));
 S.cryptoCapsule=source('Lazcano et al. · Arch Pathol Lab Med（1991）',pm(1720948),'Abstract：クリプトコッカスの莢膜と粘液染色',abs('原著論文'));
 S.lipoid=source('Yokohori et al. · 日本呼吸器学会雑誌（2002）',pm(12382424),'Abstract：外因性リポイド肺炎の洗浄液にみられる脂肪貪食マクロファージ（Sudan Ⅲ）',abs('症例報告'));
 S.abpaPath=source('Bosken et al. · Am J Surg Pathol（1988）',pm(3344888),'Abstract：ABPAの粘液栓にみられる多数の好酸球とシャルコー・ライデン結晶',abs('原著論文'));
 S.abpaCyto=source('Aubry & Fraser · Mod Pathol（1998）',pm(9688180),'Abstract：気管支洗浄細胞診で好酸球、シャルコー・ライデン結晶、菌糸を含む粘液',abs('原著論文'));
 S.aspHyphae=source('Son et al. · Infect Dis（2020）',pm(31973617),'Abstract：鋭角分岐、隔壁、平行な壁、均一な幅の菌糸',abs('原著論文'));
 S.oxalate=source('Reyes et al. · Acta Cytol（1979）',pm(285553),'Abstract：呼吸器検体のシュウ酸カルシウム結晶とAspergillus niger感染',abs('症例報告'));
 S.olp=source('Spirito et al. · Med Oral Patol Oral Cir Bucal（2024）',pm(38288854),'Abstract：口腔扁平苔癬の最多罹患部位は頬粘膜（小児例の系統的レビュー）',abs('系統的レビュー'));
 S.amelo=source('Hendra et al. · Oral Dis（2020）',pm(30614154),'Abstract：エナメル上皮腫の好発部位は下顎骨',abs('系統的レビュー・メタ解析'));
 S.tongueScc=source('Khalesi et al. · Adv Biomed Res（2023）',pm(37200763),'Abstract：舌扁平上皮癌の最多発生部位は舌縁',abs('原著論文'));
 S.milan=source('Jalaly et al. · Diagn Cytopathol（2020）',pm(32640095),'Abstract：ミラノシステムのカテゴリーⅠ〜Ⅵ（Ⅳはa・bに細分）',abs('総説'));
 S.secretory=source('Asai et al. · Pathol Int（2021）',pm(33848386),'Abstract：分泌癌はETV6-NTRK3融合遺伝子を特徴とする',abs('症例報告・文献レビュー'));
 S.mecFusion=source('Chen et al. · JCI Insight（2021）',pm(33830080),'Abstract：粘表皮癌のCRTC1-MAML2融合遺伝子',abs('原著論文'));
 S.sdcAr=source('Udager & Chiosea · Head Neck Pathol（2017）',pm(28321773),'Abstract：唾液腺導管癌の診断におけるアンドロゲン受容体の免疫染色',abs('総説'));
 S.paMalignant=source('Hernandez-Prera et al. · Histopathology（2021）',pm(33368685),'Abstract：多形腺腫の悪性転化（多形腺腫由来癌）',abs('総説'));
 S.childLiverNCI=source('NCI PDQ · Childhood Liver Cancer Treatment','https://www.cancer.gov/types/liver/hp/child-liver-treatment-pdq','Tumor markers：小児の肝悪性腫瘍におけるAFP',pdq);
 S.hcaOc=source('Renzulli et al. · World J Gastroenterol（2019）',pm(31171888),'Abstract：肝細胞腺腫と経口避妊薬の関連',abs('総説'));
 S.hepaticAml=source('Liu et al. · World J Gastroenterol（2016）',pm(27239117),'Abstract：肝の類上皮型血管筋脂肪腫でHMB-45、Melan-Aが陽性',abs('原著論文'));
 S.flc=source('Chaudhari et al. · Chin Clin Oncol（2018）',pm(30395718),'Abstract：Fibrolamellar carcinomaは背景肝疾患のない思春期・若年成人に好発',abs('総説'));
 S.hccBile=source('Barten · Zentralbl Allg Pathol（1989）',pm(2543163),'Abstract：肝細胞癌の穿刺吸引細胞診にみられる胆汁色素',abs('原著論文'));
 S.ipnb=source('Nakanuma et al. · J Hepatobiliary Pancreat Sci（2018）',pm(29272078),'Abstract：日韓の病理医によるIPNBのtype 1・type 2分類',abs('専門家合意声明'));
 S.pbm=source('Miyazaki et al. · J Hepatobiliary Pancreat Surg（2008）',pm(18274840),'Abstract：膵・胆管合流異常と胆嚢癌・胆管癌のリスク（胆管拡張の有無による違い）',abs('診療ガイドライン関連論文'));
 S.mcnLiver=source('Hutchens et al. · Hepat Med（2023）',pm(37016682),'Abstract：肝粘液嚢胞性腫瘍の女性優位と卵巣様間質',abs('総説'));
 S.endoPrevNCI=source('NCI PDQ · Endometrial Cancer Prevention','https://www.cancer.gov/types/uterine/hp/endometrial-prevention-pdq','Risk factors：エストロゲンと子宮内膜の増殖・増殖症・癌 / Unopposed estrogen',pdq);

 add(20,'肺癌の治療効果を予測する免疫染色',[1,5],'ALKとPD-L1を選びます。ALKの免疫染色はALK阻害薬の、PD-L1の免疫染色は免疫チェックポイント阻害薬の適応判断に使われます。「診断に使う抗体」と「治療薬の選択に使う抗体」を分けて整理します。',[
 ['1','ALK（D5F3）の免疫染色は、ALK阻害薬のコンパニオン診断として使われます。'],
 ['2','pan-TRKの免疫染色はNTRK融合のスクリーニングとして位置づけられ、陽性例は遺伝子検査で確認します。単独で治療効果を予測する検査とは扱いません。'],
 ['3','NCIの解説は、肺癌のHER2標的治療の対象をHER2遺伝子バリアントとしています。乳癌・胃癌のHER2免疫染色とは位置づけが異なります。'],
 ['4','TTF-1は肺腺癌の組織型・原発巣の推定に使う抗体であり、治療効果を予測する抗体ではありません。'],
 ['5','NCIの解説に、PD-L1を高発現する腫瘍（免疫組織化学で評価）でペムブロリズマブによる生存改善が記載されています。'],
 ['注意点','コンパニオン診断薬の承認状況は国・時期で変わります。日本での現在の承認・保険適用は、最新の肺癌診療ガイドラインと添付文書で確認してください。本解説は2026年11月時点で確認できた資料に基づきます。']
 ],['nsclcNCI','alkIhc','predictiveIhc','panTrk'],'multiple');

 add(44,'甲状腺癌の亜型と細胞・組織所見',[4],'びまん性硬化型乳頭癌の多数の砂粒体と、高細胞型乳頭癌の細胞の高さの定義を選びます。C・Dの組合せです。A・B・Eは、いずれも別の腫瘍の所見との取り違えです。',[
 ['A','扁平上皮化生はびまん性硬化型乳頭癌の特徴です。髄様癌の代表的所見ではありません。'],
 ['B','低分化癌は充実性・索状・島状の構造が基準です。乳頭状集塊を特徴とはしません。'],
 ['C','びまん性硬化型乳頭癌では、線維化、扁平上皮化生、多数の砂粒体がみられます。'],
 ['D','高細胞型は、幅に対して丈が高い腫瘍細胞で定義されます。他の4つが明らかに誤りであるため、この記述を正しいものとして選びます。'],
 ['E','すりガラス状核は乳頭癌の核所見です。濾胞癌の診断は被膜浸潤・脈管侵襲で行います。'],
 ['注意点','高細胞型の「高さが幅の何倍か」は版によって異なります。今回確認できた2022年の論文は「2倍以上」の定義を用いていました。原本の「3倍以上」という数値は今回の調査で一次資料を確認できていません。WHO分類第5版・甲状腺癌取扱い規約の原典で確認してください。']
 ],['dsvPtc','pdtc','tallCell'],'combination');

 add(59,'泌尿器悪性腫瘍の組織型と好発',[2,4],'膀胱の小細胞神経内分泌癌は尿路上皮癌などと併存することが多く、膀胱の横紋筋肉腫は小児に好発します。この2つを選びます。',[
 ['1','膀胱頂部は尿膜管由来の腺癌の好発部位として整理します。尿路上皮癌の好発部位ではありません。'],
 ['2','膀胱の小細胞癌は、他の組織型の癌との併存が多いと報告されています。'],
 ['3','腎癌（腎細胞癌）の細胞が尿中に出現することは少なく、「しばしばみられる」とはいえません。この点は一般的見解として記載しており、今回の調査で頻度の数値は確認していません。'],
 ['4','横紋筋肉腫は小児の腫瘍で、症例の半数が10歳までに発生します。泌尿生殖器は代表的な原発部位です。'],
 ['5','膀胱原発リンパ腫はMALTリンパ腫などB細胞性が主体です。']
 ],['bladderNCI','sccBladder','rmsNCI','bladderLymphoma'],'multiple');

 add(60,'リンパ節病変と特徴的所見',[1,5],'結核性リンパ節炎のLanghans型巨細胞と、亜急性壊死性リンパ節炎（菊池病）の三日月状核をもつ組織球を選びます。肉芽腫をつくる疾患は、壊死の有無と種類で区別します。',[
 ['1','結核性リンパ節炎の穿刺吸引細胞診では、類上皮細胞集塊、Langhans型巨細胞、壊死がみられます。'],
 ['2','反応性濾胞過形成は多彩なリンパ球と胚中心由来の細胞が主体です。肉芽腫性膿瘍は特徴ではありません。'],
 ['3','猫ひっかき病は星芒状の微小膿瘍を伴う肉芽腫が特徴です。Schaumann小体はサルコイドーシスなどでみられる所見として整理します。'],
 ['4','サルコイドーシスは非乾酪性の類上皮細胞肉芽腫です。乾酪壊死は結核を考える所見です。'],
 ['5','菊池病では、核片を貪食し核が三日月状に偏在する組織球が一貫してみられると報告されています。'],
 ['注意点','巨細胞や肉芽腫だけで結核と断定はできません。抗酸菌染色、培養、遺伝子検査などと合わせて判断されます。']
 ],['tbFna','kikuchi','csl','sarcoid'],'multiple');

 add(68,'呼吸器疾患と非細胞成分の対応',[4],'気管支喘息—クルシュマン螺旋体、アスベスト肺—含鉄小体、好酸球性肺炎—シャルコー・ライデン結晶、クリプトコッカス症—莢膜の4つがすべてそろう選択肢4を選びます。',[
 ['B—b','クルシュマン螺旋体は細気管支内で濃縮された粘液の鋳型で、喘息患者の喀痰にみられます。喘息に特異的ではなく、慢性気管支炎などでも出現します。'],
 ['C—a','含鉄小体は、吸入された繊維や粒子が鉄を含む蛋白で覆われたものです。石綿を芯とするものがアスベスト小体です。'],
 ['D—d','シャルコー・ライデン結晶は好酸球に由来する結晶で、好酸球が増える病態でみられます。'],
 ['E—c','クリプトコッカスは厚い莢膜を持ちます。今回確認した資料は莢膜が粘液染色（mucicarmine、Alcian blue）で染まることを示しています。PAS反応では主に菌体が染まるため、原本の「PAS陽性の莢膜構造」という表現はやや不正確です。'],
 ['A—e','Sudan Ⅲ陽性の脂肪滴は、本来はリポイド肺炎の脂肪貪食マクロファージでみられる所見です。過敏性肺炎の特徴的所見としては確認できませんでした。'],
 ['注意点','A—eの対応は教科書的な組合せとして確認できていません。他の4つの対応から選択肢4を選んでいます。公式正答が確認できた時点で見直します。']
 ],['asthmaSputum','ferruginous','cryptoCapsule','lipoid']);

 add(72,'アスペルギルスの形態と関連所見',[5],'アレルギー性気管支肺アスペルギルス症（ABPA）の粘液栓や細胞診検体で多数みられるのは好酸球です。好中球とする記述が誤りです。',[
 ['1・2','アスペルギルスの菌糸は隔壁を持ち、壁が平行で幅が一定です。鋭角に分岐します。くびれを示すカンジダの仮性菌糸や、幅が不整なムーコルと区別します。'],
 ['3','真菌の細胞壁はPAS反応とGrocott染色で染まります。この点は一般的な染色の知識として記載しています。'],
 ['4','Aspergillus niger感染では、呼吸器検体に複屈折性のシュウ酸カルシウム結晶がみられ、診断の手がかりになります。'],
 ['5','ABPAの粘液には多数の好酸球とシャルコー・ライデン結晶が含まれます。気管支洗浄の細胞診でも同様の所見が報告されています。'],
 ['注意点','ABPAの病理組織では、細気管支内に壊死した好中球と好酸球が混在する病変も報告されています。好中球が全く出ないという意味ではありません。']
 ],['abpaPath','abpaCyto','aspHyphae','oxalate']);

 add(81,'口腔疾患と好発部位',[4],'口腔扁平苔癬—頬粘膜、エナメル上皮腫—下顎骨の組合せを選びます。C・Dです。粘膜の病変と顎骨内の病変を分け、それぞれの好発部位を対応させて整理します。',[
 ['A','白板症は頬粘膜、舌、歯肉などに多くみられます。口腔底を好発部位とはしません。部位別の頻度は今回の調査で一次資料を確認していません。'],
 ['B','エプーリスは歯肉に生じる限局性の腫瘤を指す用語です。舌縁部ではありません。'],
 ['C','口腔扁平苔癬の最多罹患部位は頬粘膜です。'],
 ['D','エナメル上皮腫は下顎骨に好発します。'],
 ['E','舌の扁平上皮癌は舌縁に最も多く発生します。舌背は好発部位ではありません。'],
 ['注意点','Cの根拠は小児例の系統的レビューです。成人でも頬粘膜が代表的な部位とされますが、成人の頻度の数値は今回確認していません。']
 ],['olp','amelo','tongueScc'],'combination');

 add(86,'唾液腺腫瘍の遺伝子・免疫染色・報告様式',[5],'唾液腺細胞診のミラノシステムは、カテゴリーⅠ〜Ⅵの6つで構成されます。カテゴリーⅣ（腫瘍）は良性（Ⅳa）と悪性度不明（Ⅳb）に細分されます。',[
 ['1','多形腺腫は悪性転化することがあり、多形腺腫由来癌として知られています。'],
 ['2','粘液背景を特徴とする記述は、筋上皮癌の代表的所見としては確認できませんでした。筋上皮性腫瘍では粘液様の基質を伴う例もあるため、この選択肢だけで判断せず、5が明確に正しいことから選びます。'],
 ['3','ETV6::NTRK3融合遺伝子は分泌癌の特徴です。粘表皮癌ではCRTC1::MAML2融合遺伝子が代表的です。'],
 ['4','アンドロゲン受容体の発現は唾液腺導管癌の特徴で、診断に利用されます。多形腺腫の特徴ではありません。'],
 ['5','細分したⅣa・Ⅳbを別に数えると7区分になりますが、カテゴリーの数は6つです。']
 ],['milan','secretory','mecFusion','sdcAr','paMalignant']);

 add(92,'肝腫瘍と腫瘍マーカー・背景因子',[1],'肝芽腫で上昇する代表的な腫瘍マーカーはAFP（α-フェトプロテイン）です。CA19-9とする対応が誤りです。他の4つは、腫瘍の由来や背景因子と整合する記述です。',[
 ['1','NCIの解説は、小児の肝悪性腫瘍の診断と経過観察にAFPが有用としています。AFPは良性腫瘍でも上昇することがあり、単独で悪性と断定はできません。'],
 ['2','肝細胞癌の細胞診では、腫瘍細胞内や毛細胆管内の胆汁色素が肝細胞由来を示す手がかりになります。'],
 ['3','肝の血管筋脂肪腫はHMB-45、Melan-Aなどのメラノサイト系マーカーが陽性です。'],
 ['4','肝細胞腺腫は経口避妊薬などのステロイド薬の使用と関連し、若年〜中年の女性に多くみられます。'],
 ['5','Fibrolamellar carcinomaは、背景に肝疾患・肝硬変のない思春期・若年成人に好発します。アジアでは非常にまれと報告されています。']
 ],['childLiverNCI','hccBile','hepaticAml','hcaOc','flc']);

 add(96,'胆道・肝の腫瘍性病変',[3,4],'胆管内乳頭状腫瘍（IPNB）のtype 1・type 2分類と、膵・胆管合流異常が胆道癌の危険因子であることを選びます。',[
 ['1','肝粘液嚢胞性腫瘍は卵巣様間質を伴い、女性に好発します。'],
 ['2','早期の胆嚢癌は無症状のことが多く、黄疸は進行して胆管が閉塞した段階でみられる症状です。この点は一般的見解として記載しています。'],
 ['3','日本と韓国の病理医による合意声明で、膵IPMNに類似するtype 1と、より複雑な構造を示すtype 2に分類されました。'],
 ['4','胆管拡張を伴う膵・胆管合流異常は胆嚢癌と胆管癌の、胆管拡張を伴わない合流異常は胆嚢癌の危険因子と報告されています。'],
 ['5','低異型度の上皮内腫瘍で結合性の低下を特徴とする記述は確認できませんでした。結合性の低下は一般に高異型度の病変や癌を考える所見です。'],
 ['注意点','4は、合流異常のすべての型で肝外胆管癌が増えるという意味ではありません。胆管拡張の有無でリスクのある部位が異なります。']
 ],['ipnb','pbm','mcnLiver'],'multiple');

 add(114,'婦人科疾患と薬物療法',[4],'子宮内膜増殖症にエストロゲン単独の製剤（結合型エストロゲン）を使う対応が誤りです。エストロゲンは子宮内膜の増殖・増殖症・癌と関連し、増殖症の薬物療法には黄体ホルモン製剤が使われます。',[
 ['1・2・3・5','低用量エストロゲン・プロゲスチン配合薬と月経困難症、GnRHアンタゴニストと子宮筋腫、黄体ホルモン製剤と子宮内膜症、エストロゲン・黄体ホルモンの経皮吸収型製剤と更年期障害は、いずれも治療として用いられる組合せです。'],
 ['4','NCIの解説は、エストロゲンが子宮内膜の増殖、増殖症、癌と関連すること、黄体ホルモンを併用しないエストロゲン療法が危険因子であることを示しています。'],
 ['注意点','1・2・3・5の各薬剤の日本での効能・効果は、今回の調査で添付文書を確認していません。一般的な治療の組合せとして記載しています。個々の患者の治療選択は医師が判断する領域です。']
 ],['endoPrevNCI']);
}
