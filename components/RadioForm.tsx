import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import Link from 'next/link'
import { RadioType } from '../types'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export const RadioForm = (props: RadioType) => {
  const { formLabel, items } = props
  const router = useRouter()

  const onClickRouterBack = () => {
    router.back()
  }

  const onClickRouterPush = () => {
    router.push('/setup/info')
  }

  return (
    <FormControl>
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
          <FormControlLabel value={item.value} control={<Radio />} label={item.label} key={item.value} />
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
