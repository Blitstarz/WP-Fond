import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaShieldAlt, FaFileAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };



    const documents = [
        { icon: FaShieldAlt, label: 'Privacy Policy', url: '/privacy' },
        { icon: FaFileAlt, label: 'Terms of Service', url: '/terms' },
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src="/logo/mainLogo.png" alt="WP-Fond Logo" className="footer-logo-image" />
                            <div className="footer-logo-text">
                                <h3>WP-Fond</h3>
                                <span>Accelerator</span>
                            </div>
                        </div>
                        <p className="footer-description">
                            {t('footer.description', 'Supporting small and medium businesses in Poland with state acceleration programs, training, mentoring, and funding opportunities.')}
                        </p>
                    </div>

                    {/* Duplicate Site Menu */}
                    <div className="footer-section">
                        <h4 className="footer-title">{t('footer.navigation', 'Navigation')}</h4>
                        <nav className="footer-nav">
                            <Link to="/#about" onClick={() => scrollToSection('about')}>
                                {t('nav.about')}
                            </Link>
                            <Link to="/#stages" onClick={() => scrollToSection('stages')}>
                                {t('nav.stages')}
                            </Link>
                            <Link to="/#success" onClick={() => scrollToSection('success')}>
                                {t('nav.success')}
                            </Link>
                            <Link to="/#partners" onClick={() => scrollToSection('partners')}>
                                {t('nav.partners')}
                            </Link>
                            <Link to="/#faq" onClick={() => scrollToSection('faq')}>
                                {t('nav.faq')}
                            </Link>
                            <Link to="/#news" onClick={() => scrollToSection('news')}>
                                {t('nav.news')}
                            </Link>
                            <Link to="/#contact" onClick={() => scrollToSection('contact')}>
                                {t('nav.contact')}
                            </Link>
                        </nav>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-title">{t('footer.contact', 'Contact')}</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <span>Warszawa, Polska</span>
                            </div>
                            <div className="contact-item">
                                <FaPhone className="contact-icon" />
                                <a href="tel:+48123456789">+48 12 345 67 89</a>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <a href="mailto:info@wp-fond.pl">info@wp-fond.pl</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <div className="copyright">
                            <p>&copy; 2024 WP-Fond Accelerator. {t('footer.rights', 'All rights reserved.')}</p>
                        </div>

                        <div className="document-links">
                            {documents.map((doc, index) => (
                                <Link
                                    key={index}
                                    to={doc.url}
                                    className="document-link"
                                >
                                    <doc.icon className="document-icon" />
                                    <span>{doc.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
