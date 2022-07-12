import React, { useState } from 'react'
// for every input : 1. import useState, 2. + state 3. eventHandler


const MessageForm = (props) => {
    const [msg, setMsg] = useState("")
    const [color, setColor] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        props.onNewMessage({user: props.user, content: msg, color:color})
        setMsg("")
        setColor("")
    }

    return (
        <fieldset>
            <legend> MessageForm.jsx</legend>
            <form onSubmit={handleSubmit}>
                {props.user} : 
                <input type="text" name="msg" placeholder='Enter your message' 
                    onChange={(e)=>setMsg(e.target.value)}
                    value={msg}/>
                <input type="text" name="color" placeholder='Enter the color' 
                    onChange={(e)=>setColor(e.target.value)} 
                    value={color}/>



                <button> Send</button>
            </form>
            
        </fieldset>
    )
}

export default MessageForm