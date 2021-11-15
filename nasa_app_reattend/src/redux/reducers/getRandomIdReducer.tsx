type Action = {
	type:string,
	payload:string
}
const initialState:string = ''
const getRandomIdReducer = (state = initialState,action:Action) => {
	switch(action.type){
		case 'getRandomId':return  action.payload
		default : return state
	}
}

export default getRandomIdReducer