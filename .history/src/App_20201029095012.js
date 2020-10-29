import React from 'react';
import './App.css';
import ListPays from "./components/VersionClassBootstrap/ListPays.components"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import InfoPays from "./components/VersionClassBootstrap/InfoPays.components"
import Nav from "./components/Navigation/Navigation"
function App() {
  return (
    <div className="App">
        <Nav />
        <Router>
          <Switch>
            <Route path="/"  exact component={ListPays} />
            <Route path="/:id"  component={InfoPays }/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
