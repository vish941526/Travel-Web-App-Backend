
const Category = require('../model/categoryModel');
const categoryHandler = async (req, res) => {
    try {
        const categories = await Category.find({});
        categories ? res.json(categories) : res.status(404).json({ message: 'data not found' });
    } catch (error) {
        console.log(error);
    }
}

module.exports = categoryHandler;