var express = require("express");
var path = require("path");
 
var app = express();
app.use(express.static(path.join(__dirname,"/html")));

app.listen(8080,function(){
    console.log("Started listening on port", 8080);
    console.log('http://localhost:8080');
})