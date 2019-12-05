import React from 'react'
import { Route, Link, Switch, HashRouter as Router } from 'react-router-dom'
import App from './App'
import List from './List'
import Team from './Team'
import NotFound from './NotFound'

const router = (
  <Router>
    <Link to="/teams">TEAMS</Link>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/teams" component={List} />
      <Route path="/teams/:id" component={Team} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default router