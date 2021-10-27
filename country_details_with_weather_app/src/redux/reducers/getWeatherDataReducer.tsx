type Action = {
    type:string,
    payload:any
}
const initialState:any = []
const getWeatherDataReducer = (state = initialState,action:Action) => {
    switch(action.type){
        case 'getWeatherData': return action.payload
        default:return state
    }
}

export default getWeatherDataReducer
