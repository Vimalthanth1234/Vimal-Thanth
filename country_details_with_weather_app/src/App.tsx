import React from 'react'
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './redux/store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Info from './components/Info';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/Info'>
              <Info />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
