import { Button, OutlinedInput, Tooltip } from '@mui/material'
import type { NextPage } from 'next'
import { useRecoilValue } from 'recoil'
import { useClipboard } from '../../hooks/useClipboard'
import { useState } from 'react'
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
import { FormActions } from '../../components/molecules/FormActions'
import RouterBackButton from '../../components/molecules/RouterBackButton'

const SetupResult: NextPage = () => {
  const { writeToClipboard } = useClipboard()

  const codeValue = useRecoilValue(codeState)
  const urlValue = useRecoilValue(urlState)
  const checkListValue = useRecoilValue(checkListState)
  const switchVersionValue = useRecoilValue(switchVersionState)
  const gameVersionValue = useRecoilValue(gameVersionState)
  const whereFailedTextfieldValue = useRecoilValue(whereFailedTextfieldState)
  const whereCheckedTextfieldValue = useRecoilValue(whereCheckedTextfieldState)
  const errorMessagesTextfieldValue = useRecoilValue(errorMessagesTextfieldState)
  const noteTextFieldValue = useRecoilValue(noteTextFieldState)

  const resultMessage = `【${CODE_TITLE}】\n${codeValue}\n\n【${URL_TITLE}】\n${urlValue}\n\n【${CHECK_LIST_TITLE}】\n${checkListValue}\n\n【${SWITCH_VERSION_TITLE}】\n${switchVersionValue}\n\n【${GAME_VERSION_TITLE}】\n${gameVersionValue}\n\n【${WHERE_FAILED_TITLE}】\n${whereFailedTextfieldValue}\n\n【${WHERE_CHECKED_TITLE}】\n${whereCheckedTextfieldValue}\n\n【${ERROR_MESSAGES_TITLE}】\n${errorMessagesTextfieldValue}\n\n【${NOTE_TITLE}】\n${noteTextFieldValue}`

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
      <p>
        スクリーンショットや動画があればより解決できる可能性が高くなります。合わせて用意していただけると非常に助かります。
      </p>
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
