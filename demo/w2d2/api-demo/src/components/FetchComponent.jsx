import React, { useState } from 'react'
import axios from 'axios'
import DisplayPokemon from './DisplayPokemon'

const FetchComponent = () => {
    const [pokemon, setPokemon] = useState()

    const fetchPokemonThen = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
            .then(response => {
                return response.json()
            })
            .then(jsonResponse => {
                console.log("fetch .then function")
                console.log(jsonResponse)
                setPokemon(jsonResponse)
            })
            .catch(err => console.log(err))
    }

    const fetchPokemonAwait = async() => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/mew`)
        const jsonResponse = await response.json()
        console.log("async function")
        console.log(jsonResponse)
        setPokemon(jsonResponse)
    }

    const fetchPokemonAxios = () =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/eevee`)
            .then(response =>{
                console.log("axios function")
                console.log(response.data)
                setPokemon(response.data)
            })
            .catch(err => console.log(err))
    }


    const fetchPokemonAxios2 = async() =>{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
        console.log(response.data)
        setPokemon(response.data)
    }


    const fetchPokemonAxiosTryCatch = async()=>{
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/mew`)
            console.log(response.data)
            setPokemon(response.data)
        }catch(err){
            console.error(err)
        }
    }




    return (
        <div>
            <button onClick={fetchPokemonThen}> Fetch Pokemon by fetch .then</button>
            <button onClick={fetchPokemonAwait}> Fetch Pokemon by fetch await</button>
            <button onClick={fetchPokemonAxios}> Fetch Pokemon by AXIOS!!!!!</button>
            <button onClick={fetchPokemonAxios2}> Fetch Pokemon by AXIOS AWAIT!!!!!</button>
            <button onClick={fetchPokemonAxiosTryCatch}> Fetch Pokemon by AXIOS AWAIT catch!!!!!</button>

            {pokemon ?
                <div>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} />

                </div>:
                <h1> Fetch a pokemon by clicking the button!</h1>
                
            }

            {
                pokemon?
                    <DisplayPokemon pokemon = {pokemon} />:
                <h1> Fetch a pokemon by clicking the button!</h1>
            }



        </div>
    )
}

export default FetchComponent