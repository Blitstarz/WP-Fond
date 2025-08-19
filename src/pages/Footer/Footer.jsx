import './Footer.css'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../components/LanguageSwitcher'

const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <img src="/logo.png" alt="mWallet logo" className="footer-logo-img"/>
                    <p>{t('footer.rights')}</p>
                </div>

                <div className="footer-social">
                    <span className="footer-social-title">{t('footer.findUsOn')}</span>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com/mBank.Polska" target="_blank" rel="noopener noreferrer">
                            <span className="icon-circle">
                                <img src="/social/facebook.svg" alt="Facebook"/>
                            </span>
                        </a>
                        <a href="https://www.instagram.com/mbankpl/" target="_blank" rel="noopener noreferrer">
                            <span className="icon-circle">
                                <img src="/social/insta.svg" alt="Instagram"/>
                            </span>
                        </a>
                        <a href="https://x.com/mBankpl" target="_blank" rel="noopener noreferrer">
                            <span className="icon-circle">
                                <img src="/social/x.svg" alt="X"/>
                            </span>
                        </a>
                        <a href="https://www.youtube.com/mBankTV" target="_blank" rel="noopener noreferrer">
                            <span className="icon-circle">
                                <img src="/social/youtube.svg" alt="YouTube"/>
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/company/mbank-s-a" target="_blank" rel="noopener noreferrer">
                            <span className="icon-circle">
                                <img src="/social/linkedin.svg" alt="LinkedIn"/>
                            </span>
                        </a>

                    </div>
                    <div className="footer-languages">
                        <span className="footer-languages-title"></span>
                        <LanguageSwitcher/>
                    </div>
                </div>

                <div className="footer-mobile-apps">
                    <div className="footer-mobile-title">{t('footer.mobileApplication')}</div>
                    <a href="https://play.google.com/store/apps/details?id=pl.mbank" target="_blank" rel="noopener noreferrer">
                        <img src="/stores/googleplay.svg" alt="Google Play" />
                    </a>
                    <a href="https://itunes.apple.com/pl/app/mbank-pl/id454987093?mt=8" target="_blank" rel="noopener noreferrer">
                        <img src="/stores/appstore.svg" alt="App Store" />
                    </a>
                    <a href="https://appgallery.cloud.huawei.com/ag/n/app/C102250427?channelId=EUPLBDD20201120MB&detailType=0" target="_blank" rel="noopener noreferrer">
                        <img src="/stores/appgallery.svg" alt="AppGallery" />
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer
