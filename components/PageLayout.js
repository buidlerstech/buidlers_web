import Head from 'next/head'

export default function PageLayout({ children }) {
  const description =
    'Formamos el hub de desarrolladores Web3 en español donde la descentralización, calidad y colaboración son parte de nuestra identidad.'

  const site = 'Buidlẽrs.tech'
  const title = 'Sinergia de mentes ávidas de conocimiento Web3.'
  const image = 'https://buidlers.tech/banner.png'

  const fullTitle = `${site} | ${title}`

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="robots" content="max-image-preview:large" />
        <meta name="description" content={description} />
        <meta name="title" content={`${site} | ${title}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta
          property="og:url"
          content="[https://buidlers.tech](https://buidlers.tech)"
        />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="[https://buidlers.tech](https://buidlers.tech)"
        />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300..700&family=Halant:wght@300;400;500;600;700&family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>{children}</main>
    </>
  )
}
