
import React from 'react';
import { ARTICLES } from '../constants';
import type { Article } from '../types';
import GeminiAIHelper from './GeminiAIHelper';

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1">
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold font-amiri text-coptic-blue">{article.title}</h3>
                <p className="text-sm text-gray-500 mb-2">بقلم: {article.author}</p>
                <p className="text-gray-700">{article.summary}</p>
            </div>
        </div>
    );
};

const HeritagePage: React.FC = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold font-amiri text-center mb-8 text-coptic-burgundy">كنوز التراث القبطي</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {ARTICLES.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
            
            <GeminiAIHelper />
        </div>
    );
};

export default HeritagePage;
