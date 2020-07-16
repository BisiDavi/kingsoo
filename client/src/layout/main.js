import React from 'react';
import { Header, Overview, Clearance } from '../import';
import { Grid, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const useStyle = makeStyles({
  root: {
    height: '100vh'
  }
});


const Main = () => {
  const classes = useStyle()

  return (
    <Overview />
  )
}

export default Main;


{
  /**
    <Router>
      <Switch>
        <Route exact path="/clearance" component={Clearance} />
        <Route path="/login" component={Overview} />
      </Switch>
    </Router>
  */
}