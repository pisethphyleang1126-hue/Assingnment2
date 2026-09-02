export default function Footer() {
    return (
        <footer className="site-footer" id="contact">
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src="/images/harmony-round-removebg-preview.png" alt="" />
                        <div>
                            <h3>Harmony</h3>
                            <p>Heritage Museum</p>
                        </div>
                    </div>
                    <p className="footer-tagline">
                        Preserving Our Past, Inspiring Our Future.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#aboutus">About</a></li>
                        <li><a href="#arch">Architecture</a></li>
                        <li><a href="library.html">Library</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a target="_blank" rel="noreferrer" href="acc.html">Acount</a></li>
                        <li><a target="_blank" rel="noreferrer" href="buy-ticket.html">Get ticket</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Visit us</h4>
                    <ul>
                        <li>Open daily, 9:00 AM - 6:00 PM</li>
                        <li>Phnom Penh, Cambodia</li>
                        <li>info@harmonyheritage.com</li>
                        <li>+855 12 345 678</li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Follow us</h4>
                    <ul className="footer-social">
                        <li><a href="https://www.facebook.com/share/1FCtQmSQcn/?mibextid=wwXIfr" aria-label="Facebook">Facebook</a></li>
                        <li><a href="">There will be more platforms in the future updating</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; <span id="footer-year">{new Date().getFullYear()}</span> Harmony Heritage Museum. All rights reserved.</p>
            </div>
        </footer>
    );
}
