const mongoose = require('mongoose');

const consumedFoodsSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    consumedFoods: {
      type: [{
        foodItem: String
      }],
      default: []
    }
  }
);

const ConsumedFoods = mongoose.model('ConsumedFoods', consumedFoodsSchema, 'ConsumedFoods');

module.exports = ConsumedFoods;
