import React, {useState} from 'react'


// input --> 1. import useState 2. initiate the state 3. eventHandler
// form submission --> 
//1. create handleSubmit function 2. attach the eventHandler 3. e.preventDefault()

const MessageForm = (props) => {
    const [message, setMessage] = useState("")

    const handleSubmit =(e) =>{
        e.preventDefault()
        props.onNewMessage( message)
        setMessage("")
    }
  return (
    <fieldset>
        <legend> MessageForm.jsx </legend>
        <form onSubmit={handleSubmit}>
            <input type="text" name="message" value={message}
                onChange={(e)=>setMessage(e.target.value)}
                placeholder="Please enter your message"
            />


            <button> Send!</button>
        </form>

    </fieldset>
  )
}

export default MessageForm