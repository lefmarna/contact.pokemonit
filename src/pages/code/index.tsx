import { Button } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { FormActions } from '../../components/molecules/FormActions'
import RouterBackButton from '../../components/molecules/RouterBackButton'
import TextFieldForm from '../../components/molecules/TextFieldForm'
import { CODE_TITLE } from '../../constants/code'
import { codeState } from '../../store/codeState'

const Code: NextPage = () => {
  // 使われているコードはどちらになりますか？
  const [codeValue, setCodeValue] = useRecoilState(codeState)
  const onChangeCodeValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCodeValue(e.target.value)
  }

  const router = useRouter()

  const onClickRouterPush = () => {
    router.push('/code/result')
  }

  const disabled = codeValue === ''

  return (
    <>
      <TextFieldForm
        formLabel={CODE_TITLE}
        variant='standard'
        value={codeValue}
        onChange={onChangeCodeValue}
        placeholder='ポケモンBDSPの自動孵化コード'
      />
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
