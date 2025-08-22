import React from 'react';
import { useTranslation } from 'react-i18next';
import './TermsOfService.css';

const TermsOfService = () => {
    const { t } = useTranslation();

    return (
        <section className="terms-of-service">
            <div className="terms-container">
                <h1 className="terms-title">{t('terms.title')}</h1>
                
                <div className="terms-content">
                    <section className="terms-section">
                        <h2>{t('terms.general.title')}</h2>
                        <p>{t('terms.general.text')}</p>
                    </section>

                    <section className="terms-section">
                        <h2>{t('terms.scope.title')}</h2>
                        <p>{t('terms.scope.intro')}</p>
                        <ul>
                            <li>{t('terms.scope.list1')}</li>
                            <li>{t('terms.scope.list2')}</li>
                            <li>{t('terms.scope.list3')}</li>
                            <li>{t('terms.scope.list4')}</li>
                        </ul>
                    </section>

                    <section className="terms-section">
                        <h2>{t('terms.participation.title')}</h2>
                        <ul>
                            <li>{t('terms.participation.intro')}</li>
                            <li>{t('terms.participation.criteria')}
                                <ul>
                                    <li>{t('terms.participation.list1')}</li>
                                    <li>{t('terms.participation.list2')}</li>
                                    <li>{t('terms.participation.list3')}</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section className="terms-section">
                        <h2>{t('terms.agreement.title')}</h2>
                        <p>{t('terms.agreement.text')}</p>
                    </section>

                    <section className="terms-section">
                        <h2>{t('terms.rights.title')}</h2>
                        
                        <h3>{t('terms.rights.organizer.title')}</h3>
                        <ul>
                            <li>{t('terms.rights.organizer.list1')}</li>
                            <li>{t('terms.rights.organizer.list2')}</li>
                        </ul>

                        <h3>{t('terms.rights.participant.title')}</h3>
                        <ul>
                            <li>{t('terms.rights.participant.list1')}</li>
                            <li>{t('terms.rights.participant.list2')}</li>
                        </ul>
                    </section>

                    <section className="terms-section">
                        <h2>{t('terms.liability.title')}</h2>
                        <ul>
                            <li>{t('terms.liability.organizer')}</li>
                            <li>{t('terms.liability.participant')}</li>
                        </ul>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default TermsOfService;
