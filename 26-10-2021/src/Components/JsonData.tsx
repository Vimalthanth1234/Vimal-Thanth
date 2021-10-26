import { useSelector,useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import modal from '../redux/actions/modal'
import Modal from 'react-modal'
type stateType = {
    getDataReducer:any,
    JSONReducer:any
    modalReducer:boolean
    searchReducer:string
}
const JsonData = () => {
    const dispatch = useDispatch()
    const myState = useSelector((state:stateType)=>{
        return state})
    return (
        <Modal isOpen={myState.modalReducer} onRequestClose={()=>dispatch(modal(false))}>
            {JSON.stringify(myState.JSONReducer)}<br />
            <Button variant="contained" style={{color:'white',textDecoration:'none'}} onClick={()=>{dispatch(modal(false))}}>Back to Home</Button>
        </Modal>
    )
}
export default JsonData
