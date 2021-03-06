import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { RadioType } from '../../../types'

export const RadioForm = (props: RadioType) => {
  const { children, formLabel, items, value, onChange } = props

  return (
    <FormControl sx={{ width: 1, mb: 5 }}>
      <FormLabel filled required>
        {formLabel}
      </FormLabel>
      <RadioGroup sx={{ mt: 1 }}>
        {items.map((item) => (
          <FormControlLabel
            value={item.value}
            control={<Radio onChange={onChange} />}
            label={item.label}
            key={item.value}
            checked={item.value === value}
          />
        ))}
      </RadioGroup>
      {children}
    </FormControl>
  )
}
