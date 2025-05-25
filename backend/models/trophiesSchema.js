const mongoose = require('mongoose');

const trophiesSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  boolArray: {
    type: [Boolean],
    default: Array(13).fill(false),
    validate: {
      validator: function (v) {
        return v.length === 13;
      },
      message: 'boolArray must have exactly 13 elements.',
    },
  },
});

const Trophies = mongoose.model('Trophies', trophiesSchema, 'Trophies');

module.exports = Trophies;
