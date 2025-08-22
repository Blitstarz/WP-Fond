import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './FAQ.css'

const FAQ = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(null)

    const items = [
        {
            q: t('faq.questions.eligibility.question'),
            a: t('faq.questions.eligibility.answer')
        },
        {
            q: t('faq.questions.cost.question'),
            a: t('faq.questions.cost.answer')
        },
        {
            q: t('faq.questions.duration.question'),
            a: t('faq.questions.duration.answer')
        },
        {
            q: t('faq.questions.outcome.question'),
            a: t('faq.questions.outcome.answer')
        },
        {
            q: t('faq.questions.application.question'),
            a: t('faq.questions.application.answer')
        }
    ]

    const toggle = (idx) => {
        setOpen((prev) => (prev === idx ? null : idx))
    }

    return (
        <section className="faq" id="faq">
            <div className="faq-container">
                <h2 className="faq-title">{t('faq.title')}</h2>
                <p className="faq-subtitle">{t('faq.subtitle')}</p>

                <div className="faq-list" role="list">
                    {items.map((item, idx) => {
                        const isOpen = open === idx
                        return (
                            <div className={`faq-item ${isOpen ? 'open' : ''}`} key={idx} role="listitem">
                                <button
                                    className="faq-question"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-panel-${idx}`}
                                    id={`faq-button-${idx}`}
                                    onClick={() => toggle(idx)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault()
                                            toggle(idx)
                                        }
                                    }}
                                >
                                    <span>{item.q}</span>
                                    <span className="faq-icon" aria-hidden="true" />
                                </button>

                                <div
                                    id={`faq-panel-${idx}`}
                                    role="region"
                                    aria-labelledby={`faq-button-${idx}`}
                                    className="faq-answer"
                                >
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FAQ
