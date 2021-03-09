import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import FormApp from './pages/form/index'
import StateUp from './pages/stateUp/index'
import ContextDemo from './pages/context/index';
import ContextDemoMore from './pages/moreContext/index';

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/form" component={FormApp}/>
                <Route path="/stateUp" component={StateUp}/>
                <Route path="/context" component={ContextDemo}/>
                <Route path="/contextMore" component={ContextDemoMore}/>
            </Switch>
        </HashRouter>
    );
}

export default App;
