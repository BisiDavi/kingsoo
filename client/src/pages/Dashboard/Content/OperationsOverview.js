import React from 'react';
import { Card, Layout } from '../../../import';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    height: '100vh'
  },
  adminBodyText: {
    margin: '0px 0px 20px 130px',
    height: '0px'
  },
  cardRow: {
    padding: '40px'
  }
});


const OperationsOverview = () => {
  const classes = useStyle()

  return (
    <Layout>
      <Typography className={classes.adminBodyText} variant="h4">Overview</Typography>
      <Grid justify="space-around" className={classes.cardRow} container>
        <Grid item>
          <Card link="/operations-overview" adminRole="Import Custom Clearance" adminRoleImage="fas fa-user-hard-hat" />
        </Grid>
        <Grid item>
          <Card link="/admin" adminRole="Personal Effects" adminRoleImage="fas fa-user-plus" />
        </Grid>
      </Grid>
      <Grid justify="space-around" className={classes.cardRow} container>
        <Grid item>
          <Card link="/transport" adminRole="Haulage" adminRoleImage="fas fa-truck" />
        </Grid>
        <Grid item>
          <Card link="/marine" adminRole="Export Clearance" adminRoleImage="fas fa-ship" />
        </Grid>
      </Grid>
    </Layout >
  )
}

export default OperationsOverview;
