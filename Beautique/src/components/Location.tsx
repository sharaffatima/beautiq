import { FaLocationDot, FaClock, FaSignsPost } from 'react-icons/fa6';
import { siteInfo } from '../data/content';
import './Location.css';

export default function Location() {
  return (
    <section className="location" id="location">
      <div className="location__info">
        <p className="eyebrow">
          <FaLocationDot aria-hidden="true" /> Unser Standort
        </p>
        <h2>Direkt an der Brabanter Straße</h2>
        <p>
          Das Studio liegt in Wassenberg-Myhl, gut erreichbar mit dem Auto
          und mit kostenfreien Parkplätzen direkt vor der Tür.
        </p>

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
              {siteInfo.hours.map((line) => (
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
          title="Beautiq Kosmetikstudio auf der Karte"
          src={siteInfo.mapEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
