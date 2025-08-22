import './Partners.css';
import { useTranslation } from 'react-i18next';

const logos = [
    { src: '/partners/Picture1.jpg', size: 'large' },
    { src: '/partners/Picture2.jpg', size: 'small' },
    { src: '/partners/Picture3.jpg', size: 'small' },
    { src: '/partners/Picture5.jpg', size: 'large' },
    { src: '/partners/Picture4.jpg', size: 'small' },
    { src: '/partners/Picture6.jpg', size: 'small' }
];

const Partners = () => {
    const { t } = useTranslation();

    return (
        <section className="partners">
            <div className="partners-container">
                <h2 className="partners-title">{t('partners.title')}</h2>
                <p className="partners-subtitle">
                    {t('partners.subtitle')}
                </p>
                <div className="partners-mosaic">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className={`partner-item ${logo.size}`}
                        >
                            <img
                                src={logo.src}
                                alt={`Partner ${index + 1}`}
                                className="partner-logo"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
