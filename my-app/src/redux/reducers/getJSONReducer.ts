import React from 'react'
const initialState = {}
type Action = {
    type:string
    payload:any
}
const getJSONReducer = (state=initialState,action:Action) => {
    switch(action.type){
        case 'getJSON':return action.payload
        default:return state
    }
}

export default getJSONReducer
