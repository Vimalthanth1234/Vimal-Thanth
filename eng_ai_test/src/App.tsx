import React from 'react'
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './redux/store'
import Dashbord from './components/Dashbord'
import ResultCompo from './components/ResultCompo'
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route  path='/dashbord' element={<Dashbord />} />
          <Route  path='/resultcompo' element={<ResultCompo />} />
        </Routes>
      </Router>
    </Provider>
  )
}
export default App
