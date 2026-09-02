import { useState } from 'react';

export default function Navbar({ onHomeClick }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src="/images/harmony-round-removebg-preview.png" alt="" />
                    <div className="museum-tittle">
                        <h1>Harmony</h1>
                        <p><small>Heritage Museum</small></p>
                    </div>
                </div>

                <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
                    <li><a href="#home" onClick={onHomeClick}>Home</a></li>
                    <li><a href="#aboutus">About</a></li>
                    <li><a href="#arch">Architecture</a></li>
                    <li><a href="library.html">Library</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a target="_blank" rel="noreferrer" href="acc.html">Account</a></li>
                    <li><a target="_blank" rel="noreferrer" href="buy-ticket.html">Get ticket</a></li>
                </ul>

                <div className="hamburger" onClick={() => setMenuOpen(o => !o)}>
                    ☰
                </div>
            </nav>
        </header>
    );
}
