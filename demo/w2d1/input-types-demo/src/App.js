import React, { useState } from 'react'
import InputForm from "./components/InputForm";
import InputDisplay from './components/InputDisplay'


// lift state 
// 1 parent component - create state & function to change state
function App() {
  const [shows, setShows] = useState([])

  const receiveNewShow = (newShow) =>{
    setShows([...shows, newShow]) // .push (never use .push for state)
  }



  const handleUpdate = (allShows) =>{
    setShows(allShows)
  }  

  return (
    <div className="container mt-5">
      <InputForm onNewShow ={receiveNewShow} />
      <InputDisplay shows={shows} handleUpdate={handleUpdate}/>
    </div>
  );
}

export default App;
