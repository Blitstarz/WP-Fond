import React from 'react';
import { useTranslation } from 'react-i18next';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <section className="privacy-policy">
            <div className="privacy-container">
                <h1 className="privacy-title">{t('privacy.title')}</h1>

                <div className="privacy-content">
                    <section className="policy-section">
                        <p className="privacy-intro">{t('privacy.intro')}</p>
                    </section>

                    <section className="policy-section">
                        <h2>{t('privacy.general.title')}</h2>
                        <p>{t('privacy.general.1.1')}</p>
                        <p>{t('privacy.general.1.2')}</p>
                        <p>{t('privacy.general.1.3')}</p>
                        <p>{t('privacy.general.1.4')}</p>
                        <p>{t('privacy.general.1.5')}</p>
                        <p>{t('privacy.general.1.6')}</p>
                        <p>{t('privacy.general.1.7')}</p>
                        <p>{t('privacy.general.1.8')}</p>
                        <p>{t('privacy.general.1.9')}</p>
                        <p>{t('privacy.general.1.10')}</p>
                    </section>

                    <section className="policy-section">
                        <h2>{t('privacy.dataTypes.title')}</h2>
                        <p>{t('privacy.dataTypes.2.1')}</p>
                        <p>{t('privacy.dataTypes.2.2')}</p>
                        <p>{t('privacy.dataTypes.2.3')}</p>
                        <p>{t('privacy.dataTypes.2.4')}</p>
                    </section>

                    <section className="policy-section">
                        <h2>{t('privacy.purpose.title')}</h2>
                        <p>{t('privacy.purpose.3.1')}</p>
                        <p>{t('privacy.purpose.3.2')}</p>
                        <p>{t('privacy.purpose.3.3')}</p>
                        <p>{t('privacy.purpose.3.4')}</p>
                    </section>

                    <section className="policy-section">
                        <h2>{t('privacy.disclosure.title')}</h2>
                        <p>{t('privacy.disclosure.4.1')}</p>
                        <p>{t('privacy.disclosure.4.2')}</p>
                        <p>{t('privacy.disclosure.4.3')}</p>
                        <p>{t('privacy.disclosure.4.4')}</p>
                        <p>{t('privacy.disclosure.4.5')}</p>
                    </section>

                    <section className="policy-section">
                        <h2>{t('privacy.modification.title')}</h2>
                        <p>{t('privacy.modification.5.1')}</p>
                        <p>{t('privacy.modification.5.2')}</p>
                    </section>

                    <section className="policy-section">
                        <h2>{t('privacy.changes.title')}</h2>
                        <p>{t('privacy.changes.6.1')}</p>
                        <p>{t('privacy.changes.6.2')}</p>
                        <p>{t('privacy.changes.6.3')}</p>
                    </section>

                    <section className="policy-section">
                        <h2>{t('privacy.rights.title')}</h2>
                        <p>{t('privacy.rights.intro')}</p>
                        <p>{t('privacy.rights.7.1')}</p>
                        <p>{t('privacy.rights.7.2')}</p>
                        <p>{t('privacy.rights.7.3')}</p>
                        <p>{t('privacy.rights.7.4')}</p>
                        <p>{t('privacy.rights.7.5')}</p>
                        <p>{t('privacy.rights.7.6')}</p>
                        <p>{t('privacy.rights.7.7')}</p>
                        <p>{t('privacy.rights.7.8')}</p>
                        <p>{t('privacy.rights.7.9')}</p>
                        <p>{t('privacy.rights.7.10')}</p>
                        <p>{t('privacy.rights.7.11')}</p>
                        <p>{t('privacy.rights.7.12')}</p>
                        <p>{t('privacy.rights.7.13')}</p>
                    </section>

                    <section className="policy-section">
                        <h2>{t('privacy.other.title')}</h2>
                        <p>{t('privacy.other.8.1')}</p>
                        <p>{t('privacy.other.8.2')}</p>
                        <p>{t('privacy.other.8.3')}</p>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
