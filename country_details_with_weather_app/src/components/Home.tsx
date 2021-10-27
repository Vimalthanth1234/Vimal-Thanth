import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import getData from '../redux/actions/getData'
import { useHistory } from 'react-router'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
const Home = () => {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h1>Country Details with Weather App</h1>
        <form>
            <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Small"
            variant="filled"
            size="small" type='text' placeholder='Enter Country' value={input} onChange={(event)=>{
                setInput(event.target.value)
            }}/>
            <Router><Link to={()=>input?'/Info':'/'} style={{textDecoration:'none'}}><Button style={{textDecoration:'none'}} variant="outlined" size="large" disabled={input?false:true} onClick={(event)=>{
                event.preventDefault()
                const fetchData = async()=>{
                    const res = await axios.get(`https://restcountries.com/v2/name/${input}`)
                    dispatch(getData(res.data))
                    history.push('/Info')
                    setInput('')
                }
                {fetchData()}
            }}>Submit</Button></Link></Router>
        </form>
        </div>
    )
}

export default Home
