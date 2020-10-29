import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Listes des pays</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <Link to="/Accueil">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Accueil <span class="sr-only">(current)</span></a>
                        </li>
                    </Link>
                    <Link to="/VersionClassBootstrap">
                        <li class="nav-item">
                            <a class="nav-link" href="#">VersionClassBootstrap</a>
                        </li>
                    </Link>
                    <Link to="/VersionFonctionBootstrap">
                        <li class="nav-item">
                            <a class="nav-link" href="#">VersionFonctionBootstrap</a>
                        </li>
                    </Link>
                </ul>
            </div>
            </nav>
        )
    }
}

export default Navigation