
const OpenAI=require("openai");

const client=new OpenAI({
apiKey:process.env.OPENAI_API_KEY
});

async function createAI(data){

const prompt=`
你是如果的室 AI 美容店長。

品牌：
如果的室｜美學療癒所

位置：
桃園蘆竹

服務：
韓式皮膚管理、日式美甲、臉部撥筋。

語氣：
高級、溫暖、專業、不廉價。

需求：
${data.message}

服務：
${data.service}

請輸出：
1. 活動企劃
2. IG貼文
3. IG限動
4. Reels腳本
5. LINE推播內容
`;

const result=await client.chat.completions.create({
model:"gpt-4.1-mini",
messages:[
{role:"user",content:prompt}
]
});

return result.choices[0].message.content;

}

module.exports={createAI};
