const initialState:any = []
type Action = {
    type:string
    payload:any
}
const getDataReducer = (state=initialState,action:Action)=>{
    switch(action.type){
        case 'getData':return [...state,action.payload]
        default:return state
    }
}
export default getDataReducer