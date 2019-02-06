/**
 *
 * Application Routes
 *
 */

import React, { Component } from 'react';

import { Route, Switch } from 'react-router';

// Import containers
import Home from '../containers/home';
import Blank from '../containers/blank';
import AddNewProject from '../containers/addNewProject';

const routes = (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blank" component={Blank} />
        <Route exact path="/addnewproject" component={AddNewProject} />
    </Switch>
);

export default routes;
