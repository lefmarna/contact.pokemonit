import { Button } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FormActions } from '../../components/molecules/FormActions'

const Code: NextPage = () => {
  const router = useRouter()

  const onClickRouterBack = () => {
    router.back()
  }

  const onClickRouterPush = () => {
    router.push('/code/result')
  }

  const disabled = true

  return (
    <>
      <p> コード</p>
      <FormActions>
        <Button onClick={onClickRouterBack} variant='outlined' sx={{ width: 1 }} color='inherit'>
          戻る
        </Button>
        <Button onClick={onClickRouterPush} variant='contained' sx={{ ml: 2, width: 1 }} disabled={disabled}>
          次へ
        </Button>
      </FormActions>
    </>
  )
}

export default Code
