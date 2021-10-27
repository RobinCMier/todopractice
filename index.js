//imports
const express = require("express");
const User = require("./models").user;


//create server & add middlewares aka plugins
const app = express();

app.use(express.json()); // body-parser

//registering some routes
app.post("/echo", (req, res) => {
    res.json(req.body);
  });

// app.get('/users', async (req, res, next) => {
//     try {

//     } catch(e) {
//         next(e) // calling express error handler
//     }
// })


//port and listen => start the server

const PORT = 4000;
app.listen(PORT, ()=>console.log(`Welcome ur listening to radio ${PORT}`))
