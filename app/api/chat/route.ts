import OpenAI from 'openai';
import {OpenAIStream, StreamingTextResponse} from 'ai';

const perplexity = new OpenAI({
    apiKey: process.env.PERPLEXITY_API_KEY || '',
    baseURL: 'https://api.perplexity.ai/',
});

export const runtime = 'edge';

export async function POST(req: Request) {
    const {messages} = await req.json();
    const response = await perplexity.chat.completions.create({
        model: 'sonar-medium-online',
        stream: true,
        max_tokens: 1000,
        messages,
    });
    const stream = OpenAIStream(response, {
        onCompletion: (completion) => {
            // console.log(completion);
        }
    });
    return new StreamingTextResponse(stream);
}