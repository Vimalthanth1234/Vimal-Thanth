import React from 'react'
import Container from './Components/Container'
import {  Provider } from 'react-redux'
import store from './redux/store'
import JsonData from './Components/JsonData'
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <Switch>
        <Route exact path='/'>
          <Container />
        </Route>
        <Route exact path='/JSON'>
          <JsonData />
        </Route>
      </Switch>
      </Router>
    </Provider>
  )
}

export default App
