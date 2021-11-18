const express = require("express");

const app = express();

const users = require("./MOCK_DATA");



// app.get('/',(req,res) => {
//     const b = "Welcome to homepage";
//      res.send(b);
// })

app.get('/',(req,res) => {
return res.send(users);
})

app.listen(8000, function (){
 console.log('listening on port 8000')
})





