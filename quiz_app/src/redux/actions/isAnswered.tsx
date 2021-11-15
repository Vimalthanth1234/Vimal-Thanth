import React from 'react'
const isAnswered = (priIndex:any,secIndex:any,val:boolean) => {
    return {
        type:'isAnswered',
        payload:[priIndex,secIndex,val]
    }
}
export default isAnswered



