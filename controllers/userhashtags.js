const UserHashtag = require('../models/userhashtag');
const mongoose = require('mongoose');

module.exports.findAllOrCreate = async (userId, hashtagIds) => {

    let inValidIds = hashtagIds.filter(id => !mongoose.Types.ObjectId.isValid(id));
    if (inValidIds.length) throw new Error(`Invalid Hash tag ids: ${inValidIds.join(', ')}`);

    let isValidUserId = mongoose.Types.ObjectId.isValid(userId);
    if (!isValidUserId) throw new Error(`Invalid User id: ${userId}`);

    let hashtagsInDb = await UserHashtag.find({ hashtagId: { $in: hashtagIds }, userId: userId });

    let hashtagsNotInDb = hashtagIds
        .filter(hashtag => !hashtagsInDb
            .map(hashtag => hashtag.hashtagId.toString())
            .includes(hashtag.toString())
        )
        .map(hashtag => singleHashtag(userId, hashtag));

    let hashtagsToSave = await UserHashtag.insertMany(hashtagsNotInDb);
    let savedHashtags = [...getUserHashtagsIds(hashtagsInDb), ...getUserHashtagsIds(hashtagsToSave)];

    return savedHashtags;
}

function singleHashtag(userId, hashtag) {
    return {
        _id: new mongoose.Types.ObjectId(),
        hashtagId: hashtag,
        userId: mongoose.Types.ObjectId(userId)
    }
}
function getUserHashtagsIds(hashtags) {
    return hashtags.map(hashtag => hashtag._id);
}