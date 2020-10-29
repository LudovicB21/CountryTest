import React, { Component } from 'react'

class Accueil extends Component {
    render() {
        return (
            <div className="container">
                <h1> Voici le projet avec différentes version  </h1>
                <div>
                    <p> VersionClassBootstrap :</p>
                    <p> VersionFonctionBootstrap :</p>
                    <p> VersionClassMaterialUi :</p>
                    <p> VersionClassSansRedirection :</p>
                </div>
            </div>
        )
    }
}

export default Accueil
