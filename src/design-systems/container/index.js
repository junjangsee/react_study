import styled, { css } from 'styled-components'

// width, height, backgoundColor, position, margin, padding, display
// <Container margin="10px 0 20px 0" display="inline-block">
const Container = styled.div`
${({ width }) =>
  width &&
  css`
    width: ${width};
  `}
  ${({ position }) =>
    position &&
    css`
      position: ${position};
    `}
    ${({ height }) =>
      height &&
      css`
        height: ${height};
      `}
    ${({ padding }) =>
      padding &&
      css`
        padding: ${padding};
      `}
${({ display }) =>
  display &&
  css`
    display: ${display};
  `}
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`

export default Container
