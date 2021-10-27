import React from 'react'

const getJSON = (data:any) => {
    return {
        type:'getJSON',
        payload:data
    }
}

export default getJSON
