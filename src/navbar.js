import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 32px;
  font-weight: bold;
  padding: 15px 10px;
  border: 1px solid #efefef;
`

function Navbar({ title }) {
  //   console.log(props)
  return <Container>{title}</Container>
}

export default Navbar
