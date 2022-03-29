import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import Register from './views/Register';
import DisplayUsers from './views/DisplayUsers';
import Login from './views/Login';
import Cookie from './views/Cookie';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <p><Link to="/">Test Cookie</Link>|
        <Link to="/register">Register</Link>|
        <Link to="/login">Login</Link>|
        <Link to="/users">All users</Link>
        </p>


        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/users">
            <DisplayUsers />
          </Route>       
          <Route path="/">
            <Cookie />
          </Route>    
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
