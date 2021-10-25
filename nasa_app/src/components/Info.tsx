import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
type stateType={
    userInput:string
}
const Info = () => {
    const userInputData = useSelector((state:stateType)=>{
        return state
    })
    console.log(userInputData)
    const [name,setName] = useState('')
    const [hazardous,setHazardous]= useState(false)
    const [loading,setLoading] = useState(false)
    const [url,setUrl] = useState('')
    const input = parseInt(userInputData.userInput)
    const fetchData = async()=>{
        setLoading(true)
        const res:any = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${input}?api_key=iUcEIzftaidaKEYwnlIZlLc5gnvYBhXhSFsKXvG5`)
        setLoading(false)
        setName(res.data.name)
        setHazardous(res.data.is_potentially_hazardous_asteroid)
        setUrl(res.data.nasa_jpl_url)
    }
    useEffect(()=>{
        fetchData()
    },[])
    if(loading){
        return <h1>Loading.....</h1>
    }
    return (
        <div>
            <p>Name:{name}</p>
            <p>nasa_jpl_url:{url}</p>
            <p>is_potentially_hazardous_asteroid:{`${hazardous}`}</p>
        </div>
    )
}
export default Info
