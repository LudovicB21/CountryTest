import React, { Component } from 'react'

class Pays extends Component{
  state = {
    items: [],
    infoPays: []
  }

  componentDidMount(){
    fetch(
      "https://restcountries.eu/rest/v2/all"
    )
    .then(response => response.json())
    .then(responseJson => {
      this.setState({items: responseJson})
    })
  }
  
  render(){
    const infoPays = this.state.infoPays
    if(this.state.infoPays.length !== 0){
      return (
        <div>
        <div className="container">
         <div className="card" style={{width: "18rem"}}>
           <img className="card-img-top" src={infoPays.flag} alt="drapeau"/>
           <div className="card-body">
             <h5 className="card-title">{infoPays.name}</h5>
             <p className="card-text" style={{textAlign: "left"}}>Population: {infoPays.population}</p>
             <p className="card-text" style={{textAlign: "left"}}>Numéro: {infoPays.alpha3Code}</p>
             <p className="card-text" style={{textAlign: "left"}}>Région: {infoPays.region}</p>
             <p className="card-text" style={{textAlign: "left"}}>Sous-région: {infoPays.subregion}</p>
             <p className="card-text" style={{textAlign: "left"}}>Devises: </p>
           </div>
         </div>
       </div>
     </div>
      )
    }
    return(
      <div className="container">
        <h1>List des pays dans le monde SansRedirection </h1>
          <ul className="list-group">
            {this.state.items.map(pays => {
              return (
                <li key={pays.alpha3Code} className="list-group-item">
                  {pays.name} <img src={pays.flag} style={{width: "50px", height: "50px"}} alt="drapeau" />
                  <button className="btn btn-primary" onClick={()=> console.log(pays)} style={{margin: "10px"}}> Détails</button>
                </li>
            )})}
          </ul>
      </div>
    )
  }


}


export default Pays