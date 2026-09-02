import { useEffect, useRef } from 'react';

export default function Home() {
    const sectionRef = useRef(null);
    const heading1Ref = useRef(null);
    const heading2Ref = useRef(null);
    const greetingRef = useRef(null);
    const quoteRef = useRef(null);

    const playHomeAnimation = () => {
        const els = [heading1Ref.current, heading2Ref.current, greetingRef.current, quoteRef.current];
        els.forEach(el => {
            if (!el) return;
            el.classList.remove('play-right', 'play-right-delay', 'play-rise', 'play-left');
            void el.offsetWidth;
        });

        heading1Ref.current?.classList.add('play-right');
        heading2Ref.current?.classList.add('play-right-delay');
        greetingRef.current?.classList.add('play-rise');
        quoteRef.current?.classList.add('play-left');
    };

    useEffect(() => {
        playHomeAnimation();

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    playHomeAnimation();
                }
            });
        }, { threshold: 0.6 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="home" id="home" ref={sectionRef}>
            <a href="#home" onClick={playHomeAnimation}>
                <div className="sound-toggle" id="soundToggle">
                    <div className="scroll-indicator" id="scroll1">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </a>

            <h1 ref={heading1Ref} style={{ transform: 'translateY(30px)' }}>
                Welcome to our
            </h1>

            <h1 ref={heading2Ref} style={{ transform: 'translateY(30px)' }}>
                Museum
            </h1>

            <div className="greeting" ref={greetingRef} style={{ position: 'relative', width: 400, height: 400 }}>
                <svg width="300" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"
                    style={{ position: 'absolute', top: 10, left: 10 }}>
                    <defs>
                        <mask id="crescent-cutout">
                            <rect x="0" y="0" width="350" height="400" fill="white" />
                            <circle cx="260" cy="180" r="185" fill="black" />
                        </mask>
                    </defs>

                    <circle cx="170" cy="200" r="170" fill="#bb9c5d" mask="url(#crescent-cutout)" />
                </svg>

                <img src="/images/harmony-round-removebg-preview.png" alt=""
                    style={{ position: 'absolute', top: 10, left: -25, width: 450, height: 500, objectFit: 'contain' }} />
            </div>

            <div className="home-quote" style={{ marginTop: 60 }}>
                <p ref={quoteRef}>
                    Where <b>Modernity</b> & <b>Traditionality</b> are align
                </p>
            </div>

            <div className="scroll-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}
