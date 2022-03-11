import React, {useState} from 'react'

const FormWithMethods = () => {
    const [username, setUsername] = useState("") // everything inside useState is the initial value 
    const [age, setAge] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const [usernameError, setUsernameError] = useState(true)
    const [ageError, setAgeError] = useState(true)
    const [passwordError, setPasswordError] = useState(true)
    const [confirmError, setConfirmError] = useState(true)

    const handleSubmit =(e)=>{
        e.preventDefault(); // only for onSubmit
        if(!usernameError && !ageError && !passwordError && !confirmError){
            const newUser = {username, age, password, confirm} // create the user
            console.log(newUser)
            setHasBeenSubmitted(true)
        }else{
            alert("error")
        }
    }    

    const handleUsername =(e) =>{
        setUsername(e.target.value)
        if(e.target.value.length<3 && e.target.value.length>0){
            setUsernameError("Username must be at least 3 characters")
        }else{
            setUsernameError("")
        }
    }

    const handleAge =(e) =>{
        setAge(e.target.value)
        if(e.target.value<0){
            setAgeError("Age must be positive")
        }else{
            setAgeError("")
        }
    }

    const handlePassword =(e) =>{
        setPassword(e.target.value)
        if(e.target.value.length<8){
            setPasswordError("Password must be at least 8 characters")
        }else{
            setPasswordError("")
        }
    }

    const handleConfirm =(e) =>{
        setConfirm(e.target.value)
        if(e.target.value !== password){
            setConfirmError("Password must match")
        }else{
            setConfirmError("")
        }
    }



  return (
    <div>
        {
           hasBeenSubmitted?
            <h1> Thank you for submitting the form!</h1> :
            <h1> Please fill in the form</h1>
        }

        <h1> Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label> Username </label>
                <input type="text" name="username" onChange={handleUsername} value={username}/>
                {
                   usernameError?
                    <p> {usernameError}</p>:
                    ""
                }
            </div>
            <div>
                <label> age </label>
                <input type="number" name="age" onChange={handleAge} value={age}/>
                {
                   ageError?
                    <p> {ageError}</p>:
                    ""
                }
            </div>
            <div>
                <label> Password </label>
                <input type="password" name="password" onChange={handlePassword} value={password}/>
                {
                   passwordError?
                    <p> {passwordError}</p>:
                    ""
                }
            </div>
            <div>
                <label> Confirm Password </label>
                <input type="confirm" name="confirm" onChange={handleConfirm} value={confirm}/>
                {
                   confirmError?
                    <p> {confirmError}</p>:
                    ""
                }
            </div>
            <button disabled={confirmError || passwordError || usernameError || ageError}>Submit</button>
        </form>
        <p> Username: {username}</p>
        <p> Age: {age}</p>
        <p> password: {password}</p>
        <p> confirm password: {confirm}</p>
    </div>
  )
}

export default FormWithMethods