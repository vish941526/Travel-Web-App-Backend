const express = require('express');
const router = require('express').Router();

const categoryHandler = require('../controller/categoryHandler');

router.route('/').get( categoryHandler);

module.exports = router;