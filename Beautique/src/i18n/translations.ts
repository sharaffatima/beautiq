export type Language = 'de' | 'en';

export interface FeatureCopy {
  icon: 'analysis' | 'certified' | 'natural' | 'calm';
  title: string;
  description: string;
}

export interface ContactCardCopy {
  type: 'whatsapp' | 'instagram' | 'call';
  label: string;
}

export interface Translation {
  nav: {
    about: string;
    features: string;
    location: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleEm: string;
    sub: string;
    ctaPrimary: string;
    ctaGhost: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    facts: string[];
  };
  features: {
    eyebrow: string;
    heading: string;
    sub: string;
    items: FeatureCopy[];
  };
  location: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    hours: string[];
    mapTitle: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    sub: string;
    cards: ContactCardCopy[];
  };
  welcome: {
    headingPre: string;
    headingEm: string;
    paragraph: string;
    cta: string;
  };
  footer: {
    disclaimer: (year: number) => string;
  };
}

export const translations: Record<Language, Translation> = {
  de: {
    nav: {
      about: 'Über uns',
      features: 'Leistungen',
      location: 'Standort',
      contact: 'Kontakt',
      cta: 'Termin anfragen',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
    },
    hero: {
      eyebrow: 'Kosmetikstudio · Wassenberg-Myhl',
      titleLine1: 'Gepflegte Haut,',
      titleEm: 'ganz in Ruhe.',
      sub: 'BeautiQ verbindet dermatologisch durchdachte Behandlungen mit naturnahen Pflegeprodukten — in einem kleinen, ruhigen Studio nahe der niederländischen Grenze.',
      ctaPrimary: 'Termin anfragen',
      ctaGhost: 'Leistungen entdecken',
    },
    about: {
      eyebrow: 'Über uns',
      heading: 'Ein Studio, das sich Zeit nimmt',
      paragraphs: [
        'BeautiQ Kosmetikstudio wurde in Wassenberg-Myhl mit einer einfachen Idee eröffnet: Hautpflege sollte nicht hastig sein. In unseren Behandlungsräumen kombinieren wir klassische kosmetische Verfahren mit einer sorgfältig ausgewählten Produktlinie — ohne überflüssige Schritte, ohne Zeitdruck.',
        'Jede Behandlung beginnt mit einer kurzen Hautanalyse, damit Pflege und Produkt tatsächlich zum jeweiligen Hauttyp passen. Unser Team arbeitet bewusst mit einer begrenzten Zahl an Terminen pro Tag, um jedem Gast die nötige Ruhe zu geben.',
      ],
      facts: [
        'Di–Sa, nach Terminvereinbarung',
        'Naturnahe, hautschonende Produkte',
        'Wassenberg-Myhl, direkt an der Brabanter Straße',
      ],
    },
    features: {
      eyebrow: 'Leistungen',
      heading: 'Warum BeautiQ',
      sub: 'Vier Grundsätze, an denen sich jede Behandlung bei uns orientiert.',
      items: [
        {
          icon: 'analysis',
          title: 'Individuelle Hautanalyse',
          description:
            'Jede Behandlung beginnt mit einer kurzen Analyse, damit Pflege und Produkt wirklich zum Hauttyp passen.',
        },
        {
          icon: 'certified',
          title: 'Zertifizierte Kosmetikerinnen',
          description:
            'Unser Team ist staatlich geprüft und bildet sich regelmäßig in neuen kosmetischen Verfahren fort.',
        },
        {
          icon: 'natural',
          title: 'Naturnahe Produkte',
          description:
            'Wir arbeiten mit hautschonenden, weitgehend natürlichen Inhaltsstoffen ohne unnötige Zusätze.',
        },
        {
          icon: 'calm',
          title: 'Ruhige Atmosphäre',
          description:
            'Bewusst wenige Termine pro Tag, damit jeder Besuch entspannt und ohne Zeitdruck abläuft.',
        },
      ],
    },
    location: {
      eyebrow: 'Unser Standort',
      heading: 'Direkt an der Brabanter Straße',
      paragraph:
        'Das Studio liegt in Wassenberg-Myhl, gut erreichbar mit dem Auto und mit kostenfreien Parkplätzen direkt vor der Tür.',
      hours: ['Di–Fr 9:30–18:00 Uhr', 'Sa 9:30–14:00 Uhr'],
      mapTitle: 'BeautiQ Kosmetikstudio auf der Karte',
    },
    contact: {
      eyebrow: 'Kontakt',
      heading: 'Schreiben oder rufen Sie uns an',
      sub: 'Kein Kontaktformular nötig — wählen Sie einfach den Weg, der Ihnen am liebsten ist.',
      cards: [
        { type: 'whatsapp', label: 'WhatsApp' },
        { type: 'instagram', label: 'Instagram' },
        { type: 'call', label: 'Anrufen' },
      ],
    },
    welcome: {
      headingPre: 'Wir freuen uns, Sie',
      headingEm: 'bei BeautiQ',
      paragraph:
        'Ob erste Beratung oder Stammtermin — nehmen Sie sich die Zeit für Ihre Haut. Schreiben Sie uns kurz auf WhatsApp, wir melden uns persönlich zurück.',
      cta: 'Jetzt Kontakt aufnehmen',
    },
    footer: {
      disclaimer: (year) =>
        `© ${year} BeautiQ Kosmetikstudio. Alle Angaben sind fiktiv und dienen ausschließlich Übungszwecken.`,
    },
  },

  en: {
    nav: {
      about: 'About Us',
      features: 'Services',
      location: 'Location',
      contact: 'Contact',
      cta: 'Book an appointment',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      eyebrow: 'Beauty Studio · Wassenberg-Myhl',
      titleLine1: 'Well-cared skin,',
      titleEm: 'at your own pace.',
      sub: 'BeautiQ pairs dermatologically thoughtful treatments with nature-based skincare — in a small, calm studio close to the Dutch border.',
      ctaPrimary: 'Book an appointment',
      ctaGhost: 'Explore our services',
    },
    about: {
      eyebrow: 'About Us',
      heading: 'A studio that takes its time',
      paragraphs: [
        'BeautiQ Kosmetikstudio opened in Wassenberg-Myhl on a simple idea: skincare shouldn\u2019t be rushed. In our treatment rooms we combine classic beauty techniques with a carefully chosen product line — no unnecessary steps, no time pressure.',
        'Every treatment starts with a short skin analysis, so the care and products actually match your skin type. Our team deliberately keeps a limited number of appointments per day, so every guest gets the calm they came for.',
      ],
      facts: [
        'Tue–Sat, by appointment',
        'Nature-based, skin-friendly products',
        'Wassenberg-Myhl, right on Brabanter Straße',
      ],
    },
    features: {
      eyebrow: 'Services',
      heading: 'Why BeautiQ',
      sub: 'Four principles that guide every treatment we offer.',
      items: [
        {
          icon: 'analysis',
          title: 'Individual skin analysis',
          description:
            'Every treatment starts with a short analysis so care and product genuinely match your skin type.',
        },
        {
          icon: 'certified',
          title: 'Certified beauticians',
          description:
            'Our team holds state certification and regularly trains in new cosmetic techniques.',
        },
        {
          icon: 'natural',
          title: 'Nature-based products',
          description:
            'We work with skin-friendly, largely natural ingredients without unnecessary additives.',
        },
        {
          icon: 'calm',
          title: 'A calm atmosphere',
          description:
            'Deliberately few appointments per day, so every visit feels relaxed and unhurried.',
        },
      ],
    },
    location: {
      eyebrow: 'Our Location',
      heading: 'Right on Brabanter Straße',
      paragraph:
        'The studio is located in Wassenberg-Myhl, easy to reach by car with free parking right outside the door.',
      hours: ['Tue–Fri 9:30 AM–6:00 PM', 'Sat 9:30 AM–2:00 PM'],
      mapTitle: 'BeautiQ Kosmetikstudio on the map',
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Write or call us',
      sub: 'No contact form needed — just pick whichever way suits you best.',
      cards: [
        { type: 'whatsapp', label: 'WhatsApp' },
        { type: 'instagram', label: 'Instagram' },
        { type: 'call', label: 'Call' },
      ],
    },
    welcome: {
      headingPre: 'We\u2019d love to welcome you',
      headingEm: 'at BeautiQ',
      paragraph:
        'Whether it\u2019s a first consultation or a regular appointment — take the time for your skin. Send us a quick message on WhatsApp and we\u2019ll get back to you personally.',
      cta: 'Get in touch now',
    },
    footer: {
      disclaimer: (year) =>
        `© ${year} BeautiQ Kosmetikstudio. All details are fictional and for practice purposes only.`,
    },
  },
};
