const express = require('express');
const router = express.Router();
const db = require('./dbController.js');

router.post("/user/add/", db.addUser);
router.get("/user/",db.getUsers);


module.exports = router;
