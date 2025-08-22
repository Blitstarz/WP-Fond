import './HowItWorks.css'
import { useTranslation } from 'react-i18next'
import { FaFileAlt, FaCheckCircle, FaUsers, FaRocket, FaBalanceScale } from 'react-icons/fa'

const HowItWorks = () => {
    const { t } = useTranslation();

    const steps = [
        {
            icon: <FaFileAlt />,
            title: t('howItWorks.steps.application.title'),
            text: t('howItWorks.steps.application.description')
        },
        {
            icon: <FaCheckCircle />,
            title: t('howItWorks.steps.selection.title'),
            text: t('howItWorks.steps.selection.description')
        },
        {
            icon: <FaUsers />,
            title: t('howItWorks.steps.participation.title'),
            text: t('howItWorks.steps.participation.description')
        },
        {
            icon: <FaRocket />,
            title: t('howItWorks.steps.scaling.title'),
            text: t('howItWorks.steps.scaling.description')
        },
        {
            icon: <FaBalanceScale />,
            title: t('howItWorks.steps.legal.title'),
            text: t('howItWorks.steps.legal.description')
        }
    ]

    return (
        <section className="how">
            <div className="how-container">
                <h2 className="how-title">{t('howItWorks.title')}</h2>
                <div className="timeline">
                    {steps.map((step, index) => (
                        <div className="timeline-step" key={index}>
                            <div className="timeline-icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
