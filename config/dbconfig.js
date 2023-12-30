const mongoose = require('mongoose');
const env = require('dotenv').config();
const DB_URL = process.env.DB_URL;
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB;