export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: 'analysis' | 'certified' | 'natural' | 'calm';
  title: string;
  description: string;
}

export interface ContactCard {
  type: 'whatsapp' | 'instagram' | 'call';
  label: string;
  value: string;
  href: string;
}

export const siteInfo = {
  name: 'Beautiq Kosmetikstudio',
  shortName: 'Beautiq',
  addressLines: ['Brabanter Str. 45', '41849 Wassenberg-Myhl', 'Deutschland'],
  phoneDisplay: '+49 1234567890',
  phoneHref: '+49 1234567890',
  whatsappHref: 'https://wa.me/+49 1234567890',
  instagramHandle: 'https://instagram.com',
  instagramHref: 'https://instagram.com',
  hours: ['Di–Fr 9:30–18:00 Uhr', 'Sa 9:30–14:00 Uhr'],
  mapEmbedSrc:
    'https://www.google.com/maps?q=Brabanter+Str.+45,+41849+Wassenberg-Myhl,+Germany&output=embed',
};

export const navLinks: NavLink[] = [
  { label: 'Über uns', href: '#about' },
  { label: 'Leistungen', href: '#features' },
  { label: 'Standort', href: '#location' },
  { label: 'Kontakt', href: '#contact' },
];

export const features: Feature[] = [
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
];

export const contactCards: ContactCard[] = [
  {
    type: 'whatsapp',
    label: 'WhatsApp',
    value: siteInfo.phoneDisplay,
    href: siteInfo.whatsappHref,
  },
  {
    type: 'instagram',
    label: 'Instagram',
    value: siteInfo.instagramHandle,
    href: siteInfo.instagramHref,
  },
  {
    type: 'call',
    label: 'Anrufen',
    value: siteInfo.phoneDisplay,
    href: `tel:${siteInfo.phoneHref}`,
  },
];
