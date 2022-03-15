import React from 'react'

const DisplayPokemon = (props) => {
    const {pokemon} = props
    return (
        <div>
            <h1>Display Component: {pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} />

        </div>
    )
}

export default DisplayPokemon