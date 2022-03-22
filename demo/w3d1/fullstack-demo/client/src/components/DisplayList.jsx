import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const DisplayList = (props) => {
    const { pets } = props

    const handleDelete = (deleteId)=>{
        axios.delete(`http://localhost:8000/api/pets/${deleteId}`)
            .then(res=>{
                props.reload()
            })
            .catch(err => console.log(err))
    }
    return (
        <fieldset>
            <legend> DisplayList.jsx</legend>
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
                    {
                        pets.map((pet, i)=>(
                            <tr>
                                <td> <Link to={`/pets/${pet._id}`}>{pet.petname}</Link></td>
                                <td> {pet.haircolor}</td>
                                <td> {pet.age}</td>
                                <td> <Link to={`/pets/${pet._id}/edit`} >Edit </Link></td>
                                <td> <button onClick={()=>handleDelete(pet._id)}> Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

        </fieldset>
    )
}

export default DisplayList