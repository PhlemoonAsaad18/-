
import React, { useState } from 'react';
import { MEDIA_ITEMS } from '../constants';
import type { MediaItem } from '../types';

const MediaCard: React.FC<{ item: MediaItem, onPlay: (item: MediaItem) => void }> = ({ item, onPlay }) => {
    const getIcon = () => {
        switch (item.type) {
            case 'video': return <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-coptic-burgundy" viewBox="0 0 20 20" fill="currentColor"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 001.553.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>;
            case 'podcast': return <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-coptic-burgundy" viewBox="0 0 20 20" fill="currentColor"><path d="M3 3a1 1 0 000 2v11a1 1 0 100 2h14a1 1 0 100-2V5a1 1 0 000-2H3z" /><path d="M15.06 5.252a1 1 0 00-1.033.065l-3.333 2.5a1 1 0 000 1.664l3.333 2.5a1 1 0 001.583-.832V6.147a1 1 0 00-.55-.905z" /></svg>;
            case 'recording': return <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-coptic-burgundy" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0a5 5 0 01-5 5V8a5 5 0 01-5-5 1 1 0 10-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-1v-2.07z" clipRule="evenodd" /></svg>;
        }
    }
    
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative">
                <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" />
                <div onClick={() => onPlay(item)} className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.118v3.764a1 1 0 001.555.832l3.197-1.882a1 1 0 000-1.664l-3.197-1.882z" clipRule="evenodd" /></svg>
                </div>
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                    <div className="flex items-center space-x-2 mb-2">
                        {getIcon()}
                        <h3 className="text-lg font-bold font-amiri text-coptic-blue">{item.title}</h3>
                    </div>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
            </div>
        </div>
    );
};

const MediaViewerModal: React.FC<{item: MediaItem | null, onClose: () => void}> = ({ item, onClose }) => {
    if (!item) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full" onClick={e => e.stopPropagation()}>
                <div className="p-4 border-b flex justify-between items-center">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <div className="p-4">
                    {item.type === 'video' ? (
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe src={item.url} title={item.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
                        </div>
                    ) : (
                        <audio src={item.url} controls autoPlay className="w-full"></audio>
                    )}
                    <p className="mt-4 text-gray-600">{item.description}</p>
                </div>
            </div>
        </div>
    );
};


const MediaPage: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

    return (
        <div>
            <h2 className="text-3xl font-bold font-amiri text-center mb-8 text-coptic-burgundy">صوتيات ومرئيات</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MEDIA_ITEMS.map(item => (
                    <MediaCard key={item.id} item={item} onPlay={setSelectedItem} />
                ))}
            </div>

            <MediaViewerModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        </div>
    );
};

export default MediaPage;
