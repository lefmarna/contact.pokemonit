import { atom } from 'recoil'

export const codeState = atom({
  key: 'codeState',
  default: '',
})

export const urlState = atom({
  key: 'urlState',
  default: '',
})

export const checkListState = atom({
  key: 'checkListState',
  default: '',
})

export const whereFailedState = atom({
  key: 'whereFailedState',
  default: '',
})

export const whereCheckedState = atom({
  key: 'whereCheckedState',
  default: '',
})

export const errorMessagesTitle = atom({
  key: 'errorMessagesTitle',
  default: '',
})
