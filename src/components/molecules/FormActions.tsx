import { Box } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const FormActions = (props: Props) => {
  const { children } = props
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: 1, mt: 3 }}>
      {children}
    </Box>
  )
}
