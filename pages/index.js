import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Banner from '../components/banner'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home({enunciado}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>📚 Refranero</title>
        <meta name="description" content="Refranero español" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
      </Header>

      <main className={styles.main}>
        <Banner refran={enunciado}>
        </Banner>
      </main>

      <Footer>
      </Footer>

    </div>
  )
}

Home.getInitialProps = async () => {
  return fetch('http://localhost:3000/api/random')
    .then(res => res.json())
}