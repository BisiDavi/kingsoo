import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Signup, Login, ForgetPassword, DashboardAdmin,
  Mobile, Transport, Finance, Operations, Marine, Admin
} from './import/index';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/Login" component={Login} />
        <Route path="/Forget-password" component={ForgetPassword} />
        <Route path="/home" component={DashboardAdmin} />
        <Route path="/mobile" component={Mobile} />
        <Route path="/transport" component={Transport} />
        <Route path="/finance" component={Finance} />
        <Route path="/operations" component={Operations} />
        <Route path="/marine" component={Marine} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
