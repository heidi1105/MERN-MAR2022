import React, { useState, useEffect } from 'react'
import axios from 'axios'


const DisplayOnLoadForm = () => {
    const [pokemon, setPokemon] = useState()
    const [pokemonName, setPokemonName] = useState("pikachu") // for the input
    const [refresh, setRefresh] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setRefresh(!refresh)

    }

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => {
                console.log(response.data)
                setPokemon(response.data)
            })
            .catch(err => console.log(err))
    }, [refresh])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="pokemonName" value={pokemonName}
                    onChange={e=>setPokemonName(e.target.value)}
                    placeholder="Enter a pokemon name"
                 />
                 <button> Search for a pokemon</button>
            </form>

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

export default DisplayOnLoadForm