const express = require('express');
const router = require('express').Router();
const category = require('../dataBase/categories');
const Category = require('../model/categoryModel');
const categories = require('../dataBase/categories');

router.route('/').post( async(req,res)=>{
    try {
        const categories = await Category.insertMany(categories.data);
        res.json(categories.data);
    } catch (err) {
        console.log(err);
        res.json({ message: "Could not add categories to DB"});
    }
}

)
module.exports = router