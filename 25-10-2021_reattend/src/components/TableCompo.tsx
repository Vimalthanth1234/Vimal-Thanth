import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import incNumber from '../redux/actions/incNumber'
import getData from '../redux/actions/getData'
import Pagination from './Pagination'
import { useHistory } from 'react-router'
import getJSON from '../redux/actions/getJSON'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Button from '@mui/material/Button'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>URL</TableCell>
                        <TableCell>Created_At</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>See JSON</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {myState.getDatareducer[pageNumber]&&Object.keys(myState.getDatareducer[pageNumber]).map((innerEle:string)=>{
                            return <TableRow>
                                <TableCell>{myState.getDatareducer[pageNumber][innerEle].title}</TableCell>
                                <TableCell>{myState.getDatareducer[pageNumber][innerEle].url}</TableCell>
                                <TableCell>{myState.getDatareducer[pageNumber][innerEle].created_at }</TableCell>
                                <TableCell>{myState.getDatareducer[pageNumber][innerEle].author}</TableCell>
                                <Button variant='contained' style={{margin:'10px 0',textDecoration:'none'}} onClick={()=>{
                                    history.push('/JsonData')
                                    dispatch(getJSON({
                                        title:myState.getDatareducer[pageNumber][innerEle].title,
                                        url:myState.getDatareducer[pageNumber][innerEle].url,
                                        created_at:myState.getDatareducer[pageNumber][innerEle].created_at,
                                        author:myState.getDatareducer[pageNumber][innerEle].author
                                    }))
                                }}><Router><Link style={{textDecoration:'none',color:'white'}} to='/JsonData'>Show</Link></Router></Button>
                            </TableRow>
                        })}
                </TableBody>
            </Table>
            <Pagination paginate={paginate} page={pageNumber}/>
        </div>
    )
}
export default TableCompo
