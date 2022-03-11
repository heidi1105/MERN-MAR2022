import React, {useState} from 'react'

const CombineForm = () => {
    const [formState, setFormState]=useState({
        username: "",
        age: "",
        password : "",
        confirm: ""
    })    

    const [formError, setFormError]=useState({
        username: true,
        age: true,
        password : true,
        confirm: true
    })  

    const handleSubmit =(e)=>{
        e.preventDefault(); // only for onSubmit
       
            // const newUser = {} // create the user
            // console.log(newUser)
            // setHasBeenSubmitted(true)

    }  

    const handleInput = (e) =>{
        const { name, value} = e.target
        setFormState({
            ...formState,
            [name] : value
        })

        if(name === "username" && value.length > 3){
            setFormError({
                ...formError,
                username : false
            })
        }

    }


    

  return (
    <div>


    <h1> Form</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label> Username </label>
            <input type="text" name="username" onChange={handleInput} value={formState.username}/>
            {formError.username&&
                <p> Username must be at least 3 characters</p>
                }
        </div>
        <div>
            <label> age </label>
            <input type="number" name="age" onChange={handleInput} value={formState.age}/>

        </div>
        <div>
            <label> Password </label>
            <input type="password" name="password" onChange={handleInput} />

        </div>
        <div>
            <label> Confirm Password </label>
            <input type="confirm" name="confirm" onChange={handleInput} />
  
        </div>
        <button>Submit</button>
    </form>
    <p> Username: {formState.username}</p>
    <p> Age: {formState.age}</p>
    <p> password: {formState.password}</p>
    <p> confirm password: {formState.confirm}</p>
</div>
  )
}

export default CombineForm