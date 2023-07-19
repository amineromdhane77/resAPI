const express = require ('express');
const conndb = require('./configs/connec');
const appRoutes = require('./routes/appRoutes');
const dotenv = require('dotenv').config()
console.log(dotenv.parsed)
const server = express();
const port = 3009;

//using forma json in the req and res
server.use(express.json());
server.use("/api",appRoutes)


//call connection to db
conndb();

//listen server
server.listen(port,(err)=>{
err?console.log(err):console.log(`the server is connected on ..http://localhost:${port}`);
})

