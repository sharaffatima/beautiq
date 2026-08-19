import { FaSeedling, FaCalendarCheck, FaArrowRightLong } from 'react-icons/fa6';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <img
          src="https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Gesichtsbehandlung im Beautiq Kosmetikstudio"
          loading="eager"
        />
      </div>
      <div className="hero__content">
        <p className="eyebrow">
          <FaSeedling aria-hidden="true" /> Kosmetikstudio · Wassenberg-Myhl
        </p>
        <h1 className="hero__title">
          Gepflegte Haut,
          <br />
          <em>ganz in Ruhe.</em>
        </h1>
        <p className="hero__sub">
          Beautiq verbindet dermatologisch durchdachte Behandlungen mit
          naturnahen Pflegeprodukten — in einem kleinen, ruhigen Studio nahe
          der niederländischen Grenze.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">
            <FaCalendarCheck aria-hidden="true" /> Termin anfragen
          </a>
          <a href="#features" className="btn btn--ghost">
            Leistungen entdecken <FaArrowRightLong aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
