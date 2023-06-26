import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Mahzuz</h1>

                <ul className="footerlist">
                    <li>
                        <a href="#about" className="footer_link">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#qualification" className="footer_link">
                            Qualification
                        </a>
                    </li>

                    <li>
                        <a href="#about" className="footer_link">
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
