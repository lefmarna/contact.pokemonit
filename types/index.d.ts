import { ChangeEvent } from 'react'

export type RadioType = {
  formLabel: string
  items: RadioItem[]
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export type RadioItem = {
  value: string
  label: string
}
