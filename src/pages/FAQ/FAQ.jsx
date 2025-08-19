import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './FAQ.css'

const FAQ = () => {
    const { t } = useTranslation()
    const [openIndex, setOpenIndex] = useState(null)
    const data = t('faq.items', { returnObjects: true })

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="faq" id="faq">
            <h2 className="faq-title">{t('faq.title')}</h2>
            <div className="faq-list">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item ${openIndex === index ? 'open' : ''}`}
                        onClick={() => toggle(index)}
                    >
                        <div className="faq-question">
                            {item.q}
                            <span className={`arrow ${openIndex === index ? 'rotate' : ''}`}>⌄</span>
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer">
                                {item.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQ
