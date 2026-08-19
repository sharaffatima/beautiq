import { FaMortarPestle, FaClock, FaHandSparkles, FaLocationDot } from 'react-icons/fa6';
import './About.css';

export default function About() {
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
          <FaMortarPestle aria-hidden="true" /> Über uns
        </p>
        <h2>Ein Studio, das sich Zeit nimmt</h2>
        <p>
          Beautiq Kosmetikstudio wurde in Wassenberg-Myhl mit einer
          einfachen Idee eröffnet: Hautpflege sollte nicht hastig sein. In
          unseren Behandlungsräumen kombinieren wir klassische kosmetische
          Verfahren mit einer sorgfältig ausgewählten Produktlinie — ohne
          überflüssige Schritte, ohne Zeitdruck.
        </p>
        <p>
          Jede Behandlung beginnt mit einer kurzen Hautanalyse, damit Pflege
          und Produkt tatsächlich zum jeweiligen Hauttyp passen. Unser Team
          arbeitet bewusst mit einer begrenzten Zahl an Terminen pro Tag, um
          jedem Gast die nötige Ruhe zu geben.
        </p>
        <ul className="about__facts">
          <li>
            <FaClock aria-hidden="true" /> Di–Sa, nach Terminvereinbarung
          </li>
          <li>
            <FaHandSparkles aria-hidden="true" /> Naturnahe, hautschonende
            Produkte
          </li>
          <li>
            <FaLocationDot aria-hidden="true" /> Wassenberg-Myhl, direkt an
            der Brabanter Straße
          </li>
        </ul>
      </div>
    </section>
  );
}
