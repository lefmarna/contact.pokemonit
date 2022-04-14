import { Box, Button } from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { RadioForm } from '../components/RadioForm'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const formLabel = '質問の種類を選択してください。'
  const items = [
    { value: 'setup', label: 'マイコンの導入方法について' },
    { value: 'code', label: 'コードがうまく動かない' },
    { value: 'other', label: 'その他' },
  ]

  const [value, setValue] = useState('setup')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const router = useRouter()

  const onClickRouterPush = () => {
    if (value === 'setup') {
      router.push('/setup/computer')
    }
    if (value === 'code') {
      router.push('/code/info')
    }
    if (value === 'other') {
      router.push('/other/info')
    }
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <RadioForm formLabel={formLabel} items={items} value={value} handleChange={handleChange} />
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: 1, mt: 3 }}>
          <Button onClick={onClickRouterPush} variant='contained' sx={{ width: 1 }}>
            次へ
          </Button>
        </Box>
      </main>
    </div>
  )
}

export default Home
