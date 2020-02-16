import React, { useState } from 'react'
import { Container } from '../../design-systems'
import Left from './left'
import Right from './right'
import { BoxProvider } from './box-context'

function Box() {
  return (
    <Container>
      <BoxProvider>
        <>
          <Left />
          <Right />
        </>
      </BoxProvider>
    </Container>
  )
}

export default Box
