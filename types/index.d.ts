import { TextFieldProps } from '@mui/material'
import { ChangeEvent, ReactNode } from 'react'

export type RadioType = {
  children?: ReactNode
  formLabel: string
  items: RadioItem[]
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export type RadioItem = {
  value: string
  label: string
}

export type TextFieldFormProps = TextFieldProps & {
  formLabel: string
}
