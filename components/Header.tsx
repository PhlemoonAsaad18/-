
import React from 'react';
import type { Page } from '../types';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
    page: Page;
    currentPage: Page;
    onClick: (page: Page) => void;
    children: React.ReactNode;
}> = ({ page, currentPage, onClick, children }) => {
    const isActive = currentPage === page;
    return (
        <button
            onClick={() => onClick(page)}
            className={`px-4 py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-300 ${
                isActive
                    ? 'bg-coptic-gold text-coptic-blue'
                    : 'text-coptic-beige hover:bg-coptic-gold/20'
            }`}
        >
            {children}
        </button>
    );
};


const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navLinks = [
        { page: 'home', label: 'الرئيسية' },
        { page: 'hymns', label: 'الترانيم' },
        { page: 'heritage', label: 'التراث القبطي' },
        { page: 'media', label: 'صوتيات وفيديو' },
        { page: 'lyrics', label: 'كلمات الترانيم' },
        { page: 'about', label: 'عن الموقع' },
        { page: 'contact', label: 'تواصل معنا' },
    ] as const;


    return (
        <header className="bg-coptic-blue shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => setCurrentPage('home')}>
                        <h1 className="text-2xl md:text-3xl font-amiri font-bold text-coptic-gold">
                            أصوات السماء
                        </h1>
                        <p className="text-xs text-coptic-beige font-cairo">ترانيم قبطية تراثية</p>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map(link => (
                                <NavLink key={link.page} page={link.page} currentPage={currentPage} onClick={setCurrentPage}>
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="bg-coptic-gold/20 inline-flex items-center justify-center p-2 rounded-md text-coptic-gold hover:text-white hover:bg-coptic-gold/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-coptic-blue focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map(link => (
                        <button key={link.page} onClick={() => { setCurrentPage(link.page); setIsMenuOpen(false); }} className={`w-full text-right block px-3 py-2 rounded-md text-base font-medium ${currentPage === link.page ? 'bg-coptic-gold text-coptic-blue' : 'text-coptic-beige hover:bg-coptic-gold/20'}`}>
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
