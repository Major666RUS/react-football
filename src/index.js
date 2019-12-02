import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, Switch, HashRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import List from './List'
import Team from './Team'
// import NotFound from './NotFound'
import * as serviceWorker from './serviceWorker'

const routing = (
    <Router basename={process.env.PUBLIC_URL}>
      <Link to="/teams">TEAMS</Link>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/teams" component={List} />
        <Route path="/teams/:id" component={Team} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
