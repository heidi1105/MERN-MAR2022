import React, {useState} from 'react'

const Form = () => {
    const [username, setUsername] = useState("") // everything inside useState is the initial value 
    const [age, setAge] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const handleSubmit =(e)=>{
        e.preventDefault(); // only for onSubmit
        const newUser = {username, age, password, confirm} // create the user
        console.log(newUser)
        setHasBeenSubmitted(true)
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
                <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)} value={username}/>
                {
                    username.length<3 && username.length>0?
                        <p> Username must be at least 3 characters</p>:
                        ""
                }
            </div>
            <div>
                <label> age </label>
                <input type="number" name="age" onChange={(e)=>setAge(e.target.value)} value={age}/>
                {
                    age<0 &&
                        <p> Age must be a positive number</p>
                }
            </div>
            <div>
                <label> Password </label>
                <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                {
                    password.length<8?
                        <p> Password must be at least 8 characters</p>:
                        ""
                }
            </div>
            <div>
                <label> Confirm Password </label>
                <input type="confirm" name="confirm" onChange={(e)=>setConfirm(e.target.value)} value={confirm}/>
                {
                    password !== confirm?
                    <p> Password must match</p>:
                    ""
                }
            </div>
            <button>Submit</button>
        </form>
        <p> Username: {username}</p>
        <p> Age: {age}</p>
        <p> password: {password}</p>
        <p> confirm password: {confirm}</p>
    </div>
  )
}

export default Form