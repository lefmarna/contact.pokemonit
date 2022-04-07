import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
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
      <Link href='/info' passHref>
        <Button variant='contained'>次へ</Button>
      </Link>
    </FormControl>
  )
}
