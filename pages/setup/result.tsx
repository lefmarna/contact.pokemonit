import { IconButton, OutlinedInput, Tooltip } from '@mui/material'
import type { NextPage } from 'next'
import { useRecoilValue } from 'recoil'
import {
  ARDUINO_TITLE,
  COMPUTER_TITLE,
  DEBUG_TEXT_FIELD_TITLE,
  LIBRARY_TITLE,
  MICON_TITLE,
  WHERE_STOP_TITLE,
} from '../../constants/setup'
import AssignmentIcon from '@mui/icons-material/Assignment'
import {
  arduinoState,
  computerState,
  computerTextFieldValueState,
  debugTextFieldState,
  libraryState,
  miconState,
  whereStopState,
  whereStopTextFieldState,
} from '../../src/store/setupState'
import styles from '../../styles/Home.module.css'
import { useState } from 'react'

const SetupResult: NextPage = () => {
  const computerValue = useRecoilValue(computerState)
  const computerTextFieldValue = useRecoilValue(computerTextFieldValueState)
  const miconValue = useRecoilValue(miconState)
  const libraryValue = useRecoilValue(libraryState)
  const arduinoValue = useRecoilValue(arduinoState)
  const whereStopValue = useRecoilValue(whereStopState)
  const whereStopTextFieldValue = useRecoilValue(whereStopTextFieldState)
  const debugTextFieldValue = useRecoilValue(debugTextFieldState)

  const writeToClipboard = (clipText: string): void => {
    navigator.clipboard.writeText(clipText).catch((e) => {
      console.error(e)
    })
  }

  const computerResult = computerValue !== 'other' ? computerValue : computerTextFieldValue
  const whereStopResult = whereStopValue !== 'other' ? whereStopValue : whereStopTextFieldValue

  const resultMessage = `【${COMPUTER_TITLE}】\n${computerResult}\n\n【${MICON_TITLE}】\n${miconValue}\n\n【${LIBRARY_TITLE}】\n${libraryValue}\n\n【${ARDUINO_TITLE}】\n${arduinoValue}\n\n【${WHERE_STOP_TITLE}】\n${whereStopResult}\n\n【${DEBUG_TEXT_FIELD_TITLE}】\n${debugTextFieldValue}\n
  `

  const [openTip, setOpenTip] = useState(false)

  const handleCloseTip = (): void => {
    setOpenTip(false)
  }

  const handleClickButton = (): void => {
    setOpenTip(true)
    writeToClipboard(resultMessage)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <OutlinedInput
          type='text'
          value={resultMessage}
          multiline
          fullWidth
          readOnly
          endAdornment={
            <Tooltip
              arrow
              open={openTip}
              onClose={handleCloseTip}
              disableHoverListener
              placement='top'
              title='コピーしました'
            >
              <IconButton
                onClick={handleClickButton}
                edge='start'
                sx={{ mx: 'auto', mb: 'auto', py: 0 }}
                size='large'
                disabled={resultMessage === ''}
              >
                <AssignmentIcon />
              </IconButton>
            </Tooltip>
          }
        />
      </main>
    </div>
  )
}

export default SetupResult
