import { Button } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { FormActions } from '../../components/molecules/FormActions'
import { RadioForm } from '../../components/molecules/RadioForm'
import RouterBackButton from '../../components/molecules/RouterBackButton'
import TextFieldForm from '../../components/molecules/TextFieldForm'
import { CHECK_LIST_TITLE, CODE_TITLE, URL_TITLE, WHERE_CHECKED_TITLE, WHERE_FAILED_TITLE } from '../../constants/code'
import { urlRegexp } from '../../constants/regexp'
import { checkListState, codeState, urlState, whereCheckedState, whereFailedState } from '../../store/codeState'

const Code: NextPage = () => {
  // 使われているコードはどちらになりますか？
  const [codeValue, setCodeValue] = useRecoilState(codeState)
  const onChangeCodeValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCodeValue(e.target.value)
  }

  // 参照した記事のURLを貼ってください。
  const [urlValue, setUrlValue] = useRecoilState(urlState)
  const onChangeUrlValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUrlValue(e.target.value)
  }

  // 各コードごとに「設定の確認」を設けているのですが、そちらはチェックできていますか？
  const checkListItems = [
    { value: 'はい', label: 'はい' },
    { value: 'いいえ', label: 'いいえ' },
  ]
  const [checkListValue, setCheckListValue] = useRecoilState(checkListState)
  const onChangeCheckListValue = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckListValue(e.target.value)
  }

  // 具体的にどこで詰まっていますか？
  const [whereFailedValue, setWhereFailedValue] = useRecoilState(whereFailedState)
  const onChangeWhereFailedValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setWhereFailedValue(e.target.value)
  }

  // どこまでの動作を確認できていますか？
  const [whereCheckedValue, setWhereCheckedValue] = useRecoilState(whereCheckedState)
  const onChangeWhereCheckedValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setWhereCheckedValue(e.target.value)
  }

  const router = useRouter()

  const onClickRouterPush = () => {
    router.push('/code/result')
  }

  const disabled =
    codeValue === '' ||
    urlValue === '' ||
    !urlRegexp.test(urlValue) ||
    checkListValue === '' ||
    whereFailedValue === '' ||
    whereCheckedValue === ''

  return (
    <>
      <TextFieldForm
        formLabel={CODE_TITLE}
        variant='standard'
        value={codeValue}
        onChange={onChangeCodeValue}
        placeholder='ポケモンBDSPの自動孵化コード'
        required={true}
      />
      <TextFieldForm
        formLabel={URL_TITLE}
        variant='standard'
        value={urlValue}
        onChange={onChangeUrlValue}
        placeholder='https://pokemonit.com/○○○'
        required={true}
      />
      <RadioForm formLabel={CHECK_LIST_TITLE} items={checkListItems} onChange={onChangeCheckListValue} />
      <TextFieldForm
        formLabel={WHERE_FAILED_TITLE}
        multiline={true}
        value={whereFailedValue}
        onChange={onChangeWhereFailedValue}
        placeholder='例: タマゴから孵化したポケモンをボックスに預ける際に失敗してしまい、その後受け取ったタマゴが全てボックス行になってしまっています。'
        required={true}
        rows={4}
      />
      <TextFieldForm
        formLabel={WHERE_CHECKED_TITLE}
        multiline={true}
        value={whereCheckedValue}
        onChange={onChangeWhereCheckedValue}
        placeholder='例: ポケモンをボックスに預けるタイミングまでは孵化もできていて問題なく動作していると思います。また、預けるのには失敗しているものの、その後の孵化の動作は問題なく動いていそうです。'
        required={true}
        rows={4}
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
