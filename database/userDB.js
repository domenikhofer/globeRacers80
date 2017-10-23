const Datastore = require('nedb');
const db = new Datastore({filename: './data/users.db', autoload: true});


class User {
  constructor(username) {
    this.username = username;
    this.data = {};
      this.data.clicks = 0;
      this.data.distance = 0;
      this.data.achievements = [];
      this.data.upgrades = [];

  }
}



function addUser(username, callback) {
let user = new User(username);
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

function getUserById(id, callback) {
  db.findOne({_id: id}, function (err, dbUser) {
    if (callback) {
      callback(err, dbUser);
      return dbUser;
    }
  })
}

function addClick(id,  clicks, callback) {
  db.update({_id: id}, {$inc: {"data.clicks": clicks}}, {}, function (err, dbUser) {
    if(callback) {
      callback(err, dbUser)
    }

  })

}

function addDistance(id,  distance, callback) {
  db.update({_id: id}, {$inc: {"data.distance": distance}}, {}, function (err, dbUser) {
    if(callback) {
      callback(err, dbUser)
    }

  })
}

function addAchievement(id,  achievementId, callback) {
  db.update({_id: id}, {$push: {"data.achievements": achievementId}}, {}, function (err, dbUser) {
    if(callback) {
      callback(err, dbUser)
    }

  })
}

function addUpgrade(id,  upgradeId, callback) {
  db.update({_id: id}, {$push: {"data.upgrades": upgradeId}}, {}, function (err, dbUser) {
    if(callback) {
      callback(err, dbUser)
    }

  })
}


module.exports = {
  addUser: addUser,
  getUsers: getUsers,
  getUserById: getUserById,
  addClick: addClick,
  addDistance: addDistance,
  addAchievement: addAchievement,
  addUpgrade: addUpgrade
};
