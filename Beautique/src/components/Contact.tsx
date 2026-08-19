import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelopeOpenText, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { contactCards, type ContactCard } from '../data/content';
import './Contact.css';

const iconMap: Record<ContactCard['type'], IconType> = {
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  call: FaPhone,
};

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-head">
        <p className="eyebrow">
          <FaEnvelopeOpenText aria-hidden="true" /> Kontakt
        </p>
        <h2>Schreiben oder rufen Sie uns an</h2>
        <p className="section-head__sub">
          Kein Kontaktformular nötig — wählen Sie einfach den Weg, der Ihnen
          am liebsten ist.
        </p>
      </div>

      <div className="contact-grid">
        {contactCards.map((card) => {
          const Icon = iconMap[card.type];
          return (
            <a
              className={`contact-card contact-card--${card.type}`}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              key={card.type}
            >
              <span className="contact-card__icon">
                <Icon aria-hidden="true" />
              </span>
              <span className="contact-card__label">{card.label}</span>
              <span className="contact-card__value">{card.value}</span>
              <FaArrowUpRightFromSquare className="contact-card__arrow" aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
