type Action = {
    type:string,
    payload:any
}
const initialState = {}
const getJSONReducer = (state = initialState,action:Action) => {
    switch(action.type){
        case 'getJSON':return action.payload
        default:return state
    }
}

export default getJSONReducer
