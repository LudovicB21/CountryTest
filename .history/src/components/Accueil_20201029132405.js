import React, { Component } from 'react'

class Accueil extends Component {
    render() {
        return (
            <div className="container">
                <h1 style={{padding: "20px"}}> Voici le projet avec différentes version  </h1>
                <div style={{textAlign: "left"}}>
                    <p> VersionClassBootstrap :
                        / Redirection 
                        / Composant sous forme de classe
                        / Utilisation de Boostrap pour la mise en forme CSS {"\n"}
                    </p>
                    <p> VersionFonctionBootstrap :
                        / Redirection
                        / Composant sous forme de fonction
                        / Utilisation de Bootstrap pour la mise en forme CSS {"\n"}
                    </p>
                    <p> VersionClassMaterialUi :
                        / Redirection
                        / Composant sous forme de fonction
                        / Utilisation de MaterialUi pour la mise en forme CSS {"\n"}
                    </p>
                    <p> VersionClassSansRedirection :
                        / Pas de Redirection
                        / Composant sous forme de fonction
                        / Utilisation de Bootstrap pour la mise en forme CSS {"\n"}
                    </p>
                </div>
            </div>
        )
    }
}

export default Accueil
