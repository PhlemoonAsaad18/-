
export type Page = 'home' | 'hymns' | 'heritage' | 'media' | 'lyrics' | 'about' | 'contact';

export interface Hymn {
    id: number;
    title: string;
    season: 'الصوم الكبير' | 'القيامة' | 'الميلاد' | 'البصخة' | 'متنوع';
    language: 'قبطي' | 'عربي' | 'قبطي-عربي';
    type: 'لحن كنسي' | 'ترنيمة روحية' | 'مردات القداس';
    audioUrl: string;
    lyrics: {
        arabic: string;
        coptic: string;
        english: string;
    };
}

export interface Article {
    id: number;
    title: string;
    author: string;
    summary: string;
    imageUrl: string;
}

export interface MediaItem {
    id: number;
    title: string;
    type: 'video' | 'podcast' | 'recording';
    description: string;
    url: string; 
    thumbnail: string;
}
