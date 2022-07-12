import {useState} from 'react'
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';

// Message Display: pass info from parent to children -- props

// child --> parent


function App() {
  const [currentMsg, setCurrentMsg] = useState("")
  const [messages, setMessages] = useState([])

  const handleNewMessage = (newMessageFromChild) =>{
    // setCurrentMsg(newMessageFromChild)
    setMessages([...messages, newMessageFromChild])
  }


  return (
    <div className="App">
      <MessageForm user="Heidi" onNewMessage ={handleNewMessage}/>
      <MessageForm user="Pepper" onNewMessage ={handleNewMessage}/>
      <MessageDisplay currentMessage={currentMsg} messages={messages} />
    </div>
  );
}

export default App;
