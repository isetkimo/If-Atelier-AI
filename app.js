
async function sendAI(){

const service=document.getElementById("service").value;
const request=document.getElementById("request").value;

document.getElementById("result").innerText="AI分析中...";

try{

const response=await fetch("http://localhost:3000/api/generate",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
service,
request
})
});

const data=await response.json();

document.getElementById("result").innerText=data.content;

}catch(error){

document.getElementById("result").innerText=
"目前無法連線後端，請確認 Server 是否啟動";

}

}
