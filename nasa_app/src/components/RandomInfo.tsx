import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const RandomInfo = () => {
    const [name,setName] = useState('')
    const [hazardous,setHazardous]= useState(false)
    const [loading,setLoading] = useState(false)
    const [url,setUrl] = useState('')
    const fetchData = async()=>{
        setLoading(true)
        const res:any = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=iUcEIzftaidaKEYwnlIZlLc5gnvYBhXhSFsKXvG5`)
        const randNum = Math.floor((Math.random() * 19) + 1)
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${res.data.near_earth_objects[randNum].id}?api_key=iUcEIzftaidaKEYwnlIZlLc5gnvYBhXhSFsKXvG5`).then((res:any)=>{
            setName(res.data.name)
            setHazardous(res.data.is_potentially_hazardous_asteroid)
            setUrl(res.data.nasa_jpl_url)
            setLoading(false)
        })
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
export default RandomInfo
