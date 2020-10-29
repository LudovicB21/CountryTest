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
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={data.flag} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">Population: {data.population}</p>
            <p className="card-text">Numéro: {data.alpha3Code}</p>
            <p className="card-text">Région: {data.region}</p>
            <p className="card-text">Sous-région: {data.subregion}</p>
            <p className="card-text">Devises: </p>
          </div>
        </div>
      </div>
    )
  }
}

export default  InfoPays