require("dotenv").config();
const express = require ("express");
const db = require("./config/db");

const githubRoutes = require("./routes/githubRoutes");

const app = express();
const myPort=process.env.PORT;



app.use(express.json());

app.use("/api/github", githubRoutes);


app.listen(myPort, ()=>{
    console.log(`Server is listening to the port ${myPort}`);
})