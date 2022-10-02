const mongoose = require('mongoose');


const userHashtagSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    hashtagId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hashtag' },
});


module.exports = mongoose.model('UserHashtag', userHashtagSchema);