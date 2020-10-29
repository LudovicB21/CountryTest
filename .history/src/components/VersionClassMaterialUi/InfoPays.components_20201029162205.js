import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper} from "@material-ui/core"
import { Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core"

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  rootCard: {
    maxWidth: 300,
    margin: "20px",
  },
  media: {
    height: 140,
  },
});

class InfoPays extends Component {

  render() {
    console.log(this.props.location.query.pays)
    const data = this.props.location.query.pays
    return (
      <div className="container">
       <TableContainer component={Paper}>
            <Table className={this.props.classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nom du pays</TableCell>
                  <TableCell align="right">Drapeau</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {this.state.items.map(pays => (
              <Link to={{pathname: `/VersionClassMaterialUi/${pays.name}`, query: {pays}}}>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {pays.name}
                      </TableCell>
                      <TableCell align="right"> <img src={pays.flag} style={{width: "50px", height: "50px"}} alt="drapeau"/></TableCell>
                    </TableRow>
              </Link>
              ))}
              </TableBody>
            </Table>
          </TableContainer>
      </div>
    )
  }
}
export default withStyles(styles)(InfoPays);
