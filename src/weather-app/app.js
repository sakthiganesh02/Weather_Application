const geocode= require('./utilis/geocode.js')
const forcast = require('./utilis/forcast.js')
console.log(process.argv)
if(!process.argv[2]){
  console.log('Pls Provide a Valid Address!!')
}

else{
geocode(process.argv[2],(error,{latitude,longitude,location})=>{
   
    if(error){
      return console.log('1'+error)
    }

    forcast(longitude,latitude,(error,{temperature,precprob}) =>{
      if(error){
        return console.log('2'+error)
      }

      console.log(location)
      console.log(temperature)
      console.log(precprob)
      
})
})
}
