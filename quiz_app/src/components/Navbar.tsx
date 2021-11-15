import React from 'react'
import { BrowserRouter as Router,Link,Routes } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import quesNumber from '../redux/actions/quesNumber'
import Button from '@mui/material/Button'
type State = {
    startReducer:string,
    allQuestionsReducer:any,
    quesNumReducer:number
}
const Navbar = () => {
    const myState = useSelector((state:State)=>{
        return state
    })
    const dispatch = useDispatch()
    const questions = myState.allQuestionsReducer[myState.startReducer]
    const len = Object.keys(questions)
    return (
        <div>
            <ul>
                {Object.keys(questions).map((ele:string,index:number)=>{
                    return <Button style={{backgroundColor:questions[index].Answered?'red':'gray',color:'white',borderRadius:'40px',margin:'10px',boxShadow:'5px 10px #888888'}} onClick={()=>{
                        dispatch(quesNumber(index)) 
                    }}>{index+1}</Button>
                })}
            </ul>
        </div>
    )
}
export default Navbar
