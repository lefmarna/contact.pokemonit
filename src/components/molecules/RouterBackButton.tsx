import { Button } from '@mui/material'
import { useRouter } from 'next/router'

const RouterBackButton = () => {
  const router = useRouter()

  const onClickRouterBack = () => {
    router.back()
  }

  return (
    <Button onClick={onClickRouterBack} variant='outlined' sx={{ width: 1 }} color='inherit'>
      戻る
    </Button>
  )
}

export default RouterBackButton
