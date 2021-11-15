import React from 'react'
import { combineReducers } from 'redux'
import getInputReducer from './getInputReducer'
import getDataReducer from './getDataReducer'
import getRandomIdReducer from './getRandomIdReducer'

const rootReducer = combineReducers({
    getInputReducer:getInputReducer,
    getDataReducer:getDataReducer,
    getRandomIdReducer:getRandomIdReducer
})
export default rootReducer
