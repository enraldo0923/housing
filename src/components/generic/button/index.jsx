import React from 'react'
import { Container } from './style'

export const Button = ({ children, type, onClick, height }) => {
  return (
    <Container onClick={onClick} type={type} height={height} width={100} >{children || "generic button"}</Container>
  )
}
export default Button;

