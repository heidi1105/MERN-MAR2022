import React from 'react'

const ChildComponent = (props) => {
    const secretMessage = "secret from child "
  return (
    <fieldset>
        <legend> ChildComponent.jsx</legend>
        <button onClick={()=>props.callbackFunction(secretMessage)}>Click me</button>
        <button onClick={()=>props.callbackFunction("testing")}>Click me</button>
    </fieldset>
  )
}

export default ChildComponent