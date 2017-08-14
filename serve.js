var express = require("express")
var app = express()
let port = 8080

app.use(express.static('public'))

// listen for requests from clients for index.html
// app.get('/index.html', function(req, res){
// })

// start listening infinitely
app.listen(port, function(){
  console.log('listening for requests on', port)
})
