import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useSelector,useDispatch } from 'react-redux';
import getJSON from '../redux/actions/getJSON';
import Button from '@mui/material/Button';
import modal from '../redux/actions/modal'
import JsonData from './JsonData';
type tableContentProps = {
    myData: any
    pageNumber: number
    loading: boolean
}
type stateType = {
    getDataReducer:any,
    JSONReducer:any
    modalReducer:boolean
    searchReducer:string
}
const TableContent = (props: tableContentProps) => {
    const myState = useSelector((state:stateType)=>{
        return state})
    const dispatch = useDispatch()
    const { myData, pageNumber, loading } = props
    let newArr: any
    if (myData[pageNumber]) {
        newArr = []
        for (let i = 0; i < Object.keys(myData[pageNumber]).length; i++) {
            newArr.push(Object.keys(myData[pageNumber])[i])
        }
    }
    if(loading){
        return <><TableRow><TableCell>Please Wait...... </TableCell></TableRow><JsonData /></>
    }
    return (
        <>
            {myData[pageNumber] && newArr.map((ele: string,index:number) => {
                if((myData[pageNumber][ele].title).includes(myState.searchReducer) || (myData[pageNumber][ele].created_at).includes(myState.searchReducer)){
                    return (
                        <TableRow key={index}>
                            <TableCell align="right">{myData[pageNumber][ele].title}</TableCell>
                            <TableCell align="right">{myData[pageNumber][ele].url}</TableCell>
                            <TableCell align="right">{myData[pageNumber][ele].created_at}</TableCell>
                            <TableCell align="right">{myData[pageNumber][ele].author}</TableCell>
                            <TableCell align="right"><Button variant="contained" style={{color:'white',textDecoration:'none'}} onClick={()=>{
                                dispatch(modal(true))
                                dispatch(getJSON({title:myData[pageNumber][ele].title,
                                                url:myData[pageNumber][ele].url,
                                                created_at:myData[pageNumber][ele].created_at,
                                                author:myData[pageNumber][ele].author}))
                                                }}>Show</Button></TableCell>
                            {/* <TableCell align="right"><Router><Button variant="contained"><Link style={{color:'white',textDecoration:'none'}} to='/JSON' onClick={()=>{
                                dispatch(getJSON({title:myData[pageNumber][ele].title,
                                                url:myData[pageNumber][ele].url,
                                                created_at:myData[pageNumber][ele].created_at,
                                                author:myData[pageNumber][ele].author}))
                                                history.push('/JSON')}}>Show</Link></Button></Router></TableCell> */}
                        </TableRow> 
                    )

                }
            })}
            <JsonData />
        </>
    )
}
export default TableContent
