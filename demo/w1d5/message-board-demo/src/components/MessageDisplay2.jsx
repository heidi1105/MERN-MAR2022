import React from 'react'

const MessageDisplay2 = (props) => {
  return (
    <fieldset>
        <legend> MessageDisplay.jsx </legend>

        {
            props.messages.map((message, i)=>{
                return (
                    <div>
                    <p key={i} style={{color: message.textColor}}> {message.user} : {message.content}</p>
                    </div>
                )
            })
        }


    </fieldset>
  )
}

export default MessageDisplay2