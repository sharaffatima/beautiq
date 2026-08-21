/**
 * Static, non-translated data: proper nouns, addresses, phone numbers,
 * and links. Anything the user actually reads as language-dependent copy
 * lives in src/i18n/translations.ts instead.
 */

export interface ContactCard {
  type: 'whatsapp' | 'instagram' | 'call';
  value: string;
  href: string;
}

export const siteInfo = {
  name: 'Beautique Kosmetikstudio',
  shortName: 'Beautique',
  addressLines: ['Wassenberg', 'Deutschland'],
  phoneDisplay: '+49 1234 567890',
  phoneHref: '+491234567890',
  whatsappHref: 'https://wa.me/+491234567890',
  instagramHandle: '@beautique',
  instagramHref: 'https://www.instagram.com/beautiquekosmetik?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==',
  mapEmbedSrc:
    'https://www.google.com/maps?q=Wassenberg,+Germany&output=embed',
};

export const contactCards: ContactCard[] = [
  { type: 'whatsapp', value: siteInfo.phoneDisplay, href: siteInfo.whatsappHref },
  { type: 'instagram', value: siteInfo.instagramHandle, href: siteInfo.instagramHref },
  { type: 'call', value: siteInfo.phoneDisplay, href: `tel:${siteInfo.phoneHref}` },
];
