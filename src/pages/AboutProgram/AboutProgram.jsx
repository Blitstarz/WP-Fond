import './AboutProgram.css'
import { useTranslation } from 'react-i18next'
import { FaUserTie, FaChalkboardTeacher, FaGlobeEurope, FaBookOpen, FaMoneyBillWave, FaUniversity } from 'react-icons/fa'

const AboutProgram = () => {
    const { t } = useTranslation();

    return (
        <section className="about">
            <div className="about-container">
                <h2 className="about-title">{t('about.title')}</h2>
                <p className="about-subtitle">
                    {t('about.subtitle')}
                </p>

                <div className="about-grid">
                    <div className="about-card">
                        <FaUserTie className="about-icon" />
                        <h3>{t('about.cards.mentoring.title')}</h3>
                        <p>{t('about.cards.mentoring.description')}</p>
                    </div>

                    <div className="about-card">
                        <FaChalkboardTeacher className="about-icon" />
                        <h3>{t('about.cards.experts.title')}</h3>
                        <p>{t('about.cards.experts.description')}</p>
                    </div>

                    <div className="about-card">
                        <FaGlobeEurope className="about-icon" />
                        <h3>{t('about.cards.markets.title')}</h3>
                        <p>{t('about.cards.markets.description')}</p>
                    </div>

                    <div className="about-card">
                        <FaBookOpen className="about-icon" />
                        <h3>{t('about.cards.education.title')}</h3>
                        <p>{t('about.cards.education.description')}</p>
                    </div>

                    <div className="about-card">
                        <FaMoneyBillWave className="about-icon" />
                        <h3>{t('about.cards.funding.title')}</h3>
                        <p>{t('about.cards.funding.description')}</p>
                    </div>

                    <div className="about-card">
                        <FaUniversity className="about-icon" />
                        <h3>{t('about.cards.support.title')}</h3>
                        <p>{t('about.cards.support.description')}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProgram
