import React, {useState} from 'react'
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';

// props -- pass data from parent to children
// pass data from children to parent --> need a function 


function App() {
  const [currentMsg, setCurrentMsg] = useState("")

  //----- message array ------
  const [messages, setMessages] = useState([])

  const handleNewMessage = (newMessage)=>{
    setCurrentMsg(newMessage)
    setMessages([...messages, newMessage])
  }

  return (
    <div className="App">
        <MessageForm user="Heidi" onNewMessage={handleNewMessage}/>
        <MessageDisplay currentMsg ={currentMsg} messages = {messages}/>

    </div>
  );
}

export default App;
