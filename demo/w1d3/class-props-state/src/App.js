import logo from './logo.svg';
import './App.css';
import TVShow from './components/TVShow'
import TVShowObj from './components/TVShowObj';
import States from './components/States';
import Stylings from './components/Stylings';

function App() {
  const tvshow1 = {title: "Friends", episodes: 236, hashtags:["sit-com", "the classic"]}
  return (
    <div className="App">      
      {/* <TVShow title="The Witcher" episodes={8} hashtags={["fantasy", "hmmmm", "monster"]} />
      <TVShow title="The Expanse" episodes={70} hashtags={["sci-fi", "space", "aliens"]} />
      <TVShowObj tvshow={tvshow1} /> */}

      {/* <States /> */}
      <Stylings color="red" />
    </div>
  );
}

export default App;
