import { Box, FormControl, FormLabel, TextField } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import { RouterButton } from '../../components/atoms/RouterButton'
import { RadioForm } from '../../components/RadioForm'
import { COMPUTER_TITLE, LIBRARY_TITLE, MICON_TITLE, WHERE_STOP_TITLE } from '../../constants/setup'
import {
  arduinoState,
  computerState,
  computerTextFieldValueState,
  libraryState,
  miconState,
} from '../../src/store/setupState'
import styles from '../../styles/Home.module.css'

const Setup: NextPage = () => {
  // 使われているPCの種類はなんですか？
  const computerItems = [
    { value: 'mac', label: 'Mac' },
    { value: 'windows', label: 'Windows' },
    { value: 'other', label: 'その他' },
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
    { value: 'blog', label: 'はい' },
    { value: 'other', label: 'いいえ' },
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

  // 使われているArduino IDEのバージョンを教えてください。
  const [arduinoValue, setArduinoValue] = useRecoilState(arduinoState)
  const onChangeArduinoValue = (e: ChangeEvent<HTMLInputElement>) => {
    setArduinoValue(e.target.value)
  }
  const versionRegexp = /^\d{1,2}.\d{1,2}.\d{1,3}$/

  // どこで止まっていますか？
  const whereStopItems = [
    { value: 'micon', label: 'マイコンがPCに認識されない' },
    { value: 'boards', label: 'boards.txtの編集ができない' },
    { value: 'error', label: 'コードの書き込み時にエラーが出る' },
    { value: 'noWork', label: 'コードを書き込んだマイコンをSwitchに接続しても動作しない' },
    { value: 'other', label: 'その他' },
  ]
  const [whereStopValue, setWhereStopValue] = useState('')
  const onWhereStopValue = (e: ChangeEvent<HTMLInputElement>) => {
    setWhereStopValue(e.target.value)
  }
  const [whereStopTextField, setWhereStopTextField] = useState('')
  const onChangeWhereStopTextField = (e: ChangeEvent<HTMLInputElement>) => {
    setWhereStopTextField(e.target.value)
  }

  // どこまでの動作を確認できているかを具体的に教えてください
  const [debugTextField, setDebugTextField] = useState('')
  const onChangeDebugTextField = (e: ChangeEvent<HTMLInputElement>) => {
    setDebugTextField(e.target.value)
  }

  const disabled =
    computerValue === '' ||
    (computerValue === 'other' && computerTextFieldValue === '') ||
    miconValue === '' ||
    libraryValue === '' ||
    !versionRegexp.test(arduinoValue) ||
    whereStopValue === '' ||
    (whereStopValue === 'other' && whereStopTextField === '') ||
    debugTextField === ''
  const router = useRouter()
  const onClickRouterBack = () => {
    router.back()
  }

  const onClickRouterPush = () => {
    router.push('/result')
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <RadioForm formLabel={COMPUTER_TITLE} items={computerItems} handleChange={onChangeComputerValue}>
          {computerValue === 'other' && (
            <TextField
              label='使われているPCを記入してください'
              variant='standard'
              value={computerTextFieldValue}
              onChange={onChangeComputerTextFieldValue}
            />
          )}
        </RadioForm>
        <RadioForm formLabel={MICON_TITLE} items={miconItems} handleChange={onChangeMiconValue} />
        <RadioForm formLabel={LIBRARY_TITLE} items={libraryItems} handleChange={onChangeLibraryValue} />
        <FormControl sx={{ width: 1, mb: 4 }}>
          <FormLabel id='radio-buttons-group-label' filled required>
            Arduino IDEのバージョンを教えてください
          </FormLabel>
          <TextField
            variant='standard'
            value={arduinoValue}
            onChange={onChangeArduinoValue}
            placeholder='1.8.2'
            sx={{ mt: 1 }}
          />
        </FormControl>
        <RadioForm formLabel={WHERE_STOP_TITLE} items={whereStopItems} handleChange={onWhereStopValue}>
          {whereStopValue === 'other' && (
            <TextField
              label='どこで止まっているのかを詳細に記載してください'
              variant='standard'
              value={whereStopTextField}
              onChange={onChangeWhereStopTextField}
            />
          )}
        </RadioForm>
        <FormControl sx={{ width: 1, mb: 4 }}>
          <FormLabel id='radio-buttons-group-label' filled required>
            どこまでの動作を確認できているかを具体的に教えてください
          </FormLabel>
          <TextField value={debugTextField} onChange={onChangeDebugTextField} multiline rows={4} sx={{ mt: 1 }} />
        </FormControl>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: 1, mt: 3 }}>
          <RouterButton onClick={onClickRouterBack} variant='outlined' sx={{ width: 1 }} color='inherit'>
            戻る
          </RouterButton>
          <RouterButton onClick={onClickRouterPush} variant='contained' sx={{ ml: 2, width: 1 }} disabled={disabled}>
            次へ
          </RouterButton>
        </Box>
      </main>
    </div>
  )
}

export default Setup
