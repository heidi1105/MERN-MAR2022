import logo from './logo.svg';
import './App.css';
import ClassTVShow from './components/ClassTVShow';
import FunctionTVShow from './components/FunctionTVShow';
import ClassState from './components/ClassState';
import FunctionState from './components/FunctionState';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form />

      <ClassState />
      <FunctionState />

      <ClassTVShow title="Friends" episodes = {235} hashtags={["TheClassic", "sit-com"]}/>
      <FunctionTVShow title="Games of Thrones" episodes = {73} hashtags={["everyoneDies", "lastSeasonIsDisappointing", "HouseTargaryen"]}/>
    </div>
  );
}

export default App;
