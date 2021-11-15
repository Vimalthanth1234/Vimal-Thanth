import React from 'react'
type Action = {
    type:string,
    payload:string
}
const initialState = ''
const getInputReducer = (state=initialState,action:Action) => {
    switch(action.type){
        case 'getInput':return action.payload
        default:return state
    }
}
export default getInputReducer
