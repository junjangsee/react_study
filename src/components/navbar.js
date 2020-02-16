import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Container, Text } from '../design-systems'
import getColor from '../design-systems/color'
import { Link as BaseLink } from 'react-router-dom'

const Link = styled(BaseLink)`
  text-decoration: none;
  color: rgba(${getColor('black')});
  margin-right: 5px;
`

const NavbarFrame = styled(Container)`
  border-bottom: 1px solid rgba(${getColor('gray200')});
`

const Links = [
  { path: '/', label: 'home' },
  { path: '/box', label: 'box' },
  { path: '/webtoon', label: 'webtoon' },
  { path: '/pokemon', label: 'pokemon' },
]

function Navbar({ title }) {
  return (
    <NavbarFrame padding="15px 10px">
      <Text size="32" bold>
        {title}
      </Text>
      {Links.map(({ path, label }, idx) => (
        <Link to={path} key={idx}>
          {label}
        </Link>
      ))}
    </NavbarFrame>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
