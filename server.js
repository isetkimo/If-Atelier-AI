
const express=require("express");
const cors=require("cors");
require("dotenv").config();

const {generateAI}=require("./openai");

const app=express();

app.use(cors());
app.use(express.json());

app.post("/api/generate",async(req,res)=>{

const result=await generateAI(req.body);

res.json({
content:result
});

});

app.listen(3000,()=>{
console.log("If Atelier AI Server running");
});
