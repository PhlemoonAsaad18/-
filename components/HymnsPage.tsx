
import React, { useState, useMemo, useRef } from 'react';
import { HYMNS } from '../constants';
import type { Hymn } from '../types';

const HymnCard: React.FC<{ hymn: Hymn, onPlay: (hymn: Hymn) => void }> = ({ hymn, onPlay }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between transition-shadow hover:shadow-xl border-r-4 border-coptic-burgundy">
            <div>
                <h3 className="text-lg font-bold font-amiri text-coptic-burgundy">{hymn.title}</h3>
                <div className="text-sm text-gray-600 mt-2 space-y-1">
                    <p><span className="font-semibold">الموسم:</span> {hymn.season}</p>
                    <p><span className="font-semibold">اللغة:</span> {hymn.language}</p>
                    <p><span className="font-semibold">النوع:</span> {hymn.type}</p>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <button onClick={() => onPlay(hymn)} className="flex items-center space-x-2 px-3 py-1 bg-coptic-gold text-coptic-blue rounded-md hover:bg-coptic-gold/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 001.553.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
                    <span>استماع</span>
                </button>
                <a href={hymn.audioUrl} download={`${hymn.title}.mp3`} className="p-2 rounded-full hover:bg-gray-200 transition-colors" title="تحميل MP3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>
            </div>
        </div>
    );
};

const Player: React.FC<{ hymn: Hymn | null, onClose: () => void }> = ({ hymn, onClose }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    if (!hymn) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-coptic-blue text-white shadow-2xl-top z-50 p-4 animate-slide-up">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex-grow">
                    <h3 className="font-bold">{hymn.title}</h3>
                    <p className="text-sm opacity-80">{hymn.season}</p>
                    <audio ref={audioRef} src={hymn.audioUrl} controls autoPlay className="w-full md:w-1/2 mt-2" />
                </div>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
        </div>
    );
};

const HymnsPage: React.FC = () => {
    const [filters, setFilters] = useState({
        season: 'all',
        language: 'all',
        type: 'all',
    });
    const [playingHymn, setPlayingHymn] = useState<Hymn | null>(null);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const filteredHymns = useMemo(() => {
        return HYMNS.filter(hymn => {
            return (filters.season === 'all' || hymn.season === filters.season) &&
                   (filters.language === 'all' || hymn.language === filters.language) &&
                   (filters.type === 'all' || hymn.type === filters.type);
        });
    }, [filters]);

    return (
        <div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold mb-4">فلترة الترانيم</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <select name="season" value={filters.season} onChange={handleFilterChange} className="p-2 border rounded-md bg-gray-50">
                        <option value="all">كل المواسم</option>
                        <option value="البصخة">البصخة</option>
                        <option value="القيامة">القيامة</option>
                        <option value="الميلاد">الميلاد</option>
                        <option value="الصوم الكبير">الصوم الكبير</option>
                    </select>
                     <select name="language" value={filters.language} onChange={handleFilterChange} className="p-2 border rounded-md bg-gray-50">
                        <option value="all">كل اللغات</option>
                        <option value="قبطي">قبطي</option>
                        <option value="عربي">عربي</option>
                        <option value="قبطي-عربي">قبطي-عربي</option>
                    </select>
                     <select name="type" value={filters.type} onChange={handleFilterChange} className="p-2 border rounded-md bg-gray-50">
                        <option value="all">كل الأنواع</option>
                        <option value="لحن كنسي">لحن كنسي</option>
                        <option value="ترنيمة روحية">ترنيمة روحية</option>
                        <option value="مردات القداس">مردات القداس</option>
                    </select>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHymns.map(hymn => (
                    <HymnCard key={hymn.id} hymn={hymn} onPlay={setPlayingHymn} />
                ))}
            </div>
            
            <Player hymn={playingHymn} onClose={() => setPlayingHymn(null)} />
        </div>
    );
};

export default HymnsPage;
