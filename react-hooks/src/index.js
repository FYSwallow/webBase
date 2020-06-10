import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import UseState from './pages/useState'
import UseEffect from './pages/useEffect'
import Context from './pages/context'
import UseContext from './pages/useContext'
import UseReducer from './pages/useReducer'
import UseCallback from './pages/useCallback'
import UseRef from './pages/useRef'

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
          <Switch>
              <Route exact path='/useState' component={UseState}></Route>
              <Route exact path='/useEffect' component={UseEffect}></Route>
              <Route exact path='/context' component={Context}></Route>
              <Route exact path='/useContext' component={UseContext}></Route>
              <Route exact path='/useReducer' component={UseReducer}></Route>
              <Route exact path='/useCallback' component={UseCallback}></Route>
              <Route exact path='/useRef' component={UseRef}></Route>
          </Switch>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
