//imports
const { user, todoitem, todolist } = require("./models");

//querries

//1. all lists plus all info of users
// async function allUsersPlusList() {
//   const lists = await todolist.findAll({
//     include: [user],
//   });

//   return lists.map((list) => list.toJSON());
// }

// allUsersPlusList().then((lists) => console.log(lists));
//2. all users with the name of lists per user
async function getUsers() {
  const allUsers = await user.findAll({
    include: { model: todolist, attributes: ["name"] },
  });
  
  return allUsers.map((user) => user.toJSON());
}

//getUsers().then((users) => users.map(user =>console.log(user)));
//3. get one user by id, with their list
async function getUserWithList(id) {
  const result = await user.findByPk(id, { include: [todolist] });
  return result.get({ plain: true });
}

//getUserWithList(1).then(user => console.log("user by id with lists", user));

//4. get important to do items with the name of the list they belong to
//nvt don't have important rn

//5. get one user by id, with their list and including the to do items
async function fullUserById(id) {
  const result = await user.findByPk(id, {
    include: [
      {
        model: todolist,
        attributes: ["name"],
        include: { model: todoitem, attributes: ["task"] }
      }
    ]
  });
  return result.get({ plain: true });
}

fullUserById(1).then(user => console.log("User with tasks", user));