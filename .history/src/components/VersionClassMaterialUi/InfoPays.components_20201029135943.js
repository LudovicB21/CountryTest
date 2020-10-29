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
          <Card className={this.props.classes.rootCard}>
            <CardActionArea>
              <CardMedia
                className={this.props.classes.media}
                image={data.flag}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Population : {data.population}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Numéro : {data.alpha3Code}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Région / Sous-région : {data.region} / {data.subregion}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Devises : 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </div>
    )
  }
}
export default withStyles(styles)(InfoPays);
