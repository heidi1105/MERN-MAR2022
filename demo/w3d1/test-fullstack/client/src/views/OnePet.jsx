import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"

const OnePet = () => {
    const [pet, setPet] = useState()
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res=>setPet(res.data))
            .catch(err=>console.log(err))
    },[])

    return (
        <fieldset>
            <legend>EditPet.jsx</legend>
            {pet?
                <div>
                    <h3> {pet.petname}</h3>
                    <h3> Hair color: {pet.haircolor}</h3>
                    <h3> Age: {pet.age}</h3>
                </div>:
                <h1> There is no pet with this ID</h1>
            }
        </fieldset>


    )
}

export default OnePet