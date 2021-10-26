import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/actions/getData'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PaginationCompo from './PaginationCompo'
import TableContent from './TableContent'
import searchAction from '../redux/actions/searchAction'
import Input from '@mui/material/Input';

type stateType = {
    getDataReducer:any,
    JSONReducer:any
}
const Container = () => {
    const [currentPage,setCurrentPage] = useState(0)
    const [newNumPagination,setNewNumPagination] = useState(0)
    const [loading,setLoading] = useState(false)
    const myState = useSelector((state:stateType)=>{
        return state
    })
    const dispatch = useDispatch()
    let newNum:number = 0       
    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true)
            const res:any = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${newNum}`)
            const newData:any = res.data.hits
            dispatch(getData(newData))
            setCurrentPage(newNum)
            setNewNumPagination(newNum)
            setLoading(false)
            newNum+=1
        }
        fetchData()
        const a = setInterval(()=>{
            fetchData()
            if(newNum>49){
                clearInterval(a)
            }
        },10000)
    },[])
    const paginate = (pageNumber:number) => {
        setCurrentPage(pageNumber-1)
    }
    return (
        <div>
            <p style={{textAlign:'center'}}><Input  type='text' placeholder='Search by Title and Created_At' style={{textAlign:'center',width:'40%'}} onChange={(event)=>{dispatch(searchAction(event.target.value))}}/></p>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">URL</TableCell>
                        <TableCell align="right">Created_At</TableCell>
                        <TableCell align="right">Author</TableCell>
                        <TableCell align="right">See JSON</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableContent myData={myState.getDataReducer} pageNumber={currentPage} loading={loading}/>
                </TableBody>
            </Table>
            <p>Current Page Number : {currentPage+1}</p>
            <PaginationCompo pageNumber={newNumPagination+1} paginate={paginate}/>
        </div>
    )
}
export default Container
