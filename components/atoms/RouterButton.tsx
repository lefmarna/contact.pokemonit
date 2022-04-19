import { Button } from '@mui/material'

type Props = {
  children: string
  onClick: () => void
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  disabled?: boolean
}

export const RouterButton = (props: Props) => {
  const { children, onClick, variant = 'text', color = 'primary', disabled = false } = props
  return (
    <Button onClick={onClick} variant={variant} color={color} sx={{ width: 1 }} disabled={disabled}>
      {children}
    </Button>
  )
}
