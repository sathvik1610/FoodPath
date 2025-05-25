
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());




const Trophies = require('../models/trophiesSchema');

const updateBoolArrayAtIndex = async (email, index, value) => {
  try {
    if (index < 0 || index > 12) {
      throw new Error('Index out of bounds. It should be between 0 and 11.');
    }

    const userDoc = await Trophies.findOne({ email });

    if (!userDoc) {
     
      const newDoc = await Trophies.create({
        email,
        boolArray: Array(13).fill(false),
      });
      return newDoc.boolArray; 
    }

   
    const allFalse = userDoc.boolArray.every((val) => val === false);
    
    const updatedDoc = await Trophies.findOneAndUpdate(
      { email },
      { $set: { [`boolArray.${index}`]: value } },
      { new: true }
    );

    return updatedDoc.boolArray; 
  } catch (error) {
    console.error('Error updating boolArray:', error);
    throw error;
  }
};

const updateTrophy = async (req, res) => {
  console.log('entered the achievements function');
  const { email, index, value } = req.body;
  console.log(`Incoming request to: ${req.url}`);

  try {
    const updatedBoolArray = await updateBoolArrayAtIndex(email, index, value);

    res.status(200).json({
      success: true,
      trophies: updatedBoolArray || [], 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { updateTrophy };
