import styled, { css } from 'styled-components'

// size, color, margin, padding, bold
// <Tet color="blue" size="18" bold>Hello</Text>
const Text = styled.div`
  ${({ size }) => css`
    font-size: ${size || 13}px;
  `}
  ${({ margin }) => css`
    margin: ${margin};
  `}
  ${({ padding }) => css`
    padding: ${padding};
  `}
  ${({ bold }) => css`
    font-weight: bold;
  `}
`

export default Text
