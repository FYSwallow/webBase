import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import UseState from './pages/useState'

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
          <Switch>
              <Route exact path='/hooks1' component={UseState}></Route>
          </Switch>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
