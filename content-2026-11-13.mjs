// 公式正答未確認。資料に基づく独自解答。
// 法令は e-Gov 法令検索の条文、通達・管理濃度は厚生労働省の公開PDF、顕微鏡はメーカー技術資料、
// 色素の分子量は PubChem、染色法は PMC 全文または PubMed 抄録で記載を確認した。
export function addFourthBatch(add,S,source){
 const law='法令（e-Gov法令検索・条文確認）';
 const gov='行政資料（本文確認）';
 const maker='メーカー技術資料（本文確認）';
 const abs=kind=>`${kind}（抄録確認）`;
 const pm=id=>`https://pubmed.ncbi.nlm.nih.gov/${id}/`;
 S.yukiRule=source('有機溶剤中毒予防規則（昭和47年労働省令第36号）','https://laws.e-gov.go.jp/law/347M50002000036','第1条第1項第3号・第4号（第1種・第2種有機溶剤等の定義） / 第28条第2項（6月以内ごとに1回の測定）',law);
 S.anzenRei=source('労働安全衛生法施行令（昭和47年政令第318号）','https://laws.e-gov.go.jp/law/347CO0000000318','別表第六の二第十一号（キシレン） / 別表第三第二号31の2（ホルムアルデヒド）',law);
 S.joseiRule=source('女性労働基準規則（昭和61年労働省令第3号）','https://laws.e-gov.go.jp/law/361M50002000003','第2条第1項第18号：対象となる化学物質にキシレンを含む',law);
 S.skinNotice=source('厚生労働省 · 皮膚吸収性有害物質に該当する化学物質等について（基発1118第2号、令和7年11月18日）','https://www.mhlw.go.jp/content/11300000/001596517.pdf','別添「皮膚吸収性有害物質一覧」63：キシレン',gov);
 S.kanriNoudo=source('厚生労働省 · 作業環境測定対象物質の管理濃度、試料採取方法及び分析方法（審議会参考資料4-4）','https://www.mhlw.go.jp/content/11201000/0000210065.pdf','表：ホルムアルデヒド 0.1ppm / キシレン 50ppm',gov);
 S.tokkaRule=source('特定化学物質障害予防規則（昭和47年労働省令第39号）','https://laws.e-gov.go.jp/law/347M50002000039','第36条（6月以内ごとに1回の測定、特別管理物質の測定記録は30年保存） / 第38条の4（作業の記録を30年保存）',law);
 S.sokuteiKijun=source('作業環境測定基準（昭和51年労働省告示第46号、厚生労働省審議会資料の抜粋）','https://www.mhlw.go.jp/content/11201000/0000192206.pdf','第2条第1項第2号（作業が定常的に行われている時間に行う） / 第10条第4項（特定化学物質への準用）',gov);
 S.dokugekiLaw=source('毒物及び劇物取締法（昭和25年法律第303号）','https://laws.e-gov.go.jp/law/325AC0000000303','別表第二（劇物）第81号：ホルムアルデヒド',law);
 S.dokugekiRei=source('毒物及び劇物指定令（昭和40年政令第2号）','https://laws.e-gov.go.jp/law/340CO0000000002','第2条（劇物）第97号：ホルムアルデヒド1％以下を含有するものを除く製剤',law);
 S.muWd=source('Nikon MicroscopyU · Working Distance and Parfocal Length','https://www.microscopyu.com/microscopy-basics/working-distance-and-parfocal-length','倍率・開口数が上がると作動距離は短くなる（Table 1）',maker);
 S.muObj=source('Nikon MicroscopyU · Introduction to Microscope Objectives','https://www.microscopyu.com/microscopy-basics/introduction-to-microscope-objectives','像面湾曲と平坦化補正（plan achromat / plan apochromat）',maker);
 S.muNd=source('Nikon MicroscopyU · Neutral Density Filter（用語集）','https://www.microscopyu.com/glossary/neutral-density-filter','全波長の光量を一様に減らすフィルター',maker);
 S.muColor=source('Nikon MicroscopyU · Color Balance in Digital Imaging','https://www.microscopyu.com/digital-imaging/color-balance-in-digital-imaging','色変換フィルターでハロゲン光（約3200K）を昼光（約5500K）に変換',maker);
 S.muErgo=source('Nikon MicroscopyU · Basic Microscope Ergonomics','https://www.microscopyu.com/microscopy-basics/basic-microscope-ergonomics','視度調整（近視・遠視の補正）と眼幅調整は別の調整',maker);
 S.papNuance=source('Sathawane et al. · Nuances of the Papanicolaou stain. Cytojournal（2022）','https://pmc.ncbi.nlm.nih.gov/articles/PMC9345133/','Box 3 Bluing（弱アルカリ液で色出し） / リンタングステン酸 / 染色液の交換目安','総説（PMC全文確認）');
 S.papReview=source('Marshall · Papanicolaou staining—a review. Microsc Acta（1983）',pm(6195507),'Abstract：陰イオン性色素の分子の大きさとリンタングステン酸による分別染色',abs('総説'));
 S.dryArtifact=source('Kamble et al. · Indian J Pathol Microbiol（2022）',pm(35074972),'Abstract：核所見の保持には直ちにアルコール固定が必要、固定の遅れで乾燥アーチファクト',abs('原著論文'));
 S.pubchemOG=source('PubChem · Orange G（C.I. Acid Orange 10, CID 16015）','https://pubchem.ncbi.nlm.nih.gov/compound/16015','分子量 452.4（C16H10N2Na2O7S2）','公的化合物データベース');
 S.pubchemEY=source('PubChem · Eosin Y（CID 11048）','https://pubchem.ncbi.nlm.nih.gov/compound/11048','分子量 691.9（C20H6Br4Na2O5）','公的化合物データベース');
 S.pubchemLG=source('PubChem · Light green SF yellowish（CID 21223）','https://pubchem.ncbi.nlm.nih.gov/compound/21223','分子量 792.9（C37H34N2Na2O9S3）','公的化合物データベース');
 S.congoPol=source('Desport et al. · AL amyloidosis. Orphanet J Rare Dis（2012）',pm(22909024),'Abstract：コンゴーレッド陽性沈着物の偏光下アップルグリーン複屈折',abs('総説'));
 S.colloidalHa=source('Griepentrog et al. · Ophthalmic Plast Reconstr Surg（2013）',pm(23299806),'Abstract：注入したヒアルロン酸ゲルの局在をHaleコロイド鉄染色で確認',abs('原著論文'));
 S.toluidineMast=source('Ribatti · The Staining of Mast Cells. Int Arch Allergy Immunol（2018）',pm(29597213),'Abstract：肥満細胞はトルイジンブルーで異染性を示す',abs('総説'));
 S.victoriaHbs=source('Tanaka et al. · Acta Pathol Jpn（1981）',pm(6165221),'Abstract：Victoria blue染色によるパラフィン切片のHBs抗原の検出',abs('原著論文'));

 add(21,'光学顕微鏡の部品と調整',[2],'プランレンズは像面湾曲を補正した対物レンズで、Eは正しい記述です。B・C・Dはいずれも誤りなので、Eを含む組合せのうちA・Eを選びます。',[
 ['A','ハロゲンランプの光（約3200K）は、色変換フィルターで昼光（約5500K）に近づけて観察・撮影します。原本の「5,500〜6,500K」という範囲そのものは、今回の資料では確認していません。'],
 ['B','対物レンズの作動距離は、倍率と開口数が上がるほど短くなります。'],
 ['C','NDフィルターは全波長の光量を一様に減らすフィルターで、色温度の調整には使いません。色温度は色変換（昼光）フィルターで合わせます。'],
 ['D','視度補正環は左右の眼の近視・遠視の差を補正するためのものです。眼幅の調整は別の操作です。'],
 ['E','像面湾曲を補正し、視野全体で焦点が合うようにした対物レンズをプラン（plan）系と呼びます。'],
 ['注意点','Aは、他の記述の正誤から選んだものです。実際に適した色温度は、照明の種類、フィルター、カメラのホワイトバランスで変わります。']
 ],['muColor','muWd','muNd','muErgo','muObj'],'combination');

 add(26,'Papanicolaou染色の試薬と色素',[4],'ヘマトキシリンの色出しには弱アルカリ性の液を使います。また、オレンジGの分子量はエオジンYより小さくなります。C・Dの2つが誤りです。',[
 ['A','総説は、染色枚数（約1,500〜2,000枚）を目安に染色液を交換するとしています。期間で交換する場合の基準は施設の手順書に従います。'],
 ['B','EA液にはリンタングステン酸が含まれ、pHを酸性に保ち、色素の結合を調整します。'],
 ['C','色出しは、水道水（pH 8以上の場合）、Scott液、炭酸リチウム、希アンモニア水などの弱アルカリ液で行います。酸性溶液ではありません。'],
 ['D','PubChemの分子量は、オレンジG 452.4、エオジンY 691.9、ライトグリーンSF 792.9です。オレンジGが最も小さい色素です。'],
 ['E','塗抹後すぐにアルコール固定しないと乾燥アーチファクトが生じ、核所見が損なわれます。'],
 ['注意点','色素の大きさが染まる細胞を決める、という説明は分別染色の主要な仮説の一つです。細胞質の密度やリンタングステン酸の作用も関与します。']
 ],['papNuance','papReview','pubchemOG','pubchemEY','pubchemLG','dryArtifact'],'combination');

 add(27,'特殊染色の対象物と観察法',[5],'コンゴーレッド染色のアミロイドは、偏光顕微鏡で緑色調（アップルグリーン）の複屈折を示します。「蛍光顕微鏡下」とするEは誤りです。A・B・Cは正しいため、Eを含む組合せのうちD・Eを選びます。',[
 ['A','コロイド鉄染色は酸性ムコ多糖を染め、ヒアルロン酸の検出にも使われます。ヒアルロニダーゼ消化と組み合わせると、ヒアルロン酸かどうかを確かめられます。'],
 ['B','肥満細胞の顆粒は、トルイジンブルーで異染性（メタクロマジー）を示します。'],
 ['C','Victoria blue染色はHBs抗原の検出に用いられます。弾性線維の染色にも使われます。'],
 ['D','脂肪は湿固定に使うアルコールに溶けるため、Oil red O染色は湿固定標本では行えません。新鮮材料、乾燥標本、ホルマリン固定の凍結切片などで行います。'],
 ['E','アップルグリーンの複屈折は偏光顕微鏡で観察する所見です。蛍光顕微鏡（Texas Redフィルター）で観察する方法もありますが、その場合は複屈折ではなく蛍光として観察します。'],
 ['注意点','Dの「アルコールで脂肪が溶ける」点は一般的な染色の知識として記載しています。今回の調査では一次資料を確認していません。']
 ],['congoPol','colloidalHa','toluidineMast','victoriaHbs'],'combination');

 add(29,'キシレンに関する法令',[3],'キシレンは女性労働基準規則の対象物質であり、第2種有機溶剤です。「女性則の対象ではない（B）」「第1種有機溶剤である（C）」の2つが誤りです。',[
 ['A','厚生労働省の皮膚吸収性有害物質の一覧（令和7年11月の通達）にキシレンが掲載されています。皮膚等障害化学物質等として、不浸透性の保護具の使用が義務となります。'],
 ['B','女性労働基準規則第2条の対象物質にキシレンが含まれます。'],
 ['C','有機則で第1種有機溶剤とされるのは、施行令別表第六の二第28号・第38号の物（1,2-ジクロロエチレン、二硫化炭素）です。キシレン（同第11号）は第2種有機溶剤です。'],
 ['D','有機則第28条により、第2種有機溶剤を扱う屋内作業場では6月以内ごとに1回、定期に濃度を測定します。'],
 ['E','作業環境評価基準の管理濃度は50ppmです。'],
 ['注意点','皮膚等障害化学物質の制度は2024年4月の施行後も、2025年11月に告示・一覧が改められました。最新の告示・通達を確認してください。']
 ],['yukiRule','anzenRei','joseiRule','skinNotice','kanriNoudo'],'combination');

 add(37,'ホルムアルデヒドに関する法令',[1,5],'ホルムアルデヒドの管理濃度は0.1ppmで、毒物及び劇物取締法では劇物に指定されています。この2つを選びます。',[
 ['1','作業環境評価基準の管理濃度は0.1ppmです。'],
 ['2','ホルムアルデヒドは特化則の特別管理物質です。作業の記録と測定の記録は30年間保存します。20年ではありません。'],
 ['3','作業環境測定は、作業が定常的に行われている時間に行います（作業環境測定基準第2条、第10条で準用）。業務後の測定ではありません。'],
 ['4','特化則第36条により、6月以内ごとに1回、定期に測定します。1年ごとではありません。'],
 ['5','毒物及び劇物取締法の別表第二（劇物）にホルムアルデヒドが掲げられています。ホルムアルデヒドを含む製剤も、1％以下を含有するものを除き劇物です。'],
 ['注意点','ホルマリン（ホルムアルデヒド水溶液）を扱う病理検査室では、測定結果に基づく管理区分の評価と改善措置も求められます。具体的な運用は、所轄の労働基準監督署や作業環境測定機関に確認してください。']
 ],['kanriNoudo','tokkaRule','sokuteiKijun','anzenRei','dokugekiLaw','dokugekiRei'],'multiple');
}
