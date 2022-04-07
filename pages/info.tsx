import type { NextPage } from 'next'
import Head from 'next/head'
import { RadioForm } from '../components/RadioForm'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const formLabel = '質問の種類を教えて下さい。'
  const items = [
    { value: 'female', label: 'マイコンの導入方法について' },
    { value: 'male', label: 'コードがうまく動かない' },
    { value: 'other', label: 'その他' },
  ]
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>ポケモニット</h1>
        <RadioForm formLabel={formLabel} items={items} />
      </main>
    </div>
  )
}

export default Home
