import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Toolbar } from '../components/toolbar'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <div className="page-container">
      <div className={styles.main}>
        <Toolbar />
        <h1>News App</h1>
        <h3>your one stop shop for the latest news articles</h3>
      </div>
      <Footer />
    </div>
  )
}
