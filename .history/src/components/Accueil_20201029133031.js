import React, { Component } from 'react'

class Accueil extends Component {
    render() {
        return (
            <div className="container">
                <h1 style={{padding: "20px"}}> Voici le projet avec différentes version  </h1>
                <div style={{textAlign: "left"}}>
                    <p> VersionClassBootstrap :
                          Redirection 
                        / Composant sous forme de classe
                        / Utilisation de Boostrap pour la mise en forme CSS {"\n"}
                    </p>
                    <p> VersionFonctionBootstrap :
                          Redirection
                        / Composant sous forme de fonction
                        / Utilisation de Bootstrap pour la mise en forme CSS {"\n"}
                    </p>
                    <p> VersionClassMaterialUi :
                          Redirection
                        / Composant sous forme de fonction
                        / Utilisation de MaterialUi pour la mise en forme CSS {"\n"}
                    </p>
                    <p> VersionClassSansRedirection :
                          Pas de Redirection
                        / Composant sous forme de fonction
                        / Utilisation de Bootstrap pour la mise en forme CSS {"\n"}
                    </p>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Redirection</th>
                        <th scope="col">Forme du composant</th>
                        <th scope="col">Mise en forme CSS </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">VersionClassBootstrap</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">VersionFonctionBootstrap</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">VersionClassMaterialUi</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                        <th scope="row">VersionClassSansRedirection</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        )
    }
}

export default Accueil
