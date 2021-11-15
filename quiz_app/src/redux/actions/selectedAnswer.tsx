import React from 'react'

const selectedAnswer = (priIndex:any,secIndex:any,val:string[]) => {
    return {
        type:'selectedAnswer',
        payload:[priIndex,secIndex,val]
    }
}
export default selectedAnswer
