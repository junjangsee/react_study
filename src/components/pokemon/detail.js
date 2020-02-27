import React, { useState, useEffect } from 'react'
import { Container, Text } from '../../design-systems'
import PropTypes from 'prop-types'

function Detail({ selectedPokemon }) {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    async function getPokemon() {
      const { url } = selectedPokemon
      const response = await fetch(url)

      if (response.ok) {
        setPokemon(await response.json())
      }
    }
    selectedPokemon && getPokemon()
  }, [selectedPokemon])

  if (!pokemon) {
    return null
  }

  const { name, weight, height, sprites } = pokemon

  const baseInfo = {
    name,
    weight,
    height,
  }

  return (
    <Container>
      <Gallery sprites={sprites} />
      <BaseInfo baseInfo={baseInfo} />
    </Container>
  )
}

function BaseInfo({ baseInfo: { name, weight, height } }) {
  return (
    <Container>
      <Text>이름: {name}</Text>
      <Text>체중: {weight}</Text>
      <Text>신장: {height}</Text>
    </Container>
  )
}

function Gallery({ sprites }) {
  const { back_default, back_shiny, front_default, front_shiny } = sprites
  return (
    <Container>
      <img src={back_default} />
      <img src={back_shiny} />
      <img src={front_default} />
      <img src={front_shiny} />
    </Container>
  )
}

Detail.propTypes = {
  selectedPokemon: PropTypes.object,
}

BaseInfo.propTypes = {
  baseInfo: PropTypes.object,
}

Gallery.propTypes = {
  sprites: PropTypes.object,
}

export default Detail
