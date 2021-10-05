let axios = require( 'axios')
let http = require('http')
let url = require('url')



let server = http.createServer(function (req, res){

   res.end("")
    
})


server.listen(4000, function(){

    console.log("server is running on port 4000")
})

