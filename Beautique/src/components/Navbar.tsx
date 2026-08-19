import { useState } from 'react';
import { FaLeaf, FaBars, FaXmark, FaCalendarCheck } from 'react-icons/fa6';
import { useScrollHidden } from '../hooks/useScrollDirection';
import { navLinks, siteInfo } from '../data/content';
import './Navbar.css';

export default function Navbar() {
  const hidden = useScrollHidden();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`nav-island${hidden ? ' is-hidden' : ''}`}>
      <a href="#top" className="nav-mark" onClick={closeMenu}>
        <span className="nav-mark__glyph">
          <FaLeaf aria-hidden="true" />
        </span>
        <span className="nav-mark__text">{siteInfo.shortName}</span>
      </a>

      <nav className={`nav-links${open ? ' is-open' : ''}`} id="navLinks">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="nav-cta">
        <FaCalendarCheck aria-hidden="true" /> Termin anfragen
      </a>

      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
        aria-expanded={open}
        aria-controls="navLinks"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
      </button>
    </header>
  );
}
