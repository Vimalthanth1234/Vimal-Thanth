import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useDispatch } from 'react-redux';
import getJSON from '../redux/actions/getJSON';
import { useHistory } from 'react-router';
import {BrowserRouter as Router,Link} from "react-router-dom";
import Button from '@mui/material/Button';
type tableContentProps = {
    myData: any
    pageNumber: number
    loading: boolean
}
const TableContent = (props: tableContentProps) => {
    const dispatch = useDispatch()
    const { myData, pageNumber, loading } = props
    let history = useHistory()
    let newArr: any
    if (myData[pageNumber]) {
        newArr = []
        for (let i = 0; i < Object.keys(myData[pageNumber]).length; i++) {
            newArr.push(Object.keys(myData[pageNumber])[i])
        }
    }
    if(loading){
        return <TableRow><TableCell>Please Wait...... </TableCell></TableRow>
    }
    return (
        <>
            {myData[pageNumber] && newArr.map((ele: string,index:number) => {
                return (
                    <TableRow key={index}>
                        <TableCell align="right">{myData[pageNumber][ele].title}</TableCell>
                        <TableCell align="right">{myData[pageNumber][ele].url}</TableCell>
                        <TableCell align="right">{myData[pageNumber][ele].created_at}</TableCell>
                        <TableCell align="right">{myData[pageNumber][ele].author}</TableCell>
                        <TableCell align="right"><Router><Button variant="contained"><Link style={{color:'white',textDecoration:'none'}} to='/JSON' onClick={()=>{
                            dispatch(getJSON({title:myData[pageNumber][ele].title,
                                            url:myData[pageNumber][ele].url,
                                            created_at:myData[pageNumber][ele].created_at,
                                            author:myData[pageNumber][ele].author}))
                                            history.push('/JSON')}}>Show</Link></Button></Router></TableCell>
                    </TableRow> 
                )
            })}
        </>
    )
}

export default TableContent