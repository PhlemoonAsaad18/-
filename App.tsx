
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import HymnsPage from './components/HymnsPage';
import HeritagePage from './components/HeritagePage';
import MediaPage from './components/MediaPage';
import LyricsPage from './components/LyricsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import type { Page } from './types';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage navigate={setCurrentPage} />;
            case 'hymns':
                return <HymnsPage />;
            case 'heritage':
                return <HeritagePage />;
            case 'media':
                return <MediaPage />;
            case 'lyrics':
                return <LyricsPage />;
            case 'about':
                return <AboutPage />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage navigate={setCurrentPage} />;
        }
    };

    return (
        <div className="bg-coptic-beige min-h-screen text-coptic-blue flex flex-col">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main className="flex-grow container mx-auto p-4 md:p-8">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
};

export default App;
