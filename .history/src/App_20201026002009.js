import React from 'react';
import './App.css';
import ListPays from "./components/ListPays.components"
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import InfoPays from "./components/InfoPays.components"
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/"  component={ListPays} />
            <Route path="/:id" exact component={InfoPays }/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
