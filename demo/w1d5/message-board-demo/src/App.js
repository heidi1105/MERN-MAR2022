import React, {useState} from 'react'
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
import MessageDisplay2 from './components/MessageDisplay2';
import MessageForm2 from './components/MessageForm2'
import ParentComponent from './components/ParentComponent';

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
        {/* <ParentComponent /> */}


        <MessageForm2 user="Heidi" onNewMessage={handleNewMessage}/>
        <MessageForm2 user="Pepper" onNewMessage={handleNewMessage}/>
        <MessageDisplay2 currentMsg ={currentMsg} messages = {messages}/>


    </div>
  );
}

export default App;
