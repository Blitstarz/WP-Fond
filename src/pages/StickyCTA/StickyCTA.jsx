import './StickyCTA.css'
import { useTranslation } from 'react-i18next'

const StickyCTA = () => {
    const { t } = useTranslation()

    return (
        <div className="sticky-cta">
            <a
                href="https://wallone.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="sticky-button"
            >
                {t('stickyCTA.startNow')}
            </a>
        </div>
    )
}

export default StickyCTA
