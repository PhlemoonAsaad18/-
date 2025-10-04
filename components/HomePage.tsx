
import React, { useState, useRef, useEffect } from 'react';
import { HYMNS } from '../constants';
import type { Page } from '../types';

interface HomePageProps {
    navigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
    const featuredHymn = HYMNS[2]; // "المسيح قام"
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.error("Audio play failed:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };
    
    useEffect(() => {
        const audio = audioRef.current;
        const handleEnded = () => setIsPlaying(false);
        audio?.addEventListener('ended', handleEnded);
        return () => {
            audio?.removeEventListener('ended', handleEnded);
        }
    }, [])

    return (
        <div className="text-center">
            <div 
                className="bg-cover bg-center rounded-lg shadow-xl p-8 md:p-16 mb-12" 
                style={{ backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.7), rgba(0, 51, 102, 0.7)), url('https://picsum.photos/seed/coptic-church/1200/400')` }}
            >
                <h2 className="text-4xl md:text-6xl font-amiri font-bold text-coptic-gold mb-4">أهلاً بكم في أصوات السماء</h2>
                <p className="text-lg md:text-xl text-coptic-beige max-w-3xl mx-auto">
                    منصة رقمية تهدف إلى حفظ ونشر التراث القبطي الأرثوذكسي من خلال الترانيم والتسابيح القديمة التي تُعبّر عن عمق الإيمان وجمال التقليد الكنسي.
                </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-coptic-gold/20 mb-12">
                <h3 className="text-2xl font-bold text-coptic-burgundy mb-4">ترنيمة الأسبوع الافتتاحية</h3>
                <div className="flex flex-col items-center">
                    <p className="text-xl font-amiri mb-2">{featuredHymn.title}</p>
                    <p className="text-gray-600 mb-4">{featuredHymn.season} - {featuredHymn.language}</p>
                    <audio ref={audioRef} src={featuredHymn.audioUrl} />
                    <button onClick={togglePlayPause} className="p-4 rounded-full bg-coptic-gold text-coptic-blue hover:bg-coptic-gold/80 transition-transform transform hover:scale-110 shadow-lg">
                        {isPlaying ? (
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1zm5 0a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                        ) : (
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.118v3.764a1 1 0 001.555.832l3.197-1.882a1 1 0 000-1.664l-3.197-1.882z" clipRule="evenodd" /></svg>
                        )}
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div onClick={() => navigate('hymns')} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer border-t-4 border-coptic-burgundy">
                    <h4 className="text-xl font-bold text-coptic-burgundy mb-2">تصفح الترانيم</h4>
                    <p>استمع إلى مكتبتنا المتنامية من الألحان والترانيم المصنفة حسب المواسم الطقسية واللغة.</p>
                </div>
                <div onClick={() => navigate('heritage')} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer border-t-4 border-coptic-gold">
                    <h4 className="text-xl font-bold text-coptic-gold mb-2">اكتشف التراث</h4>
                    <p>اقرأ مقالات عن تاريخ الألحان، سير القديسين، وشرح الطقوس الكنسية العريقة.</p>
                </div>
                <div onClick={() => navigate('media')} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer border-t-4 border-coptic-blue">
                    <h4 className="text-xl font-bold text-coptic-blue mb-2">شاهد واستمع</h4>
                    <p>استمتع بمقاطع الفيديو من الخورسات الكنسية، تسجيلات نادرة، وبودكاست أسبوعي.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
