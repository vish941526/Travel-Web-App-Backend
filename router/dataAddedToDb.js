const express = require('express');
const mongoose = require('mongoose')
const Hotel = require('../model/hostelModel');
const hotels = require('../dataBase/hostels');
const router = require('express').Router();
router.route('/').post(async (req,res)=>{
    try {
      const hotelsInDb = await Hotel.insertMany(hotels.data);
      res.json(hotelsInDb);
    } catch (err) {
        console.log(err);
        res.json({message:'not added to db'});
    }
});
module.exports = router;