import React from 'react';
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Card } from '../import';
import { Grid, makeStyles, Typography } from '@material-ui/core';


const useStyle = makeStyles({
  root: {
    height: '100vh'
  },
  adminMainBody: {
    marginTop: '-200px',
  },
  adminBodyCard: {
    padding: "0px 0px"
  },
  adminBodyText: {
    margin: '0px 0px 20px 130px',
    height: '0px'
  }
});


const Roles = (props) => {
  const classes = useStyle()

  return (
    <Grid container className={classes.adminMainBody}>
      <Grid justify="space-between" className={classes.adminBodyCard} container>
        <Typography className={classes.adminBodyText} variant="h4">Overview</Typography>

        <Grid justify="space-around" container>
          {
            /**<Grid item>
            <Router>
              <Switch>
                <Route path={props.link} component={props.component} />
              </Switch>
            </Router>
          </Grid>*/}
          <Grid item>
            <Card adminRole="Finance Request" adminRoleImage="fas fa-dollar-sign" />
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  )
}

export default Roles;
