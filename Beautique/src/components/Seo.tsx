import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/LanguageContext';

export default function Seo() {
  const { language } = useLanguage();

  const copy = {
    de: {
      title: 'BeautiQ Kosmetikstudio — Wassenberg-Myhl',
      description:
        'BeautiQ Kosmetikstudio in Wassenberg-Myhl: individuelle Gesichtsbehandlungen und naturnahe Hautpflege. Termine per WhatsApp oder Telefon.',
      locale: 'de_DE',
    },
    en: {
      title: 'BeautiQ Kosmetikstudio — Wassenberg-Myhl',
      description:
        'BeautiQ Kosmetikstudio in Wassenberg-Myhl: individual facial treatments and nature-based skincare. Book via WhatsApp or phone.',
      locale: 'en_US',
    },
  } as const;

  const { title, description, locale } = copy[language];

  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={locale} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
