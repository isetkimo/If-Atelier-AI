
async function askAI(){

const service=document.getElementById("service").value;
const message=document.getElementById("message").value;

document.getElementById("status").innerText="🤍 AI店長分析中...";

try{

const res=await fetch(AI_SERVER_URL+"/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
service,
message
})
});

const data=await res.json();

document.getElementById("status").innerText="完成";
document.getElementById("result").innerText=data.reply;

}catch(error){

document.getElementById("status").innerText="連線失敗";
document.getElementById("result").innerText=
"請確認後端伺服器與設定";

}

}
