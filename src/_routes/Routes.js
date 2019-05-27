// Routes.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from '../components/shared/Footer/Footer';
import Header from '../components/shared/Header/Header';
import Home from '../components/Home/Home';
import { PrivateRoute } from '../components/PrivateRoute';

export default () => (
    <Switch>
        <Route exact path="/footer" component={Footer} />
        <Route exact path="/header" component={Header} />

        <PrivateRoute exact path="/" component={Home} />
    </Switch>
);