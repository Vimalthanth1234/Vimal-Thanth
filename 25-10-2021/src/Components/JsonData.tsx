import { useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
type stateType = {
    getDataReducer:any,
    JSONReducer:any
}
const JsonData = () => {
    const myState = useSelector((state:stateType)=>{
        return state})
    return (
        <div>
            {JSON.stringify(myState.JSONReducer)}
            <Button variant="contained"><Link style={{color:'white',textDecoration:'none'}} to='/'>Back to Home</Link></Button>
        </div>
    )
}
export default JsonData