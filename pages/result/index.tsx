import { IconButton, InputAdornment, OutlinedInput, TextField, Tooltip } from '@mui/material'
import type { NextPage } from 'next'
import { useRecoilValue } from 'recoil'
import { ARDUINO_TITLE, COMPUTER_TITLE, LIBRARY_TITLE, MICON_TITLE, WHERE_STOP_TITLE } from '../../constants/setup'
import AssignmentIcon from '@mui/icons-material/Assignment'
import {
  arduinoState,
  computerState,
  computerTextFieldValueState,
  libraryState,
  miconState,
} from '../../src/store/setupState'
import styles from '../../styles/Home.module.css'
import { useState } from 'react'

const Result: NextPage = () => {
  const computerValue = useRecoilValue(computerState)
  const computerTextFieldValue = useRecoilValue(computerTextFieldValueState)
  const miconValue = useRecoilValue(miconState)
  const libraryValue = useRecoilValue(libraryState)
  const arduinoValue = useRecoilValue(arduinoState)

  const writeToClipboard = (clipText: string): void => {
    navigator.clipboard.writeText(clipText).catch((e) => {
      console.error(e)
    })
  }

  const computerResult = computerValue !== 'other' ? computerValue : computerTextFieldValue

  const resultMessage = `【${COMPUTER_TITLE}】\n${computerResult}\n\n【${MICON_TITLE}】\n${miconValue}\n\n【${LIBRARY_TITLE}】\n${libraryValue}\n\n【${ARDUINO_TITLE}】\n${arduinoValue}\n
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

export default Result
