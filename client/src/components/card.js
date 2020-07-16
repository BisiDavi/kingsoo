import React from 'react';
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    height: '300px'
  }
})


const Card = (props) => {
  const classes = useStyle()

  return (
    <Paper className={classes.root} elevation={2}>
      <Grid container>
        <Grid item md={8} lg={8}>
          <Typography variant="h5">{props.adminRole}</Typography>
        </Grid>
        <Grid item md={4} lg={4}>
          <img src={props.adminRoleImage} alt={props.adminRoleImageAlt} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Card;
