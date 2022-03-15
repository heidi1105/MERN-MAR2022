import React, { useState, useEffect } from 'react'
import axios from 'axios'


const DisplayOnLoad = () => {
    const [pokemon, setPokemon] = useState()


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
            .then(response => {
                console.log(response.data)
                setPokemon(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            

            <h1> Display pikachu on load</h1>
            {
                pokemon &&
                <>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} />
                </>
            }
        </div>
    )
}

export default DisplayOnLoad