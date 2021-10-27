type Action = {
    type:string,
    payload:any
}
const initialState:any = []
const getDataReducer = (state=initialState,action:Action) => {
    switch(action.type){
        case 'getData':return action.payload
        default:return state
    }
}
export default getDataReducer
