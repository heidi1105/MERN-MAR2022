import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HeaderForm from "./components/HeaderForm";
import Character from "./views/Character";
import House from "./views/House";

function App() {
  return (
    <BrowserRouter>
      <h1> GOT API demo</h1>
      <HeaderForm />
      
      <Switch>
        <Route path="/houses/:id">
          <House />
        </Route>
        <Route path="/characters/:id">
          <Character />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
