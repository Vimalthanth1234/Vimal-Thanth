import React from 'react'
const initialState = 0
type Action = {
    type:string,
    payload:number
}
const quesNumReducer = (state = initialState,action:Action) => {
    switch(action.type){
        case 'quesNumber':return action.payload
        case 'next': return state+1
        case 'previous': return state?state-1:state
        default:return state
    }
}

export default quesNumReducer
