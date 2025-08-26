import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPaperclip, FaTimes, FaMapPin, FaExclamationTriangle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '', taxId: '' });
    const [file, setFile] = useState(null);
    const [isSent, setIsSent] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const fileInputRef = useRef(null);

    const validate = useCallback(() => {
        const errs = {};
        if (!formData.name.trim()) errs.name = t('contact.form.validation.nameRequired');
        else if (formData.name.length < 2) errs.name = t('contact.form.validation.nameMinLength');

        if (!formData.phone.trim()) errs.phone = t('contact.form.validation.phoneRequired');
        else if (formData.phone.length < 7) errs.phone = t('contact.form.validation.phoneMinLength');
        else if (!/^[0-9\s+()-]+$/.test(formData.phone)) errs.phone = t('contact.form.validation.phoneInvalid');

        if (!formData.email.trim()) errs.email = t('contact.form.validation.emailRequired');
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = t('contact.form.validation.emailInvalid');

        if (!formData.taxId.trim()) errs.taxId = t('contact.form.validation.taxIdRequired');
        else if (formData.taxId.length < 5) errs.taxId = t('contact.form.validation.taxIdMinLength');

        if (!formData.message.trim()) errs.message = t('contact.form.validation.messageRequired');
        else if (formData.message.length < 8) errs.message = t('contact.form.validation.messageMinLength');

        setErrors(errs);
        return Object.keys(errs).length === 0;
    }, [formData, t]);

    useEffect(() => {
        if (wasSubmitted) {
            validate();
        }
    }, [wasSubmitted, validate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const dropped = e.dataTransfer.files[0];
        if (dropped) setFile(dropped);
    };

    const removeFile = () => {
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const formatSize = (bytes) => {
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
    };

    const getIcon = (name) => {
        const ext = name.split('.').pop().toLowerCase();
        if (['pdf'].includes(ext)) return '📄';
        if (['doc', 'docx'].includes(ext)) return '📝';
        if (['jpg', 'jpeg', 'png', 'gif'].includes(ext)) return '🖼️';
        return '📎';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setWasSubmitted(true);
        if (!validate()) return;

        setIsSubmitting(true);

        const messageText = `
📬 Нова заявка з сайту:
👤 Імʼя: ${formData.name}
📱 Телефон: ${formData.phone}
🏢 Tax ID: ${formData.taxId}
📧 Email: ${formData.email}
💬 Повідомлення: ${formData.message}
        `.trim();

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => data.append(key, value));
        data.append('telegramText', messageText);
        if (file) data.append('file', file);

        try {
            const response = await fetch('https://wp-server-x5zz.onrender.com/api/contact', {
                method: 'POST',
                body: data,
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Server error: ${response.status} ${errorText}`);
            }

            setFormData({ name: '', phone: '', email: '', message: '', taxId: '' });
            setFile(null);
            setErrors({});
            setIsSent(true);
            setTimeout(() => setIsSent(false), 3000);
        } catch (err) {
            setErrors({ submit: t('contact.form.error', 'Something went wrong') });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {isSent && (
                <div className="success-popup">✅ {t('contact.form.success')}</div>
            )}
            <section className="contact-section">
                <div className="contact-container">
                    <h2 className="contact-title">{t('contact.title')}</h2>
                    <p className="contact-subtitle">{t('contact.subtitle')}</p>
                    <div className="contact-content">
                        {/*<div className="contact-info">*/}
                        {/*    <h3>{t('contact.info.title')}</h3>*/}
                        {/*    <div className="contact-details">*/}
                        {/*        <div className="contact-item-new">*/}
                        {/*            <strong>{t('contact.info.email')}</strong>*/}
                        {/*            <a href="mailto:info@wp-fond.pl">info@wp-fond.pl</a>*/}
                        {/*        </div>*/}
                        {/*        <div className="contact-item-new">*/}
                        {/*            <strong>{t('contact.info.phone')}</strong>*/}
                        {/*            <a href="tel:+48123456789">+48 12 345 67 89</a>*/}
                        {/*        </div>*/}
                        {/*        <div className="contact-item-new">*/}
                        {/*            <strong>{t('contact.info.address')}</strong>*/}
                        {/*            <span>Warszawa, Polska</span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="contact-form">
                            <h3>{t('contact.form.title')}</h3>
                            <form className="form" onSubmit={handleSubmit} noValidate>
                                {['name', 'phone', 'taxId', 'email'].map(field => (
                                    <div className="form-group" key={field}>
                                        <input
                                            type={field === 'email' ? 'email' : 'text'}
                                            name={field}
                                            placeholder={t(`contact.form.${field}`)}
                                            className={`form-input ${errors[field] ? 'error' : ''}`}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            required
                                        />
                                        {errors[field] && (
                                            <div className="error-message">
                                                <FaExclamationTriangle className="error-icon" />
                                                {errors[field]}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        placeholder={t('contact.form.message')}
                                        className={`form-textarea ${errors.message ? 'error' : ''}`}
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    {errors.message && (
                                        <div className="error-message">
                                            <FaExclamationTriangle className="error-icon" />
                                            {errors.message}
                                        </div>
                                    )}
                                </div>

                                <div className="form-group file-upload-area" onDrop={handleDrop} onDragOver={e => e.preventDefault()}>
                                    <label className="file-upload-label">
                                        <FaMapPin className="pin-icon" />
                                        <div className="file-upload-text">
                                            <span className="file-upload-title">{t('contact.form.fileUpload.title')}</span>
                                            <span className="file-upload-subtitle">{t('contact.form.fileUpload.subtitle')}</span>
                                            <span className="file-upload-formats">{t('contact.form.fileUpload.formats')}</span>
                                        </div>
                                        <FaPaperclip className="attachment-icon" />
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            name="file"
                                            className="file-input"
                                            onChange={e => setFile(e.target.files[0])}
                                            accept=".pdf,.doc,.docx,.jpg,.png"
                                        />
                                    </label>

                                    {file && (
                                        <div className="selected-file">
                                            <div className="file-info">
                                                <span className="file-icon">{getIcon(file.name)}</span>
                                                <div className="file-details">
                                                    <div className="file-name">{file.name}</div>
                                                    <div className="file-size">{formatSize(file.size)}</div>
                                                </div>
                                            </div>
                                            <button className="remove-file-btn" onClick={removeFile}>
                                                <FaTimes />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {errors.submit && (
                                    <div className="error-message submit-error">
                                        <FaExclamationTriangle className="error-icon" />
                                        {errors.submit}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className={`form-button ${isSubmitting ? 'submitting' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
