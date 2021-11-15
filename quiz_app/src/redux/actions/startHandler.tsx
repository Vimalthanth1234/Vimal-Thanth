import React from 'react'

const startHandler = (lang:string) => {
    return {
        type:'startHandler',
        payload:lang
    }
}

export default startHandler
