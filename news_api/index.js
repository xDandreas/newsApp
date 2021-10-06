let axios = require( 'axios')
let http = require('http')
let url = require('url')
let express = require ('express')

const app = express();
const port = 4000


app.get('/', (req, res) => {

    res.send("")
})

app.listen( port, () =>{

    console.log(`server is running on port ${port}`)
})

//does the same thing 
// let server = http.createServer(function (req, res){

//    res.end("")
    
// })


// server.listen(4000, function(){

//    
// })

