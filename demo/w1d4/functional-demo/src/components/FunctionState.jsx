import React, {useState} from 'react'

const FunctionState = () => {
    const [count, setCount] = useState(0)
    const [like, setLike] = useState(100)

    const handleDecrementCount =() =>{
        setCount(count-1)
    }


  return (
    <fieldset>
        <legend>Functional Component - states</legend>
        <h3> States</h3>
        <h3> Alert </h3>
        <button onClick={()=>alert("Functional component - hi")}> Alert me</button>
        <h3> Count: {count} | Like: {like}</h3>
        <button onClick={()=>setCount(count+1)}> Increment count</button>
        <button onClick={handleDecrementCount}> Decrement count</button>
        <button onClick={()=>setLike(like+1)}> Increment like</button>

    </fieldset>
  )
}

export default FunctionState