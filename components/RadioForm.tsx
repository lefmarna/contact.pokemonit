import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { RadioType } from '../types'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export const RadioForm = (props: RadioType) => {
  const { formLabel, items, value, handleChange } = props
  const router = useRouter()

  return (
    <FormControl sx={{ width: 1 }}>
      <FormLabel id='radio-buttons-group-label' className={styles.title}>
        {formLabel}
      </FormLabel>
      <RadioGroup
        aria-labelledby='radio-buttons-group-label'
        defaultValue='female'
        name='radio-buttons-group'
        sx={{ mt: 3 }}
      >
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
