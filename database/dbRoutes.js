const express = require('express');
const router = express.Router();
const db = require('./dbController.js');

router.post("/user/add/", db.addUser);
router.post("/user/add/click", db.addClick);
router.post("/user/add/distance", db.addDistance);
router.post("/user/add/achievement", db.addAchievement);
router.post("/user/add/upgrade", db.addUpgrade);
router.get("/user/get/all",db.getUsers);
router.post("/user/get/byId",db.getUserById);


module.exports = router;

