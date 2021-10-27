const User = require("./models").user;
const {Op} =require("sequelize");
const Item = require("./models").todoitem;
//DIFFERENT QUERIES

//1. get all users
async function getAllUsers(){
    try{
        const allUsers = await User.findAll({raw: true});
        return allUsers;

    }catch(e){
        console.log(`Ooopsiedaisy there's an error. Here's the message: ${e}`);
    }
}
//getAllUsers().then(users=>console.log(users));

//2. select all rows were name === ginger, only return the first hit. pay attention to specific.name in console log
//to get only the name.
async function getSpecificUser(){
    try{
        const specificUser = await User.findOne({ where: {name: "Ginger"}});
        return specificUser;

    }catch(e){
        console.log(`Ooopsiedaisy there's an error. Here's the message: ${e}`);
    }
}
//getSpecificUser().then(specific=>console.log(specific.name));

//3. select a row by its primary key. 
async function fetchByPk(){
    try{
        const userByPk= await User.findByPk(1);
        return userByPk;

    }catch(e){
        console.log(`Ooopsiedaisy there's an error. Here's the message: ${e}`);
    }
}
//fetchByPk().then(byPk=>console.log(byPk.name, byPk.email));


//4. searches all todoitems and log them
async function fetchTodoItems(){
    try{
        const allItems= await Item.findAll({ raw: true})
        return allItems;

    }catch(e){
        console.log(`Ooopsiedaisy there's an error. Here's the message: ${e}`);
    }
}
fetchTodoItems().then(item=>console.log(item));