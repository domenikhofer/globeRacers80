const express = require('express');
const router = express.Router();
const userDB = require('./userDBcontroller.js');
const achievementDB = require('./achievementDBcontroller.js');
const upgradeDB = require('./upgradeDBcontroller.js');

router.post("/user/add/", userDB.addUser);
router.post("/user/add/click", userDB.addClick);
router.post("/user/add/distance", userDB.addDistance);
router.post("/user/add/achievement", userDB.addAchievement);
router.post("/user/add/upgrade", userDB.addUpgrade);
router.post("/user/get/byUsername",userDB.getUserByUsername);
router.post("/user/get/byId",userDB.getUserById);
router.get("/user/get/all",userDB.getUsers);
router.get("/user/get/topUsers",userDB.getTopUsers);


router.post("/achievement/add/", achievementDB.addAchievement);
router.post("/achievement/get/byId", achievementDB.getAchievementById);
router.get("/achievement/get/all", achievementDB.getAchievements);

router.post("/upgrade/add/", upgradeDB.addUpgrade);
router.post("/upgrade/get/byId", upgradeDB.getUpgradeById);
router.get("/upgrade/get/all", upgradeDB.getUpgrades);

module.exports = router;
