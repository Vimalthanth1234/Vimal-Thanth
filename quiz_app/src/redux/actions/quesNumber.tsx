import React from 'react'

const quesNumber = (num:number) => {
    return {
        type:'quesNumber',
        payload:num
    }
}

export default quesNumber
