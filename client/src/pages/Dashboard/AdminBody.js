import React from 'react';
import { Topbar, Card, Overview } from '../../import/.';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    height: '100vh'
  }
});


const AdminBody = () => {
  const classes = useStyle()

  return (
    <Grid container className={classes.root}>
      <Grid container>
        <Topbar />
      </Grid>
      <Overview />
    </Grid>
  )
}

export default AdminBody;
