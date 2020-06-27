const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')
const geocode = require('./utilis/geocode')
const forcast = require('./utilis/forcast')

const PathDir = path.join(__dirname,'../public')
const ViewPath = path.join(__dirname,'templates/views')
const partialPath = path.join(__dirname,'templates/partials')

console.log(__dirname) 
app.use(express.static(PathDir))

app.set('view engine','hbs')
app.set('views',ViewPath)

hbs.registerPartials(partialPath)


app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Sakthi'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'Weather App-About Page',
        name:'Sakthi'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help Page',
        name:'Sakthi Ganesh'
,
    })
})
// app.get('/weather_1',(req,res)=>{
//     res.send({
//         'Location':'Madurai',
//         'Forcast': 'It is Rainy!'
//     })
// })


app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'Pls Provide Address in the query String'
        })}
   

    geocode(req.query.address, (error , {latitude,longitude,location}={})=>{
        if(error){
            return res.send({error})
        }

        forcast(longitude,latitude,(error,forcastData)=>{
            res.send({
                forcast: forcastData,
                location,
               
            })
        })
    })

})


app.get('/help/*',(req,res)=>{
    res.render('error',{
        title:'No Such Help Sub File Found!!',
        name:'Sakthi Ganesh'
    })
})

app.get('*',(req,res)=>{
    res.render('error',{
        title:'404-Not Found!',
        name:'Sakthi Ganesh'
    })
})
app.listen(3000,()=>{
    console.log('Displaying in the Command Line!!')
})