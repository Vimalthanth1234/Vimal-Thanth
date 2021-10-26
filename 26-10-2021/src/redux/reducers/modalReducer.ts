type Action = {
    type:string,
    payload:boolean
}
const initialState=false
const modalReducer = (state=initialState,action:Action) => {
    switch(action.type){
        case 'modal':return action.payload
        default:return state
    }
        
}

export default modalReducer
