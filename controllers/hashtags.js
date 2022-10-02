const Hashtag = require('../models/hashtag');
const UserHashtag = require('../controllers/userhashtags');
const mongoose = require('mongoose');


module.exports.findAllOrCreate = async (hashtags, userId = 0) => {

    let hashtagsInDb = await Hashtag.find({ name: { $in: hashtags } });

    let hashtagsNotInDb = hashtags
        .filter(hashtag => !hashtagsInDb
            .map(hashtag => hashtag.name)
            .includes(hashtag)
        )
        .map(hashtag => singleHashtag(hashtag));

    let hashtagsToSave = await Hashtag.insertMany(hashtagsNotInDb);
    let hashtagsIdsArrayToSave = [...getHashtagsIds(hashtagsInDb), ...getHashtagsIds(hashtagsToSave)];

    if (userId) await UserHashtag.findAllOrCreate(userId, hashtagsIdsArrayToSave);

    return hashtagsIdsArrayToSave;
}

module.exports.get = async (req, res) => {
    try {
        let page = req.query.page || 1;
        let limit = req.query.limit || 10;
        let hashtags = await Hashtag.find()
            .select('name')
            .skip((page - 1) * limit)
            .limit(limit);

        res.status(200).json({
            success: true,
            hashtags
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

function singleHashtag(hashtag) {
    return {
        _id: new mongoose.Types.ObjectId(),
        name: hashtag
    }
}
function getHashtagsIds(hashtags) {
    return hashtags.map(hashtag => hashtag._id);
}