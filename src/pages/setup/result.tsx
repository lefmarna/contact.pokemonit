import { Button, OutlinedInput, Tooltip } from '@mui/material'
import type { NextPage } from 'next'
import { useRecoilValue } from 'recoil'
import {
  ARDUINO_TITLE,
  AVR_BOARDS_TITLE,
  COMPUTER_TITLE,
  DEBUG_TEXT_FIELD_TITLE,
  LIBRARY_TITLE,
  MICON_TITLE,
  WHERE_STOP_TITLE,
} from '../../constants/setup'
import {
  arduinoState,
  avrBoardsState,
  computerState,
  computerTextFieldValueState,
  debugTextFieldState,
  libraryState,
  miconState,
  whereStopState,
  whereStopTextFieldState,
} from '../../store/setupState'
import { useClipboard } from '../../hooks/useClipboard'
import { useState } from 'react'
import { FormActions } from '../../components/molecules/FormActions'
import RouterBackButton from '../../components/molecules/RouterBackButton'

const SetupResult: NextPage = () => {
  const { writeToClipboard } = useClipboard()

  const computerValue = useRecoilValue(computerState)
  const computerTextFieldValue = useRecoilValue(computerTextFieldValueState)
  const miconValue = useRecoilValue(miconState)
  const libraryValue = useRecoilValue(libraryState)
  const arduinoValue = useRecoilValue(arduinoState)
  const avrBoardsValue = useRecoilValue(avrBoardsState)
  const whereStopValue = useRecoilValue(whereStopState)
  const whereStopTextFieldValue = useRecoilValue(whereStopTextFieldState)
  const debugTextFieldValue = useRecoilValue(debugTextFieldState)

  const computerResult = computerValue !== 'その他' ? computerValue : computerTextFieldValue
  const whereStopResult = whereStopValue !== 'その他' ? whereStopValue : whereStopTextFieldValue

  const resultMessage = `【${COMPUTER_TITLE}】\n${computerResult}\n\n【${MICON_TITLE}】\n${miconValue}\n\n【${LIBRARY_TITLE}】\n${libraryValue}\n\n【${ARDUINO_TITLE}】\n${arduinoValue}\n\n【${AVR_BOARDS_TITLE}】\n${avrBoardsValue}\n\n【${WHERE_STOP_TITLE}】\n${whereStopResult}\n\n【${DEBUG_TEXT_FIELD_TITLE}】\n${debugTextFieldValue}`

  const [openTip, setOpenTip] = useState(false)

  const handleCloseTip = (): void => {
    setOpenTip(false)
  }

  const handleClickButton = (): void => {
    setOpenTip(true)
    writeToClipboard(resultMessage)
  }

  return (
    <>
      <OutlinedInput type='text' value={resultMessage} multiline fullWidth readOnly />
      <FormActions>
        <RouterBackButton />
        <Tooltip
          arrow
          open={openTip}
          onClose={handleCloseTip}
          disableHoverListener
          placement='top'
          title='コピーしました'
        >
          <Button color='info' onClick={handleClickButton} variant='contained' sx={{ ml: 2, width: 1 }}>
            内容をコピーする
          </Button>
        </Tooltip>
      </FormActions>
    </>
  )
}

export default SetupResult
