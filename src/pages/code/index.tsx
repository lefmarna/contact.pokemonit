import { Button } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { FormActions } from '../../components/molecules/FormActions'
import { RadioForm } from '../../components/molecules/RadioForm'
import RouterBackButton from '../../components/molecules/RouterBackButton'
import TextFieldForm from '../../components/molecules/TextFieldForm'
import {
  CHECK_LIST_TITLE,
  CODE_TITLE,
  ERROR_MESSAGES_TITLE,
  GAME_VERSION_TITLE,
  NOTE_TITLE,
  SWITCH_VERSION_TITLE,
  URL_TITLE,
  WHERE_CHECKED_TITLE,
  WHERE_FAILED_TITLE,
} from '../../constants/code'
import { urlRegexp, versionRegexp } from '../../constants/regexp'
import {
  checkListState,
  codeState,
  errorMessagesTextfieldState,
  gameVersionState,
  noteTextFieldState,
  switchVersionState,
  urlState,
  whereCheckedTextfieldState,
  whereFailedTextfieldState,
} from '../../store/codeState'

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

  // Switchのバージョンを教えてください（ホーム画面に戻る動作がないコードの場合は記載不要）
  const [switchVersionValue, setSwitchVersionValue] = useRecoilState(switchVersionState)
  const onChangeSwitchVersionValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSwitchVersionValue(e.target.value)
  }

  // ゲームソフトのバージョンを教えてください
  const [gameVersionValue, setGameVersionValue] = useRecoilState(gameVersionState)
  const onChangeGameVersionValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setGameVersionValue(e.target.value)
  }

  // 具体的にどこで詰まっていますか？
  const [whereFailedTextfieldValue, setWhereFailedTextfieldValue] = useRecoilState(whereFailedTextfieldState)
  const onChangeWhereFailedTextfieldValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setWhereFailedTextfieldValue(e.target.value)
  }

  // どこまでの動作を確認できていますか？
  const [whereTextfieldCheckedValue, setWhereTextfieldCheckedValue] = useRecoilState(whereCheckedTextfieldState)
  const onChangeWhereTextfieldCheckedValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setWhereTextfieldCheckedValue(e.target.value)
  }

  // エラーメッセージが出ていれば全てを貼り付けてください
  const [errorMessagesTextfieldValue, setErrorMessagesTextfieldValue] = useRecoilState(errorMessagesTextfieldState)
  const onChangeErrorMessagesTextfieldValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setErrorMessagesTextfieldValue(e.target.value)
  }

  // そのほか、何か補足があれば記載してください
  const [noteTextFieldValue, setNoteTextFieldValue] = useRecoilState(noteTextFieldState)
  const onChangeNoteTextFieldValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNoteTextFieldValue(e.target.value)
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
    (switchVersionValue !== '' && !versionRegexp.test(switchVersionValue)) ||
    gameVersionValue === '' ||
    !versionRegexp.test(gameVersionValue) ||
    whereFailedTextfieldValue === '' ||
    whereTextfieldCheckedValue === ''
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
        formLabel={SWITCH_VERSION_TITLE}
        variant='standard'
        value={switchVersionValue}
        onChange={onChangeSwitchVersionValue}
        placeholder='14.1.2'
      />
      <TextFieldForm
        formLabel={GAME_VERSION_TITLE}
        variant='standard'
        value={gameVersionValue}
        onChange={onChangeGameVersionValue}
        placeholder='1.3.0'
        required={true}
      />
      <TextFieldForm
        formLabel={WHERE_FAILED_TITLE}
        multiline={true}
        value={whereFailedTextfieldValue}
        onChange={onChangeWhereFailedTextfieldValue}
        placeholder='例: タマゴから孵化したポケモンをボックスに預ける際に失敗してしまい、その後受け取ったタマゴが全てボックス行になってしまっています。'
        required={true}
        rows={4}
      />
      <TextFieldForm
        formLabel={WHERE_CHECKED_TITLE}
        multiline={true}
        value={whereTextfieldCheckedValue}
        onChange={onChangeWhereTextfieldCheckedValue}
        placeholder='例: ポケモンをボックスに預けるタイミングまでは孵化もできていて問題なく動作していると思います。また、預けるのには失敗しているものの、その後の孵化の動作は問題なく動いていそうです。'
        required={true}
        rows={4}
      />
      <TextFieldForm
        formLabel={ERROR_MESSAGES_TITLE}
        multiline={true}
        value={errorMessagesTextfieldValue}
        onChange={onChangeErrorMessagesTextfieldValue}
        rows={4}
      />
      <TextFieldForm
        formLabel={NOTE_TITLE}
        multiline={true}
        value={noteTextFieldValue}
        onChange={onChangeNoteTextFieldValue}
        rows={4}
      />
      <FormActions>
        <RouterBackButton />
        <Button onClick={onClickRouterPush} variant='contained' sx={{ ml: 2, width: 1 }} disabled={disabled}>
          確認する
        </Button>
      </FormActions>
    </>
  )
}

export default Code
