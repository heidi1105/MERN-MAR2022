import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

const Character = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState()

    useEffect(() => {
        axios.get(`https://anapioficeandfire.com/api/characters/${id}`)
            .then(res => {
                console.log(res.data)
                setCharacter(res.data)
            })
            .catch(err => console.log(err))
    }, [id])



    return (
        <fieldset>
            <legend> Character.jsx</legend>
            {
                character ?
                    <div>
                        <h1> {character.name}</h1>
                        <h4> Gender: {character.gender}</h4>
                        <h4> Born in : {character.born}</h4>
                    </div>:
                <h1> No such character. Please try another ID</h1>
            }


        </fieldset>
    )
}

export default Character