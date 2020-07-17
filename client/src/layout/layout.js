import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Sidebar, Header } from '../import';


const useStyle = makeStyles({
  root: {
    height: '100vh'
  }
})

const Layout = (props) => {
  const classes = useStyle()
  return (
    <Grid container className={classes.root}>
      <Grid item lg={2} md={2}>
        <Sidebar />
      </Grid>
      <Grid item md={10} lg={10}>
        <Grid container>
          <Header />
        </Grid>
        <Grid container>
          {props.children}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Layout;
