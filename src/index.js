import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// import App from './App'
import List from './List'
import Team from './Team'
// import NotFound from './NotFound'
import * as serviceWorker from './serviceWorker'

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={List} />
        <Route exact path="/teams" component={List} />
        <Route path="/teams/:id" component={Team} />
        {/* <Route component={NotFound} /> */}
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
