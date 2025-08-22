import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [file, setFile] = useState(null);
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const messageText = `
📬 Нова заявка з сайту:
👤 Ім'я: ${formData.name}
📧 Email: ${formData.email}
💬 Повідомлення: ${formData.message}
        `.trim();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('message', formData.message);
        data.append('telegramText', messageText);
        if (file) {
            data.append('file', file);
        }

        try {
            await fetch('http://localhost:5055/api/contact', {
                method: 'POST',
                body: data,
            });

            setIsSent(true);
            setFormData({ name: '', email: '', message: '' });
            setFile(null);
        } catch (err) {
            alert('Помилка при надсиланні повідомлення. Спробуйте ще раз.');
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">{t('contact.title', 'Contact Us')}</h2>
                <p className="contact-subtitle">
                    {t('contact.subtitle', 'Get in touch with us for more information about our acceleration program.')}
                </p>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>{t('contact.info.title', 'Contact Information')}</h3>
                        <div className="contact-details">
                            <div className="contact-item-new">
                                <strong>{t('contact.info.email', 'Email:')}</strong>
                                <a href="mailto:info@wp-fond.pl">info@wp-fond.pl</a>
                            </div>
                            <div className="contact-item-new">
                                <strong>{t('contact.info.phone', 'Phone:')}</strong>
                                <a href="tel:+48123456789">+48 12 345 67 89</a>
                            </div>
                            <div className="contact-item-new">
                                <strong>{t('contact.info.address', 'Address:')}</strong>
                                <span>Warszawa, Polska</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h3>{t('contact.form.title', 'Send us a Message')}</h3>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={t('contact.form.name', 'Your Name')}
                                    className="form-input"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t('contact.form.email', 'Your Email')}
                                    className="form-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder={t('contact.form.message', 'Your Message')}
                                    className="form-textarea"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <input
                                    type="file"
                                    name="file"
                                    className="form-input"
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx,.jpg,.png"
                                />
                            </div>
                            <button type="submit" className="form-button">
                                {t('contact.form.submit', 'Send Message')}
                            </button>
                        </form>

                        {isSent && (
                            <div className="modal-sent">
                                ✅ Ваше повідомлення надіслано!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
