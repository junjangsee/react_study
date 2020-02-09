import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
