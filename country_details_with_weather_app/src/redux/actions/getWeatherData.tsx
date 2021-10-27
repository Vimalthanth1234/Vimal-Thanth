const getWeatherData = (res:any) => {
    return {
        type:'getWeatherData',
        payload:res
    }
}

export default getWeatherData
