import React from 'react'
import Container from './Components/Container'
import {  Provider } from 'react-redux'
import store from './redux/store'
const App = () => {
  return (
    <Provider store={store}>
          <Container />
    </Provider>
  )
}

export default App
