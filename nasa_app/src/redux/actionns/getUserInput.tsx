const getUserInput = (id:string) => {
    return {
        type:'getUserInput',
        payload:id
    }
}

export default getUserInput
