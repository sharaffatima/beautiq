import { FaFlask, FaMagnifyingGlass, FaCertificate, FaLeaf, FaWind } from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { features, type Feature } from '../data/content';
import './Features.css';

const iconMap: Record<Feature['icon'], IconType> = {
  analysis: FaMagnifyingGlass,
  certified: FaCertificate,
  natural: FaLeaf,
  calm: FaWind,
};

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="section-head">
        <p className="eyebrow">
          <FaFlask aria-hidden="true" /> Leistungen
        </p>
        <h2>Warum Beautiq</h2>
        <p className="section-head__sub">
          Vier Grundsätze, an denen sich jede Behandlung bei uns orientiert.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((feature) => {
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
