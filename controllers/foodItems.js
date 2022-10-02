const FoodItem = require('../models/fooditem');
const mongoose = require('mongoose');

module.exports.validate = async (foodItemsIds) => {
    try {

        let inValidIds = foodItemsIds.filter(id => !mongoose.Types.ObjectId.isValid(id));
        if (inValidIds.length) throw new Error(`Invalid food items ids: ${inValidIds.join(', ')}`);

        let foodItems = await FoodItem.find({ _id: { $in: foodItemsIds } });

        let notAvailableFoodItems = foodItemsIds
            .filter(foodItemId => !foodItems
                .map(foodItem => foodItem._id
                    .toString())
                .includes(foodItemId));


        if (notAvailableFoodItems.length) throw new Error(`Food items with ids: ${notAvailableFoodItems.join(', ')} are not available`);

        return { foodItems };

    } catch (error) {
        return {
            success: true,
            message: error.message
        };
    }

}

module.exports.get = async (req, res) => {
    try {
        let page = req.query.page || 1;
        let limit = req.query.limit || 10;
        let foodItems = await FoodItem
            .find().select('-__v')
            .skip((page - 1) * limit).limit(limit);
        res.status(200).json({
            success: true,
            foodItems
        });
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message
        })
    }
}