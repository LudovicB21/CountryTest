import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <Link to="/">
                        <li className="nav-item">
                            <a className="nav-link">Accueil</a>
                        </li>
                    </Link>
                    <Link to="/VersionClassBootstrap">
                        <li className="nav-item">
                            <a className="nav-link">VersionClassBootstrap</a>
                        </li>
                    </Link>
                    <Link to="/VersionFonctionBoostrap">
                        <li className="nav-item">
                            <a className="nav-link">VersionFonctionBootstrap</a>
                        </li>
                    </Link>
                    <Link to="/VersionClassMaterialUi">
                        <li className="nav-item">
                            <a className="nav-link">VersionClassMaterialUi</a>
                        </li>
                    </Link>
                    <Link to="/VersionSansRedirection">
                        <li className="nav-item">
                            <a className="nav-link">VersionClassSansRedirection</a>
                        </li>
                    </Link>
                </ul>
            </div>
            </nav>
        )
    }
}

export default Navigation