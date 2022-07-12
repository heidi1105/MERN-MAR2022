import React from 'react'

const MessageDisplay = (props) => {
  return (
    <fieldset>
        <legend> MessageDisplay.jsx</legend>
        <p> {props.currentMessage}</p>

        <h1>Message History</h1>
        {
            props.messages.map((msg, i)=>(
                <p key={i} style={{color: msg.color}}>{msg.user} : {msg.content}</p>
            ))
        }
    </fieldset>
  )
}

export default MessageDisplay