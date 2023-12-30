const express = require('express');
const Hotel = require('../model/hostelModel');
const router = require('express').Router();

router.route('/').get(async (req,res)=>{
    const hotelCategory = req.query.category;
    try { 
           
        if(hotelCategory){
            var hotels =  await Hotel.find({ category : hotelCategory });
        }else{
           var hotels =  await Hotel.find({});
        }

        hotels ? res.json(hotels) : res.status(404).json({message:'data not found'});
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;