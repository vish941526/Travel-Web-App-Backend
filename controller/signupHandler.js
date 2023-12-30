
const CryptoJS  = require('crypto-js');
const User = require('../model/userModel')
const signupHandler = async (req,res)=>{
    try {
        const newUser = new User({
            username:req.body.username,
            number:req.body.number,
            email:req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password,process.env.MY_SECERT_KEY).toString()
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        console.log(err);

        res.status(500).json({message:' Error creating a user'});
        
    }
}
module.exports = signupHandler;