import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom"

const EditPet = () => {
    const [petname, setPetname] = useState("")
    const [haircolor, setHaircolor] = useState("")
    const [age, setAge] = useState()
    const history = useHistory()
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                const pet = res.data
                setPetname(pet.petname)
                setHaircolor(pet.haircolor)
                setAge(pet.age)
            })
            .catch(err=>console.log(err))
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pets/${id}`, {petname, haircolor, age})
            .then(res=>history.push("/pets"))
            .catch(err=>console.log(err))
    }

    return (
        <fieldset>
            <legend>EditPet.jsx</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Pet name: </label>
                    <input type="text" name="petname" value={petname}
                        onChange={e => setPetname(e.target.value)} />
                </div>
                <div>
                    <label> Hair color: </label>
                    <input type="text" name="haircolor" value={haircolor}
                        onChange={e => setHaircolor(e.target.value)} />
                </div>
                <div>
                    <label> Age: </label>
                    <input type="number" name="age" value={age}
                        onChange={e => setAge(e.target.value)} />
                </div>
                <button> Submit</button>
            </form>
        </fieldset>

    )
}

export default EditPet