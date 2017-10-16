const db = require("./userDB.js");

module.exports.addUser = function(req, res){
  db.addUser(
    req.body.username,
    (err,dbUser)=>{
      res.json(dbUser);
    }
  )
};

module.exports.getUsers = function(req, res){
  db.getUsers(
    (err,dbUsers)=>{
      res.json(dbUsers);
    }
  )
};

module.exports.getUserById = function(req, res){
  db.getUserById(
    req.body.id,
    (err,dbUser)=>{
      res.json(dbUser);
    }
  )
};

module.exports.addClick = function(req, res){
  db.addClick(
    req.body.id,
    req.body.clicks,
    (err,dbUser)=>{
      res.json(dbUser);
    }
  )
};

module.exports.addDistance = function(req, res){
  db.addDistance(
    req.body.id,
    req.body.distance,
    (err,dbUser)=>{
      res.json(dbUser);
    }
  )
};

module.exports.addAchievement = function(req, res){
  db.addAchievement(
    req.body.id,
    req.body.achievementId,
    (err,dbUser)=>{
      res.json(dbUser);
    }
  )
};

module.exports.addUpgrade = function(req, res){
  db.addUpgrade(
    req.body.id,
    req.body.upgradeId,
    (err,dbUser)=>{
      res.json(dbUser);
    }
  )
};


