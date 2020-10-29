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
          <h1> {this.props.location.query.pays.name} </h1>
          <p> Population : {this.props.location.query.pays.population}</p>
          <p> Numéro : {this.props.location.query.pays.alpha3Code}</p>
          <p> Région : {this.props.location.query.pays.region}</p>
          <p> Sous-Région : {this.props.location.query.pays.subregion}</p>
          <p> Devises : </p>
      </div>
      <div className="card" style="width: 18rem;">
      <img className="card-img-top" src={data.flag} alt="Card image cap">
      <div className="card-body">
        <h5 className="card-title">{data.}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    
    )
  }
}

export default  InfoPays