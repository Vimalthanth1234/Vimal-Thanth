import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useEffect,useState} from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
type stateType = {
    getInputReducer:string,
    getDataReducer:any,
    getRandomIdReducer:string
}
const Info = () => {
	const history = useHistory()
	const myStates = useSelector((state:stateType)=>{
		return state
	})
	const [loading,setLoading] = useState(false)
	const [name,setName] = useState('')
	const [url,setUrl] = useState('')
	const [hazardous,setHazardous] = useState(false)
	useEffect(() => {
		const fetchData = async ()=>{
			const res = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${myStates.getRandomIdReducer}?api_key=iUcEIzftaidaKEYwnlIZlLc5gnvYBhXhSFsKXvG5`)
			setName(res.data.name)
			setUrl(res.data.nasa_jpl_url)
			setHazardous(res.data.is_potentially_hazardous_asteroid)
			setLoading(false)
		}
		fetchData()
	}, [])
	if(loading){
		return <h1 style={{color:'white'}}>Loading......</h1>
	}
	const eleStyle = {background:'#e9e2e2',padding:'20px',borderRadius:'50px'}
	return (
		<div style={{display:'flex',flexDirection:'column',width:'50%'}}>
			<h1 style={{color:'white'}}>About <span style={hazardous?{color:'red'}:{color:'green'}}>{name} </span>Asteroid</h1>
			<p style={eleStyle}>Name:{name}</p>
			<p style={eleStyle}>nasa_jpl_url:{url}</p>
			<p style={eleStyle}>is_potentially_hazardous_asteroid:{`${hazardous}`}</p>
			<Button style={{textAlign:'center',borderRadius:'50px',padding:'20px'}} variant='contained' ><Link style={{textDecoration:'none',color:'white'}}  to='/'>Back</Link></Button>
		</div>
	)
}
export default Info