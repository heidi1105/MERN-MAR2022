// 1. form - onChange + how we can put display on a different component
// 2. onSubmit
// 3. conditional rendering -- errorMessage
// 4. submitMessage
// 5. validation on submit
// 6. validation on button


import React, {useState} from 'react'

const BasicForm = () => {
    const [title, setTitle] = useState("")
    const [episodes, setEpisodes] = useState(0)
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [submitError, setSubmitError] = useState("")
    const [titleError, setTitleError] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(title.length>2 && episodes>=0){ // if all true, successful submission
            const newShow ={title, episodes}
            console.log("The show is created: ", newShow)  
            setSubmitError("")
            setHasBeenSubmitted(true)
        }else{
            setSubmitError("Please fill in all the fields")
        }

    } 

    const handleTitle =(e)=>{
        setTitle(e.target.value)
        if(title.length<2){
            setTitleError("Title must be 2 characters or longer")
        }else{
            setTitleError("")
        }
    }

  return (
    <div>
        {
            hasBeenSubmitted?
                <h1> Thank you for submitting the form</h1> :
                <h1> Please fill in the form</h1>
        }

        <form onSubmit={handleSubmit}>
            <div>
                <label> Title </label>
                <input name="title" type="text" value={title} onChange={handleTitle}/>
                {
                    titleError && <p style={{color:'red'}}> {titleError}</p>
                }
            </div>
            <div>
                <label> Total Episodes </label>
                <input name="episodes" type="number" value={episodes} onChange={(e)=>setEpisodes(e.target.value)}/>
                {
                    episodes<0 && <p style={{color:'red'}}> Episodes must be positive number</p>
                }
            </div>
            <button disabled={title.length<2 || episodes<0}> Submit!</button>
        </form>
            <p style={{color:'red'}}>{submitError} </p>

        <h1> Display input</h1>
        <p> Title: {title}</p>
        <p> Episodes: {episodes}</p>

    </div>
  )
}

export default BasicForm