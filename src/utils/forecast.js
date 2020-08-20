const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&units=metric&appid=c34acdf4c4439fc9f99d93e30e5ee1a5'

    request({ url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to weather service!',undefined)
        }else if(body.message){
            callback('Unable to find location!',undefined)
        }else{
            callback(undefined,'The current temprature is: '+body.hourly[0].temp + ', Current weather status: '+body.hourly[0].weather[0].description
            )
        }
    })

}

module.exports = forecast