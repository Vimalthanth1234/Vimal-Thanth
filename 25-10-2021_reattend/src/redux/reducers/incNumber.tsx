type Action = {
    type:string
}
const initialState = 0 
const incNumber = (state=initialState,action:Action) => {
    switch(action.type){
        case 'incNumber':return state+1
        default:return state
    }
}
export default incNumber
