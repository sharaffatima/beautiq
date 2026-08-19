import { Helmet } from 'react-helmet-async';

export default function Seo() {
  const title = 'Beautiq Kosmetikstudio — Wassenberg-Myhl';
  const description =
    'Beautiq Kosmetikstudio in Wassenberg-Myhl: individuelle Gesichtsbehandlungen und naturnahe Hautpflege. Termine per WhatsApp oder Telefon.';

  return (
    <Helmet>
      <html lang="de" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="de_DE" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
