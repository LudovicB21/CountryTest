import React, { Component } from 'react'

class Accueil extends Component {
    render() {
        return (
            <div className="container">
                <h1> Voici le projet avec différentes version  </h1>
                <div style={{textAlign: "left"}}>
                    <p> VersionClassBootstrap :{"\n"}
                        - Redireciton 
                        - Composant sous forme de classe
                        - Utilisation Boostrap pour la mise en forme CSS
                    </p>
                    <p> VersionFonctionBootstrap :{"\n"}
                        - Redireciton
                        - Composant sous forme de fonction
                        - Utilisation Bootstrap pour la mise en forme CSS
                    </p>
                    <p> VersionClassMaterialUi :{"\n"}</p>
                    <p> VersionClassSansRedirection :</p>
                </div>
            </div>
        )
    }
}

export default Accueil
