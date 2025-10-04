
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available in the environment variables
const apiKey = process.env.API_KEY;
if (!apiKey) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey });

const systemInstruction = `أنت خبير في التراث القبطي الأرثوذكسي. مهمتك هي الإجابة على أسئلة المستخدمين بدقة واحترام. 
يجب أن تكون إجاباتك غنية بالمعلومات، وتستند إلى مصادر موثوقة في التاريخ الكنسي والطقوس واللاهوت. 
عندما تسأل عن الألحان، اشرح معناها الروحي والسياق الطقسي الذي تقال فيه. 
استخدم لغة عربية فصحى وواضحة ومناسبة للموضوع. كن متعاونًا ومفيدًا.`;

export const askGemini = async (prompt: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
                topP: 0.95,
            },
        });

        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to get a response from the AI model.");
    }
};
