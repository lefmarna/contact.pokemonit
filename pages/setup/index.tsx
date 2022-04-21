import { Box, FormControl, FormLabel, TextField } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { RouterButton } from '../../components/atoms/RouterButton'
import { RadioForm } from '../../components/RadioForm'
import styles from '../../styles/Home.module.css'

const Computer: NextPage = () => {
  // 使われているPCの種類はなんですか？
  const computerTitle = '使われているPCの種類はなんですか？'
  const computerItems = [
    { value: 'mac', label: 'Mac' },
    { value: 'windows', label: 'Windows' },
    { value: 'other', label: 'その他' },
  ]
  const [computerValue, setComputerValue] = useState('')
  const [computerTextfield, setComputerTextfield] = useState('')
  const onChangeComputerValue = (e: ChangeEvent<HTMLInputElement>) => {
    setComputerValue(e.target.value)
  }
  const onChangeComputerTextfield = (e: ChangeEvent<HTMLInputElement>) => {
    setComputerTextfield(e.target.value)
  }

  // Arduino Leonardo（マイコン）はブログ内で紹介しているものを使われていますか？
  const miconTitle = 'Arduino Leonardo（マイコン）はブログ内で紹介しているものを使われていますか？'
  const miconItems = [
    { value: 'blog', label: 'はい' },
    { value: 'other', label: 'いいえ' },
  ]
  const [miconValue, setMiconValue] = useState('')
  const onChangeMiconValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMiconValue(e.target.value)
  }

  // 使われているライブラリはどれですか？
  const libraryTitle = '使われているライブラリはどちらですか？'
  const libraryItems = [
    { value: 'NintendoSwitchControlLibrary', label: 'NintendoSwitchControlLibrary' },
    { value: 'NintendoSwitchControll', label: 'NintendoSwitchControll' },
  ]
  const [libraryValue, setLibraryValue] = useState('')
  const onChangeLibraryValue = (e: ChangeEvent<HTMLInputElement>) => {
    setLibraryValue(e.target.value)
  }

  // 使われているArduino IDEのバージョンを教えてください。
  const [arduinoValue, setArduinoValue] = useState('')
  const onChangeArduinoValue = (e: ChangeEvent<HTMLInputElement>) => {
    setArduinoValue(e.target.value)
  }
  const versionRegexp = /^\d{1,2}.\d{1,2}.\d{1,3}$/

  const disabled =
    computerValue === '' ||
    (computerValue === 'other' && computerTextfield === '') ||
    miconValue === '' ||
    libraryValue === '' ||
    !versionRegexp.test(arduinoValue)
  const router = useRouter()
  const onClickRouterBack = () => {
    router.back()
  }

  const onClickRouterPush = () => {
    console.log('リンク先はまだ作れていません')
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <RadioForm formLabel={computerTitle} items={computerItems} handleChange={onChangeComputerValue}>
          {computerValue === 'other' && (
            <TextField
              label='使われているPCを記入してください'
              variant='standard'
              value={computerTextfield}
              onChange={onChangeComputerTextfield}
              sx={{ mt: 1 }}
            />
          )}
        </RadioForm>
        <RadioForm formLabel={miconTitle} items={miconItems} handleChange={onChangeMiconValue} />
        <RadioForm formLabel={libraryTitle} items={libraryItems} handleChange={onChangeLibraryValue} />
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
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: 1, mt: 3 }}>
          <RouterButton onClick={onClickRouterBack} variant='outlined' color='inherit'>
            戻る
          </RouterButton>
          <RouterButton onClick={onClickRouterPush} variant='contained' disabled={disabled}>
            次へ
          </RouterButton>
        </Box>
      </main>
    </div>
  )
}

export default Computer
