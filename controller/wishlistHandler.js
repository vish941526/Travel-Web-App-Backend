const Wishlist = require('../model/wishlistModel');

const newWishlistHandler = async (req, res) => {
    const newWishlist = new Wishlist(req.body);
    try {
        const savedWishlist = await newWishlist.save();
        res.status(201).json(savedWishlist)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: " failed to create wishlist" });
    }
}

const wishlistDeleteHandler = async (req, res) => {
    try {
        await Wishlist.findByIdAndDelete(req.params.id);
        res.json({ message: "Hotel Removed from wishlist" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Hotel Not Removed" });
    }
}
const getAllWishlistHandler = async (req, res) => {
    try {
        const wishlist = await Wishlist.find({});
        wishlist ? res.json(wishlist) : res.json({ message: "hostel not found in wishlist" });
    } catch (err) {
        console.log(err);
        res.json(err);
    }
}

module.exports = { getAllWishlistHandler, wishlistDeleteHandler, newWishlistHandler }