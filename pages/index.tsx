import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wordle Assistant</title>
        <meta name="description" content="Your Wordle assistant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.header}>
          <div className={styles.title}>Wordle Assistant</div>
        </nav>

        <div className={styles.grid}>
          
        </div>
      </main>
    </div>
  )
}

export default Home
