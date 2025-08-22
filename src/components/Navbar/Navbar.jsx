import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaGlobe } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsMenuOpen(false);
        setIsLanguageOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLanguage = () => {
        setIsLanguageOpen(!isLanguageOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80;
            const elementPosition = element.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    const scrollToFooter = () => {
        const footer = document.querySelector('.footer');
        if (footer) {
            const navbarHeight = 80;
            const elementPosition = footer.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    const scrollToContact = () => {
        if (location.pathname !== '/') {
            window.location.href = '/#contact';
        } else {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const navbarHeight = 80;
                const elementPosition = contactSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.language-switcher')) {
                setIsLanguageOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const getLanguageLabel = (code) => {
        const labels = {
            'uk': 'Українська',
            'pl': 'Polski',
            'en': 'English'
        };
        return labels[code] || code.toUpperCase();
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo" onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}>
                    <img src="/logo/mainLogo.png" alt="WP-Fond Logo" className="logo-image" />
                    <div className="logo-text">
                        <h2>WP-Fond</h2>
                        <span>Accelerator</span>
                    </div>
                </div>
                <div className="navbar-menu">
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
                    <Link to="/#footer" onClick={scrollToFooter}>
                        {t('nav.contact')}
                    </Link>
                </div>

                <div className="navbar-right">
                    <button className="submit-btn" onClick={scrollToContact}>
                        {t('nav.submit')}
                    </button>
                    <div className="language-switcher">
                        <button className="language-toggle" onClick={toggleLanguage}>
                            <FaGlobe className="globe-icon" />
                            <span className="current-lang">{getLanguageLabel(i18n.language)}</span>
                            <FaChevronDown className={`chevron ${isLanguageOpen ? 'open' : ''}`} />
                        </button>
                        
                        <div className={`language-dropdown ${isLanguageOpen ? 'open' : ''}`}>
                            <button
                                className={`lang-option ${i18n.language === 'uk' ? 'active' : ''}`}
                                onClick={() => changeLanguage('uk')}
                            >
                                <span className="lang-code">UK</span>
                                <span className="lang-name">Українська</span>
                            </button>
                            <button
                                className={`lang-option ${i18n.language === 'pl' ? 'active' : ''}`}
                                onClick={() => changeLanguage('pl')}
                            >
                                <span className="lang-code">PL</span>
                                <span className="lang-name">Polski</span>
                            </button>
                            <button
                                className={`lang-option ${i18n.language === 'en' ? 'active' : ''}`}
                                onClick={() => changeLanguage('en')}
                            >
                                <span className="lang-code">EN</span>
                                <span className="lang-name">English</span>
                            </button>
                        </div>
                    </div>

                    <button className="mobile-menu-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-links">
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
                    <Link to="/#footer" onClick={scrollToFooter}>
                        {t('nav.contact')}
                    </Link>
                </div>

                <div className="mobile-language-section">
                    <h4>{t('nav.language') || 'Language'}</h4>
                    <div className="mobile-language-options">
                        <button
                            className={`mobile-lang-option ${i18n.language === 'uk' ? 'active' : ''}`}
                            onClick={() => changeLanguage('uk')}
                        >
                            <span className="mobile-lang-code">UK</span>
                            <span className="mobile-lang-name">Українська</span>
                        </button>
                        <button
                            className={`mobile-lang-option ${i18n.language === 'pl' ? 'active' : ''}`}
                            onClick={() => changeLanguage('pl')}
                        >
                            <span className="mobile-lang-code">PL</span>
                            <span className="mobile-lang-name">Polski</span>
                        </button>
                        <button
                            className={`mobile-lang-option ${i18n.language === 'en' ? 'active' : ''}`}
                            onClick={() => changeLanguage('en')}
                        >
                            <span className="mobile-lang-code">EN</span>
                            <span className="mobile-lang-name">English</span>
                        </button>
                    </div>
                </div>


            </div>
        </nav>
    );
};

export default Navbar;
