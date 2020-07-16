import React from 'react'
import { Card, Sidebar, Header } from '../../../import';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    height: '100vh'
  },
  adminBodyCard: {
    padding: "0px 0px"
  },
  operations: {
    marginTop: '50px'
  },
  adminBodyText: {
    margin: '0px 0px 20px 130px',
    height: '0px'
  }
});


const Operations = () => {
  const classes = useStyle();

  return (
    <Grid container>
      <Grid item lg={2} md={2}>
        <Sidebar />
      </Grid>
      <Grid item md={10} lg={10}>
        <Grid container>
          <Header />
        </Grid>
        <Grid justify="space-between" className={classes.adminBodyCard} container>
          <Typography className={classes.adminBodyText} variant="h4">Overview</Typography>
          <Grid justify="space-around" className={classes.operations} container>
            <Grid item>
              <Card link="/operations-overview" adminRole="Operations" adminRoleImage="fas fa-user-hard-hat" />
            </Grid>
            <Grid item>
              <Card adminRole="Finance Request" adminRoleImage="fas fa-dollar-sign" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}


export default Operations;
