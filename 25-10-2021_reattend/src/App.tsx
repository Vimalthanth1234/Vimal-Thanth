import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import TableCompo from './components/TableCompo'
import JsonData from './components/JsonData'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <TableCompo />
          </Route>
          <Route exact path='/JsonData'>
            <JsonData />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
