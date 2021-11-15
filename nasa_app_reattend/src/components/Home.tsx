import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'    
import getInput from '../redux/actions/getInput'
import {useEffect} from 'react'
import axios from 'axios'
import getData from '../redux/actions/getData'
import getRandomId from '../redux/actions/getRandomId'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import {useHistory} from 'react-router-dom'
type stateType = {
    getInputReducer:string,
    getDataReducer:any,
    getRandomIdReducer:string
}
const Home = () => {
    const myStates = useSelector((state:stateType)=>{
        return state
    })
    const [data1,setData1]:any = useState([])
    const history = useHistory()
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async()=>{
            const res:any = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=iUcEIzftaidaKEYwnlIZlLc5gnvYBhXhSFsKXvG5`)
            dispatch(getData(res.data.near_earth_objects))
            setLoading(false)
            console.log('hello')
        }
        fetchData()
    },[])
    return (
        <div style={{display:'flex',flexDirection:'column',width:'50%'}}>
            <h1 style={{padding:'20px',color:'white'}}>Get Information Of Asteroids From Id</h1>
             <input type='text' style={{textAlign:'center',margin:'10px',padding:'20px',borderRadius:'50px'}} placeholder='Enter Asteroid ID'  value={input} onChange={(event)=>{
                setInput(event.target.value) 
            }} />
            <Button style={{textAlign:'center',margin:'10px',padding:'20px',borderRadius:'50px'}} variant = 'contained'  disabled={input?false:true} onClick={()=>{
                dispatch(getInput(input))
            }}><Link style={{textDecoration:'none',color:'white'}} to={input?'/Info':'/'}>Submit</Link></Button>
            <Button style={{textAlign:'center',margin:'10px',padding:'20px',borderRadius:'50px'}} variant = 'contained' disabled={loading?true:false} onClick={()=>{
                const randomNum = Math.floor((Math.random()*20)+1)
                console.log((myStates.getDataReducer)[`${randomNum-1}`].id)
                setInput((myStates.getDataReducer)[`${randomNum-1}`].id)
                dispatch(getRandomId((myStates.getDataReducer)[`${randomNum-1}`].id))
            }}>Random</Button>
        </div>
    )
}
export default Home
