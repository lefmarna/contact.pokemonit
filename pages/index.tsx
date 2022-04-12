import type { NextPage } from 'next'
import { RadioForm } from '../components/RadioForm'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const formLabel = '質問の種類を選択してください。'
  const items = [
    { value: 'setup', label: 'マイコンの導入方法について' },
    { value: 'code', label: 'コードがうまく動かない' },
    { value: 'other', label: 'その他' },
  ]
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <RadioForm formLabel={formLabel} items={items} />
      </main>
    </div>
  )
}

export default Home
