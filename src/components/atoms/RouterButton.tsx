import { Button } from '@mui/material'

type Props = {
  children: string
  onClick: () => void
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  sx?: Object
  disabled?: boolean
}

export const RouterButton = (props: Props) => {
  const { children, onClick, variant = 'text', color = 'primary', sx = {}, disabled = false } = props
  return (
    <Button onClick={onClick} variant={variant} color={color} sx={sx} disabled={disabled}>
      {children}
    </Button>
  )
}
