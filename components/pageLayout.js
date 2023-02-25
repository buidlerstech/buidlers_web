import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import './globals.css';

export default function PageLayout({ children }) {
  const description =
    'Formamos el hub de desarrolladores Web3 en español donde la descentralización, calidad y colaboración son parte de nuestra identidad.'

  const site = 'Buidlẽrs.tech'
  const title = 'Sinergia de mentes ávidas de conocimiento Web3.'
  const image = 'https://buidlers.tech/banner.png'

  const fullTitle = `${site} | ${title}`

  return (
    <>
      <Head className={styles.container}>
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
      </Head>

      <main>{children}</main>
    </>
  )
}
