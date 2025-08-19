import './Hero.css'
import { useTranslation, Trans } from 'react-i18next'

const Hero = () => {
    const { t } = useTranslation()

    return (
        <section className="hero">
            <div className="hero-inner">
                <div className="hero-content">
                    <img src="/logo.png" alt="mWallet logo" className="hero-logo" />

                    <h1>
                        <Trans i18nKey="hero.title" components={[<span className="m-color" />]} />
                    </h1>

                    <p>
                        <Trans
                            i18nKey="hero.subtitle"
                            components={{
                                1: <span className="bold" />,
                                br: <br />
                            }}
                        />
                    </p>


                    <a href="https://wallone.online/" target="_blank" rel="noopener noreferrer" className="cta">
                        {t('hero.button')}
                    </a>
                </div>

                <div className="hero-image">
                    <img src="/phone.png" alt="Phone dashboard" />
                </div>
            </div>
        </section>
    )
}

export default Hero
