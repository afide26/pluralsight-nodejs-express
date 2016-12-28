const express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/src/views"));

app.get("/", (req, res)=>{
  res.send("Hello from Express");
});

app.get("/books", (req, res)=>{
  res.send("Hello from Books");
});

app.listen(port, (err)=>{
  if(!err){
    console.log(`Listening at port ${port}`);
  }
});