const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    hashtags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hashtag' }],
    timestamp: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    foodItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' }],
});

module.exports = mongoose.model('Meal', schema);