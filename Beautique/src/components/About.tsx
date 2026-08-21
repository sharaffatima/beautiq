import { FaMortarPestle, FaClock, FaHandSparkles, FaLocationDot } from 'react-icons/fa6';
import { useLanguage } from '../i18n/LanguageContext';
import './About.css';

const factIcons = [FaClock, FaHandSparkles, FaLocationDot];

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="about" id="about">
      <div className="about__media">
        <img
          src="https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Behandlung im Studio"
          loading="lazy"
        />
      </div>
      <div className="about__content">
        <p className="eyebrow">
          <FaMortarPestle aria-hidden="true" /> {t.about.eyebrow}
        </p>
        <h2>{t.about.heading}</h2>
        {t.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ul className="about__facts">
          {t.about.facts.map((fact, i) => {
            const Icon = factIcons[i] ?? FaClock;
            return (
              <li key={fact}>
                <Icon aria-hidden="true" /> {fact}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
