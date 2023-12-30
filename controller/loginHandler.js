
const jwt = require('jsonwebtoken');
const CryptoJS  = require('crypto-js');
const User = require('../model/userModel')
const loginHandler = async (req,res)=>{
    try {
        const user = await User.findOne({number: req.body.number});
        !user && res.status(401).json({message:'Incorrect Mobile No'});
        const decodedPassword = CryptoJS.AES.decrypt(user.password,process.env.MY_SECERT_KEY).toString(CryptoJS.enc.Utf8);
        decodedPassword !== req.body.password && res.status(401).json({message:'Incorrect password'});
        const { password,...rest } = user._doc;
        const accessToken = jwt.sign({username: user.username},process.env.ACCESS_TOKEN);
        res.json({...rest,accessToken});
    } catch (err) {
        console.log(err);
    }
}
module.exports = loginHandler;