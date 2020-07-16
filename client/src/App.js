import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Signup, Login, ForgetPassword, Admin } from './import/.';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/Login" component={Login} />
        <Route path="/Forget-password" component={ForgetPassword} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
