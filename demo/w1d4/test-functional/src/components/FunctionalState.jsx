import React, {useState} from 'react'

const FunctionalState = () => {
    const [count, setCount] = useState(0)

    const handleDecrementCount = ()=>{
        setCount(count-1)
    }

    return (
        <div>
            <h1> Functional Components - States</h1>
            <h2> Alert</h2>
            <button onClick={() => alert("hi")}> Alert me!</button>
            <h2> State: count: {count}</h2>
            <button onClick={()=>setCount(count+1)} > Increment count</button>
            <button onClick={handleDecrementCount} > Decrement count</button>

        
        </div>
    )
}

export default FunctionalState