
import type { Hymn, Article, MediaItem } from './types';

export const HYMNS: Hymn[] = [
    {
        id: 1,
        title: 'لحن غولغوثا',
        season: 'البصخة',
        language: 'قبطي',
        type: 'لحن كنسي',
        audioUrl: 'https://www.coptic.org/media/golgotha.mp3', // Placeholder URL
        lyrics: {
            arabic: 'يا من ذاق الموت بالجسد في وقت الساعة التاسعة، أمت أهواءنا الجسدانية، أيها المسيح إلهنا ونجنا.',
            coptic: 'Ⲫⲏⲉ̀ⲧⲁϥϫⲉⲙⲡ̀ⲥⲱϥ ⲙ̀ⲡⲓⲙⲟⲩ ϧⲉⲛ ⲥⲁⲣⲝ ϧⲉⲛ ⲡ̀ⲓⲙⲁϩ ⲯⲓⲧⲓ ⲛ̀ⲟⲩⲛⲟⲩ...',
            english: 'O He who tasted death in the flesh at the ninth hour, put to death our carnal-mindedness, O Christ our God, and save us.',
        },
    },
    {
        id: 2,
        title: 'يا كل الصفوف السمائيين',
        season: 'الميلاد',
        language: 'عربي',
        type: 'ترنيمة روحية',
        audioUrl: 'https://www.coptic.org/media/yakolossofouf.mp3', // Placeholder URL
        lyrics: {
            arabic: 'يا كل الصفوف السمائيين رتلوا معنا اليوم شادين. بميلاد رب المجد رب العالمين.',
            coptic: '',
            english: 'O all the heavenly hosts, sing with us today. For the birth of the Lord of glory, the Lord of all creation.',
        },
    },
    {
        id: 3,
        title: 'المسيح قام',
        season: 'القيامة',
        language: 'قبطي-عربي',
        type: 'مردات القداس',
        audioUrl: 'https://www.coptic.org/media/christosanesti.mp3', // Placeholder URL
        lyrics: {
            arabic: 'المسيح قام من بين الأموات، بالموت داس الموت، والذين في القبور أنعم لهم بالحياة الأبدية.',
            coptic: 'Ⲭⲣⲓⲥⲧⲟⲥ ⲁ̀ⲛⲉⲥⲧⲏ ⲉ̀ⲕ ⲛⲉⲕⲣⲱⲛ...',
            english: 'Christ is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life eternal.',
        },
    },
];

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'تاريخ الألحان القبطية',
        author: 'أ.د. ميخائيل مكسي اسكندر',
        summary: 'استكشاف لجذور الموسيقى الكنسية القبطية وتطورها عبر العصور، وعلاقتها بالموسيقى الفرعونية القديمة.',
        imageUrl: 'https://picsum.photos/seed/heritage1/400/300',
    },
    {
        id: 2,
        title: 'الآلات الموسيقية في الكنيسة القبطية',
        author: 'المرتل إبراهيم عياد',
        summary: 'نظرة على الأدوات الموسيقية التقليدية مثل الناقوس والمثلث والدف، ودورها في الطقوس الكنسية.',
        imageUrl: 'https://picsum.photos/seed/heritage2/400/300',
    },
];

export const MEDIA_ITEMS: MediaItem[] = [
    {
        id: 1,
        title: 'فيديو: خورس شمامسة الكاتدرائية',
        type: 'video',
        description: 'أداء رائع للحن "إبؤرو" من خورس شمامسة الكاتدرائية المرقسية بالإسكندرية.',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
        thumbnail: 'https://picsum.photos/seed/media1/400/225',
    },
    {
        id: 2,
        title: 'بودكاست: معنى ترنيمة "شيري ني ماريا"',
        type: 'podcast',
        description: 'حلقة أسبوعية تشرح المعاني اللاهوتية والروحية وراء ترنيمة السلام لك يا مريم.',
        url: 'https://archive.org/download/Tenor/01-Hallelujah.mp3', // Placeholder
        thumbnail: 'https://picsum.photos/seed/media2/400/225',
    },
    {
        id: 3,
        title: 'تسجيل نادر: قداس بصوت البابا كيرلس',
        type: 'recording',
        description: 'تسجيل صوتي تاريخي نادر لجزء من القداس الإلهي بصوت قداسة البابا كيرلس السادس.',
        url: 'https://archive.org/download/Tenor/02-AveMaria.mp3', // Placeholder
        thumbnail: 'https://picsum.photos/seed/media3/400/225',
    },
];
