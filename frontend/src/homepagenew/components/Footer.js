import React from 'react';

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-left">
                        <a href="/" id="nameisbig">FoodPath</a>
                        <p className="footer-description font-normal">
                            FoodPath is dedicated to promoting sustainable food habits and enhancing awareness
                            about nutrition, health, and food safety. Join us in making a difference.
                        </p>
                        <p className="footer-contact pt-3">
                            Email us: <a href="mailto:info@foodpath.com">info@foodpath.com</a> | Phone: +1-800-900-700
                        </p>
                    </div>
                    <div className="footer-right">
                        <p id="copyright" className="copyright">
                            &copy; {new Date().getFullYear()} FoodPath. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
            <div style={{ height: '20px', backgroundColor: 'black' }}></div>
        </div>
    );
}

export default Footer;
