const express = require('express');
const signupHandler = require('../controller/signupHandler');
const loginHandler = require('../controller/loginHandler');
const router = express.Router();

router.route('/register')
    .post(signupHandler);

router.route('/login')
    .post(loginHandler);

module.exports = router;