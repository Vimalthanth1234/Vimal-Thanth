import React from 'react'
import Modal from 'react-modal'
import { useSelector, useDispatch } from 'react-redux'
import modal from '../redux/actions/modal'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
type stateType = {
    getDataReducer: any
    modalreducer: boolean
    getWeatherDataReducer: any
}
const Weather = () => {
    const myState = useSelector((state: stateType) => {
        return state
    })
    const dispatch = useDispatch()
    return (
        <div style={{display:'flex',justifyContent:'center'}}> 
        <Modal isOpen={myState.modalreducer}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={myState.getWeatherDataReducer.weather_icons}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Temperature:{myState.getWeatherDataReducer.temperature}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Wind Speed:{myState.getWeatherDataReducer.wind_speed}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Precip:{myState.getWeatherDataReducer.precip}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => dispatch(modal(false))}>
                        Back
                    </Button>
                </CardActions>
            </Card>
        </Modal>
        </div>
    )
}

export default Weather
