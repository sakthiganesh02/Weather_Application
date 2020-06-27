// console.log("Printing from the client Side Javscript File!!")

// fetch('http://puzzle.mead.io/puzzle').then((response) =>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=!').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log('There Is A Error')
//         }

//         else{
//             console.log(data)
//         }
//     })
// })

const weatherData = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
// messageOne.textContent = 'Hello Guys'
weatherData.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    console.log(location)

    messageOne.textContent = 'Loading!!'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address='+ location).then((response)=>{
            response.json().then((data)=>{
                if(data.error){
                    messageOne.textContent = data.error
                }

                else{
                   messageOne.textContent = data.location
                   messageTwo.textContent = 'The Temperature is ' + data.forcast.temperature +
                   'F .The Probability of Precipitation is '+ data.forcast.precprob + '.'
                }
            })
    })
})