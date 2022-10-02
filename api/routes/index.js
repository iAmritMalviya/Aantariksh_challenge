const express = require('express');
const router = express.Router();
const {Meal,FoodItem,Hashtag} = require('../../controllers/index');



router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.post('/meal', Meal.create);
router.get('/meals/:userId', Meal.get);
router.get('/fooditems', FoodItem.get);
router.get('/hashtags', Hashtag.get);

module.exports = router;