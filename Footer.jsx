import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Contact Us */}
                <div className="footer-section">
                    <h3>CONTACT US</h3>
                    <div className="footer-icon-text">
                        <MdLocationOn className="footer-icon" />
                        <p>
                            Sapphire Retail Head Office 1.5-Km, Defence Road, Bhobtian Chowk,
                            Off Raiwind Road, Opposite University of Lahore, Lahore.
                        </p>
                    </div>
                    <div className="footer-icon-text">
                        <MdEmail className="footer-icon" />
                        <span>wecare@sapphireonline.pk</span>
                    </div>
                    <div className="footer-icon-text">
                        <MdPhone className="footer-icon" />
                        <span>+92(0)42 111-738-245</span>
                    </div>
                </div>

                {/* Customer Care */}
                <div className="footer-section">
                    <h3>CUSTOMER CARE</h3>
                    <ul>
                        <li><a href="#">Exchange & Return Policy</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                {/* Information */}
                <div className="footer-section">
                    <h3>INFORMATION</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Payments</a></li>
                        <li><a href="#">Store Locator</a></li>
                        <li><a href="#">Fabric Glossary</a></li>
                        <li><a href="#">Blogs</a></li>
                    </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="footer-section">
                    <h3>NEWSLETTER SIGNUP</h3>
                    <p>Subscribe to our Newsletter for Exclusive Updates</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Your email address" />
                        <button>Subscribe</button>
                    </div>
                    <div className="footer-socials">
                        <a href="https://www.facebook.com/" className="link-icon"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/" className="link-icon"><FaInstagram /></a>
                        <a href="https://www.whatsapp.com/" className="link-icon"><FaWhatsapp /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
