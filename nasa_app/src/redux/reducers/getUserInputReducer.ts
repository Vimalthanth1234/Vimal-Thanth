type Action = {
    type:string,
    payload:string
}
const initialState = ''
const getUserInputReducer = (state=initialState,action:Action) => {
    switch(action.type){
        case 'getUserInput':return (action.payload)
        default:return state
    }
}

export default getUserInputReducer
