import React from 'react'
import Home from './components/Home'
import store from './redux/store'
import { Provider } from 'react-redux'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Info from './components/Info'

const App = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',height:'100vh',backgroundImage:`URL('https://www.universetoday.com/wp-content/uploads/2017/08/twc_de_komet.jpg')`}} >
      <Provider store = {store} >
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
    </div>
  )
}
export default App
