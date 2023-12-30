const express = require('express')
const mongoose = require('mongoose');


const hotelSchema = new mongoose.Schema({
    name: {type:String,requied:true},
    category: {type:String,requied:true},
    image: {type:String,requied:true},
    imageArr: {type:Array,requied:true},
    address: {type:String,requied:true},
    city: {type:String,requied:true},
    state: {type:String,requied:true},
    country: {type:String,requied:true},
    price: {type:Number,requied:true},
    rating:{type:Number,requied:true},
    numberOfBathrooms: {type:Number,requied:true},
    numberOfBeds: {type:Number,requied:true},
    numberOfguest: {type:Number,requied:true},
    numberOfBedrooms: {type:Number,requied:true},
    numberOfStudies: {type:Number,requied:true},
    hostName: {type:String,requied:true},
    hostJoinedOn: {type:String,requied:true},
    ameneties: {type:Array,requied:true},
    healthAndSafety: {type:Array,requied:true},
    houseRules: {type:Array,requied:true},
    propertyType:{type:String,requied:true},
    isCancelable:{type:Boolean,requied:true}
});

const Hotel = mongoose.model('Hotel',hotelSchema);
module.exports = Hotel;