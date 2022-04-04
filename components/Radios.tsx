import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { RadioType } from '../types'

export const Radios = (props: RadioType) => {
  const { formLabel, items } = props
  return (
    <FormControl>
      <FormLabel id='demo-radio-buttons-group-label'>{formLabel}</FormLabel>
      <RadioGroup aria-labelledby='demo-radio-buttons-group-label' defaultValue='female' name='radio-buttons-group'>
        {items.map((item) => (
          <FormControlLabel value={item.value} control={<Radio />} label={item.label} key={item.value} />
        ))}
      </RadioGroup>
      <Button variant='contained'>次へ</Button>
    </FormControl>
  )
}
