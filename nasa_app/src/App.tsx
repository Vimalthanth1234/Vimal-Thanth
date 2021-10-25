import React from 'react'
import SignUp from './components/SignUp'
import Info from './components/Info'
import RandomInfo from './components/RandomInfo'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <SignUp />
        </Route>
        <Route exact path='/Info'>
          <Info />
        </Route>
        <Route exact path='/random'>
          <RandomInfo />
        </Route>
      </Switch>
    </Router>
  )
}
export default App
