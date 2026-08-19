import { FaSeedling, FaWhatsapp } from 'react-icons/fa6';
import { siteInfo } from '../data/content';
import './Welcome.css';

export default function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome__inner">
        <span className="welcome__icon">
          <FaSeedling aria-hidden="true" />
        </span>
        <h2>
          Wir freuen uns, Sie <em>bei Beautiq</em> begrüßen zu dürfen.
        </h2>
        <p>
          Ob erste Beratung oder Stammtermin — nehmen Sie sich die Zeit für
          Ihre Haut. Schreiben Sie uns kurz auf WhatsApp, wir melden uns
          persönlich zurück.
        </p>
        <a
          href={siteInfo.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          <FaWhatsapp aria-hidden="true" /> Jetzt Kontakt aufnehmen
        </a>
      </div>
    </section>
  );
}
