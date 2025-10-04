
import React, { useState } from 'react';
import { askGemini } from '../services/geminiService';

const GeminiAIHelper: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) return;

        setIsLoading(true);
        setError(null);
        setResponse('');

        try {
            const result = await askGemini(prompt);
            setResponse(result);
        } catch (err) {
            setError('حدث خطأ أثناء التواصل مع المساعد الذكي. يرجى المحاولة مرة أخرى.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };
    
    const examplePrompts = [
      "اشرح لي معنى كلمة 'إبؤرو' في الألحان القبطية.",
      "ما هي قصة لحن غولغوثا؟",
      "ما هي الآلات الموسيقية المستخدمة في الكنيسة الأولى؟"
    ];

    const handleExampleClick = (example: string) => {
        setPrompt(example);
    }

    return (
        <div className="bg-gradient-to-br from-coptic-blue to-coptic-burgundy p-6 md:p-8 rounded-lg shadow-xl text-white mt-12">
            <div className="flex items-center space-x-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-coptic-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 12l-4 4 3.707 3.707a1 1 0 01-1.414 1.414L3 16.586V13a1 1 0 011-1h3.586l4.707-4.707a1 1 0 011.414 0z" /></svg>
                <h3 className="text-2xl md:text-3xl font-amiri font-bold">تعلم مع الذكاء الاصطناعي</h3>
            </div>
            <p className="mb-4 text-coptic-beige">
                اسأل مساعدنا الذكي عن أي شيء يتعلق بالتراث القبطي، الألحان، التاريخ، أو الطقوس.
            </p>
            
            <div className="mb-4">
              <p className="text-sm text-coptic-gold mb-2">جرب هذه الأسئلة:</p>
              <div className="flex flex-wrap gap-2">
                {examplePrompts.map((p, i) => (
                  <button key={i} onClick={() => handleExampleClick(p)} className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition">
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="اكتب سؤالك هنا..."
                    className="flex-grow p-3 rounded-md bg-white/20 border border-white/30 placeholder-coptic-beige/70 focus:ring-2 focus:ring-coptic-gold focus:outline-none"
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-coptic-gold text-coptic-blue font-bold rounded-md hover:bg-amber-400 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : 'اسأل'}
                </button>
            </form>

            {error && <p className="mt-4 text-red-300 bg-red-900/50 p-3 rounded-md">{error}</p>}
            
            {response && (
                <div className="mt-6 p-4 bg-black/20 rounded-md border border-white/20">
                    <h4 className="font-bold text-coptic-gold mb-2">إجابة المساعد الذكي:</h4>
                    <p className="whitespace-pre-wrap font-cairo leading-relaxed">{response}</p>
                </div>
            )}
        </div>
    );
};

export default GeminiAIHelper;
