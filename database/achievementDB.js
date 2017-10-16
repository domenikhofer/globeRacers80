const Datastore = require('nedb');
const db = new Datastore({filename: './data/achievements.db', autoload: true});


class Achievement {
  constructor(id, title, img, unit, count) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.unit = unit;
    this.count = count;
  }
}


function addAchievement(id, title, img, unit, count, callback) {
  let achievement = new Achievement(id, title, img, unit, count);
  db.insert(achievement, function (err, dbAchievement) {
    if (callback) {
      callback(err, dbAchievement);
    }
  });
}

function getAchievements(callback) {
  db.find({}, function (err, dbAchievements) {
    if (callback) {
      callback(err, dbAchievements);
    }
  })
}

function getAchievementById(id, callback) {
  db.findOne({id: id}, function (err, dbAchievement) {
    if (callback) {
      callback(err, dbAchievement);
      return dbAchievement;
    }
  })
}


module.exports = {
  addAchievement: addAchievement,
  getAchievements: getAchievements,
  getAchievementById: getAchievementById

};

