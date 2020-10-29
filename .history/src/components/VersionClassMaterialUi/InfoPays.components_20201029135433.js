import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper} from "@material-ui/core"
import { Card, CardActionArea, CardActions, CardContent, CardMedia}
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class InfoPays extends Component {

  render() {
    console.log(this.props.location.query.pays)
    const data = this.props.location.query.pays
    return (
      <div className="container">
        {/*<div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={data.flag} alt="drapeau"/>
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text" style={{textAlign: "left"}}>Population: {data.population}</p>
            <p className="card-text" style={{textAlign: "left"}}>Numéro: {data.alpha3Code}</p>
            <p className="card-text" style={{textAlign: "left"}}>Région: {data.region}</p>
            <p className="card-text" style={{textAlign: "left"}}>Sous-région: {data.subregion}</p>
            <p className="card-text" style={{textAlign: "left"}}>Devises: </p>
          </div>
        </div> */}
        <Paper className={this.props.classes.root}>
            <Table className={this.props.classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Nom du pays</TableCell>
                  <TableCell align="right">Drapeau</TableCell>
                  <TableCell align="right">Population</TableCell>
                  <TableCell align="right">Numéro</TableCell>
                  <TableCell align="right">Région / Sous-région</TableCell>
                  <TableCell align="right">Devises</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                    <TableCell component="th">{data.name}</TableCell>
                    <TableCell align="right"> <img src={data.flag} style={{width: "50px", height: "50px"}}/></TableCell>
                    <TableCell align="right">{data.population}</TableCell>
                    <TableCell align="right">{data.alpha3Code}</TableCell>
                    <TableCell align="right">{data.region} / {data.subregion}</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <
      </div>
    )
  }
}
export default withStyles(styles)(InfoPays);
