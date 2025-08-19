import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
    const { i18n, t } = useTranslation()
    const currentLang = i18n.language

    const allLanguages = ['en', 'uk', 'pl']
    const availableLanguages = allLanguages.filter((lng) => lng !== currentLang)

    const handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div className="language-switcher">
            <p className="language-title">{t('footer.languageSelectorLabel')}</p>
            <div className="flags">
                {availableLanguages.map((lng) => (
                    <button key={lng} onClick={() => handleChangeLanguage(lng)} aria-label={lng}>
                        <img src={`/flags/${lng}.png`} alt={lng} />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default LanguageSwitcher
