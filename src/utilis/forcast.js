const request = require('request')

const forcast= (lat,lon,callback)=>{
    const url = 'https://api.darksky.net/forecast/97f61624715f112b44a0649eed11e9a4/' +lon+','+lat

    request({url , json: true} ,(error,{body})=>{
        if(error){
            callback('Unable to connect to the Network!',undefined)
        }
        else if(body.error){
            callback('Invalid Formatted Coordinates',undefined)
        }
        else{
            callback(undefined,{
                temperature: body.currently.temperature,
                precprob : body.currently.precipProbability,
                location : body.timezone,
                summary : body.currently.summary,
                tempHigh : body.daily.data[0].temperatureHigh,
                tempLow : body.daily.data[0].temperatureLow 
            })    
        }
    
    })
}
module.exports = forcast