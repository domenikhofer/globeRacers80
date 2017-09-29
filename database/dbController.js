const db = require("./db.js");

module.exports.addUser = function(req, res){
  db.addUser(
    req.body.name,
    (err,dbUser)=>{
      res.json({res:'ok'});
    }
  )
};

module.exports.getUsers = function(req, res){
  db.getUsers(
    (err,dbUser)=>{
      res.json(dbUser);
    }
  )
};
