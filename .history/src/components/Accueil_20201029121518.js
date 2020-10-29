import React, { Component } from 'react'

class Accueil extends Component {
    render() {
        return (
            <div className="container">
                <h1> Voici le projet avec différentes version  </h1>
                <div style={{textAlign: "left"}}>
                    <p> VersionClassBootstrap :{"\n"}
                        - test {"\n"}
                    </p>
                    <p> VersionFonctionBootstrap :{"\n"}</p>
                    <p> VersionClassMaterialUi :{"\n"}</p>
                    <p> VersionClassSansRedirection :</p>
                </div>
            </div>
        )
    }
}

export default Accueil
