import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import getUserInput from '../redux/actionns/getUserInput'
import {BrowserRouter as Router,Link} from "react-router-dom";
import { useHistory } from 'react-router';

const SignUp = () => {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    return (
        <form style={{display:'flex',flexDirection:'column',width:'30%',justifyContent:'center',alignContent:'center',background:'darkgray',padding:'20px',margin:'20px',boxShadow:'5px 10px #888888'}}>
            <h1 style={{textAlign:'center'}}>Information About Asteroids </h1>
            <input type='number' placeholder='Enter Asteroid ID' onChange={(event)=>{
                setInput(event.target.value)
            }} value={input} style={{margin:'20px 0'}}/>
            <Router><button disabled={input?false:true} onClick={(event)=>{
                event.preventDefault()
                dispatch(getUserInput(input))
                setInput('')
                history.push('/Info')
            }} style={{margin:'20px 0'}}><Link to={input?'/Info':'/'} style={input?{textDecoration:'none',color:'black'}:{textDecoration:'none',color:'gray'}}>Submit</Link></button></Router>
            <Link to = '/random' style={{textAlign:'center'}}><button>Random</button></Link>
        </form>
    )
}

export default SignUp
