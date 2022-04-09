import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import Link from 'next/link'
import { RadioType } from '../types'

export const RadioForm = (props: RadioType) => {
  const { formLabel, items } = props
  return (
    <FormControl>
      <FormLabel id='demo-radio-buttons-group-label'>{formLabel}</FormLabel>
      <RadioGroup aria-labelledby='demo-radio-buttons-group-label' defaultValue='female' name='radio-buttons-group'>
        {items.map((item) => (
          <FormControlLabel value={item.value} control={<Radio />} label={item.label} key={item.value} />
        ))}
      </RadioGroup>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: 1 }}>
        <Link href='/info' passHref>
          <Button variant='outlined' color='inherit' sx={{ width: 1, mr: 1 }}>
            戻る
          </Button>
        </Link>
        <Link href='/info' passHref>
          <Button variant='contained' sx={{ width: 1 }}>
            次へ
          </Button>
        </Link>
      </Box>
    </FormControl>
  )
}
