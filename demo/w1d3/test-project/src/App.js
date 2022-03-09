import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import TVShow from './components/TVShow';
import TVShowObj from './components/TVShowObj';
import Container from './components/Container'
import Header from './components/Header';
import Footer from './components/Footer'
import States from './components/States';

// 1. REACT dev tool + component based
// 2. folder structures
// 3. create components
// 4. pass down props (curly braces for js expression, need {} for number and array)
// 5. array
// 6. pass down props as an object

function App() {
  const show1 = {
    title: "Snowpiercer",
    episodes : 12,
    hashtags : ["apocolyse", "train", "endOfTheWorld"]
  }


  return (
    <div className="App">
      {/* <TVShow title="The Witcher" episodes={8} hashtags={["Hmmmm", "Fantasy"]}/>
      <TVShow title="Inventing Anna" episodes={9} hashtags={["AnnaDelvey", "scammer", "fraud"]}/>
      <TVShowObj show={show1} /> */}

      {/* <Container>
        <Header />
        <Main />
        <Footer />
      </Container> */}

      <States />

    </div>
  );
}

export default App;
