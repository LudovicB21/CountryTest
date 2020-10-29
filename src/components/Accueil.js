import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Accueil extends Component {
    render() {
        return (
            <div className="container">
                <h1 style={{padding: "20px"}}> Voici le projet avec différentes versions  </h1>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Type de version </th>
                        <th scope="col">Redirection</th>
                        <th scope="col">Forme du composant</th>
                        <th scope="col">Mise en forme CSS </th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">VersionClassBootstrap</th>
                            <td>Oui</td>
                            <td>Classe</td>
                            <td>Bootstrap  </td>
                            <Link to="/VersionClassBootstrap">
                                <td> <button className="btn btn-primary"> Voir </button></td>
                            </Link>
                        </tr>
                        <tr>
                        <th scope="row">VersionFonctionBootstrap</th>
                            <td>Oui</td>
                            <td>Fonction</td>
                            <td>Bootstrap</td>
                            <Link to="/VersionFonctionBoostrap">
                                <td> <button className="btn btn-primary"> Voir </button></td>
                            </Link>
                        </tr>
                        <tr>
                        <th scope="row">VersionClassMaterialUi</th>
                            <td>Oui</td>
                            <td>Classe</td>
                            <td>MaterialUi</td>
                            <Link to="/VersionClassMaterialUi">
                                <td> <button className="btn btn-primary"> Voir </button></td>
                            </Link>
                        </tr>
                        <tr>
                        <th scope="row">VersionClassSansRedirection</th>
                            <td>Non</td>
                            <td>Classe</td>
                            <td>Bootstrap</td>
                            <Link to="/VersionSansRedirection">
                                <td> <button className="btn btn-primary"> Voir </button></td>
                            </Link>
                        </tr>
                    </tbody>
                    </table>
            </div>
        )
    }
}

export default Accueil
