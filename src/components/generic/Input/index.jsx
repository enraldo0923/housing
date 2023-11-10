import React from 'react'
import { Container } from './style'

export const Input = ({ width, height, defaultValue, value, name, type, onChange, placeholder }) => {
  return (
    <Container
      name={name}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      width={width}
      height={height} />
  )
}
export default Input;

