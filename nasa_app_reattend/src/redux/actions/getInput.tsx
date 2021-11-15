import React from 'react'

const getInput = (input:string) => {
    return {
        type:'getInput',
        payload:input
    }
}

export default getInput
