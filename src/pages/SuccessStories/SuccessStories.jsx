import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './SuccessStories.css'

const SuccessStories = () => {
    const { t } = useTranslation();
    const [flipped, setFlipped] = useState(Array(6).fill(false))

    const stories = [
        {
            logo: '/success/CodeAll.png',
            industry: 'EdTech, IoT',
            before: t('successStories.stories.codeAll.before'),
            after: t('successStories.stories.codeAll.after')
        },
        {
            logo: '/success/ThermoEye.png',
            industry: 'AgriTech',
            before: t('successStories.stories.thermoEye.before'),
            after: t('successStories.stories.thermoEye.after')
        },
        {
            logo: '/success/Bioelektra.png',
            industry: t('successStories.stories.bioelektra.industry'),
            before: t('successStories.stories.bioelektra.before'),
            after: t('successStories.stories.bioelektra.after')
        },
        {
            logo: '/success/Petsy.png',
            industry: 'PetTech',
            before: t('successStories.stories.petsy.before'),
            after: t('successStories.stories.petsy.after')
        },
        {
            logo: '/success/Synerise.png',
            industry: 'AI, Big Data',
            before: t('successStories.stories.synerise.before'),
            after: t('successStories.stories.synerise.after')
        },
        {
            logo: '/success/Brainly.png',
            industry: t('successStories.stories.brainly.industry'),
            before: t('successStories.stories.brainly.before'),
            after: t('successStories.stories.brainly.after')
        }
    ]

    const handleFlip = (index) => {
        if (window.innerWidth < 1024) {
            setFlipped((prev) =>
                prev.map((f, i) => (i === index ? !f : f))
            )
        }
    }

    return (
        <section className="success">
            <div className="success-container">
                <h2 className="success-title">{t('successStories.title')}</h2>
                <p className="success-subtitle">
                    {t('successStories.subtitle')}
                </p>
                <div className="success-grid">
                    {stories.map((story, index) => (
                        <div
                            key={index}
                            className={`flip-card ${flipped[index] ? 'flipped' : ''}`}
                            onClick={() => handleFlip(index)}
                        >
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="story-logo-box">
                                        <img src={story.logo} alt={story.industry} className="story-logo" />
                                    </div>
                                    <span className="story-industry">{story.industry}</span>
                                    <p className="tap-hint">{t('successStories.tapHint')}</p>
                                </div>
                                <div className="flip-card-back">
                                    <div className="story-block before">
                                        <h4>{t('successStories.before')}</h4>
                                        <p>{story.before}</p>
                                    </div>
                                    <div className="story-block after">
                                        <h4>{t('successStories.after')}</h4>
                                        <p>{story.after}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SuccessStories
