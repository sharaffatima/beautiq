import { FaSeedling, FaWhatsapp } from 'react-icons/fa6';
import { siteInfo } from '../data/content';
import { useLanguage } from '../i18n/LanguageContext';
import './Welcome.css';

export default function Welcome() {
  const { t } = useLanguage();

  return (
    <section className="welcome">
      <div className="welcome__inner">
        <span className="welcome__icon">
          <FaSeedling aria-hidden="true" />
        </span>
        <h2>
          {t.welcome.headingPre} <em>{t.welcome.headingEm}</em>.
        </h2>
        <p>{t.welcome.paragraph}</p>
        <a
          href={siteInfo.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          <FaWhatsapp aria-hidden="true" /> {t.welcome.cta}
        </a>
      </div>
    </section>
  );
}
