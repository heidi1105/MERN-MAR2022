import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const parentFunction =(secret) =>{
        alert("Parent function alert: "+ secret)
    }

  return (
    <fieldset>
        <legend> ParentComponent.jsx</legend>
        <ChildComponent callbackFunction ={parentFunction}/>
    </fieldset>
  )
}

export default ParentComponent