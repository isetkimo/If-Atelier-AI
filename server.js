
const express=require("express");
const cors=require("cors");
require("dotenv").config();

const {createAI}=require("./ai-service");

const app=express();

app.use(cors());
app.use(express.json());

app.post("/api/chat",async(req,res)=>{

const reply=await createAI(req.body);

res.json({reply});

});

app.listen(process.env.PORT || 3000,()=>{
console.log("AI Server running");
});
