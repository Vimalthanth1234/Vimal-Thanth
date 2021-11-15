import React from 'react'
import { combineReducers } from 'redux'
import startReducer from './startReducer'
import allQuestionsReducer from './allQuestionsReducer'
import quesNumReducer from './quesNumReducer'

const rootReducer = combineReducers({
    startReducer:startReducer,
    allQuestionsReducer:allQuestionsReducer,
    quesNumReducer:quesNumReducer
})
export default rootReducer
