const db = require("./achievementDB.js");

module.exports.addAchievement = function(req, res){
  db.addAchievement(
    req.body.id,
    req.body.title,
    req.body.img,
    req.body.unit,
    (err,dbAchievement)=>{
      res.json(dbAchievement);
    }
  )
};

module.exports.getAchievements = function(req, res){
  db.getAchievements(
    (err,dbAchievements)=>{
      res.json(dbAchievements);
    }
  )
};

module.exports.getAchievementById = function(req, res){
  db.getAchievementById(
    req.body.id,
    (err,dbAchievement)=>{
      res.json(dbAchievement);
    }
  )
};

