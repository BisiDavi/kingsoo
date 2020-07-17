import React from 'react';
import {  Overview } from '../import';
import {  makeStyles } from '@material-ui/core';


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