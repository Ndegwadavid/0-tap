const express = require('express');
const router = express.Router();

const usersCtrl = require('../../controllers/usersController');

router.post('/register', usersCtrl.register);
router.post('/login', usersCtrl.login);

module.exports = router;