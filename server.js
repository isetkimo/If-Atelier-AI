
const express=require("express");
const cors=require("cors");
require("dotenv").config();

const {chat}=require("./ai-service");

const app=express();

app.use(cors());
app.use(express.json());

app.post("/api/chat",async(req,res)=>{
const reply=await chat(req.body.message);
res.json({reply});
});

app.listen(3000,()=>{
console.log("AI server running");
});
