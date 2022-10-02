
const Meal = require('../models/meal');
const mongoose = require('mongoose');
const Hashtag = require('../controllers/hashtags');
const FoodItem = require('../controllers/foodItems');
const user = require('../models/user');



module.exports.create = async (req, res) => {
    try {

        
        let body = req.body;
        let hashtags = body.hashtags;
        let foodItems = body.foodItems;
        let userId = body.userId;

        let isValidUserId = mongoose.Types.ObjectId.isValid(userId);
        if (!isValidUserId) throw new Error('Invalid user id');

        let userIdInDb = await user.find({ _id: userId });
        if (!userIdInDb) throw new Error(`User with id: ${userId} is not available`);

        let hashtagsIds = await Hashtag.findAllOrCreate(hashtags, userId);
        let validateItems = await FoodItem.validate(foodItems);

        if (validateItems.error) throw new Error(validateItems.message);
        let foodItemsIds = validateItems.foodItems.map(foodItem => foodItem._id);


        const meal = new Meal({
            _id: new mongoose.Types.ObjectId(),
            user: userId,
            hashtags: hashtagsIds,
            foodItems: foodItemsIds
        });

        let savedMeal = await meal.save();
        
        res.status(200).json({
            success: true,
            mealId: savedMeal._id
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
module.exports.get = async (req, res) => {
    try {


        let userId = req.params.userId;

        let isValidUserId = mongoose.Types.ObjectId.isValid(userId);
        if (!isValidUserId) throw new Error('Invalid user id');

        Meal.find({ user: new mongoose.Types.ObjectId(userId) })

            .populate('hashtags','name')
            .populate('foodItems','name')
            .populate('user','name')
            .exec((err, meals) => {
            if (err) throw new Error(err);
            res.status(200).json({
                success: true,
                meals
            });
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}