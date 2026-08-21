import { useState } from 'react';
import { FaBars, FaXmark, FaCalendarCheck } from 'react-icons/fa6';
import { useScrollHidden } from '../hooks/useScrollDirection';
import { useLanguage } from '../i18n/LanguageContext';
import logo from '../assets/logo.png';
import { siteInfo } from '../data/content';
import './Navbar.css';

export default function Navbar() {
  const hidden = useScrollHidden();
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const closeMenu = () => setOpen(false);

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#features', label: t.nav.features },
    { href: '#location', label: t.nav.location },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className={`nav-island${hidden ? ' is-hidden' : ''}`}>
      <a href="#top" className="nav-mark" onClick={closeMenu}>
        <img className="nav-mark__logo" src={logo} alt={siteInfo.name} />
        <span className="nav-mark__text">{siteInfo.shortName}</span>
      </a>

      <nav className={`nav-links${open ? ' is-open' : ''}`} id="navLinks">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="lang-toggle"
        onClick={toggleLanguage}
        aria-label={language === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
      >
        <span className={language === 'de' ? 'is-active' : ''}>DE</span>
        <span className="lang-toggle__sep">/</span>
        <span className={language === 'en' ? 'is-active' : ''}>EN</span>
      </button>

      <a href="#contact" className="nav-cta">
        <FaCalendarCheck aria-hidden="true" /> {t.nav.cta}
      </a>

      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        aria-expanded={open}
        aria-controls="navLinks"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
      </button>
    </header>
  );
}
