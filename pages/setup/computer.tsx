import type { NextPage } from 'next'
import { RadioForm } from '../../components/RadioForm'
import styles from '../../styles/Home.module.css'

const computer: NextPage = () => {
  const formLabel = 'どのPCを使っていますか？'
  const items = [
    { value: 'mac', label: 'Mac' },
    { value: 'windows', label: 'Windows' },
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

export default computer
