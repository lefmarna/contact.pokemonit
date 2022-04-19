import { ChangeEvent, ReactNode } from 'react'

export type RadioType = {
  children?: ReactNode
  formLabel: string
  items: RadioItem[]
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export type RadioItem = {
  value: string
  label: string
}
