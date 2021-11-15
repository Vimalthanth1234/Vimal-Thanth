import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Button from '@mui/material/Button'
import {
    BrowserRouter as Router,
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
            {JSON.stringify(myState.getJSONReducer)}<br/>
            <Button variant='contained' onClick={()=>{
                history.push('/')
            }}><Router><Link to='/' style={{textDecoration:'none',color:'white'}}>Back</Link></Router></Button>
        </div>
    )
}

export default JsonData
