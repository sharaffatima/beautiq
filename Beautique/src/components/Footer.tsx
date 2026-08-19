import { FaLeaf, FaLocationDot, FaPhone, FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa6';
import { siteInfo } from '../data/content';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <span className="nav-mark__glyph">
            <FaLeaf aria-hidden="true" />
          </span>
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
          <a href={siteInfo.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Beautiq per WhatsApp">
            <FaWhatsapp aria-hidden="true" />
          </a>
          <a href={siteInfo.instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Beautiq auf Instagram">
            <FaInstagram aria-hidden="true" />
          </a>
          <a href="#" aria-label="Beautiq auf Facebook">
            <FaFacebookF aria-hidden="true" />
          </a>
          <a href="#" aria-label="Beautiq auf TikTok">
            <FaTiktok aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>
          &copy; {year} {siteInfo.name}. Alle Angaben sind fiktiv und dienen
          ausschließlich Übungszwecken.
        </p>
      </div>
    </footer>
  );
}
