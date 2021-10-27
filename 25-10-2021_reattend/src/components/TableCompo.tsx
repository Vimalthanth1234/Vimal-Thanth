import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import incNumber from '../redux/actions/incNumber'
import getData from '../redux/actions/getData'
import Pagination from './Pagination'
import { useHistory } from 'react-router'
import getJSON from '../redux/actions/getJSON'
// import React from "react";
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
const TableCompo = () => {
    const history = useHistory()
    const [pageNumber,setPageNumber] = useState(0)
    const myState = useSelector((state:stateType)=>{
        return state
    })
    const dispatch = useDispatch()
    let num:number = myState.incNumber
    let limit = 2
    useEffect(()=>{
        const fetchData = async ()=>{
            if(num<=limit){
                const res:any = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${num}`)
                dispatch(getData(res.data.hits))
                limit = res.data.nbHits
                dispatch(incNumber())
                num++
            }
        }
        fetchData()
        const interval = setInterval(()=>{
            fetchData()
            myState.incNumber>=2&&clearInterval(interval)
        },10000)
    },[])
    const paginate = (num:number)=>{
        setPageNumber(num-1)
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>URL</th>
                        <th>Created_At</th>
                        <th>Author</th>
                        <th>See JSON</th>
                    </tr>
                </thead>
                <tbody>
                    {myState.getDatareducer[pageNumber]&&Object.keys(myState.getDatareducer[0]).map((innerEle:string)=>{
                            return <tr>
                                <td>{myState.getDatareducer[pageNumber][innerEle].title}</td>
                                <td>{myState.getDatareducer[pageNumber][innerEle].url}</td>
                                <td>{myState.getDatareducer[pageNumber][innerEle].created_at }</td>
                                <td>{myState.getDatareducer[pageNumber][innerEle].author}</td>
                                <button onClick={()=>{
                                    history.push('/JsonData')
                                    dispatch(getJSON({
                                        title:myState.getDatareducer[pageNumber][innerEle].title,
                                        url:myState.getDatareducer[pageNumber][innerEle].url,
                                        created_at:myState.getDatareducer[pageNumber][innerEle].created_at,
                                        author:myState.getDatareducer[pageNumber][innerEle].author
                                    }))
                                }}><Router><Link to='/JsonData'>Show</Link></Router></button>
                            </tr>
                        })}
                </tbody>
            </table>
            <Pagination paginate={paginate} page={pageNumber}/>
        </div>
    )
}
export default TableCompo
