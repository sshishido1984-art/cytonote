// 公式正答未確認。資料に基づく独自解答。
export function addDailyBatch(add,S,source){
 S.atlNCI=source('NCI PDQ · Peripheral T-Cell Non-Hodgkin Lymphoma','https://www.cancer.gov/types/lymphoma/hp/peripheral-t-cell-lymphoma-pdq','Adult T-Cell Leukemia/Lymphoma：高カルシウム血症との関連','公的機関の医学解説（二次資料・本文確認）');
 S.sclcNCI=source('NCI PDQ · Small Cell Lung Cancer','https://www.cancer.gov/types/lung/hp/small-cell-lung-treatment-pdq','Clinical Features：paraneoplastic syndromes / inappropriate antidiuretic hormone secretion','公的機関の医学解説（二次資料・本文確認）');
 S.pnetNCI=source('NCI PDQ · Pancreatic Neuroendocrine Tumors','https://www.cancer.gov/types/pancreatic/hp/pnet-treatment-pdq','Glucagonoma：hyperglycemia','公的機関の医学解説（二次資料・本文確認）');
 S.thymusNCI=source('NCI PDQ · Thymoma and Thymic Carcinoma','https://www.cancer.gov/types/thymus-cancer/hp/thymoma-treatment-pdq','General Information：自己免疫性腫瘍随伴疾患','公的機関の医学解説（二次資料・本文確認）');
 S.teratomaKobe=source('Ebina et al. · 卵巣奇形腫に伴う抗NMDA受容体脳炎の症例（2013）','https://www.jstage.jst.go.jp/article/jsgoe/29/2/29_469/_article/-char/en','Abstract：卵巣成熟嚢胞性奇形腫と髄液中抗NMDA受容体抗体','原著症例報告（抄録確認・神戸大学など）');
 add(19,'腫瘍随伴症候群と腫瘍の対応',[3,5],'成人T細胞白血病・リンパ腫（ATL）に伴う高カルシウム血症と、肺小細胞癌に伴う抗利尿ホルモン不適合分泌症候群（SIADH）を選びます。腫瘍の種類と、関連する内分泌・免疫学的な症候群を対応させて整理します。',[
 ['1','グルカゴノーマでは高血糖が特徴です。低血糖との組合せは選びません。'],
 ['2','胸腺腫では重症筋無力症、低ガンマグロブリン血症、赤芽球癆などが代表的です。高カリウム血症を代表的な対応とはしません。'],
 ['3','NCIのATLの解説に、高カルシウム血症との関連が記載されています。すべての患者に必発という意味ではありません。'],
 ['4','卵巣奇形腫に関連する神経症候群としては抗NMDA受容体脳炎を区別して学びます。引用症例でも両者の合併が確認されていますが、症例報告から頻度は推定しません。'],
 ['5','NCIは肺小細胞癌の腫瘍随伴症候群に不適切な抗利尿ホルモン分泌を挙げています。'],
 ['注意点','代表的な対応を問う問題です。個々の患者における電解質異常や神経症状の原因を、腫瘍名だけで断定しないようにします。']
 ],['atlNCI','sclcNCI','pnetNCI','thymusNCI','teratomaKobe'],'multiple');
}
