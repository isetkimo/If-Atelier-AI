
const OpenAI=require("openai");

const client=new OpenAI({
apiKey:process.env.OPENAI_API_KEY
});

async function chat(message){

const prompt=`
你是如果的室 AI 美容助理。

品牌：
如果的室｜美學療癒所

地點：
桃園蘆竹

服務：
韓式皮膚管理、日式美甲、臉部撥筋

語氣：
高級、溫暖、專業。

使用者需求：
${message}
`;

const result=await client.chat.completions.create({
model:"gpt-4.1-mini",
messages:[
{role:"user",content:prompt}
]
});

return result.choices[0].message.content;
}

module.exports={chat};
