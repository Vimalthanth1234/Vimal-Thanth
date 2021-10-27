type Action = {
    type:string,
    payload:boolean
}
const initialState = false
const modalreducer = (state=initialState,action:Action) => {
    switch(action.type){
        case 'modal':return action.payload
        default:return state
    }
}

export default modalreducer
