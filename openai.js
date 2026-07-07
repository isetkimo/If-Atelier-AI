
const OpenAI=require("openai");

const client=new OpenAI({
apiKey:process.env.OPENAI_API_KEY
});

async function generateAI(data){

const prompt=`
你是如果的室 AI 美容店長。

品牌：
如果的室｜美學療癒所

風格：
高級、溫暖、專業、不廉價促銷。

服務：
${data.service}

需求：
${data.request}

請產生：
1. IG貼文
2. IG限動
3. Reels腳本
4. LINE推播文字
`;

const result=await client.chat.completions.create({
model:"gpt-4.1-mini",
messages:[
{
role:"user",
content:prompt
}
]
});

return result.choices[0].message.content;

}

module.exports={generateAI};
