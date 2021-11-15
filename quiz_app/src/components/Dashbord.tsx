import React, { useState } from 'react'
import Navbar from './Navbar'
import { useSelector,useDispatch } from 'react-redux'  
import isAnswered from '../redux/actions/isAnswered' 
import selectedAnswer from '../redux/actions/selectedAnswer'
import ResultCompo from './ResultCompo'
import next from '../redux/actions/next'
import previous from '../redux/actions/previous'
import Button from '@mui/material/Button'
import quesNumReducer from '../redux/reducers/quesNumReducer'
import { Link } from 'react-router-dom'
type State = {
    startReducer:string,    
    allQuestionsReducer:any
    quesNumReducer:number
}
const Dashbord = () => {
    const myState = useSelector((state:State)=>{
        return state
    })
    const dispatch = useDispatch()
    const questions = myState.allQuestionsReducer[myState.startReducer]
    const question:any = questions[myState.quesNumReducer]
    const [check,setCheck]:any = useState(question.selectedAns)
    const compo = ()=>{
        switch (question.type) {
            case 'Fill In The Blanks':return(
                <>
                <h4> {question.question}</h4>
                <ul>
                    {question.options.map((ele:string,index:number)=>{
                        return <><li><input type='radio' onClick={()=>{
                            question.type!=='Multi Select'&&dispatch(selectedAnswer(myState.startReducer,myState.quesNumReducer,[ele]))
                            setCheck(question.selectedAns[0])
                            dispatch(isAnswered(myState.startReducer,myState.quesNumReducer,true))
                        }} name='options1' checked={question.selectedAns==ele?true:false}/>{ele}</li></>
                    })}
                </ul>
                </>
            )
            case 'MCQ':return(
                <>
                <h4>{question.question}</h4>
                <ul>
                    {question.options.map((ele:string)=>{
                        return <><li><input type='radio' name='options2' onClick={()=>{
                            question.type!=='Multi Select'&&dispatch(selectedAnswer(myState.startReducer,myState.quesNumReducer,[ele]))
                            setCheck(question.selectedAns[0])
                            dispatch(isAnswered(myState.startReducer,myState.quesNumReducer,true))
                        }} checked={question.selectedAns==ele?true:false} />{ele}</li></>
                    })}
                </ul>
                </>
            )
            case 'True Or False':return(
                <>
                <h4>{question.question}</h4>
                <ul>
                    {question.options.map((ele:string)=>{
                        return <><li><input type='radio' onClick={()=>{
                            question.type!=='Multi Select'&&dispatch(selectedAnswer(myState.startReducer,myState.quesNumReducer,[ele]))
                            setCheck(question.selectedAns[0])
                            dispatch(isAnswered(myState.startReducer,myState.quesNumReducer,true))
                        }} name='options3' checked={question.selectedAns==ele?true:false} />{ele}</li></>
                    })}
                </ul>
                </>
            )
            case 'Match The Following':return(
                <>
                <table>
                    <thead>
                        <tr>
                            <th>Questions</th>
                            <th>Answers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {question.question[0].map((ele:any,index:number)=>{
                            return <><tr><td>{question.question[0][index]}</td><td>{question.question[1][index]}</td></tr></>
                        })}
                    </tbody>
                </table>
                <ul>
                    {question.options.map((ele:string)=>{
                        return <><li><input type='radio' onClick={()=>{
                            dispatch(isAnswered(myState.startReducer,myState.quesNumReducer,true))
                            setCheck(question.selectedAns[0])
                            question.type!=='Multi Select'&&dispatch(selectedAnswer(myState.startReducer,myState.quesNumReducer,[ele]))
                        }} name='options4' checked={question.selectedAns==ele?true:false} />{ele}</li></>
                    })}
                </ul>
                </>
            )
            case 'Multi Select':return(
                <>
                <h4>{question.question}</h4>
                <ul>
                    {question.options.map((ele:string,index:number)=>{
                        return <><li><input value={ele} type='checkbox' onClick={(event:any)=>{
                            let selectedValues = question.selectedAns
                            if(selectedValues.includes(event.target.value)){
                                const index = selectedValues.indexOf(event.target.value)
                                selectedValues.splice(index,1)
                                check?setCheck(''):setCheck('hello')
                                dispatch(selectedAnswer(myState.startReducer,myState.quesNumReducer,selectedValues))
                            }else{
                                selectedValues.push(event.target.value)
                                setCheck(ele)
                                dispatch(selectedAnswer(myState.startReducer,myState.quesNumReducer,selectedValues))
                            }
                            question.selectedAns.length?dispatch(isAnswered(myState.startReducer,myState.quesNumReducer,true)):dispatch(isAnswered(myState.startReducer,myState.quesNumReducer,false))
                        }} name='options5' checked={question.selectedAns.includes(ele)?true:false}/>{ele}</li></>
                    })}
                </ul>
                </>
            ) 
            default:
                break;
        }
    }
    return (
        <div style={{boxShadow:'5px 10px #888888',padding:'50px'}}>
            <h1 style={{textAlign:'center',boxShadow:'5px 10px #888888',padding:'10px'}}><span style={{color:'purple'}}>Q</span>UI<span style={{color:'blue'}}>Z</span></h1>
            <Navbar />
            <h3>Ques No :- {question['Question Number']}</h3>
            {compo()}
            <Button style={{backgroundColor:'blue',color:'white'}} onClick={()=>dispatch(previous())} disabled={myState.quesNumReducer==0?true:false}>Previous</Button>
            <Button style={{backgroundColor:'purple',color:'white'}} onClick={()=>dispatch(next())} disabled={questions.length-1==myState.quesNumReducer?true:false}>Next</Button>
            {myState.quesNumReducer==questions.length-1&&<Button variant='contained'><Link to='/resultcompo' style={{textDecoration:'none',color:'white'}}>Submit test</Link></Button>}
        </div>
    )
}
export default Dashbord
