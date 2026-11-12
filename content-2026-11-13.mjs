// 公式正答は未確認。確認範囲を明示した文献調査による独自解答。
export function addNov13(add,S,source){
 S.aipEus=source('日本消化器内視鏡学会 · EUS-FNAガイドライン（2024）','https://www.jstage.jst.go.jp/article/gee/66/9/66_1739/_html/-char/ja','CQ7：自己免疫性膵炎の診断。ステートメントと解説本文を確認。FNBの推奨と従来のFNAの診断利用を区別','学会ガイドライン（本文確認）');
 S.aipKeio=source('慶應義塾大学病院 KOMPAS · 自己免疫性膵炎','https://kompas.hosp.keio.ac.jp/disease/000787/','2024-05-08更新、検査と診断／3）超音波内視鏡下穿刺吸引検査','大学病院医学解説（二次資料・本文確認）');
 S.urineDavis=source('UC Davis · Exfoliated cytology samples','https://health.ucdavis.edu/pathology/services/clinical/anatomic_pathology/cytopathology/clinical_services/submit_exfoliated.html','Urine／Collection Method／Voided Urine：早朝第一尿を避ける採取手順','大学病院検体採取手順（本文確認）');
 S.rapidPalana=source('病理診断教育支援 · 細胞診術中迅速標本作製法','https://www.palana.or.jp/ipath/cytology/3-cell-jinsoku','細胞検査士による鏡検：迅速パパニコロウ染色と迅速ギムザ染色の併用','教育教材（二次資料・本文確認）');
 S.bileRecovery=source('稲山久美子ほか · 胆管擦過細胞診における検体処理法の改良とその細胞像（2012）','https://www.jstage.jst.go.jp/article/jjscc/51/1/51_1_1/_article/-char/ja','抄録の方法・成績・結論：ERCP施行52例、ブラシ洗浄液と外筒内容液の細胞回収。一般のERCP前後の胆汁の直接比較ではない','原著研究（抄録のみ確認）');
 S.mesoFirst=source('若林良ほか · 中皮腫におけるセルブロックの運用（2024）','https://cdn.jscc.or.jp/files/gakkaishi-202405-hosatsu-01-01.pdf','日本臨床細胞学会雑誌63巻補冊1号、冊子146ページ、WS7-2冒頭。初回体腔液の形態保持・異型細胞と補助検査','学会発表抄録（PDF本文確認・定量比較なし）');
 add(31,'検体採取と診断目的を対応させる',[2],'誤っている記述として2を選びます。EUS-FNAは自己免疫性膵炎の診断過程でも利用されます。膵癌との鑑別や病理組織学的な評価に役立ちますが、採取検体だけで全例を確定できるわけではありません。2024年の学会ガイドラインは、組織構築の評価を目的としたEUS-FNBを提案しています。FNAが利用されないという意味ではありません。',[
 ['1','自然尿は尿細胞診の検体となります。UC Davisの手順は早朝第一尿を避けることを示しており、採尿条件を尿一般検査の条件と混同しないことが大切です。'],
 ['2','慶應義塾大学病院の解説と学会ガイドラインCQ7で、自己免疫性膵炎へのEUS-FNAの診断利用が確認できます。FNBとの検体量・組織構築の評価の違いにも注意します。'],
 ['3','参照した術中迅速標本作製の教材では、迅速パパニコロウ染色と迅速ギムザ染色を併用しています。異なる染色の所見を合わせて評価する考え方です。'],
 ['4','ERCPに伴う擦過検体の研究では、ブラシ洗浄液や外筒内容液から細胞を十分に回収できることが示されています。ただし今回確認した抄録は、ERCP前後の胆汁を直接比較したものではなく、この記述の一般的な増加量は未確認です。'],
 ['5','学会発表抄録では初回体腔液に形態が保たれた異型細胞が多いことが述べられています。初回検体を大切に扱い、必要な補助検査につなげます。定量的な検出率や全例での陽性を示す資料ではありません。']
 ],['aipEus','aipKeio','urineDavis','rapidPalana','bileRecovery','mesoFirst']);
}
