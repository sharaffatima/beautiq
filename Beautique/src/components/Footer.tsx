import { FaFacebookF, FaInstagram, FaLocationDot, FaPhone, FaTiktok, FaWhatsapp } from 'react-icons/fa6';
import { siteInfo } from '../data/content';
import { useLanguage } from '../i18n/LanguageContext';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <span>{siteInfo.name}</span>
        </div>

        <ul className="site-footer__contact">
          <li>
            <FaLocationDot aria-hidden="true" /> {siteInfo.addressLines.join(', ')}
          </li>
          <li>
            <FaPhone aria-hidden="true" /> {siteInfo.phoneDisplay}
          </li>
        </ul>

        <div className="site-footer__social">
          <a href={siteInfo.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Beautique per WhatsApp">
            <FaWhatsapp aria-hidden="true" />
          </a>
          <a href={siteInfo.instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Beautique auf Instagram">
            <FaInstagram aria-hidden="true" />
          </a>
          <a href="#" aria-label="Beautique auf Facebook">
            <FaFacebookF aria-hidden="true" />
          </a>
          <a href="#" aria-label="Beautique auf TikTok">
            <FaTiktok aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>{t.footer.disclaimer(year)}</p>
      </div>
    </footer>
  );
}
