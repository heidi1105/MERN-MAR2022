import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

const AllPets = () => {
    const [pets, setPets] = useState([])
    

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets`)
            .then(res=>setPets(res.data))
            .catch(err=>console.log(err))
    },[])

    const handleDelete =(deleteIdx) =>{
        axios.delete(`http://localhost:8000/api/pets/${deleteIdx}`)
            .then(res=>{
                const filteredList = pets.filter((pet)=>pet._id !== deleteIdx)
                setPets(filteredList)
            })
            .catch(err=>console.log(err))
    }
    return (
        <fieldset>
            <legend>AllPets.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th> Pet name</th>
                        <th> Hair color</th>
                        <th> Age</th>
                        <th colSpan={2}> Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pets&&
                        pets.map((pet, i)=>(
                            <tr>
                                <td> <Link to={`/pets/${pet._id}`}>{pet.petname}</Link></td>
                                <td> {pet.haircolor}</td>
                                <td> {pet.age} </td>
                                <td> <Link to={`/pets/${pet._id}/edit`}>Edit</Link></td>
                                <td> <button onClick={()=>handleDelete(pet._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </fieldset>
    )
}

export default AllPets