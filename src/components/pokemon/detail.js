import React, { useState, useEffect } from 'react'
import { Container } from '../../design-systems'
import PropTypes from 'prop-types'

function Detail({ selectedPokemon }) {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(selectedPokemon)

      if (response.ok) {
        setPokemon(await response.json())
      }
    }
    selectedPokemon && getPokemon()
  }, [selectedPokemon])

  if (!pokemon) {
    return null
  }

  return <Container>Detail</Container>
}

Detail.propTypes = {
  selectedPokemon: PropTypes.string,
}

export default Detail
