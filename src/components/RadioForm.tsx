import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { RadioType } from '../../types'

export const RadioForm = (props: RadioType) => {
  const { children, formLabel, items, handleChange } = props

  return (
    <FormControl sx={{ width: 1, mb: 4 }}>
      <FormLabel filled required>
        {formLabel}
      </FormLabel>
      <RadioGroup sx={{ mt: 1 }}>
        {items.map((item) => (
          <FormControlLabel
            value={item.value}
            control={<Radio onChange={handleChange} />}
            label={item.label}
            key={item.value}
          />
        ))}
      </RadioGroup>
      {children}
    </FormControl>
  )
}
