import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Sidebar, AdminBody } from '../../import';


const useStyle = makeStyles({
  root: {
    height: '100vh'
  }
})

const DashboardHome = () => {
  const classes = useStyle()
  return (
    <Grid container className={classes.root}>
      <Grid item lg={2} md={2}>
        <Sidebar />
      </Grid>
      <Grid item md={10} lg={10}>
        <AdminBody />
      </Grid>
    </Grid>
  )
}

export default DashboardHome;
