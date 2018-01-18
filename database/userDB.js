const Datastore = require('nedb');
const db = new Datastore({filename: './data/users.db', autoload: true});


class User {
  constructor(username, hash) {
    this.username = username;
    this.hash = hash;
    this.data = {};
      this.data.clicks = 0;
      this.data.distance = 0;
      this.data.achievements = [];
      this.data.upgrades = [];

  }
}



function addUser(username, hash, callback) {
let user = new User(username, hash);
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

function getUserByUsername(username, callback) {
  db.findOne({username: username}, function (err, dbUser) {
    if (callback) {
      callback(err, dbUser)
      return dbUser;
    }
  })
}

function getUserById(id, callback) {
  db.findOne({id: id}, function (err, dbUser) {
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

function getTopUsers(callback) {
  db.find({}).sort({ 'data.distance': -1}).skip(0).limit(3).exec(function (err, dbUser) {
    if (callback) {
      callback(err, dbUser)
    }
  })
}

function resetUser(user, callback) {
  db.update({username: user}, {$set: {"data.clicks": -1, "data.distance":-1, "data.achievements": [], "data.upgrades": []}}, {}, function (err, dbUser) {
    if (callback) {
      callback(err, dbUser)
    }
     })
}




module.exports = {
  addUser: addUser,
  getUsers: getUsers,
  getUserByUsername: getUserByUsername,
  getUserById: getUserById,
  addClick: addClick,
  addDistance: addDistance,
  addAchievement: addAchievement,
  addUpgrade: addUpgrade,
  getTopUsers: getTopUsers,
  resetUser: resetUser
};

