import Head from 'next/head'
import styles from '../styles/Home.module.css'
<<<<<<< HEAD
import Header from '../templates/Header'
=======
import RadicalXlogo from '../assets/RadicalX.svg'
import Diamond from '../assets/Diamondblue.jpg'
import Coin from '../components/GoldCoin.jpg'
import Avatar from '../components/ellipse.jpg'
import Status from '../components/Statusgreen.jpg'
import Link from 'next/link'
>>>>>>> 57b529fddf1e81d3607b0a90d395af23b6f50a03

export default function Home() {
  return (
    <div className={styles.container}>
      <Head> 
        <Header/>
      </Head>
    </div>
  )
}