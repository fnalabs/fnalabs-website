import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { About, Cookie, Home, Privacy, Projects, Support } from 'pages'

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/projects' component={Projects} />
    <Route exact path='/about' component={About} />
    <Route exact path='/support' component={Support} />
    <Route exact path='/cookie' component={Cookie} />
    <Route exact path='/privacy' component={Privacy} />
    <Redirect to='/' />
  </Switch>
)
