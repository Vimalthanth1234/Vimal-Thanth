import React from 'react'

const selectedAnswer = (priIndex:any,secIndex:any,val:any) => {
    return {
        type:'selectedAnswer',
        payload:[priIndex,secIndex,val]
    }
}
export default selectedAnswer
