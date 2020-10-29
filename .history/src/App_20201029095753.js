import React from 'react';
import './App.css';
import ListPays from "./components/VersionClassBootstrap/ListPays.components"
import Accueil from "./components/Accueil"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import InfoPays from "./components/VersionClassBootstrap/InfoPays.components"
import Nav from "./components/Navigation"
function App() {
  return (
    <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route path="/"  exact component={Accueil} />
            <Route path="/VersionClassBootstrap" exact component={ListPays} />
            <Route path="/VersionClassBootstrap/:id"  component={InfoPays }/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
