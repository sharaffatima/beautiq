import { FaLocationDot, FaClock, FaSignsPost } from 'react-icons/fa6';
import { siteInfo } from '../data/content';
import { useLanguage } from '../i18n/LanguageContext';
import './Location.css';

export default function Location() {
  const { t } = useLanguage();

  return (
    <section className="location" id="location">
      <div className="location__info">
        <p className="eyebrow">
          <FaLocationDot aria-hidden="true" /> {t.location.eyebrow}
        </p>
        <h2>{t.location.heading}</h2>
        <p>{t.location.paragraph}</p>

        <ul className="location__list">
          <li>
            <FaSignsPost aria-hidden="true" />
            <span>
              {siteInfo.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </span>
          </li>
          <li>
            <FaClock aria-hidden="true" />
            <span>
              {t.location.hours.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </span>
          </li>
        </ul>
      </div>

      <div className="location__map">
        <iframe
          title={t.location.mapTitle}
          src={siteInfo.mapEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
