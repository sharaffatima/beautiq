import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelopeOpenText, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { contactCards } from '../data/content';
import { useLanguage } from '../i18n/LanguageContext';
import './Contact.css';

const iconMap: Record<(typeof contactCards)[number]['type'], IconType> = {
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  call: FaPhone,
};

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="contact" id="contact">
      <div className="section-head">
        <p className="eyebrow">
          <FaEnvelopeOpenText aria-hidden="true" /> {t.contact.eyebrow}
        </p>
        <h2>{t.contact.heading}</h2>
        <p className="section-head__sub">{t.contact.sub}</p>
      </div>

      <div className="contact-grid">
        {contactCards.map((card, i) => {
          const Icon = iconMap[card.type];
          const label = t.contact.cards[i]?.label ?? card.type;
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
              <span className="contact-card__label">{label}</span>
              <span className="contact-card__value">{card.value}</span>
              <FaArrowUpRightFromSquare className="contact-card__arrow" aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
