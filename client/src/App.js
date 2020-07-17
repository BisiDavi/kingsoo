import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Signup, Login, ForgetPassword, OperationsOverview, Mobile, ImportClearance1, ImportClearance2,
  Transport, Finance, Operations, Marine, Admin, HomeOverview, ImportClearance3, CustomClearance
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
        <Route path="/import-custom-clearance" component={ImportClearance1} />
        <Route path="/import-custom-clearance-2" component={ImportClearance2} />
        <Route path="/import-custom-clearance-3" component={ImportClearance3} />
        <Route path="/file-saved" component={CustomClearance} />
      </Switch>
    </Router>
  );
}

export default App;
