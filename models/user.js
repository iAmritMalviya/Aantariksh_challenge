const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String
    // rest
});

module.exports = mongoose.model('User', schema);