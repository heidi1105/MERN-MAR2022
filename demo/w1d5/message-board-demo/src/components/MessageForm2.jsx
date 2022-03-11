import React, {useState} from 'react'


// input --> 1. import useState 2. initiate the state 3. eventHandler
// form submission --> 
//1. create handleSubmit function 2. attach the eventHandler 3. e.preventDefault()

const MessageForm2 = (props) => {
    const [message, setMessage] = useState("")
    const [textColor, setTextColor] = useState("")

    const handleSubmit =(e) =>{
        e.preventDefault()
        props.onNewMessage( {user:props.user, content:message, textColor:textColor})
        setMessage("")
        setTextColor("")
    }
  return (
    <fieldset>
        <legend> MessageForm.jsx </legend>
        <form onSubmit={handleSubmit}>
            <input type="text" name="message" value={message}
                onChange={(e)=>setMessage(e.target.value)}
                placeholder="Please enter your message"
            />
            <input type="text" name="textColor" value={textColor}
                onChange={(e)=>setTextColor(e.target.value)}
                placeholder="Enter a color"
            />


            <button> Send!</button>
        </form>

    </fieldset>
  )
}

export default MessageForm2