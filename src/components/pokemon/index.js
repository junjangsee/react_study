import React, { useState } from 'react'
import Detail from './detail'
import List from './list'

function Pokemon() {
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  return (
    <div>
      <Detail selectedPokemon={selectedPokemon} />
      <List onChange={setSelectedPokemon} selectedPokemon={selectedPokemon} />
    </div>
  )
}

export default Pokemon
