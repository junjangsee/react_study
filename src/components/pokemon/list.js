import React, { useState, useEffect } from 'react'
import { Container } from '../../design-systems'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Text = styled.div`
  color: #000;
  font-weight: bold;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: #000;
      color: #fff;
    `}
`

function List({ onChange, selectedPokemon }) {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    async function getPokemons() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/') // 200 === response.ok

      if (response.ok) {
        const { results } = await response.json()
        setPokemons(results)
      }
    }

    getPokemons()
  }, [])

  return (
    <Container>
      {pokemons.map((pokemon, idx) => {
        const { name } = pokemon
        const isSelected = selectedPokemon && selectedPokemon.name === name

        return (
          <div key={idx} onClick={() => onChange(pokemon)}>
            <Text isSelected={isSelected}>{name}</Text>
          </div>
        )
      })}
    </Container>
  )
}

List.propTypes = {
  onChange: PropTypes.func,
  selectedPokemon: PropTypes.array,
}

export default List
