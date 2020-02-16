import React from 'react'
import { Container } from '../../design-systems'
import { useBoxContext } from './box-context'

function Left() {
  const { color } = useBoxContext()

  return (
    <Container width="400" height="400" backgroundColor={color}>
      Box
    </Container>
  )
}

export default Left
