import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Mahzuz</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer_link">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#skill" className="footer_link">
                            Skill
                        </a>
                    </li>

                    <li>
                        <a href="#qualification" className="footer_link">
                            Qualification
                        </a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href="https://www.youtube.com/channel/UCmnX4ZrIwPN7spPQ8zKRCpw"
                        className="footer__social-icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="bx bxl-youtube"></i>
                    </a>

                    <a
                        href="https://www.instagram.com/mahzuz_hazman/"
                        className="footer__social-icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a
                        href="https://twitter.com/RichNjoss"
                        className="footer__social-icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; MahzuzH. All rigths reserved
                </span>
            </div>
        </footer>
    );
};

export default Footer;
