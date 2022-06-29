import { Button } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FormActions } from '../../components/molecules/FormActions'
import RouterBackButton from '../../components/molecules/RouterBackButton'

const Code: NextPage = () => {
  const router = useRouter()

  const onClickRouterPush = () => {
    router.push('/code/result')
  }

  const disabled = true

  return (
    <>
      <p> コード</p>
      <FormActions>
        <RouterBackButton />
        <Button onClick={onClickRouterPush} variant='contained' sx={{ ml: 2, width: 1 }} disabled={disabled}>
          次へ
        </Button>
      </FormActions>
    </>
  )
}

export default Code
