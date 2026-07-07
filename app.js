
async function askAI(){

const msg=document.getElementById("message").value;

document.getElementById("answer").innerText="AI分析中...";

try{

const res=await fetch("http://localhost:3000/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:msg
})
});

const data=await res.json();

document.getElementById("answer").innerText=data.reply;

}catch(e){

document.getElementById("answer").innerText=
"尚未連接後端";

}

}
