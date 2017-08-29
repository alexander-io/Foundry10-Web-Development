var express = require("express")
var app = express()
let port = 8080

app.use(express.static('public'))

// start listening infinitely
app.listen(port, function(){
  console.log('listening for requests on', port)
})
