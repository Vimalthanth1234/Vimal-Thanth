
const getRandomId = (id:string) => {
	return {
		type:'getRandomId',
		payload:id
	}
}

export default getRandomId