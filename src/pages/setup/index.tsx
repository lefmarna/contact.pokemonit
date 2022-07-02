import { Button, TextField } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { FormActions } from '../../components/molecules/FormActions'
import { RadioForm } from '../../components/molecules/RadioForm'
import RouterBackButton from '../../components/molecules/RouterBackButton'
import TextFieldForm from '../../components/molecules/TextFieldForm'
import { versionRegexp } from '../../constants/regexp'
import {
  ARDUINO_TITLE,
  COMPUTER_TITLE,
  DEBUG_TEXT_FIELD_TITLE,
  LIBRARY_TITLE,
  MICON_TITLE,
  WHERE_STOP_TITLE,
} from '../../constants/setup'
import {
  arduinoState,
  computerState,
  computerTextFieldValueState,
  debugTextFieldState,
  libraryState,
  miconState,
  whereStopState,
  whereStopTextFieldState,
} from '../../store/setupState'

const Setup: NextPage = () => {
  // 使われているPCの種類はなんですか？
  const computerItems = [
    { value: 'Mac', label: 'Mac' },
    { value: 'Windows', label: 'Windows' },
    { value: 'その他', label: 'その他' },
  ]
  const [computerValue, setComputerValue] = useRecoilState(computerState)
  const [computerTextFieldValue, setComputerTextFieldValue] = useRecoilState(computerTextFieldValueState)
  const onChangeComputerValue = (e: ChangeEvent<HTMLInputElement>) => {
    setComputerValue(e.target.value)
  }
  const onChangeComputerTextFieldValue = (e: ChangeEvent<HTMLInputElement>) => {
    setComputerTextFieldValue(e.target.value)
  }

  // Arduino Leonardo（マイコン）はブログ内で紹介しているものを使われていますか？
  const miconItems = [
    { value: 'はい', label: 'はい' },
    { value: 'いいえ', label: 'いいえ' },
  ]
  const [miconValue, setMiconValue] = useRecoilState(miconState)
  const onChangeMiconValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMiconValue(e.target.value)
  }

  // 使われているライブラリはどれですか？
  const libraryItems = [
    { value: 'NintendoSwitchControlLibrary', label: 'NintendoSwitchControlLibrary' },
    { value: 'NintendoSwitchControll', label: 'NintendoSwitchControll' },
  ]
  const [libraryValue, setLibraryValue] = useRecoilState(libraryState)
  const onChangeLibraryValue = (e: ChangeEvent<HTMLInputElement>) => {
    setLibraryValue(e.target.value)
  }

  // Arduino IDEのバージョンを教えてください。
  const [arduinoValue, setArduinoValue] = useRecoilState(arduinoState)
  const onChangeArduinoValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setArduinoValue(e.target.value)
  }

  // どこで止まっていますか？
  const whereStopItems = [
    { value: 'マイコンがPCに認識されない', label: 'マイコンがPCに認識されない' },
    { value: 'boards.txtの編集ができない', label: 'boards.txtの編集ができない' },
    { value: 'コードの書き込み時にエラーが出る', label: 'コードの書き込み時にエラーが出る' },
    {
      value: 'コードを書き込んだマイコンをSwitchに接続しても動作しない',
      label: 'コードを書き込んだマイコンをSwitchに接続しても動作しない',
    },
    { value: 'その他', label: 'その他' },
  ]
  const [whereStopValue, setWhereStopValue] = useRecoilState(whereStopState)
  const onWhereStopValue = (e: ChangeEvent<HTMLInputElement>) => {
    setWhereStopValue(e.target.value)
  }
  const [whereStopTextFieldValue, setWhereStopTextFieldValue] = useRecoilState(whereStopTextFieldState)
  const onChangeWhereStopTextField = (e: ChangeEvent<HTMLInputElement>) => {
    setWhereStopTextFieldValue(e.target.value)
  }

  // どこまでの動作を確認できているかを具体的に教えてください
  const [debugTextFieldValue, setDebugTextFieldValue] = useRecoilState(debugTextFieldState)
  const onChangeDebugTextField = (e: ChangeEvent<HTMLInputElement>) => {
    setDebugTextFieldValue(e.target.value)
  }

  const disabled =
    computerValue === '' ||
    (computerValue === 'その他' && computerTextFieldValue === '') ||
    miconValue === '' ||
    libraryValue === '' ||
    !versionRegexp.test(arduinoValue) ||
    whereStopValue === '' ||
    (whereStopValue === 'その他' && whereStopTextFieldValue === '') ||
    debugTextFieldValue === ''

  const router = useRouter()

  const onClickRouterPush = () => {
    router.push('/setup/result')
  }

  return (
    <>
      <RadioForm formLabel={COMPUTER_TITLE} items={computerItems} onChange={onChangeComputerValue}>
        {computerValue === 'その他' && (
          <TextField
            label='使われているPCを記入してください'
            variant='standard'
            value={computerTextFieldValue}
            onChange={onChangeComputerTextFieldValue}
          />
        )}
      </RadioForm>
      <RadioForm formLabel={MICON_TITLE} items={miconItems} onChange={onChangeMiconValue} />
      <RadioForm formLabel={LIBRARY_TITLE} items={libraryItems} onChange={onChangeLibraryValue} />
      <TextFieldForm
        formLabel={ARDUINO_TITLE}
        variant='standard'
        value={arduinoValue}
        onChange={onChangeArduinoValue}
        placeholder='1.8.2'
        required={true}
      />
      <RadioForm formLabel={WHERE_STOP_TITLE} items={whereStopItems} onChange={onWhereStopValue}>
        {whereStopValue === 'その他' && (
          <TextField
            label={WHERE_STOP_TITLE}
            variant='standard'
            value={whereStopTextFieldValue}
            onChange={onChangeWhereStopTextField}
          />
        )}
      </RadioForm>
      <TextFieldForm
        formLabel={DEBUG_TEXT_FIELD_TITLE}
        value={debugTextFieldValue}
        onChange={onChangeDebugTextField}
        multiline={true}
        required={true}
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

export default Setup
