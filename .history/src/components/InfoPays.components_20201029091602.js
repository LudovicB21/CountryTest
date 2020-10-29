import React, { Component } from 'react'

class InfoPays extends Component {
  constructor(props){
    super()
  }

  render() {
    console.log(this.props.location.query.pays)
    const data = this.props.location.query.pays
    return (
      <div className="container">
        <div className="card" style="width: 18rem;">
          <p> test</p>
          <img className="card-img-top" src={this.props.location.query.pays.flag} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{this.props.location.query.pays.name}</h5>
            <p className="card-text">Population: {this.props.location.query.pays.population}</p>
            <p className="card-text">Numéro: {this.props.location.query.pays.alpha3Code}</p>
            <p className="card-text">Région: {this.props.location.query.pays.region}</p>
            <p className="card-text">Sous-région: {this.props.location.query.pays.subregion}</p>
            <p className="card-text">Devises: </p>
          </div>
        </div>
      </div>
    )
  }
}

export default  InfoPays