import React from 'react';
import './App.css';
import ListPays from "./components/VersionClassBootstrap/ListPays.components"
import ListPaysMaterial from "./components/VersionClassMaterialUi/ListPays.components"
import ListPaysFonction from "./components/VersionFonctionBoostrap/ListPays.components"
import Accueil from "./components/Accueil"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import InfoPays from "./components/VersionClassBootstrap/InfoPays.components"
import InfosPaysMaterial from "./components/VersionClassMaterialUi/InfoPays.components"
import InfoPaysFonction from "./components/VersionFonctionBoostrap/InfoPays.components"
import Nav from "./components/Navigation"
function App() {
  return (
    <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route path="/"  exact component={Accueil} />
            <Route path="/VersionClassBootstrap" exact component={ListPays} />
            <Route path="/VersionFonctionBoostrap" exact component={ListPaysFonction()} />
            <Route path="/VersionClassMaterialUi" exact component={ListPaysMaterial} />
            <Route path="/VersionClassMaterialUi/:id" component={InfosPaysMaterial} />
            <Route path="/VersionClassBootstrap/:id"  component={InfoPays }/>
            <Route path="/VersionFonctionBoostrap/:id" component={InfoPaysFonction()} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
