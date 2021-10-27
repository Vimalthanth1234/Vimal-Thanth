import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  type stateType = {
    incNumber:number,
    getDatareducer:any
    getJSONReducer:any
}
const JsonData = () => {
    const myState = useSelector((state:stateType)=>{
        return state
    })
    const history = useHistory()
    return (
        <div>
            {JSON.stringify(myState.getJSONReducer)}
            <button onClick={()=>{
                history.push('/')
            }}><Router><Link to='/'>Back</Link></Router></button>
        </div>
    )
}

export default JsonData
