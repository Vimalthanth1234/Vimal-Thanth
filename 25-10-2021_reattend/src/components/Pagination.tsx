import React from 'react'
import { useSelector } from 'react-redux'
type stateType = {
    incNumber:number,
    getDatareducer:any
}
type paginationProps = {
    paginate:any
    page:number
}
const Pagination = (props:paginationProps) => {
    const myState = useSelector((state:stateType)=>{
        return state
    })
    const Pagenumbers = []
    for(let i=1;i<=myState.incNumber;i++){
        Pagenumbers.push(i)
    }
    return (
        <div>
            {Pagenumbers.map((ele)=>{
                return <button disabled={ele-1==props.page?true:false} onClick={()=>props.paginate(ele)}>{ele}</button>
            })}
        </div>
    )
}

export default Pagination
