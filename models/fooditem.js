const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
});

module.exports = mongoose.model('FoodItem', schema);