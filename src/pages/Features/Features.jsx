import './Features.css'
import { useTranslation, Trans } from 'react-i18next'

const Features = () => {
    const { t } = useTranslation()
    const features = t('features.list', { returnObjects: true })

    return (
        <section className="features" id="features">
            {features.map((feature, idx) => (
                <div className="feature" key={idx}>
                    <img src={feature.img} alt={feature.alt} />
                    <div>
                        <h3>{feature.title}</h3>
                        <p>
                            <Trans>{feature.desc}</Trans>
                        </p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Features
