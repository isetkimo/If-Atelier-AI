let post="";

function createPost(){
let s=document.getElementById("service").value;
let t=document.getElementById("tone").value;

post=`🤍 如果的室｜美學療癒所

${s}

給自己一段放慢腳步的時間。
透過專業護理與舒服空間，
找回肌膚與身心的平衡。

風格：${t}

圖片方向：
韓系美容空間 米白色調 自然光 高級質感

#如果的室 #桃園美容 #蘆竹美容`;

document.getElementById("output").innerText=post;
}

function sendLine(){
alert("LINE Bot功能已預留，請在config.js填入LINE Token後啟用");
}
