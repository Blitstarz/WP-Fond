import './Stats.css'
import { useTranslation } from 'react-i18next'

const Stats = () => {
    const { t } = useTranslation()
    const stats = t('stats.list', { returnObjects: true })

    return (
        <section className="stats" id="stats">
            <div className="stats-container">
                {stats.map((item, index) => (
                    <div className="stat" key={index}>
                        <div className="stat-number">{item.number}</div>
                        <div className="stat-label">{item.label}</div>
                    </div>
                ))}
            </div>
            <div className="stats-footnote">{t('stats.footnote')}</div>
        </section>
    )
}

export default Stats
