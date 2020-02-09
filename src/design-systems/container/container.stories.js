import React from 'react'
import Container from '.'

export default { title: 'Container', component: Container }

export const baseContainer = () => (
  <Container margin="10px 0 20px 0" display="inline-block">
    Hello
  </Container>
)
