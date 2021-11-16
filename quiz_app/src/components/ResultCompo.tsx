import React from 'react'
import { useSelector } from 'react-redux'
import {useState} from 'react'
import { PieChart } from 'react-minimal-pie-chart';
type State = {
    startReducer:string,
    allQuestionsReducer:any,
    quesNumReducer:number
}
const ResultCompo = () => {
    const myState = useSelector((state:State)=>{
        return state
    })
    const questions = myState.allQuestionsReducer[myState.startReducer]
    const result:any = []
    questions.map((ele:any)=>{
        if(ele.type!=='Multi Select'){
            if(ele.Answer[0]==ele.selectedAns[0]){
                console.log(ele.selectedAns[0])
                result.push(true)
            }
        }else{
            const multiArr:any = []
            ele.selectedAns.map((e:string)=>{
                console.log(e)
                if(ele.Answer.includes(e)){
                    multiArr.push(true)
                }else{
                    multiArr.push(false)
                }
            })
            if(multiArr.length){
                if(multiArr.every((val:boolean)=>val===true)){
                    if(multiArr.length===ele.Answer.length){
                        console.log(ele.Answer.length)
                        console.log(multiArr.length)
                        result.push(true)
                        console.log(result)
                    }
                }
            }
        }
    })
    return (
        <div style={{boxShadow:'5px 10px #888888',padding:'50px'}}>
            <h1 style={{color:'blue',textAlign:'center',boxShadow:'5px 10px #888888',padding:'10px'}}>Result</h1>
        <div style={{display:'flex',flexDirection:'row'}}>
            <div>
            <PieChart style={{display:'block'}}
                data={[
                { title: 'Right', value: result.length, color: 'green' },
                { title: 'Wrong', value: questions.length-result.length, color: 'red' }
            ]}
            />
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',margin:'10px'}}>
            <p style={{color:'green',textAlign:'center'}}>True Answers :- {result.length}</p>
            <p style={{color:'red',textAlign:'center'}}>False Answers :- {questions.length-result.length}</p>
            <p style={{textAlign:'center'}}>Percentage :- {(result.length/questions.length)*100}%</p>
            </div>
        </div>
        </div>
    )
}
export default ResultCompo
