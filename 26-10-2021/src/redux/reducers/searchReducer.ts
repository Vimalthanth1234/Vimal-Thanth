type ActionType = {
    type:string,
    payload:string
}
const initialState = ''
const searchReducer = (state=initialState,action:ActionType) => {
    switch(action.type){
        case 'searchAction':return action.payload
        default:return state
    }
}

export default searchReducer
