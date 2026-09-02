import { useState } from 'react';

const content = {
    en: {
        expectation: 'Expectation',
        welcome: 'Welcome to Harmony Heritage Museum',
        tagline: 'Where Khmer heritage meets modern innovation.',
        text1: "Our museum is more than a place to display history. It is a space where visitors can discover Cambodia's rich culture, traditional art, and historical treasures through a modern and interactive experience.",
        text2: "The museum's design combines traditional Khmer architecture with contemporary technology, creating a unique landmark that represents both our past and our future.",
        text3: 'To ensure the safety of priceless artifacts, the museum is equipped with a PIR Motion Sensor Security System, which helps detect unauthorized movement and provides reliable protection for valuable cultural objects.',
        btn: 'Khmer',
    },
    km: {
        expectation: 'ការរំពឹងទុក',
        welcome: 'សូមស្វាគមន៍មកកាន់សារមន្ទីរបេតិកភណ្ឌ ហាម៉ូនី',
        tagline: 'កន្លែងដែលបេតិកភណ្ឌខ្មែររួមបញ្ចូលជាមួយនវានុវត្តន៍ទំនើប។',
        text1: 'សារមន្ទីររបស់យើងមិនមែនគ្រាន់តែជាកន្លែងសម្រាប់តាំងបង្ហាញប្រវត្តិសាស្ត្រប៉ុណ្ណោះទេ។ វាជាទីកន្លែងដែលអ្នកទស្សនាអាចស្វែងយល់ពីវប្បធម៌ដ៏សម្បូរបែប សិល្បៈប្រពៃណី និងសម្បត្តិប្រវត្តិសាស្ត្ររបស់កម្ពុជា តាមរយៈបទពិសោធន៍ទំនើប និងអន្តរកម្ម។',
        text2: 'ការរចនាសារមន្ទីររបស់យើងបានរួមបញ្ចូលស្ថាបត្យកម្មខ្មែរបុរាណជាមួយបច្ចេកវិទ្យាទំនើប ដើម្បីបង្កើតជាទីតាំងដ៏ពិសេសមួយ ដែលតំណាងឱ្យទាំងអតីតកាល និងអនាគតរបស់យើង។',
        text3: 'ដើម្បីធានាសុវត្ថិភាពដល់វត្ថុបុរាណ និងសម្បត្តិវប្បធម៌ដ៏មានតម្លៃ សារមន្ទីរត្រូវបានបំពាក់ដោយ ប្រព័ន្ធសុវត្ថិភាពឧបករណ៍ចាប់សញ្ញាចលនា PIR ដែលជួយរកឃើញចលនាដែលគ្មានការអនុញ្ញាត និងផ្តល់ការការពារដែលអាចទុកចិត្តបានសម្រាប់វត្ថុវប្បធម៌ដ៏មានតម្លៃ។',
        btn: 'English',
    },
};

const whyList = {
    en: {
        heading: 'Why visit our museum?',
        items: [
            'Discover the beauty of Khmer history and culture',
            'Experience modern museum technology',
            'Learn through interactive exhibitions',
            'Enjoy a safe, comfortable, and secure environment',
            "Support the preservation of Cambodia's cultural heritage",
        ],
        btn: 'Khmer',
    },
    km: {
        heading: 'ហេតុអ្វីបានជាអ្នកគួរមកទស្សនាសារមន្ទីររបស់យើង?',
        items: [
            'ស្វែងយល់ពីសម្រស់នៃប្រវត្តិសាស្ត្រ និងវប្បធម៌ខ្មែរ',
            'ទទួលយកបទពិសោធន៍ពីបច្ចេកវិទ្យាសារមន្ទីរទំនើប',
            'ទទួលយកបទពិសោធន៍ពីបច្ចេកវិទ្យាសារមន្ទីរទំនើប',
            'រីករាយជាមួយបរិយាកាសដែលមានសុវត្ថិភាព ផាសុកភាព និងការការពារល្អ',
            'ចូលរួមគាំទ្រការអភិរក្សបេតិកភណ្ឌវប្បធម៌របស់កម្ពុជា',
        ],
        btn: 'English',
    },
};

const vision = {
    en: {
        heading: 'Our vision',
        text: "To become a leading cultural destination that preserves Cambodia's heritage while embracing innovation and inspiring future generations.",
        btn: 'Khmer',
    },
    km: {
        heading: 'ចក្ខុវិស័យរបស់យើង',
        text: 'ក្លាយជាគោលដៅវប្បធម៌ឈានមុខមួយ ដែលអភិរក្សបេតិកភណ្ឌរបស់កម្ពុជា ព្រមទាំងទទួលយកនវានុវត្តន៍ និងបំផុសគំនិតដល់មនុស្សជំនាន់ក្រោយ។',
        btn: 'English',
    },
};

export default function AboutUs() {
    const [greetingLang, setGreetingLang] = useState('en');
    const [reasonLang, setReasonLang] = useState('en');
    const [visionLang, setVisionLang] = useState('en');

    const g = content[greetingLang];
    const w = whyList[reasonLang];
    const v = vision[visionLang];

    return (
        <div className="about-us" id="aboutus">
            <div className="about-container">
                <h1 style={{ transform: 'translateY(-20px)' }}>{g.expectation}</h1>

                <h2>{g.welcome}</h2>

                <p className="about-tagline">{g.tagline}</p>

                <p className="about-text" id="about-text1">{g.text1}</p>
                <p className="about-text" id="about-text2">{g.text2}</p>
                <p className="about-text" id="about-text3">{g.text3}</p>

                <button
                    className="translate"
                    id="greetingTranslate"
                    onClick={() => setGreetingLang(l => (l === 'en' ? 'km' : 'en'))}
                >
                    {g.btn}
                </button>

                <div className="about-grid">
                    <div className="about-why">
                        <h3>{w.heading}</h3>

                        <ul>
                            {w.items.map((item, i) => (
                                <li key={i} id={`whylist${i + 1}`}>{item}</li>
                            ))}
                        </ul>
                        <button
                            className="translate"
                            id="reasonTranslate"
                            onClick={() => setReasonLang(l => (l === 'en' ? 'km' : 'en'))}
                        >
                            {w.btn}
                        </button>
                    </div>

                    <div className="about-vision">
                        <h3>{v.heading}</h3>

                        <p>{v.text}</p>
                        <button
                            className="translate"
                            id="visionTranslate"
                            style={{ transform: 'translateY(10px)' }}
                            onClick={() => setVisionLang(l => (l === 'en' ? 'km' : 'en'))}
                        >
                            {v.btn}
                        </button>
                    </div>
                </div>

                <p className="about-slogan">
                    "Preserving Our Past, Inspiring Our Future."
                </p>
            </div>
        </div>
    );
}
