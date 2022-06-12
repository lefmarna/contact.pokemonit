import type { NextPage } from 'next'
import { useRecoilValue } from 'recoil'
import { computerState, computerTextFieldValueState, miconState } from '../../src/store/setupState'
import styles from '../../styles/Home.module.css'

const Result: NextPage = () => {
  const computerValue = useRecoilValue(computerState)
  const computerTextFieldValue = useRecoilValue(computerTextFieldValueState)
  const miconValue = useRecoilValue(miconState)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p>{computerValue}</p>
        <p>{computerTextFieldValue}</p>
        <p>{miconValue}</p>
      </main>
    </div>
  )
}

export default Result
