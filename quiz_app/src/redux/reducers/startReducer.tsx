import React from 'react'
type Action = {
    type:string,
    payload:string
}
const initialState = '0'
const startReducer = (state = initialState,action:Action) => {
    switch(action.type){
        case 'startHandler':return action.payload
        default:return state
    }
}
export default startReducer
