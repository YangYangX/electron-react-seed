/**
 *
 * Application Routes
 *
 */

import React, { Component } from 'react'

import { Route, Switch } from 'react-router'

// Import containers
import Home from '../containers/home'
import Blank from '../containers/blank'

const routes = (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blank" component={Blank} />
    </Switch>
)

export default routes
