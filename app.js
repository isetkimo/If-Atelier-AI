
function createContent(){
const service=document.getElementById('service').value;
const goal=document.getElementById('goal').value;

document.getElementById('result').innerText=
`🤍 如果的室｜美學療癒所

服務：${service}

目的：${goal}

AI品牌建議：
這裡將由 OpenAI API 產生專屬內容。

包含：
IG貼文
IG限動
Reels腳本
LINE推播內容`;
}
