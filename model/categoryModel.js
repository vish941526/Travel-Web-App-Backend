const express = require('express');
const mongoose= require('mongoose');
const categorySchema = new mongoose.Schema({
    
    category: {type:String , requied:true }
})
const Category = mongoose.model('Category',categorySchema);
module.exports = Category