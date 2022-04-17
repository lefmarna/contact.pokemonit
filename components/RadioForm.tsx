import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { RadioType } from '../types'

export const RadioForm = (props: RadioType) => {
  const { formLabel, items, handleChange } = props

  return (
    <FormControl sx={{ width: 1, mb: 4 }}>
      <FormLabel id='radio-buttons-group-label' filled required>
        {formLabel}
      </FormLabel>
      <RadioGroup aria-labelledby='radio-buttons-group-label' name='radio-buttons-group' sx={{ mt: 1 }}>
        {items.map((item) => (
          <FormControlLabel
            value={item.value}
            control={<Radio onChange={handleChange} />}
            label={item.label}
            key={item.value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}
