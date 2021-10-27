//imports
const express = require("express");
const User = require("./models").user;


//create server & add middlewares aka plugins
const app = express();

app.use(express.json()); // body-parser

//registering some routes
app.post("/users", async (req, res, next) => {
    try {
        const email = req.body.email;
        if (!email||email ===" "){
            res.status(400).send("U succ giv email")
        } else {
            const user = await User.create(req.body);
            res.json(user);
        } 
    } catch (e) {
      next(e);
    }
  });
  



//port and listen => start the server

const PORT = 4000;
app.listen(PORT, ()=>console.log(`Welcome ur listening to radio ${PORT}`))
