import * as React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import { Home } from '../components/home';

export class App extends React.Component<{}, {}> {
    constructor() {
        super();
    }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Home}>
                    <IndexRoute component={Home}>
                    </IndexRoute>
                </Route>
            </Router>
        );
    }
};