const express = require('express');
const verifyUser = require('../middleWare/verifyUser');
const router = express.Router();
const { getAllWishlistHandler, wishlistDeleteHandler, newWishlistHandler } = require('../controller/wishlistHandler')

router.route('/').post(verifyUser, newWishlistHandler);

router.route('/:id').delete(verifyUser, wishlistDeleteHandler)

router.route('/').get(verifyUser, getAllWishlistHandler)


module.exports = router;