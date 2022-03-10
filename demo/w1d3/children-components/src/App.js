import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <Container>
          <p> First child</p>
          <Header />
          <p> Second child</p>
          <p> Third child</p>

        </Container>
    </div>
  );
}

export default App;
