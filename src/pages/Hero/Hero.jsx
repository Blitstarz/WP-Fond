import './Hero.css'
import { useTranslation } from 'react-i18next'

const Hero = () => {
    const { t } = useTranslation()

    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero">
            <picture>
                <source srcSet="/photos/hero2.jpg" media="(max-width: 768px)" />
                <img
                    src="/photos/hero.jpg"
                    alt={t('hero.imageAlt')}
                    className="hero-bg"
                />
            </picture>
            <div className="overlay">
                <div className="container">
                    <h1 className="title">
                        {t('hero.title')}
                    </h1>
                    <p className="subtitle">
                        {t('hero.subtitle')}
                    </p>
                    <a href="#contact" onClick={scrollToContact} className="button">
                        {t('hero.button')}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
