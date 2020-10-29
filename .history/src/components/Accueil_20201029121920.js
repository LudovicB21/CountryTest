import React, { Component } from 'react'

class Accueil extends Component {
    render() {
        return (
            <div className="container">
                <h1 style={{padding: "20px"}}> Voici le projet avec différentes version  </h1>
                <div style={{textAlign: "left"}}>
                    <p> VersionClassBootstrap :{"\n"}
                        - Redirection 
                        - Composant sous forme de classe
                        - Utilisation de Boostrap pour la mise en forme CSS
                    </p>
                    <p> VersionFonctionBootstrap :{"\n"}
                        - Redirection
                        - Composant sous forme de fonction
                        - Utilisation de Bootstrap pour la mise en forme CSS
                    </p>
                    <p> VersionClassMaterialUi :{"\n"}
                        - Redirection
                        - Composant sous forme de fonction
                        - Utilisation de MaterialUi pour la mise en forme CSS
                    </p>
                    <p> VersionClassSansRedirection :{"\n"}
                        - Pas de Redirection
                        - Composant sous forme de fonction
                        - Utilisation de Bootstrap pour la mise en forme CSS
                    </p>
                </div>
            </div>
        )
    }
}

export default Accueil
