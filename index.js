import React from 'react';
import ReactDOM from 'react-dom';
import Home from './src/Home';
import Dashboard from './src/Dashboard'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function Users() {
  return <h2>Users</h2>;
}

const routing = (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/users/" component={Users} />
        <Route path="/dashboard/" component={Dashboard} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
