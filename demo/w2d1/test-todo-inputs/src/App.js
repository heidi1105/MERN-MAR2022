import React, {useState} from 'react'
import InputDisplay from './components/InputDisplay';
import InputForm from './components/InputForm';
import TodoContainer from './components/TodoContainer';

function App() {
  const [shows, setShows] = useState([])

  const addShowToList = (newShow) =>{
    setShows([...shows, newShow])
  }

  const updateShows = (newList) =>{
    setShows(newList)
  }

  return (
    <div className="container mt-5">
      {/* <TodoContainer /> */}
      <InputForm onNewShow={addShowToList} />
      <InputDisplay shows={shows} updateShows={updateShows}/>
    </div>
  );
}

export default App;
