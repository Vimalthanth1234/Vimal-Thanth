import React from 'react'

const getData = (res:any) => {
    return{
        type:'getData',
        payload:res
    }
}

export default getData
