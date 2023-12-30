
const Hotel = require('../model/hostelModel')
const singleHotelHandler =  async (req,res)=>{
    try {
        const { id } = req.params;
        let hotelById = await Hotel.findById(id);
         res.json(hotelById) 
    } catch (err) {
        console.log(err);
        res.status(404).json({message:'hotel is not found'});
    }
}
module.exports = singleHotelHandler;