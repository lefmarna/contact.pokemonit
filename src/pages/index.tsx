import { Button } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { FormActions } from '../components/molecules/FormActions'
import { RadioForm } from '../components/molecules/RadioForm'

const Home: NextPage = () => {
  const formLabel = '質問の種類を選択してください。'
  const items = [
    { value: 'setup', label: 'マイコンの導入方法について' },
    { value: 'code', label: 'コードがうまく動かない' },
    // { value: 'other', label: 'その他' },
  ]

  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const router = useRouter()

  const onClickRouterPush = () => {
    if (value === 'setup') {
      router.push('/setup')
    }
    if (value === 'code') {
      router.push('/code')
    }
    if (value === 'other') {
      router.push('/other')
    }
  }
  return (
    <>
      <RadioForm formLabel={formLabel} items={items} onChange={handleChange} />
      <FormActions>
        <Button onClick={onClickRouterPush} variant='contained' sx={{ width: 1 }} disabled={value === ''}>
          次へ
        </Button>
      </FormActions>
    </>
  )
}

export default Home
