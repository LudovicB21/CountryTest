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
                        <th scope="col">VersionClassBootstrap</th>
                        <th scope="col">VersionFonctionBootstrap</th>
                        <th scope="col">VersionClassMaterialUi</th>
                        <th scope="col">VersionClassSansRedirection</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
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
