import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import Link from 'next/link'
import { RadioType } from '../types'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'

export const RadioForm = (props: RadioType) => {
  const { formLabel, items } = props
  const router = useRouter()

  const [value, setValue] = useState('')

  const onClickRouterBack = () => {
    router.back()
  }

  const onClickRouterPush = () => {
    if (value === 'setup') {
      router.push('/setup/info')
    }
    if (value === 'code') {
      router.push('/code/info')
    }
    if (value === 'other') {
      router.push('/other/info')
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

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
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: 1, mt: 3 }}>
        <Link href='/setup/info' passHref>
          <Button onClick={onClickRouterBack} variant='outlined' color='inherit' sx={{ width: 1, mr: 1 }}>
            戻る
          </Button>
        </Link>
        <Button onClick={onClickRouterPush} variant='contained' sx={{ width: 1 }}>
          次へ
        </Button>
      </Box>
    </FormControl>
  )
}
