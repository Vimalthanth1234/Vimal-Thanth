const initial:any = []
type Action = {
    type:string,
    payload:any
}
const getDatareducer = (state=initial,action:Action) => {
    switch(action.type){
        case 'getData':return [...state,action.payload]
        default:return state
    }
}

export default getDatareducer
