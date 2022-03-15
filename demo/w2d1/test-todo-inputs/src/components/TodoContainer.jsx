import React, {useState} from 'react'
import TodoDisplay from './TodoDisplay'
import TodoForm from './TodoForm'

const TodoContainer = () => {
    const [items, setItems] = useState([])

    const receiveNewItem = (newItem) =>{
        setItems([...items, newItem])
    }

    const updateItems = (items) =>{
        setItems(items)
    }


  return (
    <div className='container mt-5'>
        <h1>Todo list</h1>
        <TodoForm onNewItem = {receiveNewItem}/>
        <TodoDisplay items={items} updateItems={updateItems}/>
    </div>
  )
}

export default TodoContainer