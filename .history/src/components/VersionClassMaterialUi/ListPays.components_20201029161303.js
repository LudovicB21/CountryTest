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
          <TableContainer component={Paper}>
            <Table className={this.props.classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nom du pays</TableCell>
                  <TableCell align="right">Drapeau</TableCell>
                </TableRow>
              </TableHead>
              {this.state.items.map(pays => (
              <Link to={{pathname: `/VersionClassMaterialUi/${pays.name}`, query: {pays}}}>
              <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {pays.name}
                      </TableCell>
                      <TableCell align="right"> <img src={pays.flag} style={{width: "50px", height: "50px"}} alt="drapeau"/></TableCell>
                    </TableRow>
              </TableBody>
              </Link>
              ))}
            </Table>
          </TableContainer>
      </div>
    )
  }


}

export default withStyles(styles)(Pays);
