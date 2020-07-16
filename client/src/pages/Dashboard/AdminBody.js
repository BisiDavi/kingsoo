import React from 'react';
import { Topbar, Card } from '../../import/.';
import { Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    height: '100vh'
  }
})


const AdminBody = () => {
  const classes = useStyle()

  return (
    <Grid container className={classes.root} lg={10} md={10}>
      <Grid item>
        <Topbar />
      </Grid>
      <Grid item>
        <Grid container>
          <Grid justify="space-around" container>
            <Grid item>
              <Card adminRole="Operations" adminRoleImage="" />
            </Grid>
            <Grid item>
              <Card adminRole="Admin" adminRoleImage="" />
            </Grid>
          </Grid>
          <Grid justify="space-around" container>
            <Grid item>
              <Card adminRole="Transport" adminRoleImage="" />
            </Grid>
            <Grid item>
              <Card adminRole="Marine" adminRoleImage="" />
            </Grid>
          </Grid>
          <Grid justify="space-around" container>
            <Grid item>
              <Card adminRole="Finance Request" adminRoleImage="" />
            </Grid>
            <Grid item>
              <Card adminRole="Mobile App" adminRoleImage="" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AdminBody;
