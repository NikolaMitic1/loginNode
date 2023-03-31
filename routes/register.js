const express = require('express');
const router = express.Router();

const crateUser = require('../controllers/register');

router.route('/createUser').post(crateUser);

module.exports = router;