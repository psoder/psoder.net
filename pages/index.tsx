import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>psoder.net</title>
      </Head>

      <Header />
      <h1>Hello World!</h1>
      <Footer />
    </div>
  );
}

export default Home
