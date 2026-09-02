import { useState } from 'react';

const cards = [
    {
        id: 'translate1',
        threeImgId: 'threeimg0',
        en: {
            title: 'Museum Concept',
            text: 'A modern cultural museum combining traditional Khmer architectural elements with contemporary design and technology — built to preserve and introduce Khmer culture, history, art, and heritage to Cambodian and international visitors alike.',
        },
        km: {
            title: 'គំនិតសារមន្ទីរ',
            text: 'សារមន្ទីរវប្បធម៌ទំនើបមួយ ដែលរួមបញ្ចូល ធាតុស្ថាបត្យកម្មខ្មែរប្រពៃណី ជាមួយនឹង ការរចនា និងបច្ចេកវិទ្យាទំនើប។ សារមន្ទីរនេះត្រូវបានបង្កើតឡើងក្នុងគោលបំណង អភិរក្ស និងណែនាំវប្បធម៌ ប្រវត្តិសាស្ត្រ សិល្បៈ និងមរតកខ្មែរ ដល់ភ្ញៀវទេសចរជាតិ និងអន្តរជាតិ។',
        },
        featured: false,
        sliderClass: '',
    },
    {
        id: 'translate2',
        threeImgId: 'threeimg1',
        en: { title: 'Ganesha', text: "The museum's central cultural attraction, representing wisdom, knowledge, creativity, and prosperity. Visitors explore its history, symbolism, and artistic representations through sculptures, information displays, and curated exhibitions." },
        km: { title: 'ព្រះគណេស', text: 'ព្រះគណេសគឺជា វត្ថុទាក់ទាញផ្នែកវប្បធម៌ដ៏សំខាន់របស់សារមន្ទីរ ដែលតំណាងឱ្យ ប្រាជ្ញា ចំណេះដឹង ភាពច្នៃប្រឌិត និងភាពរុងរឿង។ អ្នកទស្សនាអាចស្វែងយល់អំពីប្រវត្តិ អត្ថន័យ និងនិមិត្តសញ្ញារបស់ព្រះគណេស តាមរយៈ រូបចម្លាក់ ផ្ទាំងព័ត៌មាន និងការតាំងពិព័រណ៍ដែលបានរៀបចំយ៉ាងយកចិត្តទុកដាក់។' },
        featured: true,
        sliderClass: 'image-slider',
        khmerTag: true,
    },
    {
        id: 'translate3',
        threeImgId: 'threeimg2',
        en: { title: 'Khmer Architectural Building', text: 'A space built with Khmer-inspired decorations and architectural details, home to a coffee shop, souvenir shop, and local handicraft stores — sculptures, postcards, books, and Cambodian products for visitors to take home.' },
        km: { title: 'អគារស្ថាបត្យកម្មខ្មែរ', text: 'ជាអគារដែលតុបតែង និងរចនាឡើងដោយប្រើ លំនាំ និងព័ត៌មានលម្អិតតាមបែបស្ថាបត្យកម្មខ្មែរ។ អគារនេះមាន ហាងកាហ្វេ ហាងលក់វត្ថុអនុស្សាវរីយ៍ និងហាងលក់សិប្បកម្មក្នុងស្រុក ដែលមានដូចជា រូបចម្លាក់ កាតប៉ុស្តាល់ សៀវភៅ និងផលិតផលខ្មែរ សម្រាប់អ្នកទស្សនាទិញយកទៅជាអនុស្សាវរីយ៍។' },
        featured: false,
        sliderClass: 'image-slider',
    },
    {
        id: 'translate4',
        threeImgId: 'threeimg3',
        en: { title: 'Exhibition Galleries', text: 'Curved and circular exhibition spaces displaying ancient artifacts, Khmer sculptures, traditional artworks, Ganesha sculptures, and modern interpretations of Khmer art.' },
        km: { title: 'វិចិត្រសាលតាំងពិព័រណ៍', text: 'សាលតាំងពិព័រណ៍ដែលមានរាងកោង និងរាងមូល ត្រូវបានរៀបចំសម្រាប់ដាក់តាំង វត្ថុបុរាណ រូបចម្លាក់ខ្មែរ ស្នាដៃសិល្បៈប្រពៃណី រូបចម្លាក់ព្រះគណេស និងស្នាដៃសិល្បៈខ្មែរបែបទំនើប។ ទីកន្លែងនេះផ្តល់ឱ្យអ្នកទស្សនានូវបទពិសោធន៍ស្វែងយល់អំពីសិល្បៈ និងមរតកខ្មែរ តាមរយៈការរចនាបែបទំនើប និងអន្តរកម្ម។' },
        featured: false,
        sliderClass: 'image-slider',
    },
    {
        id: 'translate5',
        threeImgId: 'threeimg4',
        en: { title: 'Garden & Outdoor Area', text: 'Green spaces, trees, walking paths, and outdoor sculptures create a peaceful environment — a place to relax after exploring the exhibitions, anchored by a landmark sculpture in the central garden.' },
        km: { title: 'សួនច្បារ និងតំបន់ខាងក្រៅ', text: 'តំបន់បៃតងដែលមាន ដើមឈើ ផ្លូវដើរ និងរូបចម្លាក់ខាងក្រៅ បង្កើតបរិយាកាសស្ងប់ស្ងាត់ និងស្រស់ស្រាយ។ វាជាកន្លែងសម្រាប់អ្នកទស្សនា សម្រាក និងរីករាយជាមួយបរិយាកាស បន្ទាប់ពីទស្សនាសាលតាំងពិព័រណ៍។ សួនច្បារកណ្ដាលមាន រូបចម្លាក់សំខាន់មួយ ដែលក្លាយជាចំណុចសម្គាល់ដ៏ទាក់ទាញរបស់សារមន្ទីរ។' },
        featured: false,
        sliderClass: '',
    },
    {
        id: 'translate6',
        threeImgId: 'threeimg5',
        en: { title: 'Technology & Security', text: 'PIR motion sensors protect valuable artifacts — detecting unusual movement in restricted exhibition areas and alerting museum staff in real time, blending technology with cultural preservation.' },
        km: { title: 'បច្ចេកវិទ្យា និងសុវត្ថិភាព', text: 'ប្រព័ន្ធ ឧបករណ៍ចាប់សញ្ញាចលនា PIR (PIR Motion Sensors) ត្រូវបានប្រើប្រាស់ដើម្បីការពារវត្ថុបុរាណ និងវត្ថុមានតម្លៃ។ ឧបករណ៍នេះអាច រកឃើញចលនាមិនប្រក្រតីនៅក្នុងតំបន់តាំងពិព័រណ៍ដែលមានការកំណត់ការចូល និងផ្ញើការជូនដំណឹងទៅកាន់បុគ្គលិកសារមន្ទីរភ្លាមៗ។ វាជាការរួមបញ្ចូលគ្នារវាង បច្ចេកវិទ្យាទំនើប និងការអភិរក្សវប្បធម៌ ដើម្បីធានាសុវត្ថិភាពដល់មរតកខ្មែរ។' },
        featured: false,
        sliderClass: '',
        hasSecuritySlider: true,
    },
];

const securityImages = ['sensor2.jpg', 'sensor1.jpg', 'sensor3.jpg'];

function InfoCard({ card }) {
    const [lang, setLang] = useState('en');
    const [securityIndex, setSecurityIndex] = useState(0);
    const t = card[lang];
    const btnLabel = lang === 'en' ? 'Khmer' : 'English';

    const threeImgStyle = card.hasSecuritySlider
        ? { backgroundImage: `url(/images/${securityImages[securityIndex]})` }
        : undefined;

    const placeholderClass = `info-img-placeholder${card.featured ? ' large' : ''}${card.sliderClass ? ' ' + card.sliderClass : ''}`;

    return (
        <div className={`info-card${card.featured ? ' featured' : ''}`}>
            <div className={placeholderClass}>
                {card.hasSecuritySlider && (
                    <button
                        className="slider-btn prev"
                        type="button"
                        onClick={() => setSecurityIndex(i => (i - 1 + securityImages.length) % securityImages.length)}
                    >
                        ‹
                    </button>
                )}

                {card.featured ? (
                    <div className="info-img-placeholder large">
                        <div className="threedimg" id={card.threeImgId} />
                    </div>
                ) : card.sliderClass ? (
                    <div className="info-img-placeholder">
                        <div className="threedimg" id={card.threeImgId} />
                    </div>
                ) : (
                    <div className="threedimg" id={card.threeImgId} style={threeImgStyle} />
                )}

                {card.hasSecuritySlider && (
                    <button
                        className="slider-btn next"
                        type="button"
                        onClick={() => setSecurityIndex(i => (i + 1) % securityImages.length)}
                    >
                        ›
                    </button>
                )}
            </div>

            <h3 className={lang === 'km' ? 'khmer-title' : ''}>
                {t.title}
                {card.khmerTag && <span className="khmer-tag"></span>}
            </h3>

            <p className={lang === 'km' ? 'khmer-text' : ''}>{t.text}</p>

            <button className="translate" onClick={() => setLang(l => (l === 'en' ? 'km' : 'en'))}>
                {btnLabel}
            </button>
        </div>
    );
}

export default function MuseumInfo() {
    return (
        <div className="museum-info" id="arch">
            <div className="info-header">
                <p className="section-label">Discover</p>
                <h2>Harmony Heritage Museum</h2>
                <p className="about-tagline">
                    Where modern architecture meets Khmer culture, art, and technology.
                </p>
            </div>

            <div className="info-grid">
                {cards.map(card => (
                    <InfoCard key={card.id} card={card} />
                ))}
            </div>

            <div className="info-footer">
                <div className="info-footer-item">
                    <h4>Our Purpose</h4>
                    <ul>
                        <li>Preserve and promote Khmer culture and heritage</li>
                        <li>Educate young people about history and traditional art</li>
                        <li>Provide an engaging cultural experience</li>
                        <li>Blend traditional design with modern technology</li>
                        <li>Support local artists and Cambodian handicrafts</li>
                    </ul>
                </div>

                <div className="info-footer-item">
                    <h4>Visitor Access</h4>
                    <p>
                        The museum includes a dedicated parking area and clearly organized pathways, with
                        entrances and internal walkways designed for easy movement between exhibition areas.
                    </p>
                </div>
            </div>
        </div>
    );
}
