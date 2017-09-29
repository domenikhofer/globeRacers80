const Datastore = require('nedb');
const db = new Datastore({filename: './data/users.db', autoload: true});


class User {
  constructor(name) {
    this.name = name;

  }
}


function addUser(name, callback) {
let user = new User(name);
  db.insert(user, function (err, dbUser) {
    if (callback) {
      callback(err, dbUser);
    }
  });
}

function getUsers(callback) {
  db.find({}, function (err, dbUsers) {
    if (callback) {
      callback(err, dbUsers);
    }
  })
}


module.exports = {
  addUser: addUser,
  getUsers: getUsers

};

