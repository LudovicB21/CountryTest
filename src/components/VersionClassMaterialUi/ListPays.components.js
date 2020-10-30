import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer} from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';


const styles= ({
  table: {
    minWidth: 650,
  },
});

class Pays extends Component{
  state = {
    items: []
  }

  getData(){
    fetch(
      "https://restcountries.eu/rest/v2/all"
    )
    .then(response => response.json())
    .then(responseJson => {
      this.setState({items: responseJson})
    })
  }

  componentDidMount(){
    this.getData()
  }
  
  render(){
    return(
      <div className="container">
      <h1>List des pays dans le monde MaterialUi </h1>
        <ul className="list-group">
          {this.state.items.map(pays => {
            return (<Link to={{pathname: `/VersionClassMaterialUi/${pays.name}`, query: {pays}}}>
              <li key={pays.alpha3Code} className="list-group-item">
                {pays.name} <img src={pays.flag} style={{width: "50px", height: "50px"}} alt="drapeau" />
              </li>
            </Link>
          )})}
        </ul>
    </div>
    )
  }


}

export default withStyles(styles)(Pays);
