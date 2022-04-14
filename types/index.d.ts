import { ChangeEvent } from 'react'

export type RadioType = {
  formLabel: string
  items: RadioItem[]
  value: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export type RadioItem = {
  value: string
  label: string
}
