require("dotenv").config();
const express = require ("express");
const app = express();
const myPort=process.env.PORT;



app.listen(myPort, ()=>{
    console.log(`Server is listening to the port ${myPort}`);
})