import React, { useState, useEffect } from 'react'
import { Container } from '../../design-systems'
import PropTypes from 'prop-types'

function List({ onChange }) {
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

  const handleClickPokemon = (url) => {
    onChange(url)
  }

  return (
    <Container>
      {pokemons.map(({ name, url }, idx) => (
        <div key={idx} onClick={() => handleClickPokemon(url)}>
          {name}
        </div>
      ))}
    </Container>
  )
}

List.propTypes = {
  onChange: PropTypes.func,
}

export default List
