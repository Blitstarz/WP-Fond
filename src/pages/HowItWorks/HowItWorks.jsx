import './HowItWorks.css'
import { useTranslation } from 'react-i18next'

const HowItWorks = () => {
    const { t } = useTranslation()
    const steps = t('howItWorks.steps', { returnObjects: true })

    return (
        <section className="how-it-works" id="how-it-works">
            <h2>{t('howItWorks.title')}</h2>
            <div className="steps">
                {steps.map((step, idx) => (
                    <div className="step" key={idx}>
                        <span className="step-number">{idx + 1}</span>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HowItWorks
