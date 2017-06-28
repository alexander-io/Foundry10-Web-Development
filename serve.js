var express = require("express")
var app = express()
let port = 8080


app.use(express.static('public'))

app.get('/', function(req, res){

})


app.get('/programs', function(req, res){

})

app.get('/programs/', function(req, res){

})


// research
app.get('/research', function(req, res){

})


app.listen(port, function(){
  console.log('listening for requests on', port)
})
