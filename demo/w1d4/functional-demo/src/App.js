import logo from './logo.svg';
import './App.css';
import ClassTVShow from './components/ClassTVShow';
import FunctionalTVShow from './components/FunctionalTVShow';
import ClassState from './components/ClassState';
import FunctionalState from './components/FunctionalState';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form />

      <ClassState />
      <FunctionalState />

      <ClassTVShow title="Friends" episodes = {235} hashtags={["TheClassic", "sit-com"]}/>
      <FunctionalTVShow title="Games of Thrones" episodes = {73} hashtags={["everyoneDies", "lastSeasonIsDisappointing", "HouseTargaryen"]}/>
    </div>
  );
}

export default App;
