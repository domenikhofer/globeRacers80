const Datastore = require('nedb');
const db = new Datastore({filename: './data/upgrades.db', autoload: true});


class Upgrade {
  constructor(id, title, unlocksUnit, unlocksCount, upgradeUnit, upgradeOperator, upgradeOperand, img, desc) {
    this.id = id;
    this.title = title;
    this.unlocks = {};
    this.unlocks.unit = unlocksUnit;
    this.unlocks.count = unlocksCount;
    this.upgrade = {};
    this.upgrade.unit = upgradeUnit;
    this.upgrade.operator = upgradeOperator;
    this.upgrade.operand = upgradeOperand;
    this.img = img;
    this.description = desc;
  }
}



function addUpgrade(id, title, unlocksUnit, unlocksCount, upgradeUnit, upgradeOperator, upgradeOperand, img, desc, callback) {
  let upgrade = new Upgrade(id, title, unlocksUnit, unlocksCount, upgradeUnit, upgradeOperator, upgradeOperand, img, desc);
  db.insert(upgrade, function (err, dbUpgrade) {
    if (callback) {
      callback(err, dbUpgrade);
    }
  });
}

function getUpgrades(callback) {
  db.find({}, function (err, dbUpgrades) {
    if (callback) {
      callback(err, dbUpgrades);
    }
  })
}

function getUpgradeById(id, callback) {
  db.findOne({id: id}, function (err, dbUpgrade) {
    if (callback) {
      callback(err, dbUpgrade);
      return dbUpgrade;
    }
  })
}


module.exports = {
  addUpgrade: addUpgrade,
  getUpgrades: getUpgrades,
  getUpgradeById: getUpgradeById

};

