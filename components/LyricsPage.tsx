
import React, { useState, useMemo } from 'react';
import { HYMNS } from '../constants';

const LyricsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredHymns = useMemo(() => {
        if (!searchTerm) {
            return HYMNS;
        }
        return HYMNS.filter(hymn =>
            hymn.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            hymn.lyrics.arabic.toLowerCase().includes(searchTerm.toLowerCase()) ||
            hymn.lyrics.coptic.toLowerCase().includes(searchTerm.toLowerCase()) ||
            hymn.lyrics.english.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return (
        <div>
            <h2 className="text-3xl font-bold font-amiri text-center mb-8 text-coptic-burgundy">كلمات الترانيم</h2>
            <div className="mb-8 max-w-lg mx-auto">
                <input
                    type="text"
                    placeholder="ابحث باسم الترنيمة أو كلمة من النص..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 border-2 border-coptic-gold/50 rounded-lg focus:ring-coptic-gold focus:border-coptic-gold transition"
                />
            </div>

            <div className="space-y-6">
                {filteredHymns.length > 0 ? filteredHymns.map(hymn => (
                    <div key={hymn.id} className="bg-white p-6 rounded-lg shadow-md border-r-4 border-coptic-gold">
                        <h3 className="text-2xl font-bold font-amiri text-coptic-burgundy mb-4">{hymn.title}</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-sm">
                            <div className="prose">
                                <h4 className="font-bold text-gray-700">بالعربية</h4>
                                <p className="whitespace-pre-wrap">{hymn.lyrics.arabic}</p>
                            </div>
                            <div className="prose">
                                <h4 className="font-bold text-gray-700">بالقبطية</h4>
                                <p className="whitespace-pre-wrap">{hymn.lyrics.coptic || 'غير متوفر'}</p>
                            </div>
                            <div className="prose text-left" dir="ltr">
                                <h4 className="font-bold text-gray-700">English Translation</h4>
                                <p className="whitespace-pre-wrap">{hymn.lyrics.english}</p>
                            </div>
                        </div>
                    </div>
                )) : (
                    <p className="text-center text-gray-500">لم يتم العثور على نتائج.</p>
                )}
            </div>
        </div>
    );
};

export default LyricsPage;
