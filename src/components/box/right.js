import React from 'react'
import { Container } from '../../design-systems'
import styled from 'styled-components'
import getColor from '../../design-systems/color'
import { useBoxContext } from './box-context'

const Input = styled.input`
  appearance: none;
  margin: 0;
  outline: none;
  padding: 14px 16px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid rgba(${getColor('gray100')});
  border-radius: 2px;
  box-sizing: border-box;
  width: 100%;

  ::placeholder {
    color: rgba(${getColor('gray300')});
  }
  ::-webkit-input-placeholder {
    color: rgba(${getColor('gray300')});
  }
  :-ms-input-placeholder {
    color: rgba(${getColor('gray300')});
  }
`

function Right() {
  const { setColor } = useBoxContext()

  return (
    <Container width="300">
      <Input onChange={(e) => setColor(e.target.value)} />
    </Container>
  )
}

export default Right
