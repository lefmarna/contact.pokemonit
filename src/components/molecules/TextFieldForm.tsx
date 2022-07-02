import { FormControl, FormLabel, TextField } from '@mui/material'
import { TextFieldFormProps } from '../../../types'

const TextFieldForm = (props: TextFieldFormProps) => {
  const {
    formLabel,
    autoComplete = undefined,
    autoFocus = false,
    classes = undefined,
    color = 'primary',
    defaultValue = undefined,
    disabled = false,
    error = false,
    FormHelperTextProps = undefined,
    fullWidth = false,
    id = undefined,
    InputLabelProps = undefined,
    inputProps = undefined,
    InputProps = undefined,
    inputRef = undefined,
    margin = 'none',
    maxRows = undefined,
    minRows = undefined,
    multiline = false,
    name = undefined,
    onChange = undefined,
    placeholder = undefined,
    required = false,
    rows = undefined,
    select = false,
    SelectProps = undefined,
    size = undefined,
    sx = undefined,
    type = undefined,
    value = undefined,
    variant = 'outlined',
  } = props

  return (
    <FormControl sx={{ width: 1, mb: 4 }}>
      <FormLabel filled required={required}>
        {formLabel}
      </FormLabel>
      <TextField
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        classes={classes}
        color={color}
        disabled={disabled}
        defaultValue={defaultValue}
        error={error}
        FormHelperTextProps={FormHelperTextProps}
        fullWidth={fullWidth}
        id={id}
        InputLabelProps={InputLabelProps}
        inputProps={inputProps}
        InputProps={InputProps}
        inputRef={inputRef}
        margin={margin}
        maxRows={maxRows}
        minRows={minRows}
        multiline={multiline}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        select={select}
        SelectProps={SelectProps}
        size={size}
        sx={{ mt: 1, ...sx }}
        type={type}
        value={value}
        variant={variant}
      />
    </FormControl>
  )
}

export default TextFieldForm
