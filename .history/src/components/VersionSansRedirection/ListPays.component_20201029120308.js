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
    if(this.state.infoPays.length !== 0){
      return (
        <div> Test </div>
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
                </li>
            )})}
          </ul>
      </div>
    )
  }


}


export default Pays