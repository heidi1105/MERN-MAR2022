import React from 'react'
import {BrowserRouter, Switch, Link, Route} from "react-router-dom"
import AllPets from './views/AllPets';
import Create from './views/Create';
import EditPet from './views/EditPet';
import OnePet from './views/OnePet';

function App() {
  return (
    <BrowserRouter>
    <h1> Pets Database</h1>
      <Switch>
        <Route exact path = "/pets/new">
          <Create />
        </Route>
        <Route exact path = "/pets">
          <AllPets />
        </Route>
        <Route exact path = "/pets/:id">
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
