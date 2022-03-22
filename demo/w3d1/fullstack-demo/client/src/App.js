import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Dashboard from "./views/Dashboard"
import Create from "./views/Create"
import OnePet from "./views/OnePet"
import EditPet from "./views/EditPet"
import Message from "./views/Message"


function App() {
  return (
    <BrowserRouter>
      <h1> Pets DB</h1>
      <p>
        <Link to="/pets/new"> Create new pet</Link> |
        <Link to="/pets"> Dashboard </Link>
      </p>
      <Switch>
        <Route exact path="/message">
          <Message />
        </Route>
        <Route exact path="/pets">
          <Dashboard />
        </Route>
        <Route exact path="/pets/new">
          <Create />
        </Route>
        <Route exact path="/pets/:id">
          <OnePet />
        </Route>
        <Route exact path="/pets/:id/edit">
          <EditPet />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
