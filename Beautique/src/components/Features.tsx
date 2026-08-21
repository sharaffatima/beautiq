import { FaFlask, FaMagnifyingGlass, FaCertificate, FaLeaf, FaWind } from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { useLanguage } from '../i18n/LanguageContext';
import type { FeatureCopy } from '../i18n/translations';
import './Features.css';

const iconMap: Record<FeatureCopy['icon'], IconType> = {
  analysis: FaMagnifyingGlass,
  certified: FaCertificate,
  natural: FaLeaf,
  calm: FaWind,
};

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="features" id="features">
      <div className="section-head">
        <p className="eyebrow">
          <FaFlask aria-hidden="true" /> {t.features.eyebrow}
        </p>
        <h2>{t.features.heading}</h2>
        <p className="section-head__sub">{t.features.sub}</p>
      </div>

      <div className="feature-grid">
        {t.features.items.map((feature) => {
          const Icon = iconMap[feature.icon];
          return (
            <article className="feature-card" key={feature.title}>
              <span className="feature-card__icon">
                <Icon aria-hidden="true" />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
