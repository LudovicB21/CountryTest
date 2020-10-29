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
    return(
      <div className="container">
        <h1>List des pays dans le monde MaterialUI </h1>
          <ul className="list-group">
            {this.state.items.map(pays => {
              return (<Link to={{pathname: `/VersionClassMaterialUi/${pays.name}`, query: {pays}}}>
                <li key={pays.alpha3Code} className="list-group-item">
                  {pays.name} <img src={pays.flag} style={{width: "50px", height: "50px"}} alt="drapeau" />
                </li>
              </Link>
            )})}
          </ul>
          <TableContainer component={Paper}>
            <Table className={this.props.classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nom du pays</TableCell>
                  <TableCell align="right">Drapeau</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </div>
    )
  }


}

export default withStyles(styles)(Pays);
