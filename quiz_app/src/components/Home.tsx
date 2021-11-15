import React from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import startHandler from '../redux/actions/startHandler'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import { MenuItem } from '@mui/material'
import { Button } from '@mui/material'
import { Navigate, useNavigate } from 'react-router'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()
    const [lang,setLang]:any = useState('0')
    const dispatch = useDispatch()
    return (
        <form style={{display:'flex',backgroundColor:'black',margin:'10px',flexDirection:'column',justifyContent:'center',alignItems:'center',boxShadow:'5px 10px #888888',width:'30%'}} onSubmit={()=>{
            // e.preventDefault()
            dispatch(startHandler(lang))
            navigate('/dashbord')
            
        }}>
            <h1 style={{fontFamily:'cursive',color:'blue',boxShadow:'5px 10px #888888',padding:'10px'}}><span style={{color:'purple'}}>Q</span>uiz <span style={{color:'purple'}}>A</span>pp</h1>
            <TextField  required style={{margin:'10px 0',width:'80%',backgroundColor:'aquamarine'}} type='text' placeholder='Enter Your Name'/>
            <TextField required style={{margin:'10px 0',width:'80%',backgroundColor:'aquamarine'}} type='number' placeholder='Enter Your Age'/>
            <Select style={{margin:'10px 0',width:'80%',backgroundColor:'aquamarine'}} 
          value={lang}
            onChange={(event:any)=>{
                    setLang(event.target.value)
                }}>
                <MenuItem selected={true} value='0'>English</MenuItem>
                <MenuItem value='1'>Hindi</MenuItem>
            </Select>
            <Button type='submit' style={{margin:'20px'}}  variant='contained' >Start</Button>
        </form>
    )
}
export default Home
