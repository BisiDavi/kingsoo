import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Signup, Login, ForgetPassword, OperationsOverview, Mobile,
  Transport, Finance, Operations, Marine, Admin, HomeOverview
} from "./import/.";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forget-password" component={ForgetPassword} />
        <Route path="/admin-home" component={HomeOverview} />
        <Route path="/mobile" component={Mobile} />
        <Route path="/transport" component={Transport} />
        <Route path="/finance" component={Finance} />
        <Route path="/operations" component={Operations} />
        <Route path="/marine" component={Marine} />
        <Route path="/admin" component={Admin} />
        <Route path="/operations-overview" component={OperationsOverview} />
      </Switch>
    </Router>
  );
}

export default App;
