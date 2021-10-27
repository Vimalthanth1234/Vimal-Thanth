import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import modal from '../redux/actions/modal';
import axios from 'axios';
import Weather from './Weather';
import getWeatherData from '../redux/actions/getWeatherData'
import { useHistory } from 'react-router';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
type stateType = {
    getDataReducer:any
    modalreducer:boolean
    getWeatherDataReducer:any

}

const Info = () => {
    const myState = useSelector((state:stateType)=>{
        return state
    })
    const history = useHistory()
    const dispatch = useDispatch()
    return (
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h1 style={{textAlign:'center'}}>Informations</h1>
        <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
            {
                myState.getDataReducer.map((ele:any,index:number)=>{
                    return ( <> <Card style={{margin:'10px'}} sx={{ maxWidth: 345 }} key={index}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image={ele.flag}
                            alt="green iguana"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              Capital:{ele.capital}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                              Population:{ele.population}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                            latlng: {ele.latlng}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary" onClick={()=>{
                              const fetchData = async()=>{
                                const res:any = await axios.get(`http://api.weatherstack.com/current?access_key=a8816be90374b1c50b1db570c92fc22b&query=${ele.capital}`)
                                dispatch(modal(true))
                                dispatch(getWeatherData(res.data.current))
                                console.log(res)
                              }
                              fetchData()
                          }}>
                            Capital Weather
                          </Button><br />
                        </CardActions>
                      </Card>
                      <Weather />
                      </>)
                })
            }
        </div>
        <button style={{width:'40%',margin:'20px',textDecoration:'none'}} onClick={()=>{
            history.push('/')
        }}><Router><Link to='/' style={{textDecoration:'none'}}>Back</Link></Router></button>
        </div>
    )
}
export default Info
