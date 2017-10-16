const db = require("./upgradeDB.js");

module.exports.addUpgrade = function(req, res){
  db.addUpgrade(
    req.body.id,
    req.body.title,
    req.body.unlocksUnit,
    req.body.unlocksCount,
    req.body.upgradeUnit,
    req.body.upgradeOperator,
    req.body.upgradeOperand,
    req.body.img,
    req.body.desc,
    (err,dbUpgrade)=>{
      res.json(dbUpgrade);
    }
  )
};

module.exports.getUpgrades = function(req, res){
  db.getUpgrades(
    (err,dbUpgrades)=>{
      res.json(dbUpgrades);
    }
  )
};

module.exports.getUpgradeById = function(req, res){
  db.getUpgradeById(
    req.body.id,
    (err,dbUpgrade)=>{
      res.json(dbUpgrade);
    }
  )
};

