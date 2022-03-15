import React, { useState } from 'react'

const TodoForm = (props) => {
    const [todo, setTodo] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.onNewItem({todo:todo, completed:false})
        setTodo("")
    }


    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Enter the item" 
                    className="form-control"/>
                <button className='btn btn-primary btn-block'> Submit! </button>
            </form>

        </div>
    )
}

export default TodoForm