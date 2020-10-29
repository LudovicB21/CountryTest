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
                        <th scope="col">Type de version </th>
                        <th scope="col">Redirection</th>
                        <th scope="col">Forme du composant</th>
                        <th scope="col">Mise en forme CSS </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">VersionClassBootstrap</th>
                            <td>Oui</td>
                            <td>Classe</td>
                            <td>Bootstrap  </td>
                        </tr>
                        <tr>
                        <th scope="row">VersionFonctionBootstrap</th>
                            <td>Oui</td>
                            <td>Fonction</td>
                            <td>Bootstrap</td>
                        </tr>
                        <tr>
                        <th scope="row">VersionClassMaterialUi</th>
                            <td>Oui</td>
                            <td>Classe</td>
                            <td>MaterialUi</td>
                        </tr>
                        <tr>
                        <th scope="row">VersionClassSansRedirection</th>
                            <td>Non</td>
                            <td>Fonction</td>
                            <td>Bootstrap</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        )
    }
}

export default Accueil
