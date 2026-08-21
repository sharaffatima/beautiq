import { FaArrowRightLong, FaCalendarCheck, FaSeedling } from 'react-icons/fa6';
import { useLanguage } from '../i18n/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <img
          src="https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Gesichtsbehandlung im BeautiQ Kosmetikstudio"
          loading="eager"
        />
      </div>
      <div className="hero__content">
        <p className="eyebrow">
          <FaSeedling aria-hidden="true" /> {t.hero.eyebrow}
        </p>
        <h1 className="hero__title">
          {t.hero.titleLine1}
          <br />
          <em>{t.hero.titleEm}</em>
        </h1>
        <p className="hero__sub">{t.hero.sub}</p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">
            <FaCalendarCheck aria-hidden="true" /> {t.hero.ctaPrimary}
          </a>
          <a href="#features" className="btn btn--ghost">
            {t.hero.ctaGhost} <FaArrowRightLong aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
