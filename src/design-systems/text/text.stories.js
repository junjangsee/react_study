import React from 'react'
import Text from '.'

export default { title: 'Container', component: Text }

export const baseText = () => (
  <>
    <Text size="30">Hello</Text>
    <Text bold>Hello</Text>
    <Text margin="10px 0">Hello</Text>
    <Text padding="10px 0">Hello</Text>
  </>
)
